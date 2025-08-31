'use client';

import { useState, useEffect } from 'react';
import { Quote, getRandomQuote } from '@/data/quotes';

interface QuoteCardProps {
  onShare: (quote: Quote) => void;
}

export default function QuoteCard({ onShare }: QuoteCardProps) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [alphaUnlocked, setAlphaUnlocked] = useState(false);
  const [streak, setStreak] = useState(0);

  // Load streak from localStorage on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedStreak = localStorage.getItem('quoteStreak');
      const lastVisit = localStorage.getItem('lastVisit');
      const alphaStatus = localStorage.getItem('alphaUnlocked');
      
      // Initialize streak
      if (savedStreak) {
        setStreak(parseInt(savedStreak, 10));
      }
      
      // Check if alpha pack is unlocked
      if (alphaStatus === 'true') {
        setAlphaUnlocked(true);
      }
      
      // Check if this is a new day
      const today = new Date().toDateString();
      if (lastVisit !== today) {
        localStorage.setItem('lastVisit', today);
      }
      
      // Load initial quote
      loadNewQuote();
    }
  }, []);

  const loadNewQuote = () => {
    setQuote(getRandomQuote(alphaUnlocked));
    updateStreak();
  };

  const updateStreak = () => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem('lastVisit');
      
      // If this is a new day, increment streak
      if (lastVisit !== today) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem('quoteStreak', newStreak.toString());
        localStorage.setItem('lastVisit', today);
        
        // Unlock alpha pack at 5-day streak
        if (newStreak >= 5 && !alphaUnlocked) {
          setAlphaUnlocked(true);
          localStorage.setItem('alphaUnlocked', 'true');
          alert('🔓 Alpha Pack Unlocked! You now have access to exclusive quotes.');
        }
      }
    }
  };

  const handleShare = () => {
    if (quote) {
      onShare(quote);
    }
  };

  if (!quote) return <div>Loading...</div>;

  return (
    <>
      <main className="rm-card">
        <blockquote id="quote" className="rm-quote">{quote.text}</blockquote>
        <div id="signature" className="rm-sign">Rok Meško</div>
      </main>
      
      <div className="rm-actions">
        <button id="next" onClick={loadNewQuote} className="rm-btn">
          Next Quote
        </button>
        <button id="share" onClick={handleShare} className="rm-btn rm-btn--gold">
          Share to Farcaster
        </button>
      </div>
      
      {alphaUnlocked && (
        <p id="streak" className="rm-streak">
          Alpha Pack Unlocked 🔓
        </p>
      )}
      
      {!alphaUnlocked && (
        <p id="streak" className="rm-streak">
          Streak: {streak}/5 days to unlock <span>Alpha Pack</span>
        </p>
      )}
    </>
  );
}
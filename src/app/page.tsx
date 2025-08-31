'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import QuoteCard from '@/components/QuoteCard';
import { Quote, getRandomQuote } from '@/data/quotes';

export default function Home() {
  const [sharedQuote, setSharedQuote] = useState<Quote | null>(null);

  const searchParams = useSearchParams();
  
  useEffect(() => {
    const quoteParam = searchParams.get('quote');
    if (quoteParam) {
      setSharedQuote({
        id: 0,
        text: decodeURIComponent(quoteParam)
      });
    }
  }, [searchParams]);

  const handleShare = (quote: Quote) => {
    setSharedQuote(quote);
    
    // Create the share URL with OG image
    const ogImageUrl = `${window.location.origin}/api/og?quote=${encodeURIComponent(quote.text)}`;
    const shareUrl = `${window.location.origin}?quote=${encodeURIComponent(quote.text)}`;
    
    // For Farcaster, we can copy a formatted message to clipboard
    const farcasterMessage = `"${quote.text}" - Rok Meško\n\n${shareUrl}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(farcasterMessage)
      .then(() => {
        alert('Quote copied to clipboard! You can now paste it into Farcaster.');
      })
      .catch(err => {
        console.error('Error copying to clipboard:', err);
        
        // Fallback - if Web Share API is available
        if (navigator.share) {
          navigator.share({
            title: 'Rok Meško – Power Quotes',
            text: `"${quote.text}" - Rok Meško`,
            url: shareUrl,
          }).catch(shareErr => {
            console.error('Error sharing:', shareErr);
          });
        }
      });
  };

  return (
    <div className="rm-wrap">
      <header className="rm-head">
        <img className="rm-icon" src="/icon-1024.svg" alt="RM" />
        <h1 id="title" className="rm-title">Rok Meško — Power Quotes</h1>
      </header>
      
      <QuoteCard onShare={handleShare} />
      
      <footer id="footer" className="rm-foot">
        Daily power quotes by Rok Meško. Share your strength.
      </footer>
    </div>
  );
}
'use client';

import { useCallback, useState } from 'react';

/**
 * Preprost seznam citatov za demo. Če imaš že svojo logiko/vir,
 * samo zamenjaj QUOTES in handleNextQuote logiko.
 */
const QUOTES = [
  'Silence builds empires.',
  'No loyalty without leverage.',
  'Time is leverage, not a gift.',
  'Invest in tempo, not in doubts.',
];

export default function HomePage() {
  const [idx, setIdx] = useState(0);
  const quote = QUOTES[idx % QUOTES.length];

  const handleNextQuote = useCallback(() => {
    setIdx((n) => (n + 1) % QUOTES.length);
  }, []);

  const handleShare = useCallback(() => {
    // Mini-app share: odpri /share z query parametrom quote
    const url = `/share?quote=${encodeURIComponent(quote)}`;
    // v mini-app panelu je najbolje preusmeriti v istem oknu
    window.location.href = url;
  }, [quote]);

  return (
    <>
      <header className="rm-head">
        <img className="rm-icon" src="/icon-1024.svg" alt="RM" />
        <h1 id="title" className="rm-title">Rok Meško — Power Quotes</h1>
      </header>

      <section className="rm-card">
        <p className="rm-quote">{quote}</p>
        <p className="rm-sign">Rok Meško</p>
      </section>

      <div className="rm-actions">
        <button type="button" className="rm-btn" onClick={handleNextQuote}>
          Next Quote
        </button>
        <button type="button" className="rm-btn rm-btn--gold" onClick={handleShare}>
          Share to Farcaster
        </button>
      </div>

      <p className="rm-streak">Streak: <span>0/5</span> days to unlock Alpha Pack</p>
      <p className="rm-foot">Daily power quotes by Rok Meško. Share your strength.</p>
    </>
  );
}

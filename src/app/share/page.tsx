'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SharePage() {
  const searchParams = useSearchParams();
  const [quote, setQuote] = useState<string>('');
  
  useEffect(() => {
    const quoteParam = searchParams.get('quote');
    if (quoteParam) {
      setQuote(decodeURIComponent(quoteParam));
    }
  }, [searchParams]);

  if (!quote) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <p>No quote found. Go back to the <a href="/" className="underline">homepage</a>.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="quote-card">
        <p className="quote-text">{quote}</p>
        <p className="signature">Rok Meško</p>
      </div>
      
      <div className="mt-6">
        <a href="/" className="btn">
          Get Your Own Quote
        </a>
      </div>
    </div>
  );
}
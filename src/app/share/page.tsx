'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

type ShareState = {
  quote: string;
  castHash: string;
  castFid: string;
  viewerFid: string;
};

function ShareContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<ShareState>({
    quote: '',
    castHash: '',
    castFid: '',
    viewerFid: '',
  });

  useEffect(() => {
    // Preberi URL parametre, ki jih Farcaster pošlje v share-extensionu
    const quoteParam = searchParams.get('quote') || '';
    const castHash = searchParams.get('castHash') || '';
    const castFid = searchParams.get('castFid') || '';
    const viewerFid = searchParams.get('viewerFid') || '';

    setData({
      quote: quoteParam ? decodeURIComponent(quoteParam) : '',
      castHash,
      castFid,
      viewerFid,
    });
  }, [searchParams]);

  const hasCastContext = !!(data.castHash || data.castFid || data.viewerFid);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-[#F5C518]/30 bg-[#0b0b0b]/70 shadow-[inset_0_0_60px_rgba(245,197,24,0.08)] p-6">
        {hasCastContext && (
          <div className="mb-6 text-sm text-[#F5C518]/80">
            <div className="font-medium">Shared Cast Context</div>
            {data.castHash && (
              <div className="mt-1 break-all">
                Hash: <span className="font-mono">{data.castHash}</span>
              </div>
            )}
            <div className="mt-1">
              Author FID: <span className="font-mono">{data.castFid || '—'}</span>
            </div>
            <div className="mt-1">
              Viewer FID: <span className="font-mono">{data.viewerFid || '—'}</span>
            </div>
          </div>
        )}

        {data.quote ? (
          <>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5C518] leading-snug">
                {data.quote}
              </p>
              <p className="mt-4 text-right italic text-[#F5C518]/80">— Rok Meško</p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-b from-[#FAD860] to-[#D9A302] text-black font-semibold shadow-[0_10px_30px_rgba(245,197,24,0.25)] hover:translate-y-px transition"
              >
                Get Your Own Quote
              </a>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-neutral-300">No quote found.</p>
            <div className="mt-6">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#F5C518] text-black font-semibold hover:translate-y-px transition"
              >
                Open Power Quotes
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SharePage() {
  // Suspense zaradi useSearchParams v App Routerju
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading…</div>}>
      <ShareContent />
    </Suspense>
  );
}

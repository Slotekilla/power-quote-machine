// src/app/head.tsx
export default function Head() {
  const content =
    '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=embed","button":{"title":"Open","action":{"type":"open-url","url":"https://quote.meskobrand.eu/"}}}';

  return (
    <>
      {/* Farcaster Mini App embed — oba formata, isti JSON */}
      <meta property="fc:miniapp" content={content} />
      <meta name="fc:miniapp" content={content} />

      {/* OG/Twitter (ne vpliva na validacijo, a je prav) */}
      <meta property="og:title" content="Rok Meško — Power Quotes" />
      <meta property="og:description" content="Daily power quotes by Rok Meško. Share your strength." />
      <meta property="og:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=embed" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

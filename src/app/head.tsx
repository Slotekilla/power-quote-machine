// src/app/head.tsx
export default function Head() {
  const miniappContent =
    '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_miniapp","name":"Power Quotes","url":"https://quote.meskobrand.eu","splashImageUrl":"https://quote.meskobrand.eu/splash.png","splashBackgroundColor":"#000000"}}}';
  
  const frameContent =
    '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_frame","name":"Power Quotes","url":"https://quote.meskobrand.eu","splashImageUrl":"https://quote.meskobrand.eu/splash.png","splashBackgroundColor":"#000000"}}}';

  return (
    <>
      {/* Farcaster Mini App embed — oba formata */}
      <meta property="fc:miniapp" content={miniappContent} />
      <meta name="fc:miniapp" content={miniappContent} />
      <meta name="fc:frame" content={frameContent} />

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

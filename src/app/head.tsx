// src/app/head.tsx
export default function Head() {
  return (
    <>
      {/* Farcaster Mini App EMBED – 1 vrstica, veljaven JSON */}
      <meta
        property="fc:miniapp"
        content='{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=3","button":{"title":"Open","action":{"type":"open-url","url":"https://quote.meskobrand.eu/"}},"actions":[{"label":"Open","url":"https://quote.meskobrand.eu/"}]}'
      />

      {/* OG/Twitter (ne vpliva na valid, je pa prav) */}
      <meta property="og:title" content="Rok Meško — Power Quotes" />
      <meta property="og:description" content="Daily power quotes by Rok Meško. Share your strength." />
      <meta property="og:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=3" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

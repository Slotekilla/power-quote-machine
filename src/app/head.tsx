// src/app/head.tsx
export default function Head() {
  const miniappContent =
    '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_miniapp","name":"Power Quotes","url":"https://quote.meskobrand.eu"}}}';
  
  const frameContent =
    '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_miniapp","name":"Power Quotes","url":"https://quote.meskobrand.eu"}}}';

  return (
    <>
      {/* Farcaster Mini App embed — both formats */}
      <meta property="fc:miniapp" content={miniappContent} />
      <meta name="fc:miniapp" content={miniappContent} />
      <meta property="fc:frame" content={frameContent} />
      <meta name="fc:frame" content={frameContent} />
    </>
  );
}

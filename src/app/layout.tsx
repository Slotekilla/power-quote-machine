// src/app/layout.tsx
import type { Metadata } from 'next';
import MiniAppInit from '../components/miniapp-init';

export const metadata: Metadata = {
  title: 'Rok Meško — Power Quotes',
  description: 'Daily power quotes by Rok Meško. Share your strength.',
  openGraph: {
    title: 'Rok Meško — Power Quotes',
    description: 'Daily power quotes by Rok Meško. Share your strength.',
    url: 'https://quote.meskobrand.eu',
    images: [
      {
        url: 'https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png',
        width: 1200,
        height: 800,
        alt: 'Rok Meško — Power Quotes',
      },
    ],
    type: 'website',
    siteName: 'Power Quotes',
  },
  themeColor: '#000000',
  icons: {
    icon: [{ url: '/icon-1024.png', sizes: '1024x1024', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Farcaster Mini App embed config (ena, veljavna različica) */}
        <meta
          property="fc:miniapp"
          content='{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png","button":{"title":"Open","action":{"type":"launch_frame","name":"Rok Meško — Power Quotes","url":"https://quote.meskobrand.eu/"}}}'
        />

        {/* OG/Twitter – za kartice */}
        <meta property="og:title" content="Rok Meško — Power Quotes" />
        <meta
          property="og:description"
          content="Daily power quotes by Rok Meško. Share your strength."
        />
        <meta
          property="og:image"
          content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <body>
        {/* Init SDK (skrije splash in označi ready) */}
        <MiniAppInit />

        {/* Wrapper za kompaktni layout */}
        <div className="miniapp-root">
          {children}
        </div>
      </body>
    </html>
  );
}

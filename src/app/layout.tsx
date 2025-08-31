import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'Rok Meško — Power Quotes',
  description: 'Daily power quotes by Rok Meško. Share your strength.',
  openGraph: {
    title: 'Rok Meško — Power Quotes',
    description: 'Daily power quotes by Rok Meško. Share your strength.',
    images: ['/rok-mesko-share-card-1200x800.svg'],
  },
  other: {
    'fc:miniapp': 'true',
    'theme-color': '#0A0A0A',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
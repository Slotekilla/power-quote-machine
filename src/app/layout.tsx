import './globals.css';
import type { Metadata } from 'next';

export const metadata = {
  title: "Rok Meško — Power Quotes",
  description: 'Daily power quotes by Rok Meško. Share your strength.',
  other: {
    "fc:miniapp": '{"version":"1","actions":[{"label":"Launch Mini App","url":"https://app.meskobrand.eu"}]}'
  },
  openGraph: {
    title: "Rok Meško — Power Quotes",
    description: 'Daily power quotes by Rok Meško. Share your strength.',
    images: ["https://app.meskobrand.eu/rok-mesko-share-card-1200x800.png"]
  },
  themeColor: "#0A0A0A"
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
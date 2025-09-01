// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rok Meško — Power Quotes",
  description: "Daily power quotes by Rok Meško. Share your strength.",
  openGraph: {
    title: "Rok Meško — Power Quotes",
    description: "Daily power quotes by Rok Meško. Share your strength.",
    url: "https://quote.meskobrand.eu",
    images: [
      {
        url: "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png",
        width: 1200,
        height: 800,
        alt: "Rok Meško — Power Quotes",
      },
    ],
    type: "website",
    siteName: "Power Quotes",
  },
  // barva za embed in odtenek na splashu
  themeColor: "#000000",
  // fallback favicons, če jih potrebuje
  icons: {
    icon: [
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
  // Next Metadata včasih doda <meta name="...">.
  // Mini Apps včasih zahtevajo PROPERTY. Spodaj dodamo oboje (glej <head>).
};

// ⚠️ Poleg Metadata eksplicitno dodamo <meta> z "property" in "name".
// To zagotovi, da embed validator vidi fc:miniapp vedno.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<head>
  <meta
    property="fc:miniapp"
    content='{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png","button":{"title":"Open","action":{"type":"launch_frame","name":"Rok Meško - Power Quotes","url":"https://quote.meskobrand.eu/"}}}'
  />

  {/* OG/Twitter – pusti, kar že imaš */}
  <meta property="og:title" content="Rok Meško — Power Quotes" />
  <meta property="og:description" content="Daily power quotes by Rok Meško. Share your strength." />
  <meta property="og:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="800" />
  <meta name="twitter:card" content="summary_large_image" />
</head>




      <body>{children}</body>
    </html>
  );
}

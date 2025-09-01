<head>
  {/* Farcaster Mini App meta */}
  <meta
    property="fc:miniapp"
    content='{"version":"1","actions":[{"label":"Open","url":"https://quote.meskobrand.eu"}]}'
  />

  {/* Open Graph */}
  <meta property="og:title" content="Rok Meško – Power Quotes" />
  <meta property="og:description" content="Daily power quotes by Rok Meško. Share your strength." />
  <meta property="og:url" content="https://quote.meskobrand.eu" />
  <meta property="og:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="800" />

  {/* Twitter fallback */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rok Meško – Power Quotes" />
  <meta name="twitter:description" content="Daily power quotes by Rok Meško. Share your strength." />
  <meta name="twitter:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png" />
</head>
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
        {/* Mini App JSON – property IN name, da pokrijemo oba načina branja */}
        <meta
          property="fc:miniapp"
          content={'{"version":"1","actions":[{"label":"Launch Mini App","url":"https://quote.meskobrand.eu"}]}'}
        />
        <meta
          name="fc:miniapp"
          content={'{"version":"1","actions":[{"label":"Launch Mini App","url":"https://quote.meskobrand.eu"}]}'}
        />

        {/* OG – eksplicitne dimenzije (nekateri validatorji jih hočejo) */}
        <meta property="og:title" content="Rok Meško — Power Quotes" />
        <meta property="og:description" content="Daily power quotes by Rok Meško. Share your strength." />
        <meta property="og:url" content="https://quote.meskobrand.eu" />
        <meta property="og:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Power Quotes" />

        {/* Twitter (nekateri embed previewi ga upoštevajo) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rok Meško — Power Quotes" />
        <meta name="twitter:description" content="Daily power quotes by Rok Meško. Share your strength." />
        <meta name="twitter:image" content="https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

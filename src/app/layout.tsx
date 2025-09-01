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
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
};

// ⚠️ Poleg Metadata eksplicitno dodamo <meta> z "property" in "name".
// To zagotovi, da embed validator vidi fc:miniapp vedno.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="fc:miniapp"
          content='{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png","button":{"title":"Get Inspired","action":{"type":"launch_frame","name":"Power Quotes","url":"https://quote.meskobrand.eu","splashImageUrl":"https://quote.meskobrand.eu/splash.png","splashBackgroundColor":"#000000"}}}'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

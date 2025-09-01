// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MiniAppInit from "../components/miniapp-init"; // popravi pot, če rabiš

export const metadata: Metadata = {
  title: "Rok Meško — Power Quotes",
  description: "Daily power quotes by Rok Meško. Share your strength.",
  openGraph: {
    title: "Rok Meško — Power Quotes",
    description: "Daily power quotes by Rok Meško. Share your strength.",
    url: "https://quote.meskobrand.eu",
    images: [
      {
        url: "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // točno po shemi
  const fcMiniApp = JSON.stringify({
    version: "1",
    imageUrl: "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8",
    aspectRatio: "3:2",
    button: {
      title: "Open",
      action: {
        type: "launch_miniapp",
        url: "https://quote.meskobrand.eu/",
      },
    },
  });

  return (
    <html lang="en">
      <head>
        {/* Farcaster Mini App embed */}
        <meta property="fc:miniapp" content={fcMiniApp} />
        <meta name="fc:miniapp" content={fcMiniApp} />

        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <MiniAppInit />
        <div className="rm-wrap">{children}</div>
      </body>
    </html>
  );
}

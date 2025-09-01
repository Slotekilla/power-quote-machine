// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MiniAppInit from "../components/miniapp-init"; // popravi pot, če imaš alias @/

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
  icons: { icon: [{ url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Farcaster Mini App embed JSON (VALID)
  const fcMiniApp = JSON.stringify({
    version: "1",
    imageUrl: "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=5",
    button: {
      title: "Open",
      action: {
        type: "launch_miniapp",                // << ključni popravek (ne "open-url")
        url: "https://quote.meskobrand.eu/",
      },
    },
  });

  return (
    <html lang="en">
      <head>
        {/* Farcaster Mini App embed (oba formata za zanesljivost) */}
        <meta property="fc:miniapp" content={fcMiniApp} />
        <meta name="fc:miniapp" content={fcMiniApp} />

        {/* Twitter / OG fallback (ne vpliva na validacijo, je pa prav) */}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        {/* skrije splash v Warpcastu */}
        <MiniAppInit />
        {/* kompaktna širina za mini-app panel */}
        <div className="rm-wrap">{children}</div>
      </body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const miniappContent = '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_miniapp","name":"Power Quotes","url":"https://quote.meskobrand.eu"}}}';
const frameContent = '{"version":"1","imageUrl":"https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8","button":{"title":"Get Inspired","action":{"type":"launch_miniapp","name":"Power Quotes","url":"https://quote.meskobrand.eu"}}}';

export const metadata: Metadata = {
  title: "Rok Meško — Power Quotes",
  description: "Daily power quotes by Rok Meško. Share your strength.",
  keywords: "quotes, motivation, inspiration, power, strength, daily quotes, Rok Meško",
  authors: [{ name: "Rok Meško", url: "https://rokmesko.com" }],
  creator: "Rok Meško",
  publisher: "Rok Meško",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://quote.meskobrand.eu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rok Meško — Power Quotes",
    description: "Daily power quotes by Rok Meško. Share your strength.",
    url: "https://quote.meskobrand.eu",
    siteName: "Power Quotes",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8",
        width: 1200,
        height: 800,
        alt: "Rok Meško – Power Quotes",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rok Meško — Power Quotes",
    description: "Daily power quotes by Rok Meško. Share your strength.",
    images: ["https://quote.meskobrand.eu/rok-mesko-share-card-1200x800.png?v=8"],
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
  other: {
    'fc:miniapp': miniappContent,
    'fc:frame': frameContent,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

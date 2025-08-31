// app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: "Rok Meško — Power Quotes",
  other: {
    // Farcaster Mini App embed
    "fc:miniapp": '{"version":"1","actions":[{"label":"Launch Mini App","url":"https://power-quote-machine.vercel.app"}]}'
  },
  openGraph: {
    title: "Rok Meško — Power Quotes",
    images: ["https://power-quote-machine.vercel.app/rok-mesko-share-card-1200x800.png"]
  },
  themeColor: "#0A0A0A"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

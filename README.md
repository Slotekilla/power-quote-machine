# Rok Meško – Power Quotes

A Farcaster Mini App that displays random powerful quotes by Rok Meško. Users can refresh for a new quote and share the card directly to their Farcaster feed.

## Features

- Random quote display with elegant black and gold design
- "Next Quote" button to load another random quote
- "Share to Farcaster" button to share the current quote
- Streak system: visit 5 days in a row to unlock exclusive "Alpha Pack" quotes
- Farcaster Mini App embed support

## Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- Farcaster Mini App API

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment

1. Update the `.env.local` file with your domain:

```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

2. Build and deploy to Vercel or Netlify:

```bash
npm run build
```

3. Test using Warpcast embed preview.

## Farcaster Manifest

The app includes a Farcaster manifest at `/.well-known/farcaster.json` with the following:

```json
{
  "name": "Rok Meško – Power Quotes",
  "description": "Daily power quotes by Rok Meško. Share your strength.",
  "icon": "https://yourdomain.com/icon.svg",
  "homeUrl": "https://yourdomain.com"
}
```

## Quote Database

The app includes 20 standard quotes and 3 exclusive "Alpha Pack" quotes that are unlocked after a 5-day streak.

## License

ISC# power-quote-machine

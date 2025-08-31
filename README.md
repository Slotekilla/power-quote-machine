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

## Deployment to Vercel

### Quick Deploy

1. **Fork this repository** to your GitHub account

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Vercel will automatically detect it's a Next.js project

3. **Set Environment Variables:**
   - In Vercel dashboard, go to your project settings
   - Add environment variable:
     ```
     NEXT_PUBLIC_BASE_URL=https://your-project-name.vercel.app
     ```
   - Replace `your-project-name` with your actual Vercel project name

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production environment variables
vercel env add NEXT_PUBLIC_BASE_URL
```

### Post-Deployment

1. Update the Farcaster manifest URLs in your code to use your actual domain
2. Test using Warpcast embed preview
3. Verify all API routes work correctly

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

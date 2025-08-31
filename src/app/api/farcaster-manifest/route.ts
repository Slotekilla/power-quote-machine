import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    name: 'Rok Meško – Power Quotes',
    description: 'Daily power quotes by Rok Meško. Share your strength.',
    icon: 'https://app.meskobrand.eu/rok-mesko-icon-1024.png',
    homeUrl: 'https://app.meskobrand.eu',
  };

  return NextResponse.json(manifest);
}
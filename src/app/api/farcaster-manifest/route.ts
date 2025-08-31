import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    name: 'Rok Meško – Power Quotes',
    description: 'Daily power quotes by Rok Meško. Share your strength.',
    icon: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'}/icon.svg`,
    homeUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com',
  };

  return NextResponse.json(manifest);
}
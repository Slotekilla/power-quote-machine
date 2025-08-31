import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const quote = searchParams.get('quote') || 'Money respects only tempo.';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          padding: '40px',
          position: 'relative',
          border: '4px solid #FFD700',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFD700',
            fontSize: '48px',
            fontWeight: 'bold',
            maxWidth: '80%',
          }}
        >
          {quote}
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            color: '#FFD700',
            fontSize: '32px',
            fontStyle: 'italic',
          }}
        >
          Rok Meško
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 800,
    },
  );
}
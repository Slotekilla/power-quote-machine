import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Rok Meško – Power Quotes';
export const size = {
  width: 1200,
  height: 800,
};

export default function Image() {
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
          Rok Meško – Power Quotes
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
    size,
  );
}
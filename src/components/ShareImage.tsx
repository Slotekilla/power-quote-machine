'use client';

import { useEffect, useRef } from 'react';

interface ShareImageProps {
  quote: string;
}

export default function ShareImage({ quote }: ShareImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions (3:2 ratio)
    canvas.width = 1200;
    canvas.height = 800;

    // Draw background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw border
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Draw quote text
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 48px Montserrat, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap the quote
    const words = quote.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < canvas.width - 120) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // Draw the wrapped text
    const lineHeight = 60;
    const totalTextHeight = lines.length * lineHeight;
    const textY = (canvas.height - totalTextHeight) / 2;

    lines.forEach((line, i) => {
      ctx.fillText(line, canvas.width / 2, textY + i * lineHeight);
    });

    // Draw signature
    ctx.font = 'italic 32px Montserrat, "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Rok Meško', canvas.width - 60, canvas.height - 60);

  }, [quote]);

  return (
    <canvas 
      ref={canvasRef} 
      className="hidden" // Hide the canvas as it's just for generating the image
    />
  );
}
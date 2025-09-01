'use client';

import { useEffect } from 'react';

interface FarcasterHeadProps {
  miniappContent: string;
  frameContent: string;
}

export default function FarcasterHead({ miniappContent, frameContent }: FarcasterHeadProps) {
  useEffect(() => {
    // Create and append fc:miniapp meta tag
    const miniappMeta = document.createElement('meta');
    miniappMeta.setAttribute('property', 'fc:miniapp');
    miniappMeta.setAttribute('content', miniappContent);
    document.head.appendChild(miniappMeta);

    // Create and append fc:frame meta tag
    const frameMeta = document.createElement('meta');
    frameMeta.setAttribute('property', 'fc:frame');
    frameMeta.setAttribute('content', frameContent);
    document.head.appendChild(frameMeta);

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      document.head.removeChild(miniappMeta);
      document.head.removeChild(frameMeta);
    };
  }, [miniappContent, frameContent]);

  return null;
}
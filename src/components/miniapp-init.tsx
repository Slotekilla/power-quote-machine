'use client';

import { useEffect } from 'react';

export default function MiniAppInit() {
  useEffect(() => {
    (async () => {
      try {
        const sdk = (await import('@farcaster/miniapp-sdk')).default;
        await sdk.actions.ready();
      } catch {
        // Če app ni v Farcaster mini app kontekstu, ignorira
      }
    })();
  }, []);

  return null;
}

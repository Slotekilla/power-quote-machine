import { Suspense } from 'react';
import HomeClient from './home-client';

export const dynamic = 'force-dynamic';
export const fetchCache = 'default-no-store';
export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#F5C518]">Loading…</div>}>
      <HomeClient />
    </Suspense>
  );
}
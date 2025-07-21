// src/components/layout/PageWrapper.tsx

"use client"; // This is the most important line.

import { Suspense } from 'react';
import { ClientLayoutComponents } from '@/components/layout/ClientLayoutComponents';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// This component acts as a single entry point for all layout components
// that need to be client-side.
export function PageWrapper() {
  return (
    <>
      <ClientLayoutComponents />
      
      {/* 
        This Suspense boundary isolates Google Analytics, which uses
        useSearchParams() and usePathname(), solving the build error.
      */}
      <Suspense fallback={null}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics />
        )}
      </Suspense>
    </>
  );
}
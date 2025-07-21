// src/components/layout/PageWrapper.tsx

"use client";

import { Suspense } from 'react';
import { ClientLayoutComponents } from '@/components/layout/ClientLayoutComponents';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export function PageWrapper() {
  return (
    <>
      <ClientLayoutComponents />
      
      <Suspense fallback={null}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics />
        )}
      </Suspense>
    </>
  );
}

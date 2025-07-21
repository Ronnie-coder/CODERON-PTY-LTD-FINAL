// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from 'next/font/google';
import { Suspense } from 'react';
import Footer from "@/components/Footer";
import "@/styles/main.scss";
import { ClientLayoutComponents } from '@/components/layout/ClientLayoutComponents';
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Your font setup is perfect, no changes needed here.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// Your metadata is excellent and well-structured, no changes needed.
const siteUrl = "https://www.coderon.co.za";
export const metadata: Metadata = {
  title: {
    template: "%s | Coderon",
    default: "Coderon - Building Africa's Future with Code & Purpose",
  },
  description: "A leading South African software company transforming Africa's digital landscape with Next.js web development, AI solutions, and purpose-driven technology.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  keywords: ["software development South Africa", "Next.js development Africa", "AI solutions Africa", "digital transformation", "custom software", "tech in Africa", "Coderon"],
  authors: [{ name: 'Coderon', url: siteUrl }],
  creator: 'Coderon',
  publisher: 'Coderon',
  openGraph: {
    title: "Coderon - Building Africa's Future with Code & Purpose",
    description: "Transforming Africa's digital landscape with innovative software solutions.",
    url: siteUrl,
    siteName: 'Coderon',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Coderon logo against a background representing African innovation.' }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Coderon - Building Africa's Future with Code & Purpose",
    description: "Transforming Africa's digital landscape with innovative software solutions.",
    creator: '@CoderonZA', 
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
      <body>
        <Suspense fallback={null}>
          {/* 
            This is the key fix: We check if the environment variable exists
            before trying to render the Google Analytics component. This prevents
            errors if the variable isn't set.
          */}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics />
          )}
        </Suspense>

        <ClientLayoutComponents />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}

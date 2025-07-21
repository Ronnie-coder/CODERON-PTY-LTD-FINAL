// src/app/page.tsx

import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import ImpactSection from '@/components/ImpactSection';
// Import our new showcase component
import TestimonialsShowcase from '@/components/TestimonialsShowcase';


/**
 * The main homepage for Coderon.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <ImpactSection />
      {/* Add the new, complete section here */}
      <TestimonialsShowcase />
    </>
  );
}

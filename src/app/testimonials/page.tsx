// src/app/testimonials/page.tsx

import { testimonialsData } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata = {
  title: 'Testimonials | Coderon',
  description: 'Hear from our clients about the impact of our work and our dedication to their success.',
};

export default function TestimonialsPage() {
  return (
    <main className="c-testimonials-page">
      <div className="c-testimonials-page__header">
        <h1 className="c-testimonials-page__headline">Client Stories &amp; Impact</h1>
        <p className="c-testimonials-page__subheadline">
          We are privileged to partner with visionary clients. Here’s what they have to say about our journey together.
        </p>
      </div>

      <div className="c-testimonials-page__grid">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </main>
  );
}
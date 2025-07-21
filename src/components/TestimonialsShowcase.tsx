// src/components/TestimonialsShowcase.tsx

import { testimonialsData } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsShowcase = () => {
  return (
    // We add an `id` here so the navbar link can scroll to it
    <section id="testimonials" className="c-testimonials-page">
      <div className="c-testimonials-page__header">
        <h2 className="c-testimonials-page__headline">Client Stories &amp; Impact</h2>
        <p className="c-testimonials-page__subheadline">
          We are privileged to partner with visionary clients. Here’s what they have to say about our journey together.
        </p>
      </div>

      <div className="c-testimonials-page__grid">
        {/* We map over the data and pass each testimonial to the card */}
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
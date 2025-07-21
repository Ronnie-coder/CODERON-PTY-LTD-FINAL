// src/components/TestimonialCard.tsx

"use client"; // This component needs to be a client component for animations

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/data/testimonials'; // Import the type definition

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      className="c-testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="c-testimonial-card__header">
        <div className="c-testimonial-card__logo-wrapper">
          <Image src={testimonial.logoSrc} alt={`${testimonial.company} Logo`} width={120} height={40} style={{ objectFit: 'contain' }} />
        </div>
        <span className="c-testimonial-card__tag">{testimonial.tag}</span>
      </div>

      <blockquote className="c-testimonial-card__story">
        "{testimonial.story}"
      </blockquote>

      <div className="c-testimonial-card__footer">
        <Link href={testimonial.websiteUrl} target="_blank" rel="noopener noreferrer" className="c-testimonial-card__link">
          Visit {testimonial.company} <span>&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
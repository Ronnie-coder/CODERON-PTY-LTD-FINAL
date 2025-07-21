// src/data/testimonials.ts

import { StaticImageData } from 'next/image';
// Import your logos here. For now, we'll use placeholders.
// import giftedToursLogo from '../../public/logo-gifted-tours.png'; 
// import palmsureLogo from '../../public/logo-palmsure.png';

export interface Testimonial {
  id: number;
  company: string;
  name?: string; // Optional name of the person
  tag: string;
  logoSrc: string; // Using string for path, but StaticImageData is better if you import images
  websiteUrl: string;
  story: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    company: 'Gifted Tours',
    tag: 'Client Success Story',
    logoSrc: '/logos/logo-gifted-tours-placeholder.png', // We'll use a placeholder path for now
    websiteUrl: 'https://www.giftedtours.co.za',
    story: 'I would like to appreciate the work of Coderon. I was really amazed by the website — now everything is actually working nicely. Everything is being processed. When I go to my website, it\'s very easy to go on. In 2 or 3 seconds I\'m on. My website is running smoothly. Before, it wasn\'t submitting the emails, it wasn\'t receiving the emails. Now I\'m able to receive the emails, and I\'ve got more reach to customers. I think emails are working nicely. I would recommend you to anybody who would like to do website design... to do a website, anything to do with IT. I would highly link you up to the customers, because I was amazed with the work.',
  },
  {
    id: 2,
    company: 'Palmsure',
    tag: 'Honoring a Legacy',
    logoSrc: '/logos/logo-palmsure-placeholder.png', // Placeholder path
    websiteUrl: 'https://www.palmsure.co.za/',
    story: 'Coderon didn\'t just build a website; they honored a legacy. With grace and technical excellence, they ensured my father\'s vision continues to shine brightly online. Their work is more than code—it is dedication, respect, and a promise kept.',
  },
  // You can easily add more testimonials here in the future!
];
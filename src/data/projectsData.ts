// src/data/projectsData.ts

// The "blueprint" for a project.
// FIX: The 'logoUrl' property has been added to the interface.
export interface Project {
  client: string;
  logoUrl: string; // <-- THIS LINE FIXES THE BUILD ERROR
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  featured: boolean;
}

// Your project data. This part was already correct.
export const projects: Project[] = [
  {
    client: 'Gifted Tours',
    logoUrl: '/logos/gifted-tours.svg',
    title: 'From Outdated to Outstanding',
    description: 'Gifted Tours needed a digital refresh. Their old website was slow, dated, and not performing. We delivered a complete redesign and rebuild using Next.js, resulting in a lightning-fast, modern, and SEO-optimized platform that truly represents their brand and is ready to attract more business.',
    tags: ['Next.js', 'Web Design', 'SEO', 'Vercel'],
    imageUrl: '/gifted-tours-showcase.png',
    liveUrl: 'https://giftedtours.co.za',
    featured: true,
  },
  {
    client: 'Palmsure',
    logoUrl: '/logos/palmsure.svg',
    title: 'Enterprise-Grade Insurance Platform',
    description: 'We developed a scalable, secure, and modern web platform for Palmsure to manage policies, clients, and claims efficiently, replacing their legacy systems.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    imageUrl: '/showcase/palmsure-showcase.png',
    liveUrl: 'https://www.palmsure.co.za',
    featured: false,
  },
];

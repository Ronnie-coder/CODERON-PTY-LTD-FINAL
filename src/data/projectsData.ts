// src/data/projectsData.ts

// The "blueprint" for a project.
export interface Project {
  client: string;
  logoUrl: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  featured: boolean;
}

// All paths are now consistent and follow best practices.
export const projects: Project[] = [
  {
    client: 'Gifted Tours',
    logoUrl: '/logos/gifted-tours.svg',
    title: 'From Outdated to Outstanding',
    description: 'Gifted Tours needed a digital refresh. Their old website was slow, dated, and not performing. We delivered a complete redesign and rebuild using Next.js, resulting in a lightning-fast, modern, and SEO-optimized platform that truly represents their brand and is ready to attract more business.',
    tags: ['Next.js', 'Web Design', 'SEO', 'Vercel'],
    // FIX: Standardized path to use the /projects/ folder
    imageUrl: '/projects/gifted-tours-showcase.png',
    liveUrl: 'https://giftedtours.co.za',
    featured: true,
  },
  {
    client: 'Palmsure',
    logoUrl: '/logos/palmsure.svg',
    title: 'Enterprise-Grade Insurance Platform',
    description: 'We developed a scalable, secure, and modern web platform for Palmsure to manage policies, clients, and claims efficiently, replacing their legacy systems.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    // FIX: Standardized path to use the /projects/ folder
    imageUrl: '/projects/palmsure-showcase.png',
    liveUrl: 'https://www.palmsure.co.za',
    featured: false,
  },
];

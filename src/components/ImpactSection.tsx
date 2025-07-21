// src/components/ImpactSection.tsx

"use client";

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projectsData'; // Import project data

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Find the featured project (or default to the first one)
  const featuredProject = projects.find(p => p.featured) || projects[0];

  if (!featuredProject) {
    return null; // Don't render anything if there are no projects
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' }},
  };

  return (
    <section className="c-impact" id="impact">
      <motion.div
        ref={ref}
        className="c-impact-feature"
        variants={featureVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="c-impact-feature__image-wrapper">
          <Image
            src={featuredProject.imageUrl}
            alt={`Showcase of ${featuredProject.client} project`}
            width={1200}
            height={800}
            quality={90}
          />
        </div>

        <div className="c-impact-feature__content">
          <h3>Featured Project: {featuredProject.client}</h3>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.description}</p>
          <Link href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
            View Live Site <span>&rarr;</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactSection;

// src/app/impact/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projectsData';

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'See the real-world impact of our work. Explore case studies of how Coderon has helped African businesses thrive.',
  alternates: {
    canonical: '/impact',
  },
};

export default function ImpactPage() {
  return (
    <div className="c-page-container">
      <header className="c-page-header">
        <h1>Our Impact</h1>
        <p>We measure success by the success of our partners. Here are some of their stories.</p>
      </header>

      <main className="c-project-grid">
        {projects.map((project) => (
          <article key={project.client} className="c-project-card">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="c-project-card__image-link">
              <div className="c-project-card__image">
                <Image src={project.imageUrl} alt={`Showcase of the ${project.client} project`} width={1200} height={800} quality={90}/>
              </div>
            </Link>
            <div className="c-project-card__content">
              <div className="c-project-card__client">
                {project.logoUrl && (
                  <img src={project.logoUrl} alt={`${project.client} logo`} className="c-project-card__client-logo" />
                )}
                <span>{project.client}</span>
              </div>
              <h2 className="c-project-card__title">{project.title}</h2>
              <p className="c-project-card__description">{project.description}</p>
              <div className="c-project-card__tags">
                {project.tags.map(tag => <span key={tag} className="c-project-card__tag">{tag}</span>)}
              </div>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="c-button c-button--primary">
                View Live Project
              </Link>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

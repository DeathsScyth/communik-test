'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

const projects = [
  {
    title: 'BrandBoost',
    description: "Refonte complète de l'identité visuelle pour une startup ambitieuse.",
    image: '/images/projects/brandboost.jpg',
  },
  {
    title: 'ConnectUp',
    description: "Développement d'une plateforme SaaS propulsée par l'IA.",
    image: '/images/projects/connectup.jpg',
  },
  {
    title: 'AIX Insights',
    description: "Déploiement d'une stratégie d'intelligence artificielle sur mesure.",
    image: '/images/projects/aixinsights.jpg',
  },
  {
    title: 'FlowAuto',
    description: 'Automatisation de processus métiers pour startups technologiques.',
    image: '/images/projects/flowauto.jpg',
  },
];

export default function Realisations() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 pt-20 pb-32">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nos Réalisations</h1>
        <p className="text-lg text-gray-600">
          Des projets qui conjuguent intelligence artificielle, design et impact digital.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-28 bg-black text-white text-center py-20 px-6 rounded-xl max-w-5xl mx-auto shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt à écrire votre propre histoire ?</h2>
        <p className="text-lg text-gray-300 mb-6">
          Collaborons ensemble pour concevoir une solution créative, stratégique et technologique.
        </p>
        <Link
          href="/contact"
          className="btn-primary text-white border-white hover:bg-white hover:text-black"
        >
          Discutons ensemble
        </Link>
      </section>
    </main>
  );
}
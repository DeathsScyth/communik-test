'use client';

import { motion } from 'framer-motion';
import TeamMember from '@/components/TeamMember';

const team = [
  {
    name: 'Sarah Dupont',
    role: 'CEO & Fondatrice',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Marc Lefebvre',
    role: 'CTO & Architecte IA',
    image: '/images/team/marc.jpg',
  },
  {
    name: 'Élodie Morel',
    role: 'Lead Designer',
    image: '/images/team/elodie.jpg',
  },
  {
    name: 'Thomas Bernard',
    role: 'Développeur Full-Stack',
    image: '/images/team/thomas.jpg',
  },
];

export default function Equipe() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      {/* Titre & Intro */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Notre Équipe</h1>
        <p className="text-lg text-gray-600">
          Un collectif passionné à l'intersection du design, de l'intelligence artificielle et de la stratégie digitale.
        </p>
      </section>

      {/* Grille Équipe */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TeamMember
              name={member.name}
              role={member.role}
              image={member.image}
            />
          </motion.div>
        ))}
      </section>

      {/* Citation inspirante */}
      <section className="mt-28 bg-gray-100 py-16 px-6 text-center rounded-xl max-w-4xl mx-auto shadow-sm">
        <p className="text-xl sm:text-2xl italic font-medium text-gray-700">
          “Seul on va plus vite. Ensemble, on va plus loin.” <br />
          <span className="text-gray-500 text-sm">— Proverbe africain</span>
        </p>
      </section>
    </main>
  );
}
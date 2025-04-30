'use client';

import { FaPaintBrush, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Branding & Identité Visuelle',
    description:
      'Nous façonnons des identités visuelles uniques qui marquent les esprits et incarnent les valeurs de votre entreprise.',
    icon: <FaPaintBrush size={36} />, 
  },
  {
    title: 'Sites Web Modernes',
    description:
      'Des sites web à fort impact visuel et fonctionnel, pensés pour l’expérience utilisateur et l’efficacité digitale.',
    icon: <FaLaptopCode size={36} />, 
  },
  {
    title: 'Stratégie IA sur Mesure',
    description:
      "Exploitez le potentiel de l'intelligence artificielle pour automatiser, personnaliser et booster votre croissance.",
    icon: <FaRobot size={36} />, 
  },
  {
    title: 'Automatisation de Processus',
    description:
      'Rationalisez vos opérations avec des systèmes intelligents conçus pour gagner du temps et réduire les coûts.',
    icon: <MdOutlineSettingsApplications size={36} />, 
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 pt-20 pb-32">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nos Services</h1>
        <p className="text-lg text-gray-600">
          Une approche 360° : design percutant, IA intelligente et automatisation stratégique.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gray-50 hover:bg-black hover:text-white border border-gray-200 hover:shadow-xl transition rounded-2xl p-8 text-center flex flex-col items-center"
          >
            <div className="mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="font-bold text-xl mb-3 group-hover:text-white transition">{service.title}</h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition">
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Quote Strip Section */}
      <section className="mt-28 px-6 text-center">
        <div className="bg-black text-white py-14 px-4 rounded-xl max-w-5xl mx-auto">
          <blockquote className="text-xl sm:text-2xl font-light italic max-w-3xl mx-auto">
            “La technologie n’est puissante que lorsqu’elle sert l’humain.”
          </blockquote>
          <p className="mt-4 text-gray-400 text-sm">— L'équipe Communik</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 bg-gradient-to-r from-black to-gray-800 rounded-xl py-16 text-white text-center px-6 max-w-5xl mx-auto shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vous avez un projet ambitieux ?</h2>
        <p className="text-lg mb-6 text-gray-300">
          Discutons ensemble et voyons comment nous pouvons créer un impact.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full border border-white hover:bg-gray-100 transition"
        >
          Discutons ensemble
        </a>
      </section>
    </main>
  );
}
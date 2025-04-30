'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb, FaPalette, FaRobot, FaCogs } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="text-gray-900 bg-white">
      {/* Hero Video Banner */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-16 md:pb-20 bg-black/40 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 max-w-4xl mx-auto md:mx-0">
            COMMUNIK, une voix pour l&apos;impact digital
          </h1>
          <p className="text-md sm:text-lg md:text-xl max-w-xl mb-6 mx-auto md:mx-0">
            Une agence créative alimentée par l&apos;IA et portée par la stratégie, le design et l&apos;automatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contact" className="btn-primary">Nous contacter</Link>
            <Link href="/realisations" className="btn-secondary">Voir nos projets</Link>
          </div>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Une agence 360°, un collectif humain, une vision pilotée par l&apos;IA.
            </h2>
            <ul className="mt-8 text-gray-700 space-y-4 text-base sm:text-lg">
              <li>➀ IA comme pilote, humain comme moteur</li>
              <li>➁ Design stratégique, création utile</li>
              <li>➂ Impact créatif et digital, ancré dans le réel</li>
            </ul>
          </div>
          <Image
            src="/images/manifest.jpg"
            alt="Manifeste"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-[#f9f9f9] text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
          Nos projets récents
        </h2>
        <p className="text-gray-600 text-md sm:text-lg max-w-2xl mx-auto mb-14">
          Découvrez comment nous avons transformé les marques grâce à la stratégie, au design, à l&apos;IA et à l&apos;automatisation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {["connectup", "flowauto", "brandboost", "aix", "canvas", "maya-ai"].map((slug, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]"
            >
              <Image
                src={`/images/projects/${slug}.jpg`}
                alt={slug}
                width={500}
                height={320}
                className="object-cover w-full h-64 group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="font-bold text-xl mb-1 capitalize">
                  {slug.replace(/-/g, ' ')}
                </h3>
                <p className="text-sm text-gray-200">
                  Projet IA & communication digitale
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/realisations"
          className="inline-block mt-16 btn-secondary text-sm"
        >
          Voir toutes nos réalisations
        </Link>
      </section>

{/* Signature Section */}
<section className="relative bg-black text-white py-32 px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      May AI <span className="text-red-500">BE</span> the solution
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
      Une agence 360° qui combine stratégie, branding, intelligence artificielle et automatisation pour faire décoller votre marque.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
      <div className="flex flex-col items-center">
        <FaLightbulb className="text-red-500 text-4xl mb-4" />
        <h4 className="font-bold text-xl mb-2">Stratégie</h4>
        <p className="text-sm text-gray-400 text-center">Planifiez avec précision, agissez avec impact.</p>
      </div>
      <div className="flex flex-col items-center">
        <FaPalette className="text-red-500 text-4xl mb-4" />
        <h4 className="font-bold text-xl mb-2">Branding</h4>
        <p className="text-sm text-gray-400 text-center">Créez une identité qui marque les esprits.</p>
      </div>
      <div className="flex flex-col items-center">
        <FaRobot className="text-red-500 text-4xl mb-4" />
        <h4 className="font-bold text-xl mb-2">IA</h4>
        <p className="text-sm text-gray-400 text-center">Exploitez la puissance de l&apos;intelligence artificielle.</p>
      </div>
      <div className="flex flex-col items-center">
        <FaCogs className="text-red-500 text-4xl mb-4" />
        <h4 className="font-bold text-xl mb-2">Automatisation</h4>
        <p className="text-sm text-gray-400 text-center">Libérez du temps. Automatisez intelligemment.</p>
      </div>
    </div>
  </div>

  {/* Optional background animation */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-br from-red-900/10 via-white/5 to-black/10 opacity-10 animate-pulse" />
  </div>
</section>

      {/* Contact Parallax Section */}
      <section
        className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{ backgroundImage: `url('/images/contact-cover.jpg')` }}
      >
        <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-0" />
        <div className="relative z-10 text-white px-6 max-w-3xl mx-auto">
          <h4 className="text-sm sm:text-base md:text-lg text-red-500 tracking-[0.25em] uppercase mb-3">
            CONTACT
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            MAY WE BE THE SOLUTION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Chez Communik via IA, chaque projet est une opportunité de créer une synergie entre créativité et performance. Vous avez une idée, un besoin, une ambition ? Nous sommes prêts à écouter, imaginer et bâtir avec vous.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Bloc Agence */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Communik via IA</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            L'agence digitale qui combine stratégie, design & intelligence artificielle pour propulser votre marque.
          </p>
        </div>

        {/* Bloc Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider text-gray-400">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white text-gray-400">Services</a></li>
            <li><a href="/equipe" className="hover:text-white text-gray-400">Équipe</a></li>
            <li><a href="/realisations" className="hover:text-white text-gray-400">Réalisations</a></li>
            <li><a href="/contact" className="hover:text-white text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Bloc Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4 tracking-wider text-gray-400">Contact</h4>
          <p className="text-gray-400 text-sm">hello@communik-ai.com</p>
          <p className="text-gray-400 text-sm mt-2">+212 6 00 00 00 00</p>
          <p className="text-gray-400 text-sm mt-2">Marrakech, Maroc</p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center mt-12 text-gray-600 text-xs border-t border-gray-800 pt-6">
        © {year} Communik via IA — Tous droits réservés.
      </div>
    </footer>
  );
}
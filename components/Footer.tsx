'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white py-10 text-center">
      <p className="text-gray-400 text-sm mb-2">
        © {year} Communik via IA. Tous droits réservés.
      </p>
      <div className="flex justify-center gap-6 text-gray-500 text-sm mt-4">
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/equipe" className="hover:text-white">Équipe</a>
        <a href="/realisations" className="hover:text-white">Réalisations</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}
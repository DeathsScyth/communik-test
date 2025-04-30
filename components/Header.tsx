// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-black">
          COMMUNIK <span className="text-red-600">via IA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-lg font-medium">
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/equipe" className="hover:text-red-600 transition">Équipe</Link>
          <Link href="/realisations" className="hover:text-red-600 transition">Réalisations</Link>
          <Link
            href="/contact"
            className="bg-black text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-6 py-4 border-t border-gray-200 flex flex-col gap-4 text-lg font-medium">
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/equipe" onClick={() => setMenuOpen(false)}>Équipe</Link>
          <Link href="/realisations" onClick={() => setMenuOpen(false)}>Réalisations</Link>
          <Link
            href="/contact"
            className="bg-black text-white py-2 px-4 rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-width flex justify-between items-center py-6">
        <Link href="/" className="text-2xl font-bold text-black">
          Communik via IA
        </Link>
        <nav className="flex gap-8 items-center text-lg font-semibold">
          <Link href="/services" className="hover:text-gray-600">Services</Link>
          <Link href="/equipe" className="hover:text-gray-600">Équipe</Link>
          <Link href="/realisations" className="hover:text-gray-600">Réalisations</Link>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
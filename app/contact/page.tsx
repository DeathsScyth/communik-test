'use client';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 pt-28 pb-32">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nous contacter</h1>
        <p className="text-lg text-gray-600">
          Un projet ambitieux ? Discutons ensemble autour d&apos;une vision créative et stratégique.
        </p>
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <ContactForm />
      </section>
    </main>
  );
}
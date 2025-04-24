'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 flex flex-col gap-8">
      {/* Name */}
      <div className="flex flex-col text-left">
        <label htmlFor="name" className="text-lg font-semibold mb-2 text-foreground">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-black transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col text-left">
        <label htmlFor="email" className="text-lg font-semibold mb-2 text-foreground">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-black transition"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col text-left">
        <label htmlFor="message" className="text-lg font-semibold mb-2 text-foreground">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-black transition resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {/* Success/Error Messages */}
      {isSuccess && <p className="text-green-600 text-center mt-4">Merci ! Votre message a été envoyé.</p>}
      {isError && <p className="text-red-600 text-center mt-4">Erreur lors de l&apos;envoi. Veuillez réessayer.</p>}
    </form>
  );
}
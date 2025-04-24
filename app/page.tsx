import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Imagine. Créez. Dominez.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10">
          Communik via IA : là où l&apos;intelligence artificielle rencontre l&apos;élégance du design.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/services" className="btn-primary">
            Découvrir nos Services
          </Link>
          <Link href="/contact" className="btn-secondary">
            Nous Contacter
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Notre Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {[
              { title: "Branding", desc: "Conception d&apos;identités visuelles fortes et intemporelles." },
              { title: "Sites Web", desc: "Sites élégants, rapides, et optimisés pour l&apos;expérience utilisateur." },
              { title: "Stratégie IA", desc: "Utilisez la puissance de l&apos;IA pour stimuler votre croissance." },
              { title: "Automatisation", desc: "Optimisez vos workflows et gagnez en efficacité." }
            ].map((item, index) => (
              <div key={index} className="group transition">
                <h3 className="text-2xl font-bold mb-4 group-hover:underline">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">L&apos;Art de Conjuguer Technologie et Créativité</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chez Communik via IA, nous croyons qu&apos;un design exceptionnel et une technologie intelligente doivent aller de pair. Nous façonnons des expériences digitales uniques en combinant l&apos;élégance et l&apos;innovation.
            </p>
          </div>
          <div>
            <img src="/images/about.jpg" alt="À propos" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Notre Processus</h2>
          <div className="relative mt-16 flex flex-col space-y-16">
            {[
              { step: "Analyse", desc: "Compréhension de vos objectifs et enjeux." },
              { step: "Conception", desc: "Développement de stratégies sur mesure." },
              { step: "Réalisation", desc: "Mise en œuvre et design d&apos;expériences impactantes." },
              { step: "Optimisation", desc: "Suivi, analyse, amélioration continue." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mt-4">{item.step}</h3>
                <p className="text-gray-600 max-w-md mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Témoignages</h2>
          <div className="flex flex-col gap-16 mt-16">
            {[
              { name: "Claire B.", quote: "Communik a redéfini notre image de marque avec élégance et puissance." },
              { name: "Thomas M.", quote: "Une synergie parfaite entre design et stratégie IA. Résultats incroyables." },
              { name: "Sophie R.", quote: "L&apos;expérience utilisateur qu&apos;ils ont créée est tout simplement magistrale." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl italic mb-6">&quot;{item.quote}&quot;</p>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title">Nos Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {[
              { title: "BrandBoost", desc: "Refonte totale de l&apos;identité visuelle et digitale." },
              { title: "ConnectUp", desc: "Plateforme SaaS élégante propulsée par l&apos;IA." },
              { title: "AIX Insights", desc: "Déploiement d&apos;une stratégie IA sur mesure." },
              { title: "FlowAuto", desc: "Automatisation intelligente pour start-up tech." }
            ].map((project, index) => (
              <div key={index} className="group transition hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/realisations" className="inline-block mt-12 btn-secondary">
            Voir toutes nos réalisations
          </Link>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Notre Stack Technologique</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            {["Next.js", "TailwindCSS", "n8n", "OpenAI", "Vercel", "Sanity.io"].map((tech, index) => (
              <div key={index} className="text-lg font-semibold text-gray-600">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Élevons votre marque vers de nouveaux sommets
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Discutons ensemble de votre prochain projet ambitieux.
        </p>
        <Link href="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-black">
          Nous Contacter
        </Link>
      </section>

    </main>
  );
}
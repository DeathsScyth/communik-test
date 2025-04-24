import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "BrandBoost",
    description: "Refonte complète de l'identité visuelle pour une startup ambitieuse.",
    image: "/images/projects/brandboost.jpg",
  },
  {
    title: "ConnectUp",
    description: "Développement d'une plateforme SaaS propulsée par l'IA.",
    image: "/images/projects/connectup.jpg",
  },
  {
    title: "AIX Insights",
    description: "Déploiement d'une stratégie d'intelligence artificielle sur mesure.",
    image: "/images/projects/aixinsights.jpg",
  },
  {
    title: "FlowAuto",
    description: "Automatisation de processus métiers pour startups technologiques.",
    image: "/images/projects/flowauto.jpg",
  },
];

export default function Realisations() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 section-padding">
      <h1 className="section-title">Nos Réalisations</h1>

      <div className="max-width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Prêt pour votre projet ?</h2>
        <Link href="/contact" className="btn-primary">
          Discutons ensemble
        </Link>
      </div>
    </main>
  );
}
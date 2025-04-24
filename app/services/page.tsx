import { FaPaintBrush, FaLaptopCode, FaRobot } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 section-padding">
      <h1 className="section-title">Nos Services</h1>

      <div className="max-width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        <ServiceCard
          title="Branding & Identité Visuelle"
          description="Nous créons des marques fortes, mémorables et alignées avec votre vision stratégique."
          icon={<FaPaintBrush size={48} />}
        />
        <ServiceCard
          title="Sites Web Modernes"
          description="Développement de sites web vitrines et applications performantes et élégantes."
          icon={<FaLaptopCode size={48} />}
        />
        <ServiceCard
          title="Stratégie IA sur Mesure"
          description="Boostez votre activité avec l'intelligence artificielle adaptée à vos besoins métiers."
          icon={<FaRobot size={48} />}
        />
        <ServiceCard
          title="Automatisation de Processus"
          description="Automatisez vos opérations pour gagner en efficacité et réduire vos coûts."
          icon={<MdOutlineSettingsApplications size={48} />}
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Un projet en tête ?</h2>
        <a href="/contact" className="btn-primary">
          Discutons ensemble
        </a>
      </div>
    </main>
  );
}
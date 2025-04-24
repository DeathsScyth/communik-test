import TeamMember from "@/components/TeamMember";

const team = [
  {
    name: "Sarah Dupont",
    role: "CEO & Fondatrice",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Marc Lefebvre",
    role: "CTO & Architecte IA",
    image: "/images/team/marc.jpg",
  },
  {
    name: "Élodie Morel",
    role: "Lead Designer",
    image: "/images/team/elodie.jpg",
  },
  {
    name: "Thomas Bernard",
    role: "Développeur Full-Stack",
    image: "/images/team/thomas.jpg",
  },
];

export default function Equipe() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 section-padding">
      <h1 className="section-title">Notre Équipe</h1>

      <div className="max-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-16">
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </main>
  );
}
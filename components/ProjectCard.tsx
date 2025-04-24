import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition">
      <div className="w-full h-60 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
}
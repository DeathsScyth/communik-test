import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center group transition hover:-translate-y-2">
      <div className="w-40 h-40 relative mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover border-4 border-gray-200 group-hover:border-black transition"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
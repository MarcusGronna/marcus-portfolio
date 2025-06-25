// Kort för ett projekt. Props: project. Visa Image, titel, tech-badge-lista. Card class='rounded-xl bg-brand-600/10 p-4 shadow-lg hover:scale-105 transition'. Klick navigerar till /portfolio/[slug].
import Image from "next/image";
import Link from "next/link";
import SkillBadge from "./SkillBadge";

interface Project {
  slug: string;
  image?: string;
  title: string;
  tech?: string[];
}

export default function ProjectFrame({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div className="rounded-xl bg-brand-600/10 p-4 shadow-lg hover:scale-105 transition cursor-pointer w-64">
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          width={256}
          height={144}
          className="rounded mb-2 object-cover"
        />
        <h5 className="font-bold text-lg mb-1">{project.title}</h5>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech?.map((label: string) => (
            <SkillBadge key={label} label={label} />
          ))}
        </div>
      </div>
    </Link>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { useLang } from "@/components/LangProvider";

export default function ProjectFrame({ project }: { project: Project }) {
  const { lang } = useLang();
  const isExternal = project.url.startsWith("http");

  const content = (
    <div>
      {/* TODO: Byt ut till riktig projektbild */}
      <Image
        src={project.image}
        alt={project.title[lang]}
        width={256}
        height={144}
        className="rounded mb-2 object-cover w-full h-36"
      />
      <h5 className="font-bold text-lg mb-1">{project.title[lang]}</h5>
      <p>{project.summary[lang]}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((label) => (
          <SkillBadge key={label} label={label} />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      variants={fadeUp}
      className="rounded-xl bg-brand-600/10 p-6 shadow-lg hover:shadow-xl transition cursor-pointer min-w-[280px] md:min-w-0 flex flex-col mb-6"
    >
      {isExternal ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={project.url}>{content}</Link>
      )}
    </motion.div>
  );
}

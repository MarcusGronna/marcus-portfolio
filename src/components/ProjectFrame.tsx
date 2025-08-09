"use client";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { useLang } from "@/components/LangProvider";

export default function ProjectFrame({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { lang } = useLang();
  const isExternal = project.url.startsWith("http");

  const content = (
    <>
      {/* ➊ Bildbehållare med padding */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg p-2">
        <Image
          src={project.image}
          alt={project.title[lang]}
          fill
          sizes="(max-width: 640px) 100vw, 480px"
          className="object-cover rounded-md"
          priority={priority} // ← ändrat från alltid-on
        />
      </div>

      {/* ➋ Textinnehåll */}
      <div className="p-4 flex-1 flex flex-col">
        <h5 className="font-bold text-lg mb-1 text-center">{project.title[lang]}</h5>
        <p className="flex-1 my-3 text-sm">{project.summary[lang]}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((label) => (
            <SkillBadge key={label} label={label} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      variants={fadeUp}
      className="
        w-60 md:w-72            /* Smalare kort */
        aspect-[4/5]            /* Rektangulär enhetlig form */
        flex flex-col mb-2 md:mb-6 
        border border-brand-600 
        rounded-xl
        shadow-lg hover:shadow-xl
        transition
        cursor-pointer
        overflow-hidden
      "
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

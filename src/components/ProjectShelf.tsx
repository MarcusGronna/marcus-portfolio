"use client";
import { motion } from "framer-motion";
import ProjectFrame from "./ProjectFrame";
import type { Project } from "@/content/projects";
import type { Locale } from "@/middleware";
import { staggerContainer } from "@/lib/framer-variants";

interface ProjectShelfProps {
  projects: Project[];
  lang: Locale;
  title?: string;
}

export default function ProjectShelf({ projects, lang, title }: ProjectShelfProps) {
  return (
    <section>
      {title && <h4 className="text-2xl font-bold mb-4">{title}</h4>}
      <motion.div
        className="
          flex overflow-x-auto snap-x pb-4
          md:grid md:grid-cols-3 md:gap-10 md:overflow-x-visible
          justify-start min-w-0
        "
        style={{ WebkitOverflowScrolling: "touch" }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => (
          <div key={project.slug} className="w-[340px] sm:w-[340px] md:w-auto shrink-0 snap-start">
            <ProjectFrame project={project} lang={lang} priority={i < 2} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

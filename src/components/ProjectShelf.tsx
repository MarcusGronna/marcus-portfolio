"use client";
// Horisontell hylla. Props: projects: Project[], title?. Wrapper div 'flex gap-6 overflow-x-auto snap-x'. Använd motion.div variants staggerChildren.
import { motion } from "framer-motion";
import ProjectFrame from "./ProjectFrame";
import type { Project } from "@/content/projects";
import { staggerContainer } from "@/lib/framer-variants";

interface ProjectShelfProps {
  projects: Project[];
  title?: string;
}

export default function ProjectShelf({ projects, title }: ProjectShelfProps) {
  return (
    <section className="mb-8">
      {title && <h4 className="text-2xl font-bold mb-4">{title}</h4>}
      <motion.div
        className="flex gap-6 overflow-x-auto snap-x pb-4 md:grid md:grid-cols-3 md:gap-10 md:overflow-x-visible justify-start min-w-0"
        style={{ WebkitOverflowScrolling: "touch" }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="w-[340px] sm:w-[340px] md:w-auto flex-shrink-0 snap-start"
          >
            <ProjectFrame project={project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

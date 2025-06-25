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
        // Byt ut flex mot grid och ta bort overflow-x-auto
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectFrame key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

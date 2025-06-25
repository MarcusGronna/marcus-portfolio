// Horisontell hylla. Props: projects: Project[], title?. Wrapper div 'flex gap-6 overflow-x-auto snap-x'. Använd motion.div variants staggerChildren.
import { motion } from "framer-motion";
import ProjectFrame from "./ProjectFrame";
import type { Project } from "@/content/projects";

interface ProjectShelfProps {
  projects: Project[];
  title?: string;
}

export default function ProjectShelf({ projects, title }: ProjectShelfProps) {
  return (
    <section>
      {title && <h4 className="text-lg font-semibold mb-2">{title}</h4>}
      <motion.div
        className="flex gap-6 overflow-x-auto snap-x pb-2"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
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

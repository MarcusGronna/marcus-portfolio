"use client";
import { motion } from "framer-motion";
import WallLayout from "@/components/WallLayout";
import PortraitFrame from "@/components/PortraitFrame";
import ProjectShelf from "@/components/ProjectShelf";
import { fadeUp } from "@/lib/framer-variants";
import { projects } from "@/content/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <WallLayout>
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <h1 className="text-4xl font-bold mb-8">Hej, jag är Marcus</h1>
        <PortraitFrame />
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
        <ProjectShelf title="Utvalda projekt" projects={featuredProjects} />
      </motion.div>
    </WallLayout>
  );
}

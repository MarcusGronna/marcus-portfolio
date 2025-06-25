"use client";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";

export default function ProjectFrame({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      variants={fadeUp}
      className="rounded-xl bg-brand-600/10 p-4 shadow-lg hover:shadow-xl transition cursor-pointer w-72 min-w-[16rem] flex flex-col"
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div>
          {/* TODO: Byt ut till riktig projektbild */}
          <Image
            src={project.image}
            alt={project.title}
            width={256}
            height={144}
            className="rounded mb-2 object-cover w-full h-36"
          />
          <h5 className="font-bold text-lg mb-1">{project.title}</h5>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((label) => (
              <SkillBadge key={label} label={label} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

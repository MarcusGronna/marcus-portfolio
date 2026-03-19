"use client";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { useLang } from "@/components/LangProvider";
import { FiExternalLink, FiGithub, FiBookOpen, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";

const ctaTexts = {
  liveDemo: { en: "Live Demo", sv: "Live Demo" },
  sourceCode: { en: "Source Code", sv: "Källkod" },
  caseStudy: { en: "Case Study", sv: "Fallstudie" },
};

export default function ProjectFrame({
  project,
  priority = false,
  featured = false,
}: {
  project: Project;
  priority?: boolean;
  featured?: boolean;
}) {
  const { lang } = useLang();

  if (featured) {
    return (
      <motion.div
        variants={fadeUp}
        className="
          flex flex-col md:flex-row
          border-2 border-accent-400
          rounded-xl
          shadow-xl
          overflow-hidden
          bg-surface-50
          mb-2 md:mb-6
        "
      >
        {/* Image */}
        <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[280px] shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
            priority={priority}
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h4 className="font-bold text-xl mb-2">{project.title[lang]}</h4>
          <p className="text-sm text-brand-700 mb-4 leading-relaxed">{project.summary[lang]}</p>

          {project.highlights && (
            <ul className="space-y-1 mb-4" aria-label="Project highlights">
              {project.highlights[lang].slice(0, 4).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-brand-700 leading-snug">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-accent-700" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((label) => (
              <SkillBadge key={label} label={label} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-brand-600/20">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("project_live_click", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
              >
                <FiExternalLink aria-hidden="true" size={12} />
                {ctaTexts.liveDemo[lang]}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("project_source_click", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <FiGithub aria-hidden="true" size={12} />
                {ctaTexts.sourceCode[lang]}
              </a>
            )}
            {project.caseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                onClick={() => track("case_study_open", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-ink-900 text-surface-50 rounded px-3 py-1.5 hover:opacity-80 transition focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                <FiBookOpen aria-hidden="true" size={12} />
                {ctaTexts.caseStudy[lang]}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      className="
        w-[300px] sm:w-[320px] md:w-auto
        flex flex-col mb-2 md:mb-6
        border border-brand-600
        rounded-xl
        shadow-lg hover:shadow-xl
        transition-shadow
        overflow-hidden
        bg-surface-50
      "
    >
      {/* Clickable image → live demo */}
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("project_live_click", { slug: project.slug })}
          aria-label={`${project.title[lang]} – Live Demo`}
          className="block focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full aspect-video overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title[lang]}
              fill
              sizes="(max-width: 640px) 100vw, 480px"
              className="object-cover"
              priority={priority}
            />
          </motion.div>
        </a>
      ) : (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover"
            priority={priority}
          />
        </div>
      )}

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <h5 className="font-bold text-lg mb-1 text-center">{project.title[lang]}</h5>
        <p className="text-sm text-brand-700 mb-3 leading-relaxed">{project.summary[lang]}</p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="space-y-1 mb-3" aria-label="Project highlights">
            {project.highlights[lang].map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-brand-700 leading-snug">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-accent-700"
                  aria-hidden="true"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((label) => (
            <SkillBadge key={label} label={label} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-brand-600/20">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_live_click", { slug: project.slug })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              <FiExternalLink aria-hidden="true" size={12} />
              {ctaTexts.liveDemo[lang]}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_source_click", { slug: project.slug })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiGithub aria-hidden="true" size={12} />
              {ctaTexts.sourceCode[lang]}
            </a>
          )}
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              onClick={() => track("case_study_open", { slug: project.slug })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiBookOpen aria-hidden="true" size={12} />
              {ctaTexts.caseStudy[lang]}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}


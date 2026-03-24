"use client";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import type { Locale } from "@/middleware";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";

const ctaTexts = {
  liveDemo: { en: "Live Demo", sv: "Live Demo" },
  sourceCode: { en: "Source Code", sv: "Källkod" },
  caseStudy: { en: "Case Study", sv: "Fallstudie" },
};

export default function ProjectFrame({
  project,
  lang,
  priority = false,
  featured = false,
}: {
  project: Project;
  lang: Locale;
  priority?: boolean;
  featured?: boolean;
}) {
  // Determine the primary link destination: case study > url > github
  const primaryHref = project.caseStudy
    ? `/${lang}/projects/${project.slug}`
    : project.url ?? project.github ?? null;
  const primaryIsExternal = !project.caseStudy && primaryHref != null;

  const handlePrimaryClick = () => {
    if (project.caseStudy) track("case_study_open", { slug: project.slug });
    else if (project.url) track("project_live_click", { slug: project.slug });
    else if (project.github) track("project_source_click", { slug: project.slug });
  };

  if (featured) {
    return (
      <motion.article
        variants={fadeUp}
        className="
          flex flex-col md:flex-row
          border-2 border-accent-400
          rounded-xl shadow-md overflow-hidden bg-surface-50
          group
          transition-shadow hover:shadow-lg
        "
      >
        {/* Image – linked */}
        {primaryHref ? (
          <Link
            href={primaryHref}
            target={primaryIsExternal ? "_blank" : undefined}
            rel={primaryIsExternal ? "noopener noreferrer" : undefined}
            onClick={handlePrimaryClick}
            tabIndex={-1}
            aria-hidden="true"
            className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[280px] shrink-0 overflow-hidden block"
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
            />
          </Link>
        ) : (
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
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <h4 className="font-bold text-2xl mb-2 leading-snug">
            {primaryHref ? (
              <Link
                href={primaryHref}
                target={primaryIsExternal ? "_blank" : undefined}
                rel={primaryIsExternal ? "noopener noreferrer" : undefined}
                onClick={handlePrimaryClick}
                className="hover:text-accent-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
              >
                {project.title[lang]}
              </Link>
            ) : (
              project.title[lang]
            )}
          </h4>

          <p className="text-sm text-brand-700 mb-4 leading-relaxed">{project.summary[lang]}</p>

          {project.highlights && (
            <ul className="space-y-1.5 mb-5" aria-label="Project highlights">
              {project.highlights[lang].slice(0, 3).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-700 leading-snug">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-accent-700" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Footer actions */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.caseStudy && primaryHref && (
              <Link
                href={primaryHref}
                onClick={handlePrimaryClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
              >
                {ctaTexts.caseStudy[lang]}
              </Link>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("project_live_click", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-sm font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <FiGithub aria-hidden="true" size={12} />
                {ctaTexts.sourceCode[lang]}
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      className="
        w-[300px] sm:w-[320px] md:w-auto
        flex flex-col
        border border-brand-600/25
        rounded-xl shadow-sm overflow-hidden bg-surface-50
        group
        transition-shadow hover:shadow-md
      "
    >
      {/* Image – linked to primary destination */}
      {primaryHref ? (
        <Link
          href={primaryHref}
          target={primaryIsExternal ? "_blank" : undefined}
          rel={primaryIsExternal ? "noopener noreferrer" : undefined}
          onClick={handlePrimaryClick}
          tabIndex={-1}
          aria-hidden="true"
          className="relative w-full aspect-video overflow-hidden block"
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
          />
        </Link>
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
        <h5 className="font-bold text-base mb-1.5 leading-snug">
          {primaryHref ? (
            <Link
              href={primaryHref}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
              onClick={handlePrimaryClick}
              className="hover:text-accent-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
            >
              {project.title[lang]}
            </Link>
          ) : (
            project.title[lang]
          )}
        </h5>
        <p className="text-sm text-brand-700 leading-relaxed">{project.summary[lang]}</p>

        {/* Footer actions */}
        {(project.url || project.github) && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("project_live_click", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600/50 text-brand-700 rounded px-2.5 py-1 hover:border-accent-700 hover:text-accent-700 transition focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                <FiExternalLink aria-hidden="true" size={11} />
                {ctaTexts.liveDemo[lang]}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("project_source_click", { slug: project.slug })}
                className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600/50 text-brand-700 rounded px-2.5 py-1 hover:border-accent-700 hover:text-accent-700 transition focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                <FiGithub aria-hidden="true" size={11} />
                {ctaTexts.sourceCode[lang]}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

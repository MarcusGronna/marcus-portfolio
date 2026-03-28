"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";

const cardHover = {
  y: -6,
  transition: { type: "tween" as const, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

const ctaTexts = {
  liveDemo: { en: "Live Demo", sv: "Live Demo" },
  sourceCode: { en: "Source Code", sv: "Källkod" },
  caseStudy: { en: "Case Study", sv: "Fallstudie" },
};

export default function ProjectFrame({
  project,
  priority = false,
  featured = false,
  lang,
}: {
  project: Project;
  priority?: boolean;
  featured?: boolean;
  lang: "en" | "sv";
}) {
  const router = useRouter();

  // Determine the card-level link destination: case study > url > github
  const cardHref = project.caseStudy
    ? `/${lang}/projects/${project.slug}`
    : project.url ?? project.github ?? null;
  const cardIsExternal = !project.caseStudy && cardHref != null;

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on an interactive element (link, button)
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) return;
    if (!cardHref) return;

    if (project.caseStudy) {
      track("case_study_open", { slug: project.slug });
      router.push(cardHref);
    } else if (project.url) {
      track("project_live_click", { slug: project.slug });
      window.open(cardHref, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      track("project_source_click", { slug: project.slug });
      window.open(cardHref, "_blank", "noopener,noreferrer");
    }
  };

  if (featured) {
    return (
      <motion.article
        variants={fadeUp}
        whileHover={cardHover}
        onClick={handleCardClick}
        className="
          flex flex-col md:flex-row
          border border-accent-400/60
          rounded-xl
          shadow-sm
          overflow-hidden
          bg-surface-50
          cursor-pointer
          transition-shadow duration-300 ease-in-out
          hover:shadow-lg
          focus-within:ring-2 focus-within:ring-accent-400
          transform-gpu will-change-transform
          group
        "
      >
        {/* Image */}
        <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[300px] shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03] transform-gpu"
            priority={priority}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-3 leading-tight">
            {cardHref && !cardIsExternal ? (
              <Link
                href={cardHref}
                className="hover:text-accent-700 transition-colors focus-visible:outline-none"
                onClick={() => {
                  if (project.caseStudy) track("case_study_open", { slug: project.slug });
                }}
              >
                {project.title[lang]}
              </Link>
            ) : (
              project.title[lang]
            )}
          </h3>
          <p className="text-base text-brand-700 mb-5 leading-relaxed">{project.summary[lang]}</p>

          {project.highlights && (
            <ul className="space-y-2 mb-5" aria-label="Project highlights">
              {project.highlights[lang].slice(0, 3).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-700 leading-snug">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-accent-700" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* External CTAs */}
          {(project.url || project.github) && (
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand-600/10">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    track("project_live_click", { slug: project.slug });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-accent-400 text-ink-900 rounded px-3.5 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
                >
                  <FiExternalLink aria-hidden="true" size={13} />
                  {ctaTexts.liveDemo[lang]}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    track("project_source_click", { slug: project.slug });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border border-brand-600 text-ink-900 rounded px-3.5 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
                >
                  <FiGithub aria-hidden="true" size={13} />
                  {ctaTexts.sourceCode[lang]}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  // Standard card
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      onClick={handleCardClick}
      className="
        w-[300px] sm:w-[320px] md:w-auto
        flex flex-col
        border border-brand-600/20
        rounded-xl
        shadow-sm
        overflow-hidden
        bg-surface-50
        cursor-pointer
        transition-shadow duration-300 ease-in-out
        hover:shadow-md
        focus-within:ring-2 focus-within:ring-accent-400
        transform-gpu will-change-transform
        group
      "
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title[lang]}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03] transform-gpu"
          priority={priority}
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-bold text-lg mb-1.5 leading-snug">
          {cardHref && !cardIsExternal ? (
            <Link
              href={cardHref}
              className="hover:text-accent-700 transition-colors focus-visible:outline-none"
              onClick={() => {
                if (project.caseStudy) track("case_study_open", { slug: project.slug });
              }}
            >
              {project.title[lang]}
            </Link>
          ) : (
            project.title[lang]
          )}
        </h4>
        <p className="text-sm text-brand-700 leading-relaxed line-clamp-2">{project.summary[lang]}</p>

        {/* External CTAs */}
        {(project.url || project.github) && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  track("project_live_click", { slug: project.slug });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
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
                onClick={(e) => {
                  e.stopPropagation();
                  track("project_source_click", { slug: project.slug });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
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

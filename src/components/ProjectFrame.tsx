"use client";
import Link from "next/link";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import type { Project } from "@/content/projects";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";
import { useLang } from "@/components/LangProvider";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";

// Max tech badges shown on card surface (rest hidden to keep cards scannable)
const MAX_CARD_TECH = 5;

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

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    track("project_live_click", { slug: project.slug });
  };

  const handleSourceCodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    track("project_source_click", { slug: project.slug });
  };

  // Determine the card-level link destination: case study > url > github
  const cardHref = project.caseStudy
    ? `/projects/${project.slug}`
    : project.url ?? project.github ?? null;
  const cardIsExternal = !project.caseStudy && cardHref != null;

  // Label for the stretched link
  const cardAriaLabel = project.caseStudy
    ? `${project.title[lang]} – ${ctaTexts.caseStudy[lang]}`
    : project.url
    ? `${project.title[lang]} – ${ctaTexts.liveDemo[lang]}`
    : `${project.title[lang]} – ${ctaTexts.sourceCode[lang]}`;

  const handleCardClick = () => {
    if (project.caseStudy) {
      track("case_study_open", { slug: project.slug });
    } else if (project.url) {
      track("project_live_click", { slug: project.slug });
    } else if (project.github) {
      track("project_source_click", { slug: project.slug });
    }
  };

  // Limit tech badges shown on card
  const visibleTech = project.tech.slice(0, MAX_CARD_TECH);
  const extraTechCount = project.tech.length - MAX_CARD_TECH;

  if (featured) {
    return (
      <motion.div
        variants={fadeUp}
        className="
          relative
          flex flex-col md:flex-row
          border-2 border-accent-400
          rounded-xl
          shadow-md hover:shadow-lg
          hover:-translate-y-1
          transition-[transform,box-shadow] duration-500 ease-out
          overflow-hidden
          bg-surface-50
          mb-2 md:mb-6
          group
        "
      >
        {/* Stretched link – covers entire card */}
        {cardHref && (
          <Link
            href={cardHref}
            onClick={handleCardClick}
            target={cardIsExternal ? "_blank" : undefined}
            rel={cardIsExternal ? "noopener noreferrer" : undefined}
            className="absolute inset-0 z-[1] rounded-xl focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset"
            aria-label={cardAriaLabel}
          />
        )}

        {/* Image */}
        <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[280px] shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>

        {/* Content */}
        <div className="relative z-[2] p-5 flex-1 flex flex-col">
          <h4 className="font-bold text-2xl mb-2">{project.title[lang]}</h4>
          <p className="text-base text-brand-700 mb-4 leading-relaxed">{project.summary[lang]}</p>

          {project.highlights && (
            <ul className="space-y-1.5 mb-4" aria-label="Project highlights">
              {project.highlights[lang].slice(0, 4).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-brand-700 leading-snug">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-accent-700" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {visibleTech.map((label) => (
              <SkillBadge key={label} label={label} />
            ))}
            {extraTechCount > 0 && (
              <span className="text-xs font-semibold text-brand-700 self-center">
                +{extraTechCount} more
              </span>
            )}
          </div>

          {/* External CTAs – positioned above the stretched link */}
          {(project.url || project.github) && (
            <div className="relative z-[2] flex flex-wrap gap-2 mt-auto pt-2 border-t border-brand-600/20">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemoClick}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
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
                  onClick={handleSourceCodeClick}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
                >
                  <FiGithub aria-hidden="true" size={12} />
                  {ctaTexts.sourceCode[lang]}
                </a>
              )}
            </div>
          )}

        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      className="
        relative
        w-[300px] sm:w-[320px] md:w-auto
        flex flex-col mb-2 md:mb-6
        border border-brand-600
        rounded-xl
        shadow-sm hover:shadow-md
        hover:-translate-y-1
        transition-[transform,box-shadow] duration-500 ease-out
        overflow-hidden
        bg-surface-50
        group
      "
    >
      {/* Stretched link – covers entire card */}
      {cardHref && (
        <Link
          href={cardHref}
          onClick={handleCardClick}
          target={cardIsExternal ? "_blank" : undefined}
          rel={cardIsExternal ? "noopener noreferrer" : undefined}
          className="absolute inset-0 z-[1] rounded-xl focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset"
          aria-label={cardAriaLabel}
        />
      )}

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title[lang]}
          fill
          sizes="(max-width: 640px) 100vw, 480px"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>

      {/* Text content */}
      <div className="relative z-[2] p-4 flex-1 flex flex-col">
        <h5 className="font-bold text-xl mb-1.5 text-center">{project.title[lang]}</h5>
        <p className="text-sm text-brand-700 mb-3 leading-relaxed">{project.summary[lang]}</p>

        {/* Highlights – max 2 to keep cards tight */}
        {project.highlights && (
          <ul className="space-y-1.5 mb-3" aria-label="Project highlights">
            {project.highlights[lang].slice(0, 2).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-700 leading-snug">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-accent-700"
                  aria-hidden="true"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech badges – limited */}
        <div className="flex flex-wrap gap-2 mb-3">
          {visibleTech.map((label) => (
            <SkillBadge key={label} label={label} />
          ))}
          {extraTechCount > 0 && (
            <span className="text-xs font-semibold text-brand-700 self-center">
              +{extraTechCount} more
            </span>
          )}
        </div>

        {/* External CTAs – positioned above the stretched link */}
        {(project.url || project.github) && (
          <div className="relative z-[2] flex flex-wrap gap-2 mt-auto pt-2 border-t border-brand-600/20">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemoClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold bg-accent-400 text-ink-900 rounded px-3 py-1.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
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
                onClick={handleSourceCodeClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold border border-brand-600 text-ink-900 rounded px-3 py-1.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <FiGithub aria-hidden="true" size={12} />
                {ctaTexts.sourceCode[lang]}
              </a>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
}

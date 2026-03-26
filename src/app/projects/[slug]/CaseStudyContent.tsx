"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowLeft, FiCheckCircle, FiArrowDown, FiZoomIn } from "react-icons/fi";
import { track } from "@vercel/analytics";
import SkillBadge from "@/components/SkillBadge";
import ImageModal from "@/components/ImageModal";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/framer-variants";

const texts = {
  back: { en: "Back to Portfolio", sv: "Tillbaka till Portfolio" },
  role: { en: "My Role", sv: "Min roll" },
  problem: { en: "Problem / Context", sv: "Problem / Kontext" },
  aiIntegration: { en: "AI Integration", sv: "AI-integration" },
  solution: { en: "Solution / Architecture", sv: "Lösning / Arkitektur" },
  architectureFlow: { en: "How It Works – Architecture Flow", sv: "Så fungerar det – Arkitekturflöde" },
  goals: { en: "Goals", sv: "Mål" },
  challenges: { en: "Challenges", sv: "Utmaningar" },
  keyDecisions: { en: "Key Technical Decisions", sv: "Viktiga tekniska beslut" },
  results: { en: "Results / Impact", sv: "Resultat / Effekt" },
  whatILearned: { en: "What I Learned", sv: "Vad jag lärde mig" },
  nextSteps: { en: "What I Would Improve Next", sv: "Vad jag skulle förbättra härnäst" },
  liveDemo: { en: "Live Demo", sv: "Live Demo" },
  sourceCode: { en: "Source Code", sv: "Källkod" },
  ctaTitle: { en: "Explore this project", sv: "Utforska det här projektet" },
  stack: { en: "Tech Stack", sv: "Teknikstack" },
  screenshots: { en: "Screenshots", sv: "Skärmdumpar" },
};

interface Section {
  key: keyof Project;
  label: { en: string; sv: string };
  isArray?: boolean;
  variant?: "flow" | "paragraph" | "list";
}

const sections: Section[] = [
  { key: "problem", label: texts.problem },
  { key: "aiIntegration", label: texts.aiIntegration },
  { key: "solution", label: texts.solution },
  { key: "architectureFlow", label: texts.architectureFlow, isArray: true, variant: "flow" },
  { key: "goals", label: texts.goals, isArray: true },
  { key: "challenges", label: texts.challenges, isArray: true },
  { key: "keyDecisions", label: texts.keyDecisions, isArray: true },
  { key: "results", label: texts.results, isArray: true },
  { key: "whatILearned", label: texts.whatILearned },
  { key: "nextSteps", label: texts.nextSteps, isArray: true },
];

// ── Architecture flow diagram ─────────────────────────────────────────────

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="not-prose space-y-0">
      {steps.map((step, i) => (
        <li key={i} className="flex flex-col items-center">
          {/* Step box */}
          <div className="w-full flex items-start gap-3 rounded-xl border border-brand-600/30 bg-surface-50 shadow-sm px-4 py-3">
            <span className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-accent-400/30 text-ink-900 text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span className="text-base leading-relaxed text-brand-700">{step}</span>
          </div>
          {/* Connector arrow between steps */}
          {i < steps.length - 1 && (
            <FiArrowDown
              className="my-1.5 text-brand-600/50 shrink-0"
              size={20}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  );
}

export default function CaseStudyContent({ project, lang }: { project: Project; lang: "en" | "sv" }) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      {/* Back link */}
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-base text-brand-700 hover:text-accent-700 hover:bg-accent-400/10 mb-8 transition-colors px-3 py-2 rounded focus-visible:ring-2 focus-visible:ring-accent-400"
      >
        <FiArrowLeft aria-hidden="true" />
        {texts.back[lang]}
      </Link>

      {/* Hero */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mb-2">{project.title[lang]}</h1>

        <p className="text-lg text-brand-700 leading-relaxed mb-6">{project.summary[lang]}</p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-6 mb-6 text-base text-brand-700 border-y border-brand-600/20 py-4">
          {project.role && (
            <div>
              <span className="font-semibold text-ink-900">{texts.role[lang]}: </span>
              {project.role[lang]}
            </div>
          )}
          <div>
            <span className="font-semibold text-ink-900">{project.year}</span>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-ink-900 uppercase tracking-wide mb-3">
            {texts.stack[lang]}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <SkillBadge key={t} label={t} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Case study sections */}
      <div className="space-y-10">
        {sections.map(({ key, label, isArray, variant }) => {
          const value = project[key] as
            | { en: string; sv: string }
            | { en: string[]; sv: string[] }
            | undefined;
          if (!value) return null;

          return (
            <motion.section
              key={key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <h2 className="mb-4">{label[lang]}</h2>

              {variant === "flow" ? (
                <ArchitectureFlow steps={value[lang] as string[]} />
              ) : isArray ? (
                <ul className="space-y-2">
                  {(value[lang] as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-brand-700 leading-relaxed">
                      <FiCheckCircle
                        className="mt-0.5 shrink-0 text-accent-700"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-brand-700 leading-relaxed">{value[lang] as string}</p>
              )}
            </motion.section>
          );
        })}
      </div>

      {/* Screenshot gallery */}
      {project.images && project.images.length > 1 && (
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10"
        >
          <h2 className="mb-4">{texts.screenshots[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.slice(1).map((src, i) => {
              const alt = `${project.title[lang]} screenshot ${i + 2}`;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setModalSrc(src); setModalAlt(alt); }}
                  className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  aria-label={`View full size: ${alt}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <FiZoomIn className="text-white drop-shadow" size={32} aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
        </motion.section>
      )}

      <ImageModal
        src={modalSrc}
        alt={modalAlt}
        onClose={() => setModalSrc(null)}
      />

      {/* CTA block */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 p-6 sm:p-8 bg-surface-50 border border-brand-600/30 rounded-xl shadow-sm"
      >
        <h2 className="mb-4 text-xl">{texts.ctaTitle[lang]}</h2>
        <div className="flex flex-wrap gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_live_click", { slug: project.slug })}
              className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              <FiExternalLink aria-hidden="true" />
              {texts.liveDemo[lang]}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_source_click", { slug: project.slug })}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiGithub aria-hidden="true" />
              {texts.sourceCode[lang]}
            </a>
          )}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
          >
            {lang === "sv" ? "Kontakta mig" : "Contact Me"}
          </Link>
        </div>
      </motion.div>
    </article>
  );
}

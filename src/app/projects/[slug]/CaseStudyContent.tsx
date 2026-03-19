"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";
import { useLang } from "@/components/LangProvider";
import SkillBadge from "@/components/SkillBadge";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/framer-variants";

const texts = {
  back: { en: "Back to Portfolio", sv: "Tillbaka till Portfolio" },
  role: { en: "My Role", sv: "Min roll" },
  problem: { en: "Problem / Context", sv: "Problem / Kontext" },
  aiIntegration: { en: "AI Integration", sv: "AI-integration" },
  solution: { en: "Solution / Architecture", sv: "Lösning / Arkitektur" },
  goals: { en: "Goals", sv: "Mål" },
  challenges: { en: "Challenges", sv: "Utmaningar" },
  keyDecisions: { en: "Key Technical Decisions", sv: "Viktiga tekniska beslut" },
  results: { en: "Results / Impact", sv: "Resultat / Effekt" },
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
}

const sections: Section[] = [
  { key: "problem", label: texts.problem },
  { key: "aiIntegration", label: texts.aiIntegration },
  { key: "solution", label: texts.solution },
  { key: "goals", label: texts.goals, isArray: true },
  { key: "challenges", label: texts.challenges, isArray: true },
  { key: "keyDecisions", label: texts.keyDecisions, isArray: true },
  { key: "results", label: texts.results, isArray: true },
  { key: "nextSteps", label: texts.nextSteps, isArray: true },
];

export default function CaseStudyContent({ project }: { project: Project }) {
  const { lang } = useLang();

  return (
    <article className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      {/* Back link */}
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-accent-700 mb-8 transition-colors focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
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
        <div className="flex flex-wrap gap-6 mb-6 text-sm text-brand-700 border-y border-brand-600/20 py-4">
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
        {sections.map(({ key, label, isArray }) => {
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
              <h2 className="mb-3">{label[lang]}</h2>
              {isArray ? (
                <ul className="space-y-2">
                  {(value[lang] as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-700 leading-relaxed">
                      <FiCheckCircle
                        className="mt-0.5 shrink-0 text-accent-700"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-brand-700 leading-relaxed">{value[lang] as string}</p>
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
            {project.images.slice(1).map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`${project.title[lang]} screenshot ${i + 2}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.section>
      )}

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

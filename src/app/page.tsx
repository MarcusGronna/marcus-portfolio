"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { track } from "@vercel/analytics";
import PortraitFrame from "@/components/PortraitFrame";
import ProjectShelf from "@/components/ProjectShelf";
import ProjectFrame from "@/components/ProjectFrame";
import JourneyTimeline from "@/components/JourneyTimeline";
import { fadeUp } from "@/lib/framer-variants";
import { projects } from "@/content/projects";
import { skillCategories } from "@/content/skills";
import { useLang } from "@/components/LangProvider";
import { dict } from "@/content/i18n";

const texts = {
  aboutBtn: { en: "About Me", sv: "Om Mig" },
  contactBtn: { en: "Contact", sv: "Kontakt" },
};

// Skill bucket styling
const bucketStyles: Record<string, { wrapper: string; badge: string; label: string }> = {
  core: {
    wrapper: "mb-10",
    badge: "bg-accent-400/25 border border-accent-400/50 text-ink-900 font-semibold",
    label: "text-ink-900 font-bold",
  },
  also: {
    wrapper: "mb-10",
    badge: "bg-surface-50 border border-brand-600/30 text-brand-800",
    label: "text-brand-700 font-semibold",
  },
  focus: {
    wrapper: "mb-10",
    badge: "bg-brand-600/10 border border-brand-600/20 text-brand-800 italic",
    label: "text-brand-700 font-semibold",
  },
  languages: {
    wrapper: "",
    badge: "bg-surface-50 border border-brand-600/20 text-brand-700",
    label: "text-brand-700 font-semibold",
  },
};

export default function Home() {
  const { lang } = useLang();
  const [showAbout, setShowAbout] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const proofBadges = [
    dict[lang].proofStack,
    dict[lang].proofAI,
    dict[lang].proofMindset,
    dict[lang].proofLocation,
  ];

  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-10 md:mb-16 px-2 sm:px-4"
      >
        {/* Portrait */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <PortraitFrame
            flipped={flipped}
            onToggle={() => setFlipped((v) => !v)}
            className="lg:sticky lg:top-36 mt-6 lg:mt-4 w-32 sm:w-48 md:w-80 xl:w-100 h-32 sm:h-48 md:h-80 xl:h-100"
          />
        </div>

        {/* Text column */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start max-w-xl w-full">
          {/* Hero headline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5 text-center lg:text-left w-full"
          >
            <h1 className="mb-1">{dict[lang].heroRole}</h1>
            <p className="text-base font-semibold text-brand-700 mb-3">{dict[lang].heroLocation}</p>

            {/* Proof badges row */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
              {proofBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent-400/20 border border-accent-400/40 text-ink-900"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-base text-brand-800 leading-relaxed max-w-md">
              {dict[lang].heroTagline}
            </p>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-accent-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              {dict[lang].viewProjects}
            </Link>
            <a
              href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
              download
              onClick={() => track("cv_download")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiDownload aria-hidden="true" size={16} />
              {dict[lang].downloadCV}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              {texts.contactBtn[lang]}
            </Link>
          </motion.div>

          {/* About Me toggle */}
          <button
            onClick={() => setShowAbout((v) => !v)}
            type="button"
            aria-expanded={showAbout}
            aria-controls="about-panel"
            className="flex items-center gap-2 cursor-pointer underline underline-offset-8 decoration-[5px] hover:decoration-2 text-xl transition hover:text-accent-300 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
          >
            {texts.aboutBtn[lang]}
            {showAbout ? (
              <FiChevronUp className="text-2xl" aria-hidden="true" />
            ) : (
              <FiChevronDown className="text-2xl" aria-hidden="true" />
            )}
          </button>

          {/* Collapsible About */}
          <motion.div
            id="about-panel"
            initial={false}
            animate={showAbout ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <div className="bg-surface-50 rounded-xl shadow-md border border-brand-600 text-center lg:text-left">
              <div className="prose prose-neutral text-base max-h-[20rem] overflow-y-auto p-6">
                {dict[lang].aboutParagraphs.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="flex flex-col items-center justify-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8">{dict[lang].portfolio}</h2>

          {/* Flagship project */}
          {(() => {
            const flagship = projects.find((p) => p.featured);
            if (!flagship) return null;
            return (
              <div className="mb-12 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">
                  {lang === "sv" ? "Flaggskeppsprojekt" : "Flagship Project"}
                </p>
                <ProjectFrame project={flagship} priority featured />
              </div>
            );
          })()}

          {/* All other projects grouped by year */}
          {Object.entries(
            projects
              .filter((p) => !p.featured)
              .reduce<Record<string, typeof projects>>((acc, p) => {
                const year = p.year || "Unknown";
                (acc[year] ??= []).push(p);
                return acc;
              }, {})
          )
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearProjects]) => (
              <div key={year} className="mb-12">
                <h3 className="text-3xl font-semibold mb-6">{year}</h3>
                <ProjectShelf projects={yearProjects} />
              </div>
            ))}
        </motion.div>
      </section>

      {/* JOURNEY — education + experience combined timeline */}
      <section id="journey" className="flex flex-col items-center justify-center mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <h2 className="text-center mb-10">{dict[lang].journey}</h2>
          <JourneyTimeline />
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="flex flex-col items-center justify-center mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl"
        >
          <h2 className="text-2xl font-bold mb-8">{dict[lang].skills}</h2>
          <div className="space-y-0">
            {skillCategories.map((cat) => {
              const style = bucketStyles[cat.bucket] ?? bucketStyles.also;
              return (
                <div key={cat.bucket} className={style.wrapper}>
                  <h3 className={`text-xs uppercase tracking-widest mb-3 ${style.label}`}>
                    {cat.category[lang]}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <li
                        key={skill}
                        className={`text-sm rounded-full px-3 py-1.5 ${style.badge}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="flex flex-col items-center justify-center text-center mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-2">{dict[lang].contact}</h2>
          <p className="mb-8 text-brand-800 text-base sm:text-lg leading-relaxed">
            {dict[lang].contactSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xl mb-6 w-full">
            <a
              href="mailto:hi@marcusgronna.com"
              onClick={() => track("email_click")}
              className="flex items-center justify-center gap-2 text-accent-700 hover:text-accent-400 underline font-semibold"
              aria-label="Email"
            >
              <FiMail aria-hidden="true" /> hi@marcusgronna.com
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("linkedin_click")}
              aria-label="LinkedIn"
              className="flex items-center justify-center gap-2 hover:text-accent-700"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="https://github.com/MarcusGronna"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("github_click")}
              aria-label="GitHub"
              className="flex items-center justify-center gap-2 hover:text-accent-700"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block bg-accent-400 text-ink-900 font-semibold rounded px-6 py-2 hover:bg-accent-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              {dict[lang].contactPage}
            </Link>
            <a
              href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
              download
              onClick={() => track("cv_download")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-6 py-2 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiDownload aria-hidden="true" size={16} />
              {dict[lang].downloadCV}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

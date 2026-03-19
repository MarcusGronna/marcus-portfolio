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
  about: {
    en: [
      "Hi! I'm Marcus Grönnå, a Stockholm-based Fullstack .NET Developer with a strong drive to learn new technologies and build reliable, user-focused solutions. Through School of Applied Technology, one year of JavaScript studies focused on React and TypeScript at Företagsuniversitetet, and a Higher Education Diploma from the Webmaster programme at University West, I have built a broad foundation in backend, frontend, UI/UX, and web administration.",
      "My background in sports and health science has strengthened my ability to work with people, long-term development, and sustainable performance. At the same time, more than a decade as a train driver has given me a calm and methodical way of working, a strong sense of responsibility, and the ability to make well-considered decisions under pressure.",
      "I thrive on learning fast and solving real problems. Whether it's crafting React components that feel effortless, building robust APIs in C# .NET, or designing interfaces that invite interaction, I love the challenge of making tech both powerful and approachable.",
      "Right now, I'm working as a fullstack .NET consultant at School of Applied Technology, and launching projects you can explore here. If you have an idea you want to bring to life, feel free to reach out—let's build something great together!",
    ],
    sv: [
      "Hej! Jag heter Marcus Grönnå, en Stockholm-baserad Fullstack .NET Developer med stark drivkraft att lära mig nya tekniker och bygga pålitliga, användarfokuserade lösningar. Genom School of Applied Technology, ett års studier i JavaScript med fokus på React och TypeScript vid Företagsuniversitetet samt en högskoleexamen från Webmasterprogrammet vid Högskolan Väst har jag byggt en bred grund inom backend, frontend, UI/UX och webbadministration.",
      "Min bakgrund inom idrotts- och hälsovetenskap har stärkt min förmåga att arbeta med människor, långsiktig utveckling och hållbar prestation. Mer än ett decennium som lokförare har samtidigt gett mig ett lugnt och metodiskt arbetssätt, hög ansvarskänsla och vana att fatta genomtänkta beslut även under press.",
      "Jag trivs med att lära mig snabbt och lösa verkliga problem. Oavsett om det handlar om att skapa React-komponenter som känns enkla, bygga robusta API:er i C# .NET eller designa gränssnitt som bjuder in till interaktion, älskar jag utmaningen att göra tekniken både kraftfull och lättillgänglig.",
      "Just nu arbetar jag som fullstack .NET-konsult via School of Applied Technology och lanserar projekt som du kan utforska här. Har du en idé du vill förverkliga? Tveka inte att höra av dig—låt oss bygga något fantastiskt tillsammans!",
    ],
  },
};

export default function Home() {
  const { lang } = useLang();
  const [showAbout, setShowAbout] = useState(false);
  const [flipped, setFlipped] = useState(false);

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
            className="mb-6 text-center lg:text-left"
          >
            <h1 className="mb-1">{dict[lang].heroRole}</h1>
            <p className="text-base text-brand-600 mb-4">{dict[lang].heroLocation}</p>
            <p className="text-lg text-brand-700 leading-relaxed max-w-md">
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
              className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              {dict[lang].viewProjects}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              {texts.contactBtn[lang]}
            </Link>
            <a
              href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
              download
              onClick={() => track("cv_download")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2.5 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiDownload aria-hidden="true" size={16} />
              {dict[lang].downloadCV}
            </a>
          </motion.div>

          {/* About Me toggle */}
          <button
            onClick={() => setShowAbout((v) => !v)}
            type="button"
            className="flex items-center gap-2 cursor-pointer underline underline-offset-8 decoration-[5px] hover:decoration-2 text-xl transition hover:text-accent-300 mb-4"
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
            initial={false}
            animate={showAbout ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <div className="bg-surface-50 rounded-xl shadow-md border border-brand-600 text-center lg:text-left">
              <div className="prose prose-neutral text-lg max-h-[20rem] overflow-y-auto p-6">
                {texts.about[lang].map((p, i) => (
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
                <h3 className="text-xl font-semibold mb-4">{year}</h3>
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
          className="w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold mb-8">{dict[lang].skills}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {skillCategories.map((cat) => (
              <div key={cat.category.en}>
                <h3 className="text-base font-bold text-brand-800 mb-3 uppercase tracking-wide">
                  {cat.category[lang]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm bg-surface-50 border border-brand-600/30 text-brand-800 rounded px-2.5 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <p className="mb-8 text-brand-700 text-base sm:text-lg">
            {dict[lang].contactSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xl mb-6 w-full">
            <a
              href="mailto:hi@marcusgronna.com"
              onClick={() => track("email_click")}
              className="flex items-center justify-center gap-2 text-accent-700 hover:text-accent-800 underline"
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
              className="inline-block bg-accent-400 text-ink-900 font-semibold rounded px-6 py-2 hover:bg-accent-300 transition focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              {dict[lang].contactPage}
            </Link>
            <a
              href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
              download
              onClick={() => track("cv_download")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-6 py-2 hover:bg-brand-600/10 transition focus-visible:ring-2 focus-visible:ring-brand-600"
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


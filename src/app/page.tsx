"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PortraitFrame from "@/components/PortraitFrame";
import ProjectShelf from "@/components/ProjectShelf";
import { fadeUp } from "@/lib/framer-variants";
import { projects } from "@/content/projects";
import { education } from "@/content/education";
import { useLang } from "@/components/LangProvider";
import { dict } from "@/content/i18n";

const texts = {
  aboutBtn: { en: "About Me", sv: "Om Mig" },
  contactBtn: { en: "Contact", sv: "Kontakt" },
  about: {
    en: [
      "Hi! I’m Marcus Grönnå, a Stockholm-based developer with a passion for building beautiful, robust web experiences. My journey started in the gym as a personal trainer, but these days I channel that same discipline and curiosity into full-stack development, always striving for clean code and seamless user interfaces.",
      "I thrive on learning fast and solving real problems. Whether it’s crafting React components that feel effortless, optimizing APIs for performance, or designing interfaces that invite interaction, I love the challenge of making tech both powerful and approachable.",
      "Outside of coding, you’ll find me running long distances, lifting heavy, or rolling on the mats for some early-morning Brazilian Jiu-Jitsu. I believe the same principles apply in both training and tech: set clear goals, iterate quickly, and celebrate every bit of progress, no matter how small.",
      "Right now, I’m studying full-stack development full-time, freelancing when I can, and launching projects you can explore here. If you have an idea you want to bring to life, feel free to reach out—let’s build something great together!",
    ],
    sv: [
      "Hej! Jag heter Marcus Grönnå, en Stockholm-baserad utvecklare med en passion för att bygga vackra och robusta webbupplevelser. Min resa började på gymmet som personlig tränare, men nuförtiden kanaliserar jag samma disciplin och nyfikenhet i fullstack­utveckling, alltid med strävan efter ren kod och sömlösa gränssnitt.",
      "Jag trivs med att lära mig snabbt och lösa verkliga problem. Oavsett om det handlar om att skapa React-komponenter som känns enkla, optimera API:er för prestanda eller designa gränssnitt som bjuder in till interaktion, älskar jag utmaningen att göra tekniken både kraftfull och lättillgänglig.",
      "Utanför kodningen hittar du mig springa långa sträckor, lyfta tungt eller rulla på mattorna för lite tidig morgon-BJJ. Jag tror att samma principer gäller i både träning och teknik: sätt tydliga mål, iterera snabbt och fira varje framsteg, oavsett hur litet.",
      "Just nu studerar jag fullstack­utveckling på heltid, frilansar när jag kan och lanserar projekt som du kan utforska här. Har du en idé du vill förverkliga? Tveka inte att höra av dig—låt oss bygga något fantastiskt tillsammans!",
    ],
  },
};

export default function Home() {
  const { lang } = useLang();
  const [showAbout, setShowAbout] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // gruppera projekt efter år
  const projectsByYear = projects.reduce<Record<string, typeof projects>>((acc, p) => {
    const year = p.year || "Unknown";
    (acc[year] ??= []).push(p);
    return acc;
  }, {});

  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-10 md:mb-16 px-2 sm:px-4"
      >
        {/* Bild */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <PortraitFrame
            flipped={flipped}
            onToggle={() => setFlipped((v) => !v)}
            className="lg:sticky lg:top-36 mt-6 lg:mt-4 w-32 sm:w-48 md:w-80 xl:w-100 h-32 sm:h-48 md:h-80 xl:h-100"
          />
        </div>

        {/* Textkolumn – knappar + About-ruta */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start max-w-xl w-full">
          {/* Knappar ovanför rutan */}
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setFlipped((v) => !v)}
              type="button"
              className="flex items-center gap-2 cursor-pointer underline underline-offset-8 decoration-[5px] hover:decoration-2 text-2xl transition hover:text-accent-300"
            >
              {texts.contactBtn[lang]}
            </button>

            <button
              onClick={() => setShowAbout((v) => !v)}
              type="button"
              className="flex items-center gap-2 cursor-pointer underline underline-offset-8 decoration-[5px] hover:decoration-2 text-2xl transition hover:text-accent-300"
            >
              {texts.aboutBtn[lang]}
              {showAbout ? (
                <FiChevronUp className="text-3xl" />
              ) : (
                <FiChevronDown className="text-3xl" />
              )}
            </button>
          </div>

          {/* Fällbar About-ruta */}
          <motion.div
            initial={false}
            animate={showAbout ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-h-[20rem] overflow-y-auto"
          >
            <div className="prose prose-neutral text-lg bg-surface-50 rounded-xl shadow-md border border-brand-600 p-6 text-center lg:text-left">
              {texts.about[lang].map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
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
          {Object.entries(projectsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearProjects]) => (
              <div key={year} className="mb-12">
                <h3 className="text-xl font-semibold mb-4">{year}</h3>
                <ProjectShelf projects={yearProjects} />
              </div>
            ))}
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="flex flex-col items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold mb-8">{dict[lang].education}</h2>
          <ul className="space-y-8 text-left">
            {education.map((item) => (
              <li key={item.id || `${item.year}-${item.school}`}>
                <div>
                  <div className="text-lg font-bold">{item.school[lang]}</div>
                  <div className="text-base text-brand-800">{item.program[lang]}</div>
                  {item.description && (
                    <div className="text-sm text-brand-700 mt-1">{item.description[lang]}</div>
                  )}
                  <div className="text-sm text-brand-700 font-semibold">{item.year}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </>
  );
}

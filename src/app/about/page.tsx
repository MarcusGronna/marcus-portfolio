"use client";
import PortraitFrame from "@/components/PortraitFrame";
import { useLang } from "@/components/LangProvider";
import { experience } from "@/content/experience";
import { skillCategories } from "@/content/skills";
import { dict } from "@/content/i18n";

const texts = {
  title: { en: "About Me", sv: "Om mig" },
  summary: {
    en: [
      "I am a Fullstack .NET Developer with a strong drive to learn new technologies and build reliable, user-focused solutions. Through School of Applied Technology, one year of JavaScript studies focused on React and TypeScript at Företagsuniversitetet, and a Higher Education Diploma from the Webmaster programme at University West, I have built a broad foundation in backend, frontend, UI/UX, and web administration.",
      "My background in sports and health science has strengthened my ability to work with people, long-term development, and sustainable performance. At the same time, more than a decade as a train driver has given me a calm and methodical way of working, a strong sense of responsibility, and the ability to make well-considered decisions under pressure.",
    ],
    sv: [
      "Jag är en Fullstack .NET Developer med stark drivkraft att lära mig nya tekniker och bygga pålitliga, användarfokuserade lösningar. Genom School of Applied Technology, ett års studier i JavaScript med fokus på React och TypeScript vid Företagsuniversitetet samt en högskoleexamen från Webmasterprogrammet vid Högskolan Väst har jag byggt en bred grund inom backend, frontend, UI/UX och webbadministration.",
      "Min bakgrund inom idrotts- och hälsovetenskap har stärkt min förmåga att arbeta med människor, långsiktig utveckling och hållbar prestation. Mer än ett decennium som lokförare har samtidigt gett mig ett lugnt och metodiskt arbetssätt, hög ansvarskänsla och vana att fatta genomtänkta beslut även under press.",
    ],
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <section className="max-w-2xl py-8 px-2 sm:px-4 mb-12">
      <h2 className="text-2xl font-bold mb-6">{texts.title[lang]}</h2>
      <PortraitFrame small flipped={false} onToggle={() => {}} />

      {/* Professional summary */}
      <div className="mt-8 space-y-4">
        {texts.summary[lang].map((p, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">{dict[lang].skills}</h3>
        <div className="space-y-4">
          {skillCategories.map((cat) => (
            <div key={cat.category.en}>
              <div className="text-sm font-semibold text-brand-700 mb-1">{cat.category[lang]}</div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent-400/20 text-accent-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">{dict[lang].experience}</h3>
        <ul className="space-y-6">
          {experience.map((item) => (
            <li key={item.id}>
              <div className="text-base font-bold">{item.title[lang]}</div>
              <div className="text-sm text-brand-800">{item.employer[lang]}</div>
              <div className="text-sm text-brand-700 font-semibold mb-1">{item.period}</div>
              <ul className="list-disc list-inside space-y-1">
                {item.bullets[lang].map((bullet, i) => (
                  <li key={i} className="text-sm text-brand-700 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

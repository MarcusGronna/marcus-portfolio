"use client";
import PortraitFrame from "@/components/PortraitFrame";
import { useLang } from "@/components/LangProvider";
import { skillCategories } from "@/content/skills";
import { dict } from "@/content/i18n";
import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { track } from "@vercel/analytics";

const bucketStyles: Record<string, { badge: string; label: string }> = {
  core: {
    badge: "bg-accent-400/25 border border-accent-400/50 text-ink-900 font-semibold",
    label: "text-ink-900 font-bold",
  },
  also: {
    badge: "bg-surface-50 border border-brand-600/30 text-brand-800",
    label: "text-brand-700 font-semibold",
  },
  focus: {
    badge: "bg-brand-600/10 border border-brand-600/20 text-brand-800 italic",
    label: "text-brand-700 font-semibold",
  },
  languages: {
    badge: "bg-surface-50 border border-brand-600/20 text-brand-700",
    label: "text-brand-700 font-semibold",
  },
};

const texts = {
  title: { en: "About Me", sv: "Om mig" },
  ctaCV: { en: "Download CV", sv: "Ladda ner CV" },
  ctaContact: { en: "Get in touch", sv: "Kontakta mig" },
  backHome: { en: "← Back to homepage", sv: "← Tillbaka till startsidan" },
};

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <section className="max-w-2xl mx-auto py-8 px-2 sm:px-4 mb-12">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        <PortraitFrame small flipped={false} onToggle={() => {}} />
        <div className="flex-1">
          <h1 className="mb-3">{texts.title[lang]}</h1>
          {dict[lang].aboutParagraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4 text-brand-800">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
              download
              onClick={() => track("cv_download")}
              className="inline-flex items-center gap-2 bg-accent-400 text-ink-900 font-semibold rounded px-5 py-2 hover:bg-accent-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
            >
              <FiDownload aria-hidden="true" size={16} />
              {texts.ctaCV[lang]}
            </a>
            <a
              href="mailto:hi@marcusgronna.com"
              onClick={() => track("email_click")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiMail aria-hidden="true" size={16} />
              {texts.ctaContact[lang]}
            </a>
          </div>
        </div>
      </div>

      {/* Skills – curated buckets */}
      <div className="mt-10">
        <h2 className="mb-6">{dict[lang].skills}</h2>
        <div className="space-y-8">
          {skillCategories.map((cat) => {
            const style = bucketStyles[cat.bucket] ?? bucketStyles.also;
            return (
              <div key={cat.bucket}>
                <p className={`text-xs uppercase tracking-widest mb-3 ${style.label}`}>
                  {cat.category[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center px-3 py-1 text-sm rounded-full ${style.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/#home"
          className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
        >
          {texts.backHome[lang]}
        </Link>
      </div>
    </section>
  );
}

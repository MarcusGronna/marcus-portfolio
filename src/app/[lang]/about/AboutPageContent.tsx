"use client";
import PortraitFrame from "@/components/PortraitFrame";
import { dict } from "@/content/i18n";
import Link from "next/link";
import { FiDownload, FiMail, FiCheckCircle } from "react-icons/fi";
import { track } from "@vercel/analytics";

export default function AboutPageContent({ lang }: { lang: "en" | "sv" }) {
  return (
    <section className="max-w-2xl mx-auto py-8 px-2 sm:px-4 mb-12">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        <PortraitFrame small flipped={false} onToggle={() => {}} />
        <div className="flex-1">
          <h1 className="mb-3">{dict[lang].aboutPageTitle}</h1>
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
              {dict[lang].downloadCV}
            </a>
            <a
              href="mailto:hi@marcusgronna.com"
              onClick={() => track("email_click")}
              className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded px-5 py-2 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FiMail aria-hidden="true" size={16} />
              {lang === "sv" ? "Kontakta mig" : "Get in touch"}
            </a>
          </div>
        </div>
      </div>

      {/* How I approach the work – unique to this page */}
      <div className="mt-10 rounded-xl border border-brand-600/30 bg-surface-50 p-6 shadow-sm">
        <h2 className="mb-5">{dict[lang].aboutPageApproach}</h2>
        <ul className="space-y-4">
          {dict[lang].aboutPageApproachItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-brand-700 leading-relaxed">
              <FiCheckCircle className="mt-0.5 shrink-0 text-accent-700" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <Link
          href={`/${lang}#home`}
          className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
        >
          {dict[lang].backToHome}
        </Link>
      </div>
    </section>
  );
}

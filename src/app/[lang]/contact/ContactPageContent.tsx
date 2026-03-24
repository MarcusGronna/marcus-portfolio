"use client";
import { dict } from "@/content/i18n";
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiArrowRight } from "react-icons/fi";
import { track } from "@vercel/analytics";
import Link from "next/link";
import type { Locale } from "@/middleware";

const texts = {
  emailCta: {
    en: "Send me an email",
    sv: "Skicka ett e-postmeddelande",
  },
  emailHint: {
    en: "Opens your email client with my address pre-filled.",
    sv: "Öppnar din e-postklient med min adress ifylld.",
  },
  linkedInCta: { en: "Connect on LinkedIn", sv: "Connecta på LinkedIn" },
  githubCta: { en: "View my GitHub", sv: "Se mitt GitHub" },
  orLabel: { en: "or", sv: "eller" },
};

export default function ContactPageContent({ lang }: { lang: Locale }) {
  return (
    <section className="max-w-2xl mx-auto py-10 px-4 sm:px-6 flex flex-col items-center">
      <h1 className="mb-3 text-center">{dict[lang].contact}</h1>
      <p className="mb-10 text-brand-800 text-base leading-relaxed text-center max-w-md">
        {dict[lang].contactSubtitle}
      </p>

      {/* Primary CTA – Email */}
      <a
        href="mailto:hi@marcusgronna.com"
        onClick={() => track("email_click")}
        className="w-full max-w-sm flex items-center justify-between gap-3 bg-accent-400 text-ink-900 font-semibold rounded-xl px-6 py-4 hover:bg-accent-300 transition mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 shadow-sm"
        aria-label={texts.emailCta[lang]}
      >
        <span className="flex items-center gap-3">
          <FiMail size={22} aria-hidden="true" />
          <span>
            <span className="block text-base">{texts.emailCta[lang]}</span>
            <span className="block text-xs font-normal opacity-75">hi@marcusgronna.com</span>
          </span>
        </span>
        <FiArrowRight size={18} aria-hidden="true" />
      </a>

      <p className="text-brand-700 text-sm mb-4">{texts.emailHint[lang]}</p>

      <div className="flex items-center gap-3 w-full max-w-sm mb-4">
        <div className="flex-1 h-px bg-brand-600/20" />
        <span className="text-sm text-brand-700">{texts.orLabel[lang]}</span>
        <div className="flex-1 h-px bg-brand-600/20" />
      </div>

      {/* Secondary CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mb-8">
        <a
          href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("linkedin_click")}
          aria-label="LinkedIn"
          className="flex-1 flex items-center justify-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded-xl px-4 py-3 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
        >
          <FiLinkedin aria-hidden="true" size={18} /> {texts.linkedInCta[lang]}
        </a>
        <a
          href="https://github.com/MarcusGronna"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("github_click")}
          aria-label="GitHub"
          className="flex-1 flex items-center justify-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded-xl px-4 py-3 hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
        >
          <FiGithub aria-hidden="true" size={18} /> {texts.githubCta[lang]}
        </a>
      </div>

      {/* CV download */}
      <a
        href={lang === "sv" ? "/marcus-gronna-cv-sv.pdf" : "/marcus-gronna-cv-en.pdf"}
        download
        onClick={() => track("cv_download")}
        className="inline-flex items-center gap-2 border border-brand-600 text-ink-900 font-semibold rounded-xl px-6 py-3 hover:bg-brand-600/10 transition mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
      >
        <FiDownload aria-hidden="true" size={18} />
        {dict[lang].downloadCV}
      </a>

      {/* Back link */}
      <Link
        href={`/${lang}#home`}
        className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
      >
        {dict[lang].backToHome}
      </Link>
    </section>
  );
}

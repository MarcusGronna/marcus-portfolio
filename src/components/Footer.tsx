"use client";
import { track } from "@vercel/analytics/react";
import type { Locale } from "@/middleware";

const texts = {
  github: { en: "GitHub", sv: "GitHub" },
  linkedin: { en: "LinkedIn", sv: "LinkedIn" },
  email: { en: "Email", sv: "E-post" },
  copyright: {
    en: `© ${new Date().getFullYear()} Marcus Grönnå. Built with Next.js.`,
    sv: `© ${new Date().getFullYear()} Marcus Grönnå. Byggd med Next.js.`,
  },
};

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="text-center text-sm text-surface-50 bg-brand-600/90 py-5" role="contentinfo">
      <nav aria-label={lang === "en" ? "Social links" : "Sociala länkar"}>
        <ul className="flex justify-center items-center gap-5 mb-2 list-none p-0 m-0">
          <li>
            <a
              href="https://github.com/MarcusGronna"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("github_click")}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
            >
              {texts.github[lang]}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("linkedin_click")}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
            >
              {texts.linkedin[lang]}
            </a>
          </li>
          <li>
            <a
              href="mailto:hi@marcusgronna.com"
              onClick={() => track("email_click")}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
            >
              {texts.email[lang]}
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-xs opacity-75 mt-1">{texts.copyright[lang]}</p>
    </footer>
  );
}

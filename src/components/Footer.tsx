"use client";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { lang } = useLang();

  const texts = {
    github: { en: "GitHub", sv: "GitHub" },
    linkedin: { en: "LinkedIn", sv: "LinkedIn" },
    copyright: {
      en: `© ${new Date().getFullYear()} Marcus Grönnå.`,
      sv: `© ${new Date().getFullYear()} Marcus Grönnå.`,
    },
  };

  return (
    <footer className="text-center text-sm text-surface-50 bg-brand-600/90 py-4">
      <div className="flex justify-center items-center gap-4 mb-2">
        <a
          href="https://github.com/MarcusGronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:underline"
        >
          {texts.github[lang]}
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:underline"
        >
          {texts.linkedin[lang]}
        </a>
      </div>
      {texts.copyright[lang]}
    </footer>
  );
}

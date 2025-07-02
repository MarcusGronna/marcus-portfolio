"use client";
import { useLang } from "./LangProvider";

const navLinks = [
  { href: "#home", label: { en: "Home", sv: "Hem" } },
  { href: "#about", label: { en: "About Me", sv: "Om mig" } },
  { href: "#portfolio", label: { en: "Portfolio", sv: "Portfolio" } },
  { href: "#education", label: { en: "Education", sv: "Utbildning" } },
  { href: "#contact", label: { en: "Contact", sv: "Kontakt" } },
];

export default function ChalkNav() {
  const { lang, setLang } = useLang();

  return (
    <nav className="bg-brand-600 text-surface-50 sticky top-0 p-6 z-50 backdrop-blur shadow-md border-b border-brand-600/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-4xl font-bold tracking-widest select-none font-heading">
          Marcus <span className="block md:inline">Grönnå</span>
        </span>
        <ul className="flex gap-8 text-lg font-heading items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors duration-200 text-surface-50 hover:text-accent-400 after:content-[''] after:block after:h-[2px] after:bg-accent-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                style={{ paddingBottom: 2 }}
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
          <li className="pl-4">
            <button
              className="px-4 py-2.5 rounded-md bg-accent-400 text-ink-900 font-semibold hover:bg-accent-300 transition cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-600"
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              aria-label="Toggle language"
              type="button"
            >
              {lang === "en" ? "SV" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

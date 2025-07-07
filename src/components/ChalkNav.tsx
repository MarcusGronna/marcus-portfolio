"use client";
import { useLang } from "./LangProvider";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: { en: "Home", sv: "Hem" } },
  { href: "#portfolio", label: { en: "Portfolio", sv: "Portfolio" } },
  { href: "#education", label: { en: "Education", sv: "Utbildning" } },
  { href: "#contact", label: { en: "Contact", sv: "Kontakt" } },
];

export default function ChalkNav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 bg-brand-600/90 backdrop-blur border-b border-brand-600/20 text-surface-50 h-16 md:h-20 px-4 md:px-6 flex items-center shadow-md">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        {/* Logo / namn */}
        <span className="text-3xl md:text-4xl font-heading font-bold tracking-widest select-none">
          Marcus <span className="hidden md:inline">Grönnå</span>
        </span>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-3xl p-2 cursor-pointer focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {open ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 text-base md:text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative pb-0.5 transition-colors duration-200 hover:text-accent-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent-400 after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label[lang]}
              </a>
            </li>
          ))}

          {/* Language toggle */}
          <li>
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

      {/* Mobile menu dropdown */}
      {open && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-brand-600/95 backdrop-blur-md border-t border-brand-600/20 shadow-lg animate-slide-down">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-heading text-surface-50 hover:text-accent-400 transition-colors"
              >
                {link.label[lang]}
              </a>
            ))}
            <button
              className="self-start px-4 py-2.5 rounded-md bg-accent-400 text-ink-900 font-semibold hover:bg-accent-300 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-600"
              onClick={() => {
                setLang(lang === "en" ? "sv" : "en");
                setOpen(false);
              }}
              aria-label="Toggle language"
              type="button"
            >
              {lang === "en" ? "SV" : "EN"}
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}

"use client";
import { useLang } from "./LangProvider";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: { en: "Home", sv: "Hem" } },
  { href: "#about", label: { en: "About Me", sv: "Om mig" } },
  { href: "#portfolio", label: { en: "Portfolio", sv: "Portfolio" } },
  { href: "#education", label: { en: "Education", sv: "Utbildning" } },
  { href: "#contact", label: { en: "Contact", sv: "Kontakt" } },
];

export default function ChalkNav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="relative bg-brand-600 text-surface-50 sticky top-0 z-50
  backdrop-blur border-b border-brand-600/20
  min-h-20 lg:min-h-24 py-4 lg:py-6 px-6 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-4 h-full">
        <span className="text-4xl font-bold tracking-widest select-none font-heading self-center">
          Marcus <span className="block md:inline">Grönnå</span>
        </span>
        {/* Mobile menu button */}
        <button
          className="lg:hidden absolute left-1/2 -translate-x-1/2
    text-6xl p-2 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {open ? <FiX size={48} /> : <FiMenu size={48} />}
        </button>
        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-heading items-center h-full">
          {navLinks.map((link) => (
            <li key={link.href} className="flex items-center h-full">
              <a
                href={link.href}
                className="relative transition-colors duration-200 text-surface-50 hover:text-accent-400 after:content-[''] after:block after:h-[2px] after:bg-accent-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                style={{ paddingBottom: 2 }}
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
          <li className="pl-4 flex items-center h-full">
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
        <ul
          className="flex flex-col gap-4 mt-4 px-2 pb-4 lg:hidden
  animate-fade-in bg-brand-600 rounded shadow-lg w-full"
        >
          {navLinks.map((link) => (
            <li key={link.href} className="">
              <a
                href={link.href}
                className="block w-full py-2 px-4 text-lg font-heading text-surface-50 hover:text-accent-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <button
              className="w-full px-4 py-2.5 rounded-md bg-accent-400 text-ink-900 font-semibold hover:bg-accent-300 transition cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-600"
              onClick={() => {
                setLang(lang === "en" ? "sv" : "en");
                setOpen(false);
              }}
              aria-label="Toggle language"
              type="button"
            >
              {lang === "en" ? "SV" : "EN"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

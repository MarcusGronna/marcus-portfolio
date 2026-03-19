"use client";
import { useLang } from "./LangProvider";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const navLinks = [
  { href: "/#home", section: "home", label: { en: "Home", sv: "Hem" } },
  { href: "/#portfolio", section: "portfolio", label: { en: "Portfolio", sv: "Portfolio" } },
  { href: "/#journey", section: "journey", label: { en: "Journey", sv: "Resa" } },
  { href: "/#skills", section: "skills", label: { en: "Skills", sv: "Kompetenser" } },
  { href: "/#contact", section: "contact", label: { en: "Contact", sv: "Kontakt" } },
];

export default function ChalkNav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const menuId = "primary-mobile-menu";

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(id);
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect(id), {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-brand-600/90 backdrop-blur border-b border-brand-600/20 text-surface-50 h-16 md:h-20 px-4 md:px-6 flex items-center shadow-md mb-8">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        {/* Logo / name */}
        <Link
          href="/#home"
          className="text-3xl md:text-4xl font-bold tracking-widest select-none hover:text-accent-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
        >
          Marcus <span className="hidden md:inline">Grönnå</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-3xl p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
          onClick={() => setOpen((v) => !v)}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={
            open
              ? lang === "sv" ? "Stäng meny" : "Close menu"
              : lang === "sv" ? "Öppna meny" : "Open menu"
          }
        >
          {open ? <FiX size={32} aria-hidden="true" /> : <FiMenu size={32} aria-hidden="true" />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 text-base md:text-lg" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative pb-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-accent-400 after:transition-transform after:duration-200",
                    isActive
                      ? "text-accent-400 after:scale-x-100"
                      : "hover:text-accent-400 after:scale-x-0 hover:after:scale-x-100",
                  ].join(" ")}
                >
                  {link.label[lang]}
                </a>
              </li>
            );
          })}

          {/* Language toggle */}
          <li>
            <button
              className="px-4 py-2.5 rounded-md bg-accent-400 text-ink-900 font-semibold hover:bg-accent-300 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              aria-label={lang === "en" ? "Switch to Swedish" : "Switch to English"}
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
          id={menuId}
          className="lg:hidden absolute top-full left-0 w-full bg-brand-600/95 backdrop-blur-md border-t border-brand-600/20 shadow-lg"
          role="list"
        >
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "block text-lg font-bold text-surface-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded py-1",
                    isActive ? "text-accent-400" : "hover:text-accent-400",
                  ].join(" ")}
                >
                  {link.label[lang]}
                </a>
              );
            })}
            <div className="pt-2 border-t border-brand-600/30">
              <button
                className="px-4 py-2 rounded-md bg-accent-400 text-ink-900 font-semibold hover:bg-accent-300 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
                onClick={() => { setLang(lang === "en" ? "sv" : "en"); setOpen(false); }}
                aria-label={lang === "en" ? "Switch to Swedish" : "Switch to English"}
                type="button"
              >
                {lang === "en" ? "Svenska" : "English"}
              </button>
            </div>
          </div>
        </ul>
      )}
    </nav>
  );
}

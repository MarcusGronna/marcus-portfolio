export const dict = {
  en: {
    home: "Home",
    about: "About Me",
    portfolio: "Portfolio",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    contactSubtitle:
      "Want to get in touch? Reach me directly or visit the full contact page.",
    contactPage: "Open contact form",
  },
  sv: {
    home: "Hem",
    about: "Om mig",
    portfolio: "Portfolio",
    education: "Utbildning",
    experience: "Erfarenhet",
    skills: "Kompetenser",
    contact: "Kontakt",
    contactSubtitle:
      "Vill du komma i kontakt? Nå mig direkt eller besök kontaktsidan.",
    contactPage: "Öppna kontaktformulär",
  },
} as const;

export type Lang = keyof typeof dict;

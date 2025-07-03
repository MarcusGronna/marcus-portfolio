export const dict = {
  en: {
    home: "Home",
    about: "About Me",
    portfolio: "Portfolio",
    education: "Education",
    contact: "Contact",
  },
  sv: {
    home: "Hem",
    about: "Om mig",
    portfolio: "Portfolio",
    education: "Utbildning",
    contact: "Kontakt",
  },
} as const;

export type Lang = keyof typeof dict;

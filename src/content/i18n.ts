export const dict = {
  en: {
    home: "Home",
    about: "About Me",
    portfolio: "Portfolio",
    education: "Education",
    experience: "Experience",
    journey: "Journey",
    skills: "Skills",
    contact: "Contact",
    contactSubtitle:
      // "Want to get in touch? Reach me directly or visit the full contact page.",
      "",
    contactPage: "Open contact form",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
    heroRole: "Fullstack .NET Developer",
    heroLocation: "Stockholm, Sweden",
    heroTagline:
      "Building reliable, user-focused web solutions with React, Angular, and C# .NET.",
  },
  sv: {
    home: "Hem",
    about: "Om mig",
    portfolio: "Portfolio",
    education: "Utbildning",
    experience: "Erfarenhet",
    journey: "Resa",
    skills: "Kompetenser",
    contact: "Kontakt",
    contactSubtitle:
      // "Vill du komma i kontakt? Nå mig direkt eller besök kontaktsidan.",
      "",
    contactPage: "Öppna kontaktformulär",
    downloadCV: "Ladda ner CV",
    viewProjects: "Se projekt",
    heroRole: "Fullstack .NET-utvecklare",
    heroLocation: "Stockholm, Sverige",
    heroTagline:
      "Bygger pålitliga, användarfokuserade webblösningar med React, Angular och C# .NET.",
  },
} as const;

export type Lang = keyof typeof dict;

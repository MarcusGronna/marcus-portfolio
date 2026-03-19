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
    contactSubtitle: "The fastest way to reach me is by email or LinkedIn. I read everything and reply within a day or two.",
    contactPage: "Contact page",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
    heroRole: "Fullstack .NET Developer",
    heroLocation: "Stockholm, Sweden",
    heroTagline:
      "Fullstack developer with a focus on .NET backends, React frontends, and AI-integrated products. Currently consulting through School of Applied Technology.",
    // Hero proof badges
    proofStack: ".NET / React / Angular",
    proofAI: "AI-integrated apps",
    proofMindset: "Fullstack + architecture",
    proofLocation: "Stockholm",
    // Skills section headers
    skillsCoreStack: "Core Stack",
    skillsAlsoWorked: "Also Worked With",
    skillsCurrentFocus: "Current Focus",
    skillsLanguages: "Languages",
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
    contactSubtitle: "Snabbaste sättet att nå mig är via e-post eller LinkedIn. Jag läser allt och svarar inom en till två dagar.",
    contactPage: "Kontaktsida",
    downloadCV: "Ladda ner CV",
    viewProjects: "Se projekt",
    heroRole: "Fullstack .NET-utvecklare",
    heroLocation: "Stockholm, Sverige",
    heroTagline:
      "Fullstackutvecklare med fokus på .NET-backends, React-frontends och AI-integrerade produkter. Konsulterar för närvarande via School of Applied Technology.",
    // Hero proof badges
    proofStack: ".NET / React / Angular",
    proofAI: "AI-integrerade appar",
    proofMindset: "Fullstack + arkitektur",
    proofLocation: "Stockholm",
    // Skills section headers
    skillsCoreStack: "Kärnstack",
    skillsAlsoWorked: "Har också arbetat med",
    skillsCurrentFocus: "Nuvarande fokus",
    skillsLanguages: "Språk",
  },
} as const;

export type Lang = keyof typeof dict;

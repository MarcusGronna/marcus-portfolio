// src/content/experience.ts
// --------------------------------------------------
// Work experience entries (bilingual)

export interface ExperienceItem {
  id: string;
  title: { en: string; sv: string };
  employer: { en: string; sv: string };
  period: string;
  bullets: { en: string[]; sv: string[] };
}

export const experience: ExperienceItem[] = [
  {
    id: "soat-consultant",
    title: { en: "Fullstack C# .NET", sv: "Fullstack C# .NET" },
    employer: {
      en: "School of Applied Technology",
      sv: "School of Applied Technology",
    },
    period: "02/2026 – present",
    bullets: {
      en: [
        "Working as a fullstack .NET consultant in teams focused on delivering end-to-end solutions.",
        "Collaborating in agile environments with a strong focus on code quality, structure, and long-term maintainability.",
        "Contributing to development where technology, responsibility, and teamwork need to work together in practice.",
      ],
      sv: [
        "Arbetar som fullstack .NET-konsult i team där fokus ligger på att leverera lösningar end-to-end.",
        "Samarbetar agilt med andra utvecklare med särskilt fokus på kodkvalitet, struktur och långsiktigt hållbara lösningar.",
        "Bidrar till utveckling där teknik, ansvarstagande och samarbete behöver fungera tillsammans i praktiken.",
      ],
    },
  },
  {
    id: "friskis-pt",
    title: { en: "Personal Trainer", sv: "Personlig tränare" },
    employer: { en: "Friskis & Svettis", sv: "Friskis & Svettis" },
    period: "03/2024 – 01/2026",
    bullets: {
      en: [
        "Designed individualized training programs based on each client's goals, level, and conditions.",
        "Coached clients in strength training, conditioning, and health with a focus on motivation, progression, and sustainable results.",
        "Built strong communication skills and the ability to create trust, structure, and long-term commitment when working with people.",
      ],
      sv: [
        "Utformade individanpassade träningsupplägg utifrån kundernas mål, nivå och förutsättningar.",
        "Coachade klienter inom styrka, kondition och hälsa med fokus på motivation, progression och hållbara resultat.",
        "Byggde stark kommunikativ förmåga och vana att skapa förtroende, struktur och långsiktighet i arbetet med människor.",
      ],
    },
  },
  {
    id: "sj-stockholmstag",
    title: { en: "Train Engineer", sv: "Lokförare" },
    employer: {
      en: "SJ Stockholmståg (previously MTR Pendeltågen)",
      sv: "SJ Stockholmståg (tidigare MTR Pendeltågen)",
    },
    period: "03/2018 – 10/2025",
    bullets: {
      en: [
        "Worked in a safety-critical environment with high demands for precision, responsibility, and decision-making.",
        "Handled complex situations with calmness, accuracy, and a strong focus on safety and punctuality.",
      ],
      sv: [
        "Arbetade i en säkerhetskritisk miljö med höga krav på precision, ansvar och beslutsfattande.",
        "Hanterade komplexa situationer med lugn, noggrannhet och stort fokus på säkerhet och punktlighet.",
      ],
    },
  },
  {
    id: "sj-ab-instructor",
    title: { en: "Train Engineer and Instructor", sv: "Lokförare och körlärare" },
    employer: { en: "SJ AB", sv: "SJ AB" },
    period: "04/2013 – 02/2018",
    bullets: {
      en: [
        "Combined operational work as a train driver with responsibility for supervision and training.",
        "Developed the ability to explain clearly, support others in their development, and take responsibility for quality in execution.",
      ],
      sv: [
        "Kombinerade operativt arbete som lokförare med ansvar för handledning och utbildning.",
        "Utvecklade förmåga att förklara tydligt, stötta andra i deras utveckling och ta ansvar för kvalitet i genomförandet.",
      ],
    },
  },
  {
    id: "protrain-consultant",
    title: { en: "Consulting Train Driver", sv: "Konsultarbetande lokförare" },
    employer: { en: "ProTrain Bemanning AB", sv: "ProTrain Bemanning AB" },
    period: "06/2011 – 04/2013",
    bullets: {
      en: [
        "Worked as a consultant for several different operators and adapted quickly to new environments and ways of working.",
        "Built strong flexibility, professionalism, and the ability to deliver reliably in new contexts.",
      ],
      sv: [
        "Arbetade som konsult för flera olika operatörer och anpassade mig snabbt till nya miljöer och arbetssätt.",
        "Byggde tidigt upp flexibilitet, professionalism och förmåga att leverera tryggt även i nya sammanhang.",
      ],
    },
  },
];

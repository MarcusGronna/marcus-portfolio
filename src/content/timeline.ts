// src/content/timeline.ts
// -----------------------------------------------
// Unified timeline: education + experience combined
// -----------------------------------------------

export type TimelineType = "education" | "experience";

export interface TimelineEntry {
  id: string;
  type: TimelineType;
  title: { en: string; sv: string };
  organization: { en: string; sv: string };
  period: string;
  startYear: number;
  startMonth?: number; // 1–12; defaults to 1 (January) when absent
  endYear: number | null; // null = current / ongoing
  endMonth?: number; // 1–12; defaults to 12 (December) when absent
  summary: { en: string; sv: string };
}

export const timelineEntries: TimelineEntry[] = [
  // ── Experience ─────────────────────────────────────────────────────────────
  {
    id: "soat-consultant",
    type: "experience",
    title: { en: "Fullstack C# .NET Consultant", sv: "Fullstack C# .NET-konsult" },
    organization: {
      en: "School of Applied Technology",
      sv: "School of Applied Technology",
    },
    period: "02/2026 – present",
    startYear: 2026,
    startMonth: 2,
    endYear: null,
    summary: {
      en: "Working as a fullstack .NET consultant delivering end-to-end solutions in agile teams, with a strong focus on code quality, structure, and long-term maintainability.",
      sv: "Arbetar som fullstack .NET-konsult och levererar end-to-end-lösningar i agila team med stark betoning på kodkvalitet, struktur och hållbara lösningar.",
    },
  },
  {
    id: "friskis-pt",
    type: "experience",
    title: { en: "Personal Trainer", sv: "Personlig tränare" },
    organization: { en: "Friskis & Svettis", sv: "Friskis & Svettis" },
    period: "03/2024 – 01/2026",
    startYear: 2024,
    startMonth: 3,
    endYear: 2026,
    endMonth: 1,
    summary: {
      en: "Designed individualised training programmes and coached clients in strength, conditioning, and health. Built strong communication skills and the ability to create trust and long-term commitment.",
      sv: "Utformade individanpassade träningsupplägg och coachade klienter inom styrka, kondition och hälsa. Byggde stark kommunikativ förmåga och vana att skapa förtroende och långsiktighet.",
    },
  },
  {
    id: "sj-stockholmstag",
    type: "experience",
    title: { en: "Train Engineer", sv: "Lokförare" },
    organization: {
      en: "SJ Stockholmståg (prev. MTR Pendeltågen)",
      sv: "SJ Stockholmståg (tidigare MTR Pendeltågen)",
    },
    period: "03/2018 – 10/2025",
    startYear: 2018,
    startMonth: 3,
    endYear: 2025,
    endMonth: 10,
    summary: {
      en: "Safety-critical environment demanding precision, responsibility, and sound decision-making. Handled complex operational situations with calmness, accuracy, and an unwavering focus on safety.",
      sv: "Säkerhetskritisk miljö med höga krav på precision, ansvar och beslutsfattande. Hanterade komplexa driftsituationer med lugn, noggrannhet och starkt fokus på säkerhet.",
    },
  },
  {
    id: "sj-ab-instructor",
    type: "experience",
    title: { en: "Train Engineer & Instructor", sv: "Lokförare & körlärare" },
    organization: { en: "SJ AB", sv: "SJ AB" },
    period: "04/2013 – 02/2018",
    startYear: 2013,
    startMonth: 4,
    endYear: 2018,
    endMonth: 2,
    summary: {
      en: "Combined operational train driving with responsibility for supervising and training new drivers. Developed clear communication, mentoring ability, and a strong sense of responsibility for quality.",
      sv: "Kombinerade operativt arbete som lokförare med ansvar för handledning och utbildning av nya förare. Utvecklade tydlig kommunikation, mentorförmåga och ansvar för kvalitet i genomförandet.",
    },
  },
  {
    id: "protrain-consultant",
    type: "experience",
    title: { en: "Consulting Train Driver", sv: "Konsultarbetande lokförare" },
    organization: { en: "ProTrain Bemanning AB", sv: "ProTrain Bemanning AB" },
    period: "06/2011 – 04/2013",
    startYear: 2011,
    startMonth: 6,
    endYear: 2013,
    endMonth: 4,
    summary: {
      en: "Worked as a consultant across several operators, adapting quickly to new environments and ways of working. Built strong flexibility, professionalism, and reliability in varied contexts.",
      sv: "Arbetade som konsult hos flera operatörer och anpassade mig snabbt till nya miljöer och arbetssätt. Byggde flexibilitet, professionalism och förmåga att leverera tryggt i nya sammanhang.",
    },
  },

  // ── Education ──────────────────────────────────────────────────────────────
  {
    id: "soat-fullstack-net",
    type: "education",
    title: { en: "Fullstack C# .NET", sv: "Fullstack C# .NET" },
    organization: {
      en: "School of Applied Technology",
      sv: "School of Applied Technology",
    },
    period: "10/2025 – 01/2026",
    startYear: 2025,
    startMonth: 10,
    endYear: 2026,
    endMonth: 1,
    summary: {
      en: "Intensive three-month programme in fullstack web development with a focus on TDD, mob programming, and hands-on applied learning.",
      sv: "Intensivt tre månader långt program i fullstack webbutveckling med fokus på TDD, mob-programmering och praktiskt tillämpat lärande.",
    },
  },
  {
    id: "hv-exjobb-darkpatterns",
    type: "education",
    title: {
      en: "Degree Project – Customer Experience (CX) & Dark Patterns",
      sv: "Examensarbete – Kundupplevelse (CX) & Mörka mönster",
    },
    organization: { en: "University West", sv: "Högskolan Väst" },
    period: "01/2025 – 06/2025",
    startYear: 2025,
    startMonth: 1,
    endYear: 2025,
    endMonth: 6,
    summary: {
      en: "Qualitative study on how dark design patterns affect user experience and trust on the web.",
      sv: "Kvalitativ studie av hur mörka designmönster påverkar användarupplevelse och förtroende på webben.",
    },
  },
  {
    id: "fu-fullstack-yh",
    type: "education",
    title: {
      en: "Fullstack Developer, Higher Vocational Education",
      sv: "Fullstack-utvecklare, YH-program",
    },
    organization: {
      en: "Företagsuniversitetet (Vocational College)",
      sv: "Företagsuniversitetet (Yrkeshögskolan)",
    },
    period: "08/2024 – 06/2025",
    startYear: 2024,
    startMonth: 8,
    endYear: 2025,
    endMonth: 6,
    summary: {
      en: "Studies in JavaScript, React, TypeScript, HTML5, CSS3, and agile ways of working for fullstack development.",
      sv: "Studier i JavaScript, React, TypeScript, HTML5, CSS3 och agila arbetssätt för fullstackutveckling.",
    },
  },
  {
    id: "hv-webmaster",
    type: "education",
    title: {
      en: "Webmaster, Higher Education Diploma (120 ECTS)",
      sv: "Webmaster, Högskoleexamen (120 hp)",
    },
    organization: { en: "University West", sv: "Högskolan Väst" },
    period: "08/2023 – 06/2025",
    startYear: 2023,
    startMonth: 8,
    endYear: 2025,
    endMonth: 6,
    summary: {
      en: "Two-year programme covering frontend, backend, Linux administration, UI/UX, security, mobile web development, and project-based work (AIL – work-integrated learning).",
      sv: "Tvåårigt program om 120 hp med frontend, backend, Linuxadministration, UX/UI, säkerhet, mobil webbutveckling och projektbaserat arbete (AIL – arbetsintegrerat lärande).",
    },
  },
  {
    id: "gih-greenfeet-2023",
    type: "education",
    title: {
      en: "Bachelor's Thesis: \"Do green feet increase physical activity?\"",
      sv: "Kandidatarbete: \"Ökar gröna fötter fysisk aktivitet?\"",
    },
    organization: {
      en: "GIH – Health Pedagogy Program",
      sv: "GIH – Hälsopedagogprogrammet",
    },
    period: "01/2023 – 06/2023",
    startYear: 2023,
    startMonth: 1,
    endYear: 2023,
    endMonth: 6,
    summary: {
      en: "Combined nudges (visual footsteps + posters) increased stair usage by 7.3% at Uppsala C. Awarded scholarship from the Överste and Fru Adolf Johnssons fund.",
      sv: "Kombinerade nudges (visuella fotsteg + affischer) ökade trappanvändandet med 7,3 % på Uppsala C. Tilldelades stipendium från Överste och Fru Adolf Johnssons fond.",
    },
  },
  {
    id: "pt-licens",
    type: "education",
    title: { en: "National PT License", sv: "Nationell PT-licens" },
    organization: { en: "Active Sweden", sv: "Active Sweden" },
    period: "03/2023 – 05/2023",
    startYear: 2023,
    startMonth: 3,
    endYear: 2023,
    endMonth: 5,
    summary: {
      en: "License confirming professional competence according to the Active Sweden standard, strengthening employability as a personal trainer.",
      sv: "Licens som bekräftar professionell kompetens enligt Active Sweden-standarden och stärker anställningsbarheten som personlig tränare.",
    },
  },
  {
    id: "gih-idrott",
    type: "education",
    title: {
      en: "Bachelor's Degree in Sports Science (Health Pedagogy)",
      sv: "Kandidatexamen i idrottsvetenskap (hälsopedagogik)",
    },
    organization: {
      en: "GIH – The Swedish School of Sport and Health Sciences",
      sv: "Gymnastik- och idrottshögskolan (GIH)",
    },
    period: "08/2020 – 06/2023",
    startYear: 2020,
    startMonth: 8,
    endYear: 2023,
    endMonth: 6,
    summary: {
      en: "Education focused on health, behaviour change, pedagogy, and sustainable performance. Provided a strong foundation for understanding human development, motivation, and well-being.",
      sv: "Utbildning med fokus på hälsa, beteendeförändring, pedagogik och hållbar prestation. Gav en stark grund i att förstå människors utveckling, motivation och välmående.",
    },
  },
  {
    id: "yh-lokforare",
    type: "education",
    title: { en: "Train Driver Education", sv: "Lokförarutbildning" },
    organization: { en: "TCC ProTrain", sv: "TCC ProTrain" },
    period: "2010 – 2011",
    startYear: 2010,
    endYear: 2011,
    summary: {
      en: "Vocational training focused on safety, responsibility, regulations, and operational decision-making in complex environments. Foundation for a methodical, high-precision way of working.",
      sv: "Yrkesutbildning med fokus på säkerhet, ansvar, regelverk och operativt beslutsfattande i komplexa miljöer. Grund för ett metodiskt, precisionsinriktat arbetssätt.",
    },
  },
];

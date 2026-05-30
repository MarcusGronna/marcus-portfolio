// src/content/education.ts
// -----------------------------------------------
// Typdefinition + dataobjekt för utbildningar
// -----------------------------------------------

export interface EducationItem {
  id: string;
  school: { en: string; sv: string };
  program: { en: string; sv: string };
  year: string; // eller { en: string; sv: string } om du vill översätta även årtexten
  description?: { en: string; sv: string };
}

export const education: EducationItem[] = [
  {
    id: "soat-fullstack-net",
    school: {
      en: "School of Applied Technology",
      sv: "School of Applied Technology",
    },
    program: {
      en: "Fullstack C# .NET",
      sv: "Fullstack C# .NET",
    },
    year: "01/2026",
    description: {
      en: "Intensive three-month programme in fullstack web development. Focus on TDD, mob programming, and building real applications from day one.",
      sv: "Intensivt tremånadersprogram i fullstack webbutveckling. Fokus på TDD, mob-programmering och att bygga riktiga applikationer från dag ett.",
    },
  },
  {
    id: "hv-webmaster",
    school: {
      en: "University West",
      sv: "Högskolan Väst",
    },
    program: {
      en: "Webmaster, Higher Education Diploma, 120 ECTS",
      sv: "Webmaster, Högskoleexamen, 120 hp",
    },
    year: "2023 – 2025",
    description: {
      en: "Two-year programme covering frontend, backend, Linux administration, UI/UX, security, mobile web development, and project-based work. Based on University West's AIL profile (work-integrated learning).",
      sv: "Tvåårigt program som kombinerar frontend, backend, Linuxadministration, UX/UI, säkerhet, mobil webbutveckling och projektbaserat arbete. Utgår från Högskolan Västs AIL-profil (arbetsintegrerat lärande).",
    },
  },
  {
    id: "hv-exjobb-darkpatterns",
    school: { en: "University West", sv: "Högskolan Väst" },
    program: {
      en: "Degree Project – Customer Experience (CX) & Dark Patterns",
      sv: "Examensarbete – Kundupplevelse (CX) & Mörka mönster",
    },
    year: "2025",
    description: {
      en: "Qualitative study on how dark design patterns affect user experience and trust on the web.",
      sv: "Kvalitativ studie av hur mörka designmönster påverkar användarupplevelse och förtroende på webben.",
    },
  },
  {
    id: "fu-fullstack-yh",
    school: {
      en: "Företagsuniversitetet (Vocational College)",
      sv: "Företagsuniversitetet (Yrkeshögskolan)",
    },
    program: {
      en: "Fullstack Developer, Higher Vocational Education Programme",
      sv: "Fullstack-utvecklare, YH-program",
    },
    year: "2024 – 2025",
    description: {
      en: "Studies in JavaScript, React, TypeScript, HTML5, CSS3, and agile ways of working for fullstack development.",
      sv: "Studier i JavaScript, React, TypeScript, HTML5, CSS3 och agila arbetssätt för fullstackutveckling.",
    },
  },
  {
    id: "yh-lokforare",
    school: { en: "TCC ProTrain", sv: "TCC ProTrain" },
    program: {
      en: "Train Driver Education",
      sv: "Lokförarutbildning",
    },
    year: "2010 – 2011",
    description: {
      en: "Vocational training in safety, regulations, and operational decision-making. Foundation for working methodically and staying calm under pressure.",
      sv: "Yrkesutbildning i säkerhet, regelverk och operativt beslutsfattande. Grund för att arbeta metodiskt och hålla lugnet under press.",
    },
  },
  {
    id: "gih-idrott",
    school: {
      en: "GIH – The Swedish School of Sport and Health Sciences",
      sv: "Gymnastik- och idrottshögskolan (GIH)",
    },
    program: {
      en: "Bachelor's Degree in Sports Science (Health Pedagogy)",
      sv: "Kandidatexamen i idrottsvetenskap (hälsopedagogik)",
    },
    year: "2020 – 2023",
    description: {
      en: "Three-year degree focused on health, behaviour change, pedagogy, and human performance. Gave me a foundation in coaching, motivation, and applying theory in practice. Basis for certification as a personal trainer.",
      sv: "Treårig examen med fokus på hälsa, beteendeförändring, pedagogik och mänsklig prestation. Gav mig en grund i coachning, motivation och att omsätta teori i praktik. Grund för legitimation som personlig tränare.",
    },
  },
  {
    id: "gih-greenfeet-2023",
    school: { en: "GIH – Health Pedagogy Program", sv: "GIH – Hälsopedagogprogrammet" },
    program: {
      en: 'Bachelor\'s thesis: "Do green feet increase physical activity? - A quantitative quasi-experimental intervention study"',
      sv: "Kandidat­arbete: ”Ökar gröna fötter fysisk aktivitet? – En kvantitativ kvasiexperimentell interventionsstudie”",
    },
    year: "2023",
    description: {
      en: "Co-author: Marcus Grönnå. The study shows that combined nudges (visual footsteps + posters) increased stair usage by 7.3% at Uppsala C. VG and awarded scholarship from the Överste and Fru Adolf Johnssons fund.",
      sv: "Medförfattare: Marcus Grönnå. Studien visar att kombinerade nudges (visuella fotsteg + affischer) ökade trapp­användandet med 7,3 % på Uppsala C. VG och tilldelades stipendium från Överste och Fru Adolf Johnssons fond.",
    },
  },
  {
    id: "pt-licens",
    school: { en: "Active Sweden", sv: "Active Sweden" },
    program: { en: "National PT License", sv: "Nationell PT-licens" },
    year: "2023",
    description: {
      en: "Professional certification according to the Active Sweden standard for personal trainers.",
      sv: "Professionell certifiering enligt Active Sweden-standarden för personliga tränare.",
    },
  },
];

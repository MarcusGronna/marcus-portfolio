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
      en: "Intensive three-month programme in fullstack web development with a focus on TDD, mob programming, and hands-on applied learning.",
      sv: "Intensivt, tre månader långt utbildningsprogram i fullstack webbutveckling med fokus på TDD, mob-programmering och praktiskt tillämpat lärande.",
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
      sv: "Tvåårigt program om 120 hp som kombinerar frontend, backend, Linuxadministration, UX/UI, säkerhet, mobil webbutveckling och projektbaserat arbete. Utgår från Högskolan Västs AIL-profil (arbets­integrerat lärande).",
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
      sv: "Kvalitativ studie av hur mörka designmönster påverkar användar­upplevelse och förtroende på webben.",
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
      en: "Vocational training focused on safety, responsibility, regulations, and operational decision-making in complex environments. Laid the foundation for a methodical way of working, high precision, and the ability to act calmly and correctly under pressure.",
      sv: "Yrkesutbildning med fokus på säkerhet, ansvar, regelverk och operativt beslutsfattande i komplexa miljöer. Lade grunden för ett metodiskt arbetssätt, hög precision och förmågan att agera lugnt och korrekt under press.",
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
      en: "Education focused on health, behaviour change, pedagogy, and sustainable performance. Provided a strong foundation for understanding human development, motivation, and well-being, and how theory can be applied in practice. Forms the basis for certification as a personal trainer and health educator.",
      sv: "Utbildning med fokus på hälsa, beteendeförändring, pedagogik och hållbar prestation. Gav en stark grund i att förstå människors utveckling, motivation och välmående, samt hur teori kan omsättas i praktiskt arbete. Ligger till grund för legitimation som personlig tränare och hälsopedagog.",
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
      en: "License confirming professional competence according to the Active Sweden standard and enhances employability as a personal trainer.",
      sv: "Licens som bekräftar professionell kompetens enligt Active Sweden-standarden och stärker anställningsbarheten som personlig tränare.",
    },
  },
];

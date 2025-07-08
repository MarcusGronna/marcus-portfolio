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
    id: "hv-webmaster",
    school: {
      en: "University West",
      sv: "Högskolan Väst",
    },
    program: {
      en: "Webmaster Programme, 120 ECTS - Higher Education Degree",
      sv: "Webmasterprogrammet, 120 hp - Högskoleexamen",
    },
    year: "2023 – 2025",
    description: {
      en: "Broad full-stack education in UX design, web programming, databases and server/cloud tech. Based on University West's AIL profile (work-integrated learning).",
      sv: "Bred full-stack-inriktad utbildning i UX-design, webbprogrammering, databaser och server-/molnteknik. Utgår från Högskolan Västs AIL-profil (arbets­integrerat lärande).",
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
      en: "Corporate University (Vocational College)",
      sv: "Företagsuniversitetet (Yrkeshögskolan)",
    },
    program: {
      en: "Fullstack Developer, 400 YH-points (Ongoing)",
      sv: "Fullstack-utvecklare, 400 YH-poäng (Pågående)",
    },
    year: "2024 – 2026",
    description: {
      en: "Vocational program covering both frontend and backend technologies, basic DevOps, and agile working methods – prepares for roles as a full-stack or backend developer.",
      sv: "YH-program som täcker både frontend- och backend-tekniker, DevOps-grunder samt agila arbetssätt – förbereder för roller som full-stack- eller backend-utvecklare.",
    },
  },
  {
    id: "yh-lokforare",
    school: { en: "Vocational School (TCC Rail Academy)", sv: "Yrkeshögskolan (TCC Rail Academy)" },
    program: {
      en: "Locomotive Driver Education, 300 YH-points: Locomotive Driver Examination",
      sv: "Lokförarutbildning, 300 YH-poäng: Lokförar­examen",
    },
    year: "2010 – 2011",
    description: {
      en: "Professional examination as a locomotive driver with full authorization to operate both high-speed and regional trains; included traffic safety, signaling systems, and vehicle technology.",
      sv: "Yrkesexamen som lokförare med full behörighet att framföra både snabbtåg och regionaltåg; omfattade trafik­säkerhet, signalsystem och fordonsteknik.",
    },
  },
  {
    id: "gih-idrott",
    school: {
      en: "Swedish School of Sport and Health Sciences (GIH)",
      sv: "Gymnastik- och idrottshögskolan (GIH)",
    },
    program: {
      en: "Bachelor's Degree in Sports Science, specialization in People and Health Education",
      sv: "Kandidatexamen i Idrottsvetenskap, inriktning Folkhälsa och hälsopedagogik",
    },
    year: "2020 – 2023: Bachelor's Degree in Sports Science",
    description: {
      en: "Specialization in exercise physiology, health psychology, and coaching. The education forms the basis for your certification as a personal trainer and health educator.",
      sv: "Fördjupning i träningslära, fysiologi, hälsopsykologi och coachning. Utbildningen ligger till grund för din legitimation som personlig tränare och hälsopedagog.",
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

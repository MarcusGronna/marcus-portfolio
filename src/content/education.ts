// src/content/education.ts
// -----------------------------------------------
// Typdefinition + dataobjekt för utbildningar
// -----------------------------------------------

export interface EducationItem {
  id: string;
  school: string;
  program: string;
  year: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    id: "hv-webmaster",
    school: "Högskolan Väst",
    program: "Webmasterprogrammet, 120 hp (heltid • distans)",
    year: "2023 – 2025 ",
    description:
      "Bred full-stack-inriktad utbildning i UX-design, webbprogrammering, databaser och server-/molnteknik. Utgår från Högskolan Västs AIL-profil (arbets­integrerat lärande).",
  },
  {
    id: "fu-fullstack-yh",
    school: "Företagsuniversitetet (Yrkeshögskolan)",
    program: "Fullstack-utvecklare, 400 YH-poäng",
    year: "2024 – 2026 (pågående)",
    description:
      "YH-program som täcker både frontend- och backend-tekniker, DevOps-grunder samt agila arbetssätt – förbereder för roller som full-stack- eller backend-utvecklare.",
  },
  {
    id: "yh-lokforare",
    school: "Yrkeshögskolan (TCC Rail Academy)",
    program: "Lokförarutbildning, 300 YH-poäng",
    year: "2010 – 2011",
    description:
      "Yrkesexamen som lokförare med full behörighet att framföra både snabbtåg och regionaltåg; omfattade trafik­säkerhet, signalsystem och fordonsteknik.",
  },
  {
    id: "gih-idrott",
    school: "Gymnastik- och idrottshögskolan (GIH)",
    program: "Kandidatexamen i Idrottsvetenskap, inriktning Hälsopedagogik",
    year: "2020 – 2023",
    description:
      "Fördjupning i träningslära, fysiologi, hälsopsykologi och coachning. Utbildningen ligger till grund för din legitimation som personlig tränare och hälsopedagog.",
  },
  {
    id: "gih-greenfeet-2023",
    school: "GIH – Hälsopedagogprogrammet",
    program:
      "Kandidat­arbete: ”Ökar gröna fötter fysisk aktivitet? – En kvantitativ kvasiexperimentell interventionsstudie”",
    year: "2023",
    description:
      "Medförfattare: Marcus Grönnå. Studien visar att kombinerade nudges (visuella fotsteg + affischer) ökade trapp­användandet med 7,3 % på Uppsala C.", // ref: DiVA-post :contentReference[oaicite:2]{index=2}
  },
  {
    id: "pt-licens",
    school: "Active Sweden",
    program: "Nationell PT-licens",
    year: "2023",
    description:
      "Licens som bekräftar professionell kompetens enligt Active Sweden-standarden och stärker anställningsbarheten som personlig tränare.",
  },
  {
    id: "hv-exjobb-darkpatterns",
    school: "Högskolan Väst",
    program: "Examensarbete – Customer Experience & Dark Patterns",
    year: "2025",
    description:
      "Kvalitativ studie av hur mörka designmönster påverkar användar­upplevelse och förtroende på webben.",
  },
];

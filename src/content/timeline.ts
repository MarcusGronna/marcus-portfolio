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
    id: "sj-lia-dev",
    type: "experience",
    title: {
      en: "Internship / LIA – Software Development",
      sv: "Arbetspraktik / LIA – Systemutveckling",
    },
    organization: {
      en: "SJ Stockholmståg AB",
      sv: "SJ Stockholmståg AB",
    },
    period: "8 weeks, 2026",
    startYear: 2026,
    startMonth: 2,
    endYear: 2026,
    endMonth: 3,
    summary: {
      en: "Developed a REST API for train information using ASP.NET Core, SQLite, and Entity Framework Core. The work included CRUD functionality, database migrations, Clean Architecture, Swagger documentation, Git, and unit tests with xUnit.",
      sv: "Utvecklade ett REST API för tåginformation med ASP.NET Core, SQLite och Entity Framework Core. Arbetet omfattade CRUD-funktionalitet, databasmigreringar, Clean Architecture, Swagger-dokumentation, Git och enhetstester med xUnit.",
    },
  },
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
      en: "Building fullstack .NET applications in agile teams. Working across backend, frontend, and deployment with a focus on readable code and clear architecture.",
      sv: "Bygger fullstack .NET-applikationer i agila team. Jobbar över backend, frontend och deployment med fokus på läsbar kod och tydlig arkitektur.",
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
      en: "Designed training programs and coached clients in strength and health. Built experience in clear communication, trust, and supporting long-term behaviour change.",
      sv: "Utformade träningsprogram och coachade klienter inom styrka och hälsa. Fick erfarenhet av tydlig kommunikation, förtroende och att stödja långsiktig beteendeförändring.",
    },
  },
  {
    id: "sj-stockholmstag",
    type: "experience",
    title: { en: "Train Engineer", sv: "Lokförare" },
    organization: {
      en: "SJ Stockholmståg",
      sv: "SJ Stockholmståg",
    },
    period: "12/2023 – 10/2025",
    startYear: 2023,
    startMonth: 12,
    endYear: 2025,
    endMonth: 10,
    summary: {
      en: "Operated commuter trains in Stockholm with strict safety requirements. Made real-time decisions under time pressure with direct consequences for passengers and traffic.",
      sv: "Körde pendeltåg i Stockholm med strikta säkerhetskrav. Fattade realtidsbeslut under tidspress med direkta konsekvenser för passagerare och trafik.",
    },
  },
  {
    id: "mtr-pendeltagen",
    type: "experience",
    title: { en: "Train Engineer", sv: "Lokförare" },
    organization: {
      en: "MTR Pendeltågen",
      sv: "MTR Pendeltågen",
    },
    period: "03/2018 – 12/2023",
    startYear: 2018,
    startMonth: 3,
    endYear: 2023,
    endMonth: 12,
    summary: {
      en: "Over five years on the Stockholm commuter rail network, handling daily operations in a high-frequency system. Developed routines for sustained focus and correct decision-making in safety-critical conditions.",
      sv: "Över fem år på Stockholms pendeltågsnät med daglig drift i ett högfrekvent system. Utvecklade rutiner för uthålligt fokus och korrekt beslutsfattande i säkerhetskritiska förhållanden.",
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
      en: "Combined daily train operations with training and supervising new drivers. Learned to explain procedures clearly and take responsibility for someone else's learning.",
      sv: "Kombinerade daglig tågkörning med utbildning och handledning av nya förare. Lärde mig att förklara procedurer tydligt och ta ansvar för andras lärande.",
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
      en: "Consulting train driver across multiple operators. Adapted quickly to different systems and procedures, and learned early how to be reliable in unfamiliar environments.",
      sv: "Konsultlokförare hos flera operatörer. Anpassade mig snabbt till olika system och rutiner, och lärde mig tidigt att vara pålitlig i okända miljöer.",
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
      en: "Intensive three-month programme in fullstack web development. Focus on TDD, mob programming, and building real applications from day one.",
      sv: "Intensivt tremånadersprogram i fullstack webbutveckling. Fokus på TDD, mob-programmering och att bygga riktiga applikationer från dag ett.",
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
      en: "Two-year programme covering frontend, backend, Linux administration, UI/UX, security, mobile web development, and project-based work (AIL profile).",
      sv: "Tvåårigt program med frontend, backend, Linuxadministration, UX/UI, säkerhet, mobil webbutveckling och projektbaserat arbete (AIL-profil).",
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
      en: "Professional certification according to the Active Sweden standard for personal trainers.",
      sv: "Professionell certifiering enligt Active Sweden-standarden för personliga tränare.",
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
      en: "Three-year degree focused on health, behaviour change, pedagogy, and human performance. Gave me a strong foundation in coaching, motivation, and applying theory in practice.",
      sv: "Treårig examen med fokus på hälsa, beteendeförändring, pedagogik och mänsklig prestation. Gav en stark grund i coachning, motivation och att omsätta teori i praktik.",
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
      en: "Vocational training in safety, regulations, and operational decision-making. Foundation for a methodical way of working under pressure.",
      sv: "Yrkesutbildning i säkerhet, regelverk och operativt beslutsfattande. Grund för ett metodiskt arbetssätt under press.",
    },
  },
  {
    id: "military-service",
    type: "experience",
    title: {
      en: "Military Service, Squad Leader",
      sv: "Värnplikt, skyttegruppchef",
    },
    organization: {
      en: "Swedish Armed Forces, Helicopter Wing",
      sv: "Helikopterflottiljen, Försvarsmakten",
    },
    period: "01/2009 – 12/2009",
    startYear: 2009,
    startMonth: 1,
    endYear: 2009,
    endMonth: 12,
    summary: {
      en: "Leadership, discipline, teamwork, and decision-making in a safety-critical environment.",
      sv: "Ledarskap, disciplin, samarbete och beslutsfattande i säkerhetskritisk miljö.",
    },
  },
];

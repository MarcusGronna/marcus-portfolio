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
    id: "sj-lia-dev",
    title: {
      en: "Internship / LIA – Software Development",
      sv: "Arbetspraktik / LIA – Systemutveckling",
    },
    employer: {
      en: "SJ Stockholmståg AB",
      sv: "SJ Stockholmståg AB",
    },
    period: "8 weeks, 2026",
    bullets: {
      en: [
        "Developed a REST API for train information using ASP.NET Core, SQLite, and Entity Framework Core.",
        "The work included CRUD functionality, database migrations, Clean Architecture, Swagger documentation, Git, and unit tests with xUnit.",
      ],
      sv: [
        "Utvecklade ett REST API för tåginformation med ASP.NET Core, SQLite och Entity Framework Core.",
        "Arbetet omfattade CRUD-funktionalitet, databasmigreringar, Clean Architecture, Swagger-dokumentation, Git och enhetstester med xUnit.",
      ],
    },
  },
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
        "Building fullstack .NET applications in small agile teams, working across backend, frontend, and deployment.",
        "Writing C#/.NET APIs, React frontends, and integrating services with a focus on readable code and clear architecture.",
        "Collaborating daily with other developers through mob programming, code review, and shared ownership of delivery.",
      ],
      sv: [
        "Bygger fullstack .NET-applikationer i små agila team, med arbete över backend, frontend och deployment.",
        "Skriver C#/.NET-API:er, React-frontends och integrerar tjänster med fokus på läsbar kod och tydlig arkitektur.",
        "Samarbetar dagligen med andra utvecklare genom mob-programmering, kodgranskning och delat ägarskap av leveransen.",
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
        "Designed training programs adapted to individual goals, fitness levels, and physical conditions.",
        "Coached clients in strength, conditioning, and health. Learned to explain things clearly and adjust my communication to each person.",
        "Built experience in creating trust, keeping people accountable, and supporting long-term behaviour change.",
      ],
      sv: [
        "Utformade träningsupplägg anpassade efter individuella mål, träningsnivå och fysiska förutsättningar.",
        "Coachade klienter inom styrka, kondition och hälsa. Lärde mig att förklara tydligt och anpassa kommunikationen efter varje person.",
        "Fick erfarenhet av att skapa förtroende, hålla människor ansvariga och stödja långsiktig beteendeförändring.",
      ],
    },
  },
  {
    id: "sj-stockholmstag",
    title: { en: "Train Engineer", sv: "Lokförare" },
    employer: {
      en: "SJ Stockholmståg",
      sv: "SJ Stockholmståg",
    },
    period: "12/2023 – 10/2025",
    bullets: {
      en: [
        "Operated commuter trains in Stockholm with strict safety requirements and tight schedules.",
        "Made real-time decisions under time pressure with direct consequences for passengers and traffic flow.",
      ],
      sv: [
        "Körde pendeltåg i Stockholm med strikta säkerhetskrav och täta tidtabeller.",
        "Fattade beslut i realtid under tidspress med direkta konsekvenser för passagerare och trafikflöde.",
      ],
    },
  },
  {
    id: "mtr-pendeltagen",
    title: { en: "Train Engineer", sv: "Lokförare" },
    employer: {
      en: "MTR Pendeltågen",
      sv: "MTR Pendeltågen",
    },
    period: "03/2018 – 12/2023",
    bullets: {
      en: [
        "Drove commuter trains on the Stockholm network for over five years, handling daily operations in a high-frequency system.",
        "Developed routines for staying focused and making correct decisions over long shifts in a safety-critical role.",
      ],
      sv: [
        "Körde pendeltåg på Stockholms pendeltågsnät i över fem år, med daglig drift i ett högfrekvent system.",
        "Utvecklade rutiner för att hålla fokus och fatta korrekta beslut under långa arbetspass i en säkerhetskritisk roll.",
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
        "Combined daily train operations with responsibility for training and supervising new drivers.",
        "Learned to explain procedures clearly, give constructive feedback, and take responsibility for someone else's learning.",
      ],
      sv: [
        "Kombinerade daglig tågkörning med ansvar för utbildning och handledning av nya förare.",
        "Lärde mig att förklara procedurer tydligt, ge konstruktiv feedback och ta ansvar för någon annans lärande.",
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
        "Worked as a consulting train driver for multiple operators, adapting quickly to different systems and procedures.",
        "Learned early on how to be reliable and professional in unfamiliar environments.",
      ],
      sv: [
        "Arbetade som konsultlokförare för flera operatörer och anpassade mig snabbt till olika system och rutiner.",
        "Lärde mig tidigt att vara pålitlig och professionell i okända miljöer.",
      ],
    },
  },
];

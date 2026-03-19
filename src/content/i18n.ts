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
      "Open to fullstack .NET roles, consulting projects, and technical conversations. Email is the fastest route — I reply within a day or two.",
    contactPage: "Contact page",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
    heroRole: "Fullstack .NET Developer",
    heroLocation: "Stockholm, Sweden",
    heroTagline:
      "I build .NET backends, React frontends, and AI-integrated apps. Currently consulting through School of Applied Technology.",
    // Hero proof badges
    proofStack: "C# / .NET / React",
    proofAI: "AI-integrated apps",
    proofMindset: "Fullstack + architecture",
    proofLocation: "Stockholm",
    // Skills section headers
    skillsCoreStack: "Core Stack",
    skillsAlsoWorked: "Also Worked With",
    skillsCurrentFocus: "Current Focus",
    skillsLanguages: "Languages",
    // About me paragraphs (homepage + about page)
    aboutParagraphs: [
      "Hi, I'm Marcus. I'm a fullstack .NET developer based in Stockholm, currently consulting through School of Applied Technology. My background is a mix of web development, health science, and over a decade as a train driver — which sounds unusual but actually makes sense: I've always been drawn to systems that need to work reliably.",
      "On the technical side, I focus on C# / .NET backends, React frontends, and building products that integrate AI in ways that are actually useful. I've worked with PostgreSQL, EF Core, Azure, AWS SQS, and Pulumi, and I care about clean architecture and maintainability.",
      "Before I switched to development, I spent twelve years driving trains — first on commuter lines in Stockholm, later as an instructor. That kind of work teaches you to be calm under pressure, precise, and responsible. I try to bring the same mindset to the code I write.",
      "If you want to talk about a project or role, email is the fastest route. I'm most interested in .NET consulting, fullstack product work, and teams that care about quality.",
    ] as readonly string[],
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
      "Jag är öppen för fullstack .NET-roller, konsultuppdrag och tekniska samtal. E-post är snabbaste vägen — jag svarar inom en till två dagar.",
    contactPage: "Kontaktsida",
    downloadCV: "Ladda ner CV",
    viewProjects: "Se projekt",
    heroRole: "Fullstack .NET-utvecklare",
    heroLocation: "Stockholm, Sverige",
    heroTagline:
      "Jag bygger .NET-backends, React-frontends och AI-integrerade appar. Just nu konsulterar jag via School of Applied Technology.",
    // Hero proof badges
    proofStack: "C# / .NET / React",
    proofAI: "AI-integrerade appar",
    proofMindset: "Fullstack + arkitektur",
    proofLocation: "Stockholm",
    // Skills section headers
    skillsCoreStack: "Kärnstack",
    skillsAlsoWorked: "Har också arbetat med",
    skillsCurrentFocus: "Nuvarande fokus",
    skillsLanguages: "Språk",
    // About me paragraphs (homepage + about page)
    aboutParagraphs: [
      "Hej, jag heter Marcus. Jag är en fullstack .NET-utvecklare baserad i Stockholm och konsulterar för närvarande via School of Applied Technology. Min bakgrund är en blandning av webbutveckling, idrotts- och hälsovetenskap samt mer än ett decennium som lokförare — vilket låter ovanligt men egentligen hänger ihop: jag har alltid dragits till system som måste fungera tillförlitligt.",
      "På tekniksidan fokuserar jag på C# / .NET-backends, React-frontends och att bygga produkter som integrerar AI på sätt som faktiskt tillför värde. Jag har arbetat med PostgreSQL, EF Core, Azure, AWS SQS och Pulumi, och jag bryr mig om ren arkitektur och underhållbarhet.",
      "Innan jag bytte karriär till utveckling körde jag tåg i tolv år — först på pendeltågen i Stockholm, senare som körlärare. Det arbetet lär dig att vara lugn under press, precis och ansvarsfull. Jag försöker ta med samma tankesätt in i koden jag skriver.",
      "Vill du prata om ett projekt eller en roll? E-post är snabbaste vägen. Jag är mest intresserad av .NET-konsulting, fullstack-produktarbete och team som bryr sig om kvalitet.",
    ] as readonly string[],
  },
} as const;

export type Lang = keyof typeof dict;

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
      "If you have a .NET role, a consulting project, or just want to talk tech — email is the fastest way to reach me. I reply within a day or two.",
    contactPage: "Contact page",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
    heroRole: "Fullstack .NET Developer",
    heroLocation: "Stockholm, Sweden",
    heroTagline:
      "C# / .NET backends, React frontends, cloud infrastructure. Currently consulting through School of Applied Technology.",
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
      "Hi, I'm Marcus. I'm a fullstack .NET developer based in Stockholm, currently consulting through School of Applied Technology. My background is a mix of web development, health science, and twelve years as a train driver — which sounds like a stretch, but the thread is: I've always been drawn to systems where getting it wrong actually matters.",
      "On the technical side, I focus on C# / .NET backends, React frontends, and building things that integrate AI where it genuinely helps. I've worked with PostgreSQL, EF Core, Azure, AWS SQS, and Pulumi, and I care about clean architecture — not for its own sake, but because it makes the product easier to change and harder to break.",
      "Before I switched to development, I drove trains for twelve years — commuter lines in Stockholm first, then as an instructor. That work shaped how I think about precision, calm under pressure, and responsibility. I try to carry those habits into the code I write.",
      "If you want to talk about a role or project, email is the fastest way to reach me. I'm most interested in .NET consulting, fullstack product work, and teams that actually care about quality.",
    ] as readonly string[],
    // Secondary page copy
    aboutPageTitle: "About Me",
    aboutPageApproach: "How I approach the work",
    aboutPageApproachItems: [
      "I prefer systems that are simple to reason about over systems that are clever. Clean architecture usually wins over clever architecture.",
      "I take precision seriously — from naming things clearly to writing tests that actually catch regressions.",
      "Twelve years in safety-critical operations left me with a habit of thinking about edge cases before they become incidents.",
      "I communicate clearly with teammates and clients. Good code and a good explanation of it are both part of doing the job.",
    ] as readonly string[],
    educationPageTitle: "Education & Experience",
    educationPageSubtitle:
      "Two years of parallel study and work — my path into development wasn't linear, but that's part of what shaped how I think.",
    portfolioPageTitle: "Portfolio",
    portfolioFlagship: "Flagship Project",
    backToHome: "← Back to homepage",
    backToPortfolio: "← Back to portfolio",
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
      "Har du en .NET-roll, ett konsultuppdrag eller vill bara prata teknik — e-post är snabbaste vägen. Jag svarar inom en till två dagar.",
    contactPage: "Kontaktsida",
    downloadCV: "Ladda ner CV",
    viewProjects: "Se projekt",
    heroRole: "Fullstack .NET-utvecklare",
    heroLocation: "Stockholm, Sverige",
    heroTagline:
      "C# / .NET-backends, React-frontends, molninfrastruktur. Just nu konsulterar jag via School of Applied Technology.",
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
      "Hej, jag heter Marcus. Jag är en fullstack .NET-utvecklare baserad i Stockholm och konsulterar för närvarande via School of Applied Technology. Min bakgrund är en blandning av webbutveckling, hälsovetenskap och tolv år som lokförare — vilket låter konstigt, men tråden är: jag har alltid dragits till system där det faktiskt spelar roll om det går fel.",
      "På tekniksidan fokuserar jag på C# / .NET-backends, React-frontends och att bygga saker som integrerar AI där det faktiskt hjälper. Jag har arbetat med PostgreSQL, EF Core, Azure, AWS SQS och Pulumi, och jag bryr mig om ren arkitektur — inte för sakens skull, utan för att det gör produkten lättare att förändra och svårare att förstöra.",
      "Innan jag bytte karriär till utveckling körde jag tåg i tolv år — pendeltågen i Stockholm först, sedan som körlärare. Det arbetet formade hur jag tänker kring precision, lugn under press och ansvar. Jag försöker ta med de vanorna in i koden jag skriver.",
      "Vill du prata om en roll eller ett projekt? E-post är snabbaste vägen. Jag är mest intresserad av .NET-konsulting, fullstack-produktarbete och team som verkligen bryr sig om kvalitet.",
    ] as readonly string[],
    // Secondary page copy
    aboutPageTitle: "Om mig",
    aboutPageApproach: "Hur jag tänker kring arbetet",
    aboutPageApproachItems: [
      "Jag föredrar system som är enkla att resonera kring framför system som är smarta. Ren arkitektur vinner oftast över smart arkitektur.",
      "Jag tar precision på allvar — från att namnge saker tydligt till att skriva tester som faktiskt fångar regressioner.",
      "Tolv år i säkerhetskritisk drift lämnade mig med en vana att tänka på edge cases innan de blir incidenter.",
      "Jag kommunicerar tydligt med kollegor och kunder. Bra kod och en bra förklaring av den är båda en del av att göra jobbet.",
    ] as readonly string[],
    educationPageTitle: "Utbildning & Erfarenhet",
    educationPageSubtitle:
      "Två år av parallella studier och arbete — min väg in i utveckling var inte rak, men det är en del av vad som formade hur jag tänker.",
    portfolioPageTitle: "Portfolio",
    portfolioFlagship: "Flaggskeppsprojekt",
    backToHome: "← Tillbaka till startsidan",
    backToPortfolio: "← Tillbaka till portfolio",
  },
} as const;

export type Lang = keyof typeof dict;

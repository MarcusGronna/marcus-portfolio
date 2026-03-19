// src/content/projects.ts
// --------------------------------------------------
// Portfolio-projekt med publika länkar (lägg riktiga skärmdumpar i /public)

export interface Project {
  slug: string;
  title: { en: string; sv: string };
  summary: { en: string; sv: string };
  image: string;
  /** Additional screenshots shown as a gallery on the case-study page */
  images?: string[];
  tech: string[];
  year: number;
  /** Live demo URL – omit if no public deployment exists yet */
  url?: string;
  /** Direct GitHub / source URL */
  github?: string;
  /** 2–3 short recruiter-facing highlights shown on the project card */
  highlights?: { en: string[]; sv: string[] };
  /** Set true to enable the /projects/[slug] case-study page */
  caseStudy?: boolean;
  // ---- case-study fields (all optional) ----
  role?: { en: string; sv: string };
  problem?: { en: string; sv: string };
  /** Solution / architecture overview (paragraph) */
  solution?: { en: string; sv: string };
  /** AI integration explanation (paragraph) */
  aiIntegration?: { en: string; sv: string };
  goals?: { en: string[]; sv: string[] };
  challenges?: { en: string[]; sv: string[] };
  keyDecisions?: { en: string[]; sv: string[] };
  results?: { en: string[]; sv: string[] };
  nextSteps?: { en: string[]; sv: string[] };
}

export const projects: Project[] = [
  {
    slug: "codequest",
    title: {
      en: "CodeQuest",
      sv: "CodeQuest",
    },
    summary: {
      en: "AI-driven story-based coding platform where users learn C# through adaptive chapters, dynamic narrative generation, and objective server-side code validation.",
      sv: "AI-driven story-based coding platform där användaren lär sig C# genom ett adaptivt äventyr med dynamiskt genererade kapitel, objektiv kodvalidering och tydlig progression.",
    },
    image: "/CodeQuest-Login.png",
    images: [
      "/CodeQuest-Login.png",
      "/UnderWaterVillage-CodeEditor.png",
      "/Merchant-Full-Image.png",
    ],
    tech: [
      "C#", ".NET 10", "ASP.NET Core", "React", "TypeScript", "Vite",
      "Tailwind CSS", "PostgreSQL", "EF Core", "Azure OpenAI", "JWT",
      "Roslyn", "Monaco Editor", "React Query", "GitHub Actions", "Azure",
    ],
    year: 2025,
    caseStudy: true,
    highlights: {
      en: [
        "Dynamic chapter-based story generation with Azure OpenAI",
        "Server-side code validation using Roslyn for objective evaluation",
        "JWT-based authentication and session handling",
        "PostgreSQL + EF Core for persistence of sessions and scenarios",
        "React + Monaco Editor for an interactive coding experience",
        "Delivery pipelines via GitHub Actions and Azure",
      ],
      sv: [
        "Dynamisk kapitelbaserad storygenerering med Azure OpenAI",
        "Server-side kodvalidering med Roslyn för objektiv bedömning",
        "JWT-baserad autentisering och sessionshantering",
        "PostgreSQL + EF Core för persistens av sessioner och scenarion",
        "React + Monaco Editor för interaktiv code-editor-upplevelse",
        "Deploy-flöden via GitHub Actions och Azure",
      ],
    },
    role: {
      en: "Solo Developer – fullstack design and implementation",
      sv: "Ensam utvecklare – fullstack design och implementation",
    },
    problem: {
      en: "CodeQuest is a web-based learning platform where code is the gameplay mechanic and story is the motivational layer. The user solves C# challenges to progress through the experience, while the backend validates solutions objectively. The platform combines AI-generated narrative progression with server-side code execution and evaluation.",
      sv: "CodeQuest är en webbaserad lärplattform där kod är spelmekaniken och berättelsen är drivkraften. Användaren löser C#-uppgifter för att föra storyn framåt, medan backend ansvarar för objektiv validering av lösningarna. Plattformen kombinerar AI-genererad narrativ progression med server-side exekvering och bedömning av användarens kod.",
    },
    aiIntegration: {
      en: "The project is AI-integrated in the sense that each new chapter is generated dynamically with Azure OpenAI. The story continues based on the narrative context from the previous chapter and is influenced by whether the player answered correctly or incorrectly in the previous step. This makes the experience adaptive and more engaging than a static exercise flow.",
      sv: "Projektet är AI-integrerat på så vis att varje nytt kapitel genereras dynamiskt med Azure OpenAI. Storyn fortsätter utifrån sammanhanget från föregående kapitel och påverkas av om användaren svarade rätt eller fel i föregående steg. Det gör att upplevelsen blir adaptiv och mer levande än en statisk uppgiftssamling.",
    },
    solution: {
      en: "The frontend was built with React 19, TypeScript, and Vite, using Monaco Editor for code input and React Query for data fetching. The backend was built with .NET 10, ASP.NET Core Web API, EF Core, and PostgreSQL. AI-driven scenario generation is handled through Azure OpenAI, while Roslyn is used to compile and execute user-submitted C# code on the server side. The backend follows a layered architecture with separate API, Application, and Domain layers.",
      sv: "Frontend byggdes i React 19, TypeScript och Vite med Monaco Editor för kodskrivning och React Query för datahämtning. Backend byggdes i .NET 10 med ASP.NET Core Web API, EF Core och PostgreSQL. AI-genereringen hanteras via Azure OpenAI, medan Roslyn används för att kompilera och köra användarens C#-kod server-side. Projektet använder en tydlig lagerindelning mellan API, Application och Domain.",
    },
    goals: {
      en: [
        "Build a coding learning platform where narrative and gameplay are intertwined",
        "Generate dynamic story chapters with Azure OpenAI based on prior chapter context and player outcome",
        "Validate user-submitted C# code objectively on the server using Roslyn",
        "Persist sessions and scenarios reliably with PostgreSQL and EF Core",
        "Provide a modern code-editor experience in the browser with Monaco Editor",
      ],
      sv: [
        "Bygga en kodinlärningsplattform där berättelse och spelmekanik är sammanvävda",
        "Generera dynamiska kapitel med Azure OpenAI baserat på föregående kapitlets kontext och spelarens utfall",
        "Validera C#-kod från användaren objektivt på servern med Roslyn",
        "Persista sessioner och scenarion tillförlitligt med PostgreSQL och EF Core",
        "Erbjuda en modern code-editor-upplevelse i webbläsaren med Monaco Editor",
      ],
    },
    challenges: {
      en: [
        "Designing a narrative generation prompt that produces consistent, structured chapter content suitable for rendering in the UI",
        "Ensuring secure and sandboxed execution of user-submitted C# code on the server with Roslyn",
        "Managing session and scenario state coherently across frontend and backend",
        "Implementing branching story progression based on whether the player answered correctly or incorrectly",
      ],
      sv: [
        "Designa en narrativ genereringsprompt som producerar konsekvent, strukturerat kapitelinnehåll lämpat för rendering i UI",
        "Säkerställa säker och sandboxad exekvering av C#-kod inlämnad av användaren på servern med Roslyn",
        "Hantera sessions- och scenariotillstånd sammanhängande mellan frontend och backend",
        "Implementera förgrenad storyprogression beroende på om spelaren svarade rätt eller fel",
      ],
    },
    keyDecisions: {
      en: [
        "Azure OpenAI for structured scenario generation – prompted to return JSON for reliable frontend consumption",
        "Roslyn (Microsoft.CodeAnalysis) for server-side C# compilation and execution, keeping evaluation objective and backend-controlled",
        "JWT authentication with ASP.NET Identity for secure, stateless session management",
        "Layered backend architecture (API / Application / Domain) for maintainability and separation of concerns",
        "EF Core + PostgreSQL for relational persistence of user sessions and generated scenarios",
        "Docker Compose for local development environment setup",
      ],
      sv: [
        "Azure OpenAI för strukturerad scenariogenerering – promptad att returnera JSON för tillförlitlig frontend-konsumtion",
        "Roslyn (Microsoft.CodeAnalysis) för server-side C#-kompilering och exekvering för att hålla bedömningen objektiv och backend-kontrollerad",
        "JWT-autentisering med ASP.NET Identity för säker, stateless sessionshantering",
        "Lagerindelad backendarkitektur (API / Application / Domain) för underhållbarhet och separation av ansvar",
        "EF Core + PostgreSQL för relationell persistens av användarsessioner och genererade scenarion",
        "Docker Compose för lokal utvecklingsmiljöinställning",
      ],
    },
    results: {
      en: [
        "A functioning adaptive coding platform where each session produces a unique AI-generated story arc",
        "Demonstrated end-to-end integration: AI generation → frontend render → code submission → server-side evaluation → narrative branching",
        "Hands-on experience combining AI integration, authentication, server-side code execution, database modelling, and modern frontend UX in one product",
        "Demonstrates fullstack breadth and the ability to build a more advanced and concept-driven application",
      ],
      sv: [
        "En fungerande adaptiv kodplattform där varje session producerar ett unikt AI-genererat handlingsförlopp",
        "Demonstrerad end-to-end-integration: AI-generering → frontend-rendering → kodinlämning → server-side-bedömning → narrativ förgrening",
        "Praktisk erfarenhet av att kombinera AI-integration, autentisering, server-side kodexekvering, databasmodellering och modern frontend-UX i en och samma produkt",
        "Visar fullstackbredd och förmåga att bygga en mer avancerad och idédriven applikation",
      ],
    },
    nextSteps: {
      en: [
        "Add leaderboards and progress tracking for a more gamified experience",
        "Expand language support beyond C# to other programming languages",
        "Deploy to a public cloud endpoint with automated CI/CD",
      ],
      sv: [
        "Lägg till poängtavlor och framstegsspårning för en mer gamifierad upplevelse",
        "Utöka språkstödet bortom C# till andra programmeringsspråk",
        "Driftsätt till en publik molnendpoint med automatiserad CI/CD",
      ],
    },
  },
  {
    slug: "livia-portfolio",
    title: {
      en: "Livia Portfolio",
      sv: "Livia Portfolio",
    },
    summary: {
      en: "Personal portfolio site for a friend (videographer/photographer) built in Next.js, styled with Tailwind and deployed via Vercel.",
      sv: "Personlig portfolio­sajt åt en vän (videograf / fotograf) byggd i Next.js, stylad med Tailwind och distribuerad via Vercel.",
    },
    image: "/livia-portfolio.webp",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    year: 2025,
    url: "https://livia-portfolio-three.vercel.app/",
    github: "https://github.com/MarcusGronna/livia-portfolio",
    caseStudy: true,
    highlights: {
      en: [
        "Deployed to production on Vercel with zero-config CI/CD",
        "Optimised image loading with next/image for fast LCP",
        "Fully responsive layout adapting from mobile to widescreen",
      ],
      sv: [
        "Driftsatt på Vercel med automatisk CI/CD utan konfiguration",
        "Bildoptimering med next/image för snabb LCP",
        "Fullt responsiv layout anpassad från mobil till bred skärm",
      ],
    },
    role: {
      en: "Solo Developer – design, development, and deployment",
      sv: "Ensam utvecklare – design, utveckling och driftsättning",
    },
    problem: {
      en: "A friend needed a clean, fast portfolio site to showcase videography and photography work to potential clients. The site had to look professional, load quickly, and be easy to update.",
      sv: "En vän behövde en snygg och snabb portfolio­sajt för att visa upp videografi och fotografi­arbeten för potentiella kunder. Sajten måste se professionell ut, ladda snabbt och vara enkel att uppdatera.",
    },
    goals: {
      en: [
        "Ship a production-ready portfolio in a short timeframe",
        "Achieve good Core Web Vitals (LCP, CLS, FID)",
        "Make images and media feel crisp and fast on all devices",
        "Keep the codebase maintainable for future updates",
      ],
      sv: [
        "Lansera en produktionsklar portfolio inom kort tid",
        "Uppnå goda Core Web Vitals (LCP, CLS, FID)",
        "Se till att bilder och media känns snabba och skarpa på alla enheter",
        "Hålla kodbasen underhållbar för framtida uppdateringar",
      ],
    },
    challenges: {
      en: [
        "Optimising many large images without sacrificing visual quality",
        "Building a layout flexible enough for portrait and landscape media",
        "Keeping the site simple enough for a non-developer to request changes",
      ],
      sv: [
        "Optimera många stora bilder utan att kompromissa med visuell kvalitet",
        "Bygga en layout tillräckligt flexibel för stående och liggande media",
        "Hålla sajten tillräckligt enkel för att en icke-utvecklare ska kunna begära ändringar",
      ],
    },
    keyDecisions: {
      en: [
        "Chose Next.js App Router for built-in image optimisation and SSG",
        "Used Tailwind CSS for rapid, consistent styling without a design system",
        "Deployed to Vercel for automatic preview deployments on every push",
      ],
      sv: [
        "Valde Next.js App Router för inbyggd bildoptimering och SSG",
        "Använde Tailwind CSS för snabb, konsekvent styling utan ett designsystem",
        "Driftsatte på Vercel för automatiska förhandsgransknings­distributioner vid varje push",
      ],
    },
    results: {
      en: [
        "Live and used by a real client to showcase professional work",
        "Lighthouse performance score above 90 on mobile",
        "Zero ongoing infrastructure cost (Vercel free tier)",
      ],
      sv: [
        "Lever och används av en verklig kund för att visa professionellt arbete",
        "Lighthouse-prestationspoäng över 90 på mobil",
        "Inga löpande infrastrukturkostnader (Vercels gratisplan)",
      ],
    },
    nextSteps: {
      en: [
        "Integrate a headless CMS so the client can update content without code",
        "Add a contact/booking form with email notifications",
        "Explore video streaming optimisation for large portfolio videos",
      ],
      sv: [
        "Integrera ett headless CMS så kunden kan uppdatera innehåll utan kod",
        "Lägg till ett kontakt-/bokningsformulär med e-postnotifieringar",
        "Utforska video­streaming­optimering för stora portföljvideor",
      ],
    },
  },
  {
    slug: "e-shop-react",
    title: {
      en: "E-Shop",
      sv: "E-Shop",
    },
    summary: {
      en: "A demo e-commerce built in React (Vite + Tailwind) and published on Netlify as a school assignment at Företagsuniversitetet.",
      sv: "En demo-e-handel byggd i React (Vite + Tailwind) och publicerad på Netlify som skoluppgift på Företags­universitetets YH-program.",
    },
    image: "/E-Shop.webp",
    tech: ["React", "Vite", "Tailwind", "Netlify"],
    year: 2025,
    url: "https://marcus-e-shop.netlify.app/",
    github: "https://github.com/MarcusGronna/e-shop-react",
    caseStudy: true,
    highlights: {
      en: [
        "Persistent shopping cart with localStorage – survives page refresh",
        "Responsive product grid with add-to-cart and quantity controls",
        "Built with React Context for global cart state management",
      ],
      sv: [
        "Beständig kundvagn med localStorage – överlever sidomladdning",
        "Responsivt produktrutnät med lägg-i-kundvagn och kvantitetskontroller",
        "Byggd med React Context för global kundvagns­tillståndshantering",
      ],
    },
    role: {
      en: "Solo Developer – school assignment at Företagsuniversitetet",
      sv: "Ensam utvecklare – skoluppgift på Företagsuniversitetet",
    },
    problem: {
      en: "School assignment to demonstrate understanding of React fundamentals by building a realistic e-commerce front end — product listing, cart, and checkout flow — without a backend.",
      sv: "Skoluppgift för att visa förståelse för React-grunderna genom att bygga ett realistiskt e-handelsgränssnitt — produktlista, kundvagn och kassaflöde — utan en backend.",
    },
    goals: {
      en: [
        "Implement full shopping-cart UX with React state and Context",
        "Persist cart state across page refreshes with localStorage",
        "Practice component composition and responsive layout with Tailwind",
        "Deploy publicly for portfolio demonstration",
      ],
      sv: [
        "Implementera fullständig kundvagns-UX med React-tillstånd och Context",
        "Bevara kundvagnens tillstånd vid sidomladdning med localStorage",
        "Träna komponent­komposition och responsiv layout med Tailwind",
        "Distribuera offentligt för portfolio­demonstration",
      ],
    },
    challenges: {
      en: [
        "Keeping cart state in sync across deeply nested components without prop drilling",
        "Managing quantity updates and price calculations correctly",
        "Making the checkout flow feel natural without a real payment backend",
      ],
      sv: [
        "Hålla kundvagnens tillstånd synkroniserat över djupt nästade komponenter utan prop-drilling",
        "Hantera kvantitetsuppdateringar och prisberäkningar korrekt",
        "Göra kassaflödet naturligt utan en riktig betalningsbackend",
      ],
    },
    keyDecisions: {
      en: [
        "React Context + useReducer for predictable cart state management",
        "localStorage sync via a custom hook to persist across sessions",
        "Vite for near-instant HMR during development",
        "Netlify for free, automatic deployment from GitHub",
      ],
      sv: [
        "React Context + useReducer för förutsägbar kundvagns­tillståndshantering",
        "localStorage-synk via en anpassad hook för att bevara mellan sessioner",
        "Vite för nästan omedelbar HMR under utveckling",
        "Netlify för gratis, automatisk distribution från GitHub",
      ],
    },
    results: {
      en: [
        "Fully functional e-commerce UX demo available at a public URL",
        "Demonstrated React Context, hooks, and component architecture proficiency",
        "Received a passing grade and positive feedback from instructors",
      ],
      sv: [
        "Fullt fungerande e-handels-UX-demo tillgänglig på en offentlig URL",
        "Demonstrerade kunskaper i React Context, hooks och komponent­arkitektur",
        "Godkänt betyg och positiv feedback från lärare",
      ],
    },
    nextSteps: {
      en: [
        "Add a real payment integration (Stripe) and order management backend",
        "Implement product search, filtering, and sorting",
        "Add user authentication for order history",
      ],
      sv: [
        "Lägg till en riktig betalnings­integration (Stripe) och orderhanteringsbackend",
        "Implementera produktsökning, filtrering och sortering",
        "Lägg till användar­autentisering för orderhistorik",
      ],
    },
  },
  {
    slug: "task-manager-angular",
    title: {
      en: "Task Manager",
      sv: "Task Manager",
    },
    summary: {
      en: "Task manager in Angular that stores data in LocalStorage; created as a project at Företagsuniversitetet and hosted on Netlify.",
      sv: "Uppgifts­hanterare i Angular som lagrar data i LocalStorage; framtagen som inlämnings­projekt på Företags­universitetet och hostad på Netlify.",
    },
    image: "/TaskManager.webp",
    tech: ["Angular", "TypeScript", "LocalStorage", "Netlify"],
    year: 2025,
    url: "https://marcus-task-manager.netlify.app",
    github: "https://github.com/MarcusGronna/task-manager-angular",
    caseStudy: true,
    highlights: {
      en: [
        "Full CRUD operations: create, read, update, and delete tasks",
        "Data persisted in localStorage – no backend required",
        "Angular services and dependency injection used throughout",
      ],
      sv: [
        "Fullständiga CRUD-operationer: skapa, läsa, uppdatera och ta bort uppgifter",
        "Data bevarad i localStorage – ingen backend krävs",
        "Angular-tjänster och beroende­injektion används genomgående",
      ],
    },
    role: {
      en: "Solo Developer – school project at Företagsuniversitetet",
      sv: "Ensam utvecklare – skolprojekt på Företagsuniversitetet",
    },
    problem: {
      en: "As a developer coming from React, I needed to learn Angular's conventions — modules, services, DI — by building a real CRUD application from scratch.",
      sv: "Som en utvecklare som kom från React behövde jag lära mig Angulars konventioner — moduler, tjänster, DI — genom att bygga en riktig CRUD-applikation från grunden.",
    },
    goals: {
      en: [
        "Learn Angular's component and service architecture hands-on",
        "Implement full CRUD task management with TypeScript",
        "Persist data without a backend using localStorage",
        "Deploy publicly for portfolio use",
      ],
      sv: [
        "Lär dig Angulars komponent- och tjänstarkitektur praktiskt",
        "Implementera fullständig CRUD-uppgiftshantering med TypeScript",
        "Bevara data utan en backend med localStorage",
        "Distribuera offentligt för portfolio­användning",
      ],
    },
    challenges: {
      en: [
        "Adapting from React's unidirectional data flow to Angular's two-way binding",
        "Understanding Angular's module system and dependency injection from scratch",
        "Keeping the service layer clean and testable",
      ],
      sv: [
        "Anpassa sig från Reacts enkelriktade dataflöde till Angulars tvåvägsbindning",
        "Förstå Angulars modulsystem och beroendeinjektion från grunden",
        "Hålla tjänstlagret rent och testbart",
      ],
    },
    keyDecisions: {
      en: [
        "Angular services for all business logic – components stay thin",
        "TypeScript interfaces for task models, preventing runtime type errors",
        "localStorage serialisation/deserialisation handled in a dedicated service",
      ],
      sv: [
        "Angular-tjänster för all affärslogik – komponenter hålls tunna",
        "TypeScript-gränssnitt för uppgiftsmodeller, förhindrar runtime-typfel",
        "localStorage-serialisering/-deserialisering hanteras i en dedikerad tjänst",
      ],
    },
    results: {
      en: [
        "Functional task manager live at a public URL",
        "Demonstrated cross-framework adaptability (React → Angular)",
        "Deeper understanding of Angular's opinionated architecture",
      ],
      sv: [
        "Funktionell uppgiftshanterare live på en offentlig URL",
        "Demonstrerade flexibilitet över ramverk (React → Angular)",
        "Djupare förståelse för Angulars åsiktsstarka arkitektur",
      ],
    },
    nextSteps: {
      en: [
        "Add user authentication and per-user task storage",
        "Introduce a real backend (Node.js / .NET) to replace localStorage",
        "Add drag-and-drop task reordering with Angular CDK",
      ],
      sv: [
        "Lägg till användarautentisering och per-användar-uppgiftslagring",
        "Introducera en riktig backend (Node.js / .NET) för att ersätta localStorage",
        "Lägg till drag-och-släpp för omordning av uppgifter med Angular CDK",
      ],
    },
  },
  {
    slug: "birgitta-klensmed",
    title: {
      en: "Klensmeden Birgitta – SEO-optimized website",
      sv: "Klensmeden Birgitta – SEO-optimerad webbplats",
    },
    summary: {
      en: "Static marketing site built during a course at University West with a focus on technical and on-page SEO optimization.",
      sv: "Statisk marknads­sida byggd inom kurs på Högskolan Väst med särskilt fokus på teknisk och on-page SEO-optimering.",
    },
    image: "/Klensmeden Birgitta.webp",
    tech: ["HTML", "CSS", "SEO-best-practices"],
    year: 2025,
    url: "https://remarkable-taffy-176adb.netlify.app/",
    caseStudy: true,
    highlights: {
      en: [
        "Structured data (JSON-LD) for local business rich results",
        "Semantic HTML5 with proper heading hierarchy for crawlability",
        "Fast load times – no JavaScript framework, pure HTML/CSS",
      ],
      sv: [
        "Strukturerad data (JSON-LD) för lokala företags rich results",
        "Semantisk HTML5 med korrekt rubrikhierarki för crawlbarhet",
        "Snabba laddningstider – inget JavaScript-ramverk, ren HTML/CSS",
      ],
    },
    role: {
      en: "Solo Developer – university course project at University West",
      sv: "Ensam utvecklare – universitetskursprojekt på Högskolan Väst",
    },
    problem: {
      en: "A small craft business had no online presence. The university course required building a site with strong SEO fundamentals to drive organic discovery.",
      sv: "Ett litet hantverksföretag hade ingen online-närvaro. Universitetskursen krävde att bygga en webbplats med starka SEO-grunder för att driva organisk synlighet.",
    },
    goals: {
      en: [
        "Achieve a high Lighthouse SEO score",
        "Implement structured data for local business rich results",
        "Use semantic HTML and proper meta tags throughout",
        "Build without a framework for maximum performance",
      ],
      sv: [
        "Uppnå ett högt Lighthouse SEO-poäng",
        "Implementera strukturerad data för lokala företags rich results",
        "Använd semantisk HTML och korrekta meta-taggar genomgående",
        "Bygg utan ramverk för maximal prestanda",
      ],
    },
    challenges: {
      en: [
        "Writing all structured data (JSON-LD) by hand with no tooling",
        "Balancing visual design with pure CSS and no utility framework",
        "Ensuring accessibility and semantic structure without a component system",
      ],
      sv: [
        "Skriva all strukturerad data (JSON-LD) för hand utan verktyg",
        "Balansera visuell design med ren CSS och inget utility-ramverk",
        "Säkerställa tillgänglighet och semantisk struktur utan ett komponentsystem",
      ],
    },
    keyDecisions: {
      en: [
        "Pure HTML/CSS for maximum performance – no build step needed",
        "JSON-LD structured data for LocalBusiness schema",
        "Semantic HTML elements (article, section, nav, main) for machine readability",
        "Open Graph meta tags for social sharing previews",
      ],
      sv: [
        "Ren HTML/CSS för maximal prestanda – inget byggsteg behövs",
        "JSON-LD strukturerad data för LocalBusiness-schema",
        "Semantiska HTML-element (article, section, nav, main) för maskinläsbarhet",
        "Open Graph-meta-taggar för sociala delningsförhandsgranskningar",
      ],
    },
    results: {
      en: [
        "Lighthouse SEO score of 100",
        "Lighthouse Performance score above 95",
        "Demonstrated deep understanding of technical SEO for the university course",
      ],
      sv: [
        "Lighthouse SEO-poäng på 100",
        "Lighthouse-prestationspoäng över 95",
        "Demonstrerade djup förståelse för teknisk SEO i universitetskursen",
      ],
    },
    nextSteps: {
      en: [
        "Add a blog section for content marketing and long-tail SEO",
        "Integrate Google Analytics for organic traffic monitoring",
        "Add a booking/contact form with email backend",
      ],
      sv: [
        "Lägg till en bloggsektion för content marketing och long-tail SEO",
        "Integrera Google Analytics för organisk trafikövervakning",
        "Lägg till ett boknings-/kontaktformulär med e-postbackend",
      ],
    },
  },
];

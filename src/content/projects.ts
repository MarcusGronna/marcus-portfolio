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
  /** Mark as the flagship/featured project – rendered prominently above the regular grid */
  featured?: boolean;
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
      "C#", ".NET 10", "ASP.NET Core", "React 19", "TypeScript", "Vite",
      "Tailwind CSS v4", "PostgreSQL", "EF Core", "Azure OpenAI", "JWT",
      "ASP.NET Identity", "Roslyn", "Monaco Editor", "TanStack React Query",
      "Framer Motion", "Docker Compose", "GitHub Actions", "Azure Static Web Apps", "Azure Web App",
    ],
    year: 2025,
    caseStudy: true,
    featured: true,
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

  // -------------------------------------------------------
  // TrainMateX Vision
  // -------------------------------------------------------
  {
    slug: "trainmatex-vision",
    title: {
      en: "TrainMateX Vision",
      sv: "TrainMateX Vision",
    },
    summary: {
      en: "Fullstack training platform where users can manage training programs, workouts, and exercises through a modern web application with authentication, protected APIs, and a clearly layered backend architecture.",
      sv: "Fullstack träningsplattform där användare kan hantera träningsprogram, pass och övningar genom en modern webbapplikation med autentisering, skyddade API-endpoints och tydlig lagerindelad backend-arkitektur.",
    },
    image: "/TrainMateX-Welcome-Page.png",
    images: [
      "/TrainMateX-Welcome-Page.png",
      "/TrainMateX2.png",
    ],
    tech: [
      "React 19", "TypeScript", "Vite", "Tailwind CSS v4", "TanStack Router",
      "TanStack React Query", "Clerk", "C#", ".NET 9", "ASP.NET Core",
      "EF Core", "SQL Server", "JWT", "GitHub Actions",
    ],
    year: 2025,
    caseStudy: true,
    highlights: {
      en: [
        "Modern React frontend with TanStack Router and React Query",
        "Clerk auth + JWT-protected ASP.NET Core API",
        "Clean layered backend: Application / Domain / Infrastructure",
        "EF Core + SQL Server persistence with full CRUD flows",
        "Protected API endpoints with CORS policy",
        "GitHub Actions deployment workflow",
      ],
      sv: [
        "Modern React-frontend med TanStack Router och React Query",
        "Clerk-autentisering + JWT-skyddat ASP.NET Core API",
        "Ren lagerindelad backend: Application / Domain / Infrastructure",
        "EF Core + SQL Server-persistens med fullständiga CRUD-flöden",
        "Skyddade API-endpoints med CORS-policy",
        "GitHub Actions deploy-flöde",
      ],
    },
    role: {
      en: "Solo Developer – fullstack design and implementation",
      sv: "Ensam utvecklare – fullstack design och implementation",
    },
    problem: {
      en: "The goal was to build a complete, production-relevant fullstack application that demonstrates modern frontend architecture, a protected REST API, and a clearly structured backend — all integrated with real authentication. TrainMateX Vision covers the full flow from user login to managing training programs, workouts, and exercises.",
      sv: "Målet var att bygga en komplett, produktionsrelevant fullstack-applikation som demonstrerar modern frontend-arkitektur, ett skyddat REST API och en tydligt strukturerad backend — allt integrerat med riktig autentisering. TrainMateX Vision täcker hela flödet från inloggning till hantering av träningsprogram, pass och övningar.",
    },
    solution: {
      en: "The frontend was built with React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Router for type-safe routing, and TanStack React Query for server state management. Clerk handles authentication, issuing JWTs consumed by the backend. The backend is an ASP.NET Core Web API built with C# / .NET 9, EF Core, and SQL Server, organized into API, Application, Domain, and Infrastructure layers. All endpoints are JWT-protected with a CORS policy, and the API exposes training programs, workouts, workout exercises, an exercise catalog, and user profile management.",
      sv: "Frontend byggdes med React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Router för typsäker routing och TanStack React Query för server-state-hantering. Clerk hanterar autentisering och utfärdar JWTs som konsumeras av backend. Backend är ett ASP.NET Core Web API byggt med C# / .NET 9, EF Core och SQL Server, organiserat i lager: API, Application, Domain och Infrastructure. Alla endpoints är JWT-skyddade med en CORS-policy, och API:et exponerar träningsprogram, pass, övningar i pass, ett övningskatalog och användarprofilhantering.",
    },
    goals: {
      en: [
        "Build a production-relevant fullstack app demonstrating layered backend architecture",
        "Integrate Clerk authentication with a JWT-protected ASP.NET Core API",
        "Implement CRUD flows for training programs, workouts, and exercises",
        "Use TanStack Router and React Query for a modern, type-safe frontend",
        "Deploy with GitHub Actions for automated CI/CD",
      ],
      sv: [
        "Bygga en produktionsrelevant fullstack-app som demonstrerar lagerindelad backend-arkitektur",
        "Integrera Clerk-autentisering med ett JWT-skyddat ASP.NET Core API",
        "Implementera CRUD-flöden för träningsprogram, pass och övningar",
        "Använda TanStack Router och React Query för en modern, typsäker frontend",
        "Deploya med GitHub Actions för automatiserad CI/CD",
      ],
    },
    challenges: {
      en: [
        "Wiring Clerk JWT tokens from the frontend into the ASP.NET Core middleware pipeline",
        "Designing a clean domain model for training programs, workouts, and exercises with proper relationships",
        "Keeping the Application and Domain layers free of infrastructure concerns",
        "Configuring CORS correctly for a cross-origin frontend/backend setup",
      ],
      sv: [
        "Koppla Clerk JWT-tokens från frontend in i ASP.NET Core middleware-pipeline",
        "Designa en ren domänmodell för träningsprogram, pass och övningar med korrekta relationer",
        "Hålla Application- och Domain-lagren fria från infrastrukturbekymmer",
        "Konfigurera CORS korrekt för en cross-origin frontend/backend-uppsättning",
      ],
    },
    keyDecisions: {
      en: [
        "Clerk for authentication – battle-tested auth provider with straightforward JWT integration",
        "TanStack Router for type-safe, file-based routing in React",
        "Layered backend architecture (API / Application / Domain / Infrastructure) for maintainability",
        "EF Core + SQL Server for familiar, robust .NET persistence",
        "GitHub Actions for automatic CI/CD deployment",
      ],
      sv: [
        "Clerk för autentisering – vältestad auth-leverantör med enkel JWT-integration",
        "TanStack Router för typsäker, filbaserad routing i React",
        "Lagerindelad backend-arkitektur (API / Application / Domain / Infrastructure) för underhållbarhet",
        "EF Core + SQL Server för bekant, robust .NET-persistens",
        "GitHub Actions för automatisk CI/CD-deployment",
      ],
    },
    results: {
      en: [
        "A complete fullstack app with Clerk auth, protected API endpoints, and full CRUD for workouts and training programs",
        "Demonstrated end-to-end integration: React frontend → Clerk JWT → ASP.NET Core API → SQL Server",
        "Clean layered backend architecture ready for further expansion",
        "Hands-on experience with TanStack Router and TanStack React Query in a real product",
      ],
      sv: [
        "En komplett fullstack-app med Clerk-auth, skyddade API-endpoints och full CRUD för träningspass och program",
        "Demonstrerad end-to-end-integration: React-frontend → Clerk JWT → ASP.NET Core API → SQL Server",
        "Ren lagerindelad backend-arkitektur redo för vidare expansion",
        "Praktisk erfarenhet av TanStack Router och TanStack React Query i en riktig produkt",
      ],
    },
    nextSteps: {
      en: [
        "Add workout logging and progress tracking over time",
        "Build a dashboard with visualized training statistics",
        "Extend to a mobile app using React Native",
      ],
      sv: [
        "Lägg till träningsloggning och framstegsspårning över tid",
        "Bygg en dashboard med visualiserad träningsstatistik",
        "Utöka till en mobilapp med React Native",
      ],
    },
  },

  // -------------------------------------------------------
  // SQS Mini – event-driven pipeline
  // -------------------------------------------------------
  {
    slug: "sqs-mini",
    title: {
      en: "sqs-mini – Event-Driven Pipeline",
      sv: "sqs-mini – Eventdriven Pipeline",
    },
    summary: {
      en: "A small but realistic backend project that demonstrates an event-driven pipeline with AWS SQS, .NET, and Pulumi. It shows queue publishing, worker consumption, idempotency, retries, and DLQ handling in a way that is relevant to modern distributed systems.",
      sv: "sqs-mini är ett litet men realistiskt backendprojekt som visar en eventdriven pipeline med AWS SQS, .NET och Pulumi. Projektet demonstrerar köpublicering, worker-konsumtion, idempotens, retries och DLQ-hantering på ett sätt som är relevant för moderna distribuerade system.",
    },
    image: "/SqsPipeline1.png",
    images: [
      "/SqsPipeline1.png",
      "/SqsPipeline2.png",
    ],
    tech: [
      "C#", ".NET", "AWS SQS", "Pulumi", "Minimal API", "Worker Service", "SQLite",
    ],
    year: 2025,
    caseStudy: true,
    highlights: {
      en: [
        "Producer → Queue → Consumer flow with AWS SQS Standard Queue + DLQ",
        "Pulumi Infrastructure as Code in C#",
        "BillingWorker with long polling and at-least-once delivery",
        "Idempotent message processing with SQLite store",
        "Clear demonstration of retries and dead-letter queue behavior",
        "Clean separation between infrastructure and application code",
      ],
      sv: [
        "Producer → Queue → Consumer-flöde med AWS SQS Standard Queue + DLQ",
        "Pulumi Infrastructure as Code i C#",
        "BillingWorker med long polling och at-least-once delivery",
        "Idempotent meddelandebehandling med SQLite-lagring",
        "Tydlig demonstration av retries och dead-letter queue-beteende",
        "Tydlig separation mellan infrastruktur- och applikationskod",
      ],
    },
    role: {
      en: "Solo Developer – backend and infrastructure design",
      sv: "Ensam utvecklare – backend och infrastrukturdesign",
    },
    problem: {
      en: "Event-driven architecture, message queues, and idempotent processing are patterns that appear in most production distributed systems. sqs-mini is a focused project to demonstrate these patterns concretely: a producer that publishes messages to an SQS queue, a worker service that consumes them with long polling, handles retries, avoids duplicate processing, and routes failed messages to a dead-letter queue.",
      sv: "Eventdriven arkitektur, meddelandeköer och idempotent behandling är mönster som återkommer i de flesta produktion-distribuerade system. sqs-mini är ett fokuserat projekt för att demonstrera dessa mönster konkret: en producer som publicerar meddelanden till en SQS-kö, en worker-tjänst som konsumerar dem med long polling, hanterar retries, undviker dubbelbehandling och routar felaktiga meddelanden till en dead-letter queue.",
    },
    solution: {
      en: "The project is composed of two .NET applications: a Minimal API (`SessionApi`) acting as the message producer, and a Worker Service (`BillingWorker`) acting as the consumer. The infrastructure – an SQS Standard Queue and its DLQ – is provisioned using Pulumi in C#. The worker uses long polling to efficiently receive messages, processes them idempotently using a SQLite store to track already-handled message IDs, and lets SQS handle retries and DLQ routing for unprocessable messages. Runtime configuration is environment-based to keep credentials and queue URLs out of source code.",
      sv: "Projektet består av två .NET-applikationer: ett Minimal API (`SessionApi`) som fungerar som meddelandeproducer och en Worker Service (`BillingWorker`) som fungerar som konsument. Infrastrukturen – en SQS Standard Queue och dess DLQ – provisioneras med Pulumi i C#. Workern använder long polling för effektiv meddelandeemottagning, behandlar meddelanden idempotent med en SQLite-lagring för att spåra redan hanterade meddelande-ID:n, och låter SQS hantera retries och DLQ-routing för obehandlingsbara meddelanden. Runtimekonfiguration är miljöbaserad för att hålla kredentialer och kö-URL:er utanför källkoden.",
    },
    goals: {
      en: [
        "Demonstrate a realistic producer → queue → consumer flow",
        "Provision AWS infrastructure declaratively with Pulumi IaC in C#",
        "Implement long polling in a .NET Worker Service",
        "Handle idempotency with a SQLite-backed message ID store",
        "Show retries and dead-letter queue behavior clearly",
      ],
      sv: [
        "Demonstrera ett realistiskt producer → queue → consumer-flöde",
        "Provisionera AWS-infrastruktur deklarativt med Pulumi IaC i C#",
        "Implementera long polling i en .NET Worker Service",
        "Hantera idempotens med en SQLite-baserad meddelande-ID-lagring",
        "Visa retries och dead-letter queue-beteende tydligt",
      ],
    },
    challenges: {
      en: [
        "Designing an idempotency store that is lightweight but reliable for the demo use case",
        "Configuring Pulumi to provision SQS queues with the correct DLQ linkage and retry policies",
        "Handling environment-based config cleanly without leaking secrets into source code",
      ],
      sv: [
        "Designa ett idempotenslagring som är lättviktigt men tillförlitligt för demoändamålet",
        "Konfigurera Pulumi för att provisionera SQS-köer med korrekt DLQ-koppling och retry-policy",
        "Hantera miljöbaserad konfiguration rent utan att läcka hemligheter i källkoden",
      ],
    },
    keyDecisions: {
      en: [
        "Pulumi in C# for IaC – keeps the entire stack in one language the team knows",
        "SQLite for the idempotency store – zero infrastructure cost for a demo, easy to swap for Redis or DynamoDB in production",
        "Worker Service pattern – the idiomatic .NET approach for long-running background consumers",
        "Minimal API for the producer – lightweight and fast to stand up",
      ],
      sv: [
        "Pulumi i C# för IaC – håller hela stacken i ett språk som teamet känner till",
        "SQLite för idempotenslagring – noll infrastrukturkostnad för demo, enkel att byta mot Redis eller DynamoDB i produktion",
        "Worker Service-mönster – det idiomatiska .NET-sättet för långvariga bakgrundskonsumenter",
        "Minimal API för producer – lättviktigt och snabbt att sätta upp",
      ],
    },
    results: {
      en: [
        "A working end-to-end event-driven pipeline: API publishes → SQS delivers → Worker consumes → DLQ catches failures",
        "Infrastructure fully reproducible with a single Pulumi command",
        "Demonstrated understanding of distributed systems patterns: idempotency, retries, DLQ, at-least-once delivery",
      ],
      sv: [
        "En fungerande end-to-end eventdriven pipeline: API publicerar → SQS levererar → Worker konsumerar → DLQ fångar fel",
        "Infrastruktur fullt reproducerbar med ett enda Pulumi-kommando",
        "Demonstrerad förståelse för distribuerade systemmönster: idempotens, retries, DLQ, at-least-once delivery",
      ],
    },
    nextSteps: {
      en: [
        "Replace SQLite idempotency store with DynamoDB for a fully cloud-native solution",
        "Add structured logging and observability with CloudWatch",
        "Extend to FIFO queue for strict ordering guarantees",
      ],
      sv: [
        "Ersätt SQLite-idempotenslagring med DynamoDB för en fullt molnbaserad lösning",
        "Lägg till strukturerad loggning och observability med CloudWatch",
        "Utöka till FIFO-kö för strikta ordningsgarantier",
      ],
    },
  },

  // -------------------------------------------------------
  // Postman Clone – learning/tooling project
  // -------------------------------------------------------
  {
    slug: "postman-clone",
    title: {
      en: "Postman Clone",
      sv: "Postman Clone",
    },
    summary: {
      en: "A desktop tooling project built with C# and WinForms for making HTTP requests and viewing JSON responses. Created as a learning project to explore desktop development, API calls, and the workflow behind API testing tools.",
      sv: "Postman Clone är ett desktop-baserat verktygsprojekt i C# och WinForms för att skicka HTTP-anrop och visa JSON-svar. Projektet byggdes som ett lärandeprojekt för att utforska desktoputveckling, API-anrop och arbetsflödet bakom verktyg för API-testning.",
    },
    image: "/PostmanClone1.png",
    images: [
      "/PostmanClone1.png",
      "/PostmanClone2.png",
      "/PostmanClone3.png",
    ],
    tech: ["C#", ".NET 10", "WinForms", "HttpClient"],
    year: 2025,
    caseStudy: true,
    highlights: {
      en: [
        "Desktop UI built with WinForms for sending HTTP requests",
        "HTTP request handling with HttpClient",
        "JSON response viewing with formatted output",
        "Supports multiple HTTP methods (GET, POST, PUT, DELETE)",
        "Learning project exploring desktop development and API testing workflows",
      ],
      sv: [
        "Desktop-UI byggt med WinForms för att skicka HTTP-anrop",
        "HTTP-anropshantering med HttpClient",
        "JSON-svarsvisning med formaterad output",
        "Stöder flera HTTP-metoder (GET, POST, PUT, DELETE)",
        "Lärandeprojekt som utforskar desktoputveckling och API-testningsflöden",
      ],
    },
    role: {
      en: "Solo Developer – learning project",
      sv: "Ensam utvecklare – lärandeprojekt",
    },
    problem: {
      en: "As a web-focused developer, I wanted to explore WinForms desktop development and deepen my understanding of how HTTP clients work under the hood. Building a simplified Postman-style tool was a practical way to combine both: building a desktop UI and understanding the workflow behind API testing tools. This project was inspired by a tutorial and built as a learning exercise.",
      sv: "Som webbutvecklare ville jag utforska WinForms desktop-utveckling och fördjupa min förståelse för hur HTTP-klienter fungerar under huven. Att bygga ett förenklat Postman-liknande verktyg var ett praktiskt sätt att kombinera båda: bygga ett desktop-UI och förstå arbetsflödet bakom API-testningsverktyg. Projektet byggdes inspirerat av en tutorial och som ett lärandeövning.",
    },
    solution: {
      en: "The application is a WinForms desktop app built in C# / .NET 10. It provides a UI for selecting the HTTP method (GET, POST, PUT, DELETE), entering a URL, optionally providing a request body, and viewing the formatted JSON response. HttpClient handles the actual HTTP communication. The focus was on understanding desktop UI patterns, event-driven WinForms programming, and correct use of HttpClient for API calls.",
      sv: "Applikationen är en WinForms desktop-app byggd i C# / .NET 10. Den erbjuder ett UI för att välja HTTP-metod (GET, POST, PUT, DELETE), ange en URL, valfritt ange en request-body och visa det formaterade JSON-svaret. HttpClient hanterar den faktiska HTTP-kommunikationen. Fokus låg på att förstå desktop-UI-mönster, eventdriven WinForms-programmering och korrekt användning av HttpClient för API-anrop.",
    },
    goals: {
      en: [
        "Explore WinForms desktop development as a contrast to web-based UIs",
        "Understand how HttpClient works for making HTTP requests in C#",
        "Build a functional tool for sending HTTP requests and viewing responses",
        "Practice event-driven desktop UI programming",
      ],
      sv: [
        "Utforska WinForms desktop-utveckling som kontrast till webbaserade UIs",
        "Förstå hur HttpClient fungerar för HTTP-anrop i C#",
        "Bygga ett funktionellt verktyg för att skicka HTTP-anrop och visa svar",
        "Träna eventdriven desktop-UI-programmering",
      ],
    },
    challenges: {
      en: [
        "Learning WinForms layout and event model coming from a web background",
        "Handling async HTTP calls correctly in a WinForms event-driven context",
        "Displaying and formatting JSON responses in a readable way",
      ],
      sv: [
        "Lära sig WinForms layout och event-modell med bakgrund inom webbutveckling",
        "Hantera asynkrona HTTP-anrop korrekt i ett eventdrivet WinForms-sammanhang",
        "Visa och formatera JSON-svar på ett läsbart sätt",
      ],
    },
    keyDecisions: {
      en: [
        "WinForms for a lightweight desktop UI without needing WPF or MAUI overhead",
        "HttpClient for HTTP communication – the standard .NET approach",
        "Kept scope intentionally small – the value is the learning, not a production tool",
      ],
      sv: [
        "WinForms för ett lättviktigt desktop-UI utan behov av WPF eller MAUI",
        "HttpClient för HTTP-kommunikation – standardmetoden i .NET",
        "Medvetet liten scope – värdet är lärandet, inte ett produktionsverktyg",
      ],
    },
    results: {
      en: [
        "A working desktop tool for sending HTTP requests and viewing JSON responses",
        "Hands-on experience with WinForms, desktop event handling, and HttpClient",
        "Better understanding of how API testing tools work under the hood",
      ],
      sv: [
        "Ett fungerande desktop-verktyg för att skicka HTTP-anrop och visa JSON-svar",
        "Praktisk erfarenhet av WinForms, desktop-event-hantering och HttpClient",
        "Bättre förståelse för hur API-testningsverktyg fungerar under huven",
      ],
    },
    nextSteps: {
      en: [
        "Add request history and saved collections",
        "Support custom headers and authentication flows",
        "Explore migrating the UI to .NET MAUI for cross-platform support",
      ],
      sv: [
        "Lägg till request-historik och sparade samlingar",
        "Stöd anpassade headers och autentiseringsflöden",
        "Utforska att migrera UI:t till .NET MAUI för cross-platform-stöd",
      ],
    },
  },
];

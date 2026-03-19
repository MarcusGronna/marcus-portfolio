// src/content/projects.ts
// --------------------------------------------------
// Portfolio-projekt med publika länkar (lägg riktiga skärmdumpar i /public)

export interface Project {
  slug: string;
  title: { en: string; sv: string };
  summary: { en: string; sv: string };
  image: string;
  tech: string[];
  year: number;
  url: string;
  /** Direct GitHub / source URL */
  github?: string;
  /** 2–3 short recruiter-facing highlights shown on the project card */
  highlights?: { en: string[]; sv: string[] };
  /** Set true to enable the /projects/[slug] case-study page */
  caseStudy?: boolean;
  // ---- case-study fields (all optional) ----
  role?: { en: string; sv: string };
  problem?: { en: string; sv: string };
  goals?: { en: string[]; sv: string[] };
  challenges?: { en: string[]; sv: string[] };
  keyDecisions?: { en: string[]; sv: string[] };
  results?: { en: string[]; sv: string[] };
  nextSteps?: { en: string[]; sv: string[] };
}

export const projects: Project[] = [
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

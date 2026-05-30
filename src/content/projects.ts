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
  /**
   * Ordered steps describing the end-to-end architecture / request flow.
   * Rendered as a visual step-flow diagram on the case-study page.
   */
  architectureFlow?: { en: string[]; sv: string[] };
  goals?: { en: string[]; sv: string[] };
  challenges?: { en: string[]; sv: string[] };
  keyDecisions?: { en: string[]; sv: string[] };
  results?: { en: string[]; sv: string[] };
  /** Paragraph describing key takeaways / what was learned building this project. */
  whatILearned?: { en: string; sv: string };
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
      en: "AI-driven coding platform where users learn C# by solving challenges inside a story that adapts based on their answers. The backend validates code with Roslyn and generates new chapters with Azure OpenAI.",
      sv: "AI-driven kodplattform där användare lär sig C# genom att lösa utmaningar i en berättelse som anpassas efter deras svar. Backend validerar kod med Roslyn och genererar nya kapitel med Azure OpenAI.",
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
    year: 2026,
    url: "https://salmon-beach-082105003.4.azurestaticapps.net/",
    github: "https://github.com/salt-community/CodeQuest",
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
      en: "Team of 3 – primary focus on AI integration with Azure OpenAI",
      sv: "Grupp om 3 – primärt fokus på AI-integration med Azure OpenAI",
    },
    problem: {
      en: "CodeQuest is a web-based learning platform where code is the gameplay mechanic and story is what keeps the user engaged. The user solves C# challenges to progress, while the backend validates solutions objectively using Roslyn. Each chapter is generated dynamically by Azure OpenAI based on what happened in the previous step.",
      sv: "CodeQuest är en webbaserad lärplattform där kod är spelmekaniken och berättelsen håller användaren engagerad. Användaren löser C#-uppgifter för att ta sig vidare, medan backend validerar lösningarna objektivt med Roslyn. Varje kapitel genereras dynamiskt av Azure OpenAI baserat på vad som hände i föregående steg.",
    },
    aiIntegration: {
      en: "The project is AI-integrated in the sense that each new chapter is generated dynamically with Azure OpenAI. The story continues based on the narrative context from the previous chapter and is influenced by whether the player answered correctly or incorrectly in the previous step. This makes the experience adaptive and more engaging than a static exercise flow.",
      sv: "Projektet är AI-integrerat på så vis att varje nytt kapitel genereras dynamiskt med Azure OpenAI. Storyn fortsätter utifrån sammanhanget från föregående kapitel och påverkas av om användaren svarade rätt eller fel i föregående steg. Det gör att upplevelsen blir adaptiv och mer levande än en statisk uppgiftssamling.",
    },
    solution: {
      en: "The frontend is React 19, TypeScript, and Vite with Monaco Editor for code input and React Query for data fetching. The backend is .NET 10, ASP.NET Core, EF Core, and PostgreSQL. Azure OpenAI generates scenarios as structured JSON, and Roslyn compiles and runs user-submitted C# code server-side. The backend is split into API, Application, and Domain layers.",
      sv: "Frontend är React 19, TypeScript och Vite med Monaco Editor för kodinmatning och React Query för datahämtning. Backend är .NET 10, ASP.NET Core, EF Core och PostgreSQL. Azure OpenAI genererar scenarion som strukturerad JSON, och Roslyn kompilerar och kör användarens C#-kod server-side. Backend är uppdelad i API-, Application- och Domain-lager.",
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
        "A working adaptive coding platform where each session produces a unique AI-generated story",
        "Full integration from AI generation through frontend rendering to server-side code validation and narrative branching",
        "Practical experience combining AI, authentication, Roslyn code execution, database modelling, and modern frontend in one product",
        "The most technically complex project in my portfolio, showing fullstack breadth and the ability to connect multiple systems",
      ],
      sv: [
        "En fungerande adaptiv kodplattform där varje session producerar en unik AI-genererad berättelse",
        "Full integration från AI-generering genom frontend-rendering till server-side kodvalidering och narrativ förgrening",
        "Praktisk erfarenhet av att kombinera AI, autentisering, Roslyn-kodexekvering, databasmodellering och modern frontend i en produkt",
        "Det mest tekniskt komplexa projektet i min portfolio, som visar fullstackbredd och förmåga att koppla samman flera system",
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
    architectureFlow: {
      en: [
        "User writes C# code in the Monaco Editor (browser-based IDE)",
        "Solution is submitted to the backend ASP.NET Core Web API endpoint",
        "Roslyn (Microsoft.CodeAnalysis) compiles and executes the code server-side in a sandboxed context",
        "Evaluation result (pass / fail + output) is persisted in PostgreSQL via EF Core",
        "Azure OpenAI receives the previous chapter's narrative context plus the pass/fail result and generates the next chapter as structured JSON",
        "Frontend fetches the new scenario via TanStack React Query and renders the updated challenge — story adapts based on the player's performance",
      ],
      sv: [
        "Användaren skriver C#-kod i Monaco Editor (webbläsarbaserad IDE)",
        "Lösningen skickas till backend-API:ets endpoint (ASP.NET Core Web API)",
        "Roslyn (Microsoft.CodeAnalysis) kompilerar och kör koden server-side i ett sandboxat sammanhang",
        "Bedömningsresultatet (godkänd/underkänd + output) sparas i PostgreSQL via EF Core",
        "Azure OpenAI tar emot föregående kapitels narrativa kontext plus godkänd/underkänd-resultat och genererar nästa kapitel som strukturerad JSON",
        "Frontend hämtar det nya scenariot via TanStack React Query och renderar den uppdaterade utmaningen — storyn anpassas utifrån spelarens prestation",
      ],
    },
    whatILearned: {
      en: "Building CodeQuest gave me hands-on experience connecting several complex systems in one product: AI content generation with structured JSON outputs, server-side code execution with Roslyn, session-based state management, and a browser-based IDE with Monaco Editor. I got a much better understanding of prompt engineering for predictable outputs, layered .NET architecture, and what it takes to make backend the single source of truth in an adaptive user experience.",
      sv: "Att bygga CodeQuest gav mig praktisk erfarenhet av att koppla samman flera komplexa system i en produkt: AI-innehållsgenerering med strukturerade JSON-utdata, server-side kodexekvering med Roslyn, sessionsbaserad tillståndshantering och en webbläsarbaserad IDE med Monaco Editor. Jag fick mycket bättre förståelse för prompt engineering med förutsägbara utdata, lagerindelad .NET-arkitektur och vad som krävs för att göra backend till enda sanningskällan i en adaptiv användarupplevelse.",
    },
  },

  // -------------------------------------------------------
  // DeepDiveInfra – Self-Hosted CI/CD & Kubernetes Delivery Lab
  // -------------------------------------------------------
  {
    slug: "deepdive-infra",
    title: {
      en: "DeepDiveInfra – Self-Hosted CI/CD & Kubernetes Delivery Lab",
      sv: "DeepDiveInfra – Self-hosted CI/CD- och Kubernetes-labb",
    },
    summary: {
      en: "A self-hosted infrastructure learning project. The application itself is a deliberately simple ASP.NET Core backend. The point is the delivery chain: CI/CD with GitHub Actions, Docker, a self-hosted runner, local Kubernetes with kind, and observability with Prometheus and Grafana.",
      sv: "Ett self-hosted infrastrukturprojekt för lärande. Själva applikationen är en medvetet enkel ASP.NET Core-backend. Poängen är leveranskedjan: CI/CD med GitHub Actions, Docker, en self-hosted runner, lokal Kubernetes med kind, och observability med Prometheus och Grafana.",
    },
    image: "/projects/deepdive-infra/grafana-updated-dashboard-with-load.png",
    images: [
      "/projects/deepdive-infra/grafana-updated-dashboard-with-load.png",
      "/projects/deepdive-infra/ci-cd-workflow-action-github-actions.png",
      "/projects/deepdive-infra/kubernetes-pods.png",
      "/projects/deepdive-infra/endpoint-health-check.png",
    ],
    tech: [
      "C#", ".NET 10", "ASP.NET Core", "Minimal API", "SQLite", "EF Core",
      "xUnit", "GitHub Actions", "Docker", "Kubernetes", "kind", "kubectl",
      "Linux", "WSL", "Prometheus", "Grafana", "Scalar / OpenAPI",
    ],
    year: 2026,
    github: "https://github.com/MarcusGronna/DeepDive-Public",
    caseStudy: true,
    highlights: {
      en: [
        "Full CI/CD pipeline: GitHub Actions → Docker → self-hosted Kubernetes deployment",
        "Prometheus + Grafana observability for cluster, pod, and app-level metrics",
        "Self-hosted Linux deployment runner on Windows/WSL with kind",
        "Intentionally simple backend to keep focus on infrastructure and delivery",
      ],
      sv: [
        "Full CI/CD-pipeline: GitHub Actions → Docker → self-hosted Kubernetes-deployment",
        "Prometheus + Grafana-observability för kluster-, pod- och applikationsnivå",
        "Self-hosted Linux-deploymentrunner på Windows/WSL med kind",
        "Medvetet enkel backend för att behålla fokus på infrastruktur och leverans",
      ],
    },
    role: {
      en: "Solo Developer – infrastructure-focused delivery and observability case",
      sv: "Ensam utvecklare – leverans- och observability-fokuserat infrastrukturcase",
    },
    problem: {
      en: "The problem I wanted to solve wasn't about domain logic. It was about understanding what happens after code is written: how a backend goes from source code to a tested build, to a container, to a deployed workload in Kubernetes, to something you can actually monitor. I built this project to work through each layer myself instead of just reading about it.",
      sv: "Problemet jag ville lösa handlade inte om domänlogik. Det handlade om att förstå vad som händer efter att koden är skriven: hur en backend går från källkod till testad build, till container, till deployad workload i Kubernetes, till något man faktiskt kan övervaka. Jag byggde det här projektet för att arbeta igenom varje lager själv istället för att bara läsa om det.",
    },
    solution: {
      en: "The solution is a self-hosted local lab: a Windows host with WSL/Linux tooling, Docker Desktop, a kind cluster, GitHub Actions for build and test, a self-hosted runner for deployment, and Prometheus + Grafana for monitoring. The ASP.NET Core API uses SQLite and EF Core with automatic migrations on startup. The app itself remains intentionally small so the infrastructure and delivery chain stay in focus.",
      sv: "Lösningen är ett self-hosted lokalt labb: en Windows-värd med WSL/Linux-verktyg, Docker Desktop, ett kind-kluster, GitHub Actions för build och test, en self-hosted runner för deployment och Prometheus + Grafana för övervakning. ASP.NET Core-API:t använder SQLite och EF Core med automatiska migreringar vid uppstart. Appen i sig hålls medvetet enkel så att infrastruktur och leveranskedja förblir i fokus.",
    },
    architectureFlow: {
      en: [
        "Build a simple ASP.NET Core API with SQLite and EF Core",
        "Push changes to GitHub",
        "GitHub Actions restores, builds, and tests the solution",
        "A self-hosted Linux runner picks up the deployment job",
        "Docker packages the API as a deployable image",
        "The image is deployed to a local kind Kubernetes cluster",
        "Kubernetes runs the workload as pods/services",
        "Prometheus scrapes app and cluster metrics",
        "Grafana visualizes system health and runtime behavior",
      ],
      sv: [
        "Bygg en enkel ASP.NET Core-API med SQLite och EF Core",
        "Pusha ändringar till GitHub",
        "GitHub Actions återställer, bygger och testar lösningen",
        "En self-hosted Linux-runner hämtar deployment-jobbet",
        "Docker paketerar API:t som en deploybar image",
        "Imagen deployas till ett lokalt kind-baserat Kubernetes-kluster",
        "Kubernetes kör workloaden som pods/services",
        "Prometheus scrapar applikations- och klustermetrics",
        "Grafana visualiserar systemhälsa och runtime-beteende",
      ],
    },
    goals: {
      en: [
        "Understand the full delivery chain end to end",
        "Compare GitHub-hosted and self-hosted runners",
        "Deploy a real containerized backend to Kubernetes",
        "Add monitoring and make the system observable",
        "Document architecture decisions and trade-offs",
      ],
      sv: [
        "Förstå hela leveranskedjan från start till slut",
        "Jämföra GitHub-hosted och self-hosted runners",
        "Deploya en riktig containeriserad backend till Kubernetes",
        "Lägga till övervakning och göra systemet observerbart",
        "Dokumentera arkitekturbeslut och avvägningar",
      ],
    },
    challenges: {
      en: [
        "Understanding the boundaries between development, build, deploy, and runtime environments",
        "Configuring the self-hosted runner correctly on Linux/WSL",
        "Handling the Windows + WSL + Docker Desktop + kind stack",
        "Structuring Kubernetes manifests and deployment flow cleanly",
        "Exposing useful Prometheus and Grafana metrics without overcomplicating the project",
      ],
      sv: [
        "Förstå gränserna mellan utvecklings-, build-, deploy- och runtime-miljöer",
        "Konfigurera self-hosted runnern korrekt på Linux/WSL",
        "Hantera stacken Windows + WSL + Docker Desktop + kind",
        "Strukturera Kubernetes-manifester och deployment-flödet rent",
        "Exponera användbara Prometheus- och Grafana-metrikar utan att överkomplicera projektet",
      ],
    },
    keyDecisions: {
      en: [
        "Keep the backend intentionally simple – the value is the delivery chain, not the domain",
        "Use SQLite because the goal is delivery-chain learning, not distributed data design",
        "Use kind for a local Kubernetes learning environment",
        "Use Prometheus/Grafana for practical observability",
        "Keep the project self-hosted and local instead of managed cloud",
      ],
      sv: [
        "Hålla backend medvetet enkel – värdet ligger i leveranskedjan, inte domänen",
        "Använda SQLite eftersom målet är att lära sig leveranskedjan, inte distribuerad datadesign",
        "Använda kind för en lokal Kubernetes-lärmiljö",
        "Använda Prometheus/Grafana för praktisk observability",
        "Hålla projektet self-hosted och lokalt istället för hanterad molntjänst",
      ],
    },
    results: {
      en: [
        "Working CI/CD flow from GitHub push to deployed Kubernetes workload on my local machine",
        "Self-hosted deployment runner configured in a Linux/WSL environment",
        "ASP.NET Core API running inside a kind Kubernetes cluster",
        "Metrics visible in Prometheus and Grafana dashboards",
        "A concrete infrastructure case showing that I understand the delivery chain beyond just writing code",
      ],
      sv: [
        "Fungerande CI/CD-flöde från GitHub-push till deployad Kubernetes-workload på min lokala maskin",
        "Self-hosted deployment-runner konfigurerad i en Linux/WSL-miljö",
        "ASP.NET Core-API körande inuti ett kind Kubernetes-kluster",
        "Metrikar synliga i Prometheus- och Grafana-dashboards",
        "Ett konkret infrastrukturcase som visar att jag förstår leveranskedjan bortom att bara skriva kod",
      ],
    },
    whatILearned: {
      en: "This project made the difference between development, build, deploy, and runtime environments concrete for me. I learned why containers matter as deployment artifacts, what Kubernetes actually manages at the pod and service level, and how Prometheus and Grafana make even a simple system easier to understand. The biggest takeaway: infrastructure understanding is its own skill, separate from writing application code.",
      sv: "Det här projektet gjorde skillnaden mellan utvecklings-, build-, deploy- och runtime-miljöer konkret för mig. Jag lärde mig varför containrar spelar roll som deployment-artefakter, vad Kubernetes faktiskt hanterar på pod- och tjänstnivå, och hur Prometheus och Grafana gör även ett enkelt system lättare att förstå. Största insikten: infrastrukturförståelse är en egen kompetens, skild från att skriva applikationskod.",
    },
    nextSteps: {
      en: [
        "Add CPU/memory usage metrics and alerting rules",
        "Introduce ingress for external access to the cluster",
        "Move from SQLite to a more production-like data setup",
        "Package manifests more cleanly with Helm or a similar approach",
      ],
      sv: [
        "Lägga till CPU-/minnesanvändningsmetrikar och alertregler",
        "Introducera ingress för extern åtkomst till klustret",
        "Gå från SQLite till en mer produktionslik datauppsättning",
        "Paketera manifester renare med Helm eller liknande approach",
      ],
    },
  },

  // -------------------------------------------------------
  // mek-bookings – Event-Driven Bookings Microservice
  // -------------------------------------------------------
  {
    slug: "mek-bookings",
    title: {
      en: "mek-bookings – Event-Driven Bookings Microservice",
      sv: "mek-bookings – Eventdriven bokningsmikrotjänst",
    },
    summary: {
      en: "A collaborative learning project exploring event-driven microservices with Apache Kafka. This repo contains the bookings service and frontend: ASP.NET Core, PostgreSQL, Kafka on Aiven, and Server-Sent Events for real-time UI updates.",
      sv: "Ett kollaborativt lärandeprojekt som utforskar eventdrivna mikrotjänster med Apache Kafka. Det här repot innehåller bokningstjänsten och frontend: ASP.NET Core, PostgreSQL, Kafka på Aiven och Server-Sent Events för realtidsuppdateringar i UI.",
    },
    image: "/projects/mek-bookings/kafka-project-grafical.png",
    images: [
      "/projects/mek-bookings/kafka-project-grafical.png",
      "/projects/mek-bookings/bookings-ui.png",
    ],
    tech: [
      "C#", ".NET 9", "ASP.NET Core", "Minimal API", "PostgreSQL", "EF Core",
      "Apache Kafka", "Aiven", "Confluent.Kafka", "React", "Vite", "TypeScript",
      "Tailwind CSS", "Server-Sent Events", "JSON", "REST API",
    ],
    year: 2026,
    caseStudy: true,
    highlights: {
      en: [
        "Kafka-based async event publishing and consumption across service boundaries",
        "Real-time UI updates via Server-Sent Events – no manual refresh needed",
        "Collaborative microservice exercise across multiple teams with shared event contracts",
        "PostgreSQL + EF Core persistence for booking data",
      ],
      sv: [
        "Kafka-baserad asynkron eventpublicering och -konsumtion över tjänstgränser",
        "Realtidsuppdateringar i UI via Server-Sent Events – ingen manuell uppdatering krävs",
        "Kollaborativ mikrotjänstövning över flera team med delade eventkontrakt",
        "PostgreSQL + EF Core-persistens för bokningsdata",
      ],
    },
    role: {
      en: "Team of 3 on the bookings service, collaborating with two other teams across shared Kafka event flows",
      sv: "Grupp om 3 i bookings-tjänsten, i samarbete med två andra team över delade Kafka-eventflöden",
    },
    problem: {
      en: "The goal was to learn how independent services communicate asynchronously through events instead of direct calls. The bookings service needed to store bookings, publish events to Kafka, react to events from other team's services, and push updates to the frontend in real time.",
      sv: "Målet var att lära sig hur oberoende tjänster kommunicerar asynkront genom events istället för direktanrop. Bokningstjänsten behövde lagra bokningar, publicera events till Kafka, reagera på events från andra teams tjänster och pusha uppdateringar till frontend i realtid.",
    },
    solution: {
      en: "The bookings service stores data in PostgreSQL and publishes booking events to Kafka. Other services in the wider exercise react asynchronously. The service also consumes relevant external events and maps incoming changes back to booking state. An SSE endpoint pushes updates to connected frontend clients so the UI updates without manual refresh. The React + Vite + TypeScript frontend provides a practical UI for viewing and managing bookings.",
      sv: "Bokningstjänsten lagrar data i PostgreSQL och publicerar boknings-events till Kafka. Andra tjänster i den bredare övningen reagerar asynkront. Tjänsten konsumerar även relevanta externa events och mappar inkommande förändringar tillbaka till bokningsstatus. En SSE-endpoint pushar uppdateringar till anslutna frontend-klienter så att UI:t uppdateras utan manuell omladdning. React + Vite + TypeScript-frontendet erbjuder ett praktiskt UI för att visa och hantera bokningar.",
    },
    architectureFlow: {
      en: [
        "A user creates or updates a booking through the frontend or API",
        "The Bookings API stores the data in PostgreSQL",
        "The service publishes booking events to Kafka",
        "Other services in the wider system react asynchronously",
        "The bookings service also consumes relevant external events",
        "Incoming changes are mapped back to booking state",
        "The SSE stream pushes updates to connected frontend clients",
        "The UI updates without needing manual refresh",
      ],
      sv: [
        "En användare skapar eller uppdaterar en bokning via frontend eller API",
        "Bookings API persisterar datan i PostgreSQL",
        "Tjänsten publicerar booking-events till Kafka",
        "Andra tjänster i det bredare systemet reagerar asynkront",
        "Bookings-tjänsten konsumerar även relevanta externa events",
        "Inkommande förändringar mappas tillbaka till bokningsstatus",
        "SSE-strömmen pushar uppdateringar till anslutna frontend-klienter",
        "UI:t uppdateras utan manuell refresh",
      ],
    },
    goals: {
      en: [
        "Learn event-driven service communication in practice",
        "Build and consume Kafka events across service boundaries",
        "Integrate a PostgreSQL-backed microservice with async event flows",
        "Create a real-time frontend with Server-Sent Events",
        "Understand cross-team contracts and async workflow design",
      ],
      sv: [
        "Lära sig eventdriven tjänstkommunikation i praktiken",
        "Bygga och konsumera Kafka-events över tjänstgränser",
        "Integrera en PostgreSQL-backad mikrotjänst med asynkrona eventflöden",
        "Skapa en realtidsfrontend med Server-Sent Events",
        "Förstå cross-team-kontrakt och asynkron arbetsflödesdesign",
      ],
    },
    challenges: {
      en: [
        "Aligning event contracts across teams working on different services",
        "Configuring Kafka/Aiven connectivity and certificates",
        "Keeping frontend state in sync with SSE events",
        "Handling status mapping from external services",
        "Avoiding duplicate processing and keeping consumers reliable",
      ],
      sv: [
        "Samordna eventkontrakt mellan team som jobbar på olika tjänster",
        "Konfigurera Kafka/Aiven-anslutning och certifikat",
        "Hålla frontend-state i synk med SSE-events",
        "Hantera statusmappning från externa tjänster",
        "Undvika dubbelbearbetning och hålla konsumenter robusta",
      ],
    },
    keyDecisions: {
      en: [
        "Use Kafka for asynchronous service communication instead of synchronous REST calls",
        "Use PostgreSQL + EF Core for persistent booking data",
        "Use SSE instead of a heavier real-time solution for one-way server-to-client updates",
        "Keep a dedicated frontend for making state changes visible",
        "Structure the project as a realistic learning case rather than a perfect production system",
      ],
      sv: [
        "Använda Kafka för asynkron tjänstkommunikation istället för synkrona REST-anrop",
        "Använda PostgreSQL + EF Core för persistent bokningsdata",
        "Använda SSE istället för en tyngre realtidslösning för enkelriktade server-till-klient-uppdateringar",
        "Ha en dedikerad frontend för att göra tillståndsförändringar synliga",
        "Strukturera projektet som ett realistiskt lärandecase snarare än ett perfekt produktionssystem",
      ],
    },
    results: {
      en: [
        "A working bookings microservice with CRUD-oriented booking flow",
        "Published and consumed Kafka events across service boundaries",
        "Real-time UI updates through Server-Sent Events",
        "Practical experience with async service communication",
        "Hands-on collaboration across service boundaries and shared message contracts",
      ],
      sv: [
        "En fungerande bokningsmikrotjänst med CRUD-orienterat bokningsflöde",
        "Publicerade och konsumerade Kafka-events över tjänstgränser",
        "Realtidsuppdateringar i UI genom Server-Sent Events",
        "Praktisk erfarenhet av asynkron tjänstkommunikation",
        "Praktiskt samarbete över tjänstgränser och delade meddelandekontrakt",
      ],
    },
    whatILearned: {
      en: "This project taught me how event-driven systems differ from request/response thinking. I learned why contracts between services matter, especially when multiple teams need to agree on event schemas without tight coupling. I also saw how real-time UI updates can be driven from backend events via SSE, and how distributed systems introduce state-consistency challenges that don't exist in a monolith.",
      sv: "Det här projektet lärde mig hur eventdrivna system skiljer sig från request/response-tänkande. Jag lärde mig varför kontrakt mellan tjänster spelar roll, särskilt när flera team behöver enas om event-scheman utan tight coupling. Jag fick också se hur realtidsuppdateringar i UI kan drivas från backend-events via SSE, och hur distribuerade system introducerar tillståndskonsistensutmaningar som inte finns i en monolit.",
    },
    nextSteps: {
      en: [
        "Strengthen idempotency and consumer reliability",
        "Add more observability around event handling",
        "Formalize contracts more clearly across services",
        "Improve local development setup for multi-service testing",
        "Extend automated tests around event flows and SSE behavior",
      ],
      sv: [
        "Stärka idempotens och konsumenttillförlitlighet",
        "Lägga till mer observability kring eventhantering",
        "Formalisera kontrakt tydligare mellan tjänster",
        "Förbättra lokal utvecklingsuppsättning för multi-service-testning",
        "Utöka automatiserade tester kring eventflöden och SSE-beteende",
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
      en: "A friend needed a clean, fast portfolio site to show videography and photography work to potential clients. It had to look good, load fast, and be easy to update later.",
      sv: "En vän behövde en snygg och snabb portfoliosajt för att visa upp videografi och fotografi för potentiella kunder. Den behövde se bra ut, ladda snabbt och vara enkel att uppdatera senare.",
    },
    goals: {
      en: [
        "Ship a working portfolio site in a short timeframe",
        "Achieve good Core Web Vitals (LCP, CLS, FID)",
        "Make images and media feel crisp and fast on all devices",
        "Keep the codebase maintainable for future updates",
      ],
      sv: [
        "Lansera en fungerande portfoliosajt inom kort tid",
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
    github: "https://github.com/MarcusGronna/e-shop",
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
    github: "https://github.com/MarcusGronna/task-manager",
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
    year: 2024,
    url: "https://remarkable-taffy-176adb.netlify.app/",
    github: "https://github.com/MarcusGronna/birgitta-klensmed",
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
      en: "Course assignment: build a site for a small craft business with strong SEO fundamentals. The business had no online presence, and the goal was to practice technical SEO and semantic HTML.",
      sv: "Kursuppgift: bygga en sajt åt ett litet hantverksföretag med starka SEO-grunder. Företaget hade ingen online-närvaro, och målet var att öva teknisk SEO och semantisk HTML.",
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
      en: "Fullstack training app with React 19 + TanStack Router on the front and ASP.NET Core / .NET 9 on the back. Clerk handles auth, every API endpoint is JWT-protected. The backend uses a four-layer architecture with full CRUD for training programs, workouts, and exercises.",
      sv: "Fullstack-träningsapp med React 19 + TanStack Router i fronten och ASP.NET Core / .NET 9 i backen. Clerk hanterar autentisering och varje API-endpoint skyddas med JWT. Backend använder en fyrlagerarkitektur med full CRUD för träningsprogram, pass och övningar.",
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
    year: 2026,
    url: "https://trainmatex.marcusgronna.com/",
    github: "https://github.com/MarcusGronna/TrainMateX-Vision",
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
      en: "I wanted to build something that demonstrated the full stack from auth to database, not a toy project but something structured the way a real feature would be. TrainMateX Vision covers the complete flow: user registers via Clerk, gets a JWT, and that token protects every backend endpoint. The domain is workout management (programs, sessions, exercises) because it's concrete enough to make the data model meaningful.",
      sv: "Jag ville bygga något som visade hela stacken från autentisering till databas, inte ett lekprojekt utan något strukturerat som en riktig feature. TrainMateX Vision täcker hela flödet: användaren registrerar sig via Clerk, får ett JWT, och det tokenet skyddar varje backend-endpoint. Domänen är träningshantering (program, pass, övningar) för att det är tillräckligt konkret för att göra datamodellen meningsfull.",
    },
    solution: {
      en: "The frontend was built with React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Router for type-safe routing, and TanStack React Query for server state management. Clerk handles authentication, issuing JWTs consumed by the backend. The backend is an ASP.NET Core Web API built with C# / .NET 9, EF Core, and SQL Server, organized into API, Application, Domain, and Infrastructure layers. All endpoints are JWT-protected with a CORS policy, and the API exposes training programs, workouts, workout exercises, an exercise catalog, and user profile management.",
      sv: "Frontend byggdes med React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Router för typsäker routing och TanStack React Query för server-state-hantering. Clerk hanterar autentisering och utfärdar JWTs som konsumeras av backend. Backend är ett ASP.NET Core Web API byggt med C# / .NET 9, EF Core och SQL Server, organiserat i lager: API, Application, Domain och Infrastructure. Alla endpoints är JWT-skyddade med en CORS-policy, och API:et exponerar träningsprogram, pass, övningar i pass, ett övningskatalog och användarprofilhantering.",
    },
    architectureFlow: {
      en: [
        "User navigates to the React frontend (Vite + TanStack Router)",
        "Clerk handles authentication — user logs in and receives a signed JWT",
        "TanStack React Query sends requests to the ASP.NET Core API with the JWT as a Bearer token",
        "ASP.NET Core middleware validates the JWT — unauthorized requests are rejected early",
        "The Application layer processes the request and calls Domain logic",
        "The Infrastructure layer (EF Core) reads or writes to SQL Server",
        "The API returns a JSON response — React Query caches the result and updates the UI",
      ],
      sv: [
        "Användaren navigerar till React-frontendet (Vite + TanStack Router)",
        "Clerk hanterar autentisering — användaren loggar in och tar emot ett signerat JWT",
        "TanStack React Query skickar förfrågningar till ASP.NET Core API:et med JWT som Bearer-token",
        "ASP.NET Core-middleware validerar JWT — otillåtna förfrågningar avvisas tidigt",
        "Application-lagret behandlar förfrågan och anropar Domain-logik",
        "Infrastructure-lagret (EF Core) läser eller skriver till SQL Server",
        "API:et returnerar ett JSON-svar — React Query cachar resultatet och uppdaterar UI",
      ],
    },
    whatILearned: {
      en: "Wiring Clerk JWT tokens into the ASP.NET Core middleware looked simple on paper but required careful configuration around CORS and token validation. The layered architecture paid off quickly: keeping Application and Domain free of infrastructure concerns made it easy to add features without touching existing logic. TanStack Router and React Query together give the frontend a level of structure that plain React with useEffect doesn't provide.",
      sv: "Att koppla Clerk JWT-tokens till ASP.NET Core-middleware såg enkelt ut på papper men krävde noggrann konfiguration kring CORS och tokenvalidering. Den lagerindelade arkitekturen lönade sig snabbt: att hålla Application och Domain fria från infrastruktur gjorde det enkelt att lägga till funktioner utan att röra befintlig logik. TanStack Router och React Query tillsammans ger frontend en struktur som plain React med useEffect inte ger.",
    },
    goals: {
      en: [
        "Build a fullstack app that demonstrates layered backend architecture in practice",
        "Integrate Clerk authentication with a JWT-protected ASP.NET Core API",
        "Implement CRUD flows for training programs, workouts, and exercises",
        "Use TanStack Router and React Query for a modern, type-safe frontend",
        "Deploy with GitHub Actions for automated CI/CD",
      ],
      sv: [
        "Bygga en fullstack-app som visar lagerindelad backend-arkitektur i praktiken",
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
        "Clerk for authentication – well-established auth provider with straightforward JWT integration",
        "TanStack Router for type-safe, file-based routing in React",
        "Layered backend architecture (API / Application / Domain / Infrastructure) for maintainability",
        "EF Core + SQL Server for familiar, well-supported .NET persistence",
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
        "Working integration across all layers: React frontend, Clerk JWT, ASP.NET Core API, SQL Server",
        "Clean layered backend architecture that's easy to extend",
        "Practical experience with TanStack Router and TanStack React Query in a real project",
      ],
      sv: [
        "En komplett fullstack-app med Clerk-auth, skyddade API-endpoints och full CRUD för träningspass och program",
        "Fungerande integration över alla lager: React-frontend, Clerk JWT, ASP.NET Core API, SQL Server",
        "Ren lagerindelad backend-arkitektur som är enkel att bygga vidare på",
        "Praktisk erfarenhet av TanStack Router och TanStack React Query i ett riktigt projekt",
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
      en: "Backend project showing an event-driven pipeline: a Minimal API publishes messages to AWS SQS, a .NET Worker Service consumes them with long polling and idempotent processing, and failures route to a DLQ. Infrastructure is provisioned in C# via Pulumi.",
      sv: "Backend-projekt som visar en eventdriven pipeline: ett Minimal API publicerar meddelanden till AWS SQS, en .NET Worker Service konsumerar dem med long polling och idempotent bearbetning, och misslyckanden routas till en DLQ. Infrastrukturen provisioneras i C# via Pulumi.",
    },
    image: "/SqsPipeline1.png",
    images: [
      "/SqsPipeline1.png",
      "/SqsPipeline2.png",
    ],
    tech: [
      "C#", ".NET", "AWS SQS", "Pulumi", "Minimal API", "Worker Service", "SQLite",
    ],
    year: 2026,
    github: "https://github.com/MarcusGronna/SqsPipeline",
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
      en: "Message queues, retries, and idempotent consumers are patterns I kept seeing in backend discussions but hadn't built from scratch. sqs-mini is my working implementation of the full flow: a Minimal API publishes to SQS, a Worker Service picks it up, processes it once (SQLite tracks seen message IDs), and anything that fails enough times goes to the DLQ. Pulumi provisions the AWS setup in C#, the same language as the rest of the project.",
      sv: "Meddelandeköer, retries och idempotenta konsumenter är mönster jag stötte på gång på gång i backend-diskussioner men aldrig byggt själv. sqs-mini är min fungerande implementation av hela flödet: ett Minimal API publicerar till SQS, en Worker Service hämtar det, bearbetar det en gång (SQLite håller koll på sedda meddelande-ID:n), och allt som misslyckas tillräckligt många gånger hamnar i DLQ. Pulumi provisionerar AWS-uppsättningen i C#, samma språk som resten av projektet.",
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
        "A working event-driven pipeline: API publishes to SQS, Worker consumes, DLQ catches failures",
        "Infrastructure fully reproducible with a single Pulumi command",
        "Practical understanding of distributed systems patterns: idempotency, retries, DLQ, at-least-once delivery",
      ],
      sv: [
        "En fungerande eventdriven pipeline: API publicerar till SQS, Worker konsumerar, DLQ fångar fel",
        "Infrastruktur fullt reproducerbar med ett enda Pulumi-kommando",
        "Praktisk förståelse för distribuerade systemmönster: idempotens, retries, DLQ, at-least-once delivery",
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
      en: "A desktop tool built with C# and WinForms for sending HTTP requests and viewing JSON responses. Built as a learning project to explore desktop development and understand how API testing tools work under the hood.",
      sv: "Ett desktop-verktyg byggt med C# och WinForms för att skicka HTTP-anrop och visa JSON-svar. Byggt som ett lärandeprojekt för att utforska desktoputveckling och förstå hur API-testverktyg fungerar under huven.",
    },
    image: "/PostmanClone1.png",
    images: [
      "/PostmanClone1.png",
      "/PostmanClone2.png",
      "/PostmanClone3.png",
    ],
    tech: ["C#", ".NET 10", "WinForms", "HttpClient"],
    year: 2026,
    github: "https://github.com/MarcusGronna/postman-clone-app",
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
      en: "As a web-focused developer, I wanted to try WinForms desktop development and understand how HTTP clients work at a lower level. Building a simplified Postman-style tool was a practical way to do both: build a desktop UI and understand the mechanics behind API testing tools. This project was inspired by a tutorial and built as a learning exercise.",
      sv: "Som webbutvecklare ville jag testa WinForms desktoputveckling och förstå hur HTTP-klienter fungerar på en lägre nivå. Att bygga ett förenklat Postman-liknande verktyg var ett praktiskt sätt att göra båda sakerna: bygga ett desktop-UI och förstå mekaniken bakom API-testverktyg. Projektet inspirerades av en tutorial och byggdes som en lärandeövning.",
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

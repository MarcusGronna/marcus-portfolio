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
    url: "https://birgitta-klensmed.com/",
  },
];

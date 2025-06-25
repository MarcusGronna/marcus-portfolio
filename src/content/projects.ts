// src/content/projects.ts
// --------------------------------------------------
// Portfolio-projekt med publika länkar (lägg riktiga skärmdumpar i /public)

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  year: number;
  url: string;
}

export const projects: Project[] = [
  {
    slug: "e-shop-react",
    title: "E-Shop",
    summary:
      "En demo-e-handel byggd i React (Vite + Tailwind) och publicerad på Netlify som skoluppgift på Företags­universitetets YH-program.",
    image: "/E-Shop.png",
    tech: ["React", "Vite", "Tailwind", "Netlify"],
    year: 2025,
    url: "https://marcus-e-shop.netlify.app/",
  },
  {
    slug: "task-manager-angular",
    title: "Task Manager",
    summary:
      "Uppgifts­hanterare i Angular som lagrar data i LocalStorage; framtagen som inlämnings­projekt på Företags­universitetet och hostad på Netlify.",
    image: "/TaskManager.png",
    tech: ["Angular", "TypeScript", "LocalStorage", "Netlify"],
    year: 2025,
    url: "https://marcus-task-manager.netlify.app",
  },
  {
    slug: "birgitta-klensmed",
    title: "Klensmeden Birgitta – SEO-optimerad webbplats",
    summary:
      "Statisk marknads­sida byggd inom kurs på Högskolan Väst med särskilt fokus på teknisk och on-page SEO-optimering.",
    image: "/Klensmeden Birgitta.png",
    tech: ["HTML", "CSS", "SEO-best-practices"],
    year: 2025,
    url: "https://birgitta-klensmed.com/",
  },
  {
    slug: "livia-portfolio",
    title: "Livia Portfolio",
    summary:
      "Personlig portfolio­sajt åt en vän (videograf / fotograf) byggd i Next.js, stylad med Tailwind och distribuerad via Vercel.",
    image: "/livia-portfolio.png",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    year: 2025,
    url: "https://livia-portfolio-three.vercel.app/",
  },
];

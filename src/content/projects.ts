// Mockad data för portfolio-projekt. Använd hittepåprojekt och riktiga bildsökvägar enligt public-mappen.

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  year: number;
}

export const projects: Project[] = [
  {
    slug: "e-shop-react",
    title: "E-Shop",
    summary:
      "En liten demo-e-handel byggd i React och publicerad på Netlify som skoluppgift på Företags­universitetets YH-program.",
    image: "/E-Shop.png", // matchar filnamnet i public
    tech: ["React", "Vite", "Tailwind", "Netlify"],
    year: 2025,
  },
  {
    slug: "task-manager-angular",
    title: "Task Manager",
    summary:
      "Uppgifts­hanterare i Angular som sparar allt i LocalStorage; gjord som inlämning på Företags­universitetet.",
    image: "/TaskManager.png", // matchar filnamnet i public
    tech: ["Angular", "TypeScript", "LocalStorage", "Netlify"],
    year: 2025,
  },
  {
    slug: "birgitta-klensmed",
    title: "Klensmeden Birgitta – SEO-optimerad webbplats",
    summary:
      "Statisk marknads­sida för en fiktiv smed, framtagen i kurs på Högskolan Väst med extra fokus på sök­motor­optimering.",
    image: "/Klensmeden Birgitta.png", // matchar filnamnet i public
    tech: ["HTML", "CSS", "SEO-best-practices"],
    year: 2025,
  },
  {
    slug: "livia-portfolio",
    title: "Livia Portfolio",
    summary:
      "Personlig portfolio­sajt åt en vän – videograf & fotograf – byggd i Next.js och hostad på Vercel.",
    image: "/livia-portfolio.png", // matchar filnamnet i public
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    year: 2025,
  },
];

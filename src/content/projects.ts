// Exportera array<Project>. Interface Project { slug:string; title:string; summary:string; image:string; tech:string[]; year:number; } // Fyll med 3–4 ex-projekt.

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
    slug: "portfolio",
    title: "Min Portfolio",
    summary: "Personlig portföljsajt byggd med Next.js, Tailwind och Framer Motion.",
    image: "/portfolio.jpg",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    year: 2025,
  },
  {
    slug: "bloggplattform",
    title: "Bloggplattform",
    summary: "En enkel och snabb bloggplattform för utvecklare.",
    image: "/blog.jpg",
    tech: ["Next.js", "Node.js", "MongoDB"],
    year: 2024,
  },
  {
    slug: "designsystem",
    title: "Designsystem",
    summary: "Komponentbaserat designsystem för interna projekt.",
    image: "/designsystem.jpg",
    tech: ["React", "Figma", "Storybook"],
    year: 2023,
  },
  {
    slug: "todo-app",
    title: "Todo-app",
    summary: "En todo-app med realtidsuppdatering och snygg UI.",
    image: "/todo.jpg",
    tech: ["React", "Firebase", "Tailwind"],
    year: 2023,
  },
];

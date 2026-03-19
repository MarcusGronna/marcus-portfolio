// src/content/skills.ts
// --------------------------------------------------
// Categorised skills matching the CV

export interface SkillCategory {
  category: { en: string; sv: string };
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: { en: "Backend", sv: "Backend" },
    items: ["C# .NET", "ASP.NET Core", "REST API", "Minimal API", "AI Integration", "Azure OpenAI", "EF Core", "PostgreSQL", "JWT Authentication", "ASP.NET Identity", "Roslyn", "Node.js", "Express", "Python"],
  },
  {
    category: { en: "Frontend", sv: "Frontend" },
    items: ["JavaScript", "TypeScript", "React.js", "React Native", "Angular", "Vite", "Tailwind CSS", "Framer Motion", "Monaco Editor", "React Query", "HTML5", "CSS3"],
  },
  {
    category: { en: "Cloud / Infrastructure", sv: "Moln / Infrastruktur" },
    items: ["Azure", "GitHub Actions", "Docker Compose", "AWS", "IaC / Pulumi"],
  },
  {
    category: { en: "Tools & Practices", sv: "Verktyg & Metodik" },
    items: ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "xUnit", "TDD", "Figma", "Krita", "Unity"],
  },
  {
    category: { en: "Languages", sv: "Språk" },
    items: ["Swedish (native)", "English (C2 / fluent)"],
  },
];

// Flat list kept for backward compatibility (used by ProjectFrame via SkillBadge)
export const skills = ["React", "Next.js", "Tailwind", "Framer Motion", "Figma", "Node.js"];

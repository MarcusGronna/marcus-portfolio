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
    items: [
      "C# .NET", "ASP.NET Core", "REST API", "Minimal API", "Worker Service",
      "AI Integration", "Azure OpenAI", "EF Core", "PostgreSQL", "SQL Server",
      "JWT Authentication", "ASP.NET Identity", "Roslyn", "HttpClient",
      "Node.js", "Express", "Python",
    ],
  },
  {
    category: { en: "Frontend", sv: "Frontend" },
    items: [
      "JavaScript", "TypeScript", "React.js", "React Native", "Angular", "Vite",
      "Tailwind CSS", "Framer Motion", "Monaco Editor", "TanStack React Query",
      "TanStack Router", "Clerk", "HTML5", "CSS3",
    ],
  },
  {
    category: { en: "Cloud / Infrastructure", sv: "Moln / Infrastruktur" },
    items: [
      "Azure", "Azure Static Web Apps", "Azure Web App", "GitHub Actions",
      "Docker Compose", "AWS", "AWS SQS", "IaC / Pulumi",
    ],
  },
  {
    category: { en: "Tools & Practices", sv: "Verktyg & Metodik" },
    items: [
      "Git", "GitHub", "Visual Studio Code", "Visual Studio", "WinForms",
      "xUnit", "TDD", "Figma", "Krita", "Unity",
    ],
  },
  {
    category: { en: "Languages", sv: "Språk" },
    items: ["Swedish (native)", "English (C2 / fluent)"],
  },
];

// Flat list kept for backward compatibility (used by ProjectFrame via SkillBadge)
export const skills = ["React", "Next.js", "Tailwind", "Framer Motion", "Figma", "Node.js"];

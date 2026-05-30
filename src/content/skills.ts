// src/content/skills.ts
// --------------------------------------------------
// Curated skills organised into meaningful buckets

export interface SkillCategory {
  category: { en: string; sv: string };
  /** bucket key used for styling, maps to skillsCoreStack / skillsAlsoWorked / skillsCurrentFocus / skillsLanguages */
  bucket: "core" | "also" | "focus" | "languages";
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: { en: "Core Stack", sv: "Kärnstack" },
    bucket: "core",
    items: [
      "C# / .NET",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "EF Core",
      "PostgreSQL / SQL Server / SQLite",
      "REST API",
      "Git / GitHub / GitHub Actions",
    ],
  },
  {
    category: { en: "Also Worked With", sv: "Har också arbetat med" },
    bucket: "also",
    items: [
      "Angular",
      "React Native",
      "Azure OpenAI",
      "Monaco Editor",
      "Clerk",
      "Pulumi / IaC",
      "AWS SQS",
      "Apache Kafka",
      "Docker / Docker Compose",
      "Kubernetes",
      "Linux / WSL",
      "Prometheus / Grafana",
      "Self-hosted runners",
      "Node.js / Express",
      "WinForms",
    ],
  },
  {
    category: { en: "Current Focus", sv: "Nuvarande fokus" },
    bucket: "focus",
    items: [
      "AI integration",
      "Fullstack product development",
      "System design and architecture",
      "Cloud / deployment workflows",
      "Modern API design",
    ],
  },
  {
    category: { en: "Languages", sv: "Språk" },
    bucket: "languages",
    items: ["Swedish (native)", "English (C2 / fluent)"],
  },
];

// Flat list kept for backward compatibility (used by ProjectFrame via SkillBadge)
export const skills = ["React", "Next.js", "Tailwind", "Framer Motion", "Figma", "Node.js"];

import { projects } from "@/content/projects";
import ProjectShelf from "@/components/ProjectShelf";

export default function PortfolioPage() {
  // Gruppera projekt per år
  const projectsByYear = projects.reduce<Record<string, typeof projects>>((acc, project) => {
    const year = project.year || "Okänt år";
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8">Projekt</h2>
      {Object.entries(projectsByYear)
        .sort(([a], [b]) => Number(b) - Number(a)) // Senaste år först
        .map(([year, yearProjects]) => (
          <div key={year} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{year}</h3>
            <ProjectShelf projects={yearProjects} />
          </div>
        ))}
    </section>
  );
}

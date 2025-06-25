import { education } from "@/content/education";
import TimelineItem from "@/components/TimelineItem";
import type { EducationItem } from "@/content/education";

export default function EducationPage() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <ul className="space-y-6">
        {education.map((item: EducationItem) => (
          <li key={item.id || `${item.year}-${item.school}`}>
            <TimelineItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

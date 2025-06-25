import type { EducationItem } from "@/content/education";

export default function TimelineItem({ year, school, program, description }: EducationItem) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 w-3 h-3 bg-brand-600 rounded-full"></div>
      <div>
        <div className="text-sm text-brand-700 font-semibold">{year}</div>
        <div className="text-lg font-bold">{school}</div>
        <div className="text-base text-brand-800">{program}</div>
        {description && <div className="text-sm text-brand-700 mt-1">{description}</div>}
      </div>
    </div>
  );
}

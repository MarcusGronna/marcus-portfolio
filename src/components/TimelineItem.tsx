import type { EducationItem } from "@/content/education";

type TimelineItemProps = EducationItem & { lang: "en" | "sv" };

export default function TimelineItem({
  school,
  program,
  description,
  year,
  lang,
}: TimelineItemProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 w-3 h-3 bg-brand-600 rounded-full"></div>
      <div>
        <div className="text-lg font-bold">{school[lang]}</div>
        <div className="text-base text-brand-800">{program[lang]}</div>
        {description && <div className="text-sm text-brand-700 mt-1">{description[lang]}</div>}
        <div className="text-sm text-brand-700 font-semibold mt-1">{year}</div>
      </div>
    </div>
  );
}

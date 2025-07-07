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
    <div className="relative pl-6 mb-8">
      <div className="absolute left-0 top-2 w-3 h-3 bg-brand-600 rounded-full"></div>
      <div className="space-y-1">
        <div className="text-lg font-heading text-ink-900">{school[lang]}</div>
        <div className="text-base text-brand-700">{program[lang]}</div>
        {description && <div className="text-sm text-ink-900">{description[lang]}</div>}
        <div className="text-sm text-ink-900 font-semibold">{year}</div>
      </div>
    </div>
  );
}

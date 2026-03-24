"use client";
import Link from "next/link";
import type { Locale } from "@/middleware";
import { timelineEntries, type TimelineEntry } from "@/content/timeline";

/** Short month abbreviation */
const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function periodLabel(entry: TimelineEntry): string {
  const sm = entry.startMonth;
  const em = entry.endMonth;
  const ey = entry.endYear;
  if (sm && em && ey) {
    return `${MONTH_SHORT[sm - 1]} ${entry.startYear} – ${MONTH_SHORT[em - 1]} ${ey}`;
  }
  if (sm && !ey) {
    return `${MONTH_SHORT[sm - 1]} ${entry.startYear} –`;
  }
  return entry.period;
}

const ongoingLabel = { en: "present", sv: "nu" };
const viewFullLabel = { en: "Full background →", sv: "Hela bakgrunden →" };

// Show the 4 most relevant milestones (most recent first)
function getHighlights(): TimelineEntry[] {
  return [...timelineEntries]
    .sort((a, b) => {
      const aEnd = a.endYear ?? 9999;
      const bEnd = b.endYear ?? 9999;
      return bEnd !== aEnd ? bEnd - aEnd : b.startYear - a.startYear;
    })
    .slice(0, 4);
}

export default function JourneyHighlights({ lang }: { lang: Locale }) {
  const highlights = getHighlights();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ul className="space-y-5">
        {highlights.map((entry) => {
          const isEdu = entry.type === "education";
          const period = periodLabel(entry);
          const isOngoing = entry.endYear === null;

          return (
            <li
              key={entry.id}
              className="flex gap-4 items-start"
            >
              {/* Type indicator */}
              <div
                className={[
                  "mt-1 w-2.5 h-2.5 rounded-full shrink-0 ring-2",
                  isEdu
                    ? "bg-accent-400 ring-accent-400/30"
                    : "bg-brand-700 ring-brand-700/20",
                ].join(" ")}
                aria-hidden="true"
              />

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-ink-900 leading-snug text-sm mb-0.5">
                  {entry.title[lang]}
                </p>
                <p className="text-xs text-brand-700 mb-0.5">
                  {entry.organization[lang]}
                </p>
                <p className="text-xs text-brand-600">
                  {period}
                  {isOngoing && <span className="ml-1 text-accent-700 font-medium">{ongoingLabel[lang]}</span>}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6">
        <Link
          href={`/${lang}/about`}
          className="text-sm text-brand-700 hover:text-accent-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
        >
          {viewFullLabel[lang]}
        </Link>
      </div>
    </div>
  );
}

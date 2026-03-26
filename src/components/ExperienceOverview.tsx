"use client";
import { useLang } from "@/components/LangProvider";
import { timelineEntries, type TimelineEntry } from "@/content/timeline";
import { dict } from "@/content/i18n";

/**
 * ExperienceOverview – Gantt-chart style diagram
 *
 * Shows education and experience as horizontal bars across a shared time axis,
 * making it easy to see which activities ran in parallel.
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Fractional year from entry start (e.g. Aug 2023 → 2023.583) */
function toFractionalStart(e: TimelineEntry): number {
  return e.startYear + ((e.startMonth ?? 1) - 1) / 12;
}

/** Fractional year from entry end (e.g. Jun 2025 → 2025.5, null → now) */
function toFractionalEnd(e: TimelineEntry): number {
  if (e.endYear == null) {
    const now = new Date();
    return now.getFullYear() + now.getMonth() / 12;
  }
  return e.endYear + ((e.endMonth ?? 12) - 1) / 12;
}

/** Short month label */
const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function periodLabel(e: TimelineEntry, lang: "en" | "sv"): string {
  const sm = e.startMonth;
  const em = e.endMonth;
  const ey = e.endYear;
  if (sm && em && ey) {
    return `${MONTH_SHORT[sm - 1]} ${e.startYear} – ${MONTH_SHORT[em - 1]} ${ey}`;
  }
  if (sm && !ey) {
    return `${MONTH_SHORT[sm - 1]} ${e.startYear} – ${lang === "sv" ? "pågående" : "present"}`;
  }
  return e.period;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ExperienceOverview() {
  const { lang } = useLang();

  const eduEntries = timelineEntries.filter((e) => e.type === "education");
  const expEntries = timelineEntries.filter((e) => e.type === "experience");

  // Compute global time bounds (whole years)
  const allStarts = timelineEntries.map(toFractionalStart);
  const allEnds = timelineEntries.map(toFractionalEnd);
  const minYear = Math.floor(Math.min(...allStarts));
  const maxYear = Math.ceil(Math.max(...allEnds));
  const span = maxYear - minYear;

  // Year markers for the axis
  const years: number[] = [];
  for (let y = minYear; y <= maxYear; y++) years.push(y);

  // Sort entries: longest / earliest-start first for visual clarity
  const sortByStart = (a: TimelineEntry, b: TimelineEntry) =>
    toFractionalStart(a) - toFractionalStart(b);
  const sortedEdu = [...eduEntries].sort(sortByStart);
  const sortedExp = [...expEntries].sort(sortByStart);

  /** Compute left % and width % for a bar */
  function barStyle(entry: TimelineEntry) {
    const start = toFractionalStart(entry);
    const end = toFractionalEnd(entry);
    const left = ((start - minYear) / span) * 100;
    const width = ((end - start) / span) * 100;
    return { left: `${left}%`, width: `${Math.max(width, 0.8)}%` };
  }

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* ── Desktop / Tablet ─────────────────────────────────────────── */}
      <div className="hidden sm:block overflow-x-auto">
        <div className="min-w-[640px] px-5">

          {/* Year axis (top) */}
          <div className="relative h-6 mb-1 border-b border-brand-600/20">
            {years.map((y, i) => {
              const left = ((y - minYear) / span) * 100;
              // Prevent first/last labels from being clipped
              const isFirst = i === 0;
              const isLast = i === years.length - 1;
              const transform = isFirst
                ? "translateX(0)"
                : isLast
                  ? "translateX(-100%)"
                  : "translateX(-50%)";
              return (
                <span
                  key={y}
                  className="absolute text-[10px] font-bold text-brand-700 top-0"
                  style={{ left: `${left}%`, transform }}
                >
                  {y}
                </span>
              );
            })}
          </div>

          {/* Grid lines */}
          <div className="relative">
            {/* Vertical grid lines behind the bars */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {years.map((y) => {
                const left = ((y - minYear) / span) * 100;
                return (
                  <div
                    key={y}
                    className="absolute top-0 bottom-0 w-px bg-brand-600/10"
                    style={{ left: `${left}%` }}
                  />
                );
              })}
            </div>

            {/* Education section */}
            <div className="mb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent-700 mb-1 pl-0.5">
                {dict[lang].education}
              </p>
              <div className="space-y-1.5">
                {sortedEdu.map((entry) => (
                  <GanttBar key={entry.id} entry={entry} barStyle={barStyle(entry)} lang={lang} type="education" />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-brand-600/15 my-2" />

            {/* Experience section */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-700 mb-1 pl-0.5">
                {dict[lang].experience}
              </p>
              <div className="space-y-1.5">
                {sortedExp.map((entry) => (
                  <GanttBar key={entry.id} entry={entry} barStyle={barStyle(entry)} lang={lang} type="experience" />
                ))}
              </div>
            </div>
          </div>

          {/* Year axis (bottom) */}
          <div className="relative h-6 mt-1 border-t border-brand-600/20">
            {years.map((y, i) => {
              const left = ((y - minYear) / span) * 100;
              const isFirst = i === 0;
              const isLast = i === years.length - 1;
              const transform = isFirst
                ? "translateX(0)"
                : isLast
                  ? "translateX(-100%)"
                  : "translateX(-50%)";
              return (
                <span
                  key={y}
                  className="absolute text-[10px] font-bold text-brand-700 bottom-0"
                  style={{ left: `${left}%`, transform }}
                >
                  {y}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile: stacked list ─────────────────────────────────────── */}
      <div className="sm:hidden space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">
            {dict[lang].education}
          </p>
          {sortedEdu.map((entry) => (
            <MobileEntry key={entry.id} entry={entry} lang={lang} type="education" />
          ))}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-2">
            {dict[lang].experience}
          </p>
          {sortedExp.map((entry) => (
            <MobileEntry key={entry.id} entry={entry} lang={lang} type="experience" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function GanttBar({
  entry,
  barStyle,
  lang,
  type,
}: {
  entry: TimelineEntry;
  barStyle: { left: string; width: string };
  lang: "en" | "sv";
  type: "education" | "experience";
}) {
  const isEdu = type === "education";
  return (
    <div className="relative h-7 group">
      <div
        className={[
          "absolute top-0 h-full rounded-md flex items-center px-2 overflow-hidden cursor-default transition-shadow",
          isEdu
            ? "bg-accent-400/40 border border-accent-400/70 hover:shadow-md"
            : "bg-brand-600/20 border border-brand-600/30 hover:shadow-md",
        ].join(" ")}
        style={barStyle}
        title={`${entry.title[lang]} — ${entry.organization[lang]}\n${periodLabel(entry, lang)}`}
      >
        <span className="text-[10px] sm:text-[11px] font-semibold text-ink-900 truncate leading-none">
          {entry.title[lang]}
        </span>
      </div>
    </div>
  );
}

function MobileEntry({
  entry,
  lang,
  type,
}: {
  entry: TimelineEntry;
  lang: "en" | "sv";
  type: "education" | "experience";
}) {
  const isEdu = type === "education";
  return (
    <div
      className={[
        "rounded-lg border p-3 mb-2",
        isEdu
          ? "border-accent-400/50 border-l-[3px] border-l-accent-400 bg-accent-400/10"
          : "border-brand-600/30 border-l-[3px] border-l-brand-700 bg-brand-600/5",
      ].join(" ")}
    >
      <p className="text-[10px] font-semibold text-brand-700">{periodLabel(entry, lang)}</p>
      <p className="text-sm font-bold text-ink-900 leading-snug">{entry.title[lang]}</p>
      <p className="text-xs text-brand-700">{entry.organization[lang]}</p>
    </div>
  );
}

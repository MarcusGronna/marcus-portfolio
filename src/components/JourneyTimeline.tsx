"use client";
import { timelineEntries, type TimelineEntry } from "@/content/timeline";
import { dict } from "@/content/i18n";

// ── Gantt constants ──────────────────────────────────────────────────────────

const GANTT_MIN = 2009;
const GANTT_END = 2027; // exclusive – bars can stretch to 100 %
const GANTT_SPAN = GANTT_END - GANTT_MIN; // 18
const GANTT_MIN_BAR_PCT = 1.5; // minimum bar width (%) so single-year entries stay visible

// Year ticks – denser for recent years to show 2024-2025 overlap clearly
const TICK_YEARS = [2009, 2012, 2015, 2018, 2020, 2022, 2024, 2025, 2026];

/**
 * Convert a calendar year+fraction to a percentage position (0–100) along the Gantt axis.
 */
function toPct(year: number) {
    return ((year - GANTT_MIN) / GANTT_SPAN) * 100;
}

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
        return `${MONTH_SHORT[sm - 1]} ${entry.startYear} – present`;
    }
    return entry.period;
}

// ── Entry card ──────────────────────────────────────────────────────────────

function EntryCard({ entry, lang }: { entry: TimelineEntry; lang: "en" | "sv" }) {
    const isEdu = entry.type === "education";
    const period = periodLabel(entry);
    return (
        <div
            className={[
                "rounded-xl border bg-surface-50 shadow-sm p-4 sm:p-5",
                isEdu
                    ? "border-accent-400/50 border-l-[3px] border-l-accent-400"
                    : "border-brand-600/30 border-l-[3px] border-l-brand-700",
            ].join(" ")}>
            {/* Period */}
            <p className="text-xs font-semibold text-brand-700 mb-1.5">{period}</p>

            {/* Title */}
            <p className="font-bold text-base leading-snug text-ink-900 mb-0.5">{entry.title[lang]}</p>

            {/* Organization */}
            <p className="text-sm font-semibold text-brand-700 mb-2">{entry.organization[lang]}</p>

            {/* Summary */}
            <p className="text-sm leading-relaxed text-brand-700">{entry.summary[lang]}</p>
        </div>
    );
}

// ── Gantt overview chart (desktop only) ─────────────────────────────────────

function GanttChart({ lang }: { lang: "en" | "sv" }) {
    // Sort chronologically (oldest first)
    const sorted = [...timelineEntries].sort((a, b) => {
        if (a.startYear !== b.startYear) return a.startYear - b.startYear;
        const aStart = ((a.startMonth ?? 1) - 1) / 12;
        const bStart = ((b.startMonth ?? 1) - 1) / 12;
        return aStart - bStart;
    });

    return (
        <div className="mb-8 overflow-x-auto rounded-xl border border-brand-600/20 bg-brand-600/5 p-4">
            <div className="min-w-[540px]">
                {/* Year tick labels */}
                <div className="relative h-5 ml-[200px] mb-1">
                    {TICK_YEARS.map((year) => (
                        <span
                            key={year}
                            className="absolute text-xs text-brand-700 font-semibold -translate-x-1/2 select-none"
                            style={{ left: `${toPct(year)}%` }}>
                            {year}
                        </span>
                    ))}
                </div>

                {/* Entry rows */}
                <div className="space-y-1.5">
                    {sorted.map((entry) => {
                        const isEdu = entry.type === "education";
                        const startFraction = ((entry.startMonth ?? 1) - 1) / 12;
                        const startPct = toPct(entry.startYear + startFraction);
                        const endYear = entry.endYear ?? GANTT_END - 1;
                        const endFraction = (entry.endMonth ?? 12) / 12;
                        const endPct = toPct(endYear + endFraction);
                        const widthPct = Math.max(endPct - startPct, GANTT_MIN_BAR_PCT);

                        return (
                            <div key={entry.id} className="flex items-center gap-2">
                                {/* Short label */}
                                <div className="w-[200px] shrink-0 text-right pr-2">
                                    <span className="text-xs text-brand-700 whitespace-normal break-words leading-[1.15]">
                                        {entry.title[lang]}
                                    </span>
                                </div>

                                {/* Bar track */}
                                <div className="relative flex-1 h-6 rounded-sm">
                                    {/* Tick grid lines */}
                                    {TICK_YEARS.map((year) => (
                                        <div
                                            key={year}
                                            className={[
                                                "absolute top-0 bottom-0 w-px",
                                                year >= 2024 ? "bg-brand-600/20" : "bg-brand-600/10",
                                            ].join(" ")}
                                            style={{ left: `${toPct(year)}%` }}
                                        />
                                    ))}
                                    {/* Bar */}
                                    <div
                                        className={[
                                            "absolute top-1 bottom-1 rounded flex items-center",
                                            isEdu ? "bg-accent-400/80" : "bg-brand-700/60",
                                        ].join(" ")}
                                        style={{
                                            left: `${startPct}%`,
                                            width: `${widthPct}%`,
                                        }}
                                        title={`${entry.title[lang]} (${periodLabel(entry)})`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6 mt-4 ml-[200px] text-xs text-brand-700">
                    <div className="flex items-center gap-1.5">
                        <div className="w-4 h-3 rounded bg-accent-400/80" />
                        <span>{dict[lang].education}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-4 h-3 rounded bg-brand-700/60" />
                        <span>{dict[lang].experience}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function JourneyTimeline({ lang }: { lang: "en" | "sv" }) {

    // ── Group entries by startYear ──────────────────────────────────────────
    const yearGroupMap = new Map<number, { edu: TimelineEntry[]; exp: TimelineEntry[] }>();
    for (const entry of timelineEntries) {
        const yr = entry.startYear;
        if (!yearGroupMap.has(yr)) yearGroupMap.set(yr, { edu: [], exp: [] });
        yearGroupMap.get(yr)![entry.type === "education" ? "edu" : "exp"].push(entry);
    }

    // Sort each group by endYear descending
    for (const group of yearGroupMap.values()) {
        const byEnd = (a: TimelineEntry, b: TimelineEntry) =>
            (b.endYear ?? 9999) - (a.endYear ?? 9999);
        group.edu.sort(byEnd);
        group.exp.sort(byEnd);
    }

    const sortedYears = [...yearGroupMap.keys()].sort((a, b) => b - a); // newest first

    // Mobile: all sorted by recency
    const allSorted = [...timelineEntries].sort((a, b) => {
        const aEnd = a.endYear ?? 9999;
        const bEnd = b.endYear ?? 9999;
        return bEnd !== aEnd ? bEnd - aEnd : b.startYear - a.startYear;
    });

    return (
        <div className="w-full max-w-4xl mx-auto">

            {/* ── Gantt overview (desktop only) ──────────────────────────────── */}
            <div className="hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
                    {lang === "en" ? "Timeline Overview" : "Tidslinje – Översikt"}
                </p>
                <GanttChart lang={lang} />
            </div>

            {/* ── Desktop: year-grouped two-column layout ──────────────────────── */}
            <div className="hidden md:block">
                {/* Column headers */}
                <div className="grid grid-cols-[1fr_72px_1fr] gap-x-6 mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-700 text-right m-0">
                        {dict[lang].education}
                    </h3>
                    <div />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-700 m-0">
                        {dict[lang].experience}
                    </h3>
                </div>

                {/* Year-grouped rows */}
                <div className="relative">
                    {/* Continuous spine line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-600/20 -translate-x-1/2 pointer-events-none" />

                    {sortedYears.map((year) => {
                        const group = yearGroupMap.get(year)!;
                        return (
                            <div
                                key={year}
                                className="grid grid-cols-[1fr_72px_1fr] gap-x-6 mb-8">
                                {/* Education column */}
                                <div className="space-y-4 relative">
                                    {group.edu.map((entry) => (
                                        <EntryCard key={entry.id} entry={entry} lang={lang} />
                                    ))}
                                </div>

                                {/* Spine – year badge */}
                                <div className="flex flex-col items-center pt-2 relative">
                                    <div className="relative z-10 bg-surface-50 border border-brand-600/40 rounded-full px-2 py-1 text-xs font-bold text-brand-700 whitespace-nowrap shadow-sm">
                                        {year}
                                    </div>

                                </div>

                                {/* Experience column */}
                                <div className="space-y-4 relative">
                                    {group.exp.map((entry) => (
                                        <EntryCard key={entry.id} entry={entry} lang={lang} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Mobile: single column ──────────────────────────────────────── */}
            <div className="md:hidden space-y-5">
                {allSorted.map((entry) => (
                    <EntryCard key={entry.id} entry={entry} lang={lang} />
                ))}
            </div>
        </div>
    );
}

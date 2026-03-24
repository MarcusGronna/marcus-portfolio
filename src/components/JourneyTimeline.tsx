"use client";
import { useLang } from "@/components/LangProvider";
import { timelineEntries, type TimelineEntry } from "@/content/timeline";
import { dict } from "@/content/i18n";

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

// ── Main component ───────────────────────────────────────────────────────────

export default function JourneyTimeline() {
    const { lang } = useLang();

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

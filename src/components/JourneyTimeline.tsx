"use client";
import { useLang } from "@/components/LangProvider";
import { timelineEntries, type TimelineEntry } from "@/content/timeline";
import { dict } from "@/content/i18n";

// ── Entry card ──────────────────────────────────────────────────────────────

function EntryCard({ entry, lang }: { entry: TimelineEntry; lang: "en" | "sv" }) {
    const isEdu = entry.type === "education";
    return (
        <div
            className={[
                "rounded-xl border bg-surface-50 shadow-sm p-5",
                isEdu
                    ? "border-accent-400/60 border-l-[3px] border-l-accent-400"
                    : "border-brand-600/40 border-l-[3px] border-l-brand-700",
            ].join(" ")}>
            {/* Type badge + period */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                    className={[
                        "text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                        isEdu ? "bg-accent-400/30 text-ink-900" : "bg-brand-600/20 text-brand-700",
                    ].join(" ")}>
                    {dict[lang][isEdu ? "education" : "experience"]}
                </span>
                <span className="text-xs text-brand-700 font-semibold">{entry.period}</span>
            </div>

            {/* Title */}
            <p className="font-bold text-base leading-snug text-ink-900 mb-0.5">{entry.title[lang]}</p>

            {/* Organization */}
            <p className="text-sm font-semibold text-brand-700 mb-3">{entry.organization[lang]}</p>

            {/* Summary */}
            <p className="text-sm leading-relaxed text-brand-700">{entry.summary[lang]}</p>
        </div>
    );
}

// ── Concurrent-period callout ────────────────────────────────────────────────

const parallelNote = {
    en: () =>
        `During 2024–2025, 4 activities ran concurrently — two study programmes alongside two jobs. An unusually intensive period of simultaneous growth.`,
    sv: () =>
        `Under 2024–2025 pågick 4 aktiviteter parallellt — två studieprogram vid sidan av två anställningar. En ovanligt intensiv period av lärande och arbete på samma gång.`,
};

// ── Main component ───────────────────────────────────────────────────────────

export default function JourneyTimeline() {
    const { lang } = useLang();

    // Sort helper: most recent first (endYear desc → startYear desc)
    const byRecency = (a: TimelineEntry, b: TimelineEntry) => {
        const aEnd = a.endYear ?? 9999;
        const bEnd = b.endYear ?? 9999;
        return bEnd !== aEnd ? bEnd - aEnd : b.startYear - a.startYear;
    };

    const eduEntries = timelineEntries.filter(e => e.type === "education").sort(byRecency);

    const expEntries = timelineEntries.filter(e => e.type === "experience").sort(byRecency);

    const allSorted = [...timelineEntries].sort(byRecency);

    // Count entries active any time during 2024–2025
    // const peakCount = timelineEntries.filter(e => {
    //     const end = e.endYear ?? 9999;
    //     return e.startYear <= 2025 && end >= 2024;
    // }).length;

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* ── Parallel period callout ──────────────────────────────────────── */}
            <div className="mb-10 rounded-xl border border-accent-400 bg-accent-400/10 p-5">
                <p className="font-bold text-lg mb-1 text-ink-900">
                    {lang === "en" ? "⚡ Parallel Period: 2024–2025" : "⚡ Parallellperiod: 2024–2025"}
                </p>
                <p className="text-base leading-relaxed text-brand-700">{parallelNote[lang]()}</p>
            </div>

            {/* ── Desktop: two-column layout ───────────────────────────────────── */}
            <div className="hidden md:grid md:grid-cols-[1fr_1px_1fr] md:gap-x-8">
                {/* Education column */}
                <div className="space-y-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-700 mb-5 text-right">
                        {dict[lang].education}
                    </h3>
                    {eduEntries.map(entry => (
                        <EntryCard key={entry.id} entry={entry} lang={lang} />
                    ))}
                </div>

                {/* Center divider */}
                <div className="bg-brand-600/20" />

                {/* Experience column */}
                <div className="space-y-5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-700 mb-5">
                        {dict[lang].experience}
                    </h3>
                    {expEntries.map(entry => (
                        <EntryCard key={entry.id} entry={entry} lang={lang} />
                    ))}
                </div>
            </div>

            {/* ── Mobile: single column ────────────────────────────────────────── */}
            <div className="md:hidden space-y-5">
                {allSorted.map(entry => (
                    <EntryCard key={entry.id} entry={entry} lang={lang} />
                ))}
            </div>
        </div>
    );
}

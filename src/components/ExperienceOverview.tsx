"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer-variants";

interface Phase {
  label: { en: string; sv: string };
  period: string;
  variant: "default" | "accent" | "certification";
}

const phases: Phase[] = [
  { label: { en: "Train Driver", sv: "Lokförare" }, period: "2010–2025", variant: "default" },
  { label: { en: "Health Science", sv: "Hälsovetenskap" }, period: "2020–2023", variant: "default" },
  { label: { en: "Web Development", sv: "Webbutveckling" }, period: "2023–2025", variant: "default" },
  { label: { en: ".NET Development", sv: ".NET-utveckling" }, period: "2026", variant: "accent" },
  { label: { en: "Azure Fundamentals (AZ-900)", sv: "Azure Fundamentals (AZ-900)" }, period: "08/2026", variant: "certification" },
];

export default function ExperienceOverview({ lang }: { lang: "en" | "sv" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Desktop: horizontal flow */}
      <div className="hidden sm:flex items-center justify-center gap-0">
        {phases.map((phase, i) => (
          <div key={i} className="flex items-center">
            <div
              className={[
                "flex flex-col items-center text-center px-4 py-3 rounded-lg border",
                phase.variant === "accent"
                  ? "bg-accent-400/15 border-accent-400/50 shadow-sm"
                  : phase.variant === "certification"
                    ? "bg-brand-600/10 border-brand-600/40 shadow-sm"
                  : "bg-surface-50 border-brand-600/20",
              ].join(" ")}
            >
              <span className={`text-sm font-semibold leading-tight ${phase.variant === "accent" ? "text-accent-700" : phase.variant === "certification" ? "text-brand-800" : "text-ink-900"}`}>
                {phase.label[lang]}
              </span>
              <span className="text-xs text-brand-700 mt-0.5">{phase.period}</span>
            </div>
            {i < phases.length - 1 && (
              <div className="w-6 h-px bg-brand-600/30 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="sm:hidden flex flex-col items-center gap-0">
        {phases.map((phase, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={[
                "flex flex-col items-center text-center px-5 py-2.5 rounded-lg border w-full max-w-[220px]",
                phase.variant === "accent"
                  ? "bg-accent-400/15 border-accent-400/50 shadow-sm"
                  : phase.variant === "certification"
                    ? "bg-brand-600/10 border-brand-600/40 shadow-sm"
                  : "bg-surface-50 border-brand-600/20",
              ].join(" ")}
            >
              <span className={`text-sm font-semibold ${phase.variant === "accent" ? "text-accent-700" : phase.variant === "certification" ? "text-brand-800" : "text-ink-900"}`}>
                {phase.label[lang]}
              </span>
              <span className="text-xs text-brand-700 mt-0.5">{phase.period}</span>
            </div>
            {i < phases.length - 1 && (
              <div className="w-px h-4 bg-brand-600/30 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

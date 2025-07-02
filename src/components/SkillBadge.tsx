// Liten badge. Props: label. Span class='inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-accent-400/20 text-accent-700'.
export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-accent-200 text-accent-800">
      {label}
    </span>
  );
}

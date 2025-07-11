export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent-400/20 text-accent-700">
      {label}
    </span>
  );
}

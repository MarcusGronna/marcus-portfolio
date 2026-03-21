export default function Loading() {
  return (
    <div
      className="flex items-center justify-center min-h-[40vh] text-brand-600 text-lg"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="animate-pulse select-none" aria-label="Loading">
        ···
      </span>
    </div>
  );
}

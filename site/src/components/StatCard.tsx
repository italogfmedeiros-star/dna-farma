export function StatCard({
  label,
  value,
  tone = "neutral",
  hint,
}: {
  label: string;
  value: string;
  tone?: "neutral" | "warning" | "danger" | "good";
  hint?: string;
}) {
  const toneClasses: Record<string, string> = {
    neutral: "border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900",
    warning:
      "border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/30",
    danger:
      "border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30",
    good: "border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/30",
  };

  return (
    <div className={`rounded-xl border p-5 ${toneClasses[tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">
        {value}
      </p>
      {hint && (
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          {hint}
        </p>
      )}
    </div>
  );
}

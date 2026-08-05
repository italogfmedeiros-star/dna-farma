import type { Milestone } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {milestones.map((milestone) => (
        <li
          key={milestone.id}
          className="flex flex-col gap-1 rounded-xl border border-black/5 bg-white p-4 sm:flex-row sm:items-baseline sm:justify-between dark:border-white/10 dark:bg-neutral-900"
        >
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              <span className="text-emerald-700 dark:text-emerald-400">
                {milestone.code}
              </span>{" "}
              — {milestone.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {milestone.criteria}
            </p>
          </div>
          <span className="shrink-0 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {formatDate(milestone.date)}
          </span>
        </li>
      ))}
    </ol>
  );
}

import { phases, statusLabel, type PhaseStatus } from "@/lib/project-status";

const dotClasses: Record<PhaseStatus, string> = {
  done: "bg-emerald-600",
  in_progress: "bg-blue-500",
  not_started: "bg-neutral-300 dark:bg-neutral-700",
  blocked: "bg-red-600",
};

const badgeClasses: Record<PhaseStatus, string> = {
  done: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  in_progress: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  not_started:
    "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
  blocked: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export function PhaseTimeline() {
  return (
    <ol className="mt-6 space-y-3">
      {phases.map((phase) => (
        <li
          key={phase.id}
          className="flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900"
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dotClasses[phase.status]}`}
            />
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {phase.id} — {phase.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Janela {phase.window} · peso {phase.weight}% do projeto
              </p>
            </div>
          </div>
          <span
            className={`inline-flex w-fit shrink-0 items-center rounded-full px-3 py-1 text-xs font-medium ${badgeClasses[phase.status]}`}
          >
            {statusLabel[phase.status]}
          </span>
        </li>
      ))}
    </ol>
  );
}

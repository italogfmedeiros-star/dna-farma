import Link from "next/link";
import { ProgressBar } from "@/components/ProgressBar";
import { phaseStatusLabel, type PhaseStatus } from "@/lib/types";
import type { PhaseWithProgress } from "@/lib/data";

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

export function PhaseTimeline({ phases }: { phases: PhaseWithProgress[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {phases.map((phase) => (
        <li key={phase.id}>
          <Link
            href={`/fases/${phase.code}`}
            className="block rounded-xl border border-black/5 bg-white p-4 transition-colors hover:border-emerald-300 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-emerald-800"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dotClasses[phase.status]}`}
                />
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {phase.code} — {phase.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Janela {phase.window} · peso {phase.weight}% do projeto ·{" "}
                    {phase.completedCount}/{phase.totalCount} tarefas
                  </p>
                </div>
              </div>
              <span
                className={`inline-flex w-fit shrink-0 items-center rounded-full px-3 py-1 text-xs font-medium ${badgeClasses[phase.status]}`}
              >
                {phaseStatusLabel[phase.status]}
              </span>
            </div>
            <div className="mt-3 pl-5">
              <ProgressBar ratio={phase.ratio} />
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

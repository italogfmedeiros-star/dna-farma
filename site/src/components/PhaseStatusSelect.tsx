"use client";

import { useTransition } from "react";
import { updatePhaseStatus } from "@/app/actions/phases";
import { phaseStatusLabel, type PhaseStatus } from "@/lib/types";

const options = Object.entries(phaseStatusLabel) as [PhaseStatus, string][];

export function PhaseStatusSelect({
  phaseId,
  status,
  disabled,
}: {
  phaseId: number;
  status: PhaseStatus;
  disabled?: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={status}
      disabled={disabled || pending}
      onChange={(e) =>
        startTransition(() => updatePhaseStatus(phaseId, e.target.value as PhaseStatus))
      }
      className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
    >
      {options.map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

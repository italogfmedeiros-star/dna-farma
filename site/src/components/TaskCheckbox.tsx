"use client";

import { useTransition } from "react";
import { toggleTask } from "@/app/actions/tasks";

export function TaskCheckbox({
  taskId,
  completed,
  disabled,
  label,
}: {
  taskId: string;
  completed: boolean;
  disabled?: boolean;
  label: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={completed}
        disabled={disabled || pending}
        onChange={() => {
          startTransition(async () => {
            await toggleTask(taskId, !completed);
          });
        }}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 text-emerald-700 focus:ring-emerald-600 disabled:opacity-50 dark:border-neutral-700"
      />
      <span
        className={`text-sm ${completed ? "text-neutral-400 line-through dark:text-neutral-600" : "text-neutral-800 dark:text-neutral-200"}`}
      >
        {label}
      </span>
    </label>
  );
}

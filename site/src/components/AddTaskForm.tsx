"use client";

import { useRef, useState, useTransition } from "react";
import { createTask } from "@/app/actions/tasks";

export function AddTaskForm({ phaseId }: { phaseId: number }) {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [pending, startTransition] = useTransition();
  const titleRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;

    startTransition(async () => {
      await createTask(phaseId, title.trim(), owner || null, dueDate || null);
      setTitle("");
      setOwner("");
      setDueDate("");
      titleRef.current?.focus();
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 grid gap-2 rounded-xl border border-dashed border-neutral-300 p-4 sm:grid-cols-[1fr_auto_auto_auto] dark:border-neutral-700"
    >
      <input
        ref={titleRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa…"
        required
        className="rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
      />
      <input
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Responsável"
        className="rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:opacity-60"
      >
        Adicionar
      </button>
    </form>
  );
}

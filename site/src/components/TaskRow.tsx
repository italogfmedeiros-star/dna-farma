"use client";

import { useState, useTransition } from "react";
import { deleteTask, toggleTask, updateTaskFields } from "@/app/actions/tasks";
import type { Task } from "@/lib/types";

function formatDate(iso: string | null) {
  if (!iso) return "sem prazo";
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function TaskRow({ task, editable }: { task: Task; editable: boolean }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [owner, setOwner] = useState(task.owner ?? "");
  const [dueDate, setDueDate] = useState(task.due_date ?? "");
  const [pending, startTransition] = useTransition();

  function save() {
    startTransition(async () => {
      await updateTaskFields(task.id, {
        title,
        owner: owner || null,
        due_date: dueDate || null,
      });
      setEditing(false);
    });
  }

  function remove() {
    if (!confirm(`Excluir a tarefa "${task.title}"?`)) return;
    startTransition(async () => {
      await deleteTask(task.id);
    });
  }

  if (editing) {
    return (
      <li className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 dark:border-emerald-800 dark:bg-emerald-950/20">
        <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto]">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            placeholder="Título da tarefa"
          />
          <input
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
            placeholder="Responsável"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />
        </div>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            disabled={pending}
            onClick={save}
            className="rounded-md bg-emerald-700 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-800 disabled:opacity-60"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-md border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
          >
            Cancelar
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900">
      <label className="flex flex-1 cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          disabled={!editable || pending}
          onChange={() => startTransition(() => toggleTask(task.id, !task.completed))}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 text-emerald-700 focus:ring-emerald-600 disabled:opacity-50 dark:border-neutral-700"
        />
        <span>
          <span
            className={`block text-sm ${task.completed ? "text-neutral-400 line-through dark:text-neutral-600" : "text-neutral-800 dark:text-neutral-200"}`}
          >
            {task.title}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {task.owner ?? "sem responsável"} · {formatDate(task.due_date)}
          </span>
        </span>
      </label>
      {editable && (
        <div className="flex shrink-0 gap-3 text-xs">
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="font-medium text-emerald-700 hover:underline dark:text-emerald-400"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={remove}
            className="font-medium text-red-600 hover:underline dark:text-red-400"
          >
            Excluir
          </button>
        </div>
      )}
    </li>
  );
}

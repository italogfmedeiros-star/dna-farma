import type { AuditEntryWithAuthor } from "@/lib/data";

const fieldLabel: Record<string, string> = {
  completed: "marcou como concluída",
  status: "mudou o status",
  title: "mudou o título",
  description: "mudou a descrição",
  owner: "mudou o responsável",
  due_date: "mudou o prazo",
  deleted: "excluiu",
};

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AuditTimeline({ entries }: { entries: AuditEntryWithAuthor[] }) {
  if (entries.length === 0) {
    return (
      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        Nenhuma alteração registrada ainda.
      </p>
    );
  }

  return (
    <ol className="mt-4 space-y-2">
      {entries.map((entry) => {
        const authorName =
          entry.author?.full_name || entry.author?.email || "Alguém";
        const action = fieldLabel[entry.field] ?? `mudou ${entry.field}`;

        return (
          <li
            key={entry.id}
            className="rounded-lg border border-black/5 bg-white px-4 py-2.5 text-sm dark:border-white/10 dark:bg-neutral-900"
          >
            <p className="text-neutral-700 dark:text-neutral-300">
              <span className="font-medium text-neutral-900 dark:text-white">
                {authorName}
              </span>{" "}
              {action}
              {entry.new_value !== null && (
                <>
                  {" "}
                  para{" "}
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {entry.new_value}
                  </span>
                </>
              )}
              <span className="text-xs text-neutral-400 dark:text-neutral-600">
                {" "}
                · {entry.entity_type} {entry.entity_id}
              </span>
            </p>
            <p className="mt-0.5 text-xs text-neutral-400 dark:text-neutral-600">
              {formatWhen(entry.changed_at)}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

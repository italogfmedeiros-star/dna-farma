import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { PhaseStatusSelect } from "@/components/PhaseStatusSelect";
import { TaskRow } from "@/components/TaskRow";
import { AddTaskForm } from "@/components/AddTaskForm";
import { AuditTimeline } from "@/components/AuditTimeline";
import { canWrite, getCurrentProfile } from "@/lib/auth";
import { getPhaseAudit, getPhaseWithTasksByCode } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function PhaseDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const [profile, phase] = await Promise.all([
    getCurrentProfile(),
    getPhaseWithTasksByCode(code.toUpperCase()),
  ]);
  if (!profile) redirect("/login");
  const editable = canWrite(profile.role);
  if (!phase) notFound();

  const audit = await getPhaseAudit(
    phase.id,
    phase.tasks.map((t) => t.id),
  );

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow={`${phase.time_window} · peso ${phase.weight}% do projeto`}
        title={`${phase.code} — ${phase.name}`}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          href="/fases"
          className="text-sm text-emerald-700 hover:underline dark:text-emerald-400"
        >
          ← Todas as fases
        </Link>

        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-black/5 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900">
          <div className="flex-1">
            <ProgressBar ratio={phase.ratio} />
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {phase.completedCount}/{phase.totalCount} tarefas concluídas
            </p>
          </div>
          <PhaseStatusSelect
            phaseId={phase.id}
            status={phase.status}
            disabled={!editable}
          />
        </div>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Tarefas
          </h2>
          {phase.tasks.length === 0 ? (
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              Nenhuma tarefa cadastrada nesta fase ainda.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {phase.tasks.map((task) => (
                <TaskRow key={task.id} task={task} editable={editable} />
              ))}
            </ul>
          )}
          {editable && <AddTaskForm phaseId={phase.id} />}
          {!editable && (
            <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-600">
              Seu perfil é Visualizador — você acompanha, mas não edita
              tarefas.
            </p>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Histórico
          </h2>
          <AuditTimeline entries={audit} />
        </section>
      </div>
    </div>
  );
}

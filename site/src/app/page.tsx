import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { MilestoneList } from "@/components/MilestoneList";
import { TaskCheckbox } from "@/components/TaskCheckbox";
import { canWrite, requireProfile } from "@/lib/auth";
import {
  computeOverallPercent,
  findCurrentPhase,
  getMilestones,
  getPhasesWithProgress,
  getProjectMeta,
  getUpcomingTasks,
  taskCountsByStatus,
} from "@/lib/data";
import { phaseStatusLabel } from "@/lib/types";

// Depende de sessão (cookies) e dados sempre atuais — não faz sentido
// pré-renderizar estaticamente.
export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatAsOf() {
  return new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function daysUntil(iso: string) {
  const target = new Date(`${iso}T00:00:00`).getTime();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

export default async function HomePage() {
  const profile = await requireProfile();
  const editable = canWrite(profile.role);

  const [phases, upcoming, milestones, meta] = await Promise.all([
    getPhasesWithProgress(),
    getUpcomingTasks(5),
    getMilestones(),
    getProjectMeta(),
  ]);

  const overallPercent = computeOverallPercent(phases);
  const currentPhase = findCurrentPhase(phases);
  const counts = taskCountsByStatus(phases);
  const blockedPhases = phases.filter((p) => p.status === "blocked").length;
  const daysToGoLive = daysUntil(meta.go_live_date);

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow={`Posição em ${formatAsOf()}`}
        title="Acompanhamento da Implantação"
        description={`Painel interno de status até a inauguração (Go-Live em ${formatDate(
          meta.go_live_date,
        )}). Dados vivos — cada checkbox e campo atualizado aqui reflete na hora.`}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {/* Visão geral */}
        <section>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Visão geral
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Percentual concluído"
              value={`${overallPercent}%`}
              hint="ponderado pelo peso de cada fase"
            />
            <StatCard
              label="Fase atual"
              value={currentPhase ? `${currentPhase.code} — ${currentPhase.name}` : "—"}
            />
            <StatCard
              label="Dias até o Go-Live"
              value={`${daysToGoLive}`}
              hint={formatDate(meta.go_live_date)}
            />
            <StatCard
              label="Saúde do projeto"
              value={meta.health}
              tone="warning"
              hint={meta.health_note}
            />
            <StatCard
              label="Tarefas mapeadas"
              value={`${counts.total}`}
              hint={`${counts.done} concluídas · ${counts.not_done} pendentes`}
            />
            <StatCard
              label="Fases bloqueadas"
              value={`${blockedPhases}`}
              tone={blockedPhases > 0 ? "danger" : "good"}
            />
            <StatCard
              label="Riscos ativos"
              value={`${meta.active_risks}`}
              tone="danger"
              hint={`${meta.critical_risks} críticos`}
            />
            <StatCard
              label="Itens aguardando resposta"
              value={`${meta.items_awaiting_response}`}
            />
          </div>
        </section>

        {/* Próximas entregas */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Próximas entregas
          </h2>
          {upcoming.length === 0 ? (
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              Nenhuma tarefa com prazo pendente cadastrada.
            </p>
          ) : (
            <ol className="mt-4 space-y-2">
              {upcoming.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-col gap-2 rounded-xl border border-black/5 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900"
                >
                  <TaskCheckbox
                    taskId={task.id}
                    completed={task.completed}
                    disabled={!editable}
                    label={`${task.title} — ${task.phase.code}`}
                  />
                  <span className="shrink-0 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {task.due_date ? formatDate(task.due_date) : "sem prazo"}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>

        {/* Marcos */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Marcos do cronograma
          </h2>
          <MilestoneList milestones={milestones} />
        </section>

        {/* Linha do tempo das fases */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            As 14 fases
          </h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Clique numa fase para ver e gerenciar as tarefas dela.
          </p>
          <PhaseTimeline phases={phases} />
        </section>

        <p className="mt-12 text-xs text-neutral-400 dark:text-neutral-600">
          Legenda de status: {Object.values(phaseStatusLabel).join(" · ")}.
        </p>
      </div>
    </div>
  );
}

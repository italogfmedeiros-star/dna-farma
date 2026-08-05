import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { MilestoneList } from "@/components/MilestoneList";
import {
  nextDeliveries,
  projectStatus,
  statusLabel,
} from "@/lib/project-status";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatAsOf(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  const { tasksByStatus } = projectStatus;

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow={`Posição em ${formatAsOf(projectStatus.asOf)}`}
        title="Acompanhamento da Implantação"
        description={`Painel interno de status até a inauguração (Go-Live em ${formatDate(
          projectStatus.goLiveDate,
        )}). Dados espelhados de 00-projeto-mestre.md — não é a fonte de verdade, apenas a leitura mais recente dela.`}
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
              value={`${projectStatus.overallPercent}%`}
              hint="baseline"
            />
            <StatCard label="Fase atual" value={projectStatus.currentPhase} />
            <StatCard
              label="Dias até o Go-Live"
              value={`${projectStatus.daysToGoLive}`}
              hint={`${projectStatus.weeksRemaining} semanas restantes`}
            />
            <StatCard
              label="Saúde do projeto"
              value={projectStatus.health}
              tone="warning"
              hint={projectStatus.healthNote}
            />
            <StatCard
              label="Tarefas mapeadas"
              value={`${projectStatus.totalTasks}`}
              hint={`${tasksByStatus.done} concluídas · ${tasksByStatus.in_progress} em andamento`}
            />
            <StatCard
              label="Tarefas não iniciadas"
              value={`${tasksByStatus.not_started}`}
            />
            <StatCard
              label="Tarefas bloqueadas"
              value={`${tasksByStatus.blocked}`}
              tone={tasksByStatus.blocked > 0 ? "danger" : "good"}
            />
            <StatCard
              label="Riscos ativos"
              value={`${projectStatus.activeRisks}`}
              tone="danger"
              hint={`${projectStatus.criticalRisks} críticos`}
            />
            <StatCard
              label="Itens aguardando resposta"
              value={`${projectStatus.itemsAwaitingResponse}`}
            />
          </div>
        </section>

        {/* Próximas entregas */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Próximas entregas
          </h2>
          <ol className="mt-4 space-y-2">
            {nextDeliveries.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 rounded-xl border border-black/5 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Responsável: {item.owner}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {formatDate(item.due)}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Marcos */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Marcos do cronograma
          </h2>
          <MilestoneList />
        </section>

        {/* Linha do tempo das fases */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            As 14 fases
          </h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            As fases rodam em paralelo, não em sequência — só há viabilidade
            para 13 semanas com paralelismo agressivo.
          </p>
          <PhaseTimeline />
        </section>

        <p className="mt-12 text-xs text-neutral-400 dark:text-neutral-600">
          Legenda de status: {Object.values(statusLabel).join(" · ")}.
        </p>
      </div>
    </div>
  );
}

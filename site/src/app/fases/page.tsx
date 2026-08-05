import { PageHeader } from "@/components/PageHeader";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { requireProfile } from "@/lib/auth";
import { computeOverallPercent, getPhasesWithProgress } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function FasesPage() {
  await requireProfile();
  const phases = await getPhasesWithProgress();
  const overallPercent = computeOverallPercent(phases);

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow={`${overallPercent}% concluído no geral`}
        title="Gerenciar Fases"
        description="As 14 fases do projeto. Clique numa fase para ver, marcar e editar as tarefas dela."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <PhaseTimeline phases={phases} />
      </div>
    </div>
  );
}

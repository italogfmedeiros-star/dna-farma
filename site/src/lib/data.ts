import { createClient } from "@/lib/supabase/server";
import type { AuditEntry, Milestone, Phase, ProjectMeta, Task } from "@/lib/types";

export type PhaseWithProgress = Phase & {
  tasks: Task[];
  completedCount: number;
  totalCount: number;
  /** 0–1. Fase sem tarefas cadastradas conta como 0. */
  ratio: number;
};

/**
 * Todas as fases, cada uma com suas tarefas e progresso calculado.
 *
 * Uma única consulta com join aninhado (phases + tasks) em vez de duas
 * chamadas separadas — cada ida ao Supabase é uma rodada de rede real, e
 * essa função corre em toda carga do painel.
 */
export async function getPhasesWithProgress(): Promise<PhaseWithProgress[]> {
  const supabase = await createClient();

  const { data: phases, error } = await supabase
    .from("phases")
    .select("*, tasks(*)")
    .order("order_index")
    .order("order_index", { referencedTable: "tasks" });

  if (error) throw error;

  return (phases ?? []).map(({ tasks, ...phase }) => {
    const phaseTasks = (tasks ?? []) as Task[];
    const completedCount = phaseTasks.filter((t) => t.completed).length;
    const totalCount = phaseTasks.length;
    return {
      ...phase,
      tasks: phaseTasks,
      completedCount,
      totalCount,
      ratio: totalCount > 0 ? completedCount / totalCount : 0,
    };
  });
}

/** Percentual geral ponderado pelo peso (%) de cada fase. */
export function computeOverallPercent(phases: PhaseWithProgress[]): number {
  const weighted = phases.reduce((sum, p) => sum + p.weight * p.ratio, 0);
  return Math.round(weighted);
}

/** Fase "atual": primeira em andamento; se nenhuma, primeira não iniciada. */
export function findCurrentPhase(phases: PhaseWithProgress[]): PhaseWithProgress | null {
  return (
    phases.find((p) => p.status === "in_progress") ??
    phases.find((p) => p.status === "not_started") ??
    phases[0] ??
    null
  );
}

export type UpcomingTask = Task & { phase: Pick<Phase, "code" | "name"> };

/** Próximas N tarefas não concluídas com prazo definido, mais próximas primeiro. */
export async function getUpcomingTasks(limit = 5): Promise<UpcomingTask[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tasks")
    .select("*, phase:phases(code, name)")
    .eq("completed", false)
    .not("due_date", "is", null)
    .order("due_date", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return (data ?? []) as unknown as UpcomingTask[];
}

export async function getMilestones(): Promise<Milestone[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("milestones")
    .select("*")
    .order("order_index");
  if (error) throw error;
  return data ?? [];
}

export async function getProjectMeta(): Promise<ProjectMeta> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("project_meta")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data;
}

export async function getPhaseWithTasksByCode(
  code: string,
): Promise<PhaseWithProgress | null> {
  const supabase = await createClient();

  const { data: phase, error } = await supabase
    .from("phases")
    .select("*, tasks(*)")
    .eq("code", code)
    .order("order_index", { referencedTable: "tasks" })
    .maybeSingle();
  if (error) throw error;
  if (!phase) return null;

  const { tasks, ...rest } = phase;
  const phaseTasks = (tasks ?? []) as Task[];
  const completedCount = phaseTasks.filter((t) => t.completed).length;
  const totalCount = phaseTasks.length;

  return {
    ...rest,
    tasks: phaseTasks,
    completedCount,
    totalCount,
    ratio: totalCount > 0 ? completedCount / totalCount : 0,
  };
}

export type AuditEntryWithAuthor = AuditEntry & {
  author: { full_name: string | null; email: string } | null;
};

/** Histórico de auditoria de uma fase e das tarefas dela, mais recente primeiro. */
export async function getPhaseAudit(
  phaseId: number,
  taskIds: string[],
): Promise<AuditEntryWithAuthor[]> {
  const supabase = await createClient();
  const entityIds = [String(phaseId), ...taskIds];
  if (entityIds.length === 0) return [];

  const { data, error } = await supabase
    .from("audit_log")
    .select("*, author:profiles(full_name, email)")
    .in("entity_id", entityIds)
    .order("changed_at", { ascending: false })
    .limit(50);
  if (error) throw error;
  return (data ?? []) as unknown as AuditEntryWithAuthor[];
}

/** Auditoria global (todas as entidades), paginada por offset simples. */
export async function getGlobalAudit(
  page = 0,
  pageSize = 25,
): Promise<{ entries: AuditEntryWithAuthor[]; hasMore: boolean }> {
  const supabase = await createClient();
  const from = page * pageSize;
  const to = from + pageSize; // busca 1 a mais pra saber se há próxima página

  const { data, error } = await supabase
    .from("audit_log")
    .select("*, author:profiles(full_name, email)")
    .order("changed_at", { ascending: false })
    .range(from, to);
  if (error) throw error;

  const rows = (data ?? []) as unknown as AuditEntryWithAuthor[];
  return { entries: rows.slice(0, pageSize), hasMore: rows.length > pageSize };
}

export function taskCountsByStatus(phases: PhaseWithProgress[]) {
  const allTasks = phases.flatMap((p) => p.tasks);
  return {
    done: allTasks.filter((t) => t.completed).length,
    not_done: allTasks.filter((t) => !t.completed).length,
    total: allTasks.length,
  };
}

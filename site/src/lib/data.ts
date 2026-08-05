import { createClient } from "@/lib/supabase/server";
import type { AuditEntry, Milestone, Phase, ProjectMeta, Task } from "@/lib/types";

export type PhaseWithProgress = Phase & {
  tasks: Task[];
  completedCount: number;
  totalCount: number;
  /** 0–1. Fase sem tarefas cadastradas conta como 0. */
  ratio: number;
};

/** Todas as fases, cada uma com suas tarefas e progresso calculado. */
export async function getPhasesWithProgress(): Promise<PhaseWithProgress[]> {
  const supabase = await createClient();

  const [{ data: phases, error: phasesError }, { data: tasks, error: tasksError }] =
    await Promise.all([
      supabase.from("phases").select("*").order("order_index"),
      supabase.from("tasks").select("*").order("order_index"),
    ]);

  if (phasesError) throw phasesError;
  if (tasksError) throw tasksError;

  return (phases ?? []).map((phase) => {
    const phaseTasks = (tasks ?? []).filter((t) => t.phase_id === phase.id);
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

  const { data: phase, error: phaseError } = await supabase
    .from("phases")
    .select("*")
    .eq("code", code)
    .maybeSingle();
  if (phaseError) throw phaseError;
  if (!phase) return null;

  const { data: tasks, error: tasksError } = await supabase
    .from("tasks")
    .select("*")
    .eq("phase_id", phase.id)
    .order("order_index");
  if (tasksError) throw tasksError;

  const completedCount = (tasks ?? []).filter((t) => t.completed).length;
  const totalCount = (tasks ?? []).length;

  return {
    ...phase,
    tasks: tasks ?? [],
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

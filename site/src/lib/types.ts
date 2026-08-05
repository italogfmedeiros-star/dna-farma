export type UserRole = "admin" | "editor" | "viewer";
export type PhaseStatus = "done" | "in_progress" | "not_started" | "blocked";

export const roleLabel: Record<UserRole, string> = {
  admin: "Admin",
  editor: "Editor",
  viewer: "Visualizador",
};

export const phaseStatusLabel: Record<PhaseStatus, string> = {
  done: "Concluída",
  in_progress: "Em andamento",
  not_started: "Não iniciada",
  blocked: "Bloqueada",
};

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  created_at: string;
};

export type Phase = {
  id: number;
  code: string;
  name: string;
  time_window: string;
  weight: number;
  status: PhaseStatus;
  order_index: number;
  updated_at: string;
  updated_by: string | null;
};

export type Task = {
  id: string;
  phase_id: number;
  title: string;
  description: string | null;
  owner: string | null;
  due_date: string | null;
  completed: boolean;
  completed_at: string | null;
  completed_by: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
};

export type Milestone = {
  id: number;
  code: string;
  name: string;
  date: string;
  criteria: string;
  order_index: number;
};

export type ProjectMeta = {
  id: 1;
  health: string;
  health_note: string;
  active_risks: number;
  critical_risks: number;
  active_blockers: number;
  items_awaiting_response: number;
  go_live_date: string;
  updated_at: string;
  updated_by: string | null;
};

export type AuditEntry = {
  id: number;
  entity_type: "phase" | "task" | "profile" | "project_meta";
  entity_id: string;
  field: string;
  old_value: string | null;
  new_value: string | null;
  changed_by: string | null;
  changed_at: string;
};

"use server";

import { revalidatePath } from "next/cache";
import { assertRole } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

async function logChange(
  entityType: "phase" | "task",
  entityId: string,
  field: string,
  oldValue: unknown,
  newValue: unknown,
  changedBy: string,
) {
  const supabase = await createClient();
  await supabase.from("audit_log").insert({
    entity_type: entityType,
    entity_id: entityId,
    field,
    old_value: oldValue === null || oldValue === undefined ? null : String(oldValue),
    new_value: newValue === null || newValue === undefined ? null : String(newValue),
    changed_by: changedBy,
  });
}

export async function toggleTask(taskId: string, nextCompleted: boolean) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { data: existing, error: fetchError } = await supabase
    .from("tasks")
    .select("completed, phase_id")
    .eq("id", taskId)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await supabase
    .from("tasks")
    .update({
      completed: nextCompleted,
      completed_at: nextCompleted ? new Date().toISOString() : null,
      completed_by: nextCompleted ? profile.id : null,
      updated_at: new Date().toISOString(),
      updated_by: profile.id,
    })
    .eq("id", taskId);
  if (error) throw error;

  await logChange(
    "task",
    taskId,
    "completed",
    existing.completed,
    nextCompleted,
    profile.id,
  );

  revalidatePath("/");
  revalidatePath("/fases");
}

export type TaskFieldUpdate = {
  title?: string;
  description?: string | null;
  owner?: string | null;
  due_date?: string | null;
};

export async function updateTaskFields(taskId: string, updates: TaskFieldUpdate) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { data: existing, error: fetchError } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", taskId)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await supabase
    .from("tasks")
    .update({ ...updates, updated_at: new Date().toISOString(), updated_by: profile.id })
    .eq("id", taskId);
  if (error) throw error;

  for (const [field, newValue] of Object.entries(updates)) {
    const oldValue = (existing as Record<string, unknown>)[field];
    if (oldValue !== newValue) {
      await logChange("task", taskId, field, oldValue, newValue, profile.id);
    }
  }

  revalidatePath("/fases");
}

export async function createTask(
  phaseId: number,
  title: string,
  owner: string | null,
  dueDate: string | null,
) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { count } = await supabase
    .from("tasks")
    .select("id", { count: "exact", head: true })
    .eq("phase_id", phaseId);

  const { data, error } = await supabase
    .from("tasks")
    .insert({
      phase_id: phaseId,
      title,
      owner,
      due_date: dueDate,
      order_index: (count ?? 0) + 1,
      updated_by: profile.id,
    })
    .select("id")
    .single();
  if (error) throw error;

  await logChange("task", data.id, "title", null, title, profile.id);

  revalidatePath("/fases");
}

export async function deleteTask(taskId: string) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { error } = await supabase.from("tasks").delete().eq("id", taskId);
  if (error) throw error;

  await logChange("task", taskId, "deleted", null, true, profile.id);

  revalidatePath("/fases");
}

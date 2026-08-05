"use server";

import { revalidatePath } from "next/cache";
import { assertRole } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import type { PhaseStatus } from "@/lib/types";

export async function updatePhaseStatus(phaseId: number, status: PhaseStatus) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { data: existing, error: fetchError } = await supabase
    .from("phases")
    .select("status")
    .eq("id", phaseId)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await supabase
    .from("phases")
    .update({ status, updated_at: new Date().toISOString(), updated_by: profile.id })
    .eq("id", phaseId);
  if (error) throw error;

  await supabase.from("audit_log").insert({
    entity_type: "phase",
    entity_id: String(phaseId),
    field: "status",
    old_value: existing.status,
    new_value: status,
    changed_by: profile.id,
  });

  revalidatePath("/");
  revalidatePath("/fases");
}

export async function updateProjectMeta(updates: {
  health?: string;
  health_note?: string;
  active_risks?: number;
  critical_risks?: number;
  active_blockers?: number;
  items_awaiting_response?: number;
}) {
  const profile = await assertRole(["admin", "editor"]);
  const supabase = await createClient();

  const { error } = await supabase
    .from("project_meta")
    .update({ ...updates, updated_at: new Date().toISOString(), updated_by: profile.id })
    .eq("id", 1);
  if (error) throw error;

  await supabase.from("audit_log").insert({
    entity_type: "project_meta",
    entity_id: "1",
    field: Object.keys(updates).join(","),
    old_value: null,
    new_value: JSON.stringify(updates),
    changed_by: profile.id,
  });

  revalidatePath("/");
}

"use server";

import { revalidatePath } from "next/cache";
import { assertRole } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site";
import type { UserRole } from "@/lib/types";

export type InviteResult = { ok: true } | { ok: false; error: string };

/**
 * Convida um novo usuário por e-mail (Supabase Auth Admin API — precisa da
 * service role key). O role desejado vai no user_metadata do convite; o
 * trigger handle_new_user() do banco lê isso ao criar o perfil.
 */
export async function inviteUser(
  email: string,
  fullName: string,
  role: UserRole,
): Promise<InviteResult> {
  await assertRole(["admin"]);

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.inviteUserByEmail(email, {
    data: { full_name: fullName || null, role },
    redirectTo: `${siteConfig.url}/auth/callback?next=/definir-senha`,
  });

  if (error) return { ok: false, error: error.message };

  revalidatePath("/admin/usuarios");
  return { ok: true };
}

export async function updateUserRole(userId: string, role: UserRole) {
  const profile = await assertRole(["admin"]);
  const supabase = await createClient();

  const { data: existing, error: fetchError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", userId);
  if (error) throw error;

  await supabase.from("audit_log").insert({
    entity_type: "profile",
    entity_id: userId,
    field: "role",
    old_value: existing.role,
    new_value: role,
    changed_by: profile.id,
  });

  revalidatePath("/admin/usuarios");
}

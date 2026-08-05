import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Profile, UserRole } from "@/lib/types";

/** Usuário + perfil da sessão atual, ou `null` se não autenticado. */
export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return profile ?? null;
}

/**
 * Para uso em Server Components de página: garante que há um usuário
 * logado, redirecionando para /login caso contrário. src/proxy.ts já faz
 * esse redirect na maioria dos casos — isto é uma segunda camada.
 */
export async function requireProfile(): Promise<Profile> {
  const profile = await getCurrentProfile();
  if (!profile) redirect("/login");
  return profile;
}

/**
 * Para uso em Server Actions: garante autenticação + role permitida.
 * Lança erro (não redireciona) — a action deve capturar e devolver ao form.
 */
export async function assertRole(allowed: UserRole[]): Promise<Profile> {
  const profile = await getCurrentProfile();
  if (!profile) throw new Error("Não autenticado.");
  if (!allowed.includes(profile.role)) {
    throw new Error("Você não tem permissão para fazer isso.");
  }
  return profile;
}

export function canWrite(role: UserRole): boolean {
  return role === "admin" || role === "editor";
}

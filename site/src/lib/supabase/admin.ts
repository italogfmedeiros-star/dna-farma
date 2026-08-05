import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getSupabaseServiceRoleKey, getSupabaseUrl } from "./env";

/**
 * Client Supabase com a service role key — ignora RLS completamente.
 * NUNCA importe isto de um Client Component. Use apenas dentro de Server
 * Actions que já verificaram `role === 'admin'` antes de chamar qualquer
 * coisa aqui (ver src/lib/auth.ts → requireRole).
 */
export function createAdminClient() {
  return createSupabaseClient(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/**
 * As duas variáveis abaixo são públicas por design no modelo do Supabase —
 * a segurança vem das políticas de RLS no banco, não do sigilo da anon key.
 * Ainda assim, elas devem vir de env vars configuradas na Vercel (Project
 * Settings → Environment Variables), nunca hardcoded.
 *
 * SUPABASE_SERVICE_ROLE_KEY é diferente: essa é secreta, só é usada em
 * código server-only (nunca em `lib/supabase/client.ts`) e nunca deve ter
 * o prefixo NEXT_PUBLIC_.
 */

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Variável de ambiente ${name} não configurada. Defina-a no projeto Vercel (Settings → Environment Variables) ou em site/.env.local para desenvolvimento.`,
    );
  }
  return value;
}

export function getSupabaseUrl(): string {
  return required("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);
}

export function getSupabaseAnonKey(): string {
  return required(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

/** Server-only. Nunca importe este módulo de um arquivo usado no client. */
export function getSupabaseServiceRoleKey(): string {
  return required(
    "SUPABASE_SERVICE_ROLE_KEY",
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

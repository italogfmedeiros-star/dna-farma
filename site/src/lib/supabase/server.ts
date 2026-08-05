import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

/**
 * Client Supabase para Server Components, Server Actions e Route Handlers.
 * Autenticado como o usuário da sessão (via cookies) — RLS se aplica
 * normalmente, não é um client admin.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // `setAll` chamado a partir de um Server Component (não uma
          // Server Action/Route Handler): não há response pra escrever
          // cookies. Inofensivo se o proxy.ts já cuida do refresh de sessão.
        }
      },
    },
  });
}

import { PageHeader } from "@/components/PageHeader";
import { InviteUserForm } from "@/components/InviteUserForm";
import { RoleSelect } from "@/components/RoleSelect";
import { requireProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { roleLabel } from "@/lib/types";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function UsuariosPage() {
  const profile = await requireProfile();

  if (profile.role !== "admin") {
    return (
      <div className="pb-24">
        <PageHeader eyebrow="Restrito" title="Usuários" />
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Só administradores gerenciam usuários. Seu perfil atual é{" "}
            <strong>{roleLabel[profile.role]}</strong>.
          </p>
        </div>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Admin"
        title="Usuários"
        description="Convide pessoas do time e gerencie o nível de acesso de cada uma."
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <InviteUserForm />

        <ul className="mt-8 space-y-2">
          {(profiles ?? []).map((p) => (
            <li
              key={p.id}
              className="flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-neutral-900"
            >
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {p.full_name || p.email}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {p.email} · desde {formatDate(p.created_at)}
                </p>
              </div>
              <RoleSelect
                userId={p.id}
                role={p.role}
                disabled={p.id === profile.id}
              />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-600">
          Você não pode alterar seu próprio nível de acesso — peça a outro
          admin.
        </p>
      </div>
    </div>
  );
}

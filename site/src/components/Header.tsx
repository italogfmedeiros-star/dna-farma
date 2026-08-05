import Link from "next/link";
import { signOut } from "@/app/actions/auth";
import { getCurrentProfile } from "@/lib/auth";
import { siteConfig } from "@/lib/site";
import { roleLabel } from "@/lib/types";

const navLinks = [
  { href: "/", label: "Painel" },
  { href: "/fases", label: "Fases" },
  { href: "/auditoria", label: "Histórico" },
];

export async function Header() {
  const profile = await getCurrentProfile();

  return (
    <header className="border-b border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-emerald-900 dark:text-emerald-300"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white"
          >
            DF
          </span>
          {siteConfig.name}
        </Link>

        {profile && (
          <nav aria-label="Navegação principal" className="flex items-center gap-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
            {profile.role === "admin" && (
              <Link
                href="/admin/usuarios"
                className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                Usuários
              </Link>
            )}
          </nav>
        )}

        {profile ? (
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <span>
              {profile.full_name || profile.email} ·{" "}
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {roleLabel[profile.role]}
              </span>
            </span>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-md border border-neutral-300 px-2.5 py-1 font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                Sair
              </button>
            </form>
          </div>
        ) : (
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {siteConfig.tagline}
          </span>
        )}
      </div>
    </header>
  );
}

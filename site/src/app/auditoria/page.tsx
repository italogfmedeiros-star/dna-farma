import { redirect } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { AuditTimeline } from "@/components/AuditTimeline";
import { getCurrentProfile } from "@/lib/auth";
import { getGlobalAudit } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AuditoriaPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(0, Number(pageParam ?? 0) || 0);

  const [profile, { entries, hasMore }] = await Promise.all([
    getCurrentProfile(),
    getGlobalAudit(page),
  ]);
  if (!profile) redirect("/login");

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Transparência"
        title="Histórico de Alterações"
        description="Todo mundo vê quem mudou o quê e quando — nada aqui é editável, é só o registro."
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <AuditTimeline entries={entries} />

        <div className="mt-6 flex justify-between">
          {page > 0 ? (
            <Link
              href={`/auditoria?page=${page - 1}`}
              className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
            >
              ← Mais recentes
            </Link>
          ) : (
            <span />
          )}
          {hasMore && (
            <Link
              href={`/auditoria?page=${page + 1}`}
              className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
            >
              Mais antigas →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

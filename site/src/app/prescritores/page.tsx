import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Área do Prescritor",
  description:
    "Canal dedicado a médicos e demais profissionais prescritores para relacionamento técnico com a DNA Farma.",
};

export default function PrescritoresPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Para profissionais de saúde"
        title="Área do Prescritor"
        description="Um canal técnico direto entre você e a equipe farmacêutica da DNA Farma."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <DraftNotice note="Área restrita e materiais técnicos ainda não implementados — dependem de COM-01/COM-02 (CRM de prescritores) e da equipe farmacêutica estar formada." />

        <div className="mt-10 space-y-6 text-neutral-700 dark:text-neutral-300">
          <p className="leading-relaxed">
            Estamos estruturando um canal dedicado a prescritores — médicos,
            nutricionistas, dentistas e demais profissionais habilitados —
            com materiais técnicos, contato direto com a equipe farmacêutica
            e suporte à individualização terapêutica.
          </p>
          <p className="leading-relaxed">
            Enquanto essa área é finalizada, prescritores podem entrar em
            contato diretamente pelos canais abaixo.
          </p>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/30">
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
              Contato para prescritores
            </p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Telefone: {siteConfig.contact.phone}</li>
              <li>E-mail: {siteConfig.contact.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description: "Oportunidades de carreira na DNA Farma.",
};

export default function TrabalheConoscoPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Carreira"
        title="Trabalhe Conosco"
        description="A DNA Farma está montando sua equipe fundadora."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <DraftNotice note="Vagas ainda não publicadas — recrutamento formal inicia em RH-04 (ver 08-rh/README.md). Esta página deve listar vagas reais assim que abertas." />

        <div className="mt-10 space-y-6 text-neutral-700 dark:text-neutral-300">
          <p className="leading-relaxed">
            Estamos construindo a equipe que vai abrir as portas da DNA
            Farma. Se você tem interesse em fazer parte — como farmacêutico,
            técnico, atendimento ou outra função — envie seu contato e
            currículo.
          </p>

          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              Vagas abertas no momento
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Nenhuma vaga publicada ainda.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/30">
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
              Envie seu contato
            </p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "O Farmacêutico",
  description:
    "Conheça o Farmacêutico Responsável Técnico da DNA Farma e o papel da responsabilidade técnica na manipulação magistral.",
};

export default function FarmaceuticoPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Responsabilidade Técnica"
        title="O Farmacêutico"
        description="A manipulação magistral existe sob supervisão farmacêutica direta, do primeiro ao último passo."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <DraftNotice note="Perfil do RT pendente — contratação em andamento (RH-01, ver 08-rh/README.md). Esta página será atualizada com nome, CRF e trajetória assim que o RT for definido." />

        <div className="mt-10 space-y-8 text-neutral-700 dark:text-neutral-300">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-black/5 bg-neutral-50 p-8 text-center dark:border-white/10 dark:bg-neutral-900">
            <div
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
            >
              RT
            </div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">
              Farmacêutico Responsável Técnico — a definir
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              CRF: a definir
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              O que faz um Responsável Técnico
            </h2>
            <p className="mt-3 leading-relaxed">
              O Farmacêutico Responsável Técnico (RT) responde tecnicamente
              pela farmácia perante os órgãos sanitários. É quem assina o
              Manual de Boas Práticas de Manipulação, supervisiona os
              Procedimentos Operacionais Padrão (POPs), garante a
              rastreabilidade de cada preparação e — na DNA Farma — aprova
              pessoalmente todo conteúdo publicado nos canais digitais da
              farmácia antes de ir ao ar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Por que isso importa para você
            </h2>
            <p className="mt-3 leading-relaxed">
              Cada preparação manipulada passa por controles de qualidade
              documentados, desde a origem dos insumos até a dispensação. A
              presença de um farmacêutico responsável não é uma formalidade —
              é a garantia de que existe alguém, com nome e CRF, respondendo
              tecnicamente por cada etapa do processo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

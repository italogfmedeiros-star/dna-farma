import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Conteúdo Educativo",
  description:
    "Conteúdo educativo da DNA Farma sobre saúde, individualização terapêutica e o papel do farmacêutico.",
};

const pillars = [
  {
    title: "Educação em saúde",
    text: "Conteúdo geral sobre saúde e bem-estar, sem indicação de tratamento individual.",
  },
  {
    title: "Bastidores da qualidade",
    text: "Como funciona uma farmácia de manipulação por dentro — controles, processos, cuidado.",
  },
  {
    title: "O papel do farmacêutico",
    text: "O que faz, de fato, um farmacêutico responsável técnico e por que isso importa.",
  },
  {
    title: "Ciência da individualização",
    text: "Por que preparações individualizadas existem e como a ciência sustenta essa prática.",
  },
  {
    title: "Institucional",
    text: "Marcos da construção da DNA Farma, equipe, cultura e valores.",
  },
];

export default function ConteudoPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Autoridade e conteúdo"
        title="Conteúdo Educativo"
        description="Em breve, artigos organizados nestes cinco pilares — sempre revisados e aprovados pelo farmacêutico responsável técnico."
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <DraftNotice note="Nenhum artigo publicado ainda. Pauta e calendário editorial em 14-digital/calendario-editorial.md, aguardando DEC-005 e abertura dos perfis (DIG-10)." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-dashed border-neutral-300 p-6 dark:border-neutral-700"
            >
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {pillar.text}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
                Em breve
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";

export const metadata: Metadata = {
  title: "Serviços Farmacêuticos",
  description:
    "Conheça as frentes de atuação da DNA Farma: manipulação magistral sob prescrição, orientação farmacêutica e dispensação.",
};

const services = [
  {
    title: "Manipulação individualizada sob prescrição",
    text: "Preparações elaboradas a partir de prescrição médica ou de profissional habilitado, respeitando a formulação, a posologia e as particularidades indicadas pelo prescritor.",
  },
  {
    title: "Orientação farmacêutica",
    text: "Acompanhamento farmacêutico no uso correto de medicamentos, com atenção a interações, adesão ao tratamento e dúvidas sobre administração.",
  },
  {
    title: "Dispensação de industrializados e dermocosméticos",
    text: "Produtos industrializados e linhas de dermocosmética, dispensados com a mesma atenção farmacêutica que orienta toda a operação.",
  },
  {
    title: "Controle de qualidade",
    text: "Processos de qualificação de fornecedores, controle de insumos e boas práticas de manipulação documentadas do início ao fim.",
  },
];

export default function ServicosPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="O que fazemos"
        title="Serviços Farmacêuticos"
        description="Atuação organizada em torno de um princípio: cuidado individualizado, sempre com responsabilidade técnica."
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <DraftNotice note="Descrições genéricas de serviço — nenhuma fórmula, nome comercial ou preço deve ser incluído nesta página (RDC 67/2007, ver 14-digital/politica-compliance.md)." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-black/5 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900"
            >
              <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-200">
          <p>
            <strong>Sem venda online de manipulados.</strong> A DNA Farma não
            comercializa preparações magistrais pela internet. Prescrições
            devem ser encaminhadas conforme orientação da farmácia; produtos
            industrializados e dermocosméticos, quando disponíveis para venda
            online, exigem prescrição quando aplicável.
          </p>
        </div>
      </div>
    </div>
  );
}

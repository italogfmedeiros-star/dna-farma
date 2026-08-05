import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a DNA Farma.",
};

export default function ContatoPage() {
  return (
    <div className="pb-24">
      <PageHeader eyebrow="Fale conosco" title="Contato" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <DraftNotice note="Endereço, telefone e horários são placeholders — atualizar a partir de 14-digital/ativos-digitais.md assim que confirmados." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Endereço
            </h2>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city} — {siteConfig.address.state}
              <br />
              CEP {siteConfig.address.postalCode}
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Fale com a farmácia
            </h2>
            <ul className="mt-2 space-y-1 text-neutral-800 dark:text-neutral-200">
              <li>Telefone: {siteConfig.contact.phone}</li>
              <li>E-mail: {siteConfig.contact.email}</li>
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  className="text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6 sm:col-span-2 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Horário de atendimento
            </h2>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">
              A definir junto ao plano de operação (F10).
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-500">
          Este canal não deve ser utilizado para orientação farmacêutica
          individualizada em ambiente público (comentários/redes sociais).
          Dúvidas clínicas são tratadas em atendimento direto e privado.
        </p>
      </div>
    </div>
  );
}

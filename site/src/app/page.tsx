import Link from "next/link";
import { DraftNotice } from "@/components/DraftNotice";

const pillars = [
  {
    title: "Individualização com ciência",
    text: "Cada pessoa tem uma biologia própria. Trabalhamos para que o cuidado farmacêutico acompanhe essa singularidade, sempre a partir de prescrição.",
  },
  {
    title: "Responsabilidade técnica",
    text: "Toda a operação é conduzida sob supervisão de farmacêutico responsável técnico, com processos documentados de boas práticas.",
  },
  {
    title: "Relacionamento com prescritores",
    text: "Construímos uma ponte técnica entre prescritores e farmácia, com canais dedicados e materiais de apoio.",
  },
  {
    title: "Transparência de bastidores",
    text: "Mostramos o processo — estrutura, equipe, qualidade — sem nunca expor fórmulas, nomes comerciais ou preços de manipulados.",
  },
];

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="border-b border-black/5 bg-gradient-to-b from-emerald-50 to-white px-4 py-20 sm:px-6 dark:border-white/10 dark:from-emerald-950/30 dark:to-neutral-950">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            Farmácia de Manipulação Magistral
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            DNA Farma
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Cuidado farmacêutico individualizado, ciência e acompanhamento
            profissional — construído para durar, desde a fundação.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/farmaceutico"
              className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Conheça o farmacêutico responsável
            </Link>
            <Link
              href="/prescritores"
              className="rounded-md border border-emerald-700 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
            >
              Sou prescritor
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <DraftNotice note="Texto institucional de abertura ainda depende de EST-02 (Missão, Visão, Valores) e DEC-005 (modelo de comunicação) para ser finalizado." />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-black/5 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900"
            >
              <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-300">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900/40 dark:bg-emerald-950/30">
          <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-300">
            A DNA Farma está em construção
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-700 dark:text-neutral-300">
            Estamos preparando cada etapa com cuidado — da estrutura física à
            equipe farmacêutica. Acompanhe o processo e fale com a gente.
          </p>
          <div className="mt-6">
            <Link
              href="/contato"
              className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

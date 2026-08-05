/**
 * Configuração central do painel interno DNA Farma.
 *
 * Esta é uma ferramenta de acompanhamento interno (não um site
 * institucional/público) — ver decisão registrada em conversa com o time,
 * 05/08/2026. Escopo original de site institucional (DIG-08,
 * 00-projeto-mestre.md Seção 8.2-B) fica para uma fase posterior.
 */

export const siteConfig = {
  name: "DNA Farma",
  tagline: "Painel de Acompanhamento — Implantação",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dna-farma.vercel.app",
  description:
    "Painel interno de acompanhamento da implantação da DNA Farma até a inauguração (03/11/2026).",
  locale: "pt_BR",
} as const;

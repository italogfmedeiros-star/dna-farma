/**
 * Configuração central do site institucional DNA Farma.
 *
 * ⚠️ Todos os valores abaixo são PLACEHOLDERS até que os itens correspondentes
 * do backlog (DIG-01 a DIG-14, ver ../../../00-projeto-mestre.md) sejam concluídos.
 * Atualize a partir de ../../../14-digital/ativos-digitais.md assim que os
 * ativos reais (domínio, telefone, endereço, redes sociais) forem confirmados.
 */

export const siteConfig = {
  name: "DNA Farma",
  shortName: "DNA Farma",
  tagline: "Farmácia de Manipulação Magistral",
  // TODO(DIG-01): trocar pelo domínio real assim que registrado.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dnafarma.com.br",
  description:
    "DNA Farma — farmácia de manipulação magistral. Cuidado farmacêutico individualizado, ciência e acompanhamento profissional.",
  locale: "pt_BR",

  // TODO(EST-01): confirmar cidade/UF real (Q01 do documento mestre).
  address: {
    street: "Endereço a definir",
    city: "Cidade a definir",
    state: "UF",
    postalCode: "00000-000",
    country: "BR",
  },

  // TODO(DIG-01): preencher com os contatos reais assim que existirem.
  contact: {
    phone: "(00) 0000-0000",
    whatsapp: "https://wa.me/5500000000000",
    email: "contato@dnafarma.com.br",
  },

  // TODO(DIG-01): confirmar/reservar @handles e trocar os links abaixo.
  social: {
    instagram: "https://instagram.com/dnafarma",
    facebook: "https://facebook.com/dnafarma",
    linkedin: "https://linkedin.com/company/dna-farma",
    tiktok: "https://tiktok.com/@dnafarma",
    youtube: "https://youtube.com/@dnafarma",
  },
} as const;

export const mainNav = [
  { href: "/", label: "Início" },
  { href: "/farmaceutico", label: "O Farmacêutico" },
  { href: "/servicos", label: "Serviços Farmacêuticos" },
  { href: "/prescritores", label: "Área do Prescritor" },
  { href: "/conteudo", label: "Conteúdo Educativo" },
  { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { href: "/contato", label: "Contato" },
] as const;

export const footerNav = [
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/contato", label: "Contato" },
  { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
] as const;

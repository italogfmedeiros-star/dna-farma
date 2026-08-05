# DNA Farma — Site Institucional

Site institucional da DNA Farma (Fase 14 — Presença Digital do projeto de
implantação). Ver o documento mestre em [`../00-projeto-mestre.md`](../00-projeto-mestre.md)
e a documentação da frente digital em [`../14-digital/`](../14-digital/).

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- TypeScript
- Tailwind CSS v4 (+ `@tailwindcss/typography`)
- Deploy alvo: [Vercel](https://vercel.com)

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # e preencha os valores reais
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Ambiente de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção localmente |
| `npm run lint` | ESLint |

## Estrutura

```
src/
  app/            Rotas (App Router) — uma pasta por página
  components/      Header, Footer, CookieConsent, DraftNotice, PageHeader
  lib/site.ts      Configuração central (nome, contato, redes — hoje com placeholders)
```

## ⚠️ Antes de publicar em produção

Este scaffold nasceu com **conteúdo institucional de rascunho**, sinalizado
visualmente pelo componente `DraftNotice` em cada página. Antes de tirar o
site do ar de homologação:

1. Substituir todos os placeholders de `src/lib/site.ts` (endereço, telefone,
   e-mail, redes sociais, domínio) pelos dados reais — ver
   [`../14-digital/ativos-digitais.md`](../14-digital/ativos-digitais.md).
2. Ter a Política de Comunicação e Compliance Digital aprovada
   ([`../14-digital/politica-compliance.md`](../14-digital/politica-compliance.md), `DIG-05`).
3. Ter cada texto revisado e aprovado pelo RT — remover o `DraftNotice`
   correspondente somente após o registro de aprovação.
4. Trocar `robots: { index: false }` (em `src/app/layout.tsx`) e
   `SITE_READY_FOR_INDEXING` (env var) para permitir indexação.
5. Ter a Política de Privacidade (`/privacidade`) revisada pelo Jurídico/DPO
   (`TI-04`) — o texto atual é uma minuta técnica, não é aconselhamento jurídico.

## Deploy (Vercel)

Ver instruções completas na resposta do assistente / mensagem de onboarding.
Resumo:

1. `vercel login` (ou conectar o repositório Git pelo dashboard).
2. `vercel link` na pasta `site/`.
3. Configurar `NEXT_PUBLIC_SITE_URL` e `SITE_READY_FOR_INDEXING` nas
   Environment Variables do projeto na Vercel.
4. `vercel --prod` para o primeiro deploy, ou push para a branch conectada.
5. Apontar o DNS do domínio (`../14-digital/ativos-digitais.md`) para a Vercel.

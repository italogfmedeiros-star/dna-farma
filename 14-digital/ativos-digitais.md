# Inventário de Ativos Digitais — DNA Farma

**Responsável:** Italo
**Vinculado a:** `DIG-01`, `DIG-02`, `DIG-03` · Risco `R-016`, `R-017` · Marco `MD1` (14/08/2026)

> ⚠️ Regra de ouro: **todo ativo abaixo deve ser registrado em nome do CNPJ da DNA Farma, nunca em conta pessoal** (critério de aceite da Fase 14, ver `00-projeto-mestre.md` Seção 8.8).

## Status geral

🔴 Nenhum ativo auditado/reservado ainda — preencher esta tabela é a ação nº 1 da Semana 1 (`00-projeto-mestre.md`, Seção 14, item 1). Prazo: **07/08/2026**.

## 1. Domínio

| Item | Disponível? | Registrado? | Titular (deve ser CNPJ) | Registrar.br / Registrador | Data | Observação |
|---|---|---|---|---|---|---|
| `dnafarma.com.br` | ⬜ a checar | ⬜ | — | — | — | Domínio principal |
| `dnafarma.com` | ⬜ a checar | ⬜ | — | — | — | Defensivo |
| Variações (`dna-farma`, `dnafarmacia`, erros comuns de digitação) | ⬜ a checar | ⬜ | — | — | — | Defensivo, avaliar custo-benefício |

## 2. E-mail corporativo

| Item | Status | Provedor | Domínio |
|---|---|---|---|
| `contato@dnafarma.com.br` | ⬜ | A definir (Google Workspace / Microsoft 365) | — |
| `rt@dnafarma.com.br` | ⬜ | — | — |
| Demais contas por colaborador | ⬜ | — | — |

## 3. Redes sociais (@handles)

| Plataforma | @handle desejado | Disponível? | Reservado? | Titular da conta | Data |
|---|---|---|---|---|---|
| Instagram | `@dnafarma` | ⬜ | ⬜ | — | — |
| Facebook | `dnafarma` | ⬜ | ⬜ | — | — |
| TikTok | `@dnafarma` | ⬜ | ⬜ | — | — |
| YouTube | `@dnafarma` | ⬜ | ⬜ | — | — |
| LinkedIn (página empresa) | `dna-farma` | ⬜ | ⬜ | — | — |
| X (Twitter) | `@dnafarma` | ⬜ | ⬜ | — | — |

## 4. Google Business Profile

| Item | Status |
|---|---|
| Perfil criado | ⬜ |
| Verificação (postal/telefone) | ⬜ |
| Categoria: Farmácia de manipulação | ⬜ |
| Endereço, horário, telefone | ⬜ |

## 5. WhatsApp Business

| Item | Status |
|---|---|
| Número dedicado | ⬜ |
| WhatsApp Business Platform (API) | ⬜ |
| Vínculo com ERP (`ERP-04`, `DIG-13`) | ⬜ |

## 6. Hospedagem e infraestrutura do site

| Item | Status | Detalhe |
|---|---|---|
| Repositório de código | ✅ | Local, ver [`../site/`](../site/) — Next.js + TypeScript + Tailwind |
| Conta Vercel (organização DNA Farma) | ⬜ | Criar sob e-mail corporativo, não pessoal |
| Projeto Vercel conectado ao domínio | ⬜ | — |
| DNS apontado (registros A/CNAME) | ⬜ | — |
| SSL | ⬜ | Automático via Vercel após DNS apontado |

## 7. Marca (INPI)

| Item | Status | Vinculado a |
|---|---|---|
| Busca de anterioridade "DNA Farma" | ⬜ | `JUR-11` |
| Depósito classe 05 (produtos farmacêuticos) | ⬜ | `JUR-11` |
| Depósito classe 35 (publicidade/comércio) | ⬜ | `JUR-11` |

## 8. Cofre de credenciais

| Item | Status |
|---|---|
| Ferramenta definida (ex: 1Password/Bitwarden empresarial) | ⬜ |
| Todos os acessos acima documentados no cofre | ⬜ |
| Acesso restrito e sob custódia da empresa (não pessoal) | ⬜ |

---
> Fonte de verdade do projeto: [`../00-projeto-mestre.md`](../00-projeto-mestre.md), Seção 8.2-A e 8.8.

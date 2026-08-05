# DNA FARMA — PROJETO DE IMPLANTAÇÃO
## Documento Mestre do Projeto (PMO) — Baseline v2.0

| Campo | Valor |
|---|---|
| Empresa | **DNA Farma** — Farmácia de Manipulação Magistral |
| Documento | `00-projeto-mestre.md` |
| Versão | 2.0 |
| Alterações v2.0 | Inclusão da razão de marca **DNA Farma**; criação da **FASE 14 — Presença Digital** (site + mídias sociais) sob gestão do Consultor de TI |
| Data-base (D-0) | 04/08/2026 |
| Meta de inauguração (Go-Live) | 03/11/2026 (D+91 / 13 semanas) |
| Status do projeto | 🟡 Em estruturação — **baseline condicionada a validações críticas** |
| Diretor de Implantação | Claude (PMO / Consultoria Sênior) |
| Consultor de TI e Presença Digital | Italo |
| Patrocinador | Direção DNA Farma (a nominar) |
| Próxima revisão | Semanal — toda segunda-feira |

---

# 1. RESUMO EXECUTIVO

Este documento estabelece a **baseline de governança** do projeto de implantação da **DNA Farma**, farmácia de manipulação magistral, com meta de inauguração em 3 meses (03/11/2026).

O projeto foi estruturado em **14 fases**, com governança de PMO, registro de riscos, registro de decisões, backlog de tarefas rastreável e dashboard de acompanhamento.

**Quatro conclusões críticas desta análise:**

**1. O prazo de 3 meses é fisicamente viável para a obra, a tecnologia e a equipe — mas NÃO é controlável para o licenciamento sanitário.** A AFE da ANVISA tem prazo de análise informado pelo mercado entre 60 e 120 dias úteis, e a AE só pode ser peticionada **após** a concessão da AFE.

**2. Recomendo o modelo de Go-Live em duas ondas** (Seção 4), separando "inauguração comercial" de "liberação produtiva". Preserva a data-marco de 03/11/2026 sem criar risco sanitário.

**3. Existe uma janela regulatória estratégica na cannabis medicinal.** A RDC nº 1.015/2026, em vigor desde 04/05/2026, <cite index="16-1">abre caminho para a manipulação magistral de canabidiol isolado em farmácias, condicionada à publicação de norma específica da Anvisa sobre boas práticas de manipulação</cite>. Decidir **agora** custa pouco; decidir depois da obra custa obra parada.

**4. ⚠️ A frente digital da DNA Farma é uma frente de RISCO SANITÁRIO, não apenas de marketing.** Esta é a principal descoberta da v2.0. A publicidade de fórmulas magistrais é proibida no Brasil, a ANVISA está em ciclo ativo de fiscalização de sites e redes sociais de farmácias magistrais, e sanções em 2026 incluíram suspensão de comercialização e de divulgação. Detalhamento na Seção 4-B. **Consequência de governança: nenhuma publicação da DNA Farma vai ao ar sem aprovação prévia do Farmacêutico RT.**

**Estado atual:** 17 perguntas bloqueantes precisam ser respondidas antes que o cronograma detalhado seja congelado (Seção 10). Nenhuma hipótese foi assumida sem sinalização explícita.

---

# 2. DASHBOARD DO PROJETO

**Posição em: 04/08/2026 (D-0)**

| Indicador | Valor |
|---|---|
| **Percentual geral concluído** | 0% (baseline) |
| **Fase atual** | FASE 1 — Planejamento Estratégico |
| **Dias restantes para Go-Live** | 91 dias corridos / ~63 dias úteis |
| **Semanas restantes** | 13 |
| **Total de tarefas mapeadas** | 62 |
| ✅ Concluídas | 0 |
| 🔵 Em andamento | 4 |
| ⚪ Não iniciadas | 58 |
| 🔴 Bloqueadas | 0 |
| **Riscos ativos** | 18 (sendo **5 críticos**) |
| **Bloqueios ativos** | 0 |
| **Itens aguardando resposta** | 17 |
| **Saúde do projeto** | 🟡 **ATENÇÃO** — prazo regulatório é o fator dominante |

**Próximas 4 entregas:**

| # | Entrega | Prazo | Responsável |
|---|---|---|---|
| 1 | Diagnóstico regulatório (status real de CNPJ/AFE/AE/LTA/VISA) | 08/08/2026 | Direção + Jurídico |
| 2 | Auditoria e reserva de ativos digitais (domínio, @handles, INPI) | 07/08/2026 | Italo + Jurídico |
| 3 | Definição dos grupos de atividade (RDC 67, Art. 2º) | 11/08/2026 | Direção + RT |
| 4 | Congelamento da baseline de cronograma | 14/08/2026 | PMO |

---

# 3. FUNDAMENTAÇÃO REGULATÓRIA

## 3.1 Norma-mãe

A **RDC nº 67/2007** da ANVISA permanece a norma vigente de Boas Práticas de Manipulação. <cite index="17-1">Ela classifica a farmácia conforme 6 grupos de atividades, de acordo com a complexidade do processo de manipulação e das características dos insumos utilizados</cite>.

⚠️ Em 30 de junho de 2025 <cite index="20-1">a Anvisa aprovou a proposta de revisão do Anexo IV da RDC nº 67/2007, com a nova versão a ser construída a partir de Análise de Impacto Regulatório e Consulta Pública</cite>. O projeto deve monitorar essa revisão.

## 3.2 Requisitos de habilitação

<cite index="21-1">As Boas Práticas de Manipulação exigem que a farmácia esteja regularizada nos órgãos de Vigilância Sanitária competentes, atenda ao Regulamento Técnico e seus anexos aplicáveis, possua o Manual de Boas Práticas de Manipulação, possua AFE expedida pela ANVISA e possua Autorização Especial quando manipular substâncias sujeitas a controle especial</cite>.

## 3.3 Matriz de licenças

| # | Licença | Órgão | Obrigatória? | Observação |
|---|---|---|---|---|
| L1 | CNPJ + Inscrição Estadual/Municipal | RFB / SEFAZ / Prefeitura | Sim | Pré-requisito de tudo |
| L2 | Alvará de Localização e Funcionamento | Prefeitura | Sim | Depende de zoneamento |
| L3 | AVCB / CLCB (Bombeiros) | CBM Estadual | Sim | — |
| L4 | Licença Sanitária (VISA local) | VISA municipal/estadual | Sim | Exige vistoria presencial |
| L5 | **AFE — Autorização de Funcionamento** | ANVISA | Sim | ⚠️ **Caminho crítico** |
| L6 | **AE — Autorização Especial** | ANVISA | Se manipular controlados | ⚠️ Só peticionável **após** AFE |
| L7 | Certidão de Regularidade Técnica (CRT) | CRF Estadual | Sim | Vinculada ao RT |
| L8 | LTA — Laudo Técnico de Avaliação | Prefeitura/VISA | Sim (manipulação) | Projeto arquitetônico-sanitário |
| L9 | Licença Ambiental / PGRSS | Órgão ambiental | Sim | Resíduos de serviços de saúde |
| L10 | Habilitação SNGPC | ANVISA | Se controlados | Escrituração eletrônica |
| L11 | **Registro de marca "DNA Farma"** | INPI | Recomendado | Classe 05 e 35 — proteção do ativo |

**Prazos de referência de mercado (calibragem de risco, não compromisso):**
- <cite index="10-1">O protocolo de AFE e AE no portal da ANVISA tem prazo de análise informado entre 60 e 120 dias úteis</cite>.
- <cite index="10-1">Para farmácia com manipulação magistral, referências apontam 120 a 200 dias para o licenciamento completo, em função da AFE somada à adequação física mais complexa e ao Manual de Boas Práticas mais detalhado</cite>.

## 3.4 Oportunidade regulatória (cannabis)

<cite index="16-1">A RDC nº 1.015/2026, em vigor desde 04/05/2026, atualizou os critérios de prescrição, dispensação e controle sanitário de produtos à base de Cannabis em farmácias e drogarias, substituindo a RDC nº 327/2019</cite>. A manipulação magistral de CBD isolado <cite index="16-1">ainda depende da publicação de norma específica da Anvisa sobre boas práticas de manipulação</cite>.

---

# 4. DECISÃO ESTRUTURANTE: ESTRATÉGIA DE GO-LIVE

## Cenário A — Go-Live único (manipulação própria em 03/11/2026)

| | |
|---|---|
| **Viabilidade** | 🔴 Baixa, salvo se AFE já protocolada há ≥45 dias |
| **Vantagem** | Narrativa de inauguração completa |
| **Risco** | Data escorrega por fator externo; equipe ociosa; IFA com validade correndo; queima de investimento em mídia |

## Cenário B — Go-Live em duas ondas ✅ **RECOMENDADO**

| Onda | Data | Escopo |
|---|---|---|
| **Onda 1 — Inauguração comercial** | 03/11/2026 | Loja aberta, marca DNA Farma no mercado, atendimento, captação de receitas, dispensação de industrializados/dermocosméticos, **manipulação executada por farmácia parceira homologada** |
| **Onda 2 — Liberação produtiva** | Conforme AFE/AE + vistoria VISA | Migração da produção para o laboratório próprio, com equipe já treinada |

| | |
|---|---|
| **Viabilidade** | 🟢 Alta |
| **Vantagem** | A data-marco de 03/11 é 100% controlável por nós; equipe treina no fluxo real; caixa começa a girar |
| **Risco** | Exige contrato com parceiro e clareza regulatória sobre o arranjo |
| **Pré-requisito** | Parecer jurídico formal (`JUR-04`) |

## Cenário C — Go-Live deslocado

| | |
|---|---|
| **Viabilidade** | 🟢 Alta / **Risco:** contraria o prazo fixo da Direção |

> **DECISÃO PENDENTE — `DEC-001`.** O PMO recomenda o **Cenário B**, condicionado ao parecer jurídico.

---

# 4-B. DECISÃO ESTRUTURANTE: MODELO DE COMUNICAÇÃO DIGITAL ⚠️

**Esta seção existe porque a frente digital da DNA Farma opera sob restrição legal severa. Ela precisa ser lida pela Direção, pelo Marketing e pelo RT antes de qualquer briefing de agência.**

## 4-B.1 O que a lei impede

<cite index="27-1">Conforme a RDC 67/2007, não é permitida a exposição ao público de produtos manipulados com objetivo de propaganda, publicidade ou promoção. As farmácias podem fornecer material informativo com os nomes das substâncias usadas na manipulação de fórmulas</cite>.

<cite index="32-1">Em decisão de 2025, o TRF4 restabeleceu a proibição de divulgar e anunciar preparações magistrais com nomes comerciais ou indicações terapêuticas, destacando que farmácias de manipulação não podem atuar como fabricantes industriais nem rotular produtos com marcas próprias, e que a atribuição de nomes às fórmulas constitui propaganda vedada pela RDC nº 67/2007</cite>.

<cite index="27-1">A RDC 96/2008 regula a propaganda de medicamentos e vale para todos os meios de comunicação, incluindo as redes sociais; e, conforme o Código de Ética, o farmacêutico deve supervisionar os conteúdos expostos pelo estabelecimento com o qual mantém vínculo profissional</cite>.

## 4-B.2 A fiscalização está ativa — e recente

Em 27/04/2026 <cite index="33-1">duas resoluções da ANVISA determinaram a suspensão da venda e da propaganda de medicamentos produzidos por farmácias de manipulação</cite>. Entre os fundamentos citados nos casos: <cite index="28-1">propaganda e comercialização de produtos padronizados e não individualizados por meio de site e redes sociais, apresentados ao público de maneira semelhante à venda de produtos industrializados, com utilização de nomes comerciais nas preparações</cite>.

**Tradução operacional para a DNA Farma:** um único post no Instagram com nome fantasia de fórmula, promessa terapêutica ou preço de manipulado pode gerar processo sanitário. O risco digital não é reputacional — é sanitário e recai sobre o RT e sobre a empresa.

## 4-B.3 Os três modelos possíveis

| | **Modelo 1 — Vitrine de produto** | **Modelo 2 — Autoridade e conteúdo** ✅ | **Modelo 3 — Presença institucional mínima** |
|---|---|---|---|
| **O que faz** | Divulga fórmulas, nomes, preços, "kits" | Conteúdo educativo, institucional, serviços farmacêuticos, relacionamento com prescritores | Site institucional simples + Google Business Profile |
| **Risco sanitário** | 🔴 Alto — é exatamente o que a ANVISA autuou em 2026 | 🟢 Baixo, com aprovação do RT | 🟢 Mínimo |
| **Potência comercial** | Alta no curto prazo | Alta e sustentável | Baixa |
| **Recomendação PMO** | ❌ Vedado | ✅ **Adotar** | Só se não houver equipe de conteúdo |

**Recomendação:** **Modelo 2**. A DNA Farma constrói autoridade — conteúdo sobre saúde individualizada, papel do farmacêutico, ciência por trás da manipulação, relacionamento com prescritores — sem nunca anunciar fórmula, nome fantasia de preparação, promessa terapêutica ou preço de manipulado ao público final.

> **DECISÃO PENDENTE — `DEC-005`.** Aprovação do Modelo 2 como política de comunicação da DNA Farma.

## 4-B.4 Regra de ouro da governança digital

**Nenhuma peça vai ao ar sem `Aprovado-RT`.** Isso vira um fluxo obrigatório no processo de conteúdo (`DIG-09`), com registro auditável de quem aprovou o quê e quando. Se a VISA questionar uma publicação daqui a 8 meses, precisamos ter o rastro.

---

# 5. GOVERNANÇA DO PROJETO

## 5.1 Estrutura

```
                    ┌─────────────────┐
                    │ DIREÇÃO DNA     │  (Patrocinador / Investimento)
                    │     FARMA       │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │   PMO / DIREÇÃO │  (Claude — cronograma, riscos, documentação)
                    │  DE IMPLANTAÇÃO │
                    └────────┬────────┘
        ┌──────────┬─────────┼─────────┬──────────┬──────────┐
        │          │         │         │          │          │
   ┌────┴───┐ ┌────┴────┐ ┌──┴─────┐ ┌─┴──────┐ ┌─┴─────┐ ┌──┴─────┐
   │TÉCNICO │ │TI+DIGITAL│ │JURÍDICO│ │FINANC. │ │  RH   │ │COMERC. │
   │  (RT)  │ │ (Italo)  │ │        │ │        │ │       │ │        │
   └────┬───┘ └────┬─────┘ └────────┘ └────────┘ └───────┘ └────────┘
        │          │
        └──────────┘
     ⚠️ Vínculo obrigatório:
     RT aprova todo conteúdo digital
     antes da publicação
```

## 5.2 Papéis e responsabilidades

| Papel | Responsabilidade primária | Ocupante |
|---|---|---|
| Patrocinador | Investimento, decisões estratégicas, desempate | Direção DNA Farma |
| Diretor de Implantação (PMO) | Cronograma, riscos, documentação, cobrança | Claude |
| Farmacêutico Responsável Técnico (RT) | Conformidade sanitária, Manual BPM, POPs, CRF, **aprovação de conteúdo digital** | ⚠️ **A DEFINIR** |
| **Consultor de TI e Presença Digital** | Infra, ERP, integrações, automações, IA, BI, LGPD, segurança, **site, mídias sociais, ativos digitais, CRM digital** | **Italo** |
| Jurídico | Licenças, contratos, societário, regulatório, INPI | A definir |
| Financeiro | Fluxo de caixa, precificação, capital de giro | A definir |
| RH | Recrutamento, admissões, treinamentos, cultura | A definir |
| Comercial/Marketing | Prescritores, CRM, lançamento, pós-venda | A definir |

⚠️ A ausência do RT formalmente definido é o segundo maior risco do projeto — e agora também **bloqueia a operação digital**, já que não há aprovação de conteúdo sem RT. Ver `R-002`.

## 5.3 Ritos

| Rito | Frequência | Duração | Participantes | Saída |
|---|---|---|---|---|
| Daily de implantação | Diária (D-30 em diante) | 15 min | Líderes de frente | Bloqueios do dia |
| Weekly de status | Semanal (segunda) | 60 min | Todos os líderes | Dashboard atualizado |
| **Comitê Editorial** | **Semanal (quinta)** | **30 min** | **Italo + RT + Marketing** | **Calendário aprovado com `Aprovado-RT`** |
| Comitê Executivo | Quinzenal | 90 min | Direção + PMO | Decisões e investimentos |
| War Room | Diária (últimas 2 semanas) | 30 min | Todos | Checklist de Go-Live |
| Retrospectiva de fase | Ao fim de cada fase | 45 min | Frente envolvida | Lições aprendidas |

## 5.4 Regras de gestão

1. Toda tarefa tem **ID, responsável, prazo, status e critério de aceite**.
2. Nenhuma fase é concluída sem **checklist 100% + evidência documental**.
3. Toda decisão vira registro `DEC-xxx` e **não é reaberta** sem novo registro.
4. Todo risco tem **probabilidade, impacto, mitigação e responsável**.
5. Todo bloqueio é escalado ao Comitê em **até 24h**.
6. Documentação é entregável, não subproduto.
7. **Nenhum conteúdo digital é publicado sem aprovação registrada do RT.**

---

# 6. ARQUITETURA DE FASES

## 6.1 Visão macro

| Fase | Nome | Janela | Peso | Status |
|---|---|---|---|---|
| F1 | Planejamento Estratégico | S1–S2 | 5% | 🔵 Em andamento |
| F2 | Jurídico e Regulatório | S1–S8 | 11% | 🔵 Em andamento |
| F3 | Infraestrutura Física | S1–S8 | 13% | 🔵 Em andamento |
| F4 | Laboratório e Qualidade | S3–S11 | 15% | ⚪ Não iniciada |
| F5 | Tecnologia (Infra + Segurança) | S2–S9 | 7% | ⚪ Não iniciada |
| F6 | ERP e Integrações | S2–S10 | 11% | ⚪ Não iniciada |
| F7 | Financeiro | S2–S10 | 6% | ⚪ Não iniciada |
| F8 | Recursos Humanos | S2–S9 | 7% | ⚪ Não iniciada |
| F9 | Treinamentos | S8–S12 | 6% | ⚪ Não iniciada |
| F10 | Processos e Operação | S4–S12 | 7% | ⚪ Não iniciada |
| F11 | Pré-inauguração | S11–S13 | 4% | ⚪ Não iniciada |
| F12 | Inauguração | S13 | 2% | ⚪ Não iniciada |
| F13 | Pós Go-Live | D+1 a D+90 | 1% | ⚪ Não iniciada |
| **F14** | **Presença Digital (Site + Social)** | **S1–S13** | **5%** | 🔵 **Em andamento** |

**Observação de método:** as fases **não são sequenciais**. Em 13 semanas só há viabilidade com paralelismo agressivo. Sequencial é apenas o **caminho crítico** (Seção 7).

A **F14 começa na Semana 1** — mais cedo que quase todas as outras — por dois motivos: (a) ativos digitais são bens escassos e disputados (domínio e @handles podem ser tomados por terceiros a qualquer momento); (b) a construção de audiência exige tempo de maturação, e chegar em 03/11 com perfil zerado desperdiça o investimento de inauguração.

## 6.2 Linha do tempo (13 semanas)

```
SEMANA        1  2  3  4  5  6  7  8  9 10 11 12 13
              ────────────────────────────────────────
F1 Estrat.   ███
F2 Jurídico  ████████████████████████
F3 Infra     ███████████████████████████
F4 Lab/Qual.       ████████████████████████████████
F5 TI           ██████████████████████████
F6 ERP          ████████████████████████████████
F7 Financeiro   ████████████████████████████████
F8 RH           ██████████████████████████
F9 Treinam.                          ████████████████
F10 Processos         ██████████████████████████████
F11 Pré-inaug.                             ██████████
F12 Inaug.                                        ███
F14 Digital  ███████████████████████████████████████
              ────────────────────────────────────────
MARCOS        ▲     ▲        ▲            ▲       ★
              M1    MD1      M2           M3    GO-LIVE
```

| Marco | Nome | Data | Critério |
|---|---|---|---|
| M1 | Baseline congelada | 14/08/2026 | 17 perguntas respondidas + `DEC-001` e `DEC-005` tomadas |
| **MD1** | **Ativos digitais garantidos** | **14/08/2026** | Domínio, @handles, INPI protocolado, e-mail corporativo |
| M2 | Obra concluída / equipe contratada | 25/09/2026 | Habite-se técnico + 100% dos cargos preenchidos |
| M3 | Sistemas em produção + simulação | 16/10/2026 | ERP operando + site no ar + operação-piloto |
| ★ | **Go-Live** | **03/11/2026** | Checklist de inauguração 100% |

---

# 7. CAMINHO CRÍTICO

```
Definição do RT
      ↓
Definição dos grupos de atividade (RDC 67)
      ↓
Projeto arquitetônico-sanitário (LTA)
      ↓
Aprovação LTA + Obra do laboratório
      ↓
Instalação e qualificação de equipamentos (QI/QO/QD)
      ↓
Manual de BPM + POPs assinados pelo RT
      ↓
Vistoria VISA → Licença Sanitária
      ↓
AFE ANVISA ──────► AE ANVISA ──────► SNGPC
      ↓
GO-LIVE PRODUTIVO
```

**Leitura do PMO:** os quatro primeiros elos estão sob nosso controle e devem ser resolvidos até 14/08. Os três últimos não estão — daí a recomendação do Cenário B.

**A F14 não está no caminho crítico do Go-Live produtivo, mas está no caminho crítico do Go-Live comercial.** Sem audiência e sem site no ar, a inauguração de 03/11 abre para uma sala vazia.

---

# 8. FASE 14 — PRESENÇA DIGITAL DA DNA FARMA

**Responsável:** Italo (Consultor de TI e Presença Digital)
**Aprovador de conteúdo:** Farmacêutico RT
**Janela:** S1 a S13 (contínua)

## 8.1 Objetivo

Construir e operar a presença digital da DNA Farma — site institucional, mídias sociais, canais de relacionamento e ativos de marca — com **conformidade sanitária como requisito de projeto, não como revisão posterior**, gerando autoridade, captação de prescritores e demanda qualificada até a inauguração.

## 8.2 Escopo

**A. Ativos digitais e infraestrutura**
- Registro de domínio (`.com.br` + variações defensivas)
- DNS, SSL, hospedagem (stack recomendada: Next.js + Vercel)
- E-mail corporativo e identidade de usuários
- Reserva de `@handles` em Instagram, Facebook, TikTok, YouTube, LinkedIn, X
- Google Business Profile (crítico para busca local)
- WhatsApp Business Platform

**B. Site institucional**
- Arquitetura de informação: quem somos, o farmacêutico, serviços farmacêuticos, área do prescritor, conteúdo educativo, contato, trabalhe conosco
- SEO local (a busca de farmácia magistral é predominantemente geográfica)
- Performance e acessibilidade
- **Camada LGPD:** banner de consentimento, política de privacidade, aviso específico sobre dados de saúde como dado sensível
- **Zero e-commerce de manipulados.** Se houver venda online, restrita a industrializados e dermocosméticos, com prescrição obrigatória onde aplicável

**C. Mídias sociais**
- Pilares de conteúdo: educação em saúde, bastidores da qualidade, o papel do farmacêutico, ciência da individualização, institucional
- Tom de voz e manual de marca digital DNA Farma
- Calendário editorial com fluxo de aprovação do RT
- Política de resposta a comentários e DMs (⚠️ **jamais orientação farmacêutica individualizada em canal público**)
- Plano de crise digital

**D. Relacionamento e conversão**
- Canal do prescritor (área restrita, materiais técnicos)
- CRM integrado ao ERP
- Automação de WhatsApp (aviso de fórmula pronta, pós-venda, reposição)
- Programa de recompra e fidelização

**E. Compliance digital**
- Checklist de conformidade por peça (RDC 67/2007, RDC 96/2008, Resolução CFF de propaganda)
- Registro auditável de aprovações
- Monitoramento de menções e proteção de marca

## 8.3 Pré-requisitos

| # | Pré-requisito | Status |
|---|---|---|
| 1 | Identidade visual DNA Farma finalizada | ✓ Concluído |
| 2 | Farmacêutico RT definido (aprovador de conteúdo) | ⚠️ Pendente |
| 3 | `DEC-005` — modelo de comunicação aprovado | ⏳ Pendente |
| 4 | Definição do portfólio e público-alvo (`EST-03`, `EST-04`) | ⏳ Pendente |

## 8.4 Entregáveis

| # | Entregável | Prazo |
|---|---|---|
| E1 | Inventário e reserva de ativos digitais | 14/08 |
| E2 | Manual de Marca Digital DNA Farma | 04/09 |
| E3 | **Política de Comunicação e Compliance Digital** | 11/09 |
| E4 | Site institucional no ar | 09/10 |
| E5 | Perfis sociais ativos com conteúdo rodando | 18/09 |
| E6 | Google Business Profile verificado | 09/10 |
| E7 | WhatsApp Business + automações | 16/10 |
| E8 | Campanha de pré-lançamento | 23/10 |
| E9 | Painel de KPIs digitais | 30/10 |

## 8.5 Cronograma editorial de lançamento

| Etapa | Janela | Objetivo |
|---|---|---|
| **Fundação** | S1–S4 | Ativos garantidos, marca digital definida, política de compliance escrita |
| **Aquecimento** | S5–S8 | Perfis abertos, conteúdo educativo, bastidores da construção (obra é excelente conteúdo e é 100% permitido) |
| **Autoridade** | S9–S11 | Apresentação do RT e da equipe, conteúdo técnico, aproximação com prescritores |
| **Contagem regressiva** | S12–S13 | Teaser de inauguração, convite, ativação local |
| **Sustentação** | Pós Go-Live | Rotina editorial, CRM, recompra |

## 8.6 Indicadores (KPIs digitais)

| KPI | Meta inicial | Frequência |
|---|---|---|
| Seguidores por canal | A definir pós `DEC-005` | Semanal |
| Taxa de engajamento | ≥ 3% | Semanal |
| Sessões no site | Crescimento M/M | Semanal |
| Posição no Google Business (busca local) | Top 3 no bairro | Mensal |
| Leads via WhatsApp | A definir | Semanal |
| Prescritores cadastrados via canal digital | A definir | Mensal |
| **Peças publicadas sem aprovação do RT** | **0 — tolerância zero** | **Semanal** |
| Tempo médio de resposta em DM/WhatsApp | < 15 min (horário comercial) | Diária |

## 8.7 Riscos específicos da fase

Ver `R-015` a `R-018` na Seção 9.

## 8.8 Critérios de aceite

- [ ] Todos os ativos digitais registrados em nome do CNPJ da DNA Farma (nunca em conta pessoal)
- [ ] Política de Comunicação e Compliance Digital assinada pelo RT e pela Direção
- [ ] 100% das peças publicadas com registro de aprovação
- [ ] Site com política de privacidade e banner LGPD funcionais
- [ ] Nenhuma menção pública a nome fantasia de fórmula, promessa terapêutica ou preço de manipulado
- [ ] Acessos e credenciais documentados e sob custódia da empresa

---

# 9. REGISTRO DE RISCOS

Escala: Probabilidade (B/M/A) × Impacto (B/M/A). Criticidade: 🔴 Crítico / 🟠 Alto / 🟡 Médio.

| ID | Risco | P | I | Crit. | Mitigação | Resp. |
|---|---|---|---|---|---|---|
| R-001 | AFE/AE não concedidas até 03/11 | A | A | 🔴 | Cenário B; protocolar imediatamente; despachante especializado; acompanhamento semanal | Jurídico |
| R-002 | RT não definido / não contratado a tempo | M | A | 🔴 | Contratação nº 1, antes de qualquer outra | RH + Direção |
| R-003 | Reprovação em vistoria da VISA | M | A | 🔴 | Pré-auditoria simulada em S10; consultoria de BPM; Guia de Inspeção ANVISA | RT |
| R-004 | Atraso de obra do laboratório | M | A | 🔴 | Contrato com multa; medição semanal; fornecedor com experiência magistral | Infra |
| **R-015** | **Autuação sanitária por conteúdo digital irregular** | **M** | **A** | 🔴 | **Modelo 2 (`DEC-005`); aprovação obrigatória do RT; checklist por peça; treinamento da equipe de conteúdo** | **Italo + RT** |
| R-005 | Equipamentos com lead time longo / importação | A | A | 🟠 | Levantar lead times na S1; comprar críticos primeiro; plano B de locação | Compras |
| R-006 | ERP não parametrizado a tempo | M | A | 🟠 | Congelar escopo em S4; homologação em S6; carga em S9 | TI |
| R-007 | Equipe sem experiência magistral | A | M | 🟠 | Plano de treinamento (F9); contratar 1 manipulador sênior | RH |
| R-008 | Qualificação de fornecedores de IFA incompleta | M | A | 🟠 | Iniciar em S3; exigir CoA e dossiê | RT |
| R-009 | Capital de giro subdimensionado | M | A | 🟠 | Fluxo de caixa 12 meses; reserva de 6 meses de custo fixo | Financeiro |
| R-010 | Baixa demanda inicial (prescritores não engajados) | A | M | 🟠 | Frente de relacionamento iniciando em S6, não em S13 | Comercial |
| R-011 | Não conformidade LGPD (dado de saúde = sensível) | M | A | 🟠 | Programa LGPD desde F5; DPO nomeado; mapeamento antes do ERP em produção | Italo |
| **R-016** | **Domínio ou @handle "DNA Farma" já ocupado ou tomado por terceiro** | **M** | **M** | 🟠 | **Auditoria e reserva imediata na S1 (`DIG-01`); registro INPI em paralelo** | **Italo** |
| **R-017** | **Ativos digitais registrados em conta pessoal, não da empresa** | **M** | **A** | 🟠 | **Todos os registros no CNPJ da DNA Farma; cofre de credenciais corporativo; inventário formal** | **Italo** |
| R-012 | Mudança regulatória (revisão do Anexo IV da RDC 67) | M | M | 🟡 | Monitoramento quinzenal ANVISA/CFF | RT |
| R-013 | Dependência de pessoa-chave única (bus factor) | M | M | 🟡 | Documentação obrigatória; backup por frente | PMO |
| R-014 | Scope creep durante a obra | A | M | 🟡 | Congelamento em M1; toda mudança vira `DEC-xxx` com impacto | PMO |
| **R-018** | **Orientação farmacêutica individualizada prestada em canal público (comentário/DM)** | **M** | **M** | 🟡 | **Política de resposta padronizada; treinamento de social media; redirecionamento para canal privado com farmacêutico** | **Italo + RT** |

---

# 10. BACKLOG DE TAREFAS

Status: ⚪ Não iniciado · 🔵 Em andamento · 🔴 Bloqueado · ✅ Concluído · ⛔ Cancelado

## FASE 1 — Planejamento Estratégico

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| EST-01 | Responder as 17 perguntas bloqueantes (Seção 11) | Direção | 🔥 | 🔵 | — | 08/08 |
| EST-02 | Definir Missão, Visão, Valores e posicionamento DNA Farma | Direção | Alta | ⚪ | — | 12/08 |
| EST-03 | Definir portfólio inicial (formas farmacêuticas e linhas) | Direção + RT | 🔥 | ⚪ | EST-01 | 11/08 |
| EST-04 | Definir público-alvo e especialidades médicas foco | Comercial | Alta | ⚪ | EST-02 | 14/08 |
| EST-05 | Definir grupos de atividade conforme RDC 67, Art. 2º | RT + Direção | 🔥 | ⚪ | EST-03 | 11/08 |
| EST-06 | Decidir Cenário de Go-Live (`DEC-001`) | Direção | 🔥 | ⚪ | JUR-04 | 14/08 |
| EST-07 | Definir OKRs do primeiro ano | Direção + PMO | Média | ⚪ | EST-02 | 21/08 |
| EST-08 | Congelar baseline do projeto (M1) | PMO | Alta | ⚪ | EST-01..06 | 14/08 |

## FASE 2 — Jurídico e Regulatório

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| JUR-01 | Levantar status real das licenças (matriz L1–L11) | Jurídico | 🔥 | 🔵 | — | 08/08 |
| JUR-02 | Validar CNAE, contrato social e objeto social | Jurídico | Alta | ⚪ | — | 12/08 |
| JUR-03 | Protocolar/acompanhar AFE ANVISA | Jurídico | 🔥 | ⚪ | JUR-01 | 18/08 |
| JUR-04 | Parecer sobre viabilidade do Cenário B | Jurídico | 🔥 | ⚪ | — | 13/08 |
| JUR-05 | Protocolar AE ANVISA | Jurídico | Alta | ⚪ | JUR-03 | Conforme AFE |
| JUR-06 | Registro da empresa e do RT no CRF (CRT) | Jurídico + RT | 🔥 | ⚪ | RH-01 | 28/08 |
| JUR-07 | Protocolar LTA junto à Prefeitura/VISA | Jurídico | 🔥 | ⚪ | INF-02 | 21/08 |
| JUR-08 | Alvará de funcionamento + AVCB/CLCB | Jurídico | Alta | ⚪ | INF-05 | 25/09 |
| JUR-09 | Licenciamento ambiental + contrato de PGRSS | Jurídico | Alta | ⚪ | — | 18/09 |
| JUR-10 | Modelos contratuais (fornecedores, clientes, prescritores, TI) | Jurídico | Média | ⚪ | — | 02/10 |
| **JUR-11** | **Registro da marca "DNA Farma" no INPI (classes 05 e 35)** | Jurídico | Alta | ⚪ | — | 21/08 |
| **JUR-12** | **Validar Política de Comunicação Digital vs RDC 96/2008 e norma CFF** | Jurídico + RT | Alta | ⚪ | DIG-05 | 18/09 |

## FASE 3 — Infraestrutura Física

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| INF-01 | Levantar status atual da obra (% e cronograma real) | Infra | 🔥 | 🔵 | — | 07/08 |
| INF-02 | Validar projeto arquitetônico-sanitário vs RDC 67 | RT + Arquiteto | 🔥 | ⚪ | EST-05 | 18/08 |
| INF-03 | Definir layout produtivo (fluxo unidirecional) | RT + PMO | Alta | ⚪ | INF-02 | 21/08 |
| INF-04 | Especificar HVAC, pressão e classificação de salas | Engenharia | Alta | ⚪ | INF-02 | 28/08 |
| INF-05 | Execução da obra civil | Infra | 🔥 | ⚪ | INF-02 | 25/09 |
| INF-06 | Mobiliário e bancadas técnicas | Compras | Média | ⚪ | INF-03 | 11/09 |
| INF-07 | Sistema de tratamento de água purificada | Engenharia | Alta | ⚪ | INF-02 | 02/10 |
| INF-08 | Segurança física (CFTV, alarme, cofre) | TI + Infra | Alta | ⚪ | INF-05 | 09/10 |
| **INF-09** | **Comunicação visual da loja e fachada DNA Farma** | Marketing | Média | ⚪ | INF-05 | 16/10 |

## FASE 4 — Laboratório e Qualidade

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| LAB-01 | Especificar equipamentos por forma farmacêutica | RT | 🔥 | ⚪ | EST-03 | 18/08 |
| LAB-02 | Lead times e ordens de compra críticas | Compras | 🔥 | ⚪ | LAB-01 | 25/08 |
| LAB-03 | Manual de Boas Práticas de Manipulação DNA Farma | RT | 🔥 | ⚪ | EST-05 | 18/09 |
| LAB-04 | POPs (produção, qualidade, limpeza, dispensação) | RT | 🔥 | ⚪ | LAB-03 | 09/10 |
| LAB-05 | Plano de qualificação de equipamentos (QI/QO/QD) | RT + Eng. | Alta | ⚪ | LAB-02 | 09/10 |
| LAB-06 | Plano de calibração e manutenção preventiva | RT | Alta | ⚪ | LAB-05 | 16/10 |
| LAB-07 | Qualificação de fornecedores de IFA e embalagens | RT + Compras | 🔥 | ⚪ | EST-03 | 25/09 |
| LAB-08 | Definir controle de qualidade (próprio vs terceirizado) | RT | Alta | ⚪ | EST-05 | 04/09 |
| LAB-09 | Farmacovigilância e tratamento de desvios | RT | Média | ⚪ | LAB-03 | 16/10 |
| LAB-10 | Pré-auditoria interna simulada (Guia de Inspeção ANVISA) | RT + PMO | 🔥 | ⚪ | LAB-04 | 16/10 |

## FASE 5 — Tecnologia · FASE 6 — ERP

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| TI-01 | Projeto de rede, cabeamento, Wi-Fi e nobreak | Italo | Alta | 🔵 | INF-05 | 18/09 |
| TI-02 | Arquitetura de identidade, e-mail e diretório | Italo | Alta | ⚪ | — | 28/08 |
| TI-03 | Política de segurança da informação + backup 3-2-1 | Italo | Alta | ⚪ | TI-02 | 18/09 |
| TI-04 | Programa LGPD: mapeamento, DPO, ROPA, políticas | Italo + Jurídico | Alta | ⚪ | — | 02/10 |
| TI-05 | Hardware (PDV, estações, coletores, impressoras de rótulo) | Italo | Alta | ⚪ | — | 11/09 |
| ERP-01 | Levantar escopo e cronograma do fornecedor de ERP | Italo | 🔥 | 🔵 | — | 08/08 |
| ERP-02 | Mapear processos AS-IS/TO-BE e parametrização | Italo + PMO | 🔥 | ⚪ | ERP-01 | 04/09 |
| ERP-03 | Cadastros mestres (IFA, fórmulas-base, embalagens, preços) | Italo + RT | 🔥 | ⚪ | ERP-02 | 02/10 |
| ERP-04 | Integrações (NF-e, financeiro, SNGPC, WhatsApp, site) | Italo | Alta | ⚪ | ERP-02 | 09/10 |
| ERP-05 | Ambiente de homologação + testes de aceite | Italo | Alta | ⚪ | ERP-03 | 16/10 |
| ERP-06 | Camada de BI e dashboards executivos | Italo | Média | ⚪ | ERP-05 | 30/10 |
| ERP-07 | Roadmap de automações e IA (pós Go-Live) | Italo | Média | ⚪ | ERP-05 | 30/10 |

## FASE 14 — Presença Digital 🆕

| ID | Tarefa | Resp. | Prior. | Status | Depend. | Prazo |
|---|---|---|---|---|---|---|
| **DIG-01** | Auditoria e reserva de ativos digitais (domínio, @handles, e-mail) | Italo | 🔥 | 🔵 | — | 07/08 |
| **DIG-02** | Configurar DNS, SSL, hospedagem e e-mail corporativo | Italo | Alta | ⚪ | DIG-01 | 14/08 |
| **DIG-03** | Inventário formal de credenciais sob custódia da empresa | Italo | Alta | ⚪ | DIG-01 | 21/08 |
| **DIG-04** | Aprovar Modelo de Comunicação Digital (`DEC-005`) | Direção + RT | 🔥 | ⚪ | — | 14/08 |
| **DIG-05** | Redigir Política de Comunicação e Compliance Digital | Italo + RT | 🔥 | ⚪ | DIG-04 | 11/09 |
| **DIG-06** | Manual de Marca Digital DNA Farma (tom de voz, templates) | Italo + Marketing | Alta | ⚪ | EST-02 | 04/09 |
| **DIG-07** | Arquitetura de informação e wireframes do site | Italo | Alta | ⚪ | DIG-06 | 11/09 |
| **DIG-08** | Desenvolver site institucional (Next.js + Vercel) | Italo | Alta | ⚪ | DIG-07 | 09/10 |
| **DIG-09** | Implantar fluxo de aprovação de conteúdo com registro auditável | Italo + RT | 🔥 | ⚪ | DIG-05 | 11/09 |
| **DIG-10** | Abrir e configurar perfis sociais + iniciar conteúdo | Italo | Alta | ⚪ | DIG-06, DIG-09 | 18/09 |
| **DIG-11** | Camada LGPD do site (banner, política, dados sensíveis) | Italo + Jurídico | Alta | ⚪ | DIG-08 | 09/10 |
| **DIG-12** | Google Business Profile + SEO local | Italo | Alta | ⚪ | DIG-08 | 09/10 |
| **DIG-13** | WhatsApp Business + automações integradas ao ERP | Italo | Alta | ⚪ | ERP-04 | 16/10 |
| **DIG-14** | Campanha de pré-lançamento e painel de KPIs digitais | Italo + Marketing | Alta | ⚪ | DIG-10 | 30/10 |

## FASES 7 a 13 — Backlog resumido

| ID | Tarefa | Resp. | Prior. | Status | Prazo |
|---|---|---|---|---|---|
| FIN-01 | Orçamento de implantação (CAPEX) consolidado | Financeiro | 🔥 | ⚪ | 21/08 |
| FIN-02 | Fluxo de caixa projetado 12 meses (3 cenários) | Financeiro | Alta | ⚪ | 04/09 |
| FIN-03 | Política de precificação e margem por linha | Financeiro + RT | Alta | ⚪ | 25/09 |
| FIN-04 | Estrutura tributária e regime fiscal | Contábil | Alta | ⚪ | 21/08 |
| FIN-05 | Meios de pagamento, conciliação e antifraude | Financeiro | Média | ⚪ | 09/10 |
| RH-01 | **Contratar Farmacêutico Responsável Técnico** | RH + Direção | 🔥 | 🔵 | 22/08 |
| RH-02 | Organograma e quadro de pessoal | RH + PMO | Alta | ⚪ | 21/08 |
| RH-03 | Descrições de cargo e faixas salariais | RH | Média | ⚪ | 28/08 |
| RH-04 | Recrutamento e seleção da equipe completa | RH | 🔥 | ⚪ | 25/09 |
| RH-05 | Admissões, ASO, EPIs, jornada e ponto | RH | Alta | ⚪ | 09/10 |
| TRE-01 | Trilha de treinamento em BPM (obrigatória, com registro) | RT + RH | 🔥 | ⚪ | 16/10 |
| TRE-02 | Treinamento em ERP por perfil de usuário | Italo | Alta | ⚪ | 23/10 |
| TRE-03 | Treinamento de atendimento, vendas e pós-venda | Comercial | Alta | ⚪ | 23/10 |
| **TRE-04** | **Treinamento de compliance digital (o que pode e não pode publicar)** | Italo + RT | Alta | ⚪ | 16/10 |
| OPE-01 | Mapear processos ponta a ponta (BPMN) | PMO | Alta | ⚪ | 02/10 |
| OPE-02 | KPIs operacionais e painéis de gestão | PMO + Italo | Alta | ⚪ | 16/10 |
| OPE-03 | Implantar 5S e gestão à vista | PMO | Média | ⚪ | 23/10 |
| COM-01 | Plano de relacionamento com prescritores | Comercial | 🔥 | ⚪ | 18/09 |
| COM-02 | CRM implantado e base de prescritores carregada | Comercial + Italo | Alta | ⚪ | 09/10 |
| COM-03 | Plano de marketing de lançamento (aderente ao `DEC-005`) | Marketing | Alta | ⚪ | 09/10 |
| PRE-01 | Operação-piloto assistida (simulação completa) | Todos | 🔥 | ⚪ | 23/10 |
| PRE-02 | Checklist final de inauguração (Go/No-Go) | PMO | 🔥 | ⚪ | 30/10 |
| INA-01 | Evento de inauguração DNA Farma | Marketing | Alta | ⚪ | 03/11 |
| POS-01 | Rotina de estabilização (war room D+1 a D+15) | PMO | Alta | ⚪ | 18/11 |
| POS-02 | Retrospectiva geral e plano de melhoria contínua | PMO | Média | ⚪ | 03/12 |

**Total: 62 tarefas mapeadas.**

---

# 11. ITENS AGUARDANDO RESPOSTA (BLOQUEANTES)

Nenhuma hipótese foi assumida. Estas 17 respostas destravam o cronograma detalhado.

| # | Pergunta | Impacta | Crit. |
|---|---|---|---|
| Q01 | **Qual o estado e município da DNA Farma?** Regras de VISA, CRF e prefeitura variam entre estados. | Jurídico e prazos | 🔥 |
| Q02 | **Qual o status real do licenciamento hoje?** CNPJ aberto? AFE protocolada — em que data? LTA protocolado? | Viabilidade do Cenário A | 🔥 |
| Q03 | **Quais grupos de atividade da RDC 67 serão pleiteados?** (sólidos, semissólidos, líquidos, doses unitárias, estéreis, homeopatia, veterinário) | F3, F4, F6, F8 | 🔥 |
| Q04 | **Haverá manipulação de substâncias sob controle especial (Portaria 344/98)?** | AE, SNGPC, cofre | 🔥 |
| Q05 | **O Farmacêutico RT já está definido?** Se sim, qual a experiência em magistral? | Caminho crítico + F14 | 🔥 |
| Q06 | **Qual o ERP contratado e qual o escopo/cronograma acordado?** | F6 | 🔥 |
| Q07 | **Qual o % atual da obra e a data prometida pelo construtor?** | Viabilidade do prazo | 🔥 |
| Q08 | **Quantos colaboradores e quais cargos?** Já há contratações concluídas? | F7, F8, F9 | Alta |
| Q09 | **Qual o CAPEX aprovado e o capital de giro para 12 meses?** | F7, compras | Alta |
| Q10 | **Modelo comercial: loja física apenas, ou também delivery/atendimento remoto?** | F6, F10, F14 | Alta |
| Q11 | **Há interesse estratégico na linha de cannabis medicinal magistral?** | F3, F4 | Alta |
| Q12 | **Existe farmácia parceira homologada para o Cenário B?** | `DEC-001` | Alta |
| **Q13** | **O domínio da DNA Farma já foi registrado?** Qual? Está em nome do CNPJ ou de pessoa física? | 🔥 MD1 | 🔥 |
| **Q14** | **Os @handles das redes sociais já foram reservados?** Em quais plataformas? | MD1 | 🔥 |
| **Q15** | **A marca "DNA Farma" já foi depositada no INPI?** Houve busca de anterioridade? | `JUR-11` | Alta |
| **Q16** | **Haverá equipe/agência de marketing, ou a operação de conteúdo será interna?** Isso muda radicalmente o dimensionamento da F14. | F14, F7 | Alta |
| **Q17** | **Qual o orçamento previsto para presença digital** (mídia paga, produção de conteúdo, ferramentas)? | F14, F7 | Alta |

---

# 12. REGISTRO DE DECISÕES

| ID | Decisão | Data | Responsável | Status |
|---|---|---|---|---|
| DEC-000 | Adoção do modelo de PMO com 14 fases, backlog rastreável e dashboard | 04/08/2026 | Direção | ✅ Vigente |
| **DEC-006** | **Nome empresarial e marca do projeto: DNA Farma** | 05/08/2026 | Direção | ✅ Vigente |
| **DEC-007** | **Site e mídias sociais sob gestão do Consultor de TI (Italo), com aprovação de conteúdo pelo RT** | 05/08/2026 | Direção | ✅ Vigente |
| DEC-001 | Estratégia de Go-Live (Cenário A, B ou C) | — | Direção | ⏳ Pendente |
| DEC-002 | Grupos de atividade RDC 67 a serem pleiteados | — | Direção + RT | ⏳ Pendente |
| DEC-003 | Linha de cannabis medicinal: incluir ou não no projeto físico | — | Direção | ⏳ Pendente |
| DEC-004 | Controle de qualidade próprio vs terceirizado | — | RT + Direção | ⏳ Pendente |
| **DEC-005** | **Modelo de comunicação digital (recomendado: Modelo 2 — Autoridade e Conteúdo)** | — | Direção + RT | ⏳ Pendente |

> **Regra:** decisões registradas aqui são tratadas como verdade absoluta e não são reescritas. Alterações exigem novo registro com justificativa e análise de impacto.

---

# 13. BASE DE CONHECIMENTO DO PROJETO

```
/dna-farma
├── 00-projeto-mestre.md          ← este documento (PMO)
├── 01-estrategia/                 Missão, visão, OKRs, portfólio
├── 02-juridico/                   Licenças, contratos, protocolos, INPI
├── 03-infraestrutura/             Projeto físico, layout, obra
├── 04-qualidade/                  Manual BPM, POPs, qualificações
├── 05-tecnologia/                 Rede, segurança, LGPD, arquitetura
├── 06-erp/                        Parametrização, integrações, cadastros
├── 07-financeiro/                 CAPEX, fluxo de caixa, precificação
├── 08-rh/                         Organograma, cargos, admissões
├── 09-treinamentos/               Trilhas, registros, avaliações
├── 10-processos/                  BPMN, fluxogramas, KPIs
├── 11-inauguracao/                Checklists Go/No-Go
├── 14-digital/                    🆕
│   ├── ativos-digitais.md         Inventário de domínios, handles, credenciais
│   ├── manual-marca-digital.md    Tom de voz, templates, identidade
│   ├── politica-compliance.md     O que pode e não pode publicar
│   ├── calendario-editorial.md    Pauta com registro de aprovação do RT
│   └── kpis-digitais.md           Painel de indicadores
├── _decisoes/                     DEC-xxx
├── _riscos/                       R-xxx
└── _atas/                         Registros de reuniões
```

---

# 14. PRÓXIMOS PASSOS (SEMANA 1 — 04 a 09/08/2026)

| # | Ação | Responsável | Prazo |
|---|---|---|---|
| 1 | **Auditar e reservar imediatamente domínio e @handles da DNA Farma** | Italo | 07/08 |
| 2 | Responder as 17 perguntas bloqueantes (Seção 11) | Direção + Italo | 08/08 |
| 3 | Levantar status real da matriz de licenças L1–L11 | Jurídico | 08/08 |
| 4 | Levantar % real da obra e cronograma do construtor | Infra | 07/08 |
| 5 | Levantar escopo e cronograma contratados do ERP | Italo | 08/08 |
| 6 | Iniciar busca do Farmacêutico RT | RH + Direção | Imediato |
| 7 | Solicitar parecer jurídico sobre o Cenário B | Jurídico | 13/08 |
| 8 | Busca de anterioridade e depósito da marca no INPI | Jurídico | 12/08 |
| 9 | Agendar Comitê Executivo nº 1 e Comitê Editorial nº 1 | PMO | 11/08 |

---

**Fim da Baseline v2.0 — DNA Farma.**
*Este documento é vivo. Toda tarefa concluída, decisão tomada ou risco materializado gera atualização imediata do dashboard e do histórico. Nenhum registro é apagado.*

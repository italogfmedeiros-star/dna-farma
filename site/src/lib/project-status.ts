/**
 * Dados do painel de acompanhamento interno da DNA Farma.
 *
 * Espelha manualmente a Seção 2 ("Dashboard do Projeto") e a Seção 6.1
 * ("Arquitetura de Fases") de ../../../00-projeto-mestre.md — a fonte de
 * verdade do projeto. Este arquivo NÃO lê o .md em tempo de build; sempre
 * que o documento mestre for atualizado (posição, tarefas, riscos, fases),
 * atualize este arquivo junto, manualmente.
 */

export type PhaseStatus = "done" | "in_progress" | "not_started" | "blocked";

export const statusLabel: Record<PhaseStatus, string> = {
  done: "Concluída",
  in_progress: "Em andamento",
  not_started: "Não iniciada",
  blocked: "Bloqueada",
};

export const projectStatus = {
  // "Posição em" — Seção 2 do documento mestre.
  asOf: "2026-08-04",
  overallPercent: 0,
  currentPhase: "FASE 1 — Planejamento Estratégico",
  goLiveDate: "2026-11-03",
  daysToGoLive: 91,
  weeksRemaining: 13,
  totalTasks: 62,
  tasksByStatus: {
    done: 0,
    in_progress: 4,
    not_started: 58,
    blocked: 0,
  },
  activeRisks: 18,
  criticalRisks: 5,
  activeBlockers: 0,
  itemsAwaitingResponse: 17,
  health: "ATENÇÃO" as const,
  healthNote: "prazo regulatório é o fator dominante",
};

export const nextDeliveries = [
  {
    title: "Diagnóstico regulatório (status real de CNPJ/AFE/AE/LTA/VISA)",
    due: "2026-08-08",
    owner: "Direção + Jurídico",
  },
  {
    title: "Auditoria e reserva de ativos digitais (domínio, @handles, INPI)",
    due: "2026-08-07",
    owner: "Italo + Jurídico",
  },
  {
    title: "Definição dos grupos de atividade (RDC 67, Art. 2º)",
    due: "2026-08-11",
    owner: "Direção + RT",
  },
  {
    title: "Congelamento da baseline de cronograma",
    due: "2026-08-14",
    owner: "PMO",
  },
] as const;

export const phases: {
  id: string;
  name: string;
  window: string;
  weight: number;
  status: PhaseStatus;
}[] = [
  { id: "F1", name: "Planejamento Estratégico", window: "S1–S2", weight: 5, status: "in_progress" },
  { id: "F2", name: "Jurídico e Regulatório", window: "S1–S8", weight: 11, status: "in_progress" },
  { id: "F3", name: "Infraestrutura Física", window: "S1–S8", weight: 13, status: "in_progress" },
  { id: "F4", name: "Laboratório e Qualidade", window: "S3–S11", weight: 15, status: "not_started" },
  { id: "F5", name: "Tecnologia (Infra + Segurança)", window: "S2–S9", weight: 7, status: "not_started" },
  { id: "F6", name: "ERP e Integrações", window: "S2–S10", weight: 11, status: "not_started" },
  { id: "F7", name: "Financeiro", window: "S2–S10", weight: 6, status: "not_started" },
  { id: "F8", name: "Recursos Humanos", window: "S2–S9", weight: 7, status: "not_started" },
  { id: "F9", name: "Treinamentos", window: "S8–S12", weight: 6, status: "not_started" },
  { id: "F10", name: "Processos e Operação", window: "S4–S12", weight: 7, status: "not_started" },
  { id: "F11", name: "Pré-inauguração", window: "S11–S13", weight: 4, status: "not_started" },
  { id: "F12", name: "Inauguração", window: "S13", weight: 2, status: "not_started" },
  { id: "F13", name: "Pós Go-Live", window: "D+1 a D+90", weight: 1, status: "not_started" },
  { id: "F14", name: "Presença Digital (Site + Social)", window: "S1–S13", weight: 5, status: "in_progress" },
];

export const milestones = [
  {
    id: "M1",
    name: "Baseline congelada",
    date: "2026-08-14",
    criteria: "17 perguntas respondidas + DEC-001 e DEC-005 tomadas",
  },
  {
    id: "MD1",
    name: "Ativos digitais garantidos",
    date: "2026-08-14",
    criteria: "Domínio, @handles, INPI protocolado, e-mail corporativo",
  },
  {
    id: "M2",
    name: "Obra concluída / equipe contratada",
    date: "2026-09-25",
    criteria: "Habite-se técnico + 100% dos cargos preenchidos",
  },
  {
    id: "M3",
    name: "Sistemas em produção + simulação",
    date: "2026-10-16",
    criteria: "ERP operando + site no ar + operação-piloto",
  },
  {
    id: "GOLIVE",
    name: "Go-Live",
    date: "2026-11-03",
    criteria: "Checklist de inauguração 100%",
  },
] as const;

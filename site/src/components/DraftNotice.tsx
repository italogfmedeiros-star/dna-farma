/**
 * Selo visível de "conteúdo em rascunho".
 *
 * Regra de governança (00-projeto-mestre.md, Seção 4-B e 5.4, regra 7):
 * nenhuma peça vai ao ar sem aprovação registrada do Farmacêutico RT.
 * Este selo deve ser removido da página somente depois que o texto real
 * for revisado e aprovado (ver 14-digital/politica-compliance.md).
 */
export function DraftNotice({ note }: { note?: string }) {
  return (
    <div
      role="note"
      className="mx-auto flex max-w-3xl items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200"
    >
      <span aria-hidden="true">🚧</span>
      <p>
        <strong>Conteúdo de rascunho — pendente de aprovação do RT.</strong>{" "}
        {note ??
          "Este texto é institucional e provisório. Não publicar/promover externamente sem registro de “Aprovado-RT”."}
      </p>
    </div>
  );
}

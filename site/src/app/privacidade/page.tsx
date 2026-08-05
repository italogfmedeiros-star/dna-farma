import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DraftNotice } from "@/components/DraftNotice";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a DNA Farma trata dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <div className="pb-24">
      <PageHeader eyebrow="LGPD" title="Política de Privacidade" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <DraftNotice note="Minuta técnica gerada para dar ponto de partida. NÃO é aconselhamento jurídico — precisa de revisão formal do Jurídico e do DPO (TI-04) antes de publicar." />

        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-emerald-700 dark:prose-a:text-emerald-400">
          <p>
            Última atualização: a definir na publicação. Esta política
            descreve como a {siteConfig.name} coleta, usa, armazena e protege
            dados pessoais, em conformidade com a Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <h2>1. Dado sensível de saúde</h2>
          <p>
            Informações relacionadas à saúde — incluindo eventuais dados
            fornecidos em prescrições, formulários de contato ou canais de
            atendimento — são tratadas como <strong>dado pessoal sensível</strong>,
            nos termos do art. 5º, II, da LGPD, e recebem nível de proteção
            reforçado. Esses dados não são utilizados para fins de
            publicidade ou perfilamento comercial.
          </p>

          <h2>2. Quais dados coletamos</h2>
          <ul>
            <li>Dados de contato (nome, telefone, e-mail) informados voluntariamente em formulários.</li>
            <li>Dados de navegação (páginas visitadas, dispositivo) quando cookies de medição forem aceitos.</li>
            <li>Dados de saúde eventualmente informados em atendimento, tratados sob sigilo profissional farmacêutico.</li>
          </ul>

          <h2>3. Cookies</h2>
          <p>
            Utilizamos cookies essenciais ao funcionamento do site e,
            mediante seu consentimento, cookies de medição de audiência. Você
            pode gerenciar sua preferência a qualquer momento pelo banner de
            cookies exibido na primeira visita.
          </p>

          <h2>4. Finalidade do tratamento</h2>
          <ul>
            <li>Responder a contatos e solicitações enviadas pelo site.</li>
            <li>Viabilizar o relacionamento com prescritores e pacientes.</li>
            <li>Cumprir obrigações legais e regulatórias (ex.: vigilância sanitária).</li>
          </ul>

          <h2>5. Compartilhamento</h2>
          <p>
            Dados não são vendidos. Podem ser compartilhados com órgãos
            reguladores quando exigido por lei, ou com fornecedores de
            tecnologia estritamente necessários à operação (ex.: hospedagem),
            sob obrigações contratuais de confidencialidade.
          </p>

          <h2>6. Seus direitos</h2>
          <p>
            Nos termos do art. 18 da LGPD, você pode solicitar confirmação de
            tratamento, acesso, correção, anonimização, portabilidade ou
            eliminação dos seus dados, entre outros direitos, pelo canal de
            contato abaixo.
          </p>

          <h2>7. Encarregado de Dados (DPO)</h2>
          <p>
            Contato do Encarregado de Proteção de Dados: a definir (ver{" "}
            <code>TI-04</code> no backlog do projeto).
          </p>

          <h2>8. Contato</h2>
          <p>
            Dúvidas sobre esta política podem ser enviadas para{" "}
            {siteConfig.contact.email}.
          </p>
        </div>
      </div>
    </div>
  );
}

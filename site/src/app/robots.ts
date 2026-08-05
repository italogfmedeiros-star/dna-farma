import type { MetadataRoute } from "next";

/**
 * Ferramenta interna de acompanhamento — nunca deve ser rastreada/indexada.
 * Diferente do site institucional (DIG-08), este painel não tem uma
 * condição de "pronto para indexação": o bloqueio é permanente por design.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

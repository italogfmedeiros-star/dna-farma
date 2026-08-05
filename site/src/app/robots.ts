import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Enquanto o site estiver em construção/homologação, mantemos o crawling
 * bloqueado (alinhado ao `robots: { index: false }` em layout.tsx). Trocar
 * `SITE_READY_FOR_INDEXING` para "true" (via env var) somente após:
 *  - conteúdo aprovado pelo RT (DIG-09)
 *  - domínio definitivo em produção (DIG-08)
 */
const READY_FOR_INDEXING = process.env.SITE_READY_FOR_INDEXING === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: READY_FOR_INDEXING ? "/" : undefined,
      disallow: READY_FOR_INDEXING ? [] : "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

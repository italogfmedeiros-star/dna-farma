"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/cookie-consent";

/**
 * Banner de consentimento LGPD (00-projeto-mestre.md, Seção 8.2-B).
 *
 * Hoje o site não usa cookies de rastreamento/analytics — este banner existe
 * para deixar a camada de consentimento pronta antes de qualquer ferramenta
 * de mensuração entrar (GA4, Meta Pixel etc.). Quando isso acontecer, o
 * carregamento desses scripts deve ficar condicionado a `consent === "accepted"`.
 */
export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de privacidade e cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-4 backdrop-blur sm:px-6 dark:border-white/10 dark:bg-neutral-950/95"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Usamos cookies essenciais e, quando aplicável, cookies de medição
          para melhorar sua experiência. Dados de saúde eventualmente
          informados por você são tratados como dado sensível, nos termos da
          LGPD. Saiba mais na nossa{" "}
          <Link
            href="/privacidade"
            className="font-medium text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            Recusar não essenciais
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}

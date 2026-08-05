/**
 * Store externo mínimo para o consentimento de cookies (LGPD), lido via
 * `useSyncExternalStore` — evita setState dentro de efeito e é
 * hidratação-segura (o snapshot do servidor é sempre `null`, o cliente
 * assume o valor real de `localStorage` logo após a hidratação).
 */

export type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "dna-farma:lgpd-consent";
const listeners = new Set<() => void>();

export function getConsentSnapshot(): Consent {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY) as Consent;
}

export function getServerConsentSnapshot(): Consent {
  return null;
}

export function subscribeConsent(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function setConsent(value: Exclude<Consent, null>): void {
  window.localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((listener) => listener());
}

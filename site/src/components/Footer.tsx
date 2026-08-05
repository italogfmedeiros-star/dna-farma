import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-emerald-900 dark:text-emerald-300">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
              Farmácia de manipulação magistral. Preparações individualizadas
              somente mediante prescrição, elaboradas sob responsabilidade
              técnica farmacêutica.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              Institucional
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>{siteConfig.address.city}, {siteConfig.address.state}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-500">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados. CNPJ a
            definir.
          </p>
          <p className="mt-1">
            Este site não realiza venda de medicamentos manipulados pela
            internet. Conteúdo educativo e institucional — não substitui
            orientação farmacêutica ou médica individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-neutral-500 sm:px-6 dark:text-neutral-500">
        <p>
          © {year} {siteConfig.name}. Ferramenta interna de acompanhamento —
          não é o site institucional público.
        </p>
        <p className="mt-1">
          Dados espelhados de <code>00-projeto-mestre.md</code>, a fonte de
          verdade do projeto. Não indexado, não promovido externamente.
        </p>
      </div>
    </footer>
  );
}

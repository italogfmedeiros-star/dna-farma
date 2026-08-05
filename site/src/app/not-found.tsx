import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
        Erro 404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white">
        Página não encontrada
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        O endereço acessado não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Voltar ao início
      </Link>
    </div>
  );
}

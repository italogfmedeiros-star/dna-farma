export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-black/5 bg-neutral-50 px-4 py-14 sm:px-6 dark:border-white/10 dark:bg-neutral-900">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

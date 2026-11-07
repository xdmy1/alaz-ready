export default function Newsletter({ compact = false }: { compact?: boolean }) {
  return (
    <form onSubmit={undefined} className={`flex w-full gap-2 ${compact ? "max-w-md" : "max-w-lg"}`} action="#">
      <input type="email" placeholder="adresa@email.md" className="h-11 flex-1 rounded-full border border-line bg-bg px-4 text-sm outline-none transition placeholder:text-muted focus:border-fg" />
      <button type="button" className="h-11 shrink-0 rounded-full bg-accent px-5 text-sm font-medium text-brand-fg transition hover:opacity-90">Abonează-mă</button>
    </form>
  );
}

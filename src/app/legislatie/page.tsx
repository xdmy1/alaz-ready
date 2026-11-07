import { legislation } from "@/data/content";
export default function Legislatie() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="eyebrow">Legislație</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Baza de acte normative</h1>
      <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-line px-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-muted"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input placeholder="Număr, titlu sau cuvânt-cheie…" className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted" />
      </div>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {[...legislation, ...legislation].map((l, i) => (
          <li key={i} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr_auto] sm:items-center sm:gap-6">
            <span className="font-mono text-xs text-muted">{l.code}</span>
            <span className="text-sm font-medium">{l.title}</span>
            <span className="text-xs text-muted">{l.date} 2026</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

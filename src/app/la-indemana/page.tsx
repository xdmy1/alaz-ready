import { alwaysAtHand, calendar } from "@/data/content";

const acts = [
  { code: "Legea nr. 1163/1997", title: "Codul fiscal al Republicii Moldova", date: "actualizat 01.11.2026" },
  { code: "Legea nr. 287/2017", title: "Legea contabilității și raportării financiare", date: "actualizat 14.10.2026" },
  { code: "Ordinul MF nr. 118/2013", title: "Standardele Naționale de Contabilitate", date: "actualizat 02.09.2026" },
  { code: "Ordinul MF nr. 119/2013", title: "Planul general de conturi contabile", date: "actualizat 02.09.2026" },
  { code: "HG nr. 697/2014", title: "Regulamentul cu privire la reținerea impozitului pe venit", date: "actualizat 21.08.2026" },
];

export default function LaIndemana() {
  return (
    <>
      <section className="container-x pt-16 sm:pt-20">
        <p className="eyebrow">Resurse</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Baza normativă și instrumente</h1>
        <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-line px-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-muted"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input placeholder="Număr, titlu sau cuvânt-cheie…" className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted" />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {alwaysAtHand.map((t) => (
            <div key={t.title} className="rounded-2xl border border-line p-5 transition hover:border-fg">
              <p className="font-medium">{t.title}</p><p className="mt-1 text-sm text-muted">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">Acte actualizate recent</h2>
          <ul className="divide-y divide-line border-y border-line">
            {acts.map((l) => (
              <li key={l.code} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                <span className="font-mono text-xs text-muted">{l.code}</span>
                <div><p className="text-sm font-medium">{l.title}</p><p className="text-xs text-muted">{l.date}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">Calendarul contribuabilului</h2>
          <ul className="divide-y divide-line rounded-2xl border border-line">
            {calendar.map((c, i) => (
              <li key={i} className="flex items-center gap-4 px-4 py-3.5">
                <div className="w-12 shrink-0 text-center leading-none">
                  <span className="block text-xl font-semibold tracking-tight">{c.day}</span>
                  <span className="font-mono text-[10px] uppercase text-muted">{c.month}</span>
                </div>
                <div className="min-w-0"><p className="text-sm font-medium">{c.what}</p><p className="text-xs text-muted">{c.type}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

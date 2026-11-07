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
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x py-12">
          <p className="kicker">Întotdeauna la îndemână</p>
          <h1 className="headline mt-3 text-4xl sm:text-5xl">Baza normativă și instrumente de lucru</h1>
          <div className="mt-6 flex max-w-xl border border-line bg-bg">
            <input placeholder="Număr, titlu sau cuvânt-cheie…" className="h-12 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted" />
            <button className="btn-navy h-12">Caută</button>
          </div>
        </div>
      </section>
      <section className="container-x grid gap-12 py-10 lg:grid-cols-[260px_1fr_300px]">
        <aside>
          <div className="section-title"><h2>Secțiuni</h2></div>
          <ul className="divide-y divide-line">{alwaysAtHand.map((t, i) => <li key={t} className={`py-3 text-[15px] ${i === 0 ? "font-bold text-brand" : ""}`}>{t}</li>)}</ul>
        </aside>
        <div>
          <div className="section-title"><h2>Acte actualizate recent</h2></div>
          <ul className="divide-y divide-line">
            {acts.map((l) => (
              <li key={l.code} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">{l.code}</span>
                <div><p className="headline text-[17px]">{l.title}</p><p className="meta mt-1">{l.date}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="section-title"><h2>Calendarul contribuabilului</h2></div>
          <ul className="divide-y divide-line">
            {calendar.map((c, i) => (
              <li key={i} className="flex gap-4 py-3">
                <div className="w-10 text-center leading-none"><span className="block font-serif text-2xl font-semibold text-brand">{c.day}</span><span className="text-[10px] font-bold uppercase text-muted">{c.month}</span></div>
                <div className="min-w-0"><p className="text-sm font-medium leading-snug">{c.what}</p><p className="meta mt-0.5 uppercase tracking-wider">{c.type}</p></div>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}

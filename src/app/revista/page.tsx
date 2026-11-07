import { issue, rubrics } from "@/data/content";

export default function Revista() {
  const issues = ["Octombrie 2026", "Septembrie 2026", "August 2026", "Iulie 2026", "Iunie 2026", "Mai 2026"];
  return (
    <>
      <section className="container-x grid gap-10 py-16 sm:pt-20 lg:grid-cols-[auto_1fr]">
        <div className="flex aspect-[3/4] w-56 flex-col justify-between rounded-2xl border border-line bg-bg-soft p-5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{issue.number}</span>
          <span className="text-4xl font-semibold leading-none tracking-tight">C<span className="text-accent">&</span>A</span>
        </div>
        <div>
          <p className="eyebrow">Numărul curent · {issue.month}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Contabilitate și audit</h1>
          <p className="mt-4 max-w-lg text-muted">Publicație lunară pentru contabili, auditori și juriști. Se editează din septembrie 1995. Arhiva completă este inclusă în orice abonament.</p>
          <ul className="mt-6 space-y-2 text-sm">
            {issue.contents.map((c) => <li key={c} className="flex gap-3"><span className="text-muted">—</span>{c}</li>)}
          </ul>
          <button className="mt-7 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg">Citește numărul</button>
        </div>
      </section>

      <section id="arhiva" className="container-x scroll-mt-20 border-t border-line py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Arhiva</h2>
          <span className="text-sm text-muted">1995 – 2026</span>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {issues.map((m, i) => (
            <div key={m} className="group">
              <div className="flex aspect-[3/4] flex-col justify-between rounded-xl border border-line bg-bg-soft p-4 transition group-hover:border-fg">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Nr. {10 - i} / 2026</span>
                <span className="text-lg font-semibold leading-none tracking-tight">C<span className="text-accent">&</span>A</span>
              </div>
              <p className="mt-3 text-sm">{m}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rubrici" className="container-x scroll-mt-20 border-t border-line py-14">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Rubricile revistei</h2>
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {rubrics.map((r) => (
            <li key={r} className="flex items-center justify-between border-b border-line py-3 text-sm"><span>{r}</span><span className="text-muted">→</span></li>
          ))}
        </ul>
      </section>
    </>
  );
}

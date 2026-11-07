import Cover from "@/components/Cover";
import { issue, rubrics, rubricNames } from "@/data/content";

/* eslint-disable @next/next/no-img-element */
export default function Revista() {
  const issues = ["Septembrie 2026", "August 2026", "Iulie 2026", "Iunie 2026", "Mai 2026", "Aprilie 2026"];
  return (
    <>
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x grid gap-10 py-12 md:grid-cols-[220px_1fr] md:items-center">
          <Cover className="w-52 shadow-2xl" />
          <div>
            <p className="kicker">Numărul curent · {issue.month}</p>
            <h1 className="headline mt-3 text-4xl sm:text-5xl">Contabilitate și audit, nr. {issue.number} / {issue.year}</h1>
            <p className="mt-4 max-w-xl font-serif text-lg text-muted">Publicație lunară pentru contabili, auditori și juriști. Se editează din septembrie 1995. Arhiva completă este inclusă în orice abonament.</p>
            <ul className="mt-6 grid gap-2 text-[15px] sm:grid-cols-2">
              {issue.contents.map((c) => <li key={c} className="border-l-2 border-accent pl-3">{c}</li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3"><button className="btn-navy">Citește numărul</button><a href="/abonarea" className="btn-outline">Abonează-te</a></div>
          </div>
        </div>
      </section>
      <section id="arhiva" className="container-x scroll-mt-20 py-12">
        <div className="section-title"><h2>Arhiva</h2><span className="text-xs text-muted">1995 – 2026</span></div>
        <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6">
          {issues.map((m, i) => (
            <div key={m} className="group">
              <div className="relative aspect-[210/297] overflow-hidden bg-brand-deep">
                <img src={rubrics[i % rubrics.length].img} alt="" className="h-full w-full object-cover opacity-50 mix-blend-luminosity transition group-hover:opacity-70" />
                <span className="absolute left-2 top-2 bg-accent px-1.5 py-0.5 font-serif text-sm font-bold text-accent-fg">{9 - i}</span>
              </div>
              <p className="mt-2 text-[13px] font-medium">{m}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="rubrici" className="container-x scroll-mt-20 border-t border-line py-12">
        <div className="section-title"><h2>Rubricile revistei</h2></div>
        <ul className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {rubricNames.map((r) => <li key={r} className="flex items-center justify-between border-b border-line py-3 text-[15px]"><span>{r}</span><span className="text-gold">→</span></li>)}
        </ul>
      </section>
    </>
  );
}

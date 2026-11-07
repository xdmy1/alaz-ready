export default function Revista() {
  const issues = ["Noiembrie 2026", "Octombrie 2026", "Septembrie 2026", "August 2026", "Iulie 2026", "Iunie 2026"];
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="eyebrow">Revista</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Contabilitate și audit</h1>
      <p className="mt-4 max-w-lg text-muted">Publicație lunară din 1996. Arhiva completă este inclusă în orice abonament.</p>
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {issues.map((m, i) => (
          <div key={m} className="group">
            <div className="flex aspect-[3/4] flex-col justify-between rounded-xl border border-line bg-bg-soft p-4 transition group-hover:border-fg">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Nr. {11 - i} / 2026</span>
              <span className="text-lg font-semibold leading-tight tracking-tight">C<span className="text-accent">&</span>A</span>
            </div>
            <p className="mt-3 text-sm">{m}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

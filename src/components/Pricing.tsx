import { plans } from "@/data/content";

export default function Pricing() {
  return (
    <section className="container-x py-12">
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`relative flex flex-col rounded-3xl border p-7 ${p.featured ? "border-brand-deep bg-brand-deep text-white" : "border-line bg-bg"}`}>
            {p.featured && <span className="absolute right-6 top-6 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-fg">Cel mai ales</span>}
            <p className="text-sm font-medium">{p.name}</p>
            <p className={`mt-1 min-h-10 text-sm ${p.featured ? "opacity-70" : "text-muted"}`}>{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight">{p.price.toLocaleString("ro-RO")}</span>
              <span className={`text-sm ${p.featured ? "opacity-70" : "text-muted"}`}>MDL / an</span>
            </div>
            <ul className={`mt-7 flex-1 space-y-3 text-sm ${p.featured ? "opacity-90" : ""}`}>
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-brand"}`}><path d="m5 12 5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`mt-8 h-11 rounded-full text-sm font-medium transition ${p.featured ? "bg-accent text-accent-fg hover:brightness-95" : "border border-line hover:border-brand"}`}>Obține factura</button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted">Prețurile includ TVA. Factura se emite pe datele companiei.</p>
    </section>
  );
}

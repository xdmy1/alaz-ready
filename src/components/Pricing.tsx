import { plans } from "@/data/content";

export default function Pricing() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((p) => (
        <div key={p.name} className={`flex flex-col border ${p.featured ? "border-brand-deep bg-brand-deep text-white" : "border-line"}`}>
          <div className={`border-b-2 px-8 pt-8 pb-6 ${p.featured ? "border-accent" : "border-gold"}`}>
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em]">{p.name}</p>
              {p.featured && <span className="bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-fg">Cel mai ales</span>}
            </div>
            <p className={`mt-1 min-h-10 text-sm ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
            <p className="mt-6 font-serif"><span className="text-5xl font-semibold">{p.price.toLocaleString("ro-RO")}</span> <span className={`text-base ${p.featured ? "text-white/70" : "text-muted"}`}>MDL / 12 luni</span></p>
          </div>
          <ul className="flex-1 space-y-3.5 px-8 py-7 text-[15px]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className={`mt-[3px] h-4 w-4 shrink-0 ${p.featured ? "text-accent" : "text-brand"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                </span>{f}
              </li>
            ))}
          </ul>
          <div className="px-8 pb-8">
            <button className={`${p.featured ? "btn-yellow" : "btn-outline"} h-12 w-full`}>Obține factura</button>
          </div>
        </div>
      ))}
    </div>
  );
}

import { plans } from "@/data/content";

export default function Pricing() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-line lg:border lg:border-line">
      {plans.map((p) => (
        <div key={p.name} className={`flex flex-col border border-line lg:border-0 ${p.featured ? "bg-brand-deep text-white lg:-my-4 lg:py-4" : ""}`}>
          <div className={`border-b-4 px-7 pt-7 pb-5 ${p.featured ? "border-accent" : "border-gold"}`}>
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em]">{p.name}</p>
              {p.featured && <span className="bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-fg">Cel mai ales</span>}
            </div>
            <p className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
            <p className="mt-6 font-serif"><span className="text-5xl font-semibold">{p.price.toLocaleString("ro-RO")}</span> <span className={`text-base ${p.featured ? "text-white/70" : "text-muted"}`}>MDL / 12 luni</span></p>
          </div>
          <ul className="flex-1 space-y-3 px-7 py-6 text-[15px]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className={`mt-[3px] h-4 w-4 shrink-0 ${p.featured ? "text-accent" : "text-brand"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                </span>{f}
              </li>
            ))}
          </ul>
          <div className="px-7 pb-7">
            <button className={`${p.featured ? "btn-yellow" : "btn-outline"} h-12 w-full`}>Obține factura</button>
          </div>
        </div>
      ))}
    </div>
  );
}

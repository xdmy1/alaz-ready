import { Card, Lead } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { news, mostRead } from "@/data/content";

export default function Noutati() {
  const [lead, ...rest] = [...news, ...mostRead];
  return (
    <section className="container-x grid gap-12 py-10 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="section-title"><h2>Noutăți · Fluxul de știri</h2></div>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Toate", "Fiscal", "Legislație", "SFS", "CNAS / CNAM", "Economie"].map((c, i) => (
            <button key={c} className={`h-8 border px-3 text-[12px] font-bold uppercase tracking-wider ${i === 0 ? "border-brand-deep bg-brand-deep text-white" : "border-line text-muted hover:border-fg hover:text-fg"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8"><Lead a={lead} /></div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{rest.map((a) => <Card key={a.slug} a={a} />)}</div>
      </div>
      <aside><Newsletter /></aside>
    </section>
  );
}

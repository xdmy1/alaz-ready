import ArticleCard from "@/components/ArticleCard";
import { news, mostRead } from "@/data/content";

export default function Noutati() {
  const all = [...news, ...mostRead];
  return (
    <>
      <section className="container-x pt-16 sm:pt-20">
        <p className="eyebrow">Noutăți</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Fluxul de știri</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Toate", "Fiscal", "Legislație", "SFS", "CNAS / CNAM", "Economie"].map((c, i) => (
            <button key={c} className={`rounded-full border px-3.5 py-1.5 text-sm transition ${i === 0 ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg hover:text-fg"}`}>{c}</button>
          ))}
        </div>
      </section>
      <section className="container-x grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((a) => <ArticleCard key={a.slug} a={a} />)}
      </section>
    </>
  );
}

import { Question } from "@/components/ArticleCard";
import { consultant } from "@/data/content";

export default function Consultant() {
  return (
    <>
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x py-12">
          <p className="kicker">Consultant+</p>
          <h1 className="headline mt-3 max-w-2xl text-4xl sm:text-5xl">Întrebări de contabilitate, cu răspuns argumentat.</h1>
          <p className="mt-4 max-w-xl font-serif text-lg text-muted">Articole operative publicate între numerele revistei, plus traduceri rom.–rus. ale materialelor de bază. Disponibile abonaților.</p>
        </div>
      </section>
      <section className="container-x py-10">
        <div className="flex flex-wrap gap-2">
          {["Toate", "TVA", "Impozit pe venit", "Salarizare", "Documente primare", "Audit"].map((c, i) => (
            <button key={c} className={`h-8 border px-3 text-[12px] font-bold uppercase tracking-wider ${i === 0 ? "border-brand-deep bg-brand-deep text-white" : "border-line text-muted hover:border-fg hover:text-fg"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{consultant.map((a) => <Question key={a.slug} a={a} />)}</div>
      </section>
    </>
  );
}

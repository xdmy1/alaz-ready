import { QuestionCard } from "@/components/ArticleCard";
import { consultant } from "@/data/content";

export default function Consultant() {
  return (
    <>
      <section className="container-x pt-16 sm:pt-20">
        <p className="eyebrow">Consultant+</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Întrebări de contabilitate, cu răspuns argumentat</h1>
        <p className="mt-4 max-w-xl text-muted">Articole operative, publicate între numerele revistei, plus traduceri rom.–rus. ale materialelor de bază. Disponibile abonaților.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Toate", "TVA", "Impozit pe venit", "Salarizare", "Documente primare", "Audit"].map((c, i) => (
            <button key={c} className={`rounded-full border px-3.5 py-1.5 text-sm transition ${i === 0 ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg hover:text-fg"}`}>{c}</button>
          ))}
        </div>
      </section>
      <section className="container-x grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {consultant.map((a) => <QuestionCard key={a.slug} a={a} />)}
      </section>
    </>
  );
}

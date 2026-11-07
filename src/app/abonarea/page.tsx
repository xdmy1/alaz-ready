import Pricing from "@/components/Pricing";
import Cover from "@/components/Cover";
import { notes } from "@/data/content";

export default function Abonarea() {
  return (
    <>
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-[1fr_260px]">
          <div>
            <p className="kicker">Abonarea pentru anul 2027</p>
            <h1 className="headline mt-3 max-w-2xl text-4xl sm:text-5xl">Redacția revistei „Contabilitate și audit” anunță abonarea pentru anul 2027.</h1>
            <p className="mt-5 max-w-xl font-serif text-lg text-muted">Trei pachete pentru 12 luni: acces digital, revista tipărită cu acces digital, sau pachetul Platinum pentru echipe.</p>
          </div>
          <div className="hidden lg:flex lg:justify-end"><Cover className="w-48 rotate-[-4deg] shadow-2xl" /></div>
        </div>
      </section>
      <section className="container-x py-14 lg:py-16">
        <Pricing />
        <p className="mt-6 text-center text-xs text-muted">Prețurile includ TVA. Factura fiscală se emite pe datele companiei.</p>
      </section>
      <section className="container-x border-t border-line py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div className="section-title lg:border-b-0"><h2>Note</h2></div>
          <ol className="divide-y divide-line">
            {notes.map((n, i) => (
              <li key={i} className="flex gap-5 py-4 text-[15px] leading-relaxed"><span className="font-serif text-2xl font-semibold leading-none text-gold">{i + 1}.</span>{n}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

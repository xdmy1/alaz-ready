import Pricing from "@/components/Pricing";
import { faq } from "@/data/content";

export default function Abonamente() {
  return (
    <>
      <section className="container-x pt-16 text-center sm:pt-24">
        <p className="eyebrow">Abonamente</p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Un singur abonament. Toată legislația, la zi.</h1>
        <p className="mx-auto mt-5 max-w-lg text-muted">Fără pachete confuze. Alegi digital, digital cu revistă, sau un plan pentru echipă.</p>
      </section>
      <Pricing />
      <section className="container-x border-t border-line py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight">Întrebări frecvente</h2>
          <dl className="divide-y divide-line">
            {faq.map((f) => (
              <div key={f.q} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
                <dt className="font-medium">{f.q}</dt>
                <dd className="text-sm leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

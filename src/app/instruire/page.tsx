import { trainings } from "@/data/content";

/* eslint-disable @next/next/no-img-element */
export default function Instruire() {
  const [next, ...rest] = trainings;
  return (
    <>
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x py-12">
          <p className="kicker">Instruire</p>
          <h1 className="headline mt-3 max-w-2xl text-4xl sm:text-5xl">Seminare și webinare pentru contabili.</h1>
          <p className="mt-4 max-w-xl font-serif text-lg text-muted">Organizate de firma instructiv-consultativă „Contabil-Service”. Abonații revistei au 10% reducere la taxa de participare.</p>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="section-title"><h2>Următorul eveniment</h2></div>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12">
          <div className="photo aspect-[16/10]"><img src={next.img} alt="" /></div>
          <div>
            <p className="meta"><span className="font-bold uppercase tracking-[0.08em] text-brand">{next.format}</span><span className="mx-1.5">·</span>{next.date}, {next.time}</p>
            <h3 className="headline mt-3 text-3xl">{next.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">Patru ore de lucru pe cazuri concrete, cu materialele trimise participanților și înregistrarea disponibilă 30 de zile.</p>
            <div className="mt-6 flex flex-wrap gap-3"><button className="btn-yellow">Înscriere</button><button className="btn-outline">Programul</button></div>
          </div>
        </div>
      </section>

      <section className="container-x border-t border-line py-14">
        <div className="section-title"><h2>Calendarul instruirilor</h2></div>
        <ul className="divide-y divide-line">
          {rest.map((t) => (
            <li key={t.title} className="grid gap-4 py-6 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-8">
              <div className="leading-none"><span className="block font-serif text-4xl font-semibold text-brand">{t.day}</span><span className="text-[11px] font-bold uppercase tracking-wider text-muted">{t.month}</span></div>
              <div><h3 className="headline text-xl">{t.title}</h3><p className="meta mt-1.5">{t.format} · {t.time}</p></div>
              <button className="btn-outline">Înscriere</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

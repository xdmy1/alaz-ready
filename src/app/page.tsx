import Link from "next/link";
import { Lead, Row, Numbered, Question } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Cover from "@/components/Cover";
import { news, consultant, mostRead, alwaysAtHand, issue, trainings } from "@/data/content";

export default function Home() {
  const [lead, ...rest] = news;
  return (
    <>
      {/* Deschidere: articolul principal + trei noutăți. Atât. */}
      <section className="container-x grid gap-12 py-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-16">
        <Lead a={lead} />
        <div>
          <div className="section-title"><h2>Noutăți</h2><Link href="/noutati">Toate noutățile</Link></div>
          <div className="mt-2">{rest.slice(0, 3).map((a) => <Row key={a.slug} a={a} thumb={false} />)}</div>
          <div className="mt-8"><Newsletter /></div>
        </div>
      </section>

      {/* Revista și Consultant+: cele două produse spre care trimitem cititorul */}
      <section className="container-x grid gap-6 pb-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6 bg-bg-soft p-8 sm:flex-row sm:items-center sm:p-10">
          <Cover className="w-36 shrink-0 shadow-xl sm:w-40" />
          <div className="min-w-0">
            <p className="kicker">Revista · {issue.month}</p>
            <h2 className="headline mt-2 text-[26px]">Numărul {issue.number} este disponibil.</h2>
            <ul className="mt-4 space-y-1.5 text-[14px] text-muted">
              {issue.contents.slice(0, 3).map((c) => <li key={c} className="border-l-2 border-accent pl-3">{c}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/revista" className="btn-navy">Citește numărul</Link>
              <Link href="/revista#arhiva" className="btn-outline">Arhiva</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-brand-deep p-8 text-white sm:p-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent">Consultant+</p>
            <h2 className="headline mt-2 text-[26px]">Răspunsuri argumentate, între două numere ale revistei.</h2>
            <ul className="mt-4 space-y-1.5 text-[14px] text-white/70">
              <li className="border-l-2 border-accent pl-3">Articole operative la schimbările de legislație</li>
              <li className="border-l-2 border-accent pl-3">Întrebările contabililor, cu răspunsul redacției</li>
              <li className="border-l-2 border-accent pl-3">Traduceri rom.–rus. ale materialelor de bază</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/consultant" className="btn-yellow">Deschide Consultant+</Link>
            <Link href="/abonarea" className="inline-flex h-10 items-center px-2 text-[13px] text-white/70 underline underline-offset-4 hover:text-white">Cum obțin acces</Link>
          </div>
        </div>
      </section>

      {/* Consultant+ */}
      <section className="container-x border-t border-line py-16">
        <div className="section-title"><h2>Întrebări de contabilitate</h2><Link href="/consultant">Toate, în Consultant+</Link></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {consultant.slice(0, 3).map((a) => <Question key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Cele mai citite + Util */}
      <section className="container-x grid gap-12 border-t border-line py-16 lg:grid-cols-[1fr_320px] lg:gap-20">
        <div>
          <div className="section-title"><h2>Cele mai citite</h2></div>
          <div className="mt-2">{mostRead.slice(0, 5).map((a, i) => <Numbered key={a.slug} a={a} n={i + 1} />)}</div>
        </div>
        <aside>
          <div className="section-title"><h2>Util</h2></div>
          <ul className="mt-2 divide-y divide-line">
            {alwaysAtHand.map((t) => (
              <li key={t}><Link href="/la-indemana" className="flex items-center justify-between py-3.5 text-[15px] hover:text-brand">{t}<span className="text-gold">→</span></Link></li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Instruire: următorul eveniment */}
      <section className="container-x pb-20">
        <div className="flex flex-col gap-6 border border-line p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <div className="text-center leading-none"><span className="block font-serif text-5xl font-semibold text-brand">{trainings[0].day}</span><span className="text-[11px] font-bold uppercase tracking-wider text-muted">{trainings[0].month}</span></div>
            <div>
              <p className="kicker">Instruire · {trainings[0].format}</p>
              <h2 className="headline mt-1.5 text-2xl">{trainings[0].title}</h2>
              <p className="meta mt-1.5">{trainings[0].time} · Abonații au 10% reducere</p>
            </div>
          </div>
          <div className="flex shrink-0 gap-3"><Link href="/instruire" className="btn-yellow">Înscriere</Link><Link href="/instruire" className="btn-outline">Toate instruirile</Link></div>
        </div>
      </section>
    </>
  );
}

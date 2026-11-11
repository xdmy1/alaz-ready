import Link from "next/link";
import { Lead, Row, Numbered, Question } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Cover from "@/components/Cover";
import { news, consultant, mostRead, alwaysAtHand, issue } from "@/data/content";

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

      {/* Numărul curent, pe fundal deschis */}
      <section className="bg-bg-soft">
        <div className="container-x flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:gap-12">
          <Cover className="w-44 shrink-0 shadow-xl sm:w-52" />
          <div className="min-w-0 flex-1">
            <p className="kicker">Numărul curent</p>
            <h2 className="headline mt-2 text-3xl">{issue.month}</h2>
            <ul className="mt-5 grid gap-x-10 gap-y-2 text-[15px] text-muted md:grid-cols-2">
              {issue.contents.slice(0, 4).map((c) => <li key={c} className="border-l-2 border-accent pl-3">{c}</li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/revista" className="btn-navy">Citește numărul</Link>
              <Link href="/revista#arhiva" className="btn-outline">Arhiva</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant+ */}
      <section className="container-x py-16">
        <div className="section-title"><h2>Întrebări de contabilitate</h2><Link href="/consultant">Toate, în Consultant+</Link></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {consultant.slice(0, 3).map((a) => <Question key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Cele mai citite + Resurse */}
      <section className="container-x grid gap-12 border-t border-line py-16 lg:grid-cols-[1fr_320px] lg:gap-20">
        <div>
          <div className="section-title"><h2>Cele mai citite</h2></div>
          <div className="mt-2">{mostRead.slice(0, 5).map((a, i) => <Numbered key={a.slug} a={a} n={i + 1} />)}</div>
        </div>
        <aside>
          <div className="section-title"><h2>Resurse</h2></div>
          <ul className="mt-2 divide-y divide-line">
            {alwaysAtHand.map((t) => (
              <li key={t}><Link href="/la-indemana" className="flex items-center justify-between py-3.5 text-[15px] hover:text-brand">{t}<span className="text-gold">→</span></Link></li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Abonare */}
      <section className="container-x pb-20">
        <div className="flex flex-col gap-8 bg-brand-deep px-8 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">Abonarea pentru anul 2027</p>
            <h2 className="headline mt-3 max-w-lg text-3xl">Revista, arhiva și Consultant+, de la 2 988 lei pe an.</h2>
            <p className="mt-3 max-w-md text-sm text-white/65">Print, Digital sau Platinum. Reducere 10% la seminarele Contabil-Service.</p>
          </div>
          <Link href="/abonarea" className="btn-yellow h-12 shrink-0 px-8">Vezi pachetele</Link>
        </div>
      </section>
    </>
  );
}

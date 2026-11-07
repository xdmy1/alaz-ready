import Link from "next/link";
import { Lead, Row, Numbered, Question } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Cover from "@/components/Cover";
import { news, consultant, mostRead, rubrics, alwaysAtHand, calendar, issue } from "@/data/content";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const [lead, ...rest] = news;
  return (
    <>
      {/* Prima pagină: articol principal + listă noutăți + sidebar (numărul curent, newsletter) */}
      <section className="container-x grid gap-10 py-8 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <Lead a={lead} />
          <div>
            <div className="section-title"><h2>Noutăți</h2><Link href="/noutati">Toate →</Link></div>
            {rest.map((a) => <Row key={a.slug} a={a} thumb={false} />)}
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <div className="section-title"><h2>Numărul curent</h2><Link href="/revista#arhiva">Arhiva</Link></div>
            <div className="mt-4 flex gap-4">
              <Cover className="w-32 shrink-0" />
              <div className="min-w-0">
                <p className="font-serif text-xl font-semibold">Nr. {issue.number} / {issue.year}</p>
                <p className="meta">{issue.month}</p>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-snug">
                  {issue.contents.slice(0, 4).map((c) => <li key={c} className="border-l-2 border-accent pl-2">{c}</li>)}
                </ul>
              </div>
            </div>
            <Link href="/revista" className="btn-navy mt-4 w-full">Citește numărul</Link>
          </div>
          <Newsletter />
        </aside>
      </section>

      {/* Consultant+ */}
      <section className="container-x pb-12">
        <div className="section-title"><h2>Consultant+ · Top întrebări de contabilitate</h2><Link href="/consultant">Toate întrebările →</Link></div>
        <div className="mt-5 grid gap-4 grid-cols-2 lg:grid-cols-5">
          {consultant.map((a) => <Question key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Calendar: bandă bleumarin */}
      <section className="bg-brand-deep text-white">
        <div className="container-x grid gap-6 py-8 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">Calendarul contribuabilului</p>
            <p className="mt-1 font-serif text-2xl">Termene apropiate</p>
            <Link href="/la-indemana" className="mt-3 inline-block text-xs text-white/70 underline underline-offset-4 hover:text-white">Tot calendarul</Link>
          </div>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {calendar.map((c, i) => (
              <li key={i} className="flex gap-3 bg-brand-deep p-4">
                <div className="text-center leading-none">
                  <span className="block font-serif text-3xl font-semibold text-accent">{c.day}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{c.month}</span>
                </div>
                <div className="min-w-0"><p className="text-sm font-medium leading-snug">{c.what}</p><p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{c.type}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cele mai citite + Resurse */}
      <section className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div>
          <div className="section-title"><h2>Cele mai citite articole</h2></div>
          <div className="grid gap-x-10 md:grid-cols-2">
            <div>{mostRead.slice(0, 3).map((a, i) => <Numbered key={a.slug} a={a} n={i + 1} />)}</div>
            <div>{mostRead.slice(3).map((a, i) => <Numbered key={a.slug} a={a} n={i + 4} />)}</div>
          </div>
        </div>
        <aside>
          <div className="section-title"><h2>Întotdeauna la îndemână</h2></div>
          <ul className="divide-y divide-line">
            {alwaysAtHand.map((t) => (
              <li key={t}><Link href="/la-indemana" className="flex items-center justify-between py-3 text-[15px] hover:text-brand">{t}<span className="text-gold">→</span></Link></li>
            ))}
          </ul>
          <div className="mt-6 border border-line p-5">
            <p className="kicker">Revista tipărită</p>
            <p className="mt-1 font-serif text-lg leading-snug">Abonare 2027: Print, Digital sau Platinum.</p>
            <p className="mt-1 text-sm text-muted">De la 2 988 lei pe an.</p>
            <Link href="/abonarea" className="btn-yellow mt-4 w-full">Vezi pachetele</Link>
          </div>
        </aside>
      </section>

      {/* Rubrici */}
      <section className="container-x pb-14">
        <div className="section-title"><h2>Rubricile noastre</h2><Link href="/revista#rubrici">Toate rubricile →</Link></div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {rubrics.slice(0, 6).map((r) => (
            <Link key={r.name} href="/revista#rubrici" className="group">
              <div className="photo aspect-[16/10]"><img src={r.img} alt="" className="transition duration-500 group-hover:scale-105" /></div>
              <p className="mt-2 text-[13px] font-bold uppercase leading-snug tracking-[0.06em] text-brand group-hover:underline">{r.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Abonare: bandă galbenă */}
      <section className="bg-accent text-accent-fg">
        <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em]">Abonarea pentru anul 2027</p>
            <p className="mt-1 font-serif text-3xl font-semibold leading-tight">Revista, arhiva din 2000 și Consultant+.</p>
            <p className="mt-2 text-sm opacity-80">Print 3 360 lei · Digital 2 988 lei · Platinum 3 924 lei, pe an. Reducere 10% la seminarele Contabil-Service.</p>
          </div>
          <Link href="/abonarea" className="btn-navy h-12 shrink-0 px-8">Obține factura</Link>
        </div>
      </section>
    </>
  );
}

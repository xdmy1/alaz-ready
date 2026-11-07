import Link from "next/link";
import ArticleCard, { ArticleRow, QuestionCard } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { news, consultant, mostRead, rubrics, alwaysAtHand, calendar, issue } from "@/data/content";

export default function Home() {
  const [lead, ...rest] = news;
  return (
    <>
      {/* Hero: fără banner de sus, fără carusel, fără curs valutar. Newsletter-ul urcă aici. */}
      <section className="container-x pb-12 pt-16 sm:pt-24">
        <p className="eyebrow">Revista contabililor · din 1995</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Contabilitate și audit, <span className="text-muted">explicate de practicieni.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Consultații, legislație adnotată și răspunsuri la întrebările contabililor din Moldova. Esențialul săptămânii, lunea, pe email.
        </p>
        <div className="mt-8"><Newsletter /></div>
        <p className="mt-3 text-xs text-muted">Fără spam. Dezabonare oricând.</p>
      </section>

      {/* Noutăți */}
      <section className="container-x border-t border-line py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Noutăți</h2>
          <Link href="/noutati" className="link-quiet text-sm">Mai multe →</Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ArticleCard a={lead} size="lg" />
          <div className="flex flex-col">{rest.map((a) => <ArticleRow key={a.slug} a={a} thumb={false} />)}</div>
        </div>
      </section>

      {/* Consultant+ : Top întrebări de contabilitate */}
      <section className="border-y border-line bg-bg-soft">
        <div className="container-x py-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="eyebrow">Consultant+</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Top întrebări de contabilitate</h2>
            </div>
            <Link href="/consultant" className="link-quiet text-sm">Toate întrebările →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consultant.slice(0, 3).map((a) => <QuestionCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>

      {/* Numărul curent + Calendarul contribuabilului */}
      <section className="container-x grid gap-12 py-14 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="flex min-w-0 flex-col gap-6 sm:flex-row">
          <div className="flex aspect-[3/4] w-36 shrink-0 flex-col justify-between rounded-xl border border-line bg-bg-soft p-4 sm:w-44">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{issue.number}</span>
            <span className="text-2xl font-semibold leading-none tracking-tight">C<span className="text-accent">&</span>A</span>
          </div>
          <div className="min-w-0">
            <p className="eyebrow">Numărul curent</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">{issue.month}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {issue.contents.map((c) => <li key={c} className="truncate">— {c}</li>)}
            </ul>
            <div className="mt-6 flex gap-2">
              <Link href="/revista" className="btn-primary px-4 py-2 text-sm">Citește numărul</Link>
              <Link href="/revista#arhiva" className="rounded-full border border-line px-4 py-2 text-sm transition hover:border-fg">Arhiva</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Calendarul contribuabilului</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Termene apropiate</h2>
            </div>
            <Link href="/la-indemana" className="link-quiet text-sm">Tot calendarul →</Link>
          </div>
          <ul className="mt-5 divide-y divide-line rounded-2xl border border-line">
            {calendar.map((c, i) => (
              <li key={i} className="flex items-center gap-4 px-4 py-3.5">
                <div className="w-12 shrink-0 text-center leading-none">
                  <span className="block text-xl font-semibold tracking-tight">{c.day}</span>
                  <span className="font-mono text-[10px] uppercase text-muted">{c.month}</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{c.what}</p>
                  <p className="text-xs text-muted">{c.type}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cele mai citite */}
      <section className="container-x border-t border-line py-14">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">Cele mai citite articole</h2>
        <div className="grid gap-x-12 lg:grid-cols-2">
          {mostRead.map((a) => <ArticleRow key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Întotdeauna la îndemână */}
      <section className="border-y border-line bg-bg-soft">
        <div className="container-x py-14">
          <p className="eyebrow">Resurse</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Instrumente de lucru</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {alwaysAtHand.map((t) => (
              <Link key={t.title} href={t.href} className="group rounded-2xl border border-line bg-bg p-5 transition hover:border-fg">
                <p className="font-medium">{t.title}</p>
                <p className="mt-1 text-sm text-muted">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rubricile noastre: chip-uri în loc de carusel */}
      <section className="container-x py-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Rubricile noastre</h2>
          <Link href="/revista#rubrici" className="link-quiet text-sm">Toate rubricile →</Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {rubrics.slice(0, 8).map((r) => (
            <Link key={r} href="/revista#rubrici" className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-fg hover:text-fg">{r}</Link>
          ))}
        </div>
      </section>

      {/* Abonarea 2027 */}
      <section className="container-x pb-20">
        <div className="grid items-center gap-10 rounded-3xl bg-brand-deep px-8 py-12 text-white sm:px-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">Abonarea pentru 2027</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight">Revista, arhiva și Consultant+. De la 2 988 lei pe an.</h2>
            <p className="mt-3 max-w-md text-sm opacity-70">Print, Digital sau Platinum. Plus 10% reducere la seminarele Contabil-Service.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/abonarea" className="btn-primary px-5 py-2.5 text-sm">Vezi pachetele</Link>
            <Link href="/revista" className="rounded-full border border-white/30 px-5 py-2.5 text-sm transition hover:border-white">Răsfoiește revista</Link>
          </div>
        </div>
      </section>
    </>
  );
}

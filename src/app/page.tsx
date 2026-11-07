import Link from "next/link";
import ArticleCard, { ArticleRow } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { articles, legislation } from "@/data/content";

export default function Home() {
  const [lead, ...rest] = articles;
  return (
    <>
      {/* Hero: un singur mesaj + newsletter sus, fără carusel */}
      <section className="container-x pb-12 pt-16 sm:pt-24">
        <p className="eyebrow">Portalul contabililor din Moldova</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Legislația, explicată <span className="text-muted">înainte să devină problemă.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Noutăți fiscale, practică contabilă și răspunsuri de la experți. Primești esențialul săptămânii, în fiecare luni, pe email.
        </p>
        <div className="mt-8"><Newsletter /></div>
        <p className="mt-3 text-xs text-muted">Peste 18.000 de contabili abonați. Fără spam, dezabonare oricând.</p>
      </section>

      {/* Noutăți: articol principal + listă */}
      <section className="container-x border-t border-line py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Ultimele noutăți</h2>
          <Link href="/noutati" className="link-quiet text-sm">Toate noutățile →</Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ArticleCard a={lead} size="lg" />
          <div className="flex flex-col">
            {rest.slice(0, 4).map((a) => <ArticleRow key={a.slug} a={a} />)}
          </div>
        </div>
      </section>

      {/* Legislație recentă: tabel curat */}
      <section className="border-y border-line bg-bg-soft">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Monitorul</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Acte publicate recent</h2>
            <p className="mt-3 text-sm text-muted">Urmărim Monitorul Oficial zilnic și marcăm ce te afectează direct.</p>
            <Link href="/legislatie" className="mt-6 inline-block rounded-full border border-line px-4 py-2 text-sm transition hover:border-fg">Baza de legislație</Link>
          </div>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-bg">
            {legislation.map((l) => (
              <li key={l.code} className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted">{l.code}</p>
                  <p className="mt-0.5 truncate text-sm font-medium">{l.title}</p>
                </div>
                <span className="shrink-0 text-xs text-muted">{l.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mai multe articole */}
      <section className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(1, 4).map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      {/* Revista + abonare: un singur CTA */}
      <section className="container-x pb-20">
        <div className="grid items-center gap-10 rounded-3xl bg-fg px-8 py-12 text-bg sm:px-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">Revista „Contabilitate și audit”</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight">Tot portalul, plus revista tipărită. De la 149 lei pe lună.</h2>
            <p className="mt-3 max-w-md text-sm opacity-70">Acces nelimitat la analize, legislație adnotată și întrebări către experți.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/abonamente" className="rounded-full bg-bg px-5 py-2.5 text-sm font-medium text-fg transition hover:opacity-90">Vezi planurile</Link>
            <Link href="/revista" className="rounded-full border border-bg/30 px-5 py-2.5 text-sm transition hover:border-bg">Răsfoiește revista</Link>
          </div>
        </div>
      </section>
    </>
  );
}

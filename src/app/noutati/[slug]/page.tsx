import Link from "next/link";
import { notFound } from "next/navigation";
import { Meta, ArticleRow } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { allArticles } from "@/data/content";

export function generateStaticParams() { return allArticles.map((a) => ({ slug: a.slug })); }

export default async function Articol({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = allArticles.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = allArticles.filter((x) => x.slug !== slug && x.rubric === a.rubric).slice(0, 3);

  return (
    <article className="container-x py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/noutati" className="link-quiet text-sm">← Înapoi</Link>
        <div className="mt-6"><Meta a={a} /></div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{a.title}</h1>
        {a.excerpt && <p className="mt-5 text-lg leading-relaxed text-muted">{a.excerpt}</p>}
        <div className="mt-8 flex items-center gap-3 border-y border-line py-4 text-sm">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-bg-soft font-medium">RC</span>
          <div><p className="font-medium">Redacția „Contabilitate și audit”</p><p className="text-xs text-muted">Consultații privind contabilitatea și impozitarea</p></div>
        </div>
        <div className="mt-10 space-y-6 text-[17px] leading-[1.75]">
          <p>Textul de mai jos este un exemplu de machetă pentru pagina de articol. Scopul este să arate ritmul tipografic, lățimea coloanei de citit și felul în care sunt marcate citatele din acte normative.</p>
          <h2 className="text-2xl font-semibold tracking-tight">Cadrul normativ</h2>
          <p>Pentru majoritatea entităților, schimbarea se resimte în primul trimestru. Recomandăm o reconciliere a cifrei de afaceri pe ultimele 12 luni consecutive, nu pe anul calendaristic.</p>
          <blockquote className="border-l-2 border-brand pl-5 text-muted">„Înregistrarea tardivă atrage calcularea TVA din propria marjă, nu de la client.” — Codul fiscal, art. 112</blockquote>
          <p>În continuare parcurgem trei scenarii practice: comerț cu amănuntul, servicii exportate și intermediere.</p>
        </div>

        {a.premium && (
          <div className="mt-12 rounded-3xl border border-line bg-bg-soft p-8 text-center">
            <p className="eyebrow">Material pentru abonați</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Continuarea este disponibilă în orice pachet de abonare</h3>
            <div className="mt-5 flex justify-center gap-2">
              <Link href="/abonarea" className="btn-primary px-5 py-2.5 text-sm">Vezi pachetele</Link>
              <Link href="/cont" className="rounded-full border border-line px-5 py-2.5 text-sm transition hover:border-fg">Am cont</Link>
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow mb-3">Newsletter</p>
          <p className="mb-4 text-sm text-muted">Esențialul săptămânii, lunea, pe email.</p>
          <Newsletter compact />
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-2 text-lg font-semibold tracking-tight">Din aceeași rubrică</h3>
            {related.map((r) => <ArticleRow key={r.slug} a={r} />)}
          </div>
        )}
      </div>
    </article>
  );
}

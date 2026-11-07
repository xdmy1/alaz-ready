import Link from "next/link";
import { notFound } from "next/navigation";
import { Meta, ArticleRow } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/data/content";

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }

export default async function Articol({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <article className="container-x py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/noutati" className="link-quiet text-sm">← Noutăți</Link>
        <div className="mt-6"><Meta a={a} /></div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{a.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{a.excerpt}</p>
        <div className="mt-8 flex items-center gap-3 border-y border-line py-4 text-sm">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-bg-soft font-medium">VC</span>
          <div><p className="font-medium">Veronica Cernat</p><p className="text-xs text-muted">Expert fiscal, redactor-șef</p></div>
        </div>
        <div className="prose-cmd mt-10 space-y-6 text-[17px] leading-[1.75]">
          <p>Începând cu 1 ianuarie, pragul de înregistrare obligatorie ca plătitor de TVA se modifică, iar livrările efectuate către parteneri din afara țării intră într-un regim de raportare separat. Pentru majoritatea entităților mici, schimbarea se simte în primul trimestru.</p>
          <h2 className="text-2xl font-semibold tracking-tight">Ce verifici primul</h2>
          <p>Recomandăm o reconciliere a cifrei de afaceri pe ultimele 12 luni consecutive, nu pe anul calendaristic. Multe companii ratează pragul tocmai pentru că privesc doar exercițiul curent.</p>
          <blockquote className="border-l-2 border-accent pl-5 text-muted">„Înregistrarea tardivă atrage calcularea TVA din propria marjă, nu de la client.” — Codul fiscal, art. 112</blockquote>
          <p>În secțiunea următoare, disponibilă abonaților, parcurgem trei scenarii: comerț cu amănuntul, servicii IT exportate și intermediere.</p>
        </div>

        {a.premium && (
          <div className="mt-12 rounded-3xl border border-line bg-bg-soft p-8 text-center">
            <p className="eyebrow">Conținut pentru abonați</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Continuarea articolului este disponibilă în planul Digital</h3>
            <Link href="/abonamente" className="mt-5 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg">Vezi planurile</Link>
          </div>
        )}

        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow mb-3">Newsletter</p>
          <p className="mb-4 text-sm text-muted">Esențialul săptămânii, lunea, pe email.</p>
          <Newsletter compact />
        </div>

        <div className="mt-16">
          <h3 className="mb-2 text-lg font-semibold tracking-tight">Citește și</h3>
          {related.map((r) => <ArticleRow key={r.slug} a={r} />)}
        </div>
      </div>
    </article>
  );
}

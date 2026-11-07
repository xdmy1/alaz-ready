import Link from "next/link";
import { notFound } from "next/navigation";
import { Meta, Row } from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Cover from "@/components/Cover";
import { allArticles, issue } from "@/data/content";

/* eslint-disable @next/next/no-img-element */
export function generateStaticParams() { return allArticles.map((a) => ({ slug: a.slug })); }

export default async function Articol({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = allArticles.find((x) => x.slug === slug);
  if (!a) notFound();
  const related = allArticles.filter((x) => x.slug !== slug && x.rubric === a.rubric).slice(0, 3);

  return (
    <article className="container-x grid gap-12 py-10 lg:grid-cols-[1fr_300px]">
      <div className="max-w-3xl">
        <p className="meta"><Link href="/" className="hover:text-fg">Acasă</Link> › <Link href="/noutati" className="hover:text-fg">{a.rubric}</Link></p>
        <h1 className="headline mt-4 text-3xl sm:text-[44px] sm:leading-[1.1]">{a.title}</h1>
        {a.excerpt && <p className="mt-5 font-serif text-xl leading-relaxed text-muted">{a.excerpt}</p>}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-line py-3">
          <Meta a={a} />
          <span className="meta">Lectură: {a.read}</span>
        </div>
        <div className="photo mt-6 aspect-[16/9]"><img src={a.img} alt="" /></div>
        <div className="mt-8 space-y-6 font-serif text-[19px] leading-[1.7]">
          <p>Textul de mai jos este o machetă pentru pagina de articol: arată ritmul tipografic, lățimea coloanei de citit și felul în care sunt marcate citatele din acte normative.</p>
          <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-brand">Cadrul normativ</h2>
          <p>Pentru majoritatea entităților, schimbarea se resimte în primul trimestru. Recomandăm o reconciliere a cifrei de afaceri pe ultimele 12 luni consecutive, nu pe anul calendaristic.</p>
          <blockquote className="border-l-4 border-accent bg-bg-soft px-6 py-4 text-[17px] italic">„Înregistrarea tardivă atrage calcularea TVA din propria marjă, nu de la client.” <span className="not-italic text-muted">— Codul fiscal, art. 112</span></blockquote>
          <p>În continuare parcurgem trei scenarii practice: comerț cu amănuntul, servicii exportate și intermediere.</p>
        </div>
        {a.premium && (
          <div className="mt-10 border-t-4 border-accent bg-bg-soft p-8">
            <p className="kicker">Material pentru abonați</p>
            <p className="headline mt-2 text-2xl">Continuarea este disponibilă în orice pachet de abonare.</p>
            <div className="mt-5 flex flex-wrap gap-3"><Link href="/abonarea" className="btn-yellow">Vezi pachetele</Link><Link href="/cont" className="btn-outline">Am cont</Link></div>
          </div>
        )}
        {related.length > 0 && (
          <div className="mt-12">
            <div className="section-title"><h2>Din aceeași rubrică</h2></div>
            {related.map((r) => <Row key={r.slug} a={r} />)}
          </div>
        )}
      </div>
      <aside className="space-y-8">
        <Newsletter />
        <div>
          <div className="section-title"><h2>Numărul curent</h2></div>
          <div className="mt-4 flex gap-4"><Cover className="w-28 shrink-0" /><div><p className="font-serif text-lg font-semibold">Nr. {issue.number} / {issue.year}</p><p className="meta">{issue.month}</p><Link href="/revista" className="btn-outline mt-4 h-9">Cuprins</Link></div></div>
        </div>
      </aside>
    </article>
  );
}

import Link from "next/link";
import type { Article } from "@/data/content";

/* eslint-disable @next/next/no-img-element */

export function Meta({ a, light = false }: { a: Article; light?: boolean }) {
  return (
    <p className={`meta ${light ? "text-white/70" : ""}`}>
      <span className={`font-bold uppercase tracking-[0.08em] ${light ? "text-accent" : "text-brand"}`}>{a.rubric}</span>
      <span className="mx-1.5">·</span>{a.date}
      {a.premium && <span className={`ml-2 border px-1 py-px text-[9px] font-bold uppercase tracking-wider ${light ? "border-white/40" : "border-gold text-gold"}`}>Abonați</span>}
    </p>
  );
}

export function Lead({ a }: { a: Article }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group block">
      <div className="photo aspect-[16/9]"><img src={a.img} alt="" /></div>
      <div className="pt-4">
        <Meta a={a} />
        <h2 className="headline mt-2 text-[28px] group-hover:underline sm:text-[34px]">{a.title}</h2>
        <p className="mt-3 max-w-2xl font-serif text-[17px] leading-relaxed text-muted">{a.excerpt}</p>
      </div>
    </Link>
  );
}

export function Card({ a }: { a: Article }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group block">
      <div className="photo aspect-[3/2]"><img src={a.img} alt="" /></div>
      <div className="pt-3">
        <Meta a={a} />
        <h3 className="headline mt-1.5 text-lg group-hover:underline">{a.title}</h3>
        {a.excerpt && <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>}
      </div>
    </Link>
  );
}

export function Row({ a, thumb = true }: { a: Article; thumb?: boolean }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group flex gap-4 border-b border-line py-4 last:border-b-0">
      {thumb && <div className="photo h-[72px] w-[108px] shrink-0"><img src={a.img} alt="" /></div>}
      <div className="min-w-0">
        <Meta a={a} />
        <h3 className="headline mt-1 text-[17px] group-hover:underline">{a.title}</h3>
      </div>
    </Link>
  );
}

export function Numbered({ a, n }: { a: Article; n: number }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group flex gap-4 border-b border-line py-4 last:border-b-0">
      <span className="font-serif text-3xl font-semibold leading-none text-gold">{String(n).padStart(2, "0")}</span>
      <div className="min-w-0">
        <h3 className="headline text-[17px] group-hover:underline">{a.title}</h3>
        <Meta a={a} />
      </div>
    </Link>
  );
}

export function Question({ a }: { a: Article }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-brand-deep text-white">
      <img src={a.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="mb-2 inline-block w-fit border-b-2 border-accent pb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">{a.date}</span>
        <h3 className="headline text-lg">{a.title}</h3>
      </div>
    </Link>
  );
}

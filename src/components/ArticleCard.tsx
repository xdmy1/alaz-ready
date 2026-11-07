import Link from "next/link";
import type { Article } from "@/data/content";

export function Meta({ a }: { a: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
      <span className="font-medium text-brand">{a.rubric}</span>
      <span>·</span><span>{a.date}</span><span>·</span><span>{a.read}</span>
      {a.premium && <span className="ml-1 rounded-full border border-line px-1.5 py-px font-mono text-[10px] uppercase tracking-wider">Abonați</span>}
    </div>
  );
}

const Art = ({ seed }: { seed: number }) => (
  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
    style={{ background: `radial-gradient(ellipse at ${20 + (seed * 37) % 60}% ${10 + (seed * 53) % 70}%, color-mix(in oklab, var(--brand) 26%, transparent), transparent 62%)` }} />
);

export default function ArticleCard({ a, size = "md" }: { a: Article; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <Link href={`/noutati/${a.slug}`} className="group block">
      <div className={`mb-4 w-full overflow-hidden rounded-2xl bg-bg-soft ${lg ? "aspect-[16/9]" : "aspect-[3/2]"}`}><Art seed={a.title.length} /></div>
      <Meta a={a} />
      <h3 className={`mt-2 font-semibold leading-snug tracking-tight decoration-line underline-offset-4 group-hover:underline ${lg ? "text-2xl sm:text-3xl" : "text-lg"}`}>{a.title}</h3>
      {a.excerpt && <p className={`mt-2 leading-relaxed text-muted ${lg ? "text-base" : "text-sm"}`}>{a.excerpt}</p>}
    </Link>
  );
}

export function ArticleRow({ a, thumb = true }: { a: Article; thumb?: boolean }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group flex gap-5 border-t border-line py-5 first:border-t-0">
      {thumb && <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-bg-soft sm:block"><Art seed={a.title.length + 3} /></div>}
      <div className="min-w-0">
        <Meta a={a} />
        <h3 className="mt-1.5 font-medium leading-snug tracking-tight decoration-line underline-offset-4 group-hover:underline">{a.title}</h3>
      </div>
    </Link>
  );
}

export function QuestionCard({ a }: { a: Article }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group flex flex-col rounded-2xl border border-line p-6 transition hover:border-fg">
      <span className="font-mono text-[11px] text-muted">{a.date}</span>
      <h3 className="mt-3 flex-1 text-[17px] font-medium leading-snug tracking-tight">{a.title}</h3>
      <span className="mt-5 text-sm text-brand">Citește răspunsul →</span>
    </Link>
  );
}

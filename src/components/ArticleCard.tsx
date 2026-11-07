import Link from "next/link";
import type { Article } from "@/data/content";

export function Meta({ a }: { a: Article }) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <span className="font-medium text-accent">{a.category}</span>
      <span>·</span><span>{a.date}</span><span>·</span><span>{a.read}</span>
      {a.premium && <span className="ml-1 rounded-full border border-line px-1.5 py-px font-mono text-[10px] uppercase tracking-wider">Pro</span>}
    </div>
  );
}

export default function ArticleCard({ a, size = "md" }: { a: Article; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <Link href={`/noutati/${a.slug}`} className="group block">
      <div className={`mb-4 w-full overflow-hidden rounded-2xl bg-bg-soft ${lg ? "aspect-[16/9]" : "aspect-[3/2]"}`}>
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_60%)] transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <Meta a={a} />
      <h3 className={`mt-2 font-semibold leading-snug tracking-tight group-hover:underline decoration-line underline-offset-4 ${lg ? "text-2xl sm:text-3xl" : "text-lg"}`}>{a.title}</h3>
      <p className={`mt-2 text-muted ${lg ? "text-base" : "text-sm"} leading-relaxed`}>{a.excerpt}</p>
    </Link>
  );
}

export function ArticleRow({ a }: { a: Article }) {
  return (
    <Link href={`/noutati/${a.slug}`} className="group flex gap-5 border-t border-line py-5 first:border-t-0">
      <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-bg-soft sm:block">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_65%)]" />
      </div>
      <div className="min-w-0">
        <Meta a={a} />
        <h3 className="mt-1.5 font-medium leading-snug tracking-tight group-hover:underline decoration-line underline-offset-4">{a.title}</h3>
      </div>
    </Link>
  );
}

import { Wordmark } from "./Logo";
import { issue } from "@/data/content";

/* Coperta numărului curent, construită în stilul copertelor reale: fotografie, fundal bleumarin, logo galben. */
export default function Cover({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[210/297] overflow-hidden bg-brand-deep text-white ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={issue.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/30 via-brand-deep/60 to-brand-deep" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex items-start justify-between">
          <div className="bg-accent px-2 py-1 font-serif text-2xl font-bold leading-none text-accent-fg">{issue.number}<span className="block text-[10px] font-sans font-bold tracking-wider">{issue.year}</span></div>
          <p className="text-right text-[8px] font-bold uppercase tracking-[0.14em] text-white/70">Revista contabililor<br />profesioniști</p>
        </div>
        <div>
          <Wordmark className="h-auto w-[60%]" />
          <ul className="mt-3 space-y-1 border-t border-white/20 pt-2 text-[9px] leading-tight text-white/85">
            {issue.contents.slice(0, 3).map((c) => <li key={c}>▸ {c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

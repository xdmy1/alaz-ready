import Link from "next/link";

/* Marcă monocromă: un „C” care se închide printr-o linie de registru,
   aluzie la coloana de totaluri. currentColor => identic pe alb și negru. */
export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M21.5 11.3A7 7 0 1 0 21.5 20.7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16.5 16h7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-fg">
      <Mark />
      {!compact && (
        <span className="leading-[1.05]">
          <span className="block text-[15px] font-semibold tracking-tight">Contabilitate</span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">și audit</span>
        </span>
      )}
    </Link>
  );
}

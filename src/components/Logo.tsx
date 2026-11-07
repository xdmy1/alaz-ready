import Link from "next/link";

/* Monogram: un „C” construit din două linii de registru contabil.
   Folosește currentColor, deci funcționează identic pe alb și pe negru. */
export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M21.5 11.2A7 7 0 1 0 21.5 20.8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 16h7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="text-accent" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-fg">
      <Mark />
      {!compact && (
        <span className="text-[17px] font-semibold tracking-tight">
          contabilitate<span className="text-accent">.md</span>
        </span>
      )}
    </Link>
  );
}

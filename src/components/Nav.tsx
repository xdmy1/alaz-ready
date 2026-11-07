"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/revista", label: "Revista" },
  { href: "/noutati", label: "Noutăți" },
  { href: "/consultant", label: "Consultant+" },
  { href: "/la-indemana", label: "Resurse" },
  { href: "/abonarea", label: "Abonarea" },
];

const Search = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
);

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-brand-deep text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      <div className="container-x flex h-[68px] items-center justify-between gap-6">
        <Logo onDark />
        <nav className="hidden h-full items-stretch md:flex">
          {links.map((l) => {
            const active = path === l.href || path.startsWith(l.href + "/");
            return (
              <Link key={l.href} href={l.href}
                className={`flex items-center border-b-[3px] px-4 text-[13px] font-bold uppercase tracking-[0.1em] transition ${active ? "border-accent text-white" : "border-transparent text-white/75 hover:text-white"}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={() => setSearch(true)} aria-label="Caută" className="grid h-10 w-10 place-items-center text-white/80 hover:text-white"><Search /></button>
          <ThemeToggle />
          <button className="hidden h-10 px-2 text-[11px] font-bold uppercase tracking-wider text-white/70 hover:text-white lg:block">Ro / Ru</button>
          <Link href="/cont" className="hidden px-3 text-[13px] text-white/80 hover:text-white sm:block">Cabinet</Link>
          <span className="ml-2 hidden sm:block"><Link href="/abonarea" className="btn-yellow h-9 whitespace-nowrap">Abonarea 2027</Link></span>
          <button onClick={() => setOpen(!open)} aria-label="Meniu" className="grid h-10 w-10 place-items-center text-white md:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6 6 18"/> : <path d="M3 7h18M3 12h18M3 17h18"/>}</svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-deep md:hidden">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white">{l.label}</Link>
            ))}
            <div className="flex gap-3 py-4">
              <Link href="/abonarea" className="btn-yellow flex-1">Abonarea 2027</Link>
              <Link href="/cont" className="btn flex-1 border border-white/30 text-white">Cabinet</Link>
            </div>
          </div>
        </div>
      )}

      {search && (
        <div className="fixed inset-0 z-50 bg-brand-deep/70 p-4 sm:p-10" onClick={() => setSearch(false)}>
          <div className="mx-auto mt-6 max-w-2xl bg-bg text-fg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 border-b-2 border-accent px-4">
              <span className="text-muted"><Search /></span>
              <input autoFocus placeholder="Căutare pe site: articole, acte normative, formulare…" className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted" />
              <kbd className="border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted">ESC</kbd>
            </div>
            <div className="p-3">
              <p className="kicker px-2 py-2">Căutări frecvente</p>
              {["Declarația TVA 12", "Balanța timpului de muncă 2026", "Codul fiscal art. 24", "Formularul IPC21"].map((s) => (
                <button key={s} className="block w-full px-2 py-2 text-left text-sm hover:bg-bg-soft">{s}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

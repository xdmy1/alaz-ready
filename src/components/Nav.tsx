"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/noutati", label: "Noutăți" },
  { href: "/legislatie", label: "Legislație" },
  { href: "/revista", label: "Revista" },
  { href: "/seminare", label: "Seminare" },
  { href: "/abonamente", label: "Abonamente" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = path === l.href || path.startsWith(l.href + "/");
            return (
              <Link key={l.href} href={l.href}
                className={`rounded-full px-3.5 py-1.5 text-sm transition ${active ? "bg-bg-soft text-fg" : "text-muted hover:text-fg"}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={() => setSearch(true)} aria-label="Caută" className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-bg-soft hover:text-fg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </button>
          <ThemeToggle />
          <Link href="/cont" className="hidden rounded-full px-3.5 py-1.5 text-sm text-muted transition hover:text-fg sm:block">Intră în cont</Link>
          <Link href="/abonamente" className="ml-1 hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-85 sm:block">Abonează-te</Link>
          <button onClick={() => setOpen(!open)} aria-label="Meniu" className="grid h-9 w-9 place-items-center rounded-full text-fg md:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6 6 18"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}</svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base text-fg">{l.label}</Link>
            ))}
            <Link href="/abonamente" className="mt-2 rounded-full bg-fg px-4 py-2.5 text-center text-sm font-medium text-bg">Abonează-te</Link>
          </div>
        </div>
      )}

      {search && (
        <div className="fixed inset-0 z-50 bg-fg/40 p-4 backdrop-blur-sm sm:p-10" onClick={() => setSearch(false)}>
          <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-line bg-bg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-muted"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
              <input autoFocus placeholder="Caută articole, legi, formulare…" className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted" />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted">ESC</kbd>
            </div>
            <div className="border-t border-line p-2">
              <p className="eyebrow px-2 pb-2 pt-2">Căutări frecvente</p>
              {["Declarația TVA 2026", "Salariul minim", "Codul fiscal art. 24", "Formular IPC21"].map((s) => (
                <button key={s} className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm hover:bg-bg-soft">
                  <span>{s}</span><span className="text-muted">↵</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

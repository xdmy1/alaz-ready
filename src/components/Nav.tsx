"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

/* Revista și Consultant+ sunt evidențiate: acolo vrem să ajungă cititorii. */
const links = [
  { href: "/revista", label: "Revista", hot: true },
  { href: "/consultant", label: "Consultant+", hot: true },
  { href: "/instruire", label: "Instruire" },
  { href: "/la-indemana", label: "Util" },
  { href: "/noutati", label: "Noutăți" },
];

const Search = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
);

function LoginFields({ stacked = false }: { stacked?: boolean }) {
  const field = "h-9 min-w-0 bg-white/10 px-3 text-[13px] text-white outline-none placeholder:text-white/50 focus:bg-white/15";
  return (
    <form action="#" className={stacked ? "flex flex-col gap-2" : "flex items-center gap-2"}>
      <input type="email" placeholder="Email" aria-label="Email" className={`${field} ${stacked ? "h-11 w-full" : "w-40"}`} />
      <input type="password" placeholder="Parola" aria-label="Parola" className={`${field} ${stacked ? "h-11 w-full" : "w-28"}`} />
      <button type="button" className={`btn-yellow ${stacked ? "h-11" : "h-9"}`}>Logare</button>
    </form>
  );
}

export default function Nav() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-deep text-white">
      {/* Rândul 1: logo + logare, mereu pe ecran */}
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-[76px]">
        <Logo onDark />
        <div className="flex items-center gap-1 md:gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <LoginFields />
            <Link href="/cont" className="hidden text-[12px] text-white/60 underline underline-offset-4 hover:text-white lg:block">Înregistrare</Link>
          </div>
          <button onClick={() => setSearch(true)} aria-label="Caută" className="grid h-10 w-10 place-items-center text-white/80 hover:text-white"><Search /></button>
          <button className="hidden h-10 px-1 text-[11px] font-bold uppercase tracking-wider text-white/70 hover:text-white lg:block">Ro / Ru</button>
          <span className="md:hidden"><button onClick={() => { setLogin(!login); setMenu(false); }} className="btn-yellow h-9">Logare</button></span>
          <button onClick={() => { setMenu(!menu); setLogin(false); }} aria-label="Meniu" className="grid h-10 w-10 place-items-center text-white md:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{menu ? <path d="M6 6l12 12M18 6 6 18"/> : <path d="M3 7h18M3 12h18M3 17h18"/>}</svg>
          </button>
        </div>
      </div>

      {/* Rândul 2: meniul */}
      <nav className="hidden border-t border-white/10 md:block">
        <div className="container-x flex h-11 items-stretch gap-8">
          {links.map((l) => {
            const active = path === l.href || path.startsWith(l.href + "/");
            return (
              <Link key={l.href} href={l.href}
                className={`flex items-center border-b-[3px] text-[13px] font-bold uppercase tracking-[0.1em] transition ${active ? "border-accent" : "border-transparent"} ${l.hot ? "text-accent hover:text-white" : active ? "text-white" : "text-white/70 hover:text-white"}`}>
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {login && (
        <div className="border-t border-white/10 md:hidden">
          <div className="container-x py-4">
            <LoginFields stacked />
            <div className="mt-3 flex justify-between text-[12px] text-white/60">
              <Link href="/cont" className="underline underline-offset-4">Ați uitat parola?</Link>
              <Link href="/cont" className="underline underline-offset-4">Înregistrare</Link>
            </div>
          </div>
        </div>
      )}

      {menu && (
        <div className="border-t border-white/10 md:hidden">
          <div className="container-x flex flex-col pb-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenu(false)}
                className={`border-b border-white/10 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] ${l.hot ? "text-accent" : "text-white"}`}>{l.label}</Link>
            ))}
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

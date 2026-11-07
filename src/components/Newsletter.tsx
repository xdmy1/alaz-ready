export default function Newsletter({ dark = true }: { dark?: boolean }) {
  return (
    <div className={dark ? "bg-brand-deep p-6 text-white" : "border border-line p-6"}>
      <p className={`text-[11px] font-bold uppercase tracking-[0.12em] ${dark ? "text-accent" : "text-brand"}`}>Abonare la news line</p>
      <p className={`mt-2 font-serif text-xl leading-snug ${dark ? "" : "text-fg"}`}>Esențialul săptămânii pentru contabili, lunea, pe email.</p>
      <form action="#" className="mt-4 flex flex-col gap-2">
        <input type="email" placeholder="Indicați adresa e-mailului" className={`h-11 px-3 text-sm outline-none ${dark ? "bg-white text-fg placeholder:text-muted" : "border border-line bg-bg placeholder:text-muted"}`} />
        <button type="button" className="btn-yellow h-11">Abonare</button>
      </form>
      <p className={`mt-3 text-[11px] ${dark ? "text-white/50" : "text-muted"}`}>Fără spam. Dezabonare oricând.</p>
    </div>
  );
}

import Link from "next/link";
import Logo from "./Logo";

const cols = [
  { title: "Revista", items: ["Numărul curent", "Arhiva", "Rubrici", "Consultant+", "Noutăți"] },
  { title: "Resurse", items: ["Baza normativă", "Codul fiscal", "Planul de conturi", "SNC", "Calendarul contribuabilului"] },
  { title: "Editura", items: ["Despre ediție", "Redacția revistei", "Autorii noștri", "Abonarea", "Contacte"] },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">Revista contabililor profesioniști. Se editează din septembrie 1995.</p>
          <address className="mt-6 space-y-1 text-sm not-italic text-white/65">
            <p>MD 2005, Chișinău, str. Căpriana 50, of. 517–518</p>
            <p>tel.: (+373 22) 21 20 22 · tel./fax: (+373 22) 22 53 90</p>
            <p className="text-white">abonare@contabilitate.md</p>
          </address>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">{c.title}</p>
            <ul className="space-y-2.5">
              {c.items.map((i) => (<li key={i}><Link href="#" className="text-sm text-white/75 hover:text-white">{i}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© PP „Contabilitate și audit” SRL · Utilizarea materialelor site-ului este posibilă numai cu permisiunea scrisă a editorului.</span>
          <div className="flex gap-5"><Link href="#" className="hover:text-white">Termeni</Link><Link href="#" className="hover:text-white">Confidențialitate</Link></div>
        </div>
      </div>
    </footer>
  );
}

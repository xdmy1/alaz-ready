import Link from "next/link";
import Logo from "./Logo";

const cols = [
  { title: "Revista", items: ["Numărul curent", "Arhiva", "Rubrici", "Consultant+", "Noutăți"] },
  { title: "La îndemână", items: ["Baza normativă", "Codul fiscal", "Planul de conturi", "SNC", "Calendarul contribuabilului"] },
  { title: "Editura", items: ["Despre ediție", "Redacția revistei", "Autorii noștri", "Abonarea", "Contacte"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">Revista contabililor profesioniști. Se editează din septembrie 1995.</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-muted">
            <p>MD 2005, Chișinău, str. Căpriana 50, of. 517–518</p>
            <p>(+373 22) 21 20 22 · abonare@contabilitate.md</p>
          </address>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="eyebrow mb-4">{c.title}</p>
            <ul className="space-y-2.5">
              {c.items.map((i) => (<li key={i}><Link href="#" className="link-quiet text-sm">{i}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© PP „Contabilitate și audit” SRL · Concept de redesign</span>
          <div className="flex gap-5">
            <Link href="#" className="link-quiet">Termeni</Link>
            <Link href="#" className="link-quiet">Confidențialitate</Link>
            <Link href="#" className="link-quiet">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

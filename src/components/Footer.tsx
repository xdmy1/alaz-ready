import Link from "next/link";
import Logo from "./Logo";

const cols = [
  { title: "Conținut", items: ["Noutăți", "Legislație", "Revista", "Seminare", "Întrebări & răspunsuri"] },
  { title: "Abonare", items: ["Planuri", "Pentru companii", "Newsletter", "Întrebări frecvente"] },
  { title: "Companie", items: ["Despre noi", "Echipa", "Contacte", "Publicitate"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Portal profesional pentru contabilii din Republica Moldova. Legislație, practică, explicații.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="eyebrow mb-4">{c.title}</p>
            <ul className="space-y-2.5">
              {c.items.map((i) => (
                <li key={i}><Link href="#" className="link-quiet text-sm">{i}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 contabilitate.md · Concept de redesign</span>
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

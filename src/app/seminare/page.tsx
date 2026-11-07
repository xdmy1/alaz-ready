export default function Seminare() {
  const items = [
    { d: "14 nov", t: "Închiderea anului fiscal 2026: checklist complet", f: "Online · 3 ore" },
    { d: "21 nov", t: "e-Factura în practică: configurare și erori frecvente", f: "Online · 2 ore" },
    { d: "5 dec", t: "Salarizare 2027: ce se schimbă de la 1 ianuarie", f: "Chișinău · 1 zi" },
  ];
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="eyebrow">Seminare</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Programul următor</h1>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {items.map((s) => (
          <li key={s.t} className="grid gap-3 py-6 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-8">
            <span className="text-2xl font-semibold tracking-tight">{s.d}</span>
            <div><p className="font-medium">{s.t}</p><p className="mt-1 text-sm text-muted">{s.f}</p></div>
            <button className="h-10 rounded-full border border-line px-4 text-sm transition hover:border-fg">Înscrie-te</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

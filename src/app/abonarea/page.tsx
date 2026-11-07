import Pricing from "@/components/Pricing";
import { notes } from "@/data/content";

export default function Abonarea() {
  return (
    <>
      <section className="container-x pt-16 text-center sm:pt-24">
        <p className="eyebrow">Abonarea pentru anul 2027</p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Trei pachete. Aceeași revistă.</h1>
        <p className="mx-auto mt-5 max-w-lg text-muted">Alegi doar acces digital, revista tipărită cu acces digital, sau pachetul pentru echipă.</p>
      </section>
      <Pricing />
      <section className="container-x border-t border-line py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold tracking-tight">De știut</h2>
          <ol className="space-y-4">
            {notes.map((n, i) => (
              <li key={i} className="flex gap-4 text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs text-fg">0{i + 1}</span>{n}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

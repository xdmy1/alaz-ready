import { Mark } from "@/components/Logo";
export default function Cont() {
  return (
    <section className="container-x flex justify-center py-20">
      <div className="w-full max-w-sm">
        <Mark className="h-9 w-9" />
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">Intră în cont</h1>
        <div className="mt-6 space-y-3">
          <input placeholder="Email" className="h-11 w-full rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:border-fg" />
          <input placeholder="Parolă" type="password" className="h-11 w-full rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:border-fg" />
          <button className="h-11 w-full rounded-xl bg-fg text-sm font-medium text-bg">Continuă</button>
        </div>
        <p className="mt-4 text-center text-xs text-muted">Nu ai cont? <a href="/abonarea" className="text-fg underline underline-offset-4">Abonează-te</a></p>
      </div>
    </section>
  );
}

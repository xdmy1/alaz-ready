import { Wordmark } from "@/components/Logo";
export default function Cont() {
  return (
    <section className="container-x flex justify-center py-16">
      <div className="w-full max-w-sm border border-line p-8">
        <div className="text-brand-deep dark:text-white"><Wordmark className="h-10 w-auto" /></div>
        <h1 className="headline mt-6 text-2xl">Conectarea la cabinetul personal</h1>
        <div className="mt-6 space-y-3">
          <input placeholder="Email" className="h-11 w-full border border-line bg-bg px-3 text-sm outline-none focus:border-brand" />
          <input placeholder="Parola" type="password" className="h-11 w-full border border-line bg-bg px-3 text-sm outline-none focus:border-brand" />
          <button className="btn-navy h-11 w-full">Autentificare</button>
        </div>
        <div className="mt-4 flex justify-between text-xs"><a href="#" className="text-muted underline underline-offset-4">Ați uitat parola?</a><a href="/abonarea" className="font-bold text-brand">Înregistrarea →</a></div>
      </div>
    </section>
  );
}

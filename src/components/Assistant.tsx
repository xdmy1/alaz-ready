"use client";
import { useEffect, useRef, useState } from "react";

/* Concept demo: asistent AI pentru contabilitate și fiscalitate.
   Răspunsurile sunt scriptate, fără backend. Textul apare cu efect de scriere. */

type Source = { label: string; detail: string };
type Msg = { id: number; role: "user" | "ai"; text: string; shown: number; sources?: Source[] };

const SCRIPT: { q: string; keys: string[]; a: string; sources: Source[] }[] = [
  {
    q: "Când devin plătitor de TVA?",
    keys: ["tva", "platitor", "plătitor", "prag", "inregistr", "înregistr"],
    a: "Înregistrarea ca plătitor de TVA devine obligatorie atunci când livrările impozabile depășesc 1,2 milioane lei în 12 luni consecutive.\n• Pragul se urmărește pe 12 luni consecutive, nu pe anul calendaristic.\n• Cererea se depune la SFS până în ultima zi a lunii în care pragul a fost depășit.\n• Înregistrarea benevolă este posibilă și sub prag, dacă efectuați livrări impozabile.\nDoriți să verificăm împreună cifra de afaceri pe ultimele 12 luni?",
    sources: [
      { label: "Codul fiscal, art. 112", detail: "Înregistrarea subiectului impozabil" },
      { label: "C&A nr. 9 / 2026", detail: "Deducerea și ajustarea TVA în construcții" },
    ],
  },
  {
    q: "Ce termene fiscale am luna aceasta?",
    keys: ["termen", "calendar", "luna", "declar", "depun", "raport"],
    a: "Până la sfârșitul lunii aveți trei termene, toate pe 25 noiembrie:\n• Declarația privind TVA (TVA 12) pentru octombrie, depunere și achitare.\n• Darea de seamă IPC21 pentru octombrie, depunere și achitare.\n• Declarația privind accizele pentru octombrie, depunere.\nUrmătorul termen este 10 decembrie, forma IALS21 pentru noiembrie. Vă pot trimite un memento pe email cu trei zile înainte de fiecare.",
    sources: [{ label: "Calendarul contribuabilului", detail: "Noiembrie – decembrie 2026" }],
  },
  {
    q: "Sunt deductibile cheltuielile de repatriere a unui salariat?",
    keys: ["repatri", "deduc", "delega", "salariat", "cheltuiel"],
    a: "Da. Cheltuielile de repatriere a salariatului decedat în delegație se deduc în scopuri fiscale, cu condiția să fie confirmate documentar.\n• Aveți nevoie de ordinul de delegare și de documentele primare care confirmă transportul.\n• Sumele nu se tratează ca facilitate acordată de angajator.\n• În contabilitate se reflectă ca alte cheltuieli ale activității operaționale.\nRedacția a analizat cazul pe larg în Consultant+, cu formule contabile.",
    sources: [
      { label: "Consultant+, octombrie 2026", detail: "Deducerea cheltuielilor de repatriere a salariatului decedat în delegație" },
      { label: "Codul fiscal, art. 24", detail: "Deducerea cheltuielilor aferente activității de întreprinzător" },
    ],
  },
  {
    q: "Ce pachet de abonare mi se potrivește?",
    keys: ["abon", "pachet", "pret", "preț", "cost", "print", "digital", "platinum"],
    a: "Depinde de cum citiți revista:\n• Digital, 2 988 lei pe an: tot conținutul online, arhiva din 2000 și Consultant+. Potrivit dacă lucrați doar pe ecran.\n• Print, 3 360 lei pe an: cele 12 numere tipărite cu livrare, Codul fiscal tipărit și tot accesul digital.\n• Platinum, 3 924 lei pe an: Print plus acces pentru întreaga echipă.\nPentru un contabil care lucrează singur, cel mai ales este Print.",
    sources: [{ label: "Abonarea 2027", detail: "Pachete pentru 12 luni" }],
  },
];

const FALLBACK = {
  a: "Aceasta este o versiune demo și știu deocamdată doar câteva întrebări-exemplu.\nÎn produsul final voi răspunde la orice întrebare de contabilitate și fiscalitate din Moldova, cu trimitere la articolul de lege și la materialele din revistă.\nÎncercați una dintre întrebările de mai jos.",
  sources: [] as Source[],
};

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function Spark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l1.9 5.6a3 3 0 0 0 1.9 1.9l5.7 2-5.7 2a3 3 0 0 0-1.9 1.9L12 21.5l-1.9-5.6a3 3 0 0 0-1.9-1.9l-5.7-2 5.7-2a3 3 0 0 0 1.9-1.9L12 2.5z" />
    </svg>
  );
}

function Body({ text }: { text: string }) {
  const lines = text.split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (k: number) => {
    if (!list.length) return;
    out.push(
      <ul key={`l${k}`} className="space-y-1.5">
        {list.map((li, i) => (
          <li key={i} className="flex gap-2.5"><span className="mt-[9px] h-1 w-1 shrink-0 bg-gold" />{li}</li>
        ))}
      </ul>
    );
    list = [];
  };
  lines.forEach((l, i) => {
    if (l.startsWith("• ")) list.push(l.slice(2));
    else { flush(i); if (l) out.push(<p key={i}>{l}</p>); }
  });
  flush(lines.length);
  return <div className="space-y-2.5">{out}</div>;
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const nextId = useRef(1);
  const busy = thinking || msgs.some((m) => m.role === "ai" && m.shown < m.text.length);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const lastUserId = [...msgs].reverse().find((m) => m.role === "user")?.id;
  useEffect(() => {
    const box = scroller.current;
    const el = box?.querySelector<HTMLElement>("[data-last-question]");
    if (box && el) box.scrollTop = el.offsetTop - box.offsetTop - 16;
  }, [msgs, thinking]);

  const ask = (q: string) => {
    const question = q.trim();
    if (!question || busy) return;
    const n = norm(question);
    const hit = SCRIPT.find((s) => s.q === question) ?? SCRIPT.find((s) => s.keys.some((k) => n.includes(norm(k))));
    const answer = hit ?? FALLBACK;
    setMsgs((m) => [...m, { id: nextId.current++, role: "user", text: question, shown: question.length }]);
    setInput("");
    setThinking(true);
    timers.current.push(setTimeout(() => {
      const id = nextId.current++;
      setThinking(false);
      setMsgs((m) => [...m, { id, role: "ai", text: answer.a, shown: 0, sources: answer.sources }]);
      let shown = 0;
      const step = () => {
        shown = Math.min(answer.a.length, shown + 4);
        const now = shown;
        setMsgs((m) => m.map((x) => (x.id === id ? { ...x, shown: now } : x)));
        if (now < answer.a.length) timers.current.push(setTimeout(step, 16));
      };
      step();
    }, 900));
  };

  const asked = new Set(msgs.filter((m) => m.role === "user").map((m) => m.text));
  const suggestions = SCRIPT.map((s) => s.q).filter((q) => !asked.has(q));

  return (
    <>
      {/* Lansator */}
      {!open && (
        <button onClick={() => setOpen(true)} aria-label="Deschide asistentul AI"
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-brand-deep py-3 pl-3 pr-5 text-white shadow-[0_12px_40px_-8px_rgba(16,21,44,0.55)] transition hover:-translate-y-0.5">
          <span className="relative grid h-10 w-10 place-items-center bg-accent text-accent-fg">
            <Spark />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-brand-deep" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[13px] font-bold">Întrebați asistentul AI</span>
            <span className="block text-[11px] text-white/60">Contabilitate, fiscalitate, legislație</span>
          </span>
        </button>
      )}

      {/* Fereastra de chat */}
      {open && (
        <div role="dialog" aria-label="Asistent AI"
          className="fixed inset-0 z-50 flex flex-col bg-bg sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[640px] sm:max-h-[calc(100vh-40px)] sm:w-[420px] sm:border sm:border-line sm:shadow-[0_24px_80px_-12px_rgba(16,21,44,0.45)]">
          <header className="flex items-center gap-3 bg-brand-deep px-5 py-4 text-white">
            <span className="grid h-10 w-10 shrink-0 place-items-center bg-accent text-accent-fg"><Spark /></span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 font-serif text-[19px] font-semibold leading-none">
                Consultant AI
                <span className="border border-accent px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-accent">Demo</span>
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Codul fiscal, SNC, arhiva revistei
              </p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Închide" className="grid h-9 w-9 place-items-center text-white/70 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          </header>

          <div ref={scroller} className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
            {/* Mesaj de întâmpinare */}
            <div>
              <p className="font-serif text-[22px] font-semibold leading-snug">Bună ziua. Cu ce vă pot ajuta?</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">Răspund la întrebări de contabilitate și fiscalitate din Republica Moldova și arăt de fiecare dată sursa: articolul de lege sau materialul din revistă.</p>
            </div>

            {msgs.map((m) => m.role === "user" ? (
              <div key={m.id} className="flex justify-end" {...(m.id === lastUserId ? { "data-last-question": "" } : {})}>
                <p className="max-w-[85%] bg-brand px-4 py-2.5 text-[14px] leading-relaxed text-white">{m.text}</p>
              </div>
            ) : (
              <div key={m.id} className="flex gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center bg-brand-deep text-accent"><Spark className="h-3.5 w-3.5" /></span>
                <div className="min-w-0 flex-1 text-[14px] leading-relaxed">
                  <Body text={m.text.slice(0, m.shown)} />
                  {m.shown >= m.text.length && m.sources && m.sources.length > 0 && (
                    <div className="mt-4 border-t border-line pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Surse</p>
                      <ul className="mt-2 space-y-1.5">
                        {m.sources.map((s, i) => (
                          <li key={s.label} className="flex items-start gap-2.5 border border-line px-3 py-2">
                            <span className="grid h-5 w-5 shrink-0 place-items-center bg-bg-soft font-serif text-[11px] font-semibold text-brand">{i + 1}</span>
                            <span className="min-w-0"><span className="block text-[13px] font-bold text-brand">{s.label}</span><span className="block truncate text-[12px] text-muted">{s.detail}</span></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {thinking && (
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center bg-brand-deep text-accent"><Spark className="h-3.5 w-3.5" /></span>
                <span className="flex items-center gap-2 text-[13px] text-muted">
                  <span className="flex gap-1">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" style={{ animationDelay: `${i * 140}ms` }} />)}</span>
                  Caut în Codul fiscal și în arhivă…
                </span>
              </div>
            )}

            {/* Întrebări sugerate */}
            {!busy && suggestions.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{msgs.length ? "Întrebați și" : "Încercați o întrebare"}</p>
                <div className="mt-2 divide-y divide-line border-y border-line">
                  {suggestions.map((q) => (
                    <button key={q} onClick={() => ask(q)} className="flex w-full items-center justify-between gap-3 py-3 text-left text-[14px] hover:text-brand">
                      {q}<span className="shrink-0 text-gold">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="border-t border-line p-4">
            <div className="flex border border-line focus-within:border-brand">
              <input value={input} onChange={(e) => setInput(e.target.value)} autoFocus placeholder="Scrieți întrebarea…"
                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-[14px] outline-none placeholder:text-muted" />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Trimite"
                className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-accent-fg transition disabled:bg-bg-soft disabled:text-muted">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
            <p className="mt-2.5 text-center text-[11px] text-muted">Versiune demo. Răspunsurile sunt exemple și nu țin loc de consultanță.</p>
          </form>
        </div>
      )}
    </>
  );
}

export type Article = {
  slug: string; title: string; excerpt: string; category: string; date: string; read: string; premium?: boolean;
};

export const articles: Article[] = [
  { slug: "tva-2026", title: "Ce se schimbă la TVA din 1 ianuarie 2026: ghid practic pentru contabili", excerpt: "Noile praguri de înregistrare, regimul livrărilor intracomunitare și termenele actualizate de raportare, explicate pe cazuri concrete.", category: "Fiscalitate", date: "6 nov 2026", read: "8 min", premium: true },
  { slug: "salariu-minim", title: "Salariul minim pe economie crește: impact asupra calculului contribuțiilor", excerpt: "Tabel comparativ cu noile sume și exemple de recalcul pentru contractele în derulare.", category: "Salarizare", date: "5 nov 2026", read: "5 min" },
  { slug: "sncl-amortizare", title: "Amortizarea activelor sub SNC: metode acceptate și greșeli frecvente", excerpt: "Când metoda liniară nu mai este suficientă și cum documentezi schimbarea de politică contabilă.", category: "Standarde", date: "4 nov 2026", read: "11 min", premium: true },
  { slug: "e-factura", title: "e-Factura devine obligatorie pentru toate livrările B2B din aprilie", excerpt: "Calendarul tranziției, excepțiile și ce trebuie verificat în softul de contabilitate.", category: "Digitalizare", date: "3 nov 2026", read: "6 min" },
  { slug: "ipc21", title: "Formularul IPC21: completare pas cu pas după ultimele modificări", excerpt: "Secțiunile care au fost redenumite și noile coduri de categorie pentru angajați.", category: "Raportare", date: "2 nov 2026", read: "7 min" },
  { slug: "control-fiscal", title: "Cum te pregătești pentru un control fiscal planificat", excerpt: "Lista documentelor solicitate în mod uzual și drepturile contribuabilului în timpul verificării.", category: "Practică", date: "31 oct 2026", read: "9 min", premium: true },
];

export const legislation = [
  { code: "Legea nr. 212/2026", title: "Modificarea Codului fiscal, Titlul III", date: "3 nov" },
  { code: "HG nr. 781/2026", title: "Aprobarea formularului IPC21 actualizat", date: "28 oct" },
  { code: "Ordin MF nr. 134", title: "Indicațiile metodice privind amortizarea", date: "21 oct" },
  { code: "Legea nr. 198/2026", title: "Salariul minim garantat în sectorul real", date: "15 oct" },
];

export const plans = [
  {
    name: "Digital", price: 149, yearly: 1490, desc: "Acces complet la portal pentru un contabil.",
    features: ["Toate articolele și analizele", "Baza de legislație actualizată zilnic", "Întrebări & răspunsuri cu experții", "Arhiva revistei din 2010"],
  },
  {
    name: "Digital + Print", price: 249, yearly: 2490, desc: "Portalul plus revista tipărită, lunar, la birou.", featured: true,
    features: ["Tot ce include Digital", "Revista tipărită, 12 numere / an", "Acces la seminarele online", "Suport prioritar"],
  },
  {
    name: "Business", price: 590, yearly: 5900, desc: "Pentru echipe de contabilitate și firme de audit.",
    features: ["5 utilizatori incluși", "Facturare centralizată", "Consultații dedicate, 2 / lună", "Manager de cont"],
  },
];

export const faq = [
  { q: "Pot schimba planul oricând?", a: "Da. Diferența se recalculează proporțional pentru perioada rămasă." },
  { q: "Cum primesc factura fiscală?", a: "Factura se emite automat pe datele companiei și este disponibilă în cont." },
  { q: "Există reduceri pentru studenți?", a: "Planul Digital este disponibil la 50% pentru studenții la specialitățile economice." },
  { q: "Se reînnoiește automat?", a: "Abonamentul se reînnoiește automat, iar notificarea vine cu 7 zile înainte." },
];

export type Article = {
  slug: string; title: string; excerpt: string; rubric: string; date: string; read: string; premium?: boolean;
};

/* Titluri reale de pe contabilitate.md (nov 2026), folosite doar ca text de concept. */
export const news: Article[] = [
  { slug: "dubla-impunere-2027", title: "Procedura pentru evitarea/eliminarea dublei impuneri va intra în vigoare la 1 ianuarie 2027", excerpt: "Noul regulament stabilește pașii pentru aplicarea convențiilor fiscale și documentele pe care le cere SFS de la rezidenți și nerezidenți.", rubric: "Noutăți", date: "06.11.2026", read: "4 min" },
  { slug: "raspundere-penala-pj", title: "Răspunderea penală a persoanei juridice: amenzi și privarea de anumite drepturi", excerpt: "Ce prevede noua redacție a Codului penal pentru companii și cum se aplică sancțiunile.", rubric: "Noutăți", date: "06.11.2026", read: "3 min" },
  { slug: "acte-permisive", title: "Regimul actelor permisive, optimizat", excerpt: "Guvernul a redus numărul de autorizații și a comasat proceduri în ghișeul unic.", rubric: "Noutăți", date: "06.11.2026", read: "2 min" },
  { slug: "imm-finantare", title: "ÎMM: mecanisme alternative de finanțare", excerpt: "Crowdfunding, garanții de stat și leasing: ce opțiuni au întreprinderile mici în 2027.", rubric: "Noutăți", date: "06.11.2026", read: "3 min" },
  { slug: "maia-tarif-2027", title: "MAIA va aproba tariful pe anul 2027 pentru trecerea terenurilor agricole la o altă categorie", excerpt: "Proiectul de hotărâre este în consultare publică până pe 20 noiembrie.", rubric: "Noutăți", date: "05.11.2026", read: "2 min" },
];

export const consultant: Article[] = [
  { slug: "tva-optometrie", title: "Tratamentul TVA în cazul livrării serviciilor optometrice", excerpt: "Serviciile optometrice sunt scutite de TVA fără drept de deducere doar dacă sunt prestate de instituții medicale licențiate.", rubric: "Consultant+", date: "2026-10", read: "6 min", premium: true },
  { slug: "tva-spatii-locative", title: "Regimul fiscal privind TVA în cazul tranzacțiilor de oferire a spațiilor locative", excerpt: "Diferența dintre locațiune și prestare de servicii hoteliere și consecințele asupra cotei aplicate.", rubric: "Consultant+", date: "2026-10", read: "7 min", premium: true },
  { slug: "semnatura-electronica", title: "Cum se califică semnătura electronică a actului de îndeplinire a lucrărilor în cazul în care acesta este anexat la factura fiscală", excerpt: "Semnătura avansată calificată este suficientă dacă documentul este generat în sistemul e-Factura.", rubric: "Consultant+", date: "2026-10", read: "5 min", premium: true },
  { slug: "taxare-inversa-amanet", title: "Se aplică sau nu regimul de taxare inversă cu TVA pentru bunurile amanetate și comercializate în cadrul contractului de societate civilă", excerpt: "Analiză pe baza art. 94 și 102 din Codul fiscal.", rubric: "Consultant+", date: "2026-10", read: "8 min", premium: true },
  { slug: "repatriere-salariat", title: "Deducerea cheltuielilor de repatriere a salariatului decedat în delegație", excerpt: "Cheltuielile sunt deductibile integral dacă sunt documentate conform Regulamentului privind delegarea.", rubric: "Consultant+", date: "2026-10", read: "4 min", premium: true },
];

export const mostRead: Article[] = [
  { slug: "reparatia-utilaj", title: "Reparația în străinătate a utilajului închiriat: particularități contabile, fiscale și vamale", excerpt: "", rubric: "Consultații privind contabilitatea și impozitarea", date: "2026-10", read: "9 min", premium: true },
  { slug: "prag-semnificatie", title: "Pragul de semnificație în audit: indicatorul-cheie care poate transforma denaturările contabile în opinie de audit modificată", excerpt: "", rubric: "Audit", date: "2026-09", read: "12 min", premium: true },
  { slug: "tva-constructii", title: "Deducerea și ajustarea TVA în construcții", excerpt: "", rubric: "Consultații privind contabilitatea și impozitarea", date: "2026-09", read: "10 min", premium: true },
  { slug: "protectia-datelor", title: "Protecția datelor cu caracter personal: ghid practic", excerpt: "", rubric: "Consultanță juridică", date: "2026-09", read: "8 min" },
];

export const rubrics = [
  "Consultații privind contabilitatea și impozitarea", "Întrebări-răspunsuri", "Administrare fiscală", "Asigurări sociale și medicale",
  "Contabilitate ramurală", "Audit", "Discutăm problema", "Opinii", "Raport anual", "Raporturi de muncă", "Consultanță juridică",
  "Practica judiciară", "Subtilități", "Studiem noile modificări", "Control intern", "Editorial", "Codul fiscal",
  "Școala fără frecvență a contabilului", "Contabilitate managerială", "Actualizări în BGPF",
];

export const alwaysAtHand = [
  { title: "Baza normativă", desc: "Legi, hotărâri, ordine și instrucțiuni", href: "/la-indemana" },
  { title: "Codul fiscal", desc: "Textul actualizat, cu modificările la zi", href: "/la-indemana" },
  { title: "Planul de conturi", desc: "Conturile contabile, cu comentarii", href: "/la-indemana" },
  { title: "SNC", desc: "Standardele Naționale de Contabilitate", href: "/la-indemana" },
  { title: "Documente primare", desc: "Formulare tipizate pentru active, stocuri", href: "/la-indemana" },
  { title: "Indicatorii fiscali", desc: "Cote, taxe locale, accize, 2023–2026", href: "/la-indemana" },
];

export const calendar = [
  { day: "25", month: "nov", what: "Declarația privind TVA (TVA 12) pentru octombrie", type: "Depunere și achitare" },
  { day: "25", month: "nov", what: "Darea de seamă IPC21 pentru octombrie", type: "Depunere și achitare" },
  { day: "25", month: "nov", what: "Declarația privind accizele pentru octombrie", type: "Depunere" },
  { day: "10", month: "dec", what: "Forma IALS21 pentru luna noiembrie", type: "Depunere" },
];

export const issue = {
  number: "Nr. 10 (376)", month: "Octombrie 2026",
  contents: ["Reparația în străinătate a utilajului închiriat", "Tratamentul TVA în cazul serviciilor optometrice", "Pragul de semnificație în audit", "Repartizarea costurilor de materiale între produsele fabricate", "Protecția datelor cu caracter personal: ghid practic"],
};

export const plans = [
  {
    name: "Digital", price: 2988, desc: "Acces electronic complet, fără revista tipărită.",
    features: ["Versiunea electronică a revistei", "Acces la arhiva electronică", "Rubrica Consultant+", "Fluxul de știri", "Baza normativă", "Calendarul contribuabilului"],
  },
  {
    name: "Print", price: 3360, desc: "12 numere tipărite, plus tot accesul digital.", featured: true,
    features: ["Versiunea tipărită, 12 numere / an", "Codul fiscal actualizat, tipărit", "Versiunea electronică a revistei", "Acces la arhiva electronică", "Rubrica Consultant+", "Fluxul de știri, baza normativă, calendarul"],
  },
  {
    name: "Platinum", price: 3924, desc: "Print și digital, cu acces pentru întreaga echipă.",
    features: ["Tot ce include Print", "Acces electronic pentru 3 utilizatori", "Traduceri rom.–rus. ale articolelor de bază", "Răspunsuri prioritare la întrebări", "Reducere 10% la seminare Contabil-Service"],
  },
];

export const notes = [
  "Pachetul Print include 12 numere ale revistei în versiunea tipărită, inclusiv Codul fiscal actualizat.",
  "Abonaților la oricare dintre pachete li se oferă o reducere de 10% de la taxa de participare la seminarele și webinarele organizate de „Contabil-Service” SRL.",
  "Factura se emite pe datele companiei. Accesul se activează în ziua achitării.",
];

export const allArticles = [...news, ...consultant, ...mostRead];

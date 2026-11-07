export type Article = {
  slug: string; title: string; excerpt: string; rubric: string; date: string; read: string; img: string; premium?: boolean;
};

/* Titluri și imagini reale de pe contabilitate.md (nov 2026). */
export const news: Article[] = [
  { slug: "dubla-impunere-2027", title: "Procedura pentru evitarea/eliminarea dublei impuneri va intra în vigoare la 1 ianuarie 2027", excerpt: "Noul regulament stabilește pașii pentru aplicarea convențiilor fiscale și documentele pe care le solicită SFS de la rezidenți și nerezidenți.", rubric: "Noutăți", date: "6 noiembrie 2026", read: "4 min", img: "/img/alias2-5.jpg" },
  { slug: "raspundere-penala-pj", title: "Răspunderea penală a persoanei juridice: amenzi și privarea de anumite drepturi", excerpt: "Ce prevede noua redacție a Codului penal pentru companii și cum se aplică sancțiunile.", rubric: "Noutăți", date: "6 noiembrie 2026", read: "3 min", img: "/img/rubrica-24.jpg" },
  { slug: "acte-permisive", title: "Regimul actelor permisive, optimizat", excerpt: "Guvernul a redus numărul de autorizații și a comasat proceduri în ghișeul unic.", rubric: "Noutăți", date: "6 noiembrie 2026", read: "2 min", img: "/img/alias2-3.jpg" },
  { slug: "imm-finantare", title: "ÎMM: mecanisme alternative de finanțare", excerpt: "Crowdfunding, garanții de stat și leasing: ce opțiuni au întreprinderile mici în 2027.", rubric: "Noutăți", date: "6 noiembrie 2026", read: "3 min", img: "/img/rubrica-62.jpg" },
  { slug: "maia-tarif-2027", title: "MAIA va aproba tariful pe anul 2027 pentru trecerea terenurilor agricole la o altă categorie", excerpt: "Proiectul de hotărâre este în consultare publică până pe 20 noiembrie.", rubric: "Noutăți", date: "5 noiembrie 2026", read: "2 min", img: "/img/rubrica-18.jpg" },
];

export const consultant: Article[] = [
  { slug: "tva-optometrie", title: "Tratamentul TVA în cazul livrării serviciilor optometrice", excerpt: "Serviciile optometrice sunt scutite de TVA fără drept de deducere doar dacă sunt prestate de instituții medicale licențiate.", rubric: "Consultant+", date: "Octombrie 2026", read: "6 min", img: "/img/top_quest1.jpg", premium: true },
  { slug: "tva-spatii-locative", title: "Regimul fiscal privind TVA în cazul tranzacțiilor de oferire a spațiilor locative", excerpt: "Diferența dintre locațiune și prestare de servicii hoteliere și consecințele asupra cotei aplicate.", rubric: "Consultant+", date: "Octombrie 2026", read: "7 min", img: "/img/top_quest2.jpg", premium: true },
  { slug: "semnatura-electronica", title: "Cum se califică semnătura electronică a actului de îndeplinire a lucrărilor anexat la factura fiscală", excerpt: "Semnătura avansată calificată este suficientă dacă documentul este generat în sistemul e-Factura.", rubric: "Consultant+", date: "Octombrie 2026", read: "5 min", img: "/img/top_quest3.jpg", premium: true },
  { slug: "taxare-inversa-amanet", title: "Se aplică sau nu taxarea inversă cu TVA pentru bunurile amanetate și comercializate în cadrul contractului de societate civilă", excerpt: "Analiză pe baza art. 94 și 102 din Codul fiscal.", rubric: "Consultant+", date: "Octombrie 2026", read: "8 min", img: "/img/top_quest4.jpg", premium: true },
  { slug: "repatriere-salariat", title: "Deducerea cheltuielilor de repatriere a salariatului decedat în delegație", excerpt: "Cheltuielile sunt deductibile integral dacă sunt documentate conform Regulamentului privind delegarea.", rubric: "Consultant+", date: "Octombrie 2026", read: "4 min", img: "/img/top_quest5.jpg", premium: true },
];

export const mostRead: Article[] = [
  { slug: "reparatia-utilaj", title: "Reparația în străinătate a utilajului închiriat: particularități contabile, fiscale și vamale", excerpt: "", rubric: "Consultații privind contabilitatea și impozitarea", date: "Octombrie 2026", read: "9 min", img: "/img/alias2-2.jpg", premium: true },
  { slug: "prag-semnificatie", title: "Pragul de semnificație în audit: indicatorul-cheie care poate transforma denaturările contabile în opinie de audit modificată", excerpt: "", rubric: "Audit", date: "Septembrie 2026", read: "12 min", img: "/img/rubrica-42.jpg", premium: true },
  { slug: "tva-constructii", title: "Deducerea și ajustarea TVA în construcții", excerpt: "", rubric: "Consultații privind contabilitatea și impozitarea", date: "Septembrie 2026", read: "10 min", img: "/img/alias2-4.jpg", premium: true },
  { slug: "protectia-datelor", title: "Protecția datelor cu caracter personal: ghid practic", excerpt: "", rubric: "Consultanță juridică", date: "Septembrie 2026", read: "8 min", img: "/img/rubrica-21.jpg" },
  { slug: "costuri-materiale", title: "Repartizarea costurilor de materiale între produsele fabricate: aspecte tehnice", excerpt: "", rubric: "Școala contabilului", date: "Septembrie 2026", read: "11 min", img: "/img/rubrica-43.jpg", premium: true },
];

export const rubrics = [
  { name: "Consultații privind contabilitatea și impozitarea", img: "/img/rubrica-21.jpg" },
  { name: "Întrebări-răspunsuri", img: "/img/rubrica-13.jpg" },
  { name: "Administrare fiscală", img: "/img/rubrica-14.jpg" },
  { name: "Codul fiscal", img: "/img/rubrica-29.jpg" },
  { name: "Audit", img: "/img/rubrica-42.jpg" },
  { name: "Consultanță juridică", img: "/img/rubrica-24.jpg" },
  { name: "Raporturi de muncă", img: "/img/rubrica-62.jpg" },
  { name: "Asigurări sociale și medicale", img: "/img/rubrica-11.jpg" },
  { name: "Contabilitate ramurală", img: "/img/rubrica-16.jpg" },
  { name: "Raport anual", img: "/img/rubrica-55.jpg" },
  { name: "Subtilități", img: "/img/rubrica-89.jpg" },
  { name: "Control intern", img: "/img/rubrica-31.jpg" },
];
export const rubricNames = [...rubrics.map((r) => r.name), "Discutăm problema", "Opinii", "Practica judiciară", "Studiem noile modificări", "Editorial", "Școala fără frecvență a contabilului", "Contabilitate managerială", "Actualizări în BGPF"];

export const alwaysAtHand = ["Baza normativă", "Codul fiscal", "Planul de conturi", "SNC", "Documente primare", "Indicatorii fiscali", "Calendarul contribuabilului"];

export const calendar = [
  { day: "25", month: "noi", what: "Declarația privind TVA (TVA 12) pentru octombrie", type: "depunere și achitare" },
  { day: "25", month: "noi", what: "Darea de seamă IPC21 pentru octombrie", type: "depunere și achitare" },
  { day: "25", month: "noi", what: "Declarația privind accizele pentru octombrie", type: "depunere" },
  { day: "10", month: "dec", what: "Forma IALS21 pentru luna noiembrie", type: "depunere" },
];

export const issue = {
  number: "10", year: "2026", month: "Octombrie 2026", img: "/img/rubrica-43.jpg",
  contents: ["Reparația în străinătate a utilajului închiriat", "Tratamentul TVA în cazul serviciilor optometrice", "Pragul de semnificație în audit", "Repartizarea costurilor de materiale", "Protecția datelor cu caracter personal"],
};

export const plans = [
  { name: "Digital", price: 2988, desc: "Acces electronic complet, fără revista tipărită.",
    features: ["Versiunea electronică a revistei", "Acces la arhiva electronică (2000–2026)", "Rubrica Consultant+", "Fluxul de știri", "Baza normativă", "Calendarul contribuabilului"] },
  { name: "Print", price: 3360, desc: "12 numere tipărite cu livrare, plus tot accesul digital.", featured: true,
    features: ["Versiunea tipărită, 12 numere / an", "Codul fiscal actualizat, tipărit", "Versiunea electronică a revistei", "Acces la arhiva electronică", "Rubrica Consultant+", "Fluxul de știri, baza normativă, calendarul"] },
  { name: "Platinum", price: 3924, desc: "Print și Digital, pentru întreaga echipă.",
    features: ["Tot ce include Print", "Acces electronic pentru 3 utilizatori", "Traduceri rom.–rus. ale articolelor de bază", "Răspunsuri prioritare la întrebări", "Reducere 10% la seminare Contabil-Service"] },
];

export const notes = [
  "Pachetul Print include 12 numere ale revistei în versiunea tipărită, inclusiv Codul fiscal actualizat.",
  "Abonaților la oricare dintre pachete li se oferă o reducere de 10% de la taxa de participare la seminarele și webinarele organizate de „Contabil-Service” SRL.",
  "Factura se emite pe datele companiei. Accesul se activează în ziua achitării.",
];

export const allArticles = [...news, ...consultant, ...mostRead];

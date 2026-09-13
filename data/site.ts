export const site = {
  name: "Köhler Westphal",
  legalName: "Köhler Westphal Rechtsanwälte Steuerberater Notare PartG mbB",
  claim: "Partnerschaft mit mehr als 450 Anwältinnen, Anwälten, Steuerberatern und Notaren an acht Standorten.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description: "Köhler Westphal ist eine Partnerschaft von Rechtsanwälten, Steuerberatern und Notaren mit acht Standorten in Deutschland und Büros in Brüssel und Zürich. Fiktive Demo-Website.",
  email: "info@koehler-westphal.example",
  phone: "+49 211 00000000",
  phoneHref: "tel:+4921100000000",
  founded: 1971,
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Über uns", href: "/sozietaet", children: [{ label: "Sozietät", href: "/sozietaet" }, { label: "Werte", href: "/sozietaet/werte" }, { label: "Verantwortung", href: "/sozietaet/verantwortung" }, { label: "Historie", href: "/sozietaet/historie" }, { label: "Auszeichnungen", href: "/sozietaet/auszeichnungen" }, { label: "Standorte", href: "/sozietaet/standorte" }] },
  { label: "Expertise", href: "/kompetenz", children: [{ label: "Praxisgruppen", href: "/kompetenz/beratungsspektrum" }, { label: "Beratungsschwerpunkte", href: "/kompetenz/branchenschwerpunkte" }, { label: "Fokusthemen", href: "/kompetenz/fokusthemen" }] },
  { label: "Persönlichkeiten", href: "/experten" },
  { label: "News & Events", href: "/aktuelles", children: [{ label: "Aktuelle Meldungen", href: "/aktuelles/news" }, { label: "Publikationen", href: "/aktuelles/know-how" }, { label: "Events", href: "/aktuelles/veranstaltungen" }] },
  { label: "Internationales", href: "/international" },
  { label: "Innovation", href: "/kompetenz/legal-tech" },
  { label: "Karriere", href: "/karriere", children: [{ label: "Rechtsanwälte w/m/d", href: "/karriere/lawyers" }, { label: "Mitarbeiter w/m/d", href: "/karriere/lawyers#business" }, { label: "Referendare, wiss. Mitarbeiter, Praktikanten w/m/d", href: "/karriere/lawyers#talents" }, { label: "Kultur & Benefits", href: "/karriere/kultur" }, { label: "Stellenangebote", href: "/karriere/jobs" }] },
];

export const footerLinks = {
  "Wichtige Links": [
    { label: "Persönlichkeiten", href: "/experten" }, { label: "Events", href: "/aktuelles/veranstaltungen" }, { label: "Internationales", href: "/international" }, { label: "Presse", href: "/aktuelles/news" },
    { label: "Kontakt/Standorte", href: "/kontakt" }, { label: "Impressum", href: "/impressum" }, { label: "Partner", href: "/experten" }, { label: "Datenschutzhinweise", href: "/datenschutz" }, { label: "Meldestelle", href: "/datenschutz#betrug" },
  ],
} as const;

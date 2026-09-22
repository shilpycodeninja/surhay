import {
  IndustrySlide,
  ServiceCard,
  ProjectItem,
  ProcessStep,
  PricingPackage,
  ArticleItem,
  FaqItem,
} from '../types';

export const INDUSTRY_SLIDES: IndustrySlide[] = [
  {
    id: 'craft',
    number: '01 / 07',
    title: 'Handwerker & Bauunternehmen',
    badge: 'Handwerk & Bau',
    description:
      'Maßgeschneiderte Auftritte für Meisterbetriebe, Bauunternehmer und Fachhandwerker. Direkte Kundenanfragen mit allen Objektdaten ohne endlose Rückfragen.',
    features: [
      'Projektkatalog & Vorher/Nachher-Vergleiche',
      'Strukturierte Angebots-Vorqualifizierung',
      'Mitarbeiter- & Azubigewinnung im lokalen Einzugsgebiet',
    ],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Handwerk Portal · Angebots-Konfigurator & Objekt-Upload',
    metrics: { label: 'Qualifizierte Anfragen', value: '+140%' },
  },
  {
    id: 'medicine',
    number: '02 / 07',
    title: 'Medizin & Praxen',
    badge: 'Medizin & Gesundheit',
    description:
      'Digitale Praxis-Visitenkarte mit strukturierter Online-Terminvergabe, Patientenaufklärung und vertrauensbildendem Praxiskonzept.',
    features: [
      'Nahtlose Anbindung an Doctolib & Praxissysteme',
      'Patienten-Onboarding vor dem ersten Besuch',
      'Barrierefreiheit nach BFSG & WCAG Standards',
    ],
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Praxis Dr. med. Weber · Online-Terminbuchung & Fachbereiche',
    metrics: { label: 'Telefonentlastung', value: '-65%' },
  },
  {
    id: 'legal',
    number: '03 / 07',
    title: 'Anwälte & Steuerberater',
    badge: 'Recht & Beratung',
    description:
      'Souveräne, DSGVO-konforme Kanzlei-Websites, die Fachkompetenz und Diskretion vermitteln und qualifizierte Mandantenanfragen generieren.',
    features: [
      'Repräsentative Rechtsgebiete & Mandanten-Portal',
      'Sichere Erstkontakt-Strukturierung',
      'Editorial Kanzlei-Portraits & Fachbeiträge',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Kanzlei von Berlichingen · Diskrete Mandatsaufnahme',
    metrics: { label: 'Mandantenanfragen', value: 'Ø 38/Monat' },
  },
  {
    id: 'realestate',
    number: '04 / 07',
    title: 'Immobilienmakler',
    badge: 'Immobilien & Projektentwicklung',
    description:
      'Exklusive Objektpräsentationen mit optimierten Vermarktungs-Tools, Exposé-Downloads und qualifizierter Interessentenfilterung.',
    features: [
      'Hochauflösende Exposé-Architektur mit OpenImmo-Schnittstelle',
      'Objektbewertungs-Rechner für Eigentümer',
      'Automatische Interessenten-Vorabprüfung',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Vanguard Properties · Interaktives 360° Portfolio',
    metrics: { label: 'Objekt-Vermittlung', value: '3.2x schneller' },
  },
  {
    id: 'automotive',
    number: '05 / 07',
    title: 'KFZ & Automotive',
    badge: 'Automotive & Mobilität',
    description:
      'Moderne Websites für Autohäuser, Werkstätten und Veredler. Schnelle Werkstatttermin-Buchung und repräsentative Fahrzeugbörsen-Integration.',
    features: [
      'Fahrzeugbestand live mit Filter-Optionen',
      'Digitaler Werkstatt-Serviceplaner',
      'Leasing- und Finanzierungsrechner',
    ],
    image:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Motorsport Performance Berlin · Werkstatt-Serviceplaner',
    metrics: { label: 'Service-Buchungen', value: '+92%' },
  },
  {
    id: 'enterprise',
    number: '06 / 07',
    title: 'Kleine & große Unternehmen',
    badge: 'Mittelstand & B2B',
    description:
      'Skalierbare Corporate Websites für mittelständische Unternehmen und Hidden Champions mit starkem Employer Branding und Lead-Fokus.',
    features: [
      'B2B Lead-Funnel & Whitepaper-Infrastruktur',
      'Karriereportal mit 1-Klick-Bewerbung',
      'Internationalisierung (DE / EN / FR)',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Kronos Technologie AG · B2B Corporate Hub & Karriere',
    metrics: { label: 'Bewerberzuwachs', value: '+180%' },
  },
  {
    id: 'custom',
    number: '07 / 07',
    title: 'Individuelle Lösungen',
    badge: 'Custom Web Apps',
    description:
      'Spezialanforderungen, Web-Applikationen, individuelle Buchungssysteme und API-Schnittstellen — maßgeschneidert ohne Baukastenlimits.',
    features: [
      'Headless CMS & maßgefertigtes Backend',
      'Schnittstellen zu ERP, CRM & Datenbanken',
      'Höchste Performance mit 100/100 Google Lighthouse Score',
    ],
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85',
    uiCaption: 'Custom Cloud Interface · Echtzeit-Synchronisation & APIs',
    metrics: { label: 'PageSpeed Score', value: '100 / 100' },
  },
];

export const TRUST_STRIP_ITEMS = [
  {
    title: 'Antwort in 24 Stunden',
    text: 'Auf jede Anfrage — werktags meist deutlich schneller.',
  },
  {
    title: 'Festpreis vor Projektstart',
    text: 'Nach dem Erstgespräch schriftlich fixiert. Kein Nachschlag, keine Stundenzettel.',
  },
  {
    title: 'Individueller Code',
    text: 'Kein Baukasten, kein gekauftes Theme. Ladezeit unter einer Sekunde.',
  },
  {
    title: 'Berlin, DACH-weit',
    text: 'Zusammenarbeit remote auf Deutsch und Englisch, Termine vor Ort in Berlin.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    glyph: '01',
    symbol: '✦',
    title: 'Modernes Design',
    text: 'Individuelle Designs statt austauschbarer Templates.',
    subtext: 'Kein standardisiertes Baukasten-Einerlei. Wir schaffen visuelle Identitäten, die Vertrauen wecken und im Gedächtnis bleiben.',
  },
  {
    glyph: '02',
    symbol: '✜',
    title: 'Mobile First',
    text: 'Optimierte Nutzererfahrung auf Smartphone, Tablet und Desktop.',
    subtext: 'Über 70% Ihrer Besucher nutzen Smartphones. Jede Interaktion, jeder Button und jedes Bild ist für mobile Touchscreens perfektioniert.',
  },
  {
    glyph: '03',
    symbol: '⚡',
    title: 'Performance',
    text: 'Schnelle, technisch saubere und optimierte Websites.',
    subtext: 'Ladezeiten unter 1 Sekunde durch schlanken, handgeschriebenen Code ohne überladene Plugins oder aufgeblähte Frameworks.',
  },
  {
    glyph: '04',
    symbol: '↗',
    title: 'SEO',
    text: 'Technische und strukturelle Grundlagen für bessere Sichtbarkeit.',
    subtext: 'Semantisches HTML, strukturierte Daten, OpenGraph und Core Web Vitals im grünen Bereich für Spitzenplätze bei Google.',
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'webdesign',
    number: '01',
    title: 'Webdesign',
    tagline: 'Modernes, conversion-orientiertes Website-Design.',
    description:
      'Kein Template, kein Baukasten. Wir gestalten einzigartige Oberflächen mit klarer Typografie, maßgeschneiderten Bildkonzepten und intuitiver Nutzerführung.',
    details: [
      'UI/UX Design in Figma mit interaktivem Prototyp',
      'Conversion-optimierte Informationsarchitektur',
      'Designsystem & konsistente Markenführung',
    ],
  },
  {
    id: 'webentwicklung',
    number: '02',
    title: 'Webentwicklung',
    tagline: 'Saubere und performante technische Umsetzung.',
    description:
      'Ihr fertiges Design, pixelgenau umgesetzt — schnell, wartbar, ohne Plugin-Stapel. Moderne Web-Standards mit messbarem Geschwindigkeitsvorteil.',
    details: [
      'Handgeschriebener, sauber strukturierter Code',
      'Schlankes, intuitives CMS zur eigenständigen Pflege',
      'Maximale Sicherheit & DSGVO-Konformität',
    ],
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO & Sichtbarkeit',
    tagline: 'Technische Grundlagen und On-Page-Optimierung.',
    description:
      'Gute Websites müssen gefunden werden. Wir optimieren semantische Tags, Seitenarchitektur, Ladezeiten und Rich Snippets für Google.',
    details: [
      'Core Web Vitals Optimierung für Top-Rankings',
      'Lokales SEO für Berlin & DACH-Region',
      'Google Search Console & Analytics Einrichtung',
    ],
  },
  {
    id: 'custom-solutions',
    number: '04',
    title: 'Individuelle Lösungen',
    tagline: 'Individuelle digitale Lösungen für spezielle Anforderungen.',
    description:
      'Spezialfunktionen, Kundenportale, API-Anbindungen und automatisierte Workflows. Wir bauen exakt das, was Ihr Geschäftsmodell verlangt.',
    details: [
      'Maßgeschneiderte Online-Kalkulatoren & Formulare',
      'Schnittstellen zu Buchhaltungs- & CRM-Systemen',
      'Skalierbare Webanwendungen & Portale',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bau-berlin',
    title: 'Vanguard Bau & Architektur',
    category: 'Handwerk & Bauunternehmen · Berlin',
    year: '2026',
    description:
      'Neuer Markenauftritt und digitale Baustellen-Präsentation für einen renommierten Berliner Generalunternehmer. Vollautomatische Vorqualifikation von Objektanfragen.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    results: '+135% qualifizierte Bauanfragen im ersten Quartal',
    layout: 'left',
    tags: ['Webdesign', 'Webentwicklung', 'CMS', 'SEO'],
  },
  {
    id: 'kanzlei-berlin',
    title: 'Kanzlei Dr. v. Moers & Partner',
    category: 'Anwälte & Kanzleien · Berlin & Frankfurt',
    year: '2026',
    description:
      'Diskrete, hochpräzise Kanzlei-Website mit digitaler Mandatsannahme und anwaltlichem Fachblog. Ladezeit 0.4 Sekunden auf Mobilgeräten.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    results: 'Ø 38 neue Wirtschaftsmandate pro Monat',
    layout: 'right',
    tags: ['Corporate Design', 'Next.js', 'Datenschutz DSGVO'],
  },
  {
    id: 'klinik-kurfuerstendamm',
    title: 'Zentrum für Plastische Chirurgie & Ästhetik',
    category: 'Medizin & Fachpraxis · Kurfürstendamm Berlin',
    year: '2026',
    description:
      'Premium-Auftritt für eine führende Privatklinik. Digitale Behandlungsberatung, 3D-Vorher/Nachher-Integration und nahtlose Online-Terminvergabe.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85',
    results: 'Telefonische Terminanfragen um 68% reduziert',
    layout: 'full',
    tags: ['Full Stack', 'Terminsystem-API', 'Barrierefreiheit BFSG'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Analyse & Erstgespräch',
    duration: '30–45 Min.',
    description:
      'Wir verstehen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele. Kostenlos, unverbindlich — und ehrlich.',
    deliverables: ['Anforderungskatalog', 'Zielgruppenanalyse', 'Verbindlicher Festpreis'],
  },
  {
    number: '02',
    title: 'Konzept & Design',
    duration: '1–2 Wochen',
    description:
      'Wir entwickeln ein individuelles visuelles Konzept. Klickbarer Entwurf vor der ersten Zeile Code.',
    deliverables: ['Figma-Prototyp', 'Typografie & Farbkonzept', 'Content-Struktur'],
  },
  {
    number: '03',
    title: 'Entwicklung',
    duration: '2–4 Wochen',
    description:
      'Das Design wird technisch sauber, performant und responsiv umgesetzt, inkl. CMS zur eigenen Pflege.',
    deliverables: ['Handgeschriebener Code', 'CMS-Setup', 'Suchmaschinen-Optimierung'],
  },
  {
    number: '04',
    title: 'Launch & Wartung',
    duration: 'Fortlaufend',
    description:
      'Die Website wird optimiert, getestet und veröffentlicht. Tests auf allen Geräten, danach optional Updates/Security.',
    deliverables: ['Domain & Hosting Setup', 'Google Indexierung', 'Monatlicher Support'],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'ab 3.900 €',
    description: 'Für Selbstständige und Praxen, die einen klaren, professionellen Einstieg suchen.',
    scope: 'OnePager (bis 6 Sektionen)',
    timeline: '3–4 Wochen',
    features: [
      'Individuelles Screendesign (kein Baukasten)',
      'Bis zu 6 maßgeschneiderte Sektionen',
      'Optimiert für Smartphone, Tablet & Desktop',
      'Conversion-starkes Kontaktformular',
      'SEO-Grundsetup & Google Vorbereitung',
      'Rechtssicher (DSGVO, Impressum, Cookie-Banner)',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    price: 'ab 6.900 €',
    description: 'Mehrseitige Website mit CMS und Conversion-Fokus — „für Unternehmen, die wachsen".',
    scope: 'Mehrseitige Website (5–12 Unterseiten)',
    timeline: '5–7 Wochen',
    highlight: true,
    features: [
      'Alles aus Starter plus:',
      'Mehrseitige Struktur mit Unterseiten',
      'Schlankes, intuitives CMS zur eigenständigen Pflege',
      'Erweiterte On-Page SEO & Schema.org Struktur',
      'Blog- oder News-Infrastruktur',
      'Interaktive Elemente & Lead-Filter',
      'Persönliche Einweisung & Video-Dokumentation',
    ],
  },
  {
    id: 'custom',
    name: 'Individuell',
    price: 'auf Anfrage',
    description: 'Komplexe Anforderungen, Integrationen oder E-Commerce.',
    scope: 'Maßgeschneiderte Webplattform',
    timeline: 'Nach Absprache',
    features: [
      'Komplexe Schnittstellen & API-Anbindungen',
      'Kundenportale oder Buchungssysteme',
      'E-Commerce & Online-Shop Architekturen',
      'Mehrsprachigkeit (DE, EN, FR etc.)',
      'Spezifische Datenbankanbindungen',
      'Prioritärer SLA-Wartungsvertrag',
    ],
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'text-anfragen',
    category: 'Inhalte',
    date: '14. August 2026',
    title: 'Website-Texte, die Anfragen bringen — Struktur schlägt Adjektive',
    readTime: '4 Min. Lesezeit',
    description:
      'Warum blumige Marketingfloskeln Interessenten abschrecken und wie Sie stattdessen mit klarer Problem-Lösungs-Architektur messbar mehr Kunden gewinnen.',
  },
  {
    id: 'baukasten-vs-code',
    category: 'Strategie',
    date: '9. Juli 2026',
    title: 'Baukasten, WordPress oder individuell: Was Sie wirklich brauchen',
    readTime: '6 Min. Lesezeit',
    description:
      'Wann ein Baukastensystem Sinn ergibt — und ab welchem Umsatz und Qualitätsanspruch eine handgefertigte Lösung tausende Euro spart.',
  },
  {
    id: 'bfsg-barrierefreiheit',
    category: 'Barrierefreiheit',
    date: '18. Juni 2026',
    title: 'Barrierefreie Website: Was das BFSG für Unternehmen bedeutet',
    readTime: '5 Min. Lesezeit',
    description:
      'Das Barrierefreiheitsstärkungsgesetz verpflichtet Unternehmen zur Zugänglichkeit. Welche Anforderungen jetzt gelten und wie Sie Bußgelder vermeiden.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'Was kostet eine Website bei euch?',
    answer:
      'Unsere Projekte starten transparent: Ein reines Screendesign erhalten Sie ab 1.900 €, eine technische Umsetzung ab 2.900 €, und unser schlüsselfertiges Full-Stack-Paket liegt je nach Umfang bei 3.900 € (OnePager) bzw. 6.900 € (mehrseitige Business-Website). Sie erhalten vor Projektstart einen schriftlich fixierten Festpreis — ohne versteckte Zusatzkosten oder Stundenzettel.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Wie lange dauert ein Website-Projekt?',
    answer:
      'Ein zielgerichteter OnePager ist in der Regel innerhalb von 3–4 Wochen fertiggestellt und online. Eine mehrseitige Unternehmens-Website mit CMS und speziellen Funktionsbereichen benötigt typischerweise 5–7 Wochen. Dank direkter Absprachen ohne zeitraubendes Agentur-Theater halten wir Deadlines verlässlich ein.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Kann ich Inhalte später selbst ändern?',
    answer:
      'Ja, absolut! Wir integrieren ein modernes, schlankes CMS (Content Management System), mit dem Sie Texte, Bilder, News und Referenzen kinderleicht selbst pflegen können — ganz ohne Programmierkenntnisse. Vor dem Launch erhalten Sie eine persönliche Einweisung und eine kurze Videodokumentation.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Brauche ich wirklich ein Wartungspaket?',
    answer:
      'Nein, ein Wartungspaket ist keineswegs verpflichtend. Sie besitzen den Code und die Website zu 100%. Wenn Sie sich jedoch voll auf Ihr Kerngeschäft konzentrieren möchten, bieten wir monatlich kündbare Betreuungspakete für Sicherheits-Updates, Cloud-Backups, Domain-Management und Content-Pflege an.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Wie läuft die Zusammenarbeit ab — muss ich nach Berlin kommen?',
    answer:
      'Nein, wir arbeiten vollständig remote mit Kunden in ganz Deutschland, Österreich und der Schweiz. Die Abstimmungen finden flexibel via Video-Call, Telefon oder E-Mail statt. Wenn Sie in Berlin oder Umgebung ansässig sind, laden wir Sie für das Erstgespräch oder die Konzeptphase aber selbstverständlich gerne zu einem persönlichen Kaffee vor Ort ein.',
  },
];

export const TICKER_ITEMS = [
  'Handwerk',
  'Medizin',
  'Recht',
  'Immobilien',
  'Automotive',
  'Unternehmen',
  'Handwerk',
  'Medizin',
  'Recht',
  'Immobilien',
  'Automotive',
  'Unternehmen',
];

export const PROOF_TICKER_TEXTS = [
  'TERMINE KOMMEN ONLINE HEREIN STATT ÜBER DAS TELEFON',
  'ANFRAGEN, DIE BEREITS QUALIFIZIERT IM POSTFACH LIEGEN',
  'ANFRAGEN MIT ALLEN ANGABEN ZUM OBJEKT, OHNE RÜCKFRAGE',
];

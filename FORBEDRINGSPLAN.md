# Hejmadi.com — Forbedringsplan & Idékatalog
**Dato:** 15. marts 2026
**Kilder:** ChatGPT Deep Research, Google Gemini, Claude Opus

---

## DEL 1: FORBEDRINGER TIL EKSISTERENDE APPS

### 1. SymptomTracker (SymptomOverblik)
**Status:** iPhone-app, gratis, 100% privat (lokal data + iCloud)

| Kategori | Forslag | Kilde |
|----------|---------|-------|
| AI-korrelation | Automatisk "trigger-finder": "Når pollen er høj + søvn < 6t, stiger din ledsmerter 30%" | Gemini |
| Stemme-log | "Hey SymptomOverblik, dull hovedpine, måske 4/10" → AI parser til database | Gemini |
| Læge-rapport | "One-Page Doctor Summary" — top 3 triggers + gennemsnitsværdier, designet til 15-min konsultation | Gemini |
| Prediktive alerts | Lokal ML: "Baseret på HRV + søvn er du i høj risiko for flare-up i morgen" | Gemini |
| Modulær UI | Lad brugere skjule moduler de ikke bruger (reducér "logging fatigue") | Gemini |
| Medicin-timing | Track *hvornår* medicin tages, ikke bare *at* den tages — vigtig for ADHD/smerte | Gemini |
| Lab-resultater | Import PDF/CSV blodprøver og overlay mod symptomgrafer | Gemini |
| Foto-AI | Kamera til at klassificere hudforandringer eller Bristol Stool Scale | Gemini |
| Miljø-lag | Track forsinkede effekter: "Stormen for 24 timer siden → din migræne i dag" | Gemini |
| Niche: Long COVID | "Pacing"-værktøjer med energi-envelopes (ME/CFS) | Gemini |
| Niche: Perimenopause | Brain fog + nattesved-korrelation med HRT | Gemini |
| Niche: EDS/POTS | Saltindtag + positionsbaseret pulsovervågning | Gemini |
| Monetisering | Gratis logging + premium AI-korrelation (one-time IAP) eller "Lifetime" $40-60 | Gemini |
| Privacy-branding | Label features som "Processed on Device" — marketingsfordel | Gemini |
| Widget | Hurtig check-in fra homescreen/lockscreen uden at åbne appen | Claude |
| Shortcuts/Siri | "Siri, registrer hovedpine niveau 5" | Claude |
| Eksport til sundhed.dk | Mulighed for at dele data med egen læge via sundhed.dk | Claude |

### 2. DosisDato
**Status:** iPhone & iPad app, medicindoserings-beregner

| Forslag | Kilde |
|---------|-------|
| Apple Watch complication — se næste dosis på håndleddet | Claude |
| Push-notifikationer for doseringspåmindelser | Claude |
| Delefunction — send dosisplan til patient/pårørende som PDF/link | Claude |
| Interaktionscheck — advarsel ved kendte lægemiddelinteraktioner | Claude |
| Vægstbaseret dosering til børn (pædiatrisk tilstand) | Claude |
| Favorit-behandlinger — gem hyppigt brugte protokoller | Claude |
| Flere sprog (engelsk, tysk — udvid markedet) | Claude |
| Integration med pro.medicin.dk data | Claude |

### 3. Demokrati-Databasen
**Status:** iPhone-app, 1.570 folketingsafstemninger

| Forslag | Kilde |
|---------|-------|
| Push-notifikationer ved nye afstemninger | Claude |
| Kommunalvalg-udvidelse (regionsråd, byråd) | Claude |
| "Sammenlign to partier" side-by-side | Claude |
| EU-parlamentet afstemninger | Claude |
| Deling af resultater på sociale medier ("Jeg matcher 78% med X") | Claude |
| iPad-optimeret layout med split view | Claude |
| Historisk tidslinje — se partiets stemmeadfærd over tid | Claude |
| Widget med "dagens afstemning" | Claude |

### 4. AS-drive
**Status:** iPhone, enterprise foto-upload til SharePoint/OneDrive

| Forslag | Kilde |
|---------|-------|
| Video-optagelse ud over foto | Gemini |
| DICOM metadata-tagging | Gemini |
| Automatisk billedkategorisering (sår, udslæt, etc.) via on-device ML | Gemini |
| Audit trail / log over alle uploads med timestamps | Gemini |
| Multi-tenant — flere organisationer/SharePoint sites | Claude |
| Batch-upload af flere billeder på én gang | Claude |
| iPad-app med større preview | Claude |
| Ruler/målestok-overlay til at måle sår-størrelse på foto | Claude |
| Integration med EPIC/Columna journalsystemer | Gemini |
| Companion web-dashboard til at se uploadede billeder | Gemini |

### 5. NemJPG
**Status:** Windows batch-konverterings script, gratis, under 4 KB

| Forslag | Kilde |
|---------|-------|
| macOS-version (AppleScript eller shell script) | Claude |
| Resize-option (fx max 1920px bred) | Claude |
| Kvalitets-slider (JPEG compression level) | Claude |
| Drag-and-drop GUI-wrapper | Claude |
| AVIF/WebP output-formater ud over JPG | Claude |
| Batch-rename med dato/sekvens | Claude |
| Context menu integration (højreklik → Konverter til JPG) | Claude |

### 6. BlomsterByLuddi
**Status:** iOS-app, AI-haveekspert via Anthropic Claude API

| Forslag | Kilde |
|---------|-------|
| Sæsonkalender — hvornår plante/høste/beskære | Claude |
| Planteidentifikation fra foto (udover blomsterbed-planlægning) | Claude |
| Påmindelser om vanding/gødning baseret på plantetype | Claude |
| Vejrintegration — "Det fryser i nat, dæk dine dahlia" | Claude |
| Offline-tilstand med cached plantedata | Claude |
| Community/galleri — del dit blomsterbed med andre brugere | Claude |
| Skadedyrs-identifikation fra foto | Claude |
| iPad-app med større bed-planlægger | Claude |
| Integration med danske planteskolers sortiment | Claude |

### 7. Telefonvisitation
**Status:** Web-app, DSAM triageguide

| Forslag | Kilde |
|---------|-------|
| PWA — installérbar på telefon med offline-support | Claude |
| Søgning med synonymer/stavefejl-tolerance | Claude |
| Flowchart-visning for triagering (visuelt beslutningstræ) | Claude |
| Print-venlig version af individuelle symptomkort | Claude |
| Statistik — hvilke symptomer søges mest (anonymt) | Claude |
| Dark mode til natarbejde | Claude |
| Tilføj links til sundhed.dk kliniske retningslinjer per symptom | Claude |
| Feedback-knap — "Var denne guide nyttig?" | Claude |

---

## DEL 2: NYE APP-IDÉER

### Prioritet A — Stærk match med Michaels profil

| Idé | Beskrivelse | Platform | Kilde |
|-----|-------------|----------|-------|
| **AI Konsultations-Assistent** | AI-drevet SOAP-noter fra tale. Lægen taler under konsultation → appen laver journalnotat-udkast. On-device processing for GDPR. | iOS | Gemini + Claude |
| **KlinikFlow** | Praksis-dashboard: venteværelse-status, dagens patienter, task management for praksispersonale. Integration med booking. | Web/iPad | Claude |
| **PatientBrief** | Patienten udfylder et struktureret spørgeskema FØR konsultationen. Lægen får et overblik på 30 sek. Reducerer "hvad fejler du?"-tiden. | Web + iOS | Claude |
| **MedicinTjek** | Scan stregkode på medicinpakke → se bivirkninger, interaktioner, dosering. Powered by pro.medicin.dk data. | iOS | Claude |
| **LægePraksis AI-Kursus** | Online platform/app med interaktive moduler om AI i almen praksis. Baseret på bogindholdet. CME-point-samarbejde med DSAM. | Web | Claude |

### Prioritet B — Niche men værdifulde

| Idé | Beskrivelse | Platform | Kilde |
|-----|-------------|----------|-------|
| **DykkerLog** | Digital dykkerbog med automatisk beregning af overfladetid, nitrogen-loading. Integration med dykercomputere via Bluetooth. | iOS | Claude |
| **Longevity Tracker** | Anti-aging version af SymptomTracker: track biomarkører (HRV, søvn, blodtryk), kost, motion. Baseret på Anti-Age bogen. | iOS | Claude |
| **E-konsultation Skabeloner** | Bibliotek af copy-paste skabeloner til e-konsultationer i almen praksis. Kategoriseret efter diagnose. | Web/iOS | Claude |
| **VagtGuide** | Hurtig opslagsbog for lægevagten: "Hvad gør jeg med X?" — offline-klar, evidensbaseret. Udvidelse af Telefonvisitation. | iOS/PWA | Claude |
| **Klinisk Fotodokumentation** | Standalone patient-vendt version af AS-drive: patient tager billeder af sår/udslæt og deler sikkert med egen læge. | iOS | Gemini |

### Prioritet C — Eksperimentelle

| Idé | Beskrivelse | Kilde |
|-----|-------------|-------|
| **AI Triage Chat** | Chatbot-version af Telefonvisitation — patienten beskriver symptomer, AI foreslår triagekategori | Claude |
| **PraksisGPT** | Custom GPT/chatbot trænet på danske kliniske retningslinjer, til læger og personale | Claude |
| **Sundhedspolitisk Dashboard** | Kombination af Demokrati-Databasen + sundhedsdata: "Hvordan stemmer dit parti om sundhed?" | Claude |

---

## DEL 3: HJEMMESIDE-FORBEDRINGER

### SEO & Teknisk

| Forslag | Prioritet | Kilde |
|---------|-----------|-------|
| Tilføj blog/nyhedssection med regelmæssige indlæg om AI i sundhed | Høj | Claude |
| Tilføj `<meta>` schema markup for hver bogside (Book schema) | Høj | Claude |
| Performance: lazy-load billeder, minify CSS, tilføj caching headers | Medium | Claude |
| Tilføj Google Analytics 4 eller Plausible (privacy-venlig) | Medium | Claude |
| Opret Google Search Console + Bing Webmaster Tools profiler | Høj | Claude |
| Tilføj breadcrumbs navigation på undersider | Medium | Claude |
| Opret 404-side med navigation tilbage | Lav | Claude |
| Structured data for foredrag (Event schema) | Medium | Claude |
| Structured data for apps (SoftwareApplication schema) | Medium | Claude |

### Indhold & Konvertering

| Forslag | Prioritet | Kilde |
|---------|-----------|-------|
| Tilføj video-introduction (30 sek "Hvem er Michael?") på forsiden | Høj | Claude |
| Testimonials fra foredrag (citater fra arrangører) | Høj | Claude |
| "Book mig som foredragsholder" CTA med konkret prisniveau | Høj | Claude |
| Pressebilleder i høj kvalitet tilgængelige til download | Medium | Claude |
| Nyhedsbrev-tilmelding (email-liste til nye bøger/foredrag) | Høj | Claude |
| Case studies: "Sådan bruger Lægehuset Ferritslev AI" | Medium | Claude |
| Podcast-optrædener liste (hvis relevant) | Lav | Claude |

### Design

| Forslag | Prioritet | Kilde |
|---------|-----------|-------|
| Animeret hero-sektion (subtle parallax eller fade-in) | Lav | Claude |
| App-sektionen: Filtrer efter platform (iOS/Web/Windows) | Medium | Claude |
| Bogside: "Læs uddrag" knap med modal/preview | Medium | Claude |
| Dark mode toggle på hele sitet | Lav | Claude |

---

## DEL 4: CONTENT & MARKETING STRATEGI

### Thought Leadership — AI i Sundhed

| Strategi | Handling | Tidslinje |
|----------|---------|-----------|
| **LinkedIn newsletter** | Ugentligt indlæg om AI i almen praksis (500-800 ord). Dele cases, nye tools, refleksioner. | Start straks |
| **Podcast** | Start "Doktor Hansen Podcast" — interviews med sundhedsteknologer, politikere, kolleger. 20-30 min episoder. | Q2 2026 |
| **YouTube/video** | Korte (2-5 min) demo-videoer af dine apps + "AI i praksis" tips. Embed på hjemmesiden. | Q2 2026 |
| **Konference-talks** | Ansøg om at tale ved Health Tech Summit, HIMSS Europe, Nordic Health AI | Løbende |
| **Akademisk** | Skriv op dine erfaringer med AI scribes som peer-reviewed artikel (Ugeskrift for Læger) | Q3 2026 |
| **Mediaoptrædener** | Pitche til DR/TV2 som "go-to" ekspert på AI i sundhed. Tilbyd kommentarer til aktuelle sager. | Løbende |

### App-Marketing

| Strategi | Handling |
|----------|---------|
| App Store Optimization | Bedre screenshots, video preview, keywords for alle apps |
| Kryds-promotion | Hver app promoverer de andre ("Fra skaberen af DosisDato...") |
| Pressekit | Samlet side med alle apps, screenshots, beskrivelser klar til journalister |
| ProductHunt launch | Launch nye apps/updates på ProductHunt for international synlighed |
| DSAM/PLO samarbejde | Pitch apps direkte til faglige organisationer som anbefalede værktøjer |

### Personlig Branding

| Strategi | Handling |
|----------|---------|
| Speaker one-sheet | Professionelt "book mig" PDF med emner, billeder, testimonials |
| Email signature | Link til hjemmeside + seneste bog i email-signatur |
| Bog-bundles | Tilbyd alle 3 bøger som samlet pakke med rabat |
| Masterclass | "AI i Almen Praksis" online kursus (4-6 moduler, betalende) |

---

## IMPLEMENTERINGSRÆKKEFØLGE (Foreslået)

### Fase 1 — Nu (Marts-April 2026)
1. ✅ Google Search Console opsætning
2. ✅ Nyhedsbrev-tilmelding på hjemmesiden
3. ✅ LinkedIn newsletter start
4. SymptomTracker: Widget + Shortcuts
5. DosisDato: Push-notifikationer

### Fase 2 — Q2 2026
6. Blog-sektion på hjemmesiden
7. Speaker one-sheet + pressekit
8. SymptomTracker: AI-korrelation (premium feature)
9. Telefonvisitation: PWA med offline-support
10. PatientBrief prototype

### Fase 3 — Q3-Q4 2026
11. AI Konsultations-Assistent (SOAP-noter) MVP
12. Podcast launch
13. DosisDato: Apple Watch
14. BlomsterByLuddi: Sæsonkalender
15. Masterclass/online kursus

---

*Dette dokument er genereret med input fra ChatGPT (Deep Research), Google Gemini og Claude Opus. ChatGPT's deep research kørte konkurrenceanalyse på App Store-reviews og Reddit. Gemini leverede detaljeret SymptomTracker-analyse. Claude bidrog med hjemmeside-, marketing- og nye app-idéer.*

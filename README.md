# TripChat Planner - POC Demo

![TripChat Planner Logo](public/assets/images/logo.svg)

## 📋 Panoramica del Progetto

**TripChat Planner** è un Proof of Concept (POC) per un'applicazione mobile/web che sfrutta l'intelligenza artificiale generativa per pianificare e modificare in tempo reale viaggi personalizzati. L'app si adatta alle preferenze dell'utente e alle sue abitudini, integrando attività, spostamenti e suggerimenti per ottimizzare l'esperienza di viaggio.

Questo repository contiene una demo statica con **6 pagine HTML** che mostrano le funzionalità principali dell'applicazione.

---

## 🎯 Scopo del Progetto

Questo POC è stato creato per:

- **Dimostrare il flusso utente** dall'onboarding alla pianificazione completa del viaggio
- **Validare l'interfaccia utente** con un design minimal, responsive e accessibile
- **Presentare le funzionalità chiave** dell'AI conversazionale per la pianificazione viaggi
- **Fornire una base** per lo sviluppo futuro con backend e integrazione AI reale

---

## 📱 Le 6 Pagine Demo

### 1. **login.html** - Accesso e Autenticazione
- Form di login con validazione client-side
- Gestione errori in tempo reale
- Mock di autenticazione a due fattori (MFA)
- Login social (Google, Apple)
- Design responsive e accessibile (WCAG 2.2)

**Funzionalità dimostrate:**
- Validazione email e password
- Toggle visibilità password
- Indicatore di caricamento
- Gestione errori utente-friendly

---

### 2. **home.html** - Dashboard Principale
- Panoramica rapida dei viaggi attivi
- Call-to-Action per creare un nuovo viaggio
- Statistiche utente (viaggi, destinazioni, attività)
- Suggerimenti AI personalizzati
- Card viaggi in evidenza

**Funzionalità dimostrate:**
- Quick stats interattive
- Suggerimenti basati su AI
- Navigazione rapida verso altre sezioni
- Azioni rapide (preferenze, cronologia, etc.)

---

### 3. **chat.html** - Pianificazione Conversazionale
- Interfaccia chat con assistente AI
- Messaggi utente e sistema
- Quick replies e suggerimenti inline
- Sidebar con riepilogo viaggio in real-time
- Gestione stato conversazione

**Funzionalità dimostrate:**
- Chat conversazionale fluida
- Aggiornamento dinamico del riepilogo
- Pillole di chiarimento
- Typing indicator
- Notifiche toast non intrusive

---

### 4. **profile.html** - Profilo e Preferenze
- Gestione informazioni personali
- Preferenze di viaggio (stile, budget, interessi)
- Impostazioni privacy e sicurezza
- Gestione notifiche
- Consensi GDPR

**Funzionalità dimostrate:**
- Navigazione a tab
- Form di modifica dati
- Toggle per preferenze
- Gestione privacy completa
- UI per cambio password e download dati

---

### 5. **trips.html** - Gestione Viaggi
- Elenco completo di tutti i viaggi
- Filtri per stato (in arrivo, in pianificazione, completati)
- Ordinamento e visualizzazione (griglia/lista)
- Progress bar per viaggi in pianificazione
- Azioni rapide (condividi, elimina)

**Funzionalità dimostrate:**
- Filtri dinamici
- Card viaggi con metadati
- Indicatori di stato visivi
- CTA contestuali per ogni stato

---

### 6. **trip-detail.html** - Dettaglio Viaggio
- Hero image con informazioni viaggio
- Timeline dettagliata per giorno
- Card attività con orari e durate
- Riepilogo compatto laterale
- Placeholder mappa interattiva
- Previsioni meteo
- Suggerimenti AI per ottimizzazione

**Funzionalità dimostrate:**
- Navigazione tra giorni
- Timeline attività dettagliata
- Integrazione mappa (placeholder)
- Widget meteo
- Suggerimenti AI contestuali
- Export PDF

---

## 📂 Struttura del Repository

```
tripchat-planner/
│
├── public/                          # Asset pubblici e risorse statiche
│   ├── css/
│   │   ├── styles.css              # Stili globali e reset
│   │   ├── login.css               # Stili specifici login (placeholder)
│   │   ├── home.css                # Stili specifici home (placeholder)
│   │   ├── chat.css                # Stili specifici chat (placeholder)
│   │   ├── profile.css             # Stili specifici profilo (placeholder)
│   │   ├── trips.css               # Stili specifici elenco viaggi (placeholder)
│   │   └── trip-detail.css         # Stili specifici dettaglio (placeholder)
│   │
│   ├── js/
│   │   ├── main.js                 # JavaScript principale e utilities
│   │   ├── components.js           # Helper per componenti riutilizzabili
│   │   ├── login.js                # Logica pagina login
│   │   ├── home.js                 # Logica pagina home
│   │   ├── chat.js                 # Logica pagina chat
│   │   ├── profile.js              # Logica pagina profilo
│   │   ├── trips.js                # Logica pagina viaggi
│   │   └── trip-detail.js          # Logica pagina dettaglio viaggio
│   │
│   └── assets/
│       ├── images/                 # Immagini (logo, placeholder, etc.)
│       └── icons/                  # Icone SVG
│
├── src/                            # Sorgenti HTML
│   ├── pages/                      # 6 pagine principali
│   │   ├── login.html
│   │   ├── home.html
│   │   ├── chat.html
│   │   ├── profile.html
│   │   ├── trips.html
│   │   └── trip-detail.html
│   │
│   └── components/                 # Componenti HTML riutilizzabili
│       ├── header.html             # Header navigazione
│       ├── footer.html             # Footer
│       ├── card-trip.html          # Card viaggio
│       ├── card-activity.html      # Card attività
│       ├── chat-bubble.html        # Messaggio chat
│       └── summary-bar.html        # Riepilogo viaggio
│
├── README.md                       # Questo file
└── package.json                    # Configurazione npm (opzionale)
```

---

## 🚀 Come Avviare il Progetto Localmente

### Prerequisiti
- Browser moderno (Chrome, Firefox, Edge, Safari)
- (Opzionale) Server HTTP locale

### Metodo 1: Apertura Diretta
1. Clona o scarica il repository
2. Naviga nella cartella `src/pages/`
3. Apri `login.html` (o qualsiasi altra pagina) direttamente nel browser

### Metodo 2: Server Locale (Consigliato)
```powershell
# Usando Python
cd tripchat-planner
python -m http.server 8000

# Oppure usando Node.js (npx)
npx serve .

# Oppure usando VS Code Live Server
# Installa l'estensione "Live Server" e clicca "Go Live"
```

Poi apri il browser e vai su:
```
http://localhost:8000/src/pages/login.html
```

### Navigazione tra le pagine
- **Login** → `login.html`
- **Home** → `home.html`
- **Chat** → `chat.html`
- **Profilo** → `profile.html`
- **Viaggi** → `trips.html`
- **Dettaglio** → `trip-detail.html`

---

## ♿ Accessibilità

Il progetto è stato sviluppato seguendo le linee guida **WCAG 2.2 Level AA**:

- ✅ Markup semantico HTML5
- ✅ Attributi ARIA per screen reader
- ✅ Navigazione da tastiera completa
- ✅ Contrasto colori conforme
- ✅ Focus visibile
- ✅ Testi alternativi per immagini
- ✅ Form con label e validazione accessibile
- ✅ Supporto per `prefers-reduced-motion`

---

## 🎨 Design System

### Colori Principali
- **Primary**: `#4F46E5` (Indigo)
- **Secondary**: `#10B981` (Green)
- **Accent**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)

### Tipografia
- **Font**: Inter (fallback: system fonts)
- **Sizes**: da 0.75rem a 2.25rem
- **Weights**: 400 (normal), 500 (medium), 600 (semibold)

### Spacing
Sistema basato su multipli di 4px:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

---

## ⚡ Performance

- **Lazy loading** per immagini
- **CSS ottimizzato** con variabili CSS custom
- **JavaScript modulare** caricato solo quando necessario
- **Transizioni hardware-accelerated**
- **Nessuna dipendenza esterna** (vanilla JS/CSS)

---

## 🧩 Componenti Riutilizzabili

I componenti HTML in `src/components/` sono template con placeholder da sostituire dinamicamente:

### Esempio: `card-trip.html`
```html
<article class="trip-card" data-trip-id="{TRIP_ID}">
    <h3>{TRIP_TITLE}</h3>
    <span>{TRIP_DATES}</span>
    <!-- ...altri placeholder -->
</article>
```

**Utilizzo in JavaScript:**
```javascript
ComponentsLoader.createTripCard({
    id: 1,
    title: 'Weekend a Parigi',
    dates: '15-18 Feb 2026'
});
```

---

## 🔮 Roadmap Futura

### Fase 1: Backend & API
- [ ] Sviluppo API REST/GraphQL
- [ ] Autenticazione JWT
- [ ] Database per utenti e viaggi
- [ ] Integrazione con servizi esterni (meteo, mappe, prenotazioni)

### Fase 2: Integrazione AI
- [ ] Connessione a LLM (GPT-4, Claude, Gemini)
- [ ] Sistema di raccomandazione personalizzato
- [ ] Analisi preferenze utente
- [ ] Ottimizzazione itinerari in real-time

### Fase 3: PWA & Mobile
- [ ] Trasformare in Progressive Web App
- [ ] Funzionalità offline
- [ ] Notifiche push
- [ ] Geolocalizzazione
- [ ] App nativa (React Native / Flutter)

### Fase 4: Funzionalità Avanzate
- [ ] Condivisione viaggi e collaborazione
- [ ] Integrazione pagamenti
- [ ] Sistema di recensioni
- [ ] Export multipli (PDF, iCal, Google Calendar)
- [ ] Assistente vocale
- [ ] Realtà aumentata per esplorazione destinazioni

### Fase 5: Framework & Tooling
- [ ] Migrazione a React/Vue/Svelte
- [ ] TypeScript per type safety
- [ ] Testing (Jest, Playwright)
- [ ] CI/CD pipeline
- [ ] Monitoraggio e analytics

---

## 🛠️ Tecnologie Utilizzate (Attuali)

- **HTML5** - Markup semantico
- **CSS3** - Styling moderno con variabili e grid/flexbox
- **Vanilla JavaScript** - Nessuna dipendenza
- **Web Components** (concept) - Componenti riutilizzabili

---

## 📝 Note di Sviluppo

### Mock Data
Tutti i dati visualizzati sono **placeholder statici**. Non c'è backend o database reale.

### Integrazione AI
Le risposte dell'assistente chat sono **simulate**. L'integrazione reale richiederebbe:
- API key per servizi LLM
- Backend per gestire le conversazioni
- Sistema di prompt engineering
- Rate limiting e caching

### Componenti CSS
I file CSS specifici per pagina (`login.css`, `home.css`, etc.) sono **placeholder** vuoti. Tutti gli stili sono attualmente in `styles.css` globale.

---

## 🤝 Contributi

Questo è un POC interno. Per suggerimenti o modifiche, contattare il team di sviluppo.

---

## 📄 Licenza

Copyright © 2026 TripChat Planner. Tutti i diritti riservati.

---

## 📧 Contatti

Per informazioni sul progetto:
- **Email**: info@tripchat.example.com
- **Website**: https://tripchat.example.com

---

## 🎉 Credits

Sviluppato con ❤️ in Italia per il POC TripChat Planner.

**Team:**
- Design: [Team Design]
- Sviluppo: [Team Dev]
- Product: [Product Manager]

---

## 📚 Riferimenti

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

**Versione**: 1.0.0  
**Ultimo aggiornamento**: Gennaio 2026

// ===================================
// I-Travel - Lightweight i18n Runtime
// ===================================

(function () {
    const STORAGE_KEY = 'itravel_language';
    const DEFAULT_LANG = 'en';
    const SUPPORTED = new Set(['en', 'it']);
    const ATTRS_TO_TRANSLATE = ['placeholder', 'title', 'aria-label', 'alt'];

    const textNodeOriginals = new WeakMap();
    const elementAttrOriginals = new WeakMap();

    let currentLang = normalizeLang(localStorage.getItem(STORAGE_KEY)) || DEFAULT_LANG;

    const EXACT_TEXT = new Map([
        ['Offline', 'Offline'],
        ['Online', 'Online'],
        ['TripChat Planner', 'I-Travel'],
        ['TripChat', 'I-Travel'],
        ['I-Travel', 'I-Travel'],
        ['Indietro', 'Back'],
        ['Profilo', 'Profile'],
        ['Notifiche', 'Notifications'],
        ['Nuova chat', 'New chat'],
        ['Impostazioni', 'Settings'],
        ['Home', 'Home'],
        ['Esci', 'Sign out'],
        ['Apri in Chat', 'Open in Chat'],
        ['Prenota tutto ora', 'Book everything now'],
        ['Mostra', 'Show'],
        ['Espandi', 'Expand'],
        ['Filtri', 'Filters'],
        ['Applica', 'Apply'],
        ['Reimposta', 'Reset'],
        ['Valuta', 'Currency'],
        ['Lingua', 'Language'],
        ['Italiano', 'Italian'],
        ['Tutti', 'All'],
        ['In corso', 'Ongoing'],
        ['In arrivo', 'Upcoming'],
        ['Passati', 'Past'],
        ['Conflitto', 'Conflict'],
        ['Passato', 'Past'],
        ['Condividi', 'Share'],
        ['Condividi viaggio', 'Share trip'],
        ['Condividi con amici', 'Share with friends'],
        ['Chat', 'Chat'],
        ['Mappa', 'Map'],
        ['Oggi', 'Today'],
        ['Ieri', 'Yesterday'],
        ['Partenza', 'Departure'],
        ['Ritorno', 'Return'],
        ['Destinazioni', 'Destinations'],
        ['Durata', 'Duration'],
        ['Periodo', 'Period'],
        ['Budget', 'Budget'],
        ['Date', 'Dates'],
        ['Persone', 'People'],
        ['Date esatte', 'Exact dates'],
        ['Numero persone', 'Number of people'],
        ['Numero persone:', 'Number of people:'],
        ['Budget preciso', 'Exact budget'],
        ['Crea bozza itinerario', 'Create itinerary draft'],
        ['Creazione in corso...', 'Creating...'],
        ['Aggiungi tappa', 'Add stop'],
        ['Cambia date', 'Change dates'],
        ['Preferenze trasporto', 'Transport preferences'],
        ['Suggerisci attività', 'Suggest activities'],
        ['Termini', 'Terms'],
        ['Privacy', 'Privacy'],
        ['Termini di servizio', 'Terms of service'],
        ['Assistenza', 'Support'],
        ['oppure', 'or'],
        ['Continua con email', 'Continue with email'],
        ['Prova la demo', 'Try the demo'],
        ['Verifica codice', 'Verify code'],
        ['Invia nuovo codice', 'Send new code'],
        ['Verifica a due fattori', 'Two-factor verification'],
        ['Accesso in corso...', 'Signing in...'],
        ['Errore di accesso', 'Sign-in error'],
        ['Troppi tentativi', 'Too many attempts'],
        ['Crea nuovo viaggio', 'Create new trip'],
        ['Importa itinerario', 'Import itinerary'],
        ['Funzionalità principali', 'Main features'],
        ['Chat di pianificazione', 'Planning chat'],
        ['Itinerari intelligenti', 'Smart itineraries'],
        ['Mappa interattiva', 'Interactive map'],
        ['Il mio profilo', 'My profile'],
        ['I miei viaggi', 'My trips'],
        ['Panoramica rapida', 'Quick overview'],
        ['Viaggi attivi', 'Active trips'],
        ['Tappe pianificate', 'Planned stops'],
        ['Budget totale', 'Total budget'],
        ['Gems salvate', 'Saved gems'],
        ['Tutti i viaggi', 'All trips'],
        ['Prossimi 90 giorni', 'Next 90 days'],
        ['Passati (ultimo anno)', 'Past (last year)'],
        ['Personalizza il tuo profilo', 'Customize your profile'],
        ['Foto profilo', 'Profile photo'],
        ['Bio', 'Bio'],
        ['Lingua e valuta', 'Language and currency'],
        ['Stile di viaggio', 'Travel style'],
        ['Budget per persona', 'Budget per person'],
        ['Priorità trasporti', 'Transport priority'],
        ['Treno', 'Train'],
        ['Aereo', 'Plane'],
        ['Auto', 'Car'],
        ['A piedi', 'Walking'],
        ['Salva preferenze', 'Save preferences'],
        ['Vedi tutte le preferenze', 'See all preferences'],
        ['Mappa Completa', 'Full map'],
        ['Tappe', 'Stops'],
        ['Percorsi', 'Routes'],
        ['Meteo', 'Weather'],
        ['Mappa Itinerario', 'Itinerary map'],
        ['Dettagli Viaggio', 'Trip details'],
        ['Modifica', 'Edit'],
        ['Sincronizzato', 'Synced'],
        ['Assistente I-Travel', 'I-Travel Assistant'],
        ['Documenti', 'Documents'],
        ['Prenotazioni', 'Bookings'],
        ['Itinerario Giorno per Giorno', 'Day-by-Day Itinerary'],
        ['Aggiungi', 'Add'],
        ['Aggiungi attività', 'Add activity'],
        ['Gestisci tutto', 'Manage all'],
        ['Auto noleggio', 'Car rental'],
        ['Auto categoria', 'Car category'],
        ['Prenota Ora', 'Book Now'],
        ['Confermato', 'Confirmed'],
        ['Arrivo', 'Arrival'],
        ['Giorno', 'Day'],
        ['✓ Documenti', '✓ Documents'],
        ['! Prenotazioni', '! Bookings'],
        ['Viaggio', 'Travel'],
        ['Alloggio', 'Accommodation'],
        ['Esperienza', 'Experience'],
        ['Enogastronomia', 'Food & Wine'],
        ['Urgente', 'Urgent'],
        ['Modifica attività', 'Edit activity'],
        ['Menu attività', 'Activity menu'],
        ['2 giorni fa', '2 days ago'],
        ['1 settimana fa', '1 week ago']
    ]);

    const REPLACEMENTS = [
        ['TripChat Planner', 'I-Travel'],
        ['Dettaglio Viaggio - TripChat Planner', 'Trip Detail - I-Travel'],
        ['Profilo Personale - TripChat Planner', 'Profile - I-Travel'],
        ['Login - TripChat Planner', 'Login - I-Travel'],
        ['Home - TripChat Planner', 'Home - I-Travel'],
        ['Tutti i viaggi - TripChat Planner', 'All trips - I-Travel'],
        ['TripChat Planner - Dashboard principale per pianificare i tuoi viaggi', 'I-Travel - Main dashboard to plan your trips'],
        ['TripChat Planner - Accedi al tuo account e pianifica viaggi con l\'intelligenza artificiale', 'I-Travel - Sign in and plan trips with AI'],
        ['TripChat Planner - Tutti i tuoi viaggi organizzati', 'I-Travel - All your trips organized'],
        ['TripChat Planner - Personalizza il tuo profilo di viaggio', 'I-Travel - Customize your travel profile'],
        ['TripChat Planner - Dettaglio viaggio con itinerario giornaliero', 'I-Travel - Trip detail with daily itinerary'],
        ['Connessione assente. Alcune funzioni potrebbero non essere disponibili.', 'No connection. Some features may be unavailable.'],
        ['Pianifica viaggi parlando', 'Plan trips by chatting'],
        ['Viaggiatore che pianifica un\'avventura con smartphone', 'Traveler planning an adventure with a smartphone'],
        ['Verifica le credenziali e riprova.', 'Check your credentials and try again.'],
        ['Attendi qualche minuto prima di riprovare.', 'Wait a few minutes before trying again.'],
        ['Inserisci il codice inviato al tuo dispositivo', 'Enter the code sent to your device'],
        ['Prima cifra', 'First digit'],
        ['Seconda cifra', 'Second digit'],
        ['Terza cifra', 'Third digit'],
        ['Quarta cifra', 'Fourth digit'],
        ['Quinta cifra', 'Fifth digit'],
        ['Sesta cifra', 'Sixth digit'],
        ['Inizia a pianificare ora', 'Start planning now'],
        ['Descrivi il tuo viaggio ideale e ottieni subito una bozza personalizzata', 'Describe your ideal trip and instantly get a personalized draft'],
        ['Parla naturalmente e descrivi il viaggio che desideri', 'Speak naturally and describe the trip you want'],
        ['Piani su misura basati su preferenze e meteo', 'Tailored plans based on preferences and weather'],
        ['Scopri esperienze autentiche e poco conosciute', 'Discover authentic and lesser-known experiences'],
        ['Visualizza tappe e spostamenti in un colpo d\'occhio', 'View stops and movements at a glance'],
        ['Gestisci preferenze, stile di viaggio e consensi', 'Manage preferences, travel style, and consent'],
        ['Monitora viaggi in corso, in arrivo e da iniziare', 'Track ongoing, upcoming, and planned trips'],
        ['ottobre', 'October'],
        ['novembre', 'November'],
        ['dicembre', 'December'],
        ['Giorno 2', 'Day 2'],
        ['Giorno 1', 'Day 1'],
        ['persone', 'people'],
        ['peole', 'people'],
        ['Prenota', 'Book'],
        ['prenota', 'book'],
        ['Auto categoria C', 'Car category C'],
        ['Confermato', 'Confirmed'],
        ['Alloggio', 'Accommodation'],
        ['alloggio', 'accommodation'],
        ['Esperienza', 'Experience'],
        ['esperienza', 'experience'],
        [' ott ', ' Oct '],
        [' ott•', ' Oct•'],
        [' ott •', ' Oct •'],
        ['modifiche in coda', 'changes queued'],
        ['Cerca destinazioni, attività...', 'Search destinations, activities...'],
        ['Città, persone, date...', 'Cities, people, dates...'],
        ['Cerca conversazioni...', 'Search conversations...'],
        ['Cerca viaggi...', 'Search trips...'],
        ['Weekend Lago Maggiore confermato', 'Lake Maggiore weekend confirmed'],
        ['Nuovi suggerimenti disponibili', 'New suggestions available'],
        ['2 ore fa', '2 hours ago'],
        ['5 ore fa', '5 hours ago'],
        ['3 giorni fa', '3 days ago'],
        ['1 settimana fa', '1 week ago'],
        ['Residenze Reali Piemonte', 'Piedmont Royal Palaces'],
        ['10 giorni nelle Langhe a ottobre...', '10 days in Langhe in October...'],
        ['Weekend tra vigneti e lago a maggio', 'Weekend among vineyards and lake in May'],
        ['Tour culturale tra i palazzi sabaudi', 'Cultural tour through the Savoy palaces'],
        ['Dettagli Viaggio', 'Trip Details'],
        ['Mostra/nascondi dettagli', 'Show/hide details'],
        ['Torino → Alba → Barolo', 'Turin → Alba → Barolo'],
        ['10-20 Ottobre', 'Oct 10-20'],
        ['2 persone', '2 people'],
        ['€1400/persona', '€1400/person'],
        ['10-20 ottobre 2026, 2 persone', 'October 10-20, 2026, 2 people'],
        ['15-17 novembre 2026, 4 persone', 'November 15-17, 2026, 4 people'],
        ['1-8 dicembre, 2 persone', 'December 1-8, 2 people'],
        ['Giorno 1 - 10 ottobre', 'Day 1 - October 10'],
        ['Giorno 2 - 11 ottobre', 'Day 2 - October 11'],
        ['Arrivo ad Alba • 3 attività', 'Arrival in Alba • 3 activities'],
        ['Degustazioni ad Alba • 4 attività', 'Tastings in Alba • 4 activities'],
        ['3 attività', '3 activities'],
        ['4 attività', '4 activities'],
        ['Arrivo a Torino Porta Nuova', 'Arrival at Turin Porta Nuova'],
        ['Treno da Milano • 75 min • €15', 'Train from Milan • 75 min • €15'],
        ['✓ Prenotato', '✓ Booked'],
        ['Caccia al tartufo bianco', 'White truffle hunt'],
        ['Prenota esperienza', 'Book experience'],
        ['Auto noleggio Torino-Milano', 'Car rental Turin-Milan'],
        ['10-20 ott • €380-450 • Auto categoria C', 'Oct 10-20 • €380-450 • Car category C'],
        ['10-15 ott • 5 notti • ✓ Confermato', 'Oct 10-15 • 5 nights • ✓ Confirmed'],
        ['10-13 ott • 3 notti', 'Oct 10-13 • 3 nights'],
        ['13-16 ott • 3 notti', 'Oct 13-16 • 3 nights'],
        ['17-19 ott • 3 notti', 'Oct 17-19 • 3 nights'],
        ['5 notti', '5 nights'],
        ['3 notti', '3 nights'],
        ['3 da fare', '3 to book'],
        ['Itinerario riconosciuto', 'Recognized itinerary'],
        ['Distanza totale', 'Total distance'],
        ['Nuovo viaggio', 'New trip'],
        ['Menu viaggi', 'Trips menu'],
        ['Menu chat', 'Chat menu'],
        ['Mostra mappa', 'Show map'],
        ['Info viaggio', 'Trip info'],
        ['Torna alla home', 'Back to home'],
        ['Allega file', 'Attach file'],
        ['Invia messaggio', 'Send message'],
        ['Messaggio vocale', 'Voice message'],
        ['Scrivi un messaggio o descrivi il tuo viaggio...', 'Write a message or describe your trip...'],
        ['I-Travel può commettere errori. Verifica sempre le informazioni importanti.', 'I-Travel can make mistakes. Always verify important information.'],
        ['Ciao! 👋 Sono I-Travel, il tuo assistente di viaggio personale. Raccontami dove vorresti andare e ti aiuterò a creare l\'itinerario perfetto!', 'Hi! 👋 I am I-Travel, your personal travel assistant. Tell me where you would like to go and I will help you build the perfect itinerary!'],
        ['Vorrei fare 10 giorni nelle Langhe tra Alba e Barolo a ottobre, budget medio', 'I would like to spend 10 days in Langhe between Alba and Barolo in October, medium budget'],
        ['Perfetto! Un viaggio nelle Langhe a ottobre è un\'ottima scelta. 🍂 Ho capito:', 'Perfect! A trip to Langhe in October is an excellent choice. 🍂 Here is what I understood:'],
        ['Perfetto! Un viaggio nelle Langhe a ottobre è un\'ottima scelta. Ho capito:', 'Perfect! A trip to Langhe in October is an excellent choice. Here is what I understood:'],
        ['Perfetto! Un viaggio nelle Langhe a October è un\'ottima scelta. 🍂 Ho capito:', 'Perfect! A trip to Langhe in October is an excellent choice. 🍂 Here is what I understood:'],
        ['Perfetto! Un viaggio nelle Langhe a October è un\'ottima scelta. Ho capito:', 'Perfect! A trip to Langhe in October is an excellent choice. Here is what I understood:'],
        ['Ottimo contesto, grazie! Prima di costruire una bozza precisa, mi confermi che partirete da Milano? E per il lungo in preparazione mezza maratona, quale distanza target vuoi mantenere?', 'Great context, thank you. Before I build a precise draft, can you confirm Milan as your departure point? Also, for your half-marathon preparation, what target distance are you aiming to maintain for your long run?'],
        ['Confermo: partiamo da Milano, Via della Spiga 10. Per il lungo punto a 10 km.', 'Confirmed: we will depart from Milan, Via della Spiga 10. For my long run, I am targeting 10 km.'],
        ['Mi servono ancora alcune informazioni:', 'I still need a few details:'],
        ['Budget preciso: circa 1500€ a persona.', 'Exact budget: around €1500 per person.'],
        ['Saremo in 2, dal 10 al 20 ottobre, budget circa 1500€ a persona', 'We will be 2 people, from October 10 to 20, budget around €1500 per person'],
        ['Saremo in 2, dal 10 al 20 October, budget circa 1500€ a persona', 'We will be 2 people, from October 10 to 20, budget around €1500 per person'],
        ['Saremo in 2 dal 10 al 20 ottobre, budget circa 1500€ a persona', 'We will be 2 people, from October 10 to 20, budget around €1500 per person'],
        ['Saremo in 2 dal 10 al 20 October, budget circa 1500€ a persona', 'We will be 2 people, from October 10 to 20, budget around €1500 per person'],
        ['Eccellente! ✨ Ho tutte le informazioni necessarie. Il tuo viaggio include:', 'Excellent! ✨ I have all the required information. Your trip includes:'],
        ['Perfetto! Sto creando il tuo itinerario personalizzato. Ti mostrerò le migliori opzioni per alloggi, trasporti e attività. 🎉', 'Perfect! I am creating your personalized itinerary. I will show you the best options for accommodation, transportation, and activities. 🎉'],
        ['Destinazioni:', 'Destinations:'],
        ['Durata:', 'Duration:'],
        ['Periodo:', 'Period:'],
        ['Budget:', 'Budget:'],
        ['Alba, Barolo e La Morra', 'Alba, Barolo and La Morra'],
        ['10 giorni', '10 days'],
        ['3 giorni', '3 days'],
        ['4 giorni', '4 days'],
        ['Torino', 'Turin'],
        ['Milano', 'Milan'],
        ['Ottobre', 'October'],
        ['Medio', 'Medium'],
        ['Vuoi che crei una bozza di itinerario?', 'Would you like me to create an itinerary draft?'],
        ['Aggiungi una foto per personalizzare il tuo profilo', 'Add a photo to personalize your profile'],
        ['Raccontaci qualcosa di te e delle tue passioni di viaggio...', 'Tell us something about you and your travel passions...'],
        ['Massimo 140 caratteri', 'Maximum 140 characters'],
        ['Seleziona i tuoi stili preferiti', 'Select your preferred travel styles'],
        ['Budget giornaliero stimato per alloggio, cibo e attività', 'Estimated daily budget for accommodation, food, and activities'],
        ['Trascina per ordinare le tue preferenze', 'Drag to sort your preferences'],
        ['Evita auto nelle grandi città', 'Avoid cars in large cities'],
        ['Privilegia trasporti pubblici e sostenibili', 'Prioritize public and sustainable transport'],
        ['Privacy: Queste preferenze vengono utilizzate per personalizzare i suggerimenti di viaggio. Alcune informazioni potrebbero essere apprese dalle nostre conversazioni per migliorare l\'esperienza.', 'Privacy: These preferences are used to personalize travel suggestions. Some information may be learned from our conversations to improve the experience.'],
        ['Acconsento all\'utilizzo delle mie preferenze per personalizzare i suggerimenti', 'I consent to the use of my preferences to personalize suggestions'],
        ['Preferenze salvate con successo', 'Preferences saved successfully'],
        ['Aiutaci a creare suggerimenti su misura per te', 'Help us create tailored suggestions for you'],
        ['Invia il piano con un canale o condividilo con un amico', 'Send the plan through a channel or share it with a friend'],
        ['Chiudi condivisione', 'Close sharing'],
        ['Condividi link', 'Share link'],
        ['Condividi su Facebook', 'Share on Facebook'],
        ['Condividi su Instagram', 'Share on Instagram'],
        ['Condividi su WhatsApp', 'Share on WhatsApp'],
        ['Amico preferito', 'Favorite friend'],
        ['Link copiato negli appunti', 'Link copied to clipboard'],
        ['Condivisione su Facebook pronta', 'Facebook share is ready'],
        ['Condivisione su Instagram pronta', 'Instagram share is ready'],
        ['Condivisione su WhatsApp pronta', 'WhatsApp share is ready'],
        ['Viaggio condiviso con Théo Lefèvre', 'Trip shared with Théo Lefèvre'],
        ['Tutti i diritti riservati.', 'All rights reserved.']
    ];

    function normalizeLang(value) {
        if (!value) return '';
        const lang = String(value).toLowerCase().trim();
        return SUPPORTED.has(lang) ? lang : '';
    }

    function withWhitespace(original, translatedCore) {
        const m = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
        if (!m) return translatedCore;
        return `${m[1]}${translatedCore}${m[3]}`;
    }

    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function translateCore(itText) {
        if (!itText) return itText;
        if (EXACT_TEXT.has(itText)) return EXACT_TEXT.get(itText);

        let out = itText;
        for (const [it, en] of REPLACEMENTS) {
            out = out.replace(new RegExp(escapeRegExp(it), 'g'), en);
        }
        return out;
    }

    function translateItToEn(text) {
        const original = String(text);
        const core = original.trim();
        if (!core) return original;
        const translated = translateCore(core);
        return withWhitespace(original, translated);
    }

    function captureAndTranslateTextNode(node) {
        if (!textNodeOriginals.has(node)) {
            textNodeOriginals.set(node, node.nodeValue);
        }

        const source = textNodeOriginals.get(node);
        node.nodeValue = currentLang === 'en' ? translateItToEn(source) : source;
    }

    function captureAndTranslateAttributes(el) {
        let originalMap = elementAttrOriginals.get(el);
        if (!originalMap) {
            originalMap = {};
            ATTRS_TO_TRANSLATE.forEach((attr) => {
                if (el.hasAttribute(attr)) {
                    originalMap[attr] = el.getAttribute(attr);
                }
            });

            // meta description
            if (el.tagName === 'META' && el.getAttribute('name') === 'description' && el.hasAttribute('content')) {
                originalMap.content = el.getAttribute('content');
            }

            if (Object.keys(originalMap).length > 0) {
                elementAttrOriginals.set(el, originalMap);
            }
        }

        if (!originalMap) return;

        Object.keys(originalMap).forEach((attr) => {
            const source = originalMap[attr];
            const value = currentLang === 'en' ? translateItToEn(source) : source;
            el.setAttribute(attr, value);
        });
    }

    function translateTree(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                const tag = parent.tagName;
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const textNodes = [];
        let current;
        while ((current = walker.nextNode())) {
            textNodes.push(current);
        }

        textNodes.forEach(captureAndTranslateTextNode);

        const elements = root.querySelectorAll ? root.querySelectorAll('*') : [];
        elements.forEach(captureAndTranslateAttributes);

        const titleEl = document.querySelector('title');
        if (titleEl) {
            if (!textNodeOriginals.has(titleEl.firstChild || titleEl)) {
                if (titleEl.firstChild && titleEl.firstChild.nodeType === Node.TEXT_NODE) {
                    textNodeOriginals.set(titleEl.firstChild, titleEl.textContent);
                }
            }
            if (titleEl.firstChild && titleEl.firstChild.nodeType === Node.TEXT_NODE) {
                const src = textNodeOriginals.get(titleEl.firstChild) || titleEl.textContent;
                titleEl.textContent = currentLang === 'en' ? translateItToEn(src) : src;
            }
        }

        document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'it');
    }

    function updateSwitchUi() {
        const switchBtn = document.getElementById('lang-switch');
        if (!switchBtn) return;

        const label = switchBtn.querySelector('[data-lang-label]');
        if (label) {
            label.textContent = currentLang.toUpperCase();
        }
    }

    function setLanguage(lang) {
        const normalized = normalizeLang(lang);
        if (!normalized) return;

        currentLang = normalized;
        localStorage.setItem(STORAGE_KEY, currentLang);
        translateTree(document.body);
        updateSwitchUi();
    }

    function toggleLanguage() {
        setLanguage(currentLang === 'en' ? 'it' : 'en');
    }

    function injectLanguageSwitch() {
        // Prefer an inline #lang-switch already placed in the page's header
        const existing = document.getElementById('lang-switch');
        if (existing) {
            existing.addEventListener('click', toggleLanguage);
            updateSwitchUi();
            return;
        }

        // Fallback: floating pill for pages that don't have an inline button
        if (document.querySelector('[data-lang-injected]')) return;

        const btn = document.createElement('button');
        btn.id = 'lang-switch';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Toggle language');
        btn.setAttribute('data-lang-injected', '');
        btn.className = 'focus-ring';
        btn.style.position = 'fixed';
        btn.style.top = '14px';
        btn.style.right = '14px';
        btn.style.zIndex = '9999';
        btn.style.display = 'inline-flex';
        btn.style.alignItems = 'center';
        btn.style.gap = '8px';
        btn.style.padding = '8px 12px';
        btn.style.borderRadius = '999px';
        btn.style.background = 'rgba(17, 24, 39, 0.86)';
        btn.style.color = '#fff';
        btn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        btn.style.backdropFilter = 'blur(6px)';
        btn.style.fontSize = '12px';
        btn.style.fontWeight = '700';
        btn.style.lineHeight = '1';
        btn.style.cursor = 'pointer';

        btn.innerHTML = '<i class="fa-solid fa-globe" aria-hidden="true"></i><span data-lang-label>EN</span>';
        btn.addEventListener('click', toggleLanguage);
        document.body.appendChild(btn);

        updateSwitchUi();
    }

    function bindMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            if (currentLang !== 'en') return;

            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        captureAndTranslateTextNode(node);
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        translateTree(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        injectLanguageSwitch();
        translateTree(document.body);
        bindMutationObserver();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.ITravelI18n = {
        getLanguage() {
            return currentLang;
        },
        setLanguage,
        translateText: translateItToEn
    };
})();

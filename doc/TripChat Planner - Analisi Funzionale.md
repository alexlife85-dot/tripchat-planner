# TripChat Planner - Analisi Funzionale (1)

# **TripChat Planner - Analisi Funzionale**

**Tipo di documento:** Analisi Funzionale

**Data di generazione:** 23/11/2025

**Capitoli totali:** 20

## **Indice**

1. [Introduzione e Panoramica](about:blank#capitolo-1-introduzione-e-panoramica)
2. [Attori e Ruoli](about:blank#capitolo-2-attori-e-ruoli)
3. [Processi Business End‑to‑End](about:blank#capitolo-3-processi-business-end%E2%80%91to%E2%80%91end)
4. [Chat conversazionale & NLP](about:blank#capitolo-4-chat-conversazionale-&-nlp)
5. [Motore Itinerario Multi‑tappa](about:blank#capitolo-5-motore-itinerario-multi%E2%80%91tappa)
6. [Mappa Itinerario & Riepilogo compatto](about:blank#Xe96a10b18fc3ac04f6d2f6c9f50aa6740f49629)
7. [Profilo Utente & Preferenze](about:blank#capitolo-7-profilo-utente-&-preferenze)
8. [Suggerimenti AI Personalizzati e Budget](about:blank#X722fde2f620d394418624eb6aaa712074957dbc)
9. [Integrazioni Partner: Booking/Airbnb e Google Maps/Places](about:blank#X687ca12a62ed090b7bb93dd6bea7174b0151007)
10. [Notifiche & Gestione Documenti](about:blank#X882add5eb39d39fec016213c4ae5540275f9cbf)
11. [Condivisione & Collaborazione](about:blank#Xc8ece68372550d3c76bbca9946e9c40b681a672)
12. [Offline & Sincronizzazione](about:blank#capitolo-12-offline-&-sincronizzazione)
13. [Autenticazione, Sicurezza & Privacy](about:blank#X7d9d1077006e3aeb33a2207aa6473989d458eda)
14. [Admin Console, KPI e Moderazione](about:blank#X4f0f98af0399779c4e17410db86e31af855358d)
15. [Performance, SLO e Affidabilità del Servizio](about:blank#Xc6f8551dc3d3866a438b1ec46e74bff04dd1b27)
16. [DevOps, CI/CD e Osservabilità](about:blank#capitolo-16-devops-ci/cd-e-osservabilit%C3%A0)
17. [User Stories, Casi d’Uso e Workflow Operativi](about:blank#Xb8e8514d3d82e3b6432b41d25b88ab3baec8bc0)
18. [Regole di Business e Vincoli Operativi](about:blank#X02619dec209f05309b37bf71a8a9cf6e46ca7f2)
19. [Governance e Responsabilità (RACI)](about:blank#X137139928a0e939a64726a139a358f9d2bd44c2)

## [Mappatura e Copertura Requisiti (Tracciabilità & Gap Analysis)](about:blank#Xf6448e6f69dc2781ba29b81f05d3c8982f427d2)

# **1. Introduzione e Panoramica**

## **1.1. Contesto e scopo**

TripChat Planner nasce per semplificare la pianificazione di viaggi multi tappa, superando la frammentazione tipica di strumenti tradizionali e fogli di calcolo. L’esperienza è centrata su una conversazione naturale: l’utente descrive desideri, vincoli e preferenze e il sistema traduce il dialogo in un itinerario strutturato, aggiornato in tempo reale e sempre coerente. L’obiettivo di questo capitolo è allineare tutti gli stakeholder su visione, perimetro e criteri di successo, fornendo la cornice di riferimento per gli attori, i processi e le scelte funzionali che verranno approfondite nei capitoli successivi.

La soluzione si colloca in un ecosistema digitale che integra servizi esterni per mappe e luoghi, partner di booking e canali di notifica, con requisiti stringenti di performance, accessibilità e protezione dei dati personali. Il documento di analisi funzionale codifica tali aspettative in obiettivi misurabili, principi progettuali e dipendenze, così da garantire una traiettoria di delivery sostenibile, verificabile e orientata al valore. In questo senso, l’introduzione stabilisce il linguaggio comune e i confini condivisi che guideranno il lavoro congiunto di prodotto, design, sviluppo e governance.

## **1.2. Problema e visione della soluzione**

Pianificare un viaggio articolato richiede di incrociare informazioni eterogenee su destinazioni, spostamenti, disponibilità, costi, documenti e preferenze del gruppo, con continui ricalcoli e verifiche. Gli strumenti generici risultano lenti nell’adattarsi alle variazioni, non preservano il contesto e raramente offrono suggerimenti realmente pertinenti. La conseguenza è un’esperienza dispendiosa in tempo e soggetta a errori, specialmente in mobilità, dove la connettività non è sempre garantita e il coordinamento tra persone diventa critico.

La visione di TripChat Planner è un end‑to‑end fluido: dall’idea alla partenza, il viaggiatore interagisce in linguaggio naturale e ottiene un piano vivo, visualizzato su mappa con un riepilogo compatto sempre aggiornato. Il sistema propone tappe e attività in base al profilo, consente di controllare il budget con stime dinamiche, apre i partner di prenotazione in deep link e mantiene l’itinerario disponibile anche offline. La collaborazione è nativa, con condivisione sicura per ruoli e, in evoluzione, modifica simultanea con indicatori di presenza e regole di risoluzione dei conflitti.

## **1.3. Ambito funzionale e confini di perimetro**

L’ambito copre i domini conversazione e comprensione, motore itinerario multi tappa, mappa e riepilogo, profilo e preferenze, suggerimenti e budget, integrazioni con partner esterni, notifiche e gestione documenti, condivisione e collaborazione, offline e sincronizzazione, amministrazione con KPI e moderazione, oltre agli aspetti trasversali di sicurezza, performance e osservabilità. Il perimetro include le funzionalità necessarie a generare valore nel percorso end‑to‑end, con priorità agli scenari ad alto impatto sugli utenti e sui risultati di business.

Sono deliberatamente esclusi dall’ambito iniziale il booking in‑app transazionale, l’emissione di biglietteria, la messaggistica utente‑utente al di fuori dei flussi di collaborazione sull’itinerario e le analisi predittive avanzate non essenziali per l’MVP. Questi elementi potranno essere valutati come evoluzioni, subordinatamente al raggiungimento degli obiettivi di stabilità, qualità e adozione e alla disponibilità di integrazioni affidabili con partner di settore.

| **Inclusioni chiave** | **Esclusioni iniziali** |
| --- | --- |
| **Chat conversazionale e chiarimenti** | Pagamenti e prenotazioni in‑app complete |
| **Itinerario multi tappa con vincoli** | Messaggistica generica non legata all’itinerario |
| **Mappa interattiva e riepilogo** | Funzionalità premium non correlate agli obiettivi MVP |
| **Suggerimenti personalizzati e budget** | Analisi predittive avanzate non necessarie al go‑live |
| **Integrazioni partner via deep link** | Emissione biglietti nativa |
| **Notifiche e gestione documenti** |  |

## **1.4. Valore per gli attori e promesse di valore**

Per i viaggiatori, il valore risiede nella riduzione drastica dello sforzo cognitivo e operativo: il sistema capisce, calcola, propone e ricorda, lasciando all’utente le decisioni e non la gestione meccanica dei dettagli. La pianificazione diventa collaborativa, accessibile e resiliente, grazie a viste chiare, a notifiche puntuali e alla disponibilità offline dei contenuti essenziali. L’esperienza in mobilità è coerente con i comportamenti attesi dalle app moderne, con aggiornamenti reattivi e continuità di servizio.

Per il team di prodotto e per l’organizzazione, la promessa è un ciclo di miglioramento continuo ancorato a KPI trasparenti e a SLO chiari: misurare ciò che conta permette di prioritizzare con rigore, prevenire regressioni e governare la qualità nel tempo. Per i partner esterni, l’integrazione via deep link opportunamente tracciata offre conversioni più qualificate, mentre per amministratori e supporto l’Admin Console abilita moderazione efficace e insight operativi. La combinazione di personalizzazione e controllo crea un circolo virtuoso tra esperienza utente, efficienza e sostenibilità tecnica.

## **1.5. Flusso end‑to‑end di riferimento**

Il flusso di riferimento segue una progressione naturale dall’onboarding all’operatività in viaggio, collegando tra loro domini e processi in modo esplicito. Ogni passaggio espone stati e risultati intermedi, riducendo l’ambiguità e favorendo interventi correttivi rapidi. La rappresentazione sintetica seguente sarà la base per i workflow dettagliati e i casi d’uso narrativi dei capitoli successivi.

![Diagramma Mermaid 1](image1.png)

## **1.6. Obiettivi SMART**

Gli obiettivi sono formulati per essere specifici, misurabili, raggiungibili, rilevanti e temporizzati, così da guidare execution e verifica.

- Latenza di aggiornamento itinerario inferiore a 2 secondi al 95 percentile nelle operazioni chiave entro il rilascio generale.
- Autocomplete dei luoghi entro 150 millisecondi al 95 percentile sugli scenari di pianificazione più comuni entro la prima minor release.
- Tasso di consegna delle notifiche almeno al 95 percento con scheduling per fuso orario attivo per tutte le categorie entro la chiusura del primo trimestre di esercizio.
- Disponibilità percepita senza downtime durante i rilasci, con strategie di deploy controllate e indicatori di stato visibili in app sin dal primo rilascio stabile.
- Tasso di successo delle operazioni offline con sincronizzazione automatica pari ad almeno il 90 percento entro il secondo incremento funzionale.
- Conformità alle linee guida di accessibilità rilevanti per il contesto, con obiettivo di adozione delle più recenti raccomandazioni entro la fase di hardening.
- Tempo medio di rilascio ridotto con pipeline automatizzate e alert su regressioni attivi in produzione entro il primo ciclo completo di release.

## **1.7. Perimetro incluso vs escluso**

L’MVP si concentra sul percorso critico che genera valore immediato: chat, itinerario, mappa, suggerimenti e integrazioni tramite deep link, notifiche e documenti, condivisione e un set minimo di funzionalità offline. L’evoluzione estende la robustezza del modello offline, la collaborazione in tempo reale e la profondità di amministrazione e reportistica. Ogni ampliamento è subordinato a evidenze misurabili di qualità del servizio e adozione, con meccanismi di osservabilità e gate di rilascio ben definiti.

La scelta di rinviare pagamenti in‑app, ticketing e funzionalità avanzate non essenziali tutela il focus, riduce il rischio di dipendenze critiche e permette di consolidare prima l’esperienza core. In parallelo, le integrazioni con partner restano progettate per essere sostituibili e isolabili, così che variazioni di latenza, quote o policy esterne non compromettano l’esperienza principale.

## **1.8. Principi guida e criteri di qualità**

Il primo principio è la centralità dell’utente: il sistema chiede chiarimenti solo quando necessari, spiega le modifiche e mantiene sempre visibili contesto e stato. Il secondo principio è la resilienza percepita: operazioni chiave devono rimanere affidabili anche con rete intermittente, adottando modelli offline first e sincronizzazione posticipata senza perdita di coerenza. Il terzo principio è la misurabilità: obiettivi espliciti, indicatori standardizzati e osservabilità end‑to‑end abilitano decisioni basate su dati e interventi rapidi.

Completano il quadro l’accessibilità come requisito non negoziabile, la sicurezza e la privacy by design, e un’architettura a componenti che favorisce separazione dei domini e cicli di rilascio indipendenti. Ogni scelta progettuale deve riflettersi in criteri di accettazione chiari e testabili, allineando la promessa di valore con la sua realizzazione operativa. Questo approccio riduce il debito tecnico e rende più prevedibile il percorso di crescita del prodotto.

## **1.9. Dipendenze e impatti trasversali**

L’esperienza conversazionale dipende dalla qualità dell’estrazione di entità e dalla prontezza del motore itinerario, che a sua volta si appoggia a servizi di luoghi e direzioni per calcolare tempi e spostamenti. La persistenza del profilo e delle preferenze influenza sia la pertinenza dei suggerimenti sia le impostazioni di budget, mentre le integrazioni con partner impattano la fluidità delle azioni di esplorazione e prenotazione. Le notifiche e la gestione documentale introducono requisiti ulteriori su sicurezza, tracciabilità e protezione dei dati.

A livello di piattaforma, performance e affidabilità richiedono definizioni di SLO chiare e osservabilità coerente su metriche, log e tracing distribuito. Le pipeline di delivery devono supportare rilasci frequenti senza interruzioni percepite, con strategie di deploy e rollback controllate e con health check misurabili. L’adozione di standard aggiornati per accessibilità e protezione dei dati si traduce in scelte concrete di design, sviluppo e processo, con ruoli e responsabilità esplicite in ambito operativo.

## **1.10. Mappa dei capitoli successivi**

I capitoli che seguono trasformano questa panoramica in specifiche operative. Il capitolo sugli attori definisce ruoli e responsabilità; quello sui processi descrive la catena end‑to‑end; i capitoli funzionali affrontano ciascun dominio (chat e NLP, itinerario, mappa, profilo, suggerimenti e budget, integrazioni, notifiche e documenti, condivisione e collaborazione, offline e sincronizzazione). I capitoli trasversali trattano autenticazione, sicurezza e privacy, performance e affidabilità, DevOps e osservabilità, e la console amministrativa con KPI e moderazione. La chiusura è affidata ai workflow narrativi e alla mappatura di tracciabilità che collegano requisiti, casi d’uso e criteri di test.

Questa mappa consente di navigare il documento con consapevolezza: ogni capitolo specifica deliverable, informazioni da estrarre e collegamenti con gli altri, così da comporre un quadro coerente e verificabile. Il percorso è pensato per essere incrementale: dai fondamenti dell’esperienza core alle capacità avanzate, con controlli oggettivi a ogni passaggio.

## **Riferimenti**

[1] Google SRE Book – Service Level Objectives – https://sre.google/sre-book/service-level-objectives/

[2] W3C – Web Content Accessibility Guidelines (WCAG) 2.2 – https://www.w3.org/TR/WCAG22/

[3] MDN – PWA Offline and Background Operation – https://developer.mozilla.org/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation

[4] GDPR – Articolo 12, termini per la risposta alle richieste degli interessati – https://gdpr-info.eu/art-12-gdpr/

[5] MDN – PWA Caching – https://developer.mozilla.org/docs/Web/Progressive_web_apps/Guides/Caching

# **2. Attori e Ruoli**

## **2.1. Obiettivo del capitolo e principi di modellazione dei ruoli**

Questo capitolo identifica e caratterizza gli attori che interagiscono con il sistema, definendone responsabilità, autorizzazioni, bisogni informativi e interazioni principali. L’intento è fornire una visione coesa che alimenti la progettazione dei processi operativi, la definizione dei casi d’uso e la costruzione della matrice RACI, stabilendo con chiarezza chi fa cosa, quando e con quali vincoli. La modellazione si orienta alla semplicità comprensibile, evitando ruoli sovrapposti e privilegi eccessivi, così da ridurre ambiguità e rischi.

La definizione dei ruoli è guidata da tre principi: separazione dei compiti lungo i flussi critici, privilegio minimo come criterio di assegnazione delle autorizzazioni, e responsabilizzazione esplicita rispetto a sicurezza, privacy e qualità del dato. A tali principi si affianca la necessità di una governance della collaborazione: ciò che più utenti possono fare in parallelo va limitato da regole di consistenza e da una telemetria leggibile che consenta di ricostruire le azioni. Questi elementi convergono in una mappa dei permessi di massima e in un diagramma attori‑funzionalità, che costituiscono i deliverable principali del capitolo.

Infine, la modellazione dei ruoli viene allineata con lo scenario tecnologico previsto. L’autenticazione moderna si basa su un livello di identità standard e sull’uso di token di accesso con ambiti espressivi, mentre l’autorizzazione combina ruoli applicativi e attributi contestuali per esprimere permessi granulari. In parallelo, la collaborazione con partner esterni è inquadrata da accordi e consensi che regolano la condivisione dei dati e la responsabilità del trattamento.

## **2.2. Visitatore**

Il visitatore è la porta d’ingresso al prodotto. Esplora le funzionalità senza autenticazione, prova una conversazione in modalità limitata e consulta contenuti pubblici, come esempi di itinerario o suggerimenti generici. Il suo bisogno informativo è di scoperta: deve capire rapidamente il valore della soluzione, i benefici della personalizzazione e i requisiti minimi per ottenere un itinerario coerente.

Le autorizzazioni del visitatore sono volutamente ristrette. Può inviare pochi messaggi in chat dimostrativa, visualizzare un itinerario di esempio e attivare l’onboarding; non può salvare dati, condividere contenuti o accedere a preferenze. Questo ruolo rappresenta la frontiera tra marketing ed esperienza d’uso e, proprio per questo, richiede performance reattive e messaggi chiari, così da massimizzare la conversione verso l’uso autenticato.

Rischi e vincoli sono legati al consumo improprio delle risorse di prova e all’eventuale generazione di contenuti non appropriati. Il sistema applica limiti di frequenza, filtri di sicurezza per i prompt e reset periodici della sessione, rendendo la modalità visita sostenibile e sicura. L’obiettivo è facilitare la curiosità del visitatore senza compromettere stabilità o reputazione del servizio.

## **2.3. Utente autenticato**

L’utente autenticato è il protagonista della pianificazione: crea e salva viaggi, aggiorna l’itinerario in più sessioni, imposta preferenze e riceve promemoria. I suoi bisogni informativi includono stato del viaggio, contesto su mappa, riepilogo compatto e suggerimenti coerenti con profilo e vincoli. Questo ruolo deve poter riprendere il lavoro da dove lo aveva lasciato, con una continuità visibile tra dispositivi e modalità online‑offline.

Sul piano autorizzativo, l’utente autenticato ha accesso completo ai propri itinerari e ai relativi documenti, può generare link di condivisione secondo politiche predefinite e gestire i consensi per l’uso dei dati a fini di personalizzazione. Non ha privilegi amministrativi e non può accedere a dati di altri utenti al di fuori di condivisioni esplicite. L’adozione di ambiti di accesso specifici per funzioni sensibili (esportazione dati, eliminazione definitiva, gestione consensi) riduce la superficie di rischio.

I rischi principali riguardano perdita di contesto, errori di sincronizzazione tra dispositivi e modifiche accidentali. Per mitigare, il sistema fornisce conferme prima delle azioni distruttive, versioning con annulla e ripristina e indicatori di stato chiari, specialmente durante la sincronizzazione. L’esperienza rimane così affidabile anche in condizioni di rete intermittente.

## **2.4. Organizzatore**

L’organizzatore è un utente autenticato che assume la responsabilità del viaggio. Crea l’itinerario, definisce obiettivi, budget e priorità, e soprattutto governa la collaborazione: invita partecipanti, assegna permessi, revoca accessi e imposta regole di modifica. Il suo bisogno informativo si concentra sul controllo: vuole sapere chi ha accesso, quali modifiche sono avvenute e se il piano rimane coerente con vincoli e preferenze.

Le autorizzazioni dell’organizzatore includono tutto ciò che serve per esercitare un controllo granulare: condivisione in sola lettura o lettura‑scrittura, scadenza dei link, registro accessi e, laddove abilitato, risoluzione dei conflitti in caso di modifiche concorrenti. Può promuovere un partecipante a co‑organizzatore, trasferire la proprietà del viaggio o, in casi particolari, congelare temporaneamente l’editing.

I principali rischi sono l’eccessiva permissività (link diffusi oltre il gruppo) e le modifiche simultanee non coordinate. Il sistema mitiga con link firmati, revoca immediata, throttling degli accessi anonimi, indicatori di presenza e regole di merge conservative. La trasparenza delle attività rende l’organizzatore responsabile ma non solo: gli offre strumenti per prevenire confusione e regressioni.

## **2.5. Partecipante invitato**

Il partecipante invitato riceve accesso a un viaggio per consultarlo e, se autorizzato, modificarlo. I suoi bisogni informativi sono locali e contestuali: comprendere rapidamente la struttura dell’itinerario, le attività che lo riguardano e le implicazioni di eventuali modifiche su tempi, costi e dipendenze. Il sistema deve favorire micro‑decisioni sicure, con anteprime delle conseguenze e proposte guidate.

Sul piano dei permessi, il partecipante si muove entro i limiti assegnati dall’organizzatore: dalla sola lettura fino alla modifica di specifiche sezioni (ad esempio attività del proprio giorno). Non può condividere ulteriormente il viaggio salvo esplicita delega, non può cambiare impostazioni globali e non ha accesso a viste amministrative. Ogni azione è tracciata con autore e timestamp, così da mantenere accountability.

I rischi riguardano collisioni di modifica, fraintendimenti e azioni non intenzionali. Il sistema riduce l’attrito con conferme, suggerimenti intelligenti e indicatori di presenza, e preserva la coerenza con regole di merge che privilegiano i cambiamenti più locali, lasciando all’organizzatore la risoluzione degli edge case. In questo modo la collaborazione resta produttiva senza sacrificare stabilità.

## **2.6. Amministratore**

L’amministratore presidia l’ecosistema, assicurando qualità, sicurezza e conformità. I suoi bisogni informativi spaziano dai KPI di utilizzo alla salute dei flussi critici, fino a segnalazioni e audit trail. Necessita di una console con viste aggregate e drill‑down, in grado di collegare eventi anomali a cause probabili e, quando necessario, a contenuti o utenti specifici.

Le autorizzazioni dell’amministratore sono estese ma rigorosamente separate da quelle utente. Può moderare contenuti, intervenire su account in caso di abusi, gestire cataloghi di suggerimenti e parametri di qualità, oltre a consultare telemetria e log. Non accede tuttavia al contenuto privato degli utenti se non in presenza di motivazioni legittime e con garanzie di minimizzazione e tracciabilità. Operazioni invasive, come l’assunzione dell’identità a fini di supporto, sono eccezionali e sempre auditabili.

I rischi principali riguardano l’abuso di potere e la compromissione di dati sensibili. Si applicano quindi controlli di doppia autorizzazione per azioni critiche, separazione tra ambienti, rotazione delle credenziali e monitoraggio continuo. L’amministratore agisce come garante della piattaforma, non come utente privilegiato senza vincoli.

## **2.7. Partner esterni**

I partner esterni forniscono funzionalità complementari, come ricerche e prenotazioni, luoghi e mappe o servizi di pagamento. Il loro bisogno informativo consiste nel contesto strettamente necessario a soddisfare la richiesta dell’utente, in un flusso che resta controllato dall’applicazione. Le integrazioni privilegiano deep link parametrizzati, così da ridurre il perimetro di dati condivisi e preservare l’esperienza.

Le autorizzazioni dei partner sono per loro natura circoscritte e contrattualizzate. Quando ricevono parametri per attivare una ricerca, non devono poter risalire a informazioni eccedenti lo scopo; quando una prenotazione è completata, gli esiti ritornano come segnali minimi utili a mantenere coerenza e tracciabilità. La classificazione del partner come soggetto che opera in autonomia o per conto dell’organizzazione dipende dalla natura dell’integrazione e orienta gli accordi, i consensi e le informative.

I rischi comprendono latenza, indisponibilità, variazioni unilaterali di policy e richieste eccedenti il necessario. Per mitigare, il sistema adotta timeouts e fallback, limiti sulle quote, validazione rigorosa degli input e un livello di astrazione che consente la sostituzione del provider senza impatti sull’esperienza core. La tracciabilità a fini di affiliazione resta separata dall’identità dell’utente, evitando legami non necessari.

## **2.8. Servizi AI e NLP**

I servizi di intelligenza artificiale e comprensione del linguaggio alimentano estrazione di entità, generazione di suggerimenti e spiegazioni. I loro bisogni informativi sono minimizzati e specifici: input strutturati, contesto ridotto allo stretto necessario, preferenze con consenso e, quando possibile, dati pseudonimizzati. Il sistema privilegia output verificabili e verosimili, con messaggi chiari in caso di incertezza o assenza di conoscenza.

Le autorizzazioni dei servizi AI sono limitate a operazioni tecnico‑funzionali e non includono accessi diretti a dati persistenti dell’utente. L’orchestrazione impone confini netti per separare pre‑ e post‑processing, applicare filtri di sicurezza e mascheramento, e garantire che i risultati vengano accettati nel sistema solo se soddisfano criteri di validazione. Gli errori o i bias vengono gestiti con policy di fallback e con un ciclo di miglioramento continuo basato su feedback e telemetria.

I rischi principali sono allucinazioni, eccessiva dipendenza da modelli terzi e fuga di dati. Il design mitiga con prompt controllati, regole di contenimento, cache semantiche per richieste ripetitive e logging selettivo, oltre a revisioni periodiche delle policy. In questo modo, i servizi AI restano al servizio dell’esperienza senza dominarla.

## **2.9. Catalogo attori‑responsabilità, mappa permessi e interazioni**

### **2.9.1. Catalogo attori‑responsabilità**

La tabella seguente sintetizza responsabilità operative, azioni tipiche e rischi prevalenti. Serve come indice di navigazione verso i processi del capitolo successivo e come base per la RACI.

| **Attore** | **Responsabilità primaria** | **Azioni tipiche** | **Rischi e vincoli prevalenti** |
| --- | --- | --- | --- |
| **Visitatore** | Esplorazione e prova limitata | Avvia chat demo, consulta itinerari di esempio, avvia onboarding | Abuso delle risorse di prova, contenuti inappropriati, confusione su limiti |
| **Utente autenticato** | Pianificazione personale | Crea e salva viaggi, modifica tappe, gestisce documenti, configura consensi | Modifiche accidentali, perdita di contesto, sincronizzazione incompleta |
| **Organizzatore** | Governo della collaborazione | Condivide, assegna permessi, revoca accessi, risolve conflitti | Permessi eccessivi, fuga link, collisioni di modifica |
| **Partecipante invitato** | Contributo mirato | Consulta itinerario, propone o modifica attività nei limiti assegnati | Fraintendimenti, modifiche non intenzionali, conflitti locali |
| **Amministratore** | Qualità, sicurezza e conformità | Modera, gestisce KPI, esegue audit, presidia cataloghi e policy | Abuso di privilegi, esposizione dati, errori operativi |
| **Partner esterni** | Erogazione servizi complementari | Riceve deep link, restituisce esiti, aggiorna disponibilità | Latenza, indisponibilità, richieste dati eccedenti |
| **Servizi AI e NLP** | Comprensione e suggerimenti | Estrae entità, genera proposte, produce spiegazioni | Allucinazioni, fuga di dati, bias e incoerenze |

### **2.9.2. Mappa permessi di massima**

La mappa dei permessi costituisce un quadro di riferimento per i casi d’uso e per la progettazione degli scope applicativi. Esprime ciò che ciascun attore può fare sulle principali risorse, mantenendo il principio di privilegio minimo e la separazione dei compiti.

| **Risorsa** | **Visitatore** | **Utente autenticato** | **Organizzatore** | **Partecipante invitato** | **Amministratore** | **Servizi AI e NLP** | **Partner esterni** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Account e profilo** | — | Leggi, Modifica, Elimina | Leggi, Modifica | — | Modera su richiesta e con audit | — | — |
| **Itinerario** | — | Crea, Leggi, Modifica, Elimina | Crea, Leggi, Modifica, Elimina | Leggi; Modifica se autorizzato | Modera per segnalazioni | Leggi minimo per elabo. | Leggi minimo per contesto |
| **Tappa e attività** | — | Crea, Leggi, Modifica, Elimina | Crea, Leggi, Modifica, Elimina | Leggi; Modifica se assegnato | Modera per abusi | Leggi minimo per elabo. | — |
| **Condivisione e permessi** | — | Condividi su viaggi propri | Condividi, Revoca, Deleghe | — | Audit e intervento eccezionale | — | — |
| **Notifiche e documenti** | — | Crea, Leggi, Modifica, Elimina | Crea, Leggi, Modifica, Elimina | Leggi; Modifica se assegnato | Modera e policy | — | — |
| **Suggerimenti e modelli** | — | Leggi, Feedback | Leggi, Feedback | Leggi, Feedback | Parametri e cataloghi | Elabora su input minimizzato | — |
| **Telemetria e KPI** | — | — | — | — | Leggi, Modera | — | — |

Legenda: — = nessun accesso; Leggi = lettura; Crea/Modifica/Elimina = operazioni sul contenuto; Condividi/Revoca/Deleghe = gestione permessi; Modera = azioni amministrative; Elabora su input minimizzato = uso strettamente necessario di dati per finalità di elaborazione.

### **2.9.3. Diagramma attori‑funzionalità**

Il diagramma mostra l’orientamento delle interazioni principali tra attori e domini funzionali. Serve come mappa di navigazione per i casi d’uso e come guida per l’allocazione delle responsabilità.

![Diagramma Mermaid 2](image2.png)

### **2.9.4. Interazioni chiave e bisogni informativi**

Le interazioni si organizzano attorno a pochi snodi: il dialogo che alimenta l’itinerario, la rappresentazione su mappa e riepilogo, la collaborazione governata dall’organizzatore e la consegna proattiva di valore tramite notifiche e documenti. Ogni attore richiede viste e controlli diversi: il partecipante ha bisogno di contesto locale e guidance, l’organizzatore di controllo e visibilità, l’amministratore di insight e azioni di moderazione con audit dettagliato. I servizi AI e i partner esterni operano su sottinsiemi di dati minimi e contestuali, mantenendo confini netti.

La progettazione delle interazioni privilegia chiarezza e coerenza. Nei flussi multi‑attore, il sistema anticipa le conseguenze delle azioni prima dell’applicazione, espone lo stato in modo stabile e offre percorsi di recupero per errori o conflitti. Questo approccio riduce i costi di coordinamento e aumenta la fiducia degli utenti, specialmente quando i ruoli si sovrappongono nel tempo (ad esempio un partecipante che diventa co‑organizzatore).

## **2.10. Collegamenti con Processi, Casi d’Uso e RACI**

La definizione degli attori alimenta direttamente i processi descritti nel capitolo successivo: ogni fase del flusso end‑to‑end indica quali ruoli sono coinvolti, con quali permessi e su quali risorse. La stessa mappa orienta la scrittura dei casi d’uso narrativi, che raccontano come gli utenti realizzano i propri obiettivi lungo percorsi realistici e varianti di errore o eccezione. L’aderenza al principio del privilegio minimo offre inoltre una guida pratica nella definizione delle precondizioni e degli esiti per ciascun scenario.

Questa base consente di costruire una RACI coerente e verificabile: per ogni attività critica si identifica chi è responsabile dell’esecuzione, chi è il referente finale, chi va consultato e chi semplicemente informato. La presenza della console amministrativa e della telemetria aiuta a rendere tracciabili le azioni dei ruoli più potenti, tutelando gli utenti e semplificando il supporto. L’allineamento tra ruoli, processi e casi d’uso riduce infine il rischio di goal mismatch e garantisce una traiettoria di delivery sostenibile.

La manutenzione nel tempo di questa sezione è parte integrante della governance del prodotto: quando nuovi partner, modelli o capacità entrano in gioco, i ruoli e i relativi permessi devono essere rivisti alla luce dei principi guida. In questo modo il sistema rimane coerente, sicuro e comprensibile anche in presenza di evoluzioni significative dell’esperienza o dell’architettura.

## **Riferimenti**

[1] The OAuth 2.1 Authorization Framework (Internet‑Draft, October 20, 2025) - https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/

[2] OpenID Connect Core 1.0 - https://openid.net/specs/openid-connect-core-1_0.html

[3] NIST SP 800‑162, Guide to Attribute Based Access Control - https://www.nist.gov/privacy-framework/nist-sp-800-162

[4] NIST SP 800‑207, Zero Trust Architecture - https://csrc.nist.gov/pubs/sp/800/207/final

[5] NIST Glossary, Least Privilege - https://csrc.nist.gov/glossary/term/least_privilege

[6] European Commission, What is a data controller or a data processor? - https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/controllerprocessor/what-data-controller-or-data-processor_en

# **3. Processi Business End‑to‑End**

## **3.1. Scopo, principi e vista di insieme**

Questo capitolo descrive i processi chiave che portano l’utente dall’idea di un viaggio alla gestione post‑viaggio, mettendo in relazione in modo coerente trigger, ingressi, uscite, KPI e punti di controllo. L’obiettivo è disporre di un blueprint di processo tracciabile, capace di guidare sia la progettazione dei workflow applicativi sia la definizione di responsabilità operative e controlli di qualità. La narrazione si concentra sui passaggi critici e sulle interazioni tra i domini applicativi, evitando ripetizioni dei contenuti introdotti nella panoramica e nella definizione di attori e ruoli. Dove necessario, si rimanda esplicitamente alle sezioni successive dedicate ai workflow dettagliati e alla RACI.

Il modello si fonda su quattro principi: centralità della conversazione come interfaccia, coerenza dell’itinerario come “fonte di verità” per mappa e riepilogo, suggerimenti pertinenti e spiegabili che rispettano preferenze e vincoli, e continuità d’uso anche in presenza di rete instabile grazie a funzionalità offline e sincronizzazione robusta. Lungo l’intero flusso, la sicurezza dei dati e il rispetto dei consensi sono presupposti non negoziabili e guidano le scelte di autorizzazione e condivisione.

La figura seguente offre una vista end‑to‑end sintetica. I dettagli di ogni processo sono sviluppati nelle sezioni successive, con l’indicazione dei principali KPI operativi e dei punti di controllo. Come già discusso nel Capitolo 1 e nel Capitolo 2, i ruoli coinvolti variano per fase, ma la responsabilità primaria resta sempre chiara e coerente con il principio del privilegio minimo.

![Diagramma Mermaid 3](image3.png)

## **3.2. Onboarding e Autenticazione**

Il processo si attiva quando l’utente apre l’app per la prima volta o accede tramite invito a un itinerario condiviso. Gli ingressi tipici includono l’account scelto (social o email), eventuali fattori aggiuntivi per aumentare il livello di garanzia, le preferenze iniziali e i consensi alla personalizzazione. In uscita, il sistema produce una sessione attiva, un profilo inizializzato e una registrazione dei consensi che governerà l’uso dei dati nelle fasi successive.

I punti di controllo presidiano integrità e sicurezza: protezione dagli abusi in fase di login, gestione dei token con durata adeguata e revoca centralizzata, registrazione dei consensi e, quando necessario, richiesta di conferme esplicite per trattamenti che producono effetti rilevanti sull’esperienza. Il processo deve essere rapido e chiaro: un onboarding fluido riduce l’abbandono iniziale e crea fiducia, facilitando la transizione verso la pianificazione.

KPI di processo includono tasso di completamento dell’onboarding, tempo medio di login, adozione volontaria del secondo fattore e incidenza degli errori. Tali indicatori guidano micro‑ottimizzazioni dell’interfaccia e soglie operative per i controlli di sicurezza, senza introdurre frizioni non necessarie.

## **3.3. Pianificazione conversazionale**

La pianificazione conversazionale inizia con il primo messaggio significativo dell’utente e prosegue con turni di chiarimento guidati. Gli ingressi sono il testo in linguaggio naturale e il contesto di profilo; le uscite sono un set di entità strutturate (date, luoghi, persone, budget, preferenze) e le prime bozze coerenti dell’itinerario. Il sistema mantiene un registro delle decisioni e chiede conferme prima di modifiche potenzialmente distruttive.

I punti di controllo riguardano l’ambiguità e l’incertezza: quando il riconoscimento non è univoco, l’assistente propone scelte a bottoni o chiede ulteriori dettagli, mantenendo trasparente la logica che porta a ogni aggiornamento del piano. La resilienza si verifica con messaggi di errore chiari e possibilità di ripetere la richiesta senza perdere contesto.

I KPI si concentrano su qualità e velocità: accuratezza dell’estrazione, tempo di risposta per turno conversazionale, percentuale di richieste risolte senza interventi di chiarimento, tasso di accettazione delle proposte. Tali metriche si collegano ai controlli prestazionali e di affidabilità che sostengono l’esperienza complessiva.

## **3.4. Generazione e aggiornamento dell’itinerario**

Questo processo traduce le decisioni emerse in chat in tappe, spostamenti e attività coerenti. Gli ingressi comprendono le entità estratte, i vincoli di apertura e permanenza e le preferenze; le uscite sono un itinerario aggiornato con versioning, coerente con mappa e riepilogo. Le azioni tipiche includono creazione, riordino e cancellazione di elementi, con supporto ad annulla e ripristina.

I punti di controllo assicurano consistenza e affidabilità: vincoli temporali verificati, ricalcolo dei tempi di percorrenza e gestione delle dipendenze tra attività. In presenza di cambi di mezzo o orari, il sistema rielabora rapidamente l’intero piano, esplicitando l’impatto sul riepilogo e sui costi stimati. La tracciabilità delle modifiche mantiene chiara la responsabilità degli aggiornamenti.

I KPI includono tempo di aggiornamento del riepilogo, tempo di ricalcolo per tratte e mezzi, frequenza di operazioni di annulla e casi di vincoli non soddisfatti. Tali misure sostengono obiettivi stringenti di reattività, indispensabili per mantenere la sensazione di controllo senza sforzo.

## **3.5. Visualizzazione su mappa e riepilogo**

La mappa e il riepilogo sono la rappresentazione immediata dell’itinerario. Gli ingressi sono lo stato corrente del piano e i metadati delle tappe, mentre le uscite sono una vista cartografica fluida con marker e tratte e un riepilogo compatto sempre visibile. L’interazione resta bidirezionale: toccare un marker apre i dettagli, e modificare il piano aggiorna in tempo reale la vista.

I punti di controllo puntano a fluidità e accessibilità: frame rate stabili, tempi di apertura delle schede, contrasti e annunci per tecnologie assistive. La coerenza tra mappa e riepilogo è essenziale: eventuali disallineamenti sono intercettati da controlli di integrità e, in caso di rete assente, si passa a uno stile cartografico semplificato.

I KPI privilegiano esperienza e robustezza: latenza di rendering, aggiornamento del riepilogo, errori di caricamento e completezza dei dettagli mostrati. Questi obiettivi orientano scelte tecniche come caching, clustering dei marker e aggiornamenti incrementali.

## **3.6. Suggerimenti e budget**

Il processo di suggerimento propone tappe, alloggi, attività e ristoranti coerenti con profilo, contesto e vincoli. Gli ingressi includono l’itinerario corrente, le preferenze e il budget; le uscite sono una lista ordinata con spiegazioni sintetiche e azioni per applicare o scartare ciascun suggerimento. Filtri e soglie di spesa consentono all’utente di controllare la direzione del piano.

I punti di controllo gestiscono pertinenza e trasparenza: perché una proposta è adatta ora, con quali trade‑off e quale impatto su tempi e costi. Il feedback esplicito dell’utente viene registrato e influenza progressivamente le scelte future, mantenendo l’apprendimento sotto controllo dell’utente.

I KPI si concentrano su rilevanza ed efficacia: tasso di click sui suggerimenti, tasso di accettazione, tempo di risposta e scostamento dal budget impostato. Questi indicatori si collegano alla qualità percepita e anticipano la probabilità di conversione nelle fasi di prenotazione.

## **3.7. Prenotazioni con partner**

La prenotazione si attiva quando l’utente seleziona una proposta. Gli ingressi sono i parametri contestuali necessari a pre‑compilare la ricerca presso il partner; l’uscita è l’avvio della sessione di acquisto sul canale del partner e, a valle, il segnale di esito per aggiornare il piano e i promemoria. Il flusso deve preservare il controllo dell’esperienza e la minimizzazione dei dati condivisi.

I punti di controllo riguardano latenza, disponibilità e correttezza dei parametri di affiliazione. Sono previsti timeout e fallback, con messaggi chiari in caso di indisponibilità, e la tracciabilità è mantenuta con segnali essenziali di ritorno, sufficienti a sincronizzare l’itinerario e i promemoria senza esporre informazioni non necessarie.

I KPI includono tasso di click‑through, conversioni attribuibili, latenza del passaggio e tasso di errori restituiti dal partner. Questi indicatori alimentano ottimizzazioni lato integrazione e guidano la gestione delle dipendenze esterne.

## **3.8. Notifiche e documenti**

Questo processo consegna promemoria contestuali su scadenze, check‑in e attività imminenti e consente all’utente di registrare documenti e scadenze rilevanti. Gli ingressi includono il calendario del viaggio e i dati documentali, mentre le uscite sono notifiche nelle finestre temporali più adatte e viste aggiornate dei documenti.

I punti di controllo presidiano la rilevanza e il rispetto delle quiet hours. La pianificazione delle notifiche tiene conto del fuso orario, della modalità di non‑disturbo del dispositivo e delle preferenze granulari, con storico consultabile e opt‑out puntuale. Per i documenti, l’accesso è protetto e tracciato, e i promemoria vengono calcolati in base alle scadenze registrate.

I KPI misurano tasso di consegna, puntualità, interazioni con la notifica (aperture e azioni), tasso di opt‑out e accuratezza dei promemoria. Il controllo di qualità include test periodici su diversi fusi orari e profili di silenziamento per garantire affidabilità in condizioni reali.

## **3.9. Condivisione e collaborazione**

La condivisione abilita il lavoro di gruppo sullo stesso viaggio. Gli ingressi sono le regole di permesso definite dal proprietario e gli indirizzi dei destinatari; le uscite sono link sicuri e inviti che portano i partecipanti all’itinerario. In evoluzione, la collaborazione real‑time consente modifiche simultanee con indicatori di presenza e regole di risoluzione dei conflitti.

I punti di controllo bilanciano apertura e sicurezza: permessi granulari in lettura o scrittura, scadenza e revoca dei link, registro degli accessi e delle modifiche. In caso di editing concorrente, il sistema applica meccanismi di convergenza e, se necessario, chiede intervento del proprietario per decisioni risolutive.

I KPI includono tasso di condivisione, tempo medio di invito accettato, frequenza e durata delle sessioni collaborative, latenza degli aggiornamenti e numero di conflitti per mille modifiche. Queste misure guidano le ottimizzazioni del canale real‑time e delle policy di merge.

![Diagramma Mermaid 4](image4.png)

## **3.10. Offline e sincronizzazione**

Il processo assicura continuità quando la connettività è assente o intermittente. Gli ingressi sono lo stato consistente più recente e gli aggiornamenti locali; le uscite sono la disponibilità offline dell’itinerario e la riconciliazione automatica al ripristino della rete. Il sistema evidenzia lo stato di sincronizzazione e segnala eventuali dati non aggiornati.

I punti di controllo garantiscono convergenza e minimizzazione dei conflitti. Le modifiche locali vengono registrate e applicate con regole che favoriscono l’assenza di perdita di dati: in molti casi è possibile un merge automatico, in altri si richiede intervento esplicito. La progettazione privilegia tipi di aggiornamento che si combinano in modo sicuro e prevedibile.

I KPI misurano tempo di sincronizzazione al ripristino, percentuale di merge automatici, tasso di conflitti e numero di interventi manuali. Tali indicatori guidano l’evoluzione delle strutture dati e dei protocolli di scambio, oltre alla telemetria necessaria per diagnosticare casi limite.

## **3.11. Post‑viaggio e insight**

La fase post‑viaggio raccoglie feedback, aggiorna preferenze e genera insight utili a migliorare suggerimenti e percorsi futuri. Gli ingressi sono le interazioni dell’utente e i segnali di utilizzo; le uscite includono aggiornamenti di profilo, affinamento dei modelli e indicatori di qualità a supporto del product management.

I punti di controllo riguardano consenso, trasparenza e reversibilità: ogni apprendimento che impatta la personalizzazione deve essere esplicito e revocabile. La qualità degli insight è validata con metriche che correlano miglioramenti nella pertinenza dei suggerimenti con la soddisfazione dell’utente e la conversione.

I KPI includono tasso di feedback raccolto, variazioni misurate in pertinenza dei suggerimenti, impatto su retention e conversione e tempo di ciclo tra raccolta del segnale e miglioramento percepito. Queste misure connettono direttamente la fase post‑viaggio alla roadmap evolutiva del prodotto.

## **3.12. Interazioni tra domini applicativi e dipendenze**

L’esperienza end‑to‑end dipende da un’integrazione stretta tra i domini principali: chat e NLP alimentano il motore di itinerario, che a sua volta guida mappa e riepilogo; il motore di suggerimenti utilizza profilo e contesto per offrire proposte con impatto misurabile su budget e prenotazioni; condivisione e collaborazione si appoggiano a meccanismi real‑time coerenti con le regole di sincronizzazione offline; notifiche e documenti si alimentano dallo stato dell’itinerario e dagli esiti delle prenotazioni.

Le dipendenze influenzano la sequenza di rilascio: la robustezza di chat ed estrazione è prerequisito per itinerario e mappa; le integrazioni con partner richiedono prima una base affidabile di contesto e prestazioni; la collaborazione real‑time si appoggia a un motore di sincronizzazione che garantisce convergenza; notifiche e documenti beneficiano di un profilo utente stabile e di regole chiare sui consensi. Questa visione guida i piani incrementali e riduce il rischio di regressioni.

Per mitigare l’impatto di dipendenze esterne, il sistema applica caching, fallback e timeouts, separa i confini di responsabilità con interfacce chiare e utilizza telemetria per osservare i colli di bottiglia. I confini tra domini sono progettati per minimizzare l’accoppiamento e permettere sostituzioni evolutive senza impatti sull’esperienza core.

## **3.13. KPI di processo e punti di controllo**

Questa sezione consolida gli indicatori chiave e i controlli applicabili trasversalmente. L’intento è fornire obiettivi misurabili e punti di verifica ripetibili che rendono i processi governabili nel tempo.

| **Processo** | **Trigger** | **Ingressi** | **Uscite** | **KPI di processo** | **Punti di controllo** |
| --- | --- | --- | --- | --- | --- |
| **Onboarding e Autenticazione** | Apertura app o invito | Account, consensi, preferenze base | Sessione attiva, profilo, registro consensi | Tasso completamento onboarding, tempo login, adozione MFA, errori login | Rate limit e protezione bot, revoca sessioni, conferme consensi |
| **Pianificazione conversazionale** | Primo messaggio utile | Testo chat, profilo | Entità strutturate, bozze itinerario | Precisione estrazione, tempo risposta, richieste chiarimento, tasso accettazione | Chiarimenti e conferme, messaggi di errore chiari |
| **Itinerario** | Richiesta modifica | Entità, vincoli | Piano coerente con versioning | Aggiornamento riepilogo, ricalcolo tratte, vincoli rispettati | Validazione vincoli, annulla e ripristina |
| **Mappa e Riepilogo** | Apertura vista | Itinerario e metadati | Mappa fluida, riepilogo aggiornato | Latenza rendering, apertura schede, aggiornamento riepilogo | Accessibilità, integrità dati, stile semplificato offline |
| **Suggerimenti e Budget** | Richiesta proposta | Itinerario, profilo, budget | Proposte ordinate con spiegazioni | CTR suggerimenti, tasso accettazione, latenza proposta, scostamento budget | Spiegabilità, filtri e soglie, feedback esplicito |
| **Prenotazioni con Partner** | Selezione proposta | Parametri ricerca | Sessione partner, esito | CTR deep link, conversioni, latenza passaggio, errori partner | Timeout e fallback, minimizzazione dati, tracciabilità esiti |
| **Notifiche e Documenti** | Evento imminente o scadenza | Calendario viaggio, documenti | Promemoria puntuali, viste aggiornate | Tasso consegna, puntualità, opt‑out, accuratezza | Quiet hours e preferenze, sicurezza e audit documenti |
| **Condivisione e Collaborazione** | Scelta di condividere | Permessi e destinatari | Link sicuri, inviti | Tasso condivisione, latenza real‑time, conflitti per mille modifiche | Scadenza e revoca link, registro accessi, regole di merge |
| **Offline e Sync** | Connessione assente o ripristino | Stato locale modifiche | Itinerario offline, riconciliazione | Tempo sync, merge automatici, conflitti, interventi manuali | Indicatori di stato, politiche di convergenza, segnalazioni chiare |
| **Post‑viaggio e Insight** | Fine viaggio | Feedback e segnali | Preferenze aggiornate, insight | Tasso feedback, miglioramento pertinenza, impatto su retention e conversione | Consenso e reversibilità, spiegabilità dell’impatto |

## **3.14. Blueprint di processo e rappresentazioni**

Le rappresentazioni dei processi sono prodotte in doppio formato: un blueprint narrativo che evidenzia scopi, azioni e responsabilità, e un set di diagrammi di flusso conformi alle convenzioni di modellazione. Per i flussi più ricchi di decisioni e parallelismi, si adottano gateway espliciti, eventi temporali e annotazioni operative; per le interazioni real‑time si utilizzano viste di sequenza orientate alle conversazioni tra attori e servizi.

Le versioni destinate alla comunicazione con stakeholder business privilegiano leggibilità e outcome, mentre le versioni ingegneristiche includono eventi intermedi, condizioni e messaggi scambiati tra domini. In entrambi i casi, i diagrammi sono accompagnati da glossari di simboli e da un indice dei punti di controllo, così da favorire manutenzione e audit.

Il blueprint è oggetto di versionamento alla pari del codice e dei test, con criteri di review che assicurano coerenza terminologica, aggiornamento degli SLA e allineamento con i protocolli di sicurezza. Ogni modifica significativa a requisiti o integrazioni esterne comporta una revisione dei diagrammi e dei KPI associati.

## **3.15. Collegamenti con workflow e RACI**

I processi qui descritti introducono i capitoli funzionali successivi e forniscono input diretto alla definizione dei workflow eseguibili e della matrice RACI. In particolare, la suddivisione in trigger, ingressi, uscite e punti di controllo consente di trasformare i processi in workflow concreti, con passi automatizzabili e responsabilità chiaramente attribuite. Le dipendenze tra domini guidano la sequenza di esecuzione e la gestione degli errori, mentre i KPI di processo diventano SLI misurati in osservabilità.

La RACI eredita questa struttura: per ogni attività critica viene indicato chi è responsabile dell’esecuzione, chi approva l’esito, chi va consultato per impatti trasversali e chi deve essere informato. Questo allineamento riduce tempi di coordinamento, evita sovrapposizioni e facilita la diagnosi di problemi lungo l’intero percorso.

Infine, i processi sono la base per definire i runbook operativi e i criteri di escalation. La presenza di punti di controllo misurabili e la disponibilità di telemetria focalizzata rendono il sistema governabile e migliorabile nel tempo, con cicli di feedback che chiudono il cerchio dal post‑viaggio alla prossima pianificazione.

## **3.16. Diagramma end‑to‑end con punti di controllo**

Il diagramma seguente evidenzia i principali gate decisionali e le azioni di mitigazione, fornendo una vista operativa pronta per la traduzione in workflow eseguibili.

![Diagramma Mermaid 5](image5.png)

## **Riferimenti**

[1] OMG BPMN 2.0.2 – Business Process Model and Notation - https://www.omg.org/spec/BPMN/

[2] The OAuth 2.1 Authorization Framework (Internet‑Draft, October 20, 2025) - https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/

[3] OAuth Working Group – Active Specifications - https://oauth.net/specs/

[4] OpenID Connect Core 1.0 - https://openid.net/specs/openid-connect-core-1_0.html

[5] Google SRE Book – Service Level Objectives - https://sre.google/sre-book/service-level-objectives/

[6] Android Developers – Notifications and Do Not Disturb guide - https://developer.android.com/codelabs/android-training-notifications

[7] Microsoft Research – Strong Eventual Consistency and CRDTs - https://www.microsoft.com/en-us/research/video/strong-eventual-consistency-and-conflict-free-replicated-data-types/

[8] CRDT Resources – Overview and foundational papers - https://crdt.tech/resources

# **4. Chat conversazionale & NLP**

## **4.1. Obiettivi, ambito e valore**

Questa sezione definisce il comportamento della chat multi‑turno e della componente NLP che la sostiene, con l’obiettivo di trasformare richieste in linguaggio naturale in istruzioni strutturate per la pianificazione del viaggio. Il valore per l’utente risiede nella capacità di descrivere liberamente il viaggio, ricevere chiarimenti solo quando necessari e vedere riflesso in tempo reale nell’itinerario ciò che è stato compreso, senza passare da form rigidi. Per il prodotto, la chat è il punto d’ingresso principale che alimenta il motore dell’itinerario, il profilo preferenze e il motore suggerimenti, riducendo attrito e tempi di completamento.

L’ambito copre: dialoghi multi‑turno, politiche di chiarimento e di conferma, estrazione e normalizzazione delle entità di viaggio, generazione di un output strutturato coerente con lo schema dell’itinerario, gestione degli errori e della disambiguazione, requisiti di accuratezza e prestazioni, vincoli di UX e i18n. I collegamenti funzionali sono diretti: l’output della chat alimenta il motore itinerario (si veda la sezione dedicata), aggiorna preferenze e profilo (si veda la sezione sulle preferenze) e condiziona i suggerimenti proposti (si veda la sezione sui suggerimenti).

## **4.2. Vista architetturale e componenti coinvolti**

La catena conversazionale è composta da più elementi coordinati. In ingresso, l’interfaccia chat gestisce messaggi, suggerimenti inline e conferme, fornendo un contesto sempre visibile. Un Orchestratore di chat riceve gli eventi, richiama una pipeline NLP per classificazione dell’intento, estrazione entità e normalizzazione e applica policy di dialogo per chiarimenti e conferme. Nei casi di ragionamento complesso, l’Orchestratore delega a un motore generativo ottimizzato per latenza e costo, mantenendo comunque un output strutturato deterministico verso i sistemi a valle.

Le entità normalizzate e le intenzioni vengono tradotte in “delta” sull’itinerario e inviate al motore dedicato, che ricalcola tappe, durate e vincoli, aggiornando mappa e riepilogo. In parallelo, segnali utili aggiornano il profilo preferenze (per esempio, rilevazione di propensioni a determinati ritmi o budget) dietro conferma dell’utente. Il motore suggerimenti utilizza sia lo stato corrente dell’itinerario sia il profilo per proporre opzioni contestuali. Tutto il percorso è tracciato con telemetria su tempi, esiti e qualità, a supporto di miglioramenti incrementali.

## **4.3. Modello di stato conversazionale**

Lo stato conversazionale è organizzato in tre livelli. Il contesto di turno contiene i dettagli dell’ultimo scambio (testo normalizzato, intenzione ipotizzata, entità parziali, confidenza). Il contesto di sessione mantiene ciò che è stabilito per il viaggio corrente, incluse preferenze dichiarate in chat e decisioni già confermate. Una memoria a lungo termine, legata al profilo, conserva preferenze e abitudini stabili se l’utente ha concesso i relativi consensi. Il passaggio tra livelli è esplicito: le deduzioni vengono sempre proposte e confermate prima di diventare parte del profilo.

La persistenza dello stato consente di riprendere una conversazione interrotta e di proseguire senza ripetizioni. Il contesto passato è richiamato per evitare domande superflue, mentre i chiarimenti vengono accumulati in una coda ordinata per priorità. Per l’accessibilità, gli aggiornamenti rilevanti sono annunciati in modo non intrusivo e restano consultabili nello storico, così da garantire trasparenza e recuperabilità dell’informazione.

## **4.4. Flussi conversazionali multi‑turno**

Il flusso tipico parte dalla comprensione dell’intento primario (ad esempio “crea viaggio”, “modifica tappa”, “imposta budget”), cui segue un controllo di completezza degli slot informativi. Se mancano dettagli critici (date, durata, città esatta o numero di persone), l’assistente formula domande mirate. In presenza di ambiguità (più luoghi con lo stesso nome o date interpretabili in modi differenti), vengono proposte scelte rapide sotto forma di “pillole” selezionabili.

Quando una modifica impatta lo stato esistente in modo significativo, l’assistente richiede una conferma esplicita, spiega l’effetto previsto e offre sempre un’alternativa non distruttiva (per esempio, creare una variante dell’itinerario). Gli errori sono trattati in modo utile e umano: il sistema esplicita perché non può procedere, suggerisce come riformulare e, se opportuno, propone esempi guidati. La chiusura del turno prevede un breve riepilogo dell’azione compiuta, con link rapidi alle viste correlate.

![Diagramma Mermaid 6](image6.png)

## **4.5. Politiche di chiarimento, conferme e gestione errore**

Le politiche di chiarimento seguono tre principi: minimizzare il numero di domande, massimizzare l’informazione raccolta per ogni domanda e mostrare opzioni che riducano lo sforzo cognitivo. In caso di molteplici incertezze, l’assistente può proporre un set compatto di domande in un’unica schermata, rispettando tuttavia i limiti di leggibilità su dispositivi mobili. Le domande sono ordinate per impatto sull’itinerario: prima quelle che sbloccano decisioni a cascata (date e durata), poi i dettagli di rifinitura (ritmi, preferenze alimentari).

Le conferme sono obbligatorie quando l’azione è distruttiva o comporta costi opportunità elevati (ad esempio, rimuovere una tappa con attività collegate). Il testo di conferma è breve, spiega la conseguenza e offre sempre annulla o “salva copia”. Gli errori di comprensione attivano messaggi chiari, con suggerimento di alternative e possibilità di ripetere rapidamente l’input. In caso di ambiguità persistente, l’assistente propone un esempio compilato per facilitare la ripartenza del dialogo.

## **4.6. Estrazione entità e normalizzazione**

La pipeline NLP riconosce e normalizza le seguenti entità di viaggio:

- Date e durate, inclusi range e flessibilità, con gestione dei fusi orari basata su identificatori stabili e coerenti, così da evitare interpretazioni errate durante il viaggio.
- Luoghi e toponimi, con disambiguazione tramite suggerimenti e normalizzazione verso un identificativo univoco del punto o della città, distinguendo aree metropolitane e regioni.
- Persone e composizione del gruppo, con conteggi separati per adulti e bambini e supporto a attributi utili (es. presenza di minori per vincoli di alloggio).
- Budget e valute, con distinzione tra importo per persona e per l’intero viaggio, e normalizzazione a una valuta di riferimento in base al profilo.
- Preferenze e vincoli, comprese indicazioni negative (cose da evitare) e priorità tra categorie (natura, arte, ristoranti, ritmo lento o intenso). La normalizzazione produce un output strutturato con campi fortemente tipizzati, includendo confidenze per ciascuna entità e riferimenti testuali agli span estratti. Gli aggiornamenti successivi preservano sia la rappresentazione canonica sia la forma originale, utile per spiegabilità e audit. Requisiti di accuratezza prevedono soglie elevate di precisione sull’estrazione delle entità critiche, con monitoraggio continuo su dataset rappresentativi del dominio.

## **4.7. Schema dell’output strutturato**

L’output della chat verso i sistemi a valle è un oggetto coerente con lo schema dell’itinerario. L’esempio seguente illustra la forma dei principali campi, pensata per essere stabile, versionata e facile da convalidare.

```
{
  "version": "1.0",
  "message_id": "msg_2025_11_23_001",
  "turn_id": 12,
  "intent": "plan_trip",
  "entities": {
    "dates": {
      "start": "2025-10-12",
      "end": "2025-10-22",
      "flexibility": "low",
      "timezone": "Asia/Tokyo",
      "confidence": 0.96
    },
    "locations": [
      {"canonical_name": "Tokyo", "type": "city", "place_id": "tokyo_jp", "confidence": 0.94},
      {"canonical_name": "Kyoto", "type": "city", "place_id": "kyoto_jp", "confidence": 0.92}
    ],
    "people": {"adults": 2, "children": 0, "confidence": 0.99},
    "budget": {"amount": 2500, "currency": "EUR", "scope": "per_person", "confidence": 0.88},
    "preferences": [{"key": "food", "value": "vegan", "confidence": 0.85}]
  },
  "policy": {
    "confirmation_required": true,
    "confirmation_reason": "replace_existing_plan",
    "clarifications": []
  },
  "actions": [
    {"type": "add_stop", "name": "Tokyo", "start_offset_days": 0, "nights": 4},
    {"type": "add_stop", "name": "Kyoto", "start_offset_days": 4, "nights": 6}
  ],
  "nlu_scores": {"intent_confidence": 0.93, "overall": 0.92}
}
```

Questo schema privilegia: separazione tra estrazione e azione, presenza di confidenze per la gestione del rischio, rappresentazioni canoniche per luoghi e valute, e una sezione di policy che dichiara in modo esplicito quando servono conferme o chiarimenti.

## **4.8. Esempi di prompt, risposte e chiarimenti**

Di seguito alcuni scambi esemplificativi che mostrano il comportamento atteso della chat.

Esempio 1 — Pianificazione con chiarimenti minimi

Utente: “Vorrei 7 giorni tra Lisbona e Porto a giugno, budget medio.”

Assistente: “Perfetto, dal 10 al 17 giugno andrà bene? Confermi 3 notti a Lisbona e 4 a Porto? Posso impostare un budget indicativo per persona attorno a 1200 nella tua valuta?”

Utente: “Sì, confermo.”

Risultato: creazione dell’itinerario con due tappe, stima di spesa e suggerimenti iniziali.

Esempio 2 — Disambiguazione del luogo

Utente: “Aggiungi Santander dopo Bilbao.”

Assistente: “Intendi la città in Spagna o Santander in Colombia?” [Scelte rapide: “Spagna”, “Colombia”]

Utente: “Spagna.”

Risultato: aggiunta della tappa corretta e ricalcolo delle tratte.

Esempio 3 — Conferma prima di modifica distruttiva

Utente: “Rimuovi Kyoto.”

Assistente: “La rimozione di Kyoto elimina anche 3 attività pianificate. Preferisci creare una variante del viaggio senza Kyoto o rimuovere direttamente?” [Scelte rapide: “Crea variante”, “Rimuovi”]

Utente: “Crea variante.”

Risultato: nuova versione dell’itinerario con storicizzazione delle decisioni.

## **4.9. Criteri di accettazione consolidati**

La chat accetta input testuali multi‑turno e mantiene uno stato conversazionale persistente per il viaggio corrente. Le richieste valide generano sempre un aggiornamento coerente dell’itinerario o una proposta di chiarimenti quando mancano dettagli critici. Le azioni con impatto distruttivo richiedono conferma esplicita e offrono sempre una scelta non distruttiva. I messaggi di errore sono chiari, includono un suggerimento di riformulazione e non interrompono la conversazione.

La pipeline NLP estrae correttamente date, luoghi, persone e budget in modo robusto, distinguendo preferenze e vincoli. Le entità critiche rispettano soglie elevate di accuratezza e l’output strutturato è valido rispetto allo schema pubblicato. Sulle prestazioni, la latenza percepita per turno conversazionale rientra nei target di esperienza e l’aggiornamento del riepilogo avviene entro finestre temporali stringenti. L’accessibilità è assicurata con annunci non intrusivi degli aggiornamenti e navigabilità completa da tastiera.

## **4.10. UX, accessibilità e i18n**

Le interfacce della chat presentano suggerimenti inline, pillole selezionabili e conferme in una forma coerente e leggibile su schermi mobili. Gli aggiornamenti importanti vengono annunciati senza interrompere l’utente, la cronologia resta consultabile e le azioni chiave sono sempre raggiungibili con scorciatoie da tastiera. Le interazioni sono progettate per ridurre lo sforzo cognitivo: le domande di chiarimento sono formulate con linguaggio semplice, con esempi contestuali quando necessario.

L’internazionalizzazione adotta codici lingua standard e considera formattazione locale di numeri, valute, date e orari. La gestione dei fusi orari utilizza identificatori stabili e coerenti per evitare errori in presenza di cambi di ora legale. La localizzazione dei testi include anche i suggerimenti di esempio e i messaggi di errore, con linee guida terminologiche per garantire consistenza tra piattaforme.

## **4.11. Metriche di qualità e SLO**

Le metriche principali misurano qualità, velocità e affidabilità. Per la qualità, l’estrazione di date, luoghi, persone e budget viene monitorata con indicatori di precisione e copertura, con analisi per lingua e per scenario. Per la velocità, si osservano la latenza di risposta del turno conversazionale e i tempi di aggiornamento dell’itinerario e del riepilogo. Per l’affidabilità, si tracciano errori per mille richieste, tassi di chiarimenti necessari e percentuali di conferme rifiutate, utili a individuare aree di confusione.

Gli SLO applicano obiettivi concreti alla componente conversazionale e ai servizi a valle. Budget di latenza per ogni componente, timeouts e fallback riducono code lunghe; il routing tra modelli e la cache di risposte ripetitive consentono di mantenere un’esperienza reattiva anche in condizioni di carico elevato. La telemetria espone indicatori tecnici e di prodotto su dashboard unificate, a supporto di diagnosi e miglioramento continuo.

## **4.12. Sicurezza, privacy e spiegabilità**

Per impostazione predefinita, i dati conversazionali sono trattati con minimizzazione e protezione end‑to‑end. Le informazioni sensibili non necessarie al compito vengono rimosse prima di eventuali elaborazioni esterne, le richieste ai modelli sono tracciate e i consensi governano ogni forma di personalizzazione. Gli utenti possono esportare e cancellare i propri dati secondo processi standardizzati e i log di audit tracciano azioni rilevanti.

La spiegabilità è parte dell’esperienza: quando la chat propone una decisione, motiva sinteticamente il perché, evidenziando le entità usate e i vincoli considerati. Ogni deduzione che impatta il profilo viene sottoposta a conferma con possibilità di accettare, rifiutare o modificare. Questa trasparenza incrementa la fiducia e riduce la probabilità di “sorprese” nel corso della pianificazione.

## **4.13. Interfacce con itinerario, preferenze e suggerimenti**

L’output strutturato della chat è il canale ufficiale di aggiornamento verso il motore itinerario. Ogni azione eseguibile è rappresentata come un delta atomico e idempotente, così da semplificare il versioning e la ripetizione in caso di retry. Il profilo preferenze riceve proposte di aggiornamento quando emergono indicazioni stabili dal dialogo; l’utente decide se consolidarle. Il motore suggerimenti consuma lo stato dell’itinerario e del profilo per generare proposte ordinate e spiegabili, che tornano in chat sotto forma di opzioni selezionabili.

Il contratto tra chat e sistemi a valle è versionato e coperto da test di compatibilità. Ogni modifica allo schema viene introdotta con deprecazioni esplicite e periodi di coesistenza, riducendo l’impatto su rilasci e regressioni. La telemetria di frontiera assicura che errori di integrazione siano visibili e risolvibili rapidamente.

## **4.14. Casi d’uso narrativi**

Caso A — Avvio libero e prima bozza

Una viaggiatrice apre la chat e scrive: “Quattro giorni a Parigi a dicembre, low cost.” La pipeline estrae date parziali e budget; l’assistente chiede se le date preferite siano dal 7 al 11, propone allineamento del budget per persona e conferma la creazione di due macro‑giornate tematiche. Alla conferma, l’itinerario viene generato e il riepilogo si aggiorna, offrendo subito proposte pertinenti.

Caso B — Rifinitura iterativa con vincoli

Un utente aggiunge “Niente musei il lunedì e preferisco spostarmi in treno.” La chat riconosce vincolo negativo e preferenza di mezzo, applica il ricalcolo, spiega l’impatto su tempi e distanze e chiede conferma perché una tappa diventa irrealistica. Alla risposta, l’itinerario viene adattato con coerenza e trasparenza.

Caso C — Correzione di ambiguità ripetuta

Un gruppo chiede “Aggiungi Santander dopo Bilbao”, ma ignora la disambiguazione due volte. L’assistente propone esempi, suggerisce la forma “Santander, Spagna” e offre la possibilità di scegliere dalla mappa. Alla selezione, il sistema procede e mostra come è stata risolta l’ambiguità.

## **4.15. Piano di test funzionale**

Il piano copre: dialoghi multi‑turno con entità multiple e ambigue; creazione e modifica rapida dell’itinerario in presenza di vincoli realistici; rendering fluido degli aggiornamenti in chat; suggerimenti con profili diversi e budget stringenti; gestione errori e casi limite di disambiguazione; accessibilità con annunci non intrusivi e focus correttamente gestito; i18n con formati locali di date, valute e numeri; integrazioni con il motore itinerario e con il motore suggerimenti verificate con contratti a prova di regressione.

Per la qualità dell’estrazione si utilizza un dataset interno annotato con entità di dominio e casi d’uso ricorrenti, con valutazione periodica per lingua e per scenario. La copertura di test include anche resilienza ai malfunzionamenti delle dipendenze, con fallback e messaggi all’utente che mantengono l’esperienza utilizzabile.

## **4.16. Roadmap incrementale della chat**

Il percorso di evoluzione prevede innanzitutto stabilità e prestazioni della pipeline di estrazione e delle policy di dialogo, quindi l’introduzione di chiarimenti “in blocco” quando sono necessarie più informazioni, senza costringere l’utente a turni eccessivi. In seguito, si aggiungono memorie episodiche per recuperare rapidamente contesti ricorrenti e si ottimizza il routing tra modelli generativi e componenti deterministici, bilanciando qualità, costo e latenza.

Con l’aumentare della copertura funzionale, la chat diventa il centro di coordinamento per suggerimenti proattivi, scorciatoie operative e automazioni leggere, sempre nel rispetto della trasparenza e del controllo da parte dell’utente. Il tutto resta governato da misure chiare di qualità e da processi di rollout che minimizzano il rischio di regressioni sull’esperienza.

## **4.17. Diagramma di sequenza del turno di chiarimento**

Il diagramma seguente dettaglia un turno con domande multiple in un’unica schermata, pensato per ridurre la lunghezza della conversazione mantenendo alta la qualità dei dati raccolti.

![Diagramma Mermaid 7](image7.png)

## **Riferimenti**

[1] WAI‑ARIA 1.3 – aria‑live e pratiche di annunci non intrusivi - https://www.w3.org/TR/wai-aria-1.3/

[2] WAI – ARIA Overview e Authoring Practices - https://w3c.github.io/wai-website/standards-guidelines/aria/

[3] IANA Time Zone Database – Guida e convenzioni - https://data.iana.org/time-zones/tz-link.html

[4] Tz database – panoramica e convenzioni - https://en.wikipedia.org/wiki/Tz_database

[5] ISO 639 – codici lingua per i18n - https://en.wikipedia.org/wiki/ISO_639-1

[6] First Ask Then Answer – framework di chiarimenti per LLM, 2025 - https://arxiv.org/abs/2508.08308

# **5. Motore Itinerario Multi‑tappa**

## **5.1. Obiettivi, ambito e valore**

Il motore di itinerario costituisce la base transazionale della pianificazione: riceve comandi e richieste dal dialogo e dall’interfaccia, costruisce e mantiene un itinerario multi‑tappa coerente, rispetta vincoli temporali e logistici, calcola spostamenti e durate, e garantisce versioni con annulla/redo. Il suo valore è duplice: per l’utente offre un’esperienza affidabile in cui ogni modifica ha effetti chiari e reversibili; per il sistema fornisce un contratto stabile e deterministico verso mappa e riepilogo, assicurando che le viste restino sincronizzate e aggiornate entro i tempi obiettivo.

L’ambito copre le operazioni di creazione, modifica, riordino e cancellazione di tappe e attività; il calcolo di tempi, distanze e mezzi di spostamento; la gestione di durate minime e orari di apertura; la persistenza versione‑per‑versione con storia navigabile; gli eventi di dominio per l’aggiornamento in tempo reale delle viste e per l’attivazione di suggerimenti contestuali. Le regole qui descritte si integrano con la chat conversazionale delineata in precedenza e con la mappa e il riepilogo presentati successivamente, evitando ripetizioni e mantenendo una chiara separazione delle responsabilità.

## **5.2. Modello di dominio dell’itinerario**

Il dominio è centrato sull’entità Itinerario, costituita da una sequenza ordinata di Tappe. Ogni Tappa può avere Attività associate, e tra coppie di Tappe contigue esiste almeno una Tratta che descrive lo spostamento, il mezzo, il tempo stimato e gli eventuali passaggi intermedi. Le Tappe portano attributi temporali (arrivo, partenza, permanenza minima), spaziali (luogo canonico) e di stato (bozza, confermata, condivisa). Le Attività, pianificate all’interno della finestra temporale della Tappa, rispettano orari di apertura e durata stimata. L’Itinerario possiede inoltre un grafo di Versioni: ogni operazione genera un Delta e una nuova versione; annulla/redo navigano questo grafo senza perdita di informazioni.

![Diagramma Mermaid 8](image8.png)

Il modello è pensato per essere spiegabile: ogni cambiamento dell’itinerario è tracciabile a un Delta, e i calcoli che determinano durate o riordini portano con sé le motivazioni (ad esempio “spostamento a piedi stimato su profilo pedonale urbano” o “attività spostata per orari di apertura”).

## **5.3. Regole di consistenza**

Le regole di consistenza definiscono gli invarianti che ogni versione dell’itinerario deve rispettare. L’ordinamento temporale è il primo vincolo: le Tappe devono formare una sequenza temporalmente crescente, con arrivo e partenza coerenti con le Tratte precedenti e successive. Le durate minime di permanenza impediscono interruzioni non realistiche; se un riordino viola la permanenza, il motore propone automaticamente la prima combinazione valida o richiede una conferma esplicita quando la correzione implica compromessi evidenti.

Le Attività vivono all’interno della finestra temporale della Tappa. Qualora un ricalcolo sposti la finestra oltre gli orari di apertura di un’Attività, il motore le applica una regola di “slittamento intelligente” cercando un’alternativa nello stesso giorno o, in mancanza, propone opzioni di sostituzione. Le Tratte devono essere realistiche: il tempo stimato di viaggio non può ridursi sotto soglie di fattibilità per mezzo; per voli con coincidenze si considerano tempi minimi di connessione aeroportuale; per treni e trasporto pubblico si rispettano orari e tempi di trasferimento tra piattaforme. Le viste devono riflettere lo stato più recente: una versione incoerente non viene pubblicata alle viste, ma resta consultabile in fase di correzione finché non raggiunge la consistenza.

## **5.4. Operazioni CRUD, riordino e versioning con annulla/redo**

Le operazioni di base comprendono: aggiunta di una Tappa con date proposte in base al contesto, modifica di attributi temporali o del luogo, riordino con drag&drop e cancellazione con impatto controllato su Attività e Tratte. Ogni operazione genera un Delta atomico, idempotente e serializzabile, che produce una nuova Versione; la catena di versioni rende annulla/redo un’operazione costante e affidabile. In caso di conflitti derivanti da modifiche concorrenti, il motore applica regole deterministiche di merge a livello di Tappa e Attività, privilegiando la soluzione che preserva la consistenza e minimizza la perdita di lavoro.

I comandi sono transazionali: o l’intero Delta va a buon fine oppure nessuna modifica viene applicata. Gli effetti collaterali (ricalcolo Tratte, ripianificazione Attività) avvengono nella stessa transazione logica, così che la versione risultante sia già pronta per l’uso e coerente in tutte le sue parti. Eventi di dominio come “TappaAggiunta”, “TappeRiordinate”, “TrattaRicalcolata” e “ItinerarioVersionato” vengono emessi alla fine della transazione per aggiornare mappa e riepilogo.

## **5.5. Calcolo di spostamenti, durate e mezzi**

Il motore supporta più modalità di spostamento: a piedi, in auto, in treno e in aereo. Per ciascuna modalità adotta criteri specifici. A piedi, il calcolo tiene conto della rete pedonale urbana e penalizza pendenze o percorsi con accessibilità limitata quando disponibili metadati adeguati; l’obiettivo è proporre tempi realistici per contesti cittadini e turistici. In auto, il tempo stimato usa profili di velocità per categorie stradali con aggiustamento per traffico medio dove disponibile; su tratte lunghe vengono suggerite pause e si evitano sequenze irrealistiche di guida continuativa.

Per il treno e il trasporto pubblico, le stime si basano su orari e frequenze ufficiali con forma dati standardizzata; il motore è in grado di distinguere tra coincidenze garantite e trasferimenti a rischio, segnalando tempi sotto soglia e proponendo alternative. Per l’aereo, i tempi di percorrenza tra città includono volo e tempi di connessione a terra; quando l’utente prevede scali, si applicano tempi minimi di connessione aeroportuale e, in mancanza di dati specifici, soglie conservative. A parità di fattibilità, la scelta del mezzo suggerito privilegia combinazioni con un buon equilibrio tra durata, numero di cambi e compatibilità con preferenze dichiarate (ad esempio evitare voli interni se il profilo predilige il treno).

### **5.5.1. Politiche di ricalcolo**

Il ricalcolo scatta su cambiamento di date, ordine delle Tappe, luogo di una Tappa, mezzo di una Tratta o su aggiunta/cancellazione di Tappe e Attività. Per ridurre il carico cognitivo, gli aggiornamenti sono progressivi: prima si stabilizza la struttura (ordine, date, notti), poi si aggiornano le Tratte, infine si ripianificano le Attività. Un debouncing controllato consolida sequenze di piccoli cambi in un singolo ricalcolo, mantenendo l’aggiornamento della mappa e del riepilogo entro le finestre di esperienza previste.

## **5.6. Regole operative su vincoli e aperture**

Il motore applica vincoli di apertura giornalieri su Attività e luoghi di interesse; quando l’informazione è parziale, adotta euristiche conservative per evitare promesse non mantenibili. Le permanenze minime garantiscono un ritmo plausibile; spostamenti e Attività non si sovrappongono temporalmente. Per coincidenze su ferro e aereo si considerano intervalli minimi di trasferimento, con allerta se la pianificazione si avvicina a soglie critiche. In presenza di più vincoli incompatibili, il motore elenca i conflitti in chiaro e propone varianti, lasciando all’utente la decisione finale con preview dell’impatto.

## **5.7. API di dominio e contratti evento**

Le API del motore espongono comandi a grana fine orientati al dominio. Un esempio indicativo:

- POST /itinerari: crea l’itinerario e restituisce versione iniziale con Tappe eventualmente dedotte.
- POST /itinerari/{id}/tappe: aggiunge una Tappa e ricalcola le Tratte adiacenti.
- PATCH /itinerari/{id}/tappe/{tappaId}: modifica luogo, date o note della Tappa.
- POST /itinerari/{id}/riordina: applica un nuovo ordine delle Tappe in modo atomico.
- POST /itinerari/{id}/attivita: crea un’Attività nella finestra della Tappa.
- POST /itinerari/{id}/annulla e /redo: navigano le Versioni in modo sicuro. Gli eventi emessi a valle includono almeno: ItinerarioCreato, TappaAggiunta, TappeRiordinate, AttivitaPianificata, TrattaRicalcolata, ItinerarioVersionato. Ogni evento contiene metadati di correlazione, timestamp e un payload minimale, mentre i dettagli completi sono recuperabili via query idempotenti sullo stato corrente.

## **5.8. Coerenza con mappa e riepilogo**

La coerenza tra modello e viste è garantita da un ciclo in cui gli eventi di dominio notificano i consumatori visuali e sintetici. La mappa riceve le geometrie aggiornate per Tappe e Tratte, con livelli semplificati per prestazioni e clustering adattivo; il riepilogo presenta un estratto essenziale (date, tappe, tempi e avvisi) e segnala eventuali conflitti irrisolti. Entrambe le viste si aggiornano entro la finestra temporale attesa per un’esperienza fluida, con meccanismi di annuncio non intrusivi per l’accessibilità. Quando l’utente interagisce con la mappa per riordinare o modificare, il motore applica le stesse regole di consistenza, assicurando uniformità indipendentemente dal punto di ingresso.

## **5.9. Workflow narrativi**

Un primo scenario vede l’utente aggiungere una nuova Tappa tra due esistenti. Dopo il comando, il motore inserisce la Tappa, rialloca le notti con una regola proporzionale alla durata residua e ricalcola le due Tratte adiacenti. Se una Tratta diventa eccessiva per durata o numero di cambi, il sistema propone una modalità alternativa più equilibrata, lasciando all’utente la scelta con anteprima dei nuovi tempi.

Un secondo scenario riguarda il riordino con drag&drop: l’utente trascina una Tappa dall’inizio alla fine. Il motore valida i vincoli, ricalcola le Tratte interessate e ripianifica le Attività che escono dagli orari di apertura. In caso di conflitti, presenta un pannello di risoluzione che elenca le opzioni ordinate per compromesso minimo (mantenere le Attività spostandole, sostituirle con alternative simili, oppure creare una variante dell’itinerario). Alla conferma, mappa e riepilogo si aggiornano con un riepilogo delle modifiche.

## **5.10. Criteri di calcolo durate e scelta mezzi**

Le durate di viaggio si fondano su tre pilastri: dati strutturati quando disponibili, profili di rete per modalità specifiche e euristiche conservative in assenza di dati. Per il trasporto pubblico, si utilizzano orari e forme del percorso per determinare tempi e coincidenze, con attenzione a trasferimenti tra fermate e stazioni. Per l’auto, la stima combina distanza, categoria stradale e fattori di traffico medio su base oraria e stagionale, evitando promesse eccessivamente ottimistiche. Per i voli, alle durate di tratta si sommano tempi aeroportuali e minimi di connessione; per scali complessi si segnala il rischio e si suggeriscono alternative con margine maggiore.

La scelta del mezzo suggerito considera oltre al tempo anche la qualità dell’esperienza: numero di cambi, distanza a piedi ai capolinea, vincoli di orario di apertura a destinazione e preferenze dichiarate. Quando due alternative sono comparabili, il motore propone quella con migliore robustezza operativa (maggior margine sulle coincidenze, minori trasferimenti critici), spiegando la logica al momento della scelta.

## **5.11. Criteri di accettazione**

Il motore consente di creare, modificare, riordinare e cancellare Tappe e Attività rispettando tutti i vincoli di consistenza. Ogni operazione produce una Versione e supporta annulla/redo affidabili. Le Tratte sono calcolate per modalità a piedi, auto, treno e aereo con stime plausibili e aggiornamento dinamico quando l’utente cambia mezzo. Le viste mappa e riepilogo riflettono ogni modifica entro la finestra temporale attesa. In presenza di conflitti, il sistema presenta messaggi chiari e percorsi di risoluzione non distruttivi, con possibilità di creare varianti.

L’affidabilità è comprovata da test automatici e manuali su casi normali e edge case: inserimento di Tappe duplicate, riordini estremi, attività fuori orario e tratte non fattibili. La misurazione in esercizio verifica latenza e tassi di successo, con soglie chiare per continuità del servizio e regressioni bloccanti.

## **5.12. Requisiti non funzionali specifici del motore**

Le operazioni di stato sono transazionali e idempotenti. Il modello è stabile e versionato; le evoluzioni dello schema avvengono con periodi di convivenza e deprecazioni esplicite. La telemetria traccia tempi di ricalcolo per modalità, dimensioni dei Delt a e cause più comuni di conflitto; questi dati alimentano miglioramenti progressivi. In modalità connettività debole, il motore preserva l’ultimo stato coerente e riduce i ricalcoli non necessari, riprendendo la normalità appena possibile senza perdita di modifiche.

## **5.13. Esempi di contratti e sequenze**

L’esempio seguente mostra un Delta di aggiunta Tappa e il relativo evento a valle, a scopo illustrativo.

```
{
  "command": "AddStop",
  "itinerary_id": "iti_abc123",
  "payload": {
    "name": "Kyoto",
    "date_from": "2025-10-16",
    "nights": 3
  },
  "client_context": {
    "source": "chat",
    "locale": "it-IT"
  }
}
```

L’evento emesso dopo il commit della transazione:

```
{
  "event": "StopAdded",
  "itinerary_id": "iti_abc123",
  "version_id": "v_42",
  "stop_id": "stp_901",
  "timestamp": "2025-11-23T10:15:00Z",
  "effects": [
    "RecomputedLeg stp_450 -> stp_901 by train duration 130",
    "AdjustedActivities stp_450 count 2"
  ]
}
```

Ecco una sequenza semplificata del flusso riordino‑ricalcolo:

![Diagramma Mermaid 9](image9.png)

## **5.14. Collegamenti con mappa, riepilogo e suggerimenti**

La mappa utilizza le geometrie di Tappe e Tratte per rappresentare l’itinerario, mentre il riepilogo sintetizza date, durate e avvisi. Entrambe le viste sono consumatrici degli eventi del motore, che è quindi il singolo punto di verità per lo stato del viaggio. Il motore suggerimenti sfrutta le lacune e i bisogni emergenti (tratte lunghe senza pause, permanenze sotto soglia, tempi morti tra attività) per proporre alternative, restando in ascolto di ogni aggiornamento versione. In questo modo, la pianificazione mantiene coerenza visuale e operativa, offrendo opportunità di miglioramento senza interrompere il flusso dell’utente.

## **5.15. Governance dei dati e spiegabilità dei calcoli**

Ogni stima di spostamento riporta metadati sulla provenienza del calcolo e sul profilo adottato. In caso di scelte automatiche del mezzo, il motore spiega i criteri impiegati (durata, cambi, vincoli, preferenze) e, quando opportuno, propone alternative classificandole per robustezza. Le scelte accettate dall’utente restano consultabili nella cronologia dell’itinerario e possono essere ripristinate con un click, favorendo fiducia e controllo.

## **Riferimenti**

[1] GTFS – Documentazione e panoramica - https://gtfs.org/documentation/overview/

[2] GTFS – Caratteristiche e file principali - https://gtfs.org/getting-started/features/overview/

[3] OpenStreetMap Wiki – Routing profiles - https://wiki.openstreetmap.org/wiki/Routing_profiles

[4] IATA – Station Standard Minimum Connecting Time - https://www.iata.org/en/publications/manuals/station-standard-minimum-connecting-time-mct/

[5] Travelport – Minimum Connect Time - https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Air/RelatedTopics/MinimumConnectTime.htm

[6] Your Europe – Diritti passeggeri aerei - https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm

[7] Your Europe – Diritti passeggeri ferroviari - https://europa.eu/youreurope/citizens/travel/passenger-rights/rail/index_en.htm

[8] Financial Times – Riforma tempi di compensazione ritardi voli UE - https://www.ft.com/content/adf4e0f5-9d00-46da-8f42-2977a5bce2ae

[9] The Guardian – Intesa su nuovi tempi di compensazione ritardi voli UE - https://www.theguardian.com/business/2025/jun/06/eu-flight-delay-times-passengers-compensation

# **6. Mappa Itinerario & Riepilogo compatto**

## **6.1. Scopo, valore e perimetro**

La mappa dell’itinerario e il riepilogo compatto lavorano insieme per offrire orientamento immediato e controllo visivo continuo. La mappa consente di comprendere rapidamente la disposizione spaziale delle tappe e delle tratte, mentre la barra di riepilogo mantiene sempre visibili le informazioni chiave e segnala in modo tempestivo gli effetti di ogni modifica. L’obiettivo è duplice: ridurre il carico cognitivo durante l’esplorazione e rendere verificabile, entro tempi certi, l’impatto delle azioni dell’utente. Il capitolo definisce le specifiche UI, le interazioni, i requisiti di performance e accessibilità, i diagrammi di navigazione e stati e i comportamenti di aggiornamento del riepilogo con vincoli temporali rigidi.

Questo componente dipende dal motore di itinerario descritto in precedenza, dal quale riceve eventi e snapshot coerenti di tappe, tratte e stato. Supporta inoltre i workflow di gestione e verifica che saranno sviluppati nelle sezioni dedicate ai processi operativi avanzati. Il valore per l’utente risiede nella possibilità di muoversi tra vista geospaziale e contesto sintetico senza perdere il filo: la mappa mostra il “dove”, il riepilogo custodisce il “quando” e il “quanto”, sempre sincronizzati.

## **6.2. Dipendenze e responsabilità**

Le responsabilità sono nettamente separate per mantenere semplicità di implementazione e chiarezza percettiva. Il motore è il punto di verità e decide su coerenza temporale, ricalcolo delle tratte e validità dei vincoli; la mappa è il canale di esplorazione e selezione; il riepilogo è il canale di conferma e controllo sintetico. Ogni aggiornamento dell’itinerario è propagato con eventi di dominio; la mappa aggiorna geometrie e selezioni, il riepilogo calcola e mostra aggregati, badge di stato, tempi totali e avvisi. Come già discusso nel processo precedente, la sincronizzazione verso le viste avviene solo dopo che il motore ha consolidato una versione coerente.

## **6.3. Specifiche UI della mappa itinerario**

### **6.3.1. Struttura visiva e layer**

La mappa è costruita su un basemap vettoriale e su tre gruppi di layer: tappe, tratte e contesto. Le tappe sono rappresentate da marker per categoria (alloggio, interesse, mobilità, attività), con icone coerenti e colore robusto per la leggibilità. Le tratte sono polilinee con stile differenziato per mezzo (continuo per ferro, segmentato per aereo, tratteggio per auto, linea sottile per percorsi a piedi), con etichette di durata in scala con lo zoom. Il contesto comprende landmark e griglie leggere utili all’orientamento. Il clustering dei marker riduce la densità visiva a bassi livelli di zoom, offrendo conteggi aggregati e focalizzazioni progressive durante l’avvicinamento.

Per garantire fluidità, i layer sono minimizzati e combinati quando possibile; lo stile adotta filtri per zoom e livelli di dettaglio progressivi, così da caricare e renderizzare soltanto gli elementi realmente necessari. Le icone sono fornite in sprite ottimizzati; i testi su mappa sfruttano priorità e collision management per evitare sovrapposizioni nei livelli più densi.

### **6.3.2. Interazioni e gesture**

L’interazione è progettata mobile‑first e ottimizzata per touch e mouse. Un tap su un marker seleziona la tappa, centra e applica uno zoom lieve con animazione breve; la selezione apre un pannello di dettaglio ancorato in basso o laterale, con informazioni essenziali e azioni contestuali. Un doppio tap incrementa lo zoom; il pinch consente lo zoom continuo; la rotazione a due dita permette l’orientamento quando abilitata. In pagine con scorrimento verticale, la mappa adotta gestione cooperativa dei gesti: lo scorrimento a un dito muove la pagina, mentre due dita abilitano il pan della mappa con un suggerimento visivo discreto. Sui desktop, la rotellina e i controlli visibili supportano lo zoom, con tasti freccia e più/meno per alternative da tastiera.

Il lungo tocco su mappa propone l’inserimento rapido di una tappa o l’avvio di un nuovo segmento, precompilando luogo e stime; il trascinamento di una tappa è consentito solo quando il motore segnala modalità di riordino aperta. Ogni azione che impatta l’itinerario richiede conferma nel pannello di dettaglio, così da evitare modifiche non intenzionali.

### **6.3.3. Selezione, dettagli e navigazione contestuale**

La selezione di una tappa attiva una linea di evidenza sulla relativa tratta entrante e uscente, con enfasi cromatica e spessore maggiorato. Il pannello di dettaglio mostra nome, date, durata, media di spostamento, eventuali avvisi e un invito ad approfondire. Da qui l’utente può navigare alle attività della tappa, confermare suggerimenti o richiedere alternative. La chiusura del pannello mantiene la selezione evidenziata per non perdere il contesto; un secondo tap fuori dal marker ripristina lo stato iniziale.

### **6.3.4. Performance e budget a 60 fps**

La resa interattiva mira a 60 fotogrammi al secondo sui dispositivi target. Ciò implica un budget di circa 16,7 millisecondi per frame tra input, script, layout e paint. Animazioni e transizioni privilegiano trasformazioni GPU e opacità, evitando proprietà costose e layout thrashing; gli aggiornamenti frequenti sono aggregati nel ciclo di rendering e coordinati con il thread di compositing quando disponibile. Il numero di layer è contenuto, le font geografiche sono caricate in modo differito e i marker massivi si affidano a clustering e virtualizzazione. Le geometrie delle tratte sono semplici e multi‑risoluzione, con decimazione progressiva ai bassi zoom; dove possibile si preferiscono tiles vettoriali ottimizzati rispetto a GeoJSON grezzo.

### **6.3.5. Dark e light mode**

La mappa fornisce stili dedicati per modalità chiara e scura; le combinazioni colore garantiscono contrasto adeguato tra polilinee, marker e sfondo. Le categorie non si affidano al solo colore per distinguersi, ma combinano forma e icona. Il passaggio di tema è immediato e non interrompe l’interazione; le etichette di durata mantengono una luminanza che preserva la leggibilità in entrambe le modalità.

### **6.3.6. Accessibilità della mappa**

La mappa offre alternative robuste per tastiera e tecnologie assistive. I marker sono raggiungibili mediante ordine di tab logico e presentano etichette testuali chiare. In presenza di molteplici marker vicini, la navigazione offre un elenco testuale sincronizzato che funge da scorciatoia lineare. Gli elementi interattivi rispettano dimensioni minime di area sensibile adeguate al contesto e mantengono focus visibile. Le informazioni veicolate solo dal colore sono sempre rinforzate da icone o pattern. Per utenti sensibili al movimento, le animazioni di camera sono ridotte o sostituite con transizioni istantanee, mantenendo la percezione di stato senza generare disorientamento.

## **6.4. Specifiche UI del riepilogo compatto**

### **6.4.1. Contenuti e struttura**

La barra di riepilogo, sempre visibile, espone in forma sintetica: data di inizio e fine dell’itinerario, numero di tappe, tempi totali di spostamento e permanenza, mezzo prevalente e badge di stato (bozza, confermato, condiviso). Un indicatore discreto segnala la presenza di avvisi o conflitti; il tap o click apre una vista estesa a foglio che mostra dettagli aggiuntivi e link rapidi alle sezioni pertinenti. La composizione è responsiva: su schermi piccoli il riepilogo privilegia due righe salienti con informazioni compattate; su desktop offre segmentazione più ricca mantenendo la stessa gerarchia semantica.

### **6.4.2. Aggiornamento entro 500 ms**

Ogni modifica consolidata dal motore aggiorna il riepilogo entro 500 millisecondi. Questo comportamento è garantito da un canale di eventi dedicato e da un modello di calcolo incrementale degli aggregati che evita ricalcoli completi. Gli aggiornamenti vengono coalesciti quando più eventi ravvicinati modificano lo stesso set di valori, riducendo variazioni visive superflue. In caso di latenza oltre soglia, la barra espone uno stato temporaneo con spinner discreto e testo di servizio, senza bloccare la consultazione.

### **6.4.3. Accessibilità e annunci**

Il riepilogo utilizza un’area di stato accessibile che annuncia con cortesia gli aggiornamenti rilevanti, senza interrompere l’attività in corso. Gli elementi interattivi rispettano contrasto e dimensione minimi, con focus chiaro e ordine di tab prevedibile. Il passaggio tra stato compatto ed esteso mantiene il focus corretto e consente chiusura con tasto Esc, così da rispettare abitudini di navigazione da tastiera.

### **6.4.4. Stati visuali**

La barra prevede tre stati principali: normale (nessun avviso), con avvisi (badge e descrizione breve) e attenzione alta (colore di stato e call to action). I cambi di stato avvengono con transizioni sobrie e prevedibili; in modalità ridotta, gli avvisi sono riassunti da icone parlanti con testo alternativo completo.

## **6.5. Diagrammi di navigazione e stati**

### **6.5.1. Navigazione tra mappa, dettagli e riepilogo**

![Diagramma Mermaid 10](image10.png)

### **6.5.2. Stati operativi della mappa**

![Diagramma Mermaid 11](image11.png)

## **6.6. Workflow narrativi**

### **6.6.1. Esplorare l’itinerario sulla mappa**

L’utente apre la vista mappa e riconosce a colpo d’occhio le tappe e le tratte principali. Un tocco su una tappa centra la vista ed evidenzia il segmento precedente e successivo. Il pannello dettagli compare dal bordo inferiore, mostrando date, durata, avvisi e azioni rapide. Scorrendo verso il basso nel pannello, l’utente può visualizzare attività suggerite o aprire l’elenco sincronizzato, utile quando i marker sono molto vicini. Chiudendo il pannello, l’utente mantiene la selezione attiva per proseguire l’esplorazione senza disorientarsi.

### **6.6.2. Vedere un riepilogo sempre aggiornato**

Durante il riordino di due tappe, la barra di riepilogo mostra in tempo quasi reale la nuova distribuzione di notti e i tempi totali di spostamento. In meno di mezzo secondo dallo sblocco della versione, il riepilogo aggiorna contatori e badge, annunciando in modo non invasivo la variazione. Se il ricalcolo produce un avviso (ad esempio una permanenza sotto soglia), il badge evidenzia l’attenzione e invita ad aprire la vista estesa per la risoluzione.

## **6.7. Matrici di stato e interazioni**

| **Stato UI mappa** | **Focus** | **Azioni consentite** | **Aggiornamenti in mappa** | **Aggiornamenti in riepilogo** |
| --- | --- | --- | --- | --- |
| **Inattiva** | Nessuno | Pan, zoom, apri riepilogo | Nessuno | Nessuno |
| **Esplorazione** | Nessuno | Tap marker, doppio tap, pinch, rotazione | Animazioni camera leggere | Nessuno |
| **Selezione** | Marker attivo | Apri dettaglio, cambia mezzo, mostra alternative | Evidenza tratte adiacenti | Nessuno |
| **Dettaglio** | Pannello attivo | Conferma/annulla, vai ad attività | Aggiornamenti contestuali | Pre‑aggiornamenti in attesa |
| **Ricalcolo** | Blocco breve | Nessuna azione distruttiva | Aggiornamento geometrie | Aggiornamento entro 500 ms |
| **Conflitto** | Badge visibile | Apri risoluzione | Evidenza elementi in conflitto | Avviso e link di correzione |

## **6.8. Requisiti di performance e robustezza**

L’interazione su mappa mantiene 60 fps sui target principali, con animazioni Micro in 150–250 millisecondi e Macro in 250–350 millisecondi. Le operazioni di selezione, apertura pannello e pan sono percepite come immediate; lo zoom utilizza easing prevedibili. Il riepilogo si aggiorna entro 500 millisecondi dal consolidamento della modifica. Le code di disegno evitano lavoro superfluo nel frame critico; clustering, tiles vettoriali e stili ottimizzati abbattono il carico di rendering. Nei dispositivi meno performanti, la qualità visiva degrada in modo controllato (riduzione di ombre e layer opzionali) senza alterare la semantica.

## **6.9. Requisiti di accessibilità della UI**

Gli elementi interattivi rispettano dimensioni minime adeguate al contesto e mantengono sufficiente spaziatura per evitare attivazioni accidentali. Il contrasto visivo segue le soglie prescritte per testo e per elementi grafici non testuali, con indicatori di focus sempre percepibili. Il riepilogo utilizza un’area di stato che annuncia cambi con cortesia, evitando interruzioni improvvise; gli avvisi critici impiegano annunci più incisivi, limitati ai soli casi necessari. La mappa fornisce sempre alternative equivalenti: lista sincronizzata, ricerca e scorciatoie da tastiera.

## **6.10. Dark e light mode, contrasto e leggibilità**

Le tavolozze di colore si adeguano al tema preservando contrasto su testo, icone, polilinee e focus ring. Le linee di percorso e i marker mantengono almeno il contrasto minimo rispetto allo sfondo della mappa; dove necessario, si aggiungono contorni o aloni neutri per garantire separazione visiva. Il riepilogo utilizza una tipografia con dimensioni e peso costanti tra temi, e adotta indicatori di stato basati su forma e testo oltre che sul colore.

## **6.11. Telemetria e osservabilità**

La UI emette metriche su frame rate, tempi di input‑to‑render, latenza di aggiornamento del riepilogo e tassi di errore. Le tracce consentono di individuare zone di calo prestazionale (render pesanti, eccesso di layer o marker) e di confermare il rispetto dei budget nelle situazioni reali. Per gli annunci del riepilogo si tracciano inoltre frequenza, durata e livello di “politeness”, così da bilanciare informatività e non intrusività.

## **6.12. Criteri di accettazione misurabili**

La mappa rende fluide pan, zoom e selezione mantenendo 60 fps sui device di riferimento; i marker si aggregano in cluster a bassi zoom e si espandono progressivamente. Il pannello di dettaglio si apre entro 200 millisecondi dalla selezione. Il riepilogo aggiorna dati e badge entro 500 millisecondi da ogni modifica consolidata, con annunci non intrusivi e focus management corretto. Tutti i controlli interattivi rispettano dimensione e contrasto minimi; la tastiera consente la completa operabilità e la modalità ridotta di movimento limita le animazioni della camera. Dark e light mode sono supportate nativamente e non riducono la leggibilità. Gli errori e i conflitti sono rappresentati sia in mappa sia nel riepilogo, con percorsi di risoluzione chiari.

## **6.13. Sicurezza, privacy e permessi**

Le funzioni di geolocalizzazione richiedono consenso esplicito e sono opzionali; l’accesso alla posizione corrente ha scopo di orientamento e non è necessario alla visualizzazione dell’itinerario. Gli errori di permesso sono comunicati con messaggi semplici e azioni concrete (riprova, apri impostazioni), senza degradare la navigazione all’itinerario pianificato.

## **6.14. Note di implementazione**

La mappa preferisce tiles vettoriali e stili ottimizzati, con limiti di zoom, filtri e visibilità condizionata per ridurre il lavoro al frame. Le polilinee delle tratte sono semplificate in base allo zoom; i marker si appoggiano a clustering efficiente con gestione delle collisioni a livello di simbolo. La gestione cooperativa dei gesti evita conflitti con lo scroll della pagina. Il riepilogo è un componente sticky con area di stato accessibile e aggiornamenti coalesciti. L’intera catena privilegia trasformazioni e opacità per animazioni, riservando layout e paint a passaggi non interattivi.

## **Riferimenti**

[1] WCAG 2.2 – Success Criterion 2.5.8 Target Size (Minimum) - https://w3c.github.io/wcag/guidelines/22/

[2] Apple Developer – UI Design Dos and Don’ts: Hit Targets 44pt - https://developer.apple.com/design/tips/

[3] Material Design – Touch target size 48dp - https://m1.material.io/usability/accessibility.html

[4] WAI-ARIA – Live Regions (MDN) - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions

[5] WAI-ARIA – Live region politeness (Authoring Practices) - https://www.w3.org/TR/2015/WD-wai-aria-practices-1.1-20150514/

[6] WCAG 2.1 – Understanding 1.4.11 Non-text Contrast - https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast

[7] WCAG 2.1 – Understanding 1.4.3 Contrast Minimum - https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum

[8] Mapbox – Improve GL JS map performance - https://docs.mapbox.com/help/troubleshooting/mapbox-gl-js-performance/

[9] Google Maps SDK – Marker clustering (iOS) - https://developers.google.com/maps/documentation/ios-sdk/utility/marker-clustering

[10] Google Maps JavaScript – Cooperative gesture handling - https://developers.google.com/maps/documentation/javascript/examples/interaction-cooperative

[11] Google Maps SDK – Controls e gestures (Android e iOS) - https://developers.google.com/maps/documentation/android-sdk/controls | https://developers.google.com/maps/documentation/ios-sdk/controls

[12] Apple – Criteri “Riduci movimento” per app - https://developer.apple.com/tw/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria/

# **7. Profilo Utente & Preferenze**

## **7.1. Obiettivi, valore e perimetro**

Il profilo utente è il fulcro della personalizzazione: contiene le informazioni necessarie a comprendere identità, abitudini e attitudini di viaggio, e custodisce le preferenze che guidano la qualità dei suggerimenti e la coerenza dell’itinerario. L’obiettivo di questa sezione è definire in modo organico il modello dati del profilo, le politiche di aggiornamento e storicizzazione, l’esperienza d’uso per la conferma di modifiche dedotte dal dialogo, il tracciamento dell’origine dei dati e le regole di sincronizzazione multi‑dispositivo. Il risultato è un sistema che impara in modo trasparente e controllato, riducendo il carico cognitivo e assicurando che ogni proposta rifletta davvero il modo di viaggiare della persona.

Il contenuto qui descritto alimenta direttamente il motore dei suggerimenti, contribuendo alla generazione di proposte pertinenti e motivabili, e si integra con le pratiche di sicurezza e privacy, garantendo trattamento lecito, minimizzazione e diritti di controllo da parte dell’utente. Dove necessario, sono indicati riferimenti interni ad altri capitoli per evitare duplicazioni e mantenere coerenza di linguaggio e responsabilità.

## **7.2. Contesto e confini**

Il servizio profilo è responsabile della persistenza di dati personali e preferenze, dell’emissione di eventi di modifica e dell’esposizione di API per UI e servizi interni. Il motore dei suggerimenti consuma gli attributi dichiarati o appresi per calcolare ranking e filtri, mentre il motore itinerario applica vincoli e scelte per costruire piani realistici. La chat conversazionale, come descritto nelle sezioni precedenti, funge da canale privilegiato per l’emersione di nuove preferenze; tali inferenze sono sempre sottoposte a consenso esplicito prima di essere applicate al profilo. La sicurezza e la conformità normativo‑organizzativa sono presidiate da policy e controlli approfonditi in un capitolo dedicato; qui si anticipano i principi architetturali a cui il profilo si deve attenere.

## **7.3. Modello dati del profilo**

### **7.3.1. Struttura e campi principali**

Il profilo è organizzato in due aree: anagrafica essenziale e preferenze. L’anagrafica raccoglie il minimo indispensabile per l’esperienza (lingua, valuta, paese di riferimento, fasce d’età, eventuale composizione del gruppo), evitando informazioni superflue e separando logicamente i dati potenzialmente sensibili. Le preferenze sono rappresentate come coppie chiave‑valore tipizzate, raggruppate per categoria (ad esempio alimentazione, interessi, stile di viaggio, budget, mobilità), con supporto a insiemi e liste ordinate quando l’informazione richiede granularità maggiore. Ogni preferenza mantiene metadati di origine, confidenza, istante di apprendimento, scadenza eventuale e stato di attivazione.

Il modello privilegia estendibilità e backward‑compatibility: nuove categorie e chiavi possono essere introdotte senza migrazioni invasive grazie a campi flessibili e a un vocabolario versionato. Le validazioni assicurano coerenza (range, enum, formati), mentre i default sensati consentono di iniziare con un profilo utile anche in assenza di dichiarazioni esplicite.

### **7.3.2. Provenienza, confidenza e storicizzazione**

La tracciabilità è parte integrante del dato. Ogni preferenza conserva l’origine (inserimento manuale, apprendimento da chat, import esterno, impostazione di sistema) e una misura di confidenza che indica quanto il sistema ritiene stabile quella scelta nel tempo. Le modifiche sono versionate con storico integrale di chi ha effettuato l’azione, quando e perché, e con collegamento all’evento conversazionale o all’azione di interfaccia che ha prodotto il cambiamento. Questo approccio rende verificabili motivazioni e impatti, semplifica il rollback e abilita audit puntuali.

### **7.3.3. Schema concettuale**

Il seguente schema concettuale sintetizza entità, relazioni e principali attributi. La struttura è pensata per un database relazionale con appoggi flessibili per preferenze e metadata, preservando interrogazioni efficienti e integrità referenziale.

![Diagramma Mermaid 12](image12.png)

## **7.4. Politiche di aggiornamento, storico e audit**

### **7.4.1. Regole di aggiornamento e impatto applicativo**

Ogni variazione confermata alle preferenze ha impatto immediato sui suggerimenti e diventa parte del contesto per ricalcolo dell’itinerario. Le modifiche non distruttive (ad esempio l’aggiunta di una cucina preferita) vengono applicate e propagate con eventi idempotenti; quelle potenzialmente distruttive (ad esempio la rimozione di un’intera categoria) richiedono una conferma esplicita e, se comportano regressioni nell’itinerario, una spiegazione sintetica dell’effetto atteso. La confidenza orienta il peso con cui una preferenza influenza ranking e filtri: valori appena appresi sono inizialmente ponderati con cautela e rafforzati dal comportamento successivo.

### **7.4.2. Audit completo e tracciabilità delle decisioni**

Il registro eventi conserva una traccia leggibile e consultabile di ogni cambiamento: chi ha proposto la modifica (sistema o persona), chi l’ha approvata, quali campi sono mutati, quale origine è stata attribuita e quali componenti hanno reagito. I log applicativi sono protetti, indicizzati e sottoposti a politiche di retention coerenti con le finalità di sicurezza e conformità. L’audit evita dati eccedenti e limita gli elementi personali ai soli indispensabili per garantire accountability, con mascheramento selettivo dove necessario.

### **7.4.3. Trasparenza, minimizzazione, diritti e tempi di risposta**

Il profilo aderisce a principi di trasparenza e minimizzazione: si raccolgono solo dati pertinenti alle finalità di personalizzazione e pianificazione, si mettono in evidenza scopi e basi giuridiche, si facilita la consultazione e l’esportazione in un formato riutilizzabile. Le richieste sui diritti dell’interessato vengono gestite senza indugio e comunque entro un mese; per il contesto statunitense si prevedono tempi e conferme in linea con pratiche correnti, inclusa la risposta completa entro 45 giorni per richieste verificate, con comunicazione intermedia di ricezione. La revoca del consenso è semplice quanto la sua concessione e comporta la disattivazione o l’eliminazione dei trattamenti basati esclusivamente su quel consenso, con aggiornamento coerente del profilo e dei registri.

## **7.5. Apprendimento dal dialogo con consenso**

### **7.5.1. Rilevazione, proposta e conferma**

La chat intercetta affermazioni rilevanti (ad esempio “preferisco vegano”, “budget medio”, “evito auto”) e le trasforma in proposte di aggiornamento grazie a regole e classificatori leggeri. Ogni proposta include la motivazione, il valore dedotto e l’effetto stimato su suggerimenti e itinerario. L’utente può accettare, rifiutare o modificare prima del salvataggio; l’azione selezionata viene memorizzata e utilizzata per migliorare le deduzioni successive.

### **7.5.2. Esperienza d’uso per la conferma**

La conferma avviene tramite un banner non intrusivo ancorato al contesto della conversazione. Il testo è chiaro e sintetico, con tre scelte equivalenti e una scorciatoia alla pagina completa delle preferenze. In caso di rifiuto, la proposta viene archiviata con motivazione; in caso di modifica, il sistema registra il valore finale come esplicito, sostituendo quello dedotto. Per preferenze sensibili o ad alto impatto, la UI richiede una conferma aggiuntiva e offre un collegamento agli aspetti informativi e di controllo.

### **7.5.3. Flusso operativo**

Il flusso seguente illustra il ciclo dall’espressione in chat al salvataggio, con consenso e propagazione agli altri componenti.

![Diagramma Mermaid 13](image13.png)

## **7.6. Applicazione delle preferenze a suggerimenti e itinerario**

### **7.6.1. Dalle preferenze alle features**

Ogni preferenza diventa una o più features utili al ranking dei suggerimenti. Le preferenze esplicite hanno priorità, le inferenze con bassa confidenza agiscono come indizi e vengono rafforzate solo se confermate da scelte coerenti (click, like, accettazioni). Filtri duri (esclusioni alimentari, limiti di distanza, soglie di budget) operano a monte; preferenze di stile influenzano l’ordine dei risultati e le spiegazioni mostrate all’utente.

### **7.6.2. Coerenza con vincoli di itinerario**

Quando una preferenza entra in conflitto con vincoli forti dell’itinerario (ad esempio un tempo di trasferimento inaccettabile), il sistema propone alternative che rispettino sia la preferenza sia i vincoli oppure spiega il compromesso adottato. Le modifiche a catena sono sempre tracciate, così da poter risalire rapidamente all’origine di una scelta del motore.

### **7.6.3. Feedback e miglioramento continuo**

Ogni interazione (selezione, scarto, modifica) alimenta un ciclo virtuoso: le preferenze coerenti vengono rafforzate, quelle disattese ripensate o degradate. Questo apprendimento continuo resta sotto il controllo dell’utente, che può in ogni momento correggere o disattivare categorie intere.

## **7.7. Sincronizzazione multi‑dispositivo**

### **7.7.1. Versioni, conflitti e convergenza**

La sincronizzazione gestisce aggiornamenti concorrenti provenienti da più device, anche offline. Per preferenze scalari si adotta una regola di prevalenza temporale con versionamento causale per evitare sovrascritture spurie; per insiemi e liste si impiegano strutture che garantiscono convergenza senza coordinamento, preservando l’intenzione dell’utente anche in presenza di cambiamenti paralleli. In caso di conflitti non risolvibili automaticamente, il sistema presenta un confronto chiaro e propone la fusione più ragionevole, lasciando comunque la scelta finale all’utente.

### **7.7.2. Criteri di riconciliazione**

La seguente tabella sintetizza le regole di risoluzione più frequenti.

| **Tipo preferenza** | **Esempio** | **Conflitto tipico** | **Regola di riconciliazione** | **Esito atteso** |
| --- | --- | --- | --- | --- |
| **Scalare** | budget notti | Due valori diversi modificati offline | Ultimo evento causale prevale; in parità richiesta di scelta | Un unico valore coerente |
| **Insieme** | cucine preferite | Aggiunte e rimozioni concorrenti | Fusione con precedenza definita su rimozioni o aggiunte in base al contesto | Insieme stabile e privo di duplicati |
| **Lista ordinata** | priorità mezzi | Riordini paralleli | Merge ordinamenti preservando blocchi stabili e risolvendo inversioni | Ordine consistente tra device |
| **Booleano** | evita auto | Toggle su device diversi | Ultimo evento causale; annuncio di modifica recente | Stato binario coerente |

### **7.7.3. Offline e rientro in rete**

Ogni dispositivo conserva una coda di eventi firmati con marca temporale e identificatore causale. Al ripristino della connettività, gli eventi vengono riprodotti verso il servizio profilo in modo idempotente; gli esiti della riconciliazione sono comunicati all’utente se hanno modificato il valore inserito localmente. La pagina preferenze mostra sempre lo stato più aggiornato e, quando utile, una breve sintesi delle divergenze risolte.

## **7.8. UX del Centro Preferenze e conferme**

Il Centro Preferenze offre una vista a schede per categorie con ricerca interna, indicatori di confidenza e una cronologia leggibile dei cambiamenti. Per ogni preferenza sono disponibili undo, disattivazione temporanea e collegamenti alla conversazione dove è stata appresa. Le conferme automatiche rispettano principi di chiarezza e granularità: il testo spiega cosa cambierà, perché e come tornare indietro; i comandi sono equidistanti e facilmente azionabili, con stato di avanzamento e messaggistica di esito. L’accessibilità è garantita da focus chiaro, annunci non intrusivi e dimensioni tattili adeguate.

## **7.9. Metriche e criteri di accettazione**

La qualità del profilo è misurata su tre assi: correttezza, tempestività e controllo. La correttezza si valuta con la coerenza tra preferenze e scelte reali, la riduzione di conflitti e la percentuale di inferenze confermate. La tempestività misura i tempi di applicazione e propagazione dei cambiamenti verso suggerimenti e itinerario. Il controllo considera la facilità con cui l’utente trova, comprende e modifica le preferenze, compresa la gestione dei consensi. Sono previsti test funzionali e di integrazione: salvataggi con validazioni robuste, aggiornamenti immediati delle proposte, storico consultabile, sincronizzazione affidabile anche in condizioni di rete sfavorevoli, esportazione ed eliminazione dei dati su richiesta entro tempi previsti.

## **7.10. Sicurezza, privacy e conformità (collegamento con Cap. 13)**

Il profilo applica principi di liceità, correttezza, trasparenza, minimizzazione, esattezza, limitazione della conservazione e integrità. Le basi giuridiche sono chiarite per ciascuna finalità; laddove si ricorra al consenso, esso è libero, specifico, informato e inequivocabile, con possibilità di revoca semplice e registrazione verificabile. Le richieste sui diritti sono gestite entro i tempi previsti, con eventuali estensioni motivate nei casi complessi. Le attività di apprendimento e personalizzazione rientrano nel perimetro del profilo e, quando assumono natura di profilazione, vengono presidiate da misure che assicurano informativa chiara, possibilità di intervento umano e punti di contatto per eventuali contestazioni. I log e gli audit rispettano criteri di necessità, proporzionalità e sicurezza, evitando di includere dati personali non indispensabili.

## **7.11. Casi d’uso narrativi**

### **7.11.1. Aggiornare una preferenza esplicita**

L’utente apre il Centro Preferenze, modifica la soglia di budget per alloggi e salva. Il sistema valida il range, applica il cambiamento e registra l’evento con motivazione “modifica manuale”. I suggerimenti di alloggio vengono ricalcolati e, nel riepilogo, il badge budget riflette il nuovo target. Una voce di storico consente di tornare al valore precedente in un solo gesto.

### **7.11.2. Confermare un apprendimento dal dialogo**

Durante la conversazione, l’utente scrive che evita l’auto nelle città grandi. L’assistente propone l’aggiornamento di preferenza con indicazione dell’impatto: maggior peso a mezzi pubblici e strutture vicine a stazioni. L’utente accetta; il salvataggio avviene con origine “dialogo”, la confidenza iniziale viene posta a un livello medio e il motore suggerimenti ricalcola le attività del giorno successivo. L’utente, vedendo l’effetto, può aumentare la confidenza o disattivare temporaneamente la regola per un singolo viaggio.

## **Riferimenti**

[1] GDPR – Articolo 5 Principi del trattamento - https://gdpr-info.eu/art-5-gdpr/

[2] GDPR – Articolo 12 Trasparenza e tempi di risposta - https://www.gdpr.org/regulation/article-12.html

[3] EDPB – Guida per il rispetto dei diritti degli interessati e tempi di risposta - https://www.edpb.europa.eu/sme-data-protection-guide/respect-individuals-rights_en

[4] CCPA – Tempistiche per richieste dei consumatori - https://www.ccpaconsumerprivacy.org/right-to-delete/

[5] Analisi normativa su tempistiche e conferme CCPA - https://natlawreview.com/article/analysis-attorney-general-regulations-to-ccpa-part-2-business-practices-handling

[6] NIST SP 800‑92 – Log Management e audit - https://csrc.nist.gov/pubs/sp/800/92/final

[7] NIST Log Management Project – Aggiornamenti e playbook - https://csrc.nist.gov/projects/log-management

[8] ISO/IEC 29184:2020 – Informative online e consenso - https://www.iso.org/standard/70331.html

[9] ISO/IEC 27560 – Struttura dei record di consenso - https://www.iso.org/standard/91775.html

[10] GDPR – Articolo 22 Decisioni automatizzate e profilazione - https://gdpr.eu/article-22-automated-individual-decision-making/

[11] Introduzione ai CRDT per sincronizzazione - https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

# **8. Suggerimenti AI Personalizzati e Budget**

## **8.1. Visione e valore**

Il motore dei suggerimenti fornisce proposte contestuali su tappe, attività e alloggi che rispettano preferenze, vincoli e budget dell’utente, trasformando una ricerca generica in un set di opzioni mirate e motivabili. L’obiettivo è ridurre il tempo per passare dall’intento all’azione, mantenendo il controllo sui costi e garantendo una latenza percepita inferiore ai due secondi. La qualità si misura sulla pertinenza dei risultati, sulla trasparenza delle motivazioni e sulla continuità dell’apprendimento dal feedback esplicito e implicito.

Le funzionalità descritte in questo capitolo utilizzano il profilo e le preferenze , si integrano con i partner esterni per cataloghi e prezzi e aggiornano il riepilogo compatto e gli avvisi economici visibili nell’interfaccia . Il risultato è un’esperienza proattiva: consigli che spiegano il perché, filtri che danno controllo, e un budget che orienta l’intero percorso decisionale.

## **8.2. Architettura logica del motore suggerimenti**

### **8.2.1. Pipeline a due stadi: retrieval e ranking**

La generazione delle proposte avviene in due fasi distinte. Nella prima, un modulo di retrieval recupera in tempi brevissimi un sottoinsieme di candidati rilevanti a partire dal contesto corrente (tappa, finestra temporale, categoria richiesta) e dal profilo dell’utente. In questa fase si combinano segnali statici (categoria, posizione, orari di apertura, politiche di cancellazione) con segnali dinamici (disponibilità, fascia di prezzo corrente, popolarità locale). Nella seconda fase, un modulo di ranking ordina i candidati ottimizzando la pertinenza rispetto alle preferenze, al budget e ai vincoli dell’itinerario, introducendo regole di diversificazione per evitare liste monotone e favorire una scoperta guidata.

Questa separazione consente di scalare in presenza di cataloghi ampi, riducendo il carico del ranking a poche centinaia di elementi altamente pertinenti. L’infrastruttura supporta aggiornamenti rapidi dei segnali, con caching coerente e invalidazioni selettive per mantenere la latenza entro i target di esperienza.

### **8.2.2. Feature store: coerenza tra training e serving**

Per ottenere coerenza tra addestramento e inferenza, le caratteristiche utilizzate dal ranking (ad esempio distanza dalla tappa, prezzo normalizzato, compatibilità con preferenze alimentari, propensione storica al click) sono gestite da un feature store con doppio canale: offline per storici e batch, online per la bassa latenza in produzione. Le definizioni delle feature sono versionate e condivise, così che lo stesso calcolo sia riutilizzato nei dataset di training e nelle richieste real‑time. Le policy di freschezza indicano la frequenza di aggiornamento per ciascun segnale, mentre meccanismi di TTL e garbage collection evitano la degradazione della qualità in caso di lentezza delle sorgenti.

### **8.2.3. Prestazioni, caching e resilienza**

Il servizio espone un endpoint sincrono con SLO di risposta inferiore a due secondi al 95° percentile, misurato dal client. Per garantire stabilità, la pipeline applica:

- cache dei candidati per query popolari con età massima breve;
- pre‑calcolo dei cluster di popolarità per aree e categorie, aggiornati con processi incrementali;
- fallback su risultati baseline quando una sorgente esterna è lenta o non disponibile, con messaggi di trasparenza nella UI (“proposte standard mentre aggiorniamo le disponibilità”). Il monitoraggio include tempi di ogni fase, error rate per integrazione esterna e quota di richieste servite da cache, in modo da intervenire in modo mirato su colli di bottiglia.

### **8.2.4. Sequenza operativa**

Il diagramma seguente illustra il flusso dalla richiesta utente alla presentazione dei suggerimenti con controllo budget.

![Diagramma Mermaid 14](image14.png)

## **8.3. Regole di ranking e filtri**

### **8.3.1. Criteri di ordinamento**

Il ranking assegna a ciascun candidato un punteggio composito che combina:

- compatibilità con preferenze esplicite e apprese (alimentazione, interessi, stile di viaggio, propensione a camminare);
- coerenza con il contesto itinerario (slot temporale, vincoli orari, distanza/tempo dalla tappa, mezzo preferito);
- qualità intrinseca dell’elemento (valutazioni, affidabilità, politiche flessibili, sostenibilità se disponibile);
- convenienza economica (prezzo rispetto al budget residuo, presenza di sconti, penalità per superamento soglie);
- segnali comportamentali aggregati (tasso di click, accettazione in contesti simili, freschezza). Il punteggio è normalizzato per categoria, così da garantire confronti equi, e viene accompagnato da una spiegazione sintetica (“vicino alla tua tappa, cucina adatta, entro budget”).

### **8.3.2. Diversificazione e serendipità controllata**

Dopo il ranking primario, un modulo di ribilanciamento introduce diversità nella lista finale, evitando che le prime posizioni appartengano tutte alla stessa nicchia. La diversificazione considera copertura delle sottocategorie, distribuzione dei prezzi intorno al target e novità per l’utente, mantenendo un equilibrio tra accuratezza e scoperta. Per utenti più esplorativi, il peso della diversificazione aumenta; per chi preferisce sicurezza, si riduce. Questo ribilanciamento agisce su un sottoinsieme dei primi risultati, così da non compromettere la pertinenza percepita.

### **8.3.3. Filtri e ordinamenti nella UI**

I filtri consentono all’utente di rifinire le proposte in tempo reale: budget massimo, distanza/tempo di spostamento, tipologia (ad esempio “musei”, “alloggi con cancellazione gratuita”), fascia oraria e valutazioni minime. Le scelte sono immediatamente applicate dal client, mentre le richieste più complesse (come limite di disponibilità per data) attivano un aggiornamento server con spinner e skeleton visivi per preservare fluidità. Il reset rapido riporta alla selezione iniziale del ranking.

## **8.4. Apprendimento dal feedback**

### **8.4.1. Feedback esplicito e implicito**

Il sistema impara dalle azioni dell’utente. I segnali espliciti (like, nascondi, salva per dopo) e impliciti (scroll fino in fondo, click su dettagli, tempo di permanenza, accettazione del suggerimento) vengono trasformati in features che aggiornano, con gradualità, le preferenze e i pesi del ranking. I feedback negativi hanno un effetto più rapido per ridurre proposte non desiderate; quelli positivi consolidano nel tempo per evitare sovra‑adattamenti.

### **8.4.2. Aggiornamenti al profilo con consenso**

Quando dal comportamento emergono nuove preferenze stabili, l’assistente propone un aggiornamento al profilo con una richiesta di conferma non intrusiva. In caso di accettazione, il valore diventa esplicito e assume maggiore influenza sul ranking futuro. L’utente può sempre rivedere o disattivare tali aggiornamenti dalla pagina delle preferenze, come descritto nella sezione 7.

### **8.4.3. Ottimizzazione continua**

La qualità dei suggerimenti viene ottimizzata con esperimenti controllati e, dove appropriato, con algoritmi di esplorazione‑sfruttamento che allocano una piccola quota di traffico a varianti promettenti mantenendo il rischio sotto controllo. Gli esiti alimentano un ciclo di miglioramento che tocca features, parametri di ranking e politiche di diversificazione.

## **8.5. Controllo budget e spese stimate**

### **8.5.1. Categorie di spesa e stime**

Il budget può essere impostato sia a livello di viaggio (totale) sia per categoria: alloggio, trasporti, attività, pasti e extra. Ogni suggerimento viene accompagnato da una stima di costo in valuta coerente con le preferenze, basata su tariffe aggiornate o intervalli storici quando i prezzi sono dinamici. L’interfaccia mostra l’impatto della scelta sul residuo, con badge cromatici che segnalano margini e tensioni rispetto alle soglie impostate.

### **8.5.2. Valute, tassi e trasparenza**

Per garantire confronti chiari:

- le stime sono sempre mostrate nella valuta preferita dell’utente e, quando differiscono dalla valuta del fornitore, includono il tasso applicato al momento del calcolo;
- i tassi sono memorizzati con marca temporale e fonte utilizzata, così che il costo sia ripetibile in report e riepiloghi;
- un meccanismo di caching con scadenza breve e fallback di emergenza evita latenza e interruzioni;
- le policy di arrotondamento e le eventuali commissioni sono esplicitate nella scheda del suggerimento quando influenzano la stima.

### **8.5.3. Soglie e avvisi**

L’utente può definire una soglia totale e soglie per categoria. Al superamento, il sistema presenta un avviso con alternative entro budget, spiegando la causa dello scostamento (ad esempio “notte con prezzo sopra il target” o “somma attività per il giorno X eccede la soglia”). Gli avvisi possono essere ricevuti anche come notifica, rispettando le preferenze di quiet hours. Per evitare rumore, gli avvisi sono raggruppati e aggiornati automaticamente quando l’utente accetta una proposta più economica o modifica il budget.

## **8.6. UX dei suggerimenti, dei filtri e del feedback**

Ogni suggerimento espone in modo compatto informazioni decisive: distanza/tempo dalla tappa, fascia di prezzo rispetto al budget, motivazioni principali (“vicino”, “adatto alle tue preferenze alimentari”, “valutazioni alte”), politiche rilevanti e un’azione primaria chiara (accetta, sostituisci, salva). Il pannello filtri resta a portata di mano e mostra count dinamici, in modo che l’utente percepisca l’impatto delle scelte senza tornare indietro. La gestione del feedback è contestuale: i comandi sono in linea con la card e producono un aggiornamento visibile della lista.

## **8.7. KPI e monitoraggio della qualità**

### **8.7.1. Prestazioni e stabilità**

- Latenza end‑to‑end: risposta inferiore a 2s al 95° percentile nella vista elenco.
- Tasso di fallback: quota di richieste servite con risultati di riserva sotto una soglia definita.
- Integrità cataloghi: percentuale di candidati con attributi completi (prezzo, distanza, orari) sopra una soglia minima.

### **8.7.2. Qualità delle raccomandazioni**

- Pertinenza: metriche di ranking sensibili alla posizione (ad esempio su top‑K) e misure di copertura per categoria.
- Engagement: tasso di click e di accettazione dei suggerimenti, tempo alla prima azione utile.
- Diversità e serendipità: indici che misurano varietà e presenza di scoperte utili, controllando il compromesso con l’accuratezza.

### **8.7.3. Accuratezza delle stime e controllo dei costi**

- Scostamento medio assoluto tra stima e costo confermato, con breakdown per categoria.
- Tasso di overbudget: percentuale di giorni o categorie che superano la soglia.
- Efficacia degli avvisi: quota di avvisi che portano a rientrare nel budget entro un numero limitato di interazioni.

## **8.8. Casi d’uso narrativi**

### **8.8.1. Ricevere suggerimenti attinenti**

L’utente chiede idee per la serata a due passi dall’hotel e con cucina adatta. Il sistema recupera candidati aperti nella fascia oraria, privilegia quelli a distanza pedonale e con compatibilità alimentare. La lista mostra in alto opzioni con motivazioni chiare e badge di prezzo entro soglia. L’utente apre i dettagli, accetta la proposta e vede il riepilogo aggiornarsi in modo istantaneo.

### **8.8.2. Gestire budget e avvisi di spesa**

Dopo aver fissato un budget giornaliero per attività, l’utente aggiunge due esperienze a pagamento. Il sistema stima i costi e segnala che la giornata di sabato supera la soglia, proponendo un’alternativa gratuita e una seconda opzione scontata. L’utente sostituisce la seconda attività con quella gratuita: l’avviso scompare e il residuo torna positivo.

## **8.9. Considerazioni su sicurezza, privacy e responsabilità**

I suggerimenti sono personalizzati nel rispetto delle preferenze e dei consensi. Le spiegazioni aiutano a comprendere i criteri adottati, mentre controlli semplici permettono di disattivare categorie di personalizzazione o ridurne l’impatto. I dati economici sono trattati secondo principi di minimizzazione: si conserva il minimo necessario per garantire trasparenza, ripetibilità delle stime e audit dei calcoli. Le decisioni a impatto economico sono sempre reversibili e mai vincolanti senza conferma dell’utente.

## **8.10. Dipendenze e integrazioni**

- Profilo e preferenze: forniscono il contesto per il ranking e ricevono aggiornamenti dal feedback (vedi sezione 7).
- Mappa e riepilogo: visualizzano suggerimenti geolocalizzati e stato del budget con avvisi sintetici (vedi sezione 6).
- Partner esterni: offrono cataloghi e prezzi aggiornati per alloggi, attrazioni e ristorazione; la pipeline integra disponibilità e politiche per generare stime affidabili (vedi sezione 9).

## **8.11. Deliverable e criteri di accettazione**

### **8.11.1. Deliverable funzionali**

- Regole di ranking documentate: criteri, pesi iniziali, strategie di diversificazione, spiegazioni utente.
- Feature store operativo: definizioni versionate, policy di freschezza, canali offline e online, processo di materializzazione.
- UX filtri e feedback: design validato per filtri rapidi, spiegazioni e comandi di feedback in‑line.
- Budget e avvisi: impostazione budget per viaggio e categorie, stima costi per suggerimento, avvisi di superamento con proposte alternative.
- Dashboard KPI: monitor su latenza, pertinenza, engagement, diversità, accuratezza stime e tasso di overbudget.

### **8.11.2. Criteri di accettazione**

- La risposta ai suggerimenti arriva entro 2s P95 con spiegazioni leggibili e coerenti.
- Filtri di budget, distanza, tipologia e orari sono applicabili in tempo reale senza ricaricare la pagina.
- Le stime economiche sono mostrate in valuta preferita e memorizzano il tasso usato al momento del calcolo.
- Gli avvisi di superamento soglia propongono almeno un’alternativa entro budget quando disponibile.

## **Il feedback modifica la lista nella stessa sessione e aggiorna, con consenso, le preferenze rilevanti.**

## **Riferimenti**

[1] Implement two‑tower retrieval for large‑scale candidate generation - https://cloud.google.com/architecture/implement-two-tower-retrieval-large-scale-candidate-generation

[2] Recommender system overview (two‑tower and architectures) - https://en.wikipedia.org/wiki/Recommender_system

[3] Ranking metrics for recommenders (Precision, Recall, MAP, NDCG) - https://fidelity.github.io/jurity/about_reco.html

[4] Evidently AI docs — Ranking metrics - https://docs.evidentlyai.com/metrics/explainer_recsys

[5] Feast documentation — Feature store introduction - https://docs.feast.dev/

[6] Running Feast in production — how‑to - https://docs.feast.dev/master/how-to-guides/running-feast-in-production

[7] NVIDIA Merlin blog — Offline to online feature storage - https://developer.nvidia.com/blog/offline-to-online-feature-storage-for-real-time-recommendation-systems-with-nvidia-merlin/

[8] Personalized re‑ranking for diversity with DPP - https://arxiv.org/abs/2004.06390

[9] Serendipity‑oriented greedy re‑ranking - https://link.springer.com/article/10.1007/s00607-018-0687-5

[10] Feature store concepts and use cases — Feast site - https://feast.dev/

# **9. Integrazioni Partner: Booking/Airbnb e Google Maps/Places**

## **9.1. Scopo e perimetro**

Questa sezione descrive come l’applicazione integra i partner di alloggio e le piattaforme cartografiche per abilitare una ricerca fluida, un’apertura affidabile degli alloggi con tracciamento delle affiliazioni e un’esperienza di mappa completa. L’integrazione con Booking e con l’ecosistema Airbnb consente di presentare disponibilità, prezzi e politiche aggiornate e di indirizzare l’utente verso il canale di prenotazione tramite deep link con parametri affiliati. L’integrazione con Google Maps e Places copre l’autocomplete dei luoghi, il geocoding e i percorsi multimodali, con un obiettivo prestazionale stringente: latenza dell’autocomplete pari o inferiore a 150 ms al 95° percentile. Il capitolo consegna contratti API, gestione chiavi e quote, regole di rate limiting e retry, politiche di errore e fallback, oltre alla strumentazione per il tracciamento dei click‑out. Le funzionalità qui definite sostengono l’itinerario multi‑tappa , la mappa e il riepilogo compatto e alimentano i suggerimenti personalizzati .

## **9.2. Architettura d’integrazione: visione d’insieme**

L’architettura prevede uno strato di astrazione, denominato Partner Integration Service, che espone interfacce coerenti per cataloghi, disponibilità e deep link, mascherando le differenze tra i fornitori. Questo strato è responsabile di:

- tradurre le richieste applicative in chiamate ai partner,
- consolidare e normalizzare le risposte,
- applicare le regole di caching consentite, le politiche di affiliazione e la gestione robusta degli errori,
- pubblicare eventi di tracciamento per i click‑out e gli esiti delle aperture. Le integrazioni Google Maps/Places sono orchestrate da un Maps Gateway, che centralizza le chiamate a servizi di geolocalizzazione e percorrenza, gestisce sessioni e token dell’autocomplete, applica field mask e bias geografici, e fornisce un contratto unico al resto della piattaforma.

![Diagramma Mermaid 15](image15.png)

## **9.3. Ricerca e apertura alloggi con tracciamento affiliazioni**

### **9.3.1. Flusso di ricerca e normalizzazione**

Quando l’utente avvia una ricerca di alloggio, il Partner Integration Service valuta il contesto dell’itinerario (località, date, occupazione, preferenze) e interroga i partner autorizzati. Le risposte vengono normalizzate su un modello comune (identificativo fornitore, coordinate, politiche di cancellazione, valuta e prezzo totale stimato, eventuali benefit di programma). La normalizzazione preserva i campi originali in un’area “dati sorgente” per scopi di audit e chiarimenti utente (“questa tariffa richiede pagamento anticipato”).

In caso di più partner, l’ordinamento iniziale considera rilevanza e completezza delle informazioni: gli alloggi con disponibilità confermata per le date specifiche, distanza compatibile con la tappa corrente e politiche affini alle preferenze sono promossi in lista. Il ranking finale è demandato al motore di suggerimenti , che riceve il set di candidati con metadati omogenei.

### **9.3.2. Deep link con parametri affiliati**

Per i modelli “search and look” o “search and look and book” gestiti lato partner, l’apertura dell’alloggio avviene tramite deep link contenente i parametri di affiliazione e una label di attribuzione. Il Partner Integration Service costruisce l’URL finale includendo:

- identificativo affiliato richiesto dal partner,
- eventuale label per campagne o canali,
- parametri funzionali per pre‑popolare check‑in, check‑out, occupazione e valuta preferita,
- un parametro interno di tracciamento click (ad esempio clid) che consente la riconciliazione server‑side. Prima di reindirizzare, il sistema registra un evento di click‑out con l’intero contesto (ma senza dati sensibili) per alimentare KPI e report. Se il partner fornisce anche un deep link nativo per app, viene inclusa la logica di app‑link con fallback al browser nel caso l’app non sia presente sul dispositivo.

### **9.3.3. Rimandi end‑to‑end e scenari di prenotazione**

Se la prenotazione avviene sul sito/app del partner, l’applicazione non tratta i pagamenti ma mantiene il contesto per il rientro. Alla chiusura del tab o al ritorno in app, un banner consente all’utente di aggiornare manualmente lo stato (“prenotazione completata”) o di salvarla come “in attesa di conferma” nel riepilogo . Laddove disponibile, l’integrazione ordini del partner permette la riconciliazione tramite API in modalità asincrona.

## **9.4. Google Maps/Places: autocomplete, geocoding e percorsi**

### **9.4.1. Autocomplete ≤150 ms P95: strategia di performance**

Per garantire una latenza al 95° percentile entro 150 ms, la soluzione adotta un insieme di pratiche coordinate:

- uso di session token per raggruppare le interrogazioni della stessa digitazione e la successiva selezione; ogni nuova digitazione avvia un token univoco e la selezione lo chiude;
- field mask essenziali per ridurre la dimensione delle risposte ai soli campi necessari in quella fase (ad esempio id, displayName, coordinate) rimandando i dettagli solo al momento della selezione;
- bias e restrizioni geografiche coerenti con il contesto attuale (viewport della mappa o raggio dalla posizione corrente) e limitazioni per tipo di luogo quando rilevanti (ad esempio lodging, restaurant);
- debounce lato client con intervallo breve e invii solo su cambiamenti significativi del testo, evitando richieste a ogni carattere;
- cache effimera di breve durata per i suggerimenti più frequenti nella sessione e pre‑warm per ricerche popolari in area ad alta domanda. La scelta tra SDK client e web service è guidata dalla piattaforma: su mobile si preferisce l’SDK nativo per limitare hop di rete e applicare facilmente i token di sessione; su web si ottimizzano chiamate POST a endpoint moderni con header di field mask.

### **9.4.2. Geocoding e policy**

Il geocoding è invocato quando l’utente inserisce un indirizzo non disambiguato o quando dal partner si riceve un testo senza coordinate affidabili. I risultati sono mostrati sulla mappa dell’applicazione con attribuzioni richieste e vengono conservati solo nei limiti temporali consentiti. Gli identificatori stabili dei luoghi sono mantenuti per garantire coerenza tra fasi diverse del flusso (selezione, riepilogo, routing).

### **9.4.3. Percorsi multimodali e vincoli di itinerario**

I percorsi considerano modalità di viaggio differenti: guida, cammino, bicicletta, mezzi pubblici e due ruote motorizzate, quando disponibili. Le scelte sono allineate alle preferenze dell’utente e alle note operative dell’API, con avvisi espliciti per modalità in anteprima o potenzialmente incomplete. Le richieste di routing multi‑tappa si integrano con il motore dell’itinerario e aggiornano il riquadro riepilogativo con tempi stimati e eventuali avvisi di servizio.

![Diagramma Mermaid 16](image16.png)

## **9.5. Contratti API verso i partner**

### **9.5.1. Interfaccia di ricerca alloggi**

Il Partner Integration Service espone un endpoint di ricerca che accetta località o coordinate, intervallo date, occupazione, preferenze aggiuntive e vincoli di budget. La risposta è un elenco normalizzato con:

- identificativo interno e identificativo del fornitore,
- coordinate, rating e politiche salienti,
- prezzo totale stimato e valuta,
- campi per deep link e tracciamento. Le estensioni specifiche partner sono incapsulate in una sezione “provider_data” non interpretata dal livello superiore, per compatibilità futura.

### **9.5.2. Interfaccia di deep link**

Un endpoint dedicato genera e restituisce il deep link firmato o parametrizzato, includendo affiliato e label quando previsti e il parametro di tracciamento interno. Il link è emesso solo dopo la registrazione del click‑out su canale idempotente, in modo da garantire coerenza in reportistica anche in caso di ri‑tentativi.

### **9.5.3. Interfaccia di disponibilità mirata**

Per casi di aggiornamento mirato (ad esempio la scheda di un alloggio già in lista), è disponibile un endpoint che richiede un refresh di prezzo e politiche a livello di singolo identificativo. La chiamata è ottimizzata con ETag o versioni fornite dal partner, così da evitare round trip inutili.

## **9.6. Gestione chiavi, quote e sicurezza**

Le chiavi dei partner e della piattaforma cartografica sono gestite tramite vault con rotazione programmata e audit trail. Ogni applicazione usa chiavi separate, con restrizioni specifiche per piattaforma e per API abilitate. Per i servizi web si applicano restrizioni per IP e, quando disponibile, si preferisce l’autenticazione server‑to‑server. Su mobile si adotta l’attestazione dell’applicazione supportata dagli SDK nativi. La dashboard di quote per progetto consente di dimensionare limiti per singolo metodo, prevenendo blocchi generalizzati e mantenendo prevedibilità di costo.

## **9.7. Rate limiting e retry**

L’infrastruttura rispetta i limiti dei partner e applica politiche di controllo del traffico lato nostro, con code e token bucket per livellare i picchi. Gli errori 429 e le risposte temporaneamente non disponibili attivano retry con backoff esponenziale e jitter entro una finestra massima, distinguendo tra operazioni idempotenti e non idempotenti. Gli header di rate limit, quando presenti, sono interpretati per modulare la frequenza di riprova. Autenticazioni e token sono riutilizzati in cache sicura, riducendo il carico sulle endpoint di identity.

## **9.8. Gestione errori partner e trasparenza utente**

Gli errori si classificano in tre macro‑famiglie: client (richiesta incompleta o parametri non validi), partner (quote superate, endpoint in manutenzione, errore transitorio) e rete (timeout, DNS). Per gli errori transitori il sistema applica i retry previsti; in caso di fallimento, degrada il risultato: lista parziale con indicazione non invasiva del problema e suggerimento di riprovare più tardi. Per le funzionalità critiche, come l’apertura di un alloggio, si propone un’alternativa equivalente su altro partner quando disponibile. Tutte le eccezioni sono tracciate con codici normalizzati, per consentire analisi e miglioramenti puntuali.

## **9.9. Fallback e resilienza**

Il disegno prevede circuit breaker per ciascuna integrazione e un meccanismo di health score che decide l’ordine di consultazione dei partner in condizioni degradate. Per l’autocomplete, qualora il servizio principale non risponda entro una soglia molto bassa, si restituisce un suggerimento basato su storico locale della sessione e sull’ultima vista mappa, segnalando che i risultati completi sono in aggiornamento. Per percorsi e geocoding, qualora il calcolo fallisca, la mappa conserva lo stato precedente e un messaggio invita a ripetere l’operazione quando la connettività migliora.

## **9.10. Click‑out e misurazione delle affiliazioni**

Ogni apertura verso un partner genera un evento click‑out con: timestamp, partner, tipo risorsa, parametri di campagna o label, contesto dell’itinerario privo di dati personali, e il parametro interno di correlazione. L’evento viene inviato sincronicamente a bassa latenza e replicato in modo asincrono verso il data warehouse per la riconciliazione. Il deep link include i parametri richiesti dal partner per attribuzione; all’utente non viene chiesto alcun dato aggiuntivo. Lato report, un job giornaliero confronta i click‑out con le prenotazioni aggregate restituite dai partner, stimando i tassi di conversione e individuando eventuali anomalie di attribuzione.

## **9.11. Mappa, itinerario e suggerimenti: collegamenti operativi**

Le coordinate e i place ID forniti dai partner sono riconciliati con i place ID della piattaforma cartografica, così da garantire un rendering corretto su mappa e un routing affidabile. Le proposte del motore di suggerimenti sfruttano queste riconciliazioni per collegare ogni card all’azione di apertura partner e per calcolare distanze e tempi reali fra le tappe . Il riepilogo compatto mostra badge di percorso e un pulsante di apertura rapida dell’alloggio selezionato, con lo stesso deep link tracciato del flusso principale .

## **9.12. KPI e controlli di qualità**

- Autocomplete: latenza P95 ≤150 ms; tasso di time‑out pressoché nullo in connessione normale; accuratezza percepita in base a selezione entro i primi tre suggerimenti.
- Deep link: tasso di errore post‑click inferiore allo 0,5%; coerenza dei parametri affiliati nei log partner e interni; incidenza di rimbalzi entro soglie minime.
- Quote e stabilità: assenza di superamenti strutturali; efficacia del livellamento dei picchi; riduzione progressiva dei retry per partner.
- Percorsi: tempo medio di risposta coerente con vista mappa; presenza di avvisi per modalità in anteprima laddove richiesto.
- Disponibilità e prezzi: copertura aggiornata degli alloggi nelle finestre di ricerca più usate; percentuale di card con informazioni complete e coerenti tra lista e dettaglio.

## **9.13. Deliverable e criteri di accettazione**

### **9.13.1. Deliverable**

- Contratti API documentati per ricerca alloggi, disponibilità mirata e generazione di deep link con parametri affiliati e label.
- Maps Gateway con gestione di session token, field mask, bias geografici e fallback per autocomplete, geocoding e routing.
- Gestione chiavi e quote con restrizioni per piattaforma e per API, rotazione e auditabilità.
- Politiche di rate limiting e retry con backoff esponenziale con jitter, separate per operazioni idempotenti e non idempotenti.
- Strumentazione di tracciamento click‑out, correlazione server‑side e pipeline di riconciliazione con report giornalieri.

### **9.13.2. Criteri di accettazione**

- L’autocomplete risponde entro 150 ms P95 con session token correttamente gestiti e field mask minimali.
- Le aperture verso alloggi includono parametri affiliati e label e generano eventi di click‑out idempotenti.
- Superamenti di quota o 429 vengono gestiti con backoff e senza impatto percepibile oltre messaggi non invasivi.
- Il routing multimodale è disponibile con avvisi contestuali per modalità con copertura parziale.

## **Le politiche di caching rispettano i limiti temporali previsti e conservano a lungo termine solo gli identificatori consentiti.**

## **Riferimenti**

[1] Places API — Session tokens e Autocomplete New - https://developers.google.com/maps/documentation/places/web-service/place-session-tokens

[2] Places SDK for Android — Autocomplete e sessioni - https://developers.google.com/maps/documentation/places/android-sdk/autocomplete

[3] Places API — Autocomplete New e FieldMask - https://developers.google.com/maps/documentation/places/web-service/place-autocomplete

[4] Places API — Choose fields to return - https://developers.google.com/maps/documentation/places/web-service/choose-fields

[5] Maps Platform — Security best practices per API keys - https://developers.google.com/maps/api-security-best-practices

[6] Routes API — Travel mode e veicoli supportati - https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelMode

[7] Routes API — Available vehicle types - https://developers.google.com/maps/documentation/routes/vehicles

[8] Geocoding API — Policies e caching dei dati - https://developers.google.com/maps/documentation/geocoding/policies

[9] Google Maps Platform — Service Specific Terms - https://cloud.google.com/maps-platform/terms/maps-service-terms/index-20231025

[10] Booking Demand API — Labels e attribuzione - https://developers.booking.com/demand/docs/orders-api/labels-attributions

[11] Booking Demand API — Deep link con affiliate id - https://developers.booking.com/demand/docs/migration-guide/changes-in-v3

[12] Booking Demand API — Rate limiting e backoff - https://developers.booking.com/demand/docs/development-guide/rate-limiting

[13] Booking Demand API — Error handling e retry - https://developers.booking.com/demand/docs/development-guide/error-handling

[14] Airbnb — Preferred Software Partner Program 2025 - https://news.airbnb.com/announcing-our-2025-preferred-software-partners/

[15] Airbnb Help — API Terms e Deep Links, rate limits e modifiche - https://www.airbnb.com/help/article/3418

[16] Airbnb Help — Host Affiliate Pilot Program Terms 2025 - https://www.airbnb.com/help/article/3873

# **10. Notifiche & Gestione Documenti**

## **10.1. Obiettivi, valore e ambito**

Le notifiche e la gestione documentale costituiscono l’asse operativo che collega l’itinerario , la mappa e il riepilogo compatto e il profilo utente con preferenze alla sicurezza e alla privacy dei dati . L’obiettivo è offrire promemoria puntuali per check‑in e check‑out, scadenze e adempimenti documentali, mantenendo un tasso di consegna non inferiore al 95% e consentendo opt‑in/opt‑out per categoria. In parallelo, la piattaforma deve custodire in modo sicuro documenti sensibili come passaporti, visti e certificazioni vaccinali, applicando principi di minimizzazione, cifratura e controllo degli accessi.

Il capitolo definisce una policy di scheduling “time‑zone aware”, le quiet hours configurabili a livello profilo, i template di notifica, i modelli dati per i documenti e la relativa sicurezza. Viene inoltre descritto un calendario opzionale in formato ICS, utile per sincronizzare scadenze e promemoria con applicazioni esterne. La sezione si conclude con workflow narrativi, KPI e criteri di accettazione.

## **10.2. Modello di notifica e canali**

### **10.2.1. Categorie, consensi e preferenze**

Le notifiche sono organizzate in categorie indipendenti, ognuna abilitabile o disabilitabile dall’utente dal proprio profilo . Le categorie minime comprendono: “Viaggio” (check‑in, check‑out, variazioni itinerario), “Documenti” (scadenze passaporto e visti, promemoria per caricamento documenti), “Salute” (vaccinazioni e certificati) e “Servizio” (sicurezza account, conferme tecniche). Ogni categoria supporta opt‑in/opt‑out granulare per canale (push, email; eventuale SMS dove previsto), lingua dei contenuti, finestra oraria di silenzio e livello di urgenza.

Le preferenze sono versionate e tracciate, così da garantire una cronologia di consensi e revoche. In caso di modifiche legislative o cambi del perimetro informativo, il sistema richiede una riconferma esplicita, sospendendo temporaneamente l’invio per quella categoria fino all’accettazione.

### **10.2.2. Canali e delivery**

La piattaforma invia notifiche push per i contenuti time‑critical e usa la posta elettronica per promemoria programmati, allegati e riepiloghi. Le push distinguono fra contenuti visibili all’utente e aggiornamenti silenziosi per la sincronizzazione locale. La priorità del messaggio è impostata in coerenza con il comportamento atteso: i promemoria di check‑in con scadenza ravvicinata hanno priorità immediata, mentre aggiornamenti non urgenti usano una priorità differita per preservare la batteria dei dispositivi. Le email adottano politiche di ritrasmissione e tracciamento soft‑bounce, con deduplicazione per evitare invii ripetuti in breve tempo.

Il tasso di consegna è misurato per canale, categoria e piattaforma, calcolando gli eventi “consegnato” e “aperto” quando disponibili e integrandoli con segnali applicativi (aperture in‑app indotte dalla notifica). La pipeline di metrica correla ogni invio a campagne e viaggi, supportando analisi per area geografica e fascia oraria.

## **10.3. Policy di scheduling time‑zone aware e quiet hours**

### **10.3.1. Normalizzazione dei fusi orari**

Ogni promemoria è schedulato in base al fuso orario effettivo dell’utente nel momento della consegna. Il sistema mantiene per ciascun viaggio un fuso “primario” derivato dalla località della tappa corrente e, quando il dispositivo espone un fuso differente, privilegia il fuso del dispositivo per comunicazioni di servizio a meno di override espliciti. La gestione corretta dell’ora legale è garantita da definizioni di fuso orario aggiornate, applicate sia agli eventi in calendario sia agli orari di invio.

### **10.3.2. Quiet hours e finestre di invio**

Le quiet hours evitano interruzioni in orari sensibili. L’utente può configurare uno o più intervalli di silenzio, anche differenziati per giorno della settimana. Il motore di scheduling sposta in avanti i promemoria non urgenti che cadono nelle quiet hours, mantenendo invece gli allarmi critici quando la finestra residua alla scadenza è inferiore a una soglia configurabile (ad esempio, check‑in entro 90 minuti). In presenza di destinazioni multistadio, la piattaforma ricalcola dinamicamente l’orario di invio quando cambia l’orario locale stimato.

### **10.3.3. Deduplicazione, escalation e TTL**

Per evitare tempeste di notifiche, l’orchestratore usa chiavi di idempotenza a livello di evento (viaggio, tappa, scadenza) e deduplica le richieste multiple ravvicinate. Se un promemoria critico non viene aperto entro un intervallo minimo, la piattaforma valuta un’escalation su canale alternativo, rispettando le quiet hours. Ogni messaggio ha un TTL coerente con l’utilità del contenuto: se il dispositivo torna raggiungibile oltre il TTL, la notifica viene scartata e sostituita, se serve, da un riepilogo aggiornato in‑app.

![Diagramma Mermaid 17](image17.png)

## **10.4. Template di notifica**

I template sono localizzati, accessibili e coerenti con il tono dell’applicazione. Ogni template contiene un titolo breve, un corpo con variabili contestuali (date formattate localmente, città, nome struttura) e un’azione primaria chiara. Per i promemoria di documento si privilegiano messaggi semplici e verificabili, con link diretto alla sezione “Documenti” o alla tappa interessata.

| **Categoria** | **Trigger operativo** | **Titolo esempio** | **Corpo esempio** | **Azione primaria** |
| --- | --- | --- | --- | --- |
| **Viaggio** | Check‑in a T‑3 h | È ora di fare il check‑in | Hai un check‑in oggi alle 18:00 a Roma. Apri per completare in pochi passaggi. | Apri tappa |
| **Viaggio** | Check‑out a T‑12 h | Promemoria check‑out | Il check‑out è domani alle 10:00. Vuoi impostare un allarme in calendario? | Aggiungi al calendario |
| **Documenti** | Passaporto in scadenza a 6 mesi | Verifica scadenza passaporto | Il tuo passaporto scade fra 6 mesi. Alcuni Paesi richiedono validità residua. | Apri Documenti |
| **Documenti** | Visto richiesto per Paese di destinazione | Potrebbe servire un visto | Per l’ingresso in Giappone potrebbero servire documenti aggiuntivi. | Verifica requisiti |
| **Salute** | Vaccinazione consigliata per itinerario | Controlla le vaccinazioni | Prima del viaggio a Nairobi verifica le vaccinazioni raccomandate. | Apri Documenti |

I link contestuali rimandano all’azione più utile: completare il check‑in, impostare un avviso, caricare un documento o consultare le regole.

## **10.5. Calendario ICS opzionale**

### **10.5.1. Struttura e compatibilità**

L’esportazione ICS consente di sincronizzare scadenze e promemoria con i calendari esterni. Ogni feed include eventi di tipo VEVENT con identificatori univoci e componenti di fuso orario VTIMEZONE. Per gli avvisi vengono utilizzati allarmi VALARM con trigger relativi (ad esempio, 24 ore prima e 2 ore prima), così da riprodurre la stessa esperienza dei promemoria. Il file ICS è pubblicato con metodo di pubblicazione standard, aggiornabile con lo stesso UID per evitare duplicazioni.

### **10.5.2. Sicurezza del feed**

Il feed ICS è generato per singolo utente con URL segreto e revocabile. Il contenuto rispetta il principio di minimizzazione: titoli neutrali, nessun dato sensibile e solo i riferimenti strettamente necessari (date, città, eventuali note operative). La revoca invalida il feed precedente e ne rigenera uno nuovo, con propagazione delle modifiche ai dispositivi collegati.

### **10.5.3. Mapping con l’itinerario**

Ogni evento ICS punta alla tappa o al documento correlato, garantendo coerenza temporale con il fuso della destinazione. In caso di variazioni dell’itinerario, gli eventi sono aggiornati con lo stesso UID; i client compatibili propagano la modifica senza creare elementi duplicati.

## **10.6. Gestione documenti sensibili**

### **10.6.1. Tipologie e casi d’uso**

La piattaforma gestisce tre macro‑tipologie: documenti di identità e viaggio (passaporti), autorizzazioni di ingresso (visti) e documentazione sanitaria di viaggio (vaccinazioni e certificazioni). I casi d’uso prevalenti sono: verifica della validità residua del passaporto rispetto alle regole di ingresso, promemoria per l’ottenimento di un visto per Paese e scopo del viaggio, e pianificazione delle vaccinazioni consigliate o richieste in funzione dell’itinerario.

### **10.6.2. Modello dati e sicurezza**

I dati sono separati tra metadati minimizzati e contenuti cifrati dei documenti. I metadati includono tipo, Paese emittente o di destinazione, date di rilascio e scadenza, stato di verifica e riferimenti all’utente. I contenuti (immagini fronte/retro, PDF o certificati digitali) sono cifrati a livello di campo con gestione delle chiavi in un vault e rotazione programmata. Gli accessi sono governati da controlli basati su attributi (ruolo applicativo, ownership del documento, contesto della richiesta) e registrati in audit trail immutabile. È previsto il versioning dei documenti con possibilità di rollback e marcatura della versione verificata.

![Diagramma Mermaid 18](image18.png)

### **10.6.3. Verifica e calcolo scadenze**

La verifica considera specifiche tecniche dei documenti di viaggio e prassi di frontiera. Il sistema calcola la validità residua del passaporto rispetto a soglie comuni e segnala quando la validità scende sotto i sei mesi o altre soglie configurabili. Per i visti, le regole di ingresso sono modellate come vincoli per Paese e scopo del viaggio, con anticipo raccomandato per avviare la pratica. Le vaccinazioni sono gestite come requisiti informativi: l’utente carica attestazioni o inserisce date di somministrazione, e il sistema avvisa in prossimità di richiami o in presenza di destinazioni con raccomandazioni specifiche.

## **10.7. Repository regole Paese/Viaggio**

Le regole Paese sono mantenute in un repository versionato, con fonti ufficiali periodicamente sincronizzate e processi di quality assurance. Ogni regola include: Paese di destinazione, durata minima di validità del passaporto, necessità di visto in base alla nazionalità e allo scopo del viaggio, eventuali requisiti sanitari e l’orizzonte temporale suggerito per l’azione (anticipo in giorni). Il motore di raccomandazioni utilizza tali regole per generare promemoria proattivi, evitando allarmi superflui quando l’itinerario non implica attraversamenti soggetti a restrizioni.

## **10.8. Workflow narrativi**

### **10.8.1. Promemoria di check‑in puntuale**

Due ore prima del check‑in, l’orchestratore verifica fuso orario, quiet hours e ultima interazione dell’utente. Se non esistono blocchi, invia una push con priorità immediata e un link alla tappa. Se la notifica non viene aperta entro 20 minuti e non ricadono quiet hours, invia un secondo promemoria con priorità normale. Qualora il dispositivo fosse offline oltre il TTL, la sezione viaggio mostra un badge di attenzione, evitando invii tardivi inutili.

### **10.8.2. Tenere sotto controllo i documenti**

Tre scenari tipici si susseguono in modo naturale. Primo, l’utente registra il passaporto; il sistema calcola la validità residua e pianifica promemoria a sei mesi e a tre mesi dalla scadenza. Secondo, l’utente crea un viaggio verso un Paese che richiede un visto; il sistema propone una checklist sintetica, fissa un promemoria all’anticipo raccomandato e offre collegamenti utili. Terzo, in prossimità della partenza verso una destinazione con vaccinazioni consigliate, l’utente carica un certificato e riceve conferma di congruità; se manca documentazione, un promemoria “gentile” appare 10 giorni prima.

### **10.8.3. Dalle regole al calendario**

Quando l’utente abilita il calendario, il sistema pubblica eventi ICS con VTIMEZONE coerenti. Ogni scadenza rilevante aggiunge due allarmi standard: 24 ore e 2 ore prima della scadenza, che l’utente può modificare dal proprio calendario. Le modifiche all’itinerario aggiornano automaticamente gli eventi correlati mantenendo lo stesso UID.

## **10.9. Resilienza, errori e riduzione dei falsi positivi**

Per prevenire errori percepiti, le scadenze sono calcolate con tolleranze prudenti e le notifiche critiche richiedono la conferma del contesto prima dell’invio (per esempio, ricalcolo del fuso e dei giorni lavorativi del Paese). I guasti di consegna sono gestiti con retry esponenziali entro una finestra massima; oltre tale finestra, si preferisce un messaggio in‑app e un riepilogo via email. Gli errori di parsing dei documenti non bloccano l’utente: l’interfaccia suggerisce le aree da ritagliare o riprendere, rimandando l’estrazione automatica a una coda asincrona.

## **10.10. Monitoraggio e KPI**

Il controllo qualità si fonda su un set di indicatori coerenti con gli obiettivi del capitolo:

- Tasso di consegna per categoria e piattaforma non inferiore al 95% nel periodo di osservazione.
- Latenza media di consegna push inferiore a 5 secondi in condizioni standard; percentuale di aperture entro la prima ora come proxy di utilità.
- Accuratezza dei promemoria documentali misurata come rapporto fra promemoria “utili” e “non pertinenti”, con obiettivo di riduzione dei falsi positivi trimestre su trimestre.
- Aderenza alle quiet hours e assenza di invii critici in orario silenzioso, salvo override esplicito.

## **10.11. Sicurezza, privacy e data retention**

Il trattamento dei documenti sensibili e delle preferenze di notifica avviene nel rispetto dei principi di minimizzazione e limitazione delle finalità. I contenuti sono cifrati a riposo e in transito, con separazione dei metadati, rotating keys e audit sugli accessi. Le immagini o i certificati sono conservati per il tempo strettamente necessario: i documenti di viaggio sono soggetti a scadenziario e rinnovo, i visti e le attestazioni sanitarie possono essere rimossi automaticamente o su richiesta, con tracciamento della cancellazione. Il profilo dell’utente controlla consenso e finalità d’uso; la sezione sicurezza e privacy dettaglia basi giuridiche, diritti dell’interessato e meccanismi di revoca.

## **10.12. Deliverable**

- Policy completa di scheduling time‑zone aware, con gestione di quiet hours, priorità, TTL e deduplicazione.
- Libreria di template di notifica localizzati per Viaggio, Documenti e Salute, con linee guida di tono e accessibilità.
- Modelli dati per documenti, versioni, regole Paese, notifiche e sottoscrizioni; schema di cifratura a livello di campo e piano di rotazione chiavi.
- Calendario ICS opzionale con esempi di VEVENT, VTIMEZONE e VALARM e feed per utente con URL segreto.
- Report e dashboard di KPI su consegna, aperture, utilità e rispetto delle quiet hours.

## **10.13. Criteri di accettazione**

- Le notifiche di check‑in sono consegnate in orario corretto rispetto al fuso del dispositivo o della tappa, con priorità adeguata e rispetto delle quiet hours salvo casi critici.
- Il tasso di consegna misurato supera stabilmente il 95% per categoria, con deduplicazione verificabile.
- I promemoria documentali scattano ai sei e tre mesi dalla scadenza del passaporto o secondo regole Paese, con possibilità di personalizzare le soglie.
- L’esportazione ICS produce eventi con UID stabili e allarmi configurati, correttamente aggiornati a fronte di modifiche dell’itinerario.

## **Il caricamento dei documenti avviene con cifratura a livello di campo, controllo degli accessi per attributi e audit trail.**

## **Riferimenti**

[1] RFC 5545 iCalendar — Specifica ICS e componenti VEVENT, VTIMEZONE, VALARM - https://www.rfc-editor.org/rfc/rfc5545

[2] iCalendar — Time Zone Component (VTIMEZONE) - https://icalendar.org/iCalendar-RFC-5545/3-6-5-time-zone-component.html

[3] Firebase Cloud Messaging — Priorità dei messaggi e best practice di consegna - https://firebase.google.com/docs/cloud-messaging/customize-messages/setting-message-priority

[4] Apple Developer — APNs: intestazioni di priorità ed expirations - https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html

[5] ICAO Doc 9303 — Serie e riferimenti su passaporti e visti machine readable - https://www.icao.int/publications/doc-series/doc-9303

[6] ICAO Doc 9303 — Programma MRTD e specifiche tecniche - https://www.icao.int/mrtd/

[7] Reuters Legal — Panorama leggi statali USA su dati sanitari dei consumatori (CHD Laws) - https://www.reuters.com/legal/litigation/hipaa-free-zone-think-again-surprising-state-laws-regulating-collection-health-2024-10-25/

[8] HHS — Chiarimenti sull’ambito di applicazione HIPAA e stato vaccinale - https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-covid-19-vaccination-workplace/index.html

# **11. Condivisione & Collaborazione**

## **11.1. Visione, valore e perimetro**

La condivisione e la collaborazione sono progettate per abilitare il lavoro di gruppo sull’itinerario, sui documenti e sulle note di viaggio, senza compromettere sicurezza, integrità dei dati e tracciabilità. Il modello prevede condivisione sicura tramite link firmati e controlli di accesso (ACL), inviti indirizzati a persone e gruppi, presenza in tempo reale con indicatori di attività e un meccanismo di risoluzione dei conflitti che rende l’esperienza di editing simultaneo naturale e affidabile. L’obiettivo prestazionale è offrire un feedback percepito come immediato e garantire una latenza P95 inferiore a 300 ms per le operazioni collaborative più comuni.

Questo capitolo definisce in modo narrativo i flussi di invito e accettazione, il modello permessi, le policy di scadenza e revoca dei link, la scelta architetturale fra CRDT e OT per l’editing concorrente, nonché il registro degli accessi e delle modifiche con attribuzione puntuale all’autore. I collegamenti tecnici con la sincronizzazione dei dati sono approfonditi nel capitolo successivo , mentre i presidi di sicurezza, cifratura e privacy sono descritti nel capitolo dedicato .

## **11.2. Modello di condivisione: link firmati e ACL**

### **11.2.1. Link firmati: struttura, durata e revoca**

La condivisione tramite link firmati consente l’accesso a una risorsa senza necessità di account preventivamente registrato, entro i limiti temporali e di ambito codificati nella firma. Ogni link incorpora: identificativo della risorsa, ambito del permesso (sola lettura, commento, modifica), scadenza, eventuali vincoli di origine (IP o dominio) e una firma HMAC. Per ridurre la superficie di rischio, la durata è minima per difetto (ad esempio 24–72 ore) e rinnovabile solo da chi possiede privilegi adeguati. In contesti che richiedono revoca granulare istantanea, il link firmato è validato server‑side contro un registro di emissione e revoche, evitando l’unico meccanismo globale della rotazione chiavi. Sono disponibili opzioni di hardening: passphrase del link, limitazione su numero di accessi, contatori di utilizzo e watermarker dinamici sui contenuti esportabili.

La protezione contro l’enumerazione di link si ottiene combinando entropia elevata del token, rate limiting e rilevamento di pattern anomali. Il token del link possiede un’entropia ben superiore alla soglia minima adottata per gli identificativi di sessione, così da rendere impraticabile l’indovinamento per tentativi. A parità di sicurezza, il sistema preferisce link stateless solo per contenuti davvero pubblicabili e link stateful per risorse sensibili, così da permettere revoca e audit dettagliati. Tutti gli accessi tramite link sono registrati con timestamp, indirizzo IP, user agent e contesto di provenienza.

### **11.2.2. ACL e ruoli: dal singolo alla squadra**

Le ACL definiscono chi può fare cosa su ogni risorsa condivisa. I ruoli minimi proposti sono: Proprietario (tutti i diritti), Editor (crea e modifica contenuti), Commentatore (annota senza alterare i contenuti), Lettore (visualizza). I permessi sono valutati a più livelli: globale (workspace), cartella, documento/itinerario e sotto‑elemento, con ereditarietà esplicita e “break inheritance” ove serve isolare elementi specifici. Il modello supporta sia condivisione nominativa verso singole identità sia condivisione verso gruppi o liste dinamiche, oltre alla condivisione via link firmato quando occorre coinvolgere soggetti esterni senza account.

Per i casi d’uso avanzati, la piattaforma integra criteri basati su attributi: ad esempio, consentire l’accesso in modifica solo ai membri di un team con un certo attributo e nel perimetro temporale del viaggio. L’autorizzazione risulta così combinare immediatezza operativa delle ACL con la flessibilità di policy che tengono conto di ruolo, risorsa e condizioni ambientali (luogo, tempo, canale).

## **11.3. Flussi di invito e accettazione**

### **11.3.1. Inviti nominativi**

Quando un utente desidera collaborare con una persona specifica, inserisce l’indirizzo email, seleziona il ruolo e, facoltativamente, imposta scadenza e messaggio. Il sistema genera un invito firmato con durata breve e associa l’identità invitata alla risorsa con stato “in attesa”. All’apertura dell’invito, l’utente autenticato conferma l’associazione; se l’identità non esiste, viene creato un profilo minimo. L’invito scade automaticamente al termine o alla revoca del mittente, con messaggi chiari per evitare ambiguità.

### **11.3.2. Condivisione tramite link**

Per la collaborazione aperta a più interlocutori esterni, l’utente genera un link firmato con ambito definito e data di scadenza. L’interfaccia propone impostazioni sicure per difetto (validità breve, sola lettura) e avvisa quando si selezionano configurazioni più permissive. In caso di link esposti pubblicamente, il sistema applica protezioni contro automazione e scraping e mantiene un contatore di accessi distinti. La revoca invalida immediatamente il link e, se previsto, converte gli accessi attivi in sessioni di sola lettura fino alla chiusura.

![Diagramma Mermaid 19](image19.png)

## **11.4. Collaborazione real‑time: canale, presenza e conflitti**

### **11.4.1. Canale real‑time e presenza**

La collaborazione simultanea si basa su un canale full‑duplex stabile, con riconciliazione server‑side e heartbeat leggeri. Ogni client mantiene uno stato di presenza minimale (online, inattivo, cursore/selection), trasmesso in modo differenziale per ridurre il traffico. Gli indicatori mostrano in tempo reale chi sta scrivendo, selezionando o commentando, con colori e avatar coerenti. Alla perdita del canale, il client degrada in modalità offline, accumula operazioni locali e tenta il reinvio con back‑off e ripristino della presenza.

Il budget prestazionale stabilisce per le operazioni interattive una latenza P95 inferiore a 300 ms end‑to‑end, includendo serializzazione, trasmissione, applicazione locale e eco remoto. Tale soglia mantiene la percezione di immediatezza nelle azioni collaborative, evitando scatti nei cursori e nelle selezioni condivise. Il sistema registra tempi di round‑trip e congestione per nodo, così da applicare adattamenti dinamici (batching leggero, coalescenza operazioni) quando servono.

### **11.4.2. CRDT e OT: criteri di scelta**

Per l’editing simultaneo occorre un meccanismo che garantisca convergenza del contenuto a fronte di aggiornamenti concorrenti. Due approcci affermati sono i CRDT, che incorporano la risoluzione dei conflitti nel tipo di dato replicato e convergono senza coordinamento globale, e l’Operational Transformation (OT), che applica regole di trasformazione alle operazioni per ottenere lo stesso risultato su tutte le repliche. La scelta dipende dalla natura dei contenuti e dai requisiti non funzionali.

Se il dominio prevede editing ricco, modalità offline estese e topologie che talvolta eludono il server centrale, i CRDT offrono un modello naturale, tollerante a ritardi e partizioni. Occorre però considerare gli overhead di metadati e le strategie di compattazione e garbage collection per documenti di lunga durata. Se invece il focus è un testo lineare o blocchi con ordinamento stretto, con un coordinatore centrale che gestisce l’ordine logico, OT fornisce prestazioni efficienti e una cronologia operazionale spesso più leggibile per auditing e “suggestion mode”. In entrambi i casi, la piattaforma espone un livello uniforme di eventi (inserimento, cancellazione, modifica attributi) e integra regole dominio‑specifiche per comporre conflitti non testuali (es. allegati, tag, stati).

### **11.4.3. Risoluzione conflitti e coerenza percepita**

Le scelte di merge privilegiano la preservazione dell’intento dell’autore e la stabilità visiva. Per i conflitti su proprietà scalari si applica una politica deterministica (timestamp logico o vettoriale) con preferenze configurabili; per sezioni strutturate si preferisce un merge a grana fine che mantenga contributi paralleli quando possibile. Il client anticipa l’esito del merge con applicazione ottimistica e riconcilia alla conferma, minimizzando flicker o “salti” del cursore.

![Diagramma Mermaid 20](image20.png)

## **11.5. Sicurezza dei link e protezione dall’enumerazione**

Ogni link di condivisione utilizza token lunghi con alta entropia, generati da CSPRNG e firmati. La durata è limitata allo stretto necessario, con raccomandazioni esplicite in interfaccia e possibilità di revoca immediata. Gli endpoint che validano i link applicano limiti di frequenza e risposte costanti per evitare side‑channel di timing. Il registro accessi rileva tentativi ripetuti falliti e può sospendere automaticamente il link o richiedere un ulteriore fattore (ad esempio, passphrase del link). Quando appropriato, si applicano vincoli di referer o di origine e si evita l’uso indiscriminato di politiche permissive tra origini.

## **11.6. Modello dati e audit delle azioni**

### **11.6.1. Entità principali**

Il modello dati separa le informazioni di autorizzazione dagli oggetti collaborativi, rendendo chiaro cosa è stato condiviso, con chi, come e quando. Gli elementi chiave includono: Risorsa (itinerario, documento, blocco), ACL e ruoli, LinkCondiviso (token, scadenza, ambito), Invito (stato, scadenza), SessioneCollaborativa (partecipanti, latenza), RegistroAccessi (aperture link, letture, modifiche), RegistroModifiche (delta applicati, autore, versione).

![Diagramma Mermaid 21](image21.png)

### **11.6.2. Audit immutabile e attribuzione autore**

Il registro delle azioni è append‑only e tamper‑evident: ogni evento è hashato e concatenato al precedente, così da poter dimostrare alterazioni eventuali. Le voci contengono identità applicativa dell’autore, orari normalizzati, versione della risorsa e contesto. L’accesso ai log è a profilo ristretto; i dati sensibili sono minimizzati o pseudonimizzati quando non necessari alla finalità di controllo. La piattaforma fornisce verifiche periodiche di integrità e report di conformità, in particolare per eventi di condivisione, revoca, accesso e modifica.

## **11.7. Esperienze d’uso e scenari narrativi**

### **11.7.1. Condividere un itinerario in sicurezza**

Francesca sta definendo un viaggio multi‑tappa. Dalla vista itinerario sceglie “Condividi”, seleziona due colleghi come Editor e genera un link di sola lettura per l’agenzia. Il sistema suggerisce validità di 48 ore e attiva un watermark sui PDF esportabili. Il link viene aperto tre volte; l’audit registra gli accessi e segnala un picco sospetto di richieste fallite da un indirizzo anonimo, per cui il link viene sospeso automaticamente. Francesca riceve un avviso, verifica che l’agenzia ha già acquisito le informazioni e chiude definitivamente il link.

### **11.7.2. Collaborare in tempo reale**

Marco e Giulia aprono contemporaneamente la stessa bozza di note di viaggio. Ognuno vede l’avatar e il cursore dell’altro. Marco inserisce un elenco di ristoranti, Giulia corregge una data: le operazioni arrivano a destinazione in meno di 300 ms e le modifiche convergono senza sforzo. Un attimo di disconnessione non interrompe il flusso: il client di Giulia opera in locale e rimanda il pacchetto alla riconnessione; il server ricompone lo stato, evitando salti visivi. Il registro modifiche attribuisce con precisione gli interventi.

## **11.8. Prestazioni, affidabilità e resilienza**

Il servizio di collaborazione monitora la latenza end‑to‑end, il tasso di perdita di messaggi, la percentuale di ricollegamenti e il carico per documento. Quando la rete peggiora, il sistema adotta il batching intelligente delle operazioni e riduce la frequenza degli aggiornamenti di presenza, preservando la fluidità dell’editing. I meccanismi di backpressure informano i client quando occorre rallentare l’invio. La scalabilità segue un modello orizzontale: le sessioni sono distribuite tra nodi di frontiera con sticky routing e uno stato effimero di presenza, mentre i contenuti persistenti si sincronizzano tramite il motore CRDT/OT e storage durabile.

## **11.9. Policy di scadenza e revoca**

Le policy impongono scadenze predefinite differenziate per ambito (ad esempio, 24–72 ore per link esterni; 7–30 giorni per collaborazioni continuative), con eccezioni motivate e tracciate. Le revoche possono essere puntuali (link o invito specifico), di ambito (tutti i link di una risorsa) o globali (rotazione delle chiavi di firma). La revoca immediata ha effetto su nuovi accessi e, quando possibile, invalida anche le sessioni già aperte riportandole in sola lettura.

## **11.10. Privacy e minimizzazione dei dati**

La condivisione avviene secondo il principio di minima esposizione: i link trasportano solo l’essenziale, i dati personali sono ridotti e i log contengono il minimo indispensabile a garantire sicurezza e responsabilità. L’utente dispone di una vista chiara delle condivisioni attive e può revocarle in autonomia. Le implicazioni normative e le basi giuridiche del trattamento sono trattate in dettaglio nella sezione dedicata alla sicurezza e alla privacy .

## **11.11. KPI e criteri di accettazione**

I risultati attesi sono misurati con indicatori chiari: latenza P95 del canale collaborativo sotto i 300 ms durante l’editing; tasso di successo degli inviti superiore al 98% senza errori di consegna; tasso di revoca efficace entro 60 secondi; assenza di incidenti di enumerazione di link; coerenza del registro modifiche e accessi con verifica di integrità periodica. Il collaudo funzionale include scenari di editing simultaneo, offline breve con riconciliazione, collisione su medesimo paragrafo o blocco e revoca “a caldo” di link condivisi.

## **11.12. Deliverable del capitolo**

- Modello permessi con ruoli, ACL e attributi, regole di ereditarietà e interruzione dell’ereditarietà.
- Policy di scadenza/revoca per inviti e link firmati, con raccomandazioni sicure per difetto.
- Flussi di invito nominativo e condivisione via link, incluse schermate di conferma e avvisi.
- Canale real‑time con presenza e algoritmo di risoluzione conflitti (CRDT o OT) motivato rispetto ai requisiti.

## **Registro accessi e modifiche con autore, append‑only e verifiche di integrità con hash chaining.**

## **Riferimenti**

[1] Use signed URLs - Amazon CloudFront - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html

[2] Use signed URLs | Cloud CDN - https://cloud.google.com/cdn/docs/using-signed-urls

[3] OWASP Cheat Sheet Series — Session Management: requisiti di entropia dei token - https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html

[4] OWASP Top 10 2025 RC1 — Broken Access Control: force browsing e prevenzione - https://owasp.org/Top10/ar/2025/A01_2025-Broken_Access_Control/

[5] NIST SP 800‑162 — Guide to Attribute Based Access Control (ABAC) - https://csrc.nist.gov/pubs/sp/800/162/upd2/final

[6] Communications of the ACM — Research for Practice: Convergence (OT e CRDT) - https://cacm.acm.org/practice/research-for-practice-convergence/

[7] Collabs: A Flexible and Performant CRDT Collaboration Framework - https://arxiv.org/abs/2212.02618

[8] Collaborative Text Editing with Eg‑walker - https://arxiv.org/abs/2409.14252

[9] Immutable Audit Logs: principi e tecniche di tamper‑evidence - https://hoop.dev/blog/immutable-audit-logs-processing-transparency/

[10] Tamperproofing con Merkle Trees per audit log - https://pangea.cloud/docs/audit/about-tamperproofing

[11] UX response time thresholds e percezione dell’immediatezza - https://www.fundament.design/p/response-time-in-ux

# **12. Offline & Sincronizzazione**

## **12.1. Obiettivi e principi di progettazione**

L’esperienza offline nasce per garantire continuità d’uso in mobilità e integrità del dato alla riconnessione. L’utente deve poter consultare l’ultimo stato consistente dell’itinerario, delle note e dei documenti di viaggio anche senza rete, con indicatori chiari su cosa è aggiornato e cosa è in attesa di sincronizzazione. Il sistema adotta un approccio cache‑first per massimizzare la reattività, ma integra meccanismi di invalidazione e aggiornamento in background per preservare la freschezza dei dati quando la connettività lo consente.

La sincronizzazione multi‑dispositivo concilia modifiche concorrenti mediante un motore di merge granulare, predisposto per scenari sia testuali sia strutturati. In presenza di conflitti, la piattaforma privilegia la preservazione dell’intento dell’autore e la convergenza rapida, con una user experience che mette in evidenza i punti toccati da più utenti. Le scelte architetturali sono coerenti con la collaborazione in tempo reale e con la mappa itinerario e i riepiloghi compatti .

## **12.2. Strategia cache‑first e criteri di freschezza**

Il modello cache‑first distingue tre classi di contenuti, ciascuna con strategia dedicata. L’“app shell” e gli asset statici sono precaricati e serviti dal cache locale per garantire avvio istantaneo; l’aggiornamento avviene in background quando è disponibile una versione più recente. I dati applicativi consultivi, come riepiloghi e liste, adottano un modello stale‑while‑revalidate: l’utente visualizza subito l’ultima copia disponibile, mentre un aggiornamento silente verifica e rinnova il dato. Per i contenuti transazionali e collaborativi, si usa network‑first con fallback al cache: se la rete risponde, si privilegia la fonte autorevole; in assenza di connettività, si attinge al repository locale con segnali visivi che indicano potenziali scostamenti temporanei.

Per prevenire l’invecchiamento silenzioso, ogni risorsa porta metadati di coerenza (versione, etag, timestamp logico) e una policy di scadenza. L’interfaccia comunica esplicitamente quando una vista è “istantanea da cache” e quando è stata aggiornata. La sostituzione degli elementi nel cache è regolata da LRU con soglie per tipo di contenuto e con quote massime per risorse di grandi dimensioni, così da evitare la saturazione dello storage su dispositivi con capacità limitate.

## **12.3. Storage locale, quote e politiche LRU**

Su piattaforme web, lo storage persistente utilizza la combinazione di cache del service worker e database locale per i dati strutturati. L’app stima periodicamente uso e quota disponibile e richiede la persistenza dello storage quando necessario; in caso di pressione, adotta una politica di alleggerimento che mantiene intatti i dataset essenziali e scarica per primi allegati ricostruibili e contenuti derivati. La visibilità delle quote consente di informare l’utente quando si avvicinano soglie critiche, con suggerimenti per liberare spazio.

Su mobile nativo, i dati sono memorizzati in un archivio locale indicizzato con compattazione periodica. Le politiche LRU sono raffinate con TTL per categorie pesanti come allegati e mappe, e con salvaguardie per l’ultimo itinerario aperto e gli elementi “pinnati” dall’utente. In presenza di notti di scarso utilizzo o ricarica del dispositivo, il sistema coglie finestre di manutenzione per compattare indici, normalizzare il journal delle operazioni e rimuovere shard obsoleti.

## **12.4. Accesso offline a itinerari e mappe di base**

L’utente può scaricare in anticipo una o più regioni di mappa di base, con selezione per bounding box e livelli di zoom. Le regioni contengono stile, font e sprite necessari e un insieme di tile ottimizzati per coprire il percorso previsto. La piattaforma evita duplicati tra regioni adiacenti e aggiorna in modo incrementale solo i tile modificati quando la connessione è disponibile, riducendo tempi e banda. Gli itinerari includono traccia, punti di interesse, prenotazioni e note essenziali in una rappresentazione compressa che privilegia il rendering offline.

Per evitare abuso di storage, l’app impone limiti ragionevoli al numero di regioni o ai metri quadrati equivalenti scaricabili, segnalando all’utente l’impatto stimato in MB prima dell’operazione. È possibile impostare il download condizionato (solo Wi‑Fi, solo quando in carica) e visualizzare lo stato di avanzamento con stime di tempo residuo. La rimozione di una regione libera spazio e, in base alla politica LRU, può innescare la pulizia di risorse non più referenziate da altre regioni.

## **12.5. Coda operazioni, idempotenza e messaggistica eventi**

Ogni azione dell’utente che modifica lo stato applicativo è tradotta in una operazione atomica e append‑only su un journal locale. Le operazioni entrano in una coda di sincronizzazione con metadati di ordinamento, dipendenze, idempotency key e fingerprint del payload. L’invio verso il backend segue il paradigma at‑least‑once: un outbox locale garantisce che gli eventi persistano fino alla consegna, mentre la deduplicazione lato server sfrutta le chiavi di idempotenza per evitare effetti collaterali indesiderati in caso di ritentativi.

Il relay di messaggi nasce per essere tollerante a disconnessioni e crash. Se un’operazione fallisce per motivi transitori, viene ripianificata con back‑off esponenziale e limiti massimi di attesa. Per ridurre la latenza percepita, il client applica il cambiamento in modo ottimistico e, alla conferma, consolida la versione; in caso di divergenza, avvia un flusso di riconciliazione assistita che guida l’utente alla scelta consapevole.

![Diagramma Mermaid 22](image22.png)

## **12.6. Protocolli di sincronizzazione e recupero**

Il protocollo di base prevede sincronizzazioni incrementali orientate alle modifiche, con richieste paginated per grandi insiemi e ripresa dal punto interrotto. I payload sono compressi e, dove possibile, trasmessi come delta rispetto a una versione comune. Al primo collegamento di un dispositivo o dopo una lunga assenza, è disponibile una sincronizzazione “a doppia corsia”: si scaricano prima i metadati essenziali per rendere navigabile l’ultimo stato, poi i dettagli e gli allegati a priorità decrescente, così che l’utente possa riprendere rapidamente l’attività.

I meccanismi di ripartenza fanno leva su checkpoint firmati e su un catalogo locale delle repliche. Se la sequenza di operazioni appare invalida o corrota, il client effettua un recovery mirato: pulizia del batch problematico, riscaricamento selettivo delle sezioni coinvolte e riallineamento della versione logica. L’obiettivo è evitare il reset integrale, preservando quanto più possibile le modifiche locali già confermate.

## **12.7. Risoluzione conflitti: LWW e CRDT a grana fine**

Per proprietà scalari e interruttive (ad esempio uno stato booleano o un titolo), un registro last‑writer‑wins offre semplicità e comportamenti prevedibili, basati su orologi logici e regole di pareggio deterministiche. Per contenuti compositi o testuali, si favoriscono strutture dati replicabili senza conflitto che consentono aggiornamenti concorrenti con convergenza senza coordinamento globale. Ciò permette di lavorare offline anche per periodi prolungati, con margini di compattezza garantiti da politiche di compattazione e garbage collection del metadata.

La piattaforma adotta un approccio ibrido: LWW per i campi atomici e CRDT per gli insiemi, le liste ordinate e i testi ricchi. In presenza di conflitti non riconducibili a semplici regole, l’interfaccia propone un merge assistito che mette in evidenza le differenze e consente di accettare contributi paralleli. L’intero processo è tracciato nel registro modifiche, con attribuzione dell’autore e riferimento alla decisione di merge.

![Diagramma Mermaid 23](image23.png)

## **12.8. Indicatori di stato e UX in condizioni avverse**

L’app rende sempre evidente la condizione di rete: online, degradato, offline. Per ogni vista è mostrato quando i dati sono stati aggiornati l’ultima volta e se vi sono modifiche in attesa di sincronizzazione. Le azioni che richiedono certezza di persistenza sono accompagnate da messaggi chiari: “in coda”, “in invio”, “confermato” o “richiede attenzione”, con la possibilità di riprovare o annullare. In caso di conflitti, l’utente viene guidato a risolvere con anteprime affiancate o con l’unione automatica dei rami indipendenti.

In ambienti a connettività instabile, la UI evita blocchi: le liste si popolano progressivamente, i contenuti pesanti mostrano segnaposti e i form conservano i campi compilati per ripresa successiva. La mappa itinerario degrada con grazia: se le tile ad alta risoluzione mancano, si mostrano livelli più generici disponibili sul dispositivo, mantenendo comunque la tracciatura del percorso e i marker principali.

## **12.9. Sincronizzazione in background su web e mobile**

Sul web, il service worker orchestra cache e sincronizzazioni differite; quando disponibile, la sincronizzazione periodica in background consente aggiornamenti cadenzati anche a browser chiuso, con fallback a trigger all’avvio o su eventi di rete. Su Android, la pianificazione di job di sincronizzazione utilizza vincoli come tipo di rete, stato di carica e batteria, consolidando più attività in un unico lavoro quando possibile. Su iOS, le attività di aggiornamento vengono richieste con i limiti imposti dal sistema e si privilegia l’uso di finestre di esecuzione offerte dall’ambiente per completare batch di sync senza impattare negativamente sui consumi.

Questi meccanismi rispettano il principio di sobrietà energetica: i job non urgenti attendono condizioni favorevoli, e le code sono compattate quando la rete è non misurata o il dispositivo è in carica. Le sincronizzazioni critiche restano comunque attivabili on‑demand dall’utente, con un indicatore dell’impatto previsto in termini di dati trasferiti.

## **12.10. Telemetria di sync, SLO e osservabilità**

La piattaforma misura l’intero ciclo di vita della sincronizzazione: tasso di successo dei batch, latenza P50 e P95 per applicare le modifiche, dimensione media dei delta, età media del backlog, ri‑tentativi per causa, spazio occupato dallo storage locale, tempi di compattazione e collisioni risolte. I dashboard espongono trend e soglie di allarme; un SLO di base prevede che il 99% delle operazioni utente raggiunga stato “confermato” entro un intervallo ragionevole dopo il ripristino della rete e che l’età media del backlog in condizioni di connettività normale resti sotto limiti concordati.

La telemetria è pensata per guidare il miglioramento continuo: se la latenza di propagazione supera i budget, si interviene sulla strategia di batching o sulla compattazione dei payload; se lo storage locale supera soglie di sicurezza, si ottimizzano i criteri LRU o si raffinano i profili di regioni mappa. Le anomalie ricorrenti attivano playbook di remediation, dall’aumento della finestra di back‑off alla ripubblicazione mirata di shard incongrui.

## **12.11. Sicurezza, integrità e privacy dei dati offline**

I dati a riposo sul dispositivo sono protetti con cifratura a livello di archivio locale; le chiavi sono legate all’identità applicativa e, quando supportato, all’hardware del dispositivo. Le operazioni in coda includono un HMAC per rilevare manomissioni e la loro applicazione richiede sia la validità della firma sia una sessione utente attiva. L’uso di idempotency key impedisce l’esecuzione ripetuta involontaria di operazioni in caso di ritentativi o disconnessioni a metà.

Il registro delle modifiche è append‑only e tamper‑evident: gli eventi sono concatenati con hash, e le verifiche di integrità sono eseguite periodicamente. La minimizzazione dei dati governa sia la scelta di ciò che viene salvato offline sia la telemetria inviata; l’utente mantiene il controllo, con opzioni per cancellare cache e regioni, e per disattivare i download non essenziali su reti a consumo.

## **12.12. Collegamenti con collaborazione e mappa**

Le scelte in materia di risoluzione conflitti e convergenza sono coerenti con la collaborazione in tempo reale descritta in precedenza . L’editing simultaneo sfrutta lo stesso motore di merge, così che ciò che accade offline si riconcili in modo naturale con ciò che accade online. Per le mappe, le regioni offline e la gestione dei tile si integrano con la logica di rendering e con i riepiloghi compatti , assicurando che la cartografia resti utile anche con livelli di dettaglio variabili.

Inoltre, la messaggistica eventi che alimenta la sincronizzazione sostiene anche le funzionalità collaborative: la coda di operazioni e le chiavi di idempotenza garantiscono un tracciato coerente delle azioni, mentre i delta efficienti riducono la banda consumata dalla presenza e dai cursori condivisi. In questo modo, la piattaforma mantiene una semantica uniforme del dato in tutti i contesti d’uso, a prescindere dallo stato della rete.

## **Riferimenti**

[1] Conflict‑Free Replicated Data Type — Wikipedia - https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

[2] The Blocklace: A Byzantine‑repelling and Universal CRDT — arXiv - https://arxiv.org/abs/2402.08068

[3] Automerge — Documentazione e repository - https://automerge.org/docs/tutorial/concepts/

[4] Yjs — Awareness e presenza - https://docs.yjs.dev/api/about-awareness

[5] Caching nelle Progressive Web App — MDN - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching

[6] Workbox — Caching strategies overview - https://developer.chrome.com/docs/workbox/caching-strategies-overview/

[7] StorageManager API ed estimate — MDN - https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate

[8] Periodic Background Sync API — MDN - https://developer.mozilla.org/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API

[9] Android WorkManager — Documentazione sviluppatori - https://developer.android.com/develop/background-work/background-tasks/persistent/getting-started/define-work

[10] Ottimizzare l’uso della batteria per i task schedulati — Android - https://developer.android.com/develop/background-work/background-tasks/optimize-battery

[11] Background Tasks e BGTaskScheduler — Apple Developer - https://developer.apple.com/documentation/BackgroundTasks/performing-long-running-tasks-on-ios-and-ipados

[12] Energy Efficiency Guide for iOS — Apple Developer - https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/WorkLessInTheBackground.html

[13] Offline maps con SDK mobili — Mapbox Help - https://docs.mapbox.com/help/dive-deeper/mobile-offline/

[14] Transactional Outbox pattern — microservices.io - https://microservices.io/patterns/data/transactional-outbox

[15] Idempotency‑Key per HTTP — IETF Draft - https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-07

# **13. Autenticazione, Sicurezza & Privacy**

## **13.1. Visione, perimetro e valore**

Questo capitolo definisce come l’esperienza d’accesso, la protezione degli account e la gestione della privacy si integrano nel prodotto come prerequisito trasversale a tutte le funzionalità. L’obiettivo è duplice: consentire agli utenti di autenticarsi in modo fluido e sicuro, e governare l’intero ciclo di vita del dato personale dalla raccolta al consenso, dalla conservazione all’esercizio dei diritti. Lungo questo percorso, la piattaforma adotta standard aperti per l’identità, applica crittografia robusta in transito e a riposo, documenta i trattamenti e rende verificabili tutte le azioni rilevanti tramite audit.

Il valore per l’utente è la fiducia: sapere chi ha accesso a cosa, quando e perché. Il valore per l’organizzazione è la riduzione del rischio operativo e normativo, grazie a controlli coerenti e misurabili. I processi descritti in questa sezione alimentano la matrice RACI della governance , chiarendo ruoli e responsabilità su sicurezza, privacy e conformità.

## **13.2. Identità federata: OAuth 2.0 + OpenID Connect con PKCE**

La piattaforma adotta OpenID Connect su OAuth 2.0 con flusso Authorization Code e PKCE per tutte le applicazioni pubbliche e confidenziali. L’uso del browser di sistema per le app native, la validazione rigorosa degli URI di redirect e i nonce specifici per transazione riducono il rischio di mix‑up, injection e CSRF. Il flusso restituisce un ID Token firmato per confermare l’identità dell’utente e un Access Token di breve durata per accedere alle API; se necessario, un Refresh Token estende la sessione senza esporre nuovamente le credenziali.

Il modello è pensato per interoperare con provider social e con provider enterprise che espongono OpenID Connect. La piattaforma normalizza gli attributi anagrafici e i claim, isola gli scope per finalità e applica la minimizzazione: ciò che non serve non si chiede. Per i client mobile e web, l’adozione di PKCE con metodo S256 è obbligatoria; per i client confidenziali è comunque raccomandata come protezione aggiuntiva. L’Implicit Flow non viene utilizzato.

## **13.3. Autenticazione forte: MFA, passkey e step‑up**

L’autenticazione multi‑fattore è offerta nativamente con fattori resistenti al phishing (passkey basate su WebAuthn) e fattori tradizionali (TOTP su app di autenticazione). L’iscrizione al secondo fattore guida l’utente all’adozione di un fattore hardware o di piattaforma e genera codici di recupero one‑time da conservare offline. Il meccanismo di step‑up applica criteri contestuali: operazioni sensibili (ad esempio condivisione permanente di un itinerario o esportazione di dati) richiedono una recente autenticazione a due fattori, anche se la sessione base è già attiva.

La piattaforma allinea i livelli di garanzia all’autenticazione con le prassi correnti: per i dati personali visualizzati o scaricati online si privilegia un livello che richiede almeno due fattori, con re‑autenticazione a tempo e inattività. I fattori SMS sono disponibili solo come ultima risorsa e non sono proposti come canale primario. Per le identità federate, il servizio rispetta gli indicatori di forza dell’evento di autenticazione propagati dal provider e li traduce in policy applicative coerenti.

## **13.4. Gestione di sessioni e token: durata, rotazione e revoca**

Le sessioni utente sono composte da access token a vita breve, refresh token e una sessione applicativa lato server. La rotazione dei refresh token è attiva per impostazione predefinita: a ogni utilizzo ne viene emesso uno nuovo e il precedente diventa inutilizzabile. Il sistema rileva il riuso di un token già consumato e tratta l’evento come compromissione, invalidando la sessione e notificando l’utente. Quando opportuno, i token sono vincolati al client mediante meccanismi di dimostrazione di possesso per mitigare il replay.

La revoca è disponibile via endpoint dedicato e si propaga rapidamente ai resource server tramite introspezione o liste di revoca interne. Il logout è coerente su tutti i client mediante meccanismi di back‑channel e front‑channel, così che l’uscita da un dispositivo oppure lato provider si rifletta nella chiusura delle sessioni correlate. Per scenari di collaborazione, la revoca selettiva per dispositivo consente di isolare solo i terminali a rischio.

## **13.5. Flussi di login, logout e recupero**

Il flusso di login segue il codice di autorizzazione con PKCE, con opzione di step‑up se la richiesta tocca risorse ad alta sensibilità. Al primo accesso il sistema chiede il consenso minimo indispensabile e, se previsto, l’iscrizione a un secondo fattore. Il logout chiude la sessione server, revoca i token residui e invia un segnale di terminazione ai client registrati, che eliminano cookie e storage locale.

Il recupero dell’account privilegia percorsi sicuri: verifica via link monouso a tempo limitato, conferma su fattore registrato e uso di codici di backup. La piattaforma previene escalation abusive nei casi di perdita del secondo fattore richiedendo prove aggiuntive e imponendo un periodo di raffreddamento su operazioni sensibili prima di ripristinare pienamente i privilegi.

![Diagramma Mermaid 24](image24.png)

## **13.6. Consensi: modello, pannello privacy e prove**

I consensi sono granulari e orientati allo scopo: ogni trattamento mappa a uno o più scope e a una finalità esplicita, così che l’utente capisca chiaramente quali dati siano necessari e perché. Il pannello privacy consente di visualizzare e modificare in qualsiasi momento le preferenze: marketing, personalizzazione, condivisione con partner e conservazione estesa degli storici. Ogni cambiamento genera una nuova versione del consenso, con data, canale e contesto.

Il registro consensi mantiene una prova verificabile per utente, finalità e versione del testo informativo mostrato. Ai fini di interoperabilità, la struttura del “consent record” segue uno schema standardizzato, idoneo a generare una ricevuta leggibile e un record machine‑readable da condividere tra sistemi se necessario. Il ritiro del consenso interrompe i trattamenti futuri correlati e riduce i dati già raccolti ai soli obblighi di legge o difesa di diritti, come descritto nelle politiche di retention.

## **13.7. Crittografia in transito e a riposo, gestione chiavi**

Tutto il traffico tra client, servizi di identità e API avviene su TLS 1.3 con suite moderne e forward secrecy. Dove richiesto, i canali interni tra microservizi possono utilizzare autenticazione reciproca per elevare il livello di protezione. Le intestazioni di sicurezza e le pratiche di hardening dei cookie (solo secure, httpOnly, sameSite) completano la protezione del piano web.

A riposo, i dati personali sono cifrati con uno schema a buste: chiavi dati uniche per tabella o collezione, protette da chiavi master custodite in un servizio di gestione chiavi. La rotazione periodica delle chiavi è pianificata e documentata; l’uso delle chiavi è tracciato e soggetto a principi di segregazione dei compiti. Gli allegati di grandi dimensioni vengono cifrati alla fonte, con metadati che legano l’oggetto cifrato al trattamento e al consenso sottostante.

## **13.8. Conformità privacy: principi, registro trattamenti e retention**

Il disegno della soluzione incorpora i principi di protezione dati by design e by default, garantendo che per impostazione predefinita siano trattati solo i dati strettamente necessari, per il tempo minimo e con accessibilità limitata. Ogni trattamento è descritto nel registro delle attività con finalità, basi giuridiche, categorie di dati, destinatari, trasferimenti, tempi di cancellazione e misure di sicurezza. Il registro è disponibile in forma elettronica e aggiornato periodicamente.

Le politiche di conservazione definiscono per ogni categoria di dato una durata, un criterio di anonimizzazione o pseudonimizzazione e regole di cancellazione sicura. Quando copie di sicurezza impediscono la rimozione immediata, il sistema applica un modello a tombstone: i dati sono resi indisponibili ai processi ordinari e vengono eliminati definitivamente alla successiva compattazione dei supporti, con prova di esecuzione registrata nell’audit.

## **13.9. Diritti degli interessati: processi DSR automatizzati**

L’utente dispone di un canale self‑service per esercitare i propri diritti: accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. La piattaforma verifica l’identità e, se necessario, effettua uno step‑up di autenticazione. Le richieste sono instradate a un orchestratore che colleziona i dati dalle fonti autorizzate, applica filtri per minimizzazione e terzi, ed espone all’utente un’anteprima prima della consegna. Per la portabilità, l’esportazione è fornita in formato strutturato, di uso comune e leggibile da macchina.

Gli impegni di servizio sono chiari: conferma di presa in carico immediata, evasione standard dell’esportazione entro 72 ore e completamento delle cancellazioni su sistemi attivi entro 7 giorni, con propagazione verso repliche e data warehouse entro 14 giorni. I tempi tengono conto dei vincoli di legge che impongono conservazioni minime o eccezioni; per richieste complesse o numerose, è prevista un’estensione motivata. Ogni fase è tracciata e consultabile dall’utente nel pannello privacy.

![Diagramma Mermaid 25](image25.png)

## **13.10. Audit degli eventi critici e tracciabilita**

Ogni evento sensibile è tracciato in modo immutabile: autenticazioni riuscite e fallite, cambi di password, iscrizione o rimozione del secondo fattore, emissione e revoca di token, variazioni di consensi e privacy, download di esportazioni, esiti delle cancellazioni, variazioni di ruoli e permessi. I record sono firmati o altrimenti protetti contro la manomissione e includono identificatori univoci, orari, provenienza e contesto.

Gli eventi possono essere anche serializzati come token di evento di sicurezza, così da rendere interoperabile la notifica tra servizi e semplificare i controlli di coerenza. L’osservabilità si completa con dashboard su metriche chiave: tasso di successo dei login, percentuale di sessioni con MFA, tempi di evasione delle richieste privacy, numero di revoche e riusi di refresh token, con soglie d’allarme e playbook di risposta.

## **13.11. Esperienza utente e accessibilità della privacy**

Il linguaggio dell’informativa e del pannello privacy è chiaro e conciso, con spiegazioni contestuali accanto a ogni interruttore e con esempi che illustrano gli effetti delle scelte. Per i minorenni, dove necessario, sono previsti percorsi di consenso con verifica dell’età e della responsabilità genitoriale. Tutte le schermate critiche sono progettate per essere accessibili e localizzabili, con attenzione a lettori di schermo e input alternativi.

La coerenza tra dispositivi è un requisito primario: le preferenze impostate sul web si riflettono sul mobile e viceversa, con sincronizzazione quasi in tempo reale. L’utente può scaricare la ricevuta dei consensi, verificare quando e come sono stati modificati e capire quali partner ricevano dati per specifiche finalità, con un percorso sempre disponibile per opporsi o revocare scelte precedenti.

## **13.12. Deliverable e allineamento organizzativo**

La realizzazione pratica richiede output verificabili:

- Flussi completi di login, logout, recupero e step‑up, comprensivi di schermate e testi di errore.
- Modello dei consensi, schema del registro, ricevute machine‑readable e pannello privacy navigabile.
- Politiche di retention per categoria di dato, con mappatura ai trattamenti.
- Processi DSR automatizzati con stati, SLA, metriche e fallback manuali.
- Registro dei trattamenti in formato condivisibile e piano di audit degli eventi critici. Questi deliverable sono collegati alla governance di progetto: responsabilità chiare su sicurezza applicativa, gestione chiavi, audit, privacy e supporto all’utente sono tracciate nella matrice RACI , così che le azioni quotidiane abbiano sempre un proprietario e un meccanismo di escalation.

### **Allegato: tabella di sintesi fattori MFA e uso consigliato**

| **Fattore** | **Resistenza al phishing** | **Uso consigliato** | **Note operative** |
| --- | --- | --- | --- |
| **Passkey WebAuthn** | Alta | Accessi standard e operazioni sensibili | Preferito per tutti i dispositivi compatibili |
| **TOTP su app** | Media | Backup del secondo fattore | Sincronizzazione oraria e protezione seed |
| **Codici di recupero** | N/A | Solo emergenza | Generati una tantum, custoditi offline |
| **OTP via SMS** | Bassa | Ultima risorsa | Abilitazione opzionale, con limiti e avvisi |

## **Riferimenti**

[1] RFC 9700 – Best Current Practice for OAuth 2.0 Security - https://www.rfc-editor.org/rfc/rfc9700.txt

[2] RFC 7636 – Proof Key for Code Exchange (PKCE) - https://www.rfc-editor.org/rfc/rfc7636.html

[3] RFC 8252 – OAuth 2.0 for Native Apps - https://www.rfc-editor.org/rfc/rfc8252

[4] OpenID Connect Core 1.0 - https://openid.net/specs/openid-connect-core-1_0.html

[5] OpenID Connect Front‑Channel Logout 1.0 - https://openid.net/specs/openid-connect-frontchannel-1_0.html

[6] OpenID Connect Back‑Channel Logout 1.0 - https://openid.net/specs/openid-connect-backchannel-1_0-final.html

[7] RFC 7009 – OAuth 2.0 Token Revocation - https://www.rfc-editor.org/rfc/rfc7009

[8] RFC 7662 – OAuth 2.0 Token Introspection - https://www.rfc-editor.org/rfc/rfc7662.html

[9] RFC 9449 – OAuth 2.0 Demonstrating Proof of Possession (DPoP) - https://www.rfc-editor.org/rfc/rfc9449

[10] RFC 9470 – OAuth 2.0 Step‑Up Authentication Challenge - https://www.rfc-editor.org/rfc/rfc9470

[11] RFC 8725 – JSON Web Token Best Current Practices - https://www.rfc-editor.org/rfc/rfc8725

[12] RFC 8446 – TLS 1.3 - https://www.rfc-editor.org/info/rfc8446

[13] RFC 8417 – Security Event Token (SET) - https://www.rfc-editor.org/rfc/rfc8417

[14] NIST SP 800‑63B‑4 – Digital Identity Guidelines: Authentication - https://www.nist.gov/publications/nist-sp-800-63b-4digital-identity-guidelines-authentication-and-authenticator

[15] ISO/IEC TS 27560:2023 – Consent record information structure - https://www.iso.org/standard/80392.html

[16] GDPR, Art. 12 – Trasparenza e termini per le risposte - https://gdpr-info.eu/art-12-gdpr/

[17] GDPR, Art. 15 – Diritto di accesso - https://www.gdpr.org/regulation/article-15.html

[18] GDPR, Art. 17 – Diritto alla cancellazione - https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04/eng

[19] GDPR, Art. 30 – Registro dei trattamenti - https://eur-lex.europa.eu/eli/reg/2016/679/art_26/oj/eng

[20] GDPR, Art. 32 – Sicurezza del trattamento - https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04/eng

# **14. Admin Console, KPI e Moderazione**

## **14.1. Scopo, perimetro e valore**

Questa sezione definisce le capacità di back‑office necessarie per misurare la salute del prodotto, governare l’ecosistema dei contenuti e garantire un controllo operativo tracciabile. L’Admin Console concentra in un unico luogo dashboard di KPI, filtri e segmenti, reportistica con esportazioni in formati standard e un workflow di moderazione con audit immutabile. Il sistema abilita ruoli amministrativi differenziati, coerenti con il principio del minimo privilegio, e supporta processi di qualità e conformità in linea con le politiche di sicurezza già introdotte.

Il valore per l’organizzazione è immediato: le metriche chiave alimentano il miglioramento continuo, la reportistica accelera le decisioni e la moderazione riduce il rischio reputazionale. Il valore per gli utenti è indiretto ma sostanziale: esperienze più affidabili, contenuti più curati e trattamenti trasparenti. Le responsabilità e le escalation sono allineate alla governance documentata nella matrice RACI, che qui trova l’implementazione pratica nel quotidiano.

## **14.2. Architettura funzionale dell’Admin Console**

L’Admin Console è un’applicazione web protetta, separata dall’esperienza utente finale, che dialoga con servizi analitici, motori di ricerca/indicizzazione, sistemi di storage e un modulo di moderazione. La separazione logica garantisce che funzioni ad alto impatto (ban, rimozioni massali, esportazioni) siano esposte solo a identità amministrative e sempre soggette a verifica dei permessi. La console espone componenti riusabili: una libreria di filtri e segmenti condivisa tra dashboard e report, un motore di query con limiti e controlli sulle risorse e un audit layer che registra ogni azione significativa.

Le viste sono organizzate per ambito: panoramica KPI, analisi approfondite, reportistica ed esportazioni, moderazione e governance. Ogni sezione eredita pattern di interazione coerenti: selezione periodo, salvataggio di segmenti, esportazione con un clic e condivisione interna soggetta a permessi. L’interfaccia adotta una tassonomia chiara per individuare rapidamente la metrica o la coda di lavoro, con indicatori di stato e capacità di drill‑down fino al dettaglio dell’evento o del contenuto.

## **14.3. KPI principali: definizioni, calcolo e affidabilità**

La console fornisce un set di KPI standardizzati con definizioni precise che evitano ambiguità. Gli Utenti Attivi Mensili misurano il numero di identità uniche che compiono almeno un’azione qualificata in un mese calendario; la Retention valuta la percentuale di utenti che tornano a interagire dopo finestre temporali definite (ad esempio giorno 7, giorno 30) calcolando coorti omogenee; il CTR dei Suggerimenti misura la quota di suggerimenti visualizzati che portano a un’interazione attesa; le Conversioni da Referral quantificano le sessioni e le azioni di valore generate da inviti o link di raccomandazione.

Ogni KPI è tracciabile al livello di evento: il calcolo parte da definizioni atomiche (view, click, add to plan, prenotazione effettuata) e aggrega secondo regole versionate, in modo da garantire confrontabilità storica e riproducibilità. Il sistema conserva insieme alla metrica la “ricetta” di calcolo utilizzata nel periodo, così da spiegare eventuali discontinuità dovute a cambi di definizione. La qualità dei dati è monitorata con controlli automatici su latenza di arrivo, volumi attesi, unicità degli identificativi e coerenza tra fonti.

## **14.4. Filtri, segmenti e analisi comparativa**

Gli amministratori possono combinare filtri su periodo, area geografica, dispositivo, canale di acquisizione, lingua e tipologia di utente; possono inoltre salvare segmenti condivisibili con scadenza e proprietario. Le analisi comparative permettono di affiancare coorti, confrontare periodi equivalenti, valutare l’effetto di funzionalità rilasciate o campagne. La console visualizza automaticamente intervalli di confidenza e segnala con note eventuali soglie di significatività non raggiunte.

Per tutti i grafici sono possibili passaggi di contesto: dal KPI aggregato, l’analista entra nel dettaglio per visualizzare piani, contenuti o utenti che hanno guidato l’andamento. Questo percorso è governato da regole di mascheramento e minimizzazione che mostrano solo i campi indispensabili al ruolo corrente, preservando la privacy senza sacrificare l’interpretabilità.

## **14.5. Reportistica ed esportazioni CSV/PDF**

La reportistica copre esigenze ricorrenti e ad‑hoc. I report ricorrenti sono pianificabili con cadenza fissa e recapito su canali sicuri, con parametri congelati alla creazione e versioni storiche conservate per audit. Le esportazioni CSV forniscono dati granulari per analisi esterne, con schemi esplicitati e dizionari dei campi; il PDF è utilizzato per snapshot condivisibili della situazione a data certa, completi di note metodologiche e legende.

Le esportazioni includono metadati di provenienza, l’intervallo temporale e l’identificativo del segmento applicato. I ruoli con permesso di export possono estrarre solo insiemi coerenti con le policy di minimizzazione e con i limiti di righe e colonne definiti per prevenire download eccessivi. I file generati hanno scadenze, sono firmati o accompagnati da checksum e vengono cancellati automaticamente una volta letti o dopo la data di scadenza.

## **14.6. Moderazione: policy, coda e azioni amministrative**

La moderazione combina automatismi di pre‑classificazione con revisione umana. Le segnalazioni provenienti dagli utenti e i segnali automatici (ad esempio anomalie comportamentali, contenuti duplicati, linguaggio potenzialmente offensivo) confluiscono in una coda prioritaria. La priorità è determinata da rischio, impatto e recidiva; i moderatori ricevono una vista compatta con contesto sufficiente a valutare senza bias, compresi lo storico delle decisioni e le linee guida pertinenti.

Le azioni disponibili includono avvisi all’utente, rimozione di contenuti specifici, limitazioni temporanee, sospensione o ban, oltre a richieste di modifica volontaria per casi marginali. Ogni decisione richiede una motivazione e, quando opportuno, la selezione di una categoria di violazione. Le decisioni sono notificate all’utente interessato con indicazione della possibilità di ricorso; eventuali ricorsi aprono una revisione di secondo livello con separazione dei ruoli per garantire imparzialità.

![Diagramma Mermaid 26](image26.png)

## **14.7. Audit immutabile: tracciabilità end‑to‑end**

Tutte le operazioni dell’Admin Console sono registrate in un audit immutabile: creazione e modifica di report, esportazioni avviate, download effettuati, cambi di configurazione, decisioni di moderazione e variazioni di permessi. L’immutabilità è ottenuta con una struttura append‑only a catena di hash: ogni record incorpora l’impronta del precedente e un timestamp verificabile. La verifica di integrità è possibile ricostruendo la catena o confrontando radici aggregate esposte periodicamente.

Questo ledger è separato dallo storage applicativo, ruota su finestre temporali prestabilite e invia copie firmate al sistema di monitoraggio centralizzato. L’accesso all’audit è in sola lettura e soggetto a controlli di segregazione dei compiti: chi opera non valida, chi valida non opera. I controlli di coerenza automatici avvisano se si rilevano buchi nella sequenza, discrepanze di hash o tentativi di ri‑indicizzare record.

## **14.8. Ruoli amministrativi e controllo degli accessi (RBAC)**

Il modello RBAC distingue tra amministrazione operativa, analisi e conformità. I ruoli tipici includono analista, moderatore, supervisore di moderazione, amministratore di sistema e funzioni di controllo come sicurezza e protezione dati. Ogni ruolo aggrega permessi su entità funzionali (dashboard, report, code di moderazione, configurazioni) e su azioni (visualizza, crea, modifica, approva, esporta, elimina). Le deleghe temporanee sono supportate per gestire sostituzioni e picchi di lavoro, con scadenze automatiche.

Le policy di accesso applicano il minimo privilegio e la separazione dei compiti nelle aree più sensibili: chi genera un report non è lo stesso che lo approva per la distribuzione esterna; chi decide su un ricorso non coincide con chi ha preso la decisione originaria. Le richieste di elevazione temporanea sono documentate, motivate e soggette a step‑up di autenticazione. I cambi di ruolo scatenano riconsiderazione istantanea delle sessioni e revoca dei token non più compatibili.

## **14.9. Flussi narrativi: vedere i KPI e moderare contenuti**

Un analista accede alla console e apre la dashboard principale. Imposta periodo, area geografica e canale, applica un segmento e osserva l’andamento degli Utenti Attivi Mensili. Nota una variazione del CTR dei Suggerimenti in un’area specifica, poi effettua un drill‑down fino alle card con performance anomala e salva un report che pianifica per l’invio settimanale al team di prodotto. In chiusura, esporta un CSV con le sole colonne necessarie a un test di significatività, che carica in un notebook esterno.

In parallelo, un moderatore riceve più segnalazioni su un contenuto segnalato come potenzialmente fuorviante. La coda lo mostra in alto con priorità alta; il sistema suggerisce motivazioni prevalenti emerse in casi simili, ma la decisione resta umana e motivata. Il moderatore sceglie la rimozione con avviso educativo, imposta durata di una limitazione leggera, e invia la notifica. Un ricorso arriva poche ore dopo; un supervisore indipendente riesamina, conferma la rimozione e riduce la limitazione in base a nuovi elementi portati dall’utente, chiudendo con spiegazione trasparente.

![Diagramma Mermaid 27](image27.png)

## **14.10. Dati, pipeline e qualità della misurazione**

La misurazione dipende da una pipeline eventi affidabile. Il tracciamento client e server invia eventi validati in ingresso, arricchiti da contesto (versione app, lingua, canale), deduplicati e normalizzati. Un sistema di streaming consente pre‑aggregazioni per le dashboard in tempo quasi reale, mentre processi batch consolidano i dati storici per coorti e retention. Gli schemi sono versionati e la compatibilità retroattiva è gestita con mapping e controlli automatici.

La console espone la latenza di disponibilità dei dati e la “confidenza” della metrica nel periodo di coda. Indicatori di qualità informano su scostamenti rispetto a baseline storiche: un calo improvviso di eventi di tipo login può essere un segnale tecnico, non di business. I processi di backfill sono tracciati e documentati per evitare interpretazioni errate delle serie.

## **14.11. Esportazioni sicure, SLA e conformità**

Le esportazioni sono soggette a controlli di sicurezza: autenticazione forte per l’avvio, canali cifrati per il trasferimento, scadenza obbligatoria e watermarking dei PDF destinati a circolazione esterna. Gli SLA interni garantiscono disponibilità della dashboard in orario lavorativo esteso, generazione dei PDF entro minuti e consegna dei report pianificati entro la finestra concordata. Le richieste di estrazione eccezionali, come dataset di grandi dimensioni, richiedono approvazione e prevedono tempi più ampi.

La conformità si riflette nella capacità di produrre rapidamente evidenze: chi ha generato un report, quando, con quali parametri e a chi è stato consegnato. Le politiche di retention applicano cancellazione programmata delle esportazioni e dei log di accesso decorso il tempo definito. I dati personali eventualmente presenti nei report sono minimizzati e, quando possibile, pseudonimizzati o aggregati.

## **14.12. Metriche di efficacia della moderazione e miglioramento continuo**

La console misura non solo il volume di segnalazioni e decisioni, ma l’efficacia della moderazione nel tempo. Tra gli indicatori di qualità emergono tasso di ricorso, percentuale di decisioni confermate in secondo livello, tempo medio alla decisione, recidiva per utente o contenuto, e impatto stimato sul benessere della comunità. La combinazione di questi segnali guida l’aggiornamento delle linee guida e dei modelli di pre‑classificazione.

Le revisioni periodiche incrociano dati quantitativi con campionamenti qualitativi per scovare bias e falsi positivi. La console supporta esperimenti controllati sulle policy (ad esempio introduzione di un nuovo motivo di segnalazione o modifica delle soglie di priorità) misurandone gli effetti rispetto al gruppo di controllo. Le risultanze sono condivise con il team di prodotto per interventi sull’esperienza utente che prevengano a monte i comportamenti problematici.

## **14.13. Sicurezza operativa e dipendenze con l’identità**

L’accesso alla console richiede autentiche robuste con opzione di secondo fattore e sessioni a vita breve. Gli account amministrativi sono separati dagli account utente personali, con monitoraggio continuo delle anomalie e avvisi in caso di accessi da nuove postazioni. Le azioni ad alto impatto richiedono una conferma esplicita e, in alcuni casi, un secondo approvatore. La registrazione degli eventi critici confluisce in un sistema centralizzato dove correlare segni di abuso o compromissione.

Queste misure si appoggiano ai controlli descritti nelle sezioni dedicate all’autenticazione e alla sicurezza, ereditandone token a breve durata, revoca immediata e rotazione dei segreti. Quando un ruolo viene revocato o scade una delega, la console forza il ricalcolo dei permessi e invalida le sessioni non conformi, prevenendo derive di privilegio.

## **14.14. Deliverable del capitolo**

- Dashboard con KPI principali, filtri e segmenti salvabili, con definizioni versionate e dizionari delle metriche.
- Motore di reportistica con pianificazione, PDF con watermark e CSV strutturati, più registro esportazioni.
- Coda di moderazione con policy, motivazioni codificate, livelli di priorità, ricorsi e supervisione indipendente.
- Audit immutabile per tutte le azioni amministrative, con catena di hash, verifiche di integrità e accesso in sola lettura.

## **Modello RBAC con ruoli e permessi granulari, deleghe temporanee e step‑up per azioni ad alto impatto.**

### **Allegato: matrice sintetica ruoli e capacità**

| **Ruolo** | **Dashboard KPI** | **Report ed export** | **Moderazione** | **Configurazioni** | **Approvazioni** |
| --- | --- | --- | --- | --- | --- |
| **Analista** | Visualizza e crea | Crea e pianifica | No | No | No |
| **Moderatore** | Lettura base | No | Valuta e decide | No | No |
| **Supervisore moderazione** | Lettura avanzata | No | Decide e riesamina | Regole moderazione | Sì su ricorsi |
| **Amministratore sistema** | Lettura | Gestisce limiti e canali | No | Ruoli e permessi | Sì su permessi |
| **Conformità** | Lettura audit | Legge storici | Supervisiona | Linee guida | Sì su policy |

## **Riferimenti**

[1] EU Digital Services Act – Obblighi di trasparenza e gestione segnalazioni - https://eur-lex.europa.eu/eli/reg/2022/2065/oj

[2] RFC 6962 – Transparency logs con Merkle tree per append‑only - https://www.rfc-editor.org/rfc/rfc6962

[3] NIST SP 800‑53 Rev. 5 – Controlli di sicurezza e gestione accessi - https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final

[4] OpenTelemetry Metrics – Specifica per la strumentazione delle metriche - https://opentelemetry.io/docs/specs/otel/metrics/

[5] Santa Clara Principles – Trasparenza e accountability nella moderazione - https://santaclaraprinciples.org

[6] RFC 8446 – TLS 1.3 per la protezione dei canali - https://www.rfc-editor.org/info/rfc8446

# **15. Performance, SLO e Affidabilità del Servizio**

## **15.1. Scopo, perimetro e valore**

Questo capitolo definisce gli obiettivi misurabili di performance e affidabilità dei flussi critici, stabilisce come monitorarli in modo continuo e descrive i meccanismi di fallback per garantire un’esperienza reattiva anche in presenza di degradi o fault parziali. L’approccio si fonda su obiettivi a livello di servizio, su un budget di latenza end‑to‑end assegnato per componente e su un sistema di allarmi ed escalation alimentato da indicatori robusti. Il risultato atteso è un servizio che rimane utilizzabile e prevedibile, con una gestione trasparente degli incidenti e una chiara separazione tra impegni interni e aspettative verso l’utente.

Il perimetro copre le operazioni core già identificate nei flussi di business e nelle funzionalità chiave. Le misure includono latenza P95 e P99 per le operazioni sensibili, disponibilità percepita dall’utente, tasso di errori server e client rilevanti, oltre a indicatori sintetici esposti in app. Queste metriche alimentano la roadmap di qualità e si integrano con osservabilità e pratiche DevOps descritte nel capitolo successivo.

## **15.2. Principi e glossario operativo**

Il servizio adotta un vocabolario coerente per trasformare misurazioni tecniche in impegni comprensibili. Gli indicatori di livello di servizio rappresentano misure oggettive osservate dal punto di vista dell’utente o di un client automatizzato; gli obiettivi di livello di servizio fissano i target su finestre temporali definite; gli accordi di servizio descrivono, ove applicabile, impegni esterni e modalità di comunicazione. Completa il quadro il concetto di budget di errore, ossia la quota di imperfezione tollerata che consente di bilanciare velocità di rilascio e stabilità.

La selezione delle metriche segue due prospettive complementari: una orientata alle risorse per diagnosticare colli di bottiglia infrastrutturali e una orientata al servizio per valutare ciò che percepisce l’utente. Insieme a indicatori sintetici come un indice di soddisfazione da prestazioni, questo binomio consente di decidere rapidamente dove intervenire, evitando sia l’ottimismo delle medie sia la miopia di segnali troppo locali.

## **15.3. Flussi critici e definizione degli SLI**

Sono considerati critici i percorsi che influenzano direttamente l’esperienza e la fidelizzazione: avvio dell’app e caricamento della home, ricerca e suggerimenti, generazione e salvataggio dell’itinerario, visualizzazione della mappa, condivisione e sincronizzazione. Per ciascun flusso si definiscono indicatori stabili nel tempo, con chiara metodologia di calcolo e condizioni di inclusione ed esclusione degli eventi.

Per esempio, la latenza end‑to‑end della ricerca include il tempo dalla richiesta dell’utente alla ricezione del primo payload utile, misurata al client, con esclusione dei tempi di inattività del dispositivo. Il tasso di errori considera soltanto gli esiti non recuperati dal sistema entro la finestra di attesa definita. Le misure sono esposte anche lato server per isolare i contributi delle dipendenze e supportare la diagnosi.

## **15.4. Target SLO e interpretazione**

Gli obiettivi sono calibrati per garantire reattività e continuità d’uso. Per le operazioni interattive, la latenza P95 resta sotto soglie che preservano la fluidità della navigazione, mentre per i processi computazionalmente più intensivi è prevista una latenza più ampia, purché accompagnata da progress feedback e fallback utili. La disponibilità è misurata su base mensile o settimanale, con finestre ridotte per i servizi ausiliari.

A titolo esemplificativo, i target iniziali sono i seguenti:

- Ricerca e suggerimenti: P95 inferiore a 300 ms e P99 inferiore a 600 ms; errori server inferiori allo 0,3% su base giornaliera; disponibilità almeno 99,9% su mese.
- Generazione itinerario: P95 inferiore a 2,0 s e P99 inferiore a 5,0 s; errori server inferiori all’1,0% su base giornaliera; disponibilità almeno 99,9% su mese.
- Salvataggio e sincronizzazione: P95 inferiore a 400 ms; errori server inferiori allo 0,2%; disponibilità almeno 99,95%.
- Visualizzazione mappa e riepilogo: tempo alla prima vista utile P95 inferiore a 500 ms, con contenuti progressivi e placeholder prevedibili. Questi target sono soggetti a revisione periodica sulla base dei dati raccolti e di test con utenti, mantenendo continuità delle definizioni per preservare la confrontabilità storica.

## **15.5. Budget di latenza per componente**

Per prevenire derive di performance, si alloca a ciascun componente una quota del tempo totale disponibile. Il percorso reale può variare, ma il budget guida scelte di caching, parallelizzazione e allocazioni di risorse. La somma dei contributi comprende sempre un margine per imprevisti e jitter.

| **Flusso critico** | **Componente** | **Budget P95** | **Note operative** |
| --- | --- | --- | --- |
| **Ricerca** | App e Edge | 60 ms | Precaricamento query e connessioni tenute calde |
| **Ricerca** | API Gateway | 10 ms | Routing e autorizzazione leggera |
| **Ricerca** | Servizio Autocomplete | 90 ms | Indici in memoria e risposte parziali |
| **Ricerca** | Dipendenza esterna | 80 ms | Timeout aggressivo e fallback su cache |
| **Ricerca** | Serializzazione e rete di ritorno | 60 ms | Compressione bilanciata e batching |
| **Itinerario** | API Edge | 30 ms | Validazioni minime |
| **Itinerario** | Orchestratore | 500 ms | Parallelizzazione delle chiamate |
| **Itinerario** | Ottimizzazione | 900 ms | Limiti per P95, best effort per P99 |
| **Itinerario** | Dati e cache | 200 ms | Cache write through e key ben definite |
| **Itinerario** | Output | 370 ms | Composizione risposta e progress feedback |

Il rispetto del budget è verificato in continuo con distribuzioni di latenza basate su istogrammi, privilegiando P95 e P99 rispetto alle medie. Quando un componente consuma più del proprio budget, scattano azioni di mitigazione automatica e la revisione del design.

## **15.6. Strumentazione e telemetria**

L’instrumentazione cattura metriche coerenti e correlabili: richieste, esiti, distribuzioni di durata, code e risorse. La raccolta distingue strumenti sincroni per la latenza e strumenti asincroni per carichi periodici, con esportazione a un collettore che gestisce aggregazioni e sampling. Le metriche sono arricchite da attributi standardizzati per distinguere percorso, versione, regione e feature flag.

Per correlare esperienza utente e salute del servizio, si adottano convenzioni comuni tra metriche, log e trace, sfruttando campioni rappresentativi per legare eventi estremi a richieste specifiche. Il modello dati delle metriche garantisce compatibilità nel tempo e separa l’evento originale dallo stream aggregato, così da poter cambiare le viste senza perdere il dettaglio necessario ai ricalcoli.

## **15.7. Fallback e degrado controllato**

Il sistema implementa fallback progressivi per preservare la continuità d’uso. In caso di risposta lenta da una dipendenza, la richiesta viene completata con contenuti in cache recente o con una versione semplificata del risultato, lasciando al client la ri‑validazione in background. Se una dipendenza è dichiarata degradata, il sistema interrompe i tentativi aggressivi, riduce i timeout e commuta su percorsi alternativi o su funzionalità offline già descritte in modo estensivo.

I fallback sono progettati per essere espliciti, osservabili e reversibili. Ogni modalità di degrado ha un indicatore di attivazione, un tetto massimo di durata e un effetto previsto sui KPI, documentato insieme alla logica di ripristino. Il client espone segnali visivi discreti e istruzioni contestuali quando la qualità dei dati è temporaneamente ridotta.

![Diagramma Mermaid 28](image28.png)

## **15.8. Indicatori sintetici in app**

L’app comunica lo stato del servizio con indicatori discreti e contestuali. Quando il sistema opera in modalità degradata, un banner informa l’utente che i risultati possono arrivare gradualmente, con suggerimenti pratici e senza interrompere l’attività. Per gli eventi pianificati si utilizza una messaggistica preventiva nelle finestre a minore traffico, riducendo l’attrito e impostando aspettative realistiche.

Il client raccoglie anche segnali anonimi di esperienza percepita, come tempi alla prima vista utile e tassi di abbandono in presenza di placeholder prolungati. Questi segnali alimentano un indice sintetico di soddisfazione da prestazioni, utile per validare che gli SLO tecnici si traducano in un’esperienza fluida.

## **15.9. Allarmi, error budget e escalation**

Gli allarmi si basano sul consumo del budget di errore, non sui singoli superamenti istantanei. Un insieme di regole a diverse finestre verifica tanto i picchi brevi quanto le derive lente, calcolando quanto velocemente si sta bruciando il budget rispetto al periodo di conformità. Le soglie producono livelli di allerta differenziati tra paginazione immediata e apertura di ticket, con tempi e destinatari definiti.

Le escalation sono determinate dal ruolo responsabile del servizio, con backup su turni e canali di comunicazione separati per incidenti maggiori. Quando il consumo del budget supera soglie predefinite, si attiva un meccanismo di protezione della qualità: si riduce il tasso di rilascio o si congelano i deploy automatici, privilegiando azioni correttive e hardening.

## **15.10. Test di carico, stress e resilienza**

Il piano di test include scenari che riflettono la variabilità reale: carico di base calibrato sui picchi giornalieri, spike improvvisi, prove di durata per scovare leak e drift, e stress progressivo fino al punto di collasso controllato. Ogni scenario ha criteri di accettazione legati alle distribuzioni di latenza e ai tassi di errore, con tracciamento del fallimento primo e dei colli di bottiglia successivi.

Sono previsti test di resilienza che simulano timeout, lentezza e indisponibilità di dipendenze, oltre a fluttuazioni di rete e failover regionali. Le prove di degradazione intenzionale con feature flag verificano che i fallback non solo esistano ma siano efficaci, con ripristino automatico alla cessazione della condizione avversa. I risultati dei test alimentano la revisione dei budget e l’ottimizzazione delle code di lavoro.

## **15.11. Narrazione operativa: esperienza reattiva e affidabile**

L’utente avvia l’app in condizioni di rete medie. La home si carica in modo progressivo e la fascia di ricerca diventa subito interattiva. Alla digitazione delle prime lettere, i suggerimenti arrivano entro pochi decimi di secondo; una chiamata esterna è lenta, ma il sistema fornisce suggerimenti locali dalla cache e aggiorna in background appena disponibile la risposta completa. L’interazione resta fluida e la latenza percepita resta entro i confini definiti.

L’utente prosegue generando un itinerario multi‑tappa. L’orchestratore parallelizza le chiamate ai servizi necessari e applica limiti che proteggono l’esperienza media. Laddove una dipendenza impiega troppo, una soluzione approssimata ma utile viene restituita entro il budget P95, con un messaggio che segnala il ricalcolo in corso per migliorare i dettagli. L’utente può comunque salvare e condividere il piano senza attese eccessive.

![Diagramma Mermaid 29](image29.png)

## **15.12. Runbook incidenti e comunicazione**

I runbook definiscono azioni verificate per gli scenari ricorrenti: latenza elevata di un servizio, aumento degli errori server, saturazione delle code, regressioni dopo rilascio e degrado di dipendenze esterne. Ogni runbook inizia con criteri oggettivi di ingresso, elenca verifiche minime e azioni di mitigazione a impatto crescente, e termina con condizioni di uscita e checklist per il ripristino. Alcune azioni richiedono approvazioni specifiche e attivano comunicazioni standard verso stakeholder e canali pubblici quando necessario.

La gestione degli incidenti segue un flusso che limita il tempo a rischio e massimizza la trasparenza. A detection e triage seguono mitigazione e comunicazione, quindi un’analisi delle cause con azioni correttive tracciate. Ogni evento genera evidenze nel registro immutabile e un documento post‑mortem con responsabilità chiare e scadenze.

![Diagramma Mermaid 30](image30.png)

## **15.13. Governance degli SLO e miglioramento continuo**

Gli SLO non sono statici: vengono rivisti periodicamente a partire dalle evidenze di utilizzo e dagli esperimenti di prodotto. Quando l’adozione cresce o cambiano i pattern d’uso, i budget di latenza si riallineano e i fallback si evolvono verso soluzioni più predittive. Il consumo del budget di errore guida le priorità di engineering e influisce direttamente sul ritmo dei rilasci, bilanciando ambizione e stabilità.

Il processo include sessioni di calibrazione con stakeholder tecnici e di prodotto, confronti tra gruppi di utenti e stress test mirati su nuovi percorsi. La roadmap di qualità raccoglie iniziative concrete correlate agli SLO, con benefici attesi e misurazioni di impatto. In questo modo gli obiettivi rimangono aderenti alla realtà e continuano a proteggere l’esperienza.

## **15.14. Integrazione con osservabilità e DevOps**

Le metriche qui definite alimentano dashboard operative e viste prodotto descritte nel capitolo successivo. Tracce e log sono correlati alle metriche per eseguire drill‑down efficaci direttamente dagli allarmi. I pipeline di rilascio utilizzano gate basati su SLO per promuovere o bloccare versioni durante canary e rollout progressivi, includendo test sintetici che replicano i percorsi critici.

La stessa pipeline di infrastruttura applica limiti e quote coerenti con i budget di latenza, prevenendo la saturazione e distribuendo il carico tra regioni e zone. Gli esperimenti di resilienza pianificati con frequenza regolare convalidano che allarmi, fallback e runbook funzionino come previsto, mantenendo il servizio entro i target anche in condizioni avverse.

## **15.15. Deliverable del capitolo**

- Catalogo SLO/SLA con definizioni, finestre di conformità, metodi di calcolo e relazioni con i KPI d’esperienza.
- Budget di latenza per componente sui flussi critici e criteri di verifica automatica.
- Piano di test di carico, stress, spike, durata e resilienza con criteri di successo e dataset di riferimento.
- Sistema di allarmi basato su consumo di budget di errore, con soglie su finestre multiple, destinatari e tempi di risposta.
- Runbook di incident management e modelli di comunicazione per eventi pianificati e imprevisti.

## **Indicatori di stato in app e policy di fallback documentate con impatto atteso su P95 e tasso di errori.**

## **Riferimenti**

[1] OpenTelemetry Metrics – Concetti e strumenti - https://opentelemetry.io/docs/concepts/signals/metrics/

[2] OpenTelemetry Metrics – Specifica - https://opentelemetry.io/docs/specs/otel/metrics/

[3] OpenTelemetry Metrics – Modello dati - https://opentelemetry.io/docs/reference/specification/metrics/data-model/

[4] The USE Method – Analisi prestazioni - https://www.brendangregg.com/usemethod.html

[5] The RED Method – Strumentazione dei servizi - https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/

[6] Alerting sugli SLO con finestre e burn rate - https://developers.soundcloud.com/blog/alerting-on-slos/

[7] Burn rate alerts e finestre multiple - https://help.splunk.com/splunk-observability-cloud/create-alerts-detectors-and-service-level-objectives/create-service-level-objectives-slos/burn-rate-alerts

[8] Apdex Users Group – Standard di soddisfazione - https://www.apdex.org/

# **16. DevOps, CI/CD e Osservabilità**

## **16.1. Scopo, perimetro e valore**

Questa sezione definisce l’insieme di pratiche e capacità che rendono il software rilasciabile in modo frequente e sicuro, con feedback continui dalla produzione e un controllo rigoroso del rischio. L’obiettivo è ridurre il tempo che separa un’idea dalla sua disponibilità per gli utenti, mantenendo stabile la qualità percepita e proteggendo i risultati dei capitoli precedenti. Il perimetro include pipeline di build, test e deploy per mobile e backend, strategie di rilascio progressive, health checks, standard di osservabilità per metriche, log e trace, dashboard e allarmi, politiche di rollback e criteri di retention.

Il valore si misura lungo due assi complementari. Da un lato, la velocità: automazioni su ogni commit, promozione in ambienti dedicati e rilascio continuo permettono iterazioni rapide sulle funzionalità. Dall’altro, la stabilità: strategie di canary e blue‑green, health checks e rollback immediati limitano il raggio di impatto delle regressioni. La telemetria unificata trasforma segnali tecnici e di prodotto in decisioni operative, alimentando l’analisi di incidenti e il miglioramento continuo in sinergia con gli obiettivi di performance e affidabilità descritti in precedenza.

## **16.2. Principi di flusso e metriche di efficacia**

Il flusso dal commit alla produzione è trattato come una catena del valore osservabile e ottimizzabile. Si adottano metriche semplici e comparabili nel tempo per misurare sia il throughput sia la stabilità dei rilasci. La frequenza di deploy e il tempo di attraversamento dalla modifica al rilascio qualificano la capacità di consegna; il tasso di fallimento dei rilasci e il tempo di ripristino qualificano la resilienza del processo. Queste quattro misure costituiscono la bussola che guida le scelte di automazione, la profondità dei test e la severità dei gate.

La loro applicazione pratica non è competitiva con gli obiettivi di qualità: la disciplina di rilasciare cambiamenti piccoli e frequenti riduce l’incertezza, migliora la diagnosi e accorcia il tempo di recupero. La visibilità continua sui parametri riduce le discussioni basate su impressioni e crea un linguaggio comune tra sviluppo, prodotto e operations. I valori target vengono tarati sugli obiettivi di business e reinterpretati periodicamente alla luce dell’evidenza storica.

## **16.3. Workflow CI per backend e mobile**

Il sistema di integrazione continua è pensato per fornire feedback rapidi senza sacrificare profondità e attendibilità. Ogni commit avvia un set di controlli che, con livelli differenti di severità, validano la qualità del codice, la sicurezza e la compatibilità con l’architettura.

- Per il backend, la pipeline costruisce artefatti container, esegue test unitari e di integrazione contro dipendenze containerizzate, verifica contratti tra servizi e produce report di copertura e vulnerabilità. Gli artefatti sono etichettati con digest immutabili e metadati di provenienza per garantire tracciabilità.
- Per il mobile, la pipeline produce build riproducibili, applica firma e notarizzazione automatizzate in ambienti isolati, esegue test unitari e interfaccia su emulatori e dispositivi reali, e distribuisce build interne ai canali di test. Le chiavi di firma sono custodite in un servizio dedicato e usate solo in stadi isolati della pipeline, con audit completo.
    
    ![Diagramma Mermaid 31](image31.png)
    

Il principio guida è “feedback veloce prima, profondo poi”: i controlli più rapidi proteggono l’esperienza degli sviluppatori e intercettano errori evidenti, mentre i test più costosi, inclusi quelli su ambienti effimeri, confermano la profondità di copertura prima della promozione.

## **16.4. Controlli di qualità e sicurezza nella pipeline**

La qualità è trattata come un contratto esplicito della pipeline. I test unitari forniscono una rete fitta a basso costo; i test di integrazione esercitano i contratti espliciti con database, cache e code; i test end‑to‑end validano i percorsi utente in condizioni realistiche. I test flakey vengono isolati e gestiti con politiche di retry e quarantena per evitare falsi positivi e proteggere la produttività.

La sicurezza è integrata “shift‑left”: analisi statica del codice e dei manifesti, scansione delle dipendenze, controlli su file di infrastruttura, generazione di un inventario software per ogni artefatto e firma con attestazioni di provenienza. Le politiche di ammissione in produzione verificano che gli artefatti caricati rispettino firma, inventario e criteri minimi di sicurezza, fallendo in modo chiaro in caso contrario. Questa disciplina rende i rilasci ripetibili e verificabili, riducendo l’attrito con audit e controlli di conformità.

## **16.5. Strategie di rilascio: canary, blue‑green e feature flag**

La promozione in produzione avviene in modo progressivo. Nel canary, una percentuale limitata di traffico viene indirizzata alla nuova versione per osservare indicatori tecnici e di prodotto su finestre di tempo significative; solo al superamento delle soglie la percentuale aumenta fino al completamento. Nel blue‑green, due ambienti equivalenti ospitano vecchia e nuova versione; il passaggio del traffico è istantaneo e il rollback è un’operazione di commutazione, utile quando il rischio o i vincoli di compatibilità sono elevati.

Le feature flag separano rilascio da attivazione, consentendo di controllare l’esposizione di singole funzionalità a segmenti di utenti, dispositivi o aree geografiche. Insieme, queste strategie creano guard‑rail automatici: il pipeline arresta la promozione quando si rileva una regressione e ripristina la versione precedente, mantenendo basso il tempo di esposizione al difetto.

## **16.6. Health checks, readiness e liveness**

La salute applicativa è misurata con endpoint e probe distinti per fasi di vita del processo. Il controllo di avvio consente a processi lenti di inizializzarsi senza essere terminati prematuramente; la readiness segnala quando un’istanza può ricevere traffico, rimuovendola dagli endpoint in caso di dipendenze non disponibili; la liveness rileva deadlock e stati irrecuperabili forzando un riavvio. I parametri di soglia e di ritardo sono calibrati per evitare oscillazioni e per riflettere dipendenze interne ed esterne, con politiche di drenaggio che preservano le richieste in corso.

Questi segnali alimentano sia l’autoscaling sia gli allarmi: un peggioramento della readiness può fermare un rollout, mentre failure ripetute della liveness possono attivare escalation e apertura di un incidente. Health checks coerenti, con semantica stabile, sono prerequisito per rilasci senza interruzione percepita.

## **16.7. Osservabilità unificata con OpenTelemetry**

L’osservabilità si basa su un linguaggio comune di telemetria che unisce metriche, log e trace. Ogni servizio espone un set coerente di attributi, includendo identificativi di richiesta e versione del software, così che l’intero percorso sia correlabile. Le metriche misurano volumi, tempi e errori con distribuzioni di latenza ricche; i log sono strutturati e correlati ai trace per contestualizzare gli eventi; i trace descrivono le relazioni tra servizi e i tempi di ogni salto.

Il modello dati e le convenzioni semantiche garantiscono uniformità tra linguaggi e piattaforme, riducendo il lavoro di integrazione e semplificando la creazione di dashboard consistenti. La raccolta è demandata a un collettore che esegue trasformazioni, arricchimenti e sampling, così da bilanciare costo e profondità delle analisi.

## **16.8. Tracing distribuito e strategie di campionamento**

Per investigare problemi reali senza costi ingestibili, si adotta un campionamento ibrido. Un campione probabilistico a testa fornisce copertura statistica dei flussi sani, mentre il campionamento a coda conserva in modo deterministico le richieste con errori, latenze fuori soglia o pattern rari. In questo modo il sistema mantiene tracce complete di ciò che serve realmente per il debugging, evitando di perdere i casi che contano.

Nei momenti di rilascio o durante incidenti, la pipeline può aumentare temporaneamente la probabilità di campionamento per aree a rischio, annotando i grafici con marcatori di deploy e propagando gli identificativi di build. Il passaggio dalle metriche di servizio al trace della singola richiesta diventa così immediato, accorciando i tempi dall’allarme alla radice del problema.

## **16.9. Metriche, dashboard e criteri di alerting**

Le dashboard principali seguono una grammatica comune, utile sia per la diagnostica sia per le decisioni sui rilasci. Per i servizi, la vista sintetica si concentra sul numero di richieste, gli errori e la distribuzione delle durate; per le risorse, si analizzano utilizzo, saturazione ed errori tipici di infrastruttura. Gli indicatori sono raggruppati per percorso critico, versione e regione, permettendo di isolare velocemente regressioni locali.

Gli allarmi privilegiano segnali che rappresentano l’esperienza utente e il consumo del budget di errore. Soglie su finestre multiple distinguono picchi brevi da derive lente; durante i rollout, le regole includono guard‑rail che fermano la promozione e innescano rollback automatici quando il tasso di errori o la latenza oltrepassano limiti concordati. I tempi di reazione e i canali di escalation sono codificati, evitando ambiguità operative.

## **16.10. Gestione dei log: strutturazione, correlazione e retention**

I log applicativi sono strutturati, con schema stabile e campo di correlazione verso trace e richieste utente. Il collezionamento avviene tramite agent o collettori con parsing e arricchimento standard, includendo attributi di risorsa e contesto. Dati sensibili sono minimizzati e mascherati; l’accesso è soggetto a controllo di ruolo e tracciato in audit.

La retention è bilanciata tra uso operativo e costo: periodo breve in analitico per triage veloce, periodo più esteso in archiviazione economica per indagini e adempimenti. I periodi sono differenziati per tipologia di dato (log, metriche, trace) e per criticità del servizio, con piani di migrazione automatica e indici dedicati alle ricerche più frequenti.

## **16.11. Politiche di rollback e recovery**

Ogni rilascio definisce una strategia di ripristino compatibile con il tipo di cambiamento. Per servizi stateless, il rollback è la commutazione a una versione precedente già in esecuzione; per componenti con schema dati, si applicano pattern compatibili in avanti e indietro, con migrazioni progressive e flag di sicurezza. Le pipeline includono comandi idempotenti di ripristino e check‑list di verifica post‑rollback.

Il successo del rollback è misurato dagli stessi indicatori che governano la promozione: errori, latenza e saturazione devono rientrare nei valori di riferimento entro finestre definite. In caso contrario, il runbook prevede ulteriori azioni di mitigazione, compresa la disattivazione mirata di feature o l’isolamento temporaneo di componenti affetti.

## **16.12. Casi d’uso narrativi**

### **16.12.1. Ogni commit è rilasciabile**

Una sviluppatrice completa una correzione su un componente del percorso di ricerca e invia il commit. In pochi minuti la pipeline conferma che test e scansioni sono verdi; l’artefatto prodotto è firmato e corredato di inventario software. Un ambiente effimero riproduce le dipendenze del servizio per il giro di integrazione, mentre test sintetici esercitano la latenza P95 del percorso critico. Al superamento dei gate, l’artefatto viene promosso in staging con test end‑to‑end programmati; superate anche queste prove, un canary al 5% si avvia automaticamente in produzione. La dashboard mostra un marcatore di deploy, le curve di latenza e il tasso di errori restano entro soglia: dopo il tempo di osservazione, il rollout procede fino al 100%.

### **16.12.2. Regressione in canary e rollback automatico**

Durante un rilascio serale, l’osservabilità rileva un incremento della latenza P95 sul servizio itinerario, limitato al canary. Il pipeline ferma la promozione e, dopo la conferma di una seconda finestra di osservazione, esegue il rollback al gruppo precedente. La liveness rimane stabile, la readiness evita nuovo traffico verso le istanze degradate, e i trace preservati a coda mostrano una dipendenza esterna più lenta del previsto. La correzione viene preparata e validata in staging con test sintetici su quella dipendenza; il canary successivo supera i guard‑rail e il rilascio riprende.

![Diagramma Mermaid 32](image32.png)

## **16.13. Collegamenti con performance e affidabilità**

Le pratiche qui descritte materializzano sul piano operativo gli obiettivi di performance e affidabilità. I gate dei pipeline utilizzano gli stessi indicatori e target definiti per i percorsi critici; le strategie di rilascio riducono l’impatto del consumo di budget di errore; i runbook di ripristino si agganciano alle soglie di breaching. In questo modo gli impegni di qualità si traducono in decisioni automatiche durante i rilasci e in comportamenti coerenti durante gli incidenti, chiudendo il ciclo di miglioramento continuo.

## **16.14. Deliverable del capitolo**

- Workflow CI/CD end‑to‑end per mobile e backend, con firma artefatti, inventario software e promozione automatica tra ambienti.
- Standard di strumentazione per metriche, log e tracing con convenzioni condivise e collettore centralizzato.
- Dashboard unificate per servizi e business, con marcatori di deploy e viste per versione, regione e percorso.
- Criteri di alerting basati su finestre multiple e guard‑rail di rollout con integrazione nei pipeline.
- Politiche di rollback e runbook di recovery, inclusi check‑list post‑ripristino.

## **Piano di retention per log, metriche e trace con livelli di conservazione differenziati.**

## **Riferimenti**

[1] OpenTelemetry Semantic Conventions - https://opentelemetry.io/docs/concepts/semantic-conventions/

[2] OpenTelemetry Logs Specification - https://opentelemetry.io/docs/specs/otel/logs/

[3] OpenTelemetry Sampling: Head e Tail - https://opentelemetry.io/docs/concepts/sampling/

[4] Kubernetes Probes: Liveness, Readiness e Startup - https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes

[5] DORA – The Four Key Metrics - https://dora.dev/guides/dora-metrics-four-keys/

[6] Blue‑Green Deployment: concetti e benefici - https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment

[7] Best practice per dashboard RED, USE e Golden Signals - https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/

[8] Gestione retention log operativi - https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive

[9] Canary e progressive delivery: principi e fasi - https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary

# **17. User Stories, Casi d’Uso e Workflow Operativi**

## **17.1. Metodo e principi di modellazione**

Questo capitolo traduce i requisiti funzionali e non funzionali in storie d’utente, casi d’uso e workflow operativi concreti. L’approccio privilegia la narrazione: ogni storia spiega perché l’utente agisce, cosa si aspetta dal sistema e quali risultati osservabili attestano il valore ottenuto. La qualità delle storie è guidata da principi ampiamente adottati che ne garantiscono chiarezza, indipendenza, valore per l’utente, dimensione contenuta e verificabilità, così da favorire pianificazione, stima e test. I criteri di accettazione sono espressi in forma comportamentale e diventano base per test automatici e manuali.

La descrizione dei casi d’uso usa un linguaggio coerente con la modellazione a oggetti: attori, precondizioni, scenari principali e alternativi, estensioni ed errori prevedibili. I workflow sono resi come sequenze operative o attività con decisioni, ramificazioni e ricongiungimenti. Per evitare ripetizioni inutili, i riferimenti ai flussi end‑to‑end già presentati vengono richiamati quando servono; qui si entra nel dettaglio operativo che consente a progettazione, sviluppo e test di muoversi con un quadro condiviso.

## **17.2. Attori e prospettive d’uso**

Gli attori principali sono il viaggiatore, gli eventuali collaboratori con cui condivide l’itinerario, l’amministratore che governa KPI e moderazione, e il sistema che orchestra chiarimenti, generazione dell’itinerario, suggerimenti, notifiche e sincronizzazione. Questi attori interagiscono con processi trasversali già delineati: conversazione e NLP, costruzione dell’itinerario, mappa e riepilogo, profilo e preferenze, suggerimenti e budget, integrazioni con partner, notifiche e documenti, condivisione e collaborazione, offline e sincronizzazione, autenticazione e privacy, osservabilità e rilasci.

Dal punto di vista operativo, alcune storie sono immediate e a bassa dipendenza (ad esempio l’autocomplete dei luoghi o i promemoria), altre dipendono da fondazioni trasversali (sicurezza, sincronizzazione) o da integrazioni esterne (apertura di alloggi consigliati). La priorità riflette il percorso naturale dell’utente: descrivere un viaggio in chat, vedere emergere l’itinerario, rifinirlo su mappa, arricchirlo con preferenze e suggerimenti, tenerlo sincronizzato tra dispositivi e persone, completare con prenotazioni, promemoria e documenti, il tutto mantenendo l’esperienza fluida, sicura e affidabile.

## **17.3. Backlog narrativo per attore e processo**

### **17.3.1. Viaggiatore: dalla chat all’itinerario vivente**

Il viaggiatore inizia descrivendo il viaggio in chat. Il sistema interpreta luoghi, date e vincoli; quando incontra ambiguità propone chiarimenti mirati e, passo dopo passo, materializza un itinerario multi‑tappa. Ogni modifica fatta in chat ha un corrispettivo visivo: la mappa si aggiorna, il riepilogo compatto mostra cosa è cambiato e la tempistica suggerita tiene conto dei mezzi di trasporto e delle distanze. L’esperienza è coerente tra canali: una preferenza impostata nel profilo influenza suggerimenti e stime; l’autocomplete dei luoghi resta reattivo anche in presenza di rete non ottimale.

Criteri di accettazione. La conversazione deve convergere su un itinerario valido con una sequenza di chiarimenti finita e ragionevole; la mappa deve riflettere subito ogni aggiornamento; il riepilogo deve essere sempre coerente con le tappe e le attività; tempi, mezzi e distanze devono essere plausibili e spiegabili all’utente. L’autocomplete restituisce risultati affidabili con priorità a luoghi più rilevanti rispetto al contesto del viaggio.

### **17.3.2. Profilo, preferenze e suggerimenti**

Il viaggiatore aggiorna il profilo per riflettere gusti, budget e vincoli. Quando emergono preferenze implicite (per esempio scelte ripetute su categoria di alloggi o orari dei pasti), il sistema propone un aggiornamento assistito che l’utente approva esplicitamente. I suggerimenti, coerenti con contesto e preferenze, compaiono senza interrompere il flusso: soluzioni di trasporto, alloggi consigliati apribili nei canali partner, attività pertinenti con finestre temporali compatibili con il piano.

Criteri di accettazione. Le modifiche del profilo hanno effetti misurabili sui suggerimenti; gli aggiornamenti automatici devono essere confermati; i consigli devono essere pertinenti e contestuali; il budget imposta avvisi e limiti, con notifiche non intrusive e strumenti chiari per regolarli.

### **17.3.3. Condivisione, collaborazione e sicurezza**

Il viaggiatore condivide l’itinerario con permessi espliciti. I collaboratori possono commentare o modificare in tempo reale secondo i diritti concessi; la presenza è visibile, i conflitti vengono gestiti in modo prevedibile e tracciato. La condivisione avviene sempre in modo sicuro, con link temporizzati quando necessario e controlli di autenticazione e consenso coerenti con le scelte privacy dell’utente.

Criteri di accettazione. Le modifiche simultanee convergono senza perdita di dati; il proprietario può revocare l’accesso; i destinatari vedono lo stato dell’itinerario e le modifiche sincronizzate; l’accesso è sicuro e tracciato, e le preferenze privacy sono rispettate.

### **17.3.4. Offline, sincronizzazione e coerenza**

In assenza di rete il viaggiatore consulta l’itinerario, apporta modifiche e riceve conferma locale dell’azione. Al ritorno online, i cambiamenti vengono sincronizzati con il resto del gruppo e con gli altri dispositivi, risolvendo eventuali conflitti secondo regole trasparenti. Le differenze sono spiegate e, quando lo scenario lo richiede, la scelta finale torna all’utente con una proposta di fusione.

Criteri di accettazione. Le operazioni essenziali restano disponibili offline; la sincronizzazione è robusta e con esiti chiari; i conflitti sono rari e gestiti con politiche coerenti; lo stato tra dispositivi converge entro tempi ragionevoli.

### **17.3.5. Amministrazione, KPI e moderazione**

Gli amministratori accedono a dashboard di utilizzo e qualità, osservano indicatori sintetici del prodotto e intervengono su segnalazioni di contenuti o comportamenti. Le azioni sono tracciate, reversibili quando previsto e soggette a ruoli. Il tutto è allineato con le linee guida di sicurezza e privacy, includendo audit e controlli a campione.

Criteri di accettazione. I KPI principali sono consultabili con filtri; le azioni di moderazione sono registrate con contesto; l’accesso avviene secondo ruoli; la piattaforma resta reattiva e affidabile durante i picchi di utilizzo.

## **17.4. Casi d’uso principali e alternativi**

### **17.4.1. Conversazione per definire il viaggio**

Scenario principale. L’utente formula l’intento; il sistema estrae luoghi e date, chiede chiarimenti solo quando necessari, propone una prima bozza di itinerario e la rifinisce interattivamente. In parallelo aggiorna riepilogo e mappa, stimando tempi di spostamento e finestre utili per le attività.

Varianti ed eccezioni. Se manca una data o un luogo, il sistema propone opzioni intelligibili; se due luoghi omonimi generano ambiguità, mostra risultati discriminanti; se i tempi risultano incompatibili con le preferenze, propone alternative o segnala l’impossibilità con spiegazioni chiare.

Esempio di criteri di accettazione in formato comportamentale:

`plain text Dato un utente che descrive un viaggio con destinazioni e periodo Quando la descrizione è ambigua su una data Allora il sistema chiede un chiarimento mirato E alla risposta aggiorna l’itinerario e la mappa entro tempi accettabili`

### **17.4.2. Gestione di tappe e attività**

Scenario principale. L’utente aggiunge, riordina o rimuove tappe e attività; il sistema ricalcola automaticamente tempi, distanze e suggerimenti collegati, mantenendo visibile il riepilogo aggiornato.

Varianti ed eccezioni. Se un’attività confligge con orari o vincoli di trasferimento, il sistema propone slot alternativi; se una dipendenza esterna non risponde, la modifica viene applicata localmente e ripianificata al ripristino, senza bloccare l’utente.

### **17.4.3. Profilo, preferenze e aggiornamenti assistiti**

Scenario principale. L’utente aggiorna manualmente il profilo; il sistema applica le preferenze alle proposte di itinerario e suggerimenti. Quando identifica un pattern implicito, propone un aggiornamento automatico che l’utente conferma.

Varianti ed eccezioni. Se l’utente rifiuta l’aggiornamento, la preferenza implicita non viene registrata; se informazioni sensibili sono coinvolte, compaiono spiegazioni sulla privacy e opzioni per limitare il trattamento.

### **17.4.4. Mappa e riepilogo**

Scenario principale. L’utente esplora la mappa, seleziona elementi e modifica parametri; il riepilogo riflette sempre lo stato corrente e consente azioni rapide contestuali.

Varianti ed eccezioni. In caso di rete debole, la mappa degrada con livelli di dettaglio adattivi; il riepilogo resta disponibile con dati locali; al rientro in rete si aggiornano strati e tempi.

### **17.4.5. Suggerimenti, budget e alloggi**

Scenario principale. Il sistema propone elementi rilevanti per tappe e preferenze; l’utente apre alloggi consigliati e può impostare avvisi di spesa e limiti di budget.

Varianti ed eccezioni. Se un canale esterno non risponde, l’apertura è ritentata o rinviata; se il budget è superato, l’utente riceve un avviso e suggerimenti per rientrare nei limiti.

### **17.4.6. Condivisione e collaborazione in tempo reale**

Scenario principale. Il proprietario condivide l’itinerario con permessi; i collaboratori vedono presenza e modifiche in tempo reale; i conflitti sono rari e, se si verificano, vengono conciliati automaticamente con regole prevedibili e tracciate.

Varianti ed eccezioni. Se due utenti modificano lo stesso campo, viene applicata una strategia di fusione o viene richiesto un intervento esplicito; link temporanei possono scadere e richiedere rinnovo.

### **17.4.7. Offline e sincronizzazione multi‑dispositivo**

Scenario principale. L’utente opera offline; l’app registra modifiche e le sincronizza al ripristino della rete; dispositivi e collaboratori convergono sullo stesso stato, con eventuali differenze evidenziate.

Varianti ed eccezioni. In caso di conflitti non risolvibili automaticamente, l’app propone alternative e spiega l’impatto; se la rete è intermittente, le sincronizzazioni sono idempotenti e tolleranti ai duplicati.

### **17.4.8. Sicurezza, privacy e accesso**

Scenario principale. L’utente accede in modo sicuro, gestisce consensi e può esportare o cancellare i propri dati entro tempi definiti. Ogni accesso a dati personali è tracciato.

Varianti ed eccezioni. In caso di autenticazione fallita, sono disponibili percorsi di recupero; richieste di trattamento dati vengono gestite con canali dedicati senza interrompere l’uso dell’app.

### **17.4.9. Amministrazione: KPI e moderazione**

Scenario principale. L’amministratore consulta KPI, filtra per periodo e segmento, e interviene su segnalazioni con workflow che garantiscono audit e reversibilità quando previsto.

Varianti ed eccezioni. Se un dato non è disponibile, viene segnalata la latenza dell’alimentazione; azioni di moderazione in conflitto sono serializzate e tracciate.

## **17.5. Workflow operativi**

### **17.5.1. Chat guidata e costruzione dell’itinerario**

![Diagramma Mermaid 33](image33.png)

Questo workflow mette in evidenza la cadenza domanda‑risposta con chiarimenti minimi, l’aggiornamento incrementale dell’itinerario e la coerenza immediata tra vista conversazionale, mappa e riepilogo.

### **17.5.2. Condivisione e collaborazione**

![Diagramma Mermaid 34](image34.png)

Il sistema garantisce presenza visibile, conflitti rari e risolvibili e audit continuo sulle modifiche più sensibili.

### **17.5.3. Offline e sincronizzazione**

![Diagramma Mermaid 35](image35.png)

Il flusso enfatizza persistenza locale robusta, sincronizzazione idempotente e strategie di fusione trasparenti per arrivare a uno stato condiviso.

## **17.6. Tabella di mappatura eventi, trigger e output attesi**

| **Evento osservabile** | **Trigger utente o sistema** | **Risultato atteso** | **Output verificabile** |
| --- | --- | --- | --- |
| **Intento di viaggio in chat** | Messaggio con destinazioni o vincoli | Bozza di itinerario con chiarimenti minimi | Itinerario creato, mappa e riepilogo aggiornati |
| **Aggiunta o riordino di tappa** | Azione su chat o mappa | Ricalcolo tempi e coerenza con attività | Aggiornamento stime e riepilogo entro tempi attesi |
| **Aggiornamento profilo** | Modifica preferenze | Personalizzazione suggerimenti e budget | Variazione misurabile dei consigli e degli avvisi |
| **Apertura alloggio consigliato** | Selezione di una proposta | Passaggio al canale partner | Tracciamento click e contesto itinerario |
| **Condivisione itinerario** | Invio invito con permessi | Accesso del collaboratore | Log di accesso, presenza visibile, permessi applicati |
| **Modifica offline** | Rete assente | Conferma locale | Sincronizzazione al rientro con eventuale fusione |
| **Superamento soglia budget** | Movimento o prezzo aggiunto | Avviso non intrusivo | Notifica e suggerimento di rientro |
| **Promemoria attività** | Orario pianificato | Notifica puntuale | Conferma di consegna e apertura |
| **Azione di moderazione** | Segnalazione ricevuta | Valutazione e decisione | Audit completo con motivazione |
| **Accesso sicuro** | Login o sessione | Autenticazione e autorizzazione | Token validi e log di audit |

## **17.7. Dipendenze e priorità operative**

L’esperienza conversazionale e la gestione dell’itinerario sono il fondamento e hanno priorità alta: molte storie dipendono da esse. La mappa e il riepilogo sono immediatamente successivi perché sostengono la comprensione e l’azione. Suggerimenti e budget valorizzano il profilo, che a sua volta è prerequisito per personalizzare l’esperienza. Condivisione e collaborazione richiedono politiche di sicurezza solide e una sincronizzazione affidabile; per questo si pianificano dopo l’hardening delle basi e procedono per gradi con feature flag. Offline e sincronizzazione attraversano trasversalmente il prodotto e influenzano fin dall’inizio progettazione dei dati e scelte di conflitto. Amministrazione e KPI maturano man mano che i flussi generano dati sufficienti, mentre le pratiche di rilasci frequenti e osservabilità sostengono tutti i processi.

## **17.8. Criteri di accettazione e definizione di pronto**

Le storie sono pronte quando esprimono chiaramente attore, obiettivo, valore, contesto e limiti, sono stimate e testabili. I criteri di accettazione adottano una forma comportamentale semplice e standard. Esempi sintetici:

- Conversazione e chiarimenti: “Dato un intento con ambiguità, quando l’utente risponde a una domanda mirata, allora il sistema aggiorna itinerario, mappa e riepilogo in modo coerente.”
- Mappa e riepilogo: “Dato un itinerario con tre tappe, quando l’utente ne cambia l’ordine, allora tempi, distanze e suggerimenti si ricalcolano e il riepilogo rispecchia la nuova sequenza.”
- Suggerimenti e budget: “Dato un budget impostato, quando una proposta supera la soglia, allora l’utente riceve un avviso con alternative compatibili.”
- Condivisione: “Dato un invito con permessi di modifica, quando un collaboratore interviene su una tappa, allora il proprietario vede la presenza e l’aggiornamento sincronizzato.”
- Offline: “Dato un dispositivo senza rete, quando l’utente modifica una nota dell’itinerario, allora la modifica è salvata localmente e sincronizzata al ritorno online con eventuale fusione.” La definizione di completato richiede, oltre ai test funzionali, il rispetto degli obiettivi di reattività e affidabilità, la tracciabilità delle azioni sensibili, l’assenza di regressioni note e la copertura dei casi di errore previsti.

## **17.9. Regole operative per casi limite e conflitti**

La collaborazione in tempo reale e l’uso offline introducono conflitti potenziali: modifiche concorrenti su stessi campi, divergenze di sequenza, dati scaduti che incontrano aggiornamenti recenti. Le regole base sono tre. Primo, ridurre il rischio con segnali di presenza e lock ottimistico visibile. Secondo, adottare strategie di fusione consistenti e spiegabili, partendo da criteri semplici come l’ultima modifica valida e passando a fusioni a livello di campo quando la perdita di informazione sarebbe inaccettabile. Terzo, laddove il dominio lo richieda, coinvolgere l’utente con una proposta di risoluzione che mostri in modo chiaro differenze e impatto.

Queste strategie si applicano anche alla sincronizzazione multi‑dispositivo: le operazioni sono idempotenti, le richieste includono versioni e orari di modifica, e le risposte distinguono conferme da conflitti, in modo che l’interfaccia possa comunicare esiti e opzioni all’utente senza ambiguità.

## **17.10. Workflow di eccezione e messaggi all’utente**

Gli errori non sono tutti uguali e non hanno tutti lo stesso impatto sull’utente. Quando una dipendenza esterna rallenta, la conversazione non deve bloccarsi: il sistema mostra un messaggio orientato all’azione e applica un percorso di degradazione con risultati da cache o alternative plausibili, evidenziando eventuali limiti. Quando fallisce un’operazione sensibile (per esempio la condivisione con permessi), il messaggio deve spiegare come riprovare e quali passi sono stati già eseguiti con successo per evitare duplicazioni. Nei promemoria e nei documenti, la puntualità e la chiarezza testuale contano più della quantità di notifiche: meno avvisi, più utili, con un canale di silenziamento temporaneo.

## **17.11. Integrazione con test e rilascio**

Le storie e i casi d’uso qui descritti si trasformano in test di comportamento che verificano i percorsi felici e gli scenari alternativi, includendo i casi limite più probabili. Per i flussi critici, i test sintetici in ambienti di staging riproducono condizioni realistiche di latenza e concorrenza; in produzione, segnali di qualità monitorano l’esperienza e attivano rollback automatici durante i rilasci progressivi. I marcatori di versione sui grafici collegano eventi di deploy a variazioni di metrica, abilitando diagnosi rapide. In questo modo il backlog narrativo diventa al tempo stesso piano di test e base per decisioni di promozione.

## **17.12. Artefatti consegnati dal capitolo**

- Backlog strutturato per attore e processo, con storie narrative e criteri di accettazione pronti per l’automazione dei test.
- Casi d’uso in stile UML con attori, precondizioni, scenari principali e alternativi, e regole di estensione.
- Diagrammi di sequenza e di attività per i flussi chiave (chat e generazione itinerario, condivisione e collaborazione, offline e sincronizzazione).
- Mappatura degli eventi con trigger e output attesi, collegata alle sezioni tecniche di performance, sicurezza e rilasci.

## **Linee guida operative per conflitti e percorsi di degradazione, allineate con obiettivi di reattività e affidabilità.**

## **Riferimenti**

[1] Agile Alliance – INVEST: definizione e origine - https://agilealliance.org/glossary/invest/

[2] INVEST mnemonico per storie di qualità - https://en.wikipedia.org/wiki/INVEST_%28mnemonic%29

[3] Linee guida per storie efficaci - https://www.codurance.com/publications/2015/03/20/user-stories-guidelines

[4] Given When Then per criteri di accettazione - https://en.wikipedia.org/wiki/Given-When-Then

[5] UML Activity Diagram: principi essenziali - https://en.wikipedia.org/wiki/Activity_diagram

[6] Editor collaborativi in tempo reale: conflitti e sincronizzazione - https://en.wikipedia.org/wiki/Collaborative_real-time_editor

[7] Conflict Free Replicated Data Type: nozioni di base - https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type

[8] Offline first e strategie di sincronizzazione - https://developer.android.com/topic/architecture/data-layer/offline-first

[9] Golden Signals per il monitoraggio dell’esperienza - https://developer.cisco.com/articles/what-are-the-golden-signals/what-are-the-golden-signals-that-sre-teams-use-to-detect-issues/

# **18. Regole di Business e Vincoli Operativi**

## **18.1. Scopo e perimetro**

Questo capitolo formalizza le regole di business e i vincoli operativi che governano il comportamento dell’applicazione in scenari reali. L’obiettivo è rendere prevedibile e coerente l’esperienza d’uso, garantendo allo stesso tempo correttezza dei dati, rispetto dei limiti imposti da partner e piattaforme, aderenza a principi di sicurezza e privacy, e capacità di degradare in modo elegante in presenza di errori o interruzioni. Le regole non duplicano i workflow già illustrati ma ne definiscono le condizioni, le eccezioni e le priorità, con impatto diretto su UX, validazione server‑side e qualità del dato.

Le aree coperte includono: tempi di permanenza e orari di apertura, budget per categoria e soglie di spesa, permessi e autorizzazioni, deduzione e conferma delle preferenze, norme per notifiche e documenti, dipendenze tra processi, politiche di validazione lato server e strategie di degradazione e fallback. I collegamenti con i capitoli funzionali e con i test garantiscono tracciabilità e verificabilità dei comportamenti attesi.

## **18.2. Tempi di permanenza e orari di apertura**

La generazione e l’ottimizzazione dell’itinerario rispettano finestre temporali imposte dai luoghi e dagli operatori. Per ogni tappa il sistema calcola una durata consigliata minima e massima, applicando un margine di sicurezza per spostamenti, code e tempi di transito; il margine è adattivo in funzione di stagione, fascia oraria e densità urbana. La pianificazione non alloca attività fuori orario e segnala le porzioni che sforano oltre la chiusura, proponendo alternative compatibili.

Gli orari sono interpretati nel fuso locale del luogo; i periodi oltre la mezzanotte sono gestiti come intervalli contigui su giorni adiacenti e le eccezioni (festività, eventi straordinari, chiusure anticipate) prevalgono sempre sulla ricorrenza settimanale. In assenza di informazione affidabile sugli orari, la pianificazione usa una “modalità cauta”: il sistema consente l’inserimento ma marca la tappa come “orario incerto” e limita la catena di dipendenze che farebbero fallire l’intero piano, lasciando all’utente la conferma definitiva.

Tabella decisionale per schedulazione in base a orari e durata stimata:

| **Condizione** | **Esito** | **Azione sul piano** |
| --- | --- | --- |
| **Durata stimata completamente dentro orari di apertura** | Successo | Inserisci tappa e blocca slot |
| **Durata parzialmente fuori orario** | Avviso | Proponi compressione o spostamento; evidenzia impatto su tappe successive |
| **Orari ignoti o non affidabili** | Stato cauto | Permetti inserimento con etichetta “orario incerto”; pianifica promemoria di verifica |
| **Chiusura straordinaria nel periodo** | Blocco | Sostituisci con alternativa o ripianifica giorno |

## **18.3. Budget per categoria e soglie di spesa**

Il budget è definito su tre livelli: totale viaggio, per giornata e per categoria (alloggio, trasporti, attività, ristorazione). Per ciascuna categoria sono previste due soglie: morbida (avviso non bloccante) e dura (limitazione delle proposte e richiesta di conferma esplicita per superarla). Le valute sono gestite con precisione conforme all’unità minima della valuta e ogni conversione indica data del tasso e arrotondamento applicato.

La ripartizione spesa si aggiorna in tempo reale: ogni nuova proposta o modifica impatta i residui di categoria e di giornata, e il sistema privilegia suggerimenti che mantengono l’utente entro i limiti. In condizioni di volatilità elevata dei prezzi, il sistema applica un buffer di fluttuazione che riduce il rischio di superamento inconsapevole e invita alla conferma quando il delta supera la soglia configurata.

Esempio di politica di soglia:

| **Soglia** | **Comportamento** | **UX** |
| --- | --- | --- |
| **Morbida** | Avviso e alternative equivalenti | Banner non intrusivo e link a proposte in linea |
| **Dura** | Richiesta conferma e filtro proposte | Modal dialog con riepilogo impatto e opzione di riallineamento |

## **18.4. Permessi, ruoli e policy di autorizzazione**

Le regole di accesso combinano ruoli e attributi. I ruoli coprono i casi standard (proprietario, editor, commentatore, lettore, amministratore), mentre gli attributi contestuali (proprietà dell’itinerario, stato del link condiviso, scadenze, livello di confidenzialità, dominio del destinatario) modulano le eccezioni in modo granulare. Le azioni sensibili (condivisione pubblica, esportazione, eliminazione definitiva, modifica budget, pubblicazione di contenuti moderati) richiedono sempre verifica esplicita e tracciamento.

Matrice permessi sintetica:

| **Azione** | **Proprietario** | **Editor** | **Commentatore** | **Lettore** | **Amministratore** |
| --- | --- | --- | --- | --- | --- |
| **Modificare tappe** | Sì | Sì | No | No | No |
| **Modificare budget** | Sì | Su delega | No | No | No |
| **Condividere itinerario** | Sì | Su delega | No | No | No |
| **Allegare documenti** | Sì | Sì | Sì | No | No |
| **Moderare contenuti** | No | No | No | No | Sì |
| **Revocare accessi** | Sì | No | No | No | Sì |

Le decisioni sono sempre valutate lato server; eventuali permessi mostrati lato client sono solo ottimizzazioni di UX e non sostituiscono i controlli di sicurezza. I link condivisi hanno scadenza, limiti di ambito e possono essere revocati in qualsiasi momento.

## **18.5. Deduzione e conferma delle preferenze**

Il sistema deduce preferenze implicite osservando scelte ripetute nel tempo (categorie di alloggio, fasce orarie, stili di attività, mezzi preferiti). Ogni preferenza generata automaticamente ha un livello di confidenza e una finestra di prova: se entro la finestra l’utente conferma con comportamenti coerenti, la preferenza diventa attiva; in caso contrario decade o resta suggerita. Nessuna preferenza implicita che impatti il trattamento di dati personali viene attivata senza opt‑in.

Regola di deduzione esemplificativa:

- Se l’utente seleziona tre volte su quattro alloggi di una stessa categoria di prezzo entro trenta giorni, la categoria diventa preferita a confidenza alta; il sistema propone l’aggiornamento del profilo e, in attesa di conferma, filtra i suggerimenti con priorità ridotta per evitare bias eccessivi.

## **18.6. Norme di notifica e regole anti‑disturbo**

Le notifiche nascono da eventi rilevanti: promemoria di attività imminenti, cambiamenti di stato importanti, avvisi di budget e sicurezza dell’account. Ogni evento è classificato per importanza, sensibilità e urgenza, e mappato su canali distinti che l’utente può regolare. Le regole scoraggiano ridondanze: lo stesso evento non genera notifiche multiple se non cambia il contenuto sostanziale; i riassunti si consolidano quando opportuno.

Classi di importanza e comportamento:

| **Importanza** | **Comportamento** | **Esempi** |
| --- | --- | --- |
| **Alta** | Suono, visibilità immediata, azioni rapide | Promemoria imminente, sicurezza account |
| **Media** | Avviso discreto e azione contestuale | Cambio di orario, suggerimento bloccante |
| **Bassa** | Silenziosa o riepilogo | Nuovi contenuti non urgenti |

Sono previste fasce di silenzio configurabili e limitazioni di frequenza per prevenire sovraccarico. Quando possibile, i promemoria locali su dispositivo sostituiscono push remoti per ridurre dipendenza di rete, purché mantengano affidabilità e puntualità.

## **18.7. Gestione documenti, formati e retention**

I documenti di viaggio (biglietti, voucher, conferme) sono accettati in formati sicuri e verificabili; l’upload applica una allowlist di estensioni e un controllo contenuto per impedire eseguibili o payload dannosi. I metadati sensibili non necessari sono rimossi o mascherati in fase di archiviazione. La visualizzazione si effettua con viewer sicuri e intestazioni che prevengono interpretazioni eseguibili da parte del browser.

La retention si basa su scopo e necessità: documenti collegati a viaggi futuri sono conservati fino alla chiusura amministrativa del viaggio, poi minimizzati o anonimizzati; per esigenze legali o fiscali vengono applicati tempi più lunghi in archivi segregati e auditabili. L’utente può richiedere eliminazione o esportazione dei propri documenti, nel rispetto delle eccezioni consentite dalla normativa.

## **18.8. Validazione server‑side: dati, tempo, valuta, idempotenza**

Tutti i dati provenienti dal client sono validati lato server, separando la validazione sintattica (formato, range, lunghezza) da quella semantica (coerenza con regole di business). Le date sono trattate con fusi orari espliciti e timestamp normalizzati; non si fanno ipotesi su inizio settimana o convenzioni locali senza dichiararle nel dato. Le valute rispettano unità minime e arrotondamenti deterministici; ogni conversione indica fonte e istante del tasso usato.

Le operazioni che creano o modificano risorse espongono chiavi di deduplicazione per garantire idempotenza in caso di ritentativi. Gli errori classificati come temporanei attivano retry con backoff e jitter entro limiti controllati; gli errori permanenti non sono ritentati. Le regole di quota e rate limiting proteggono dal sovraccarico e impediscono che più livelli di retry amplifichino il traffico in condizioni degradate.

## **18.9. Degradazione controllata e fallback**

La piattaforma preferisce sempre un risultato utile e spiegabile a un errore opaco. Quando un servizio esterno è lento o non disponibile, il sistema stacca la chiamata con circuit breaker, propone contenuti dalla cache o stime conservative e segnala chiaramente eventuali limiti. I percorsi conversazionali non si bloccano: in assenza di dati aggiornati su orari o disponibilità, la chat consente di proseguire con assunzioni trasparenti e promemoria per la verifica in seguito.

Diagramma di flusso per degradazione e fallback:

![Diagramma Mermaid 36](image36.png)

## **18.10. Dipendenze tra processi e priorità**

Alcune regole sono fondative e prioritarie: sicurezza e autorizzazioni precondizionano condivisione e collaborazione; la validazione temporale precondiziona costruzione dell’itinerario; la policy di budget guida suggerimenti e filtri; la retention incide su disponibilità dei documenti in fase di check‑in o rimborso. Le dipendenze sono dichiarate e verificate in modo deterministico, così che un errore non propaghi oltre il necessario e sia possibile comunicare all’utente l’esatto punto di blocco con la migliore azione correttiva.

## **18.11. Implicazioni su UX e dato**

L’esperienza utente è progettata per rendere visibili cause ed effetti delle regole senza interrompere il flusso. Le etichette “orario incerto”, “stima da cache” o “superamento soglia” trasformano vincoli tecnici in segnali comprensibili. Sul dato, le regole producono metadati di qualità: fonte, freschezza, confidenza, livello di privacy, diritti del soggetto e base giuridica. Questi metadati alimentano anche le metriche e i controlli amministrativi, permettendo a chi governa la piattaforma di misurare impatto e aderenza alle policy.

## **18.12. Matrici di decisione e criteri di validazione**

### **18.12.1. Schedulazione attività**

| **Input** | **Regola** | **Esito** |
| --- | --- | --- |
| **Durata stimata + orari luogo** | Se durata oltrepassa la chiusura | Proponi slot alternativo o split |
| **Spostamento tra tappe** | Se tempo di transito eccede buffer | Allunga sosta precedente o riduci attività |
| **Giorno festivo speciale** | Se presente | Sostituisci o ripianifica |

### **18.12.2. Budget e suggerimenti**

| **Input** | **Regola** | **Esito** |
| --- | --- | --- |
| **Nuova proposta > soglia morbida** | Avvisa e ordina alternative per rapporto qualità/prezzo | Conferma o sostituisci |
| **Nuova proposta > soglia dura** | Richiedi conferma esplicita | Applica filtro restrittivo |
| **Volatilità prezzo alta** | Se delta oltre soglia | Applica buffer e sollecita conferma |

### **18.12.3. Permessi e condivisione**

| **Input** | **Regola** | **Esito** |
| --- | --- | --- |
| **Azione su itinerario condiviso** | Se ruolo non autorizzato | Nega e spiega motivo |
| **Link pubblico** | Scadenza o revoca | Accesso negato e tracciato |
| **Dato confidenziale** | Richiede contesto sicuro | Nascondi o minimizza nelle viste condivise |

### **18.12.4. Validazione dati**

| **Campo** | **Regola** | **Errore** |
| --- | --- | --- |
| **Data e ora** | Timestamp con fuso esplicito e intervallo valido | 400 con dettaglio campo |
| **Valuta e importo** | Unità minima e arrotondamento deterministico | 422 con suggerimento correzione |
| **File allegato** | Estensione in allowlist e controllo contenuto | 415 con motivazione e guida |

## **18.13. Diagrammi di supporto**

### **18.13.1. Valutazione permessi lato server**

![Diagramma Mermaid 37](image37.png)

### **18.13.2. Pianificazione con orari e buffer**

![Diagramma Mermaid 38](image38.png)

## **18.14. Collegamenti e verifiche**

Le regole qui definite si applicano ai moduli e ai processi descritti nei capitoli funzionali e sono verificate nei test comportamentali. Le soglie operative entrano nei criteri di accettazione, mentre le strategie di degradazione e i limiti di frequenza si riflettono nelle metriche di affidabilità. Le policy di validazione alimentano test automatici lato server e strumenti di moderazione e audit. La coerenza tra queste regole e gli obiettivi di performance e rilascio continuo garantisce che nuove funzionalità rispettino sin da subito vincoli e aspettative.

## **Riferimenti**

[1] NIST SP 800‑162 – Attribute Based Access Control - https://www.idmanagement.gov/laws-policies-standards/nist-sp-800-162/

[2] NIST – Role Based Access Control model - https://www.nist.gov/publications/revised-model-role-based-access-control

[3] Android Developers – Notifications: linee guida e canali - https://developer.android.com/design/ui/mobile/guides/home-screen/notifications

[4] Apple Developer – Notification Best Practices - https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/NotificationBestPractices.html

[5] IANA – Time zone database e RFC - https://data.iana.org/time-zones/tz-link.html

[6] Google Places – Opening hours e campi correlati - https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places

[7] Google Places Insights – Schema opening hours e periodi oltre mezzanotte - https://developers.google.com/maps/documentation/placesinsights/reference/core-schema

[8] ISO 4217 – Codici valuta e minor units - https://en.wikipedia.org/wiki/ISO_4217

[9] OWASP – Input Validation Cheat Sheet - https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html

[10] OWASP – Unrestricted File Upload - https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload

[11] Circuit Breaker pattern – Microservices - https://microservices.io/patterns/reliability/circuit-breaker.html

[12] Google Cloud – Retry con exponential backoff e jitter - https://cloud.google.com/storage/docs/retry-strategy

# **19. Governance e Responsabilità (RACI)**

## **19.1. Scopo, principi e perimetro**

Questo capitolo definisce la cornice di governance del prodotto attraverso una matrice RACI completa e le relative politiche di escalation, controllo e audit. L’obiettivo è eliminare ambiguità su chi decide, chi esegue, chi viene consultato e chi deve essere informato, rendendo tracciabili le responsabilità operative lungo l’intero ciclo di vita: dall’ideazione e pianificazione dell’itinerario, alla condivisione e moderazione, fino alla gestione degli incidenti e al rilascio in esercizio. La matrice si allinea ai ruoli RBAC della piattaforma e integra le regole di sicurezza, privacy e amministrazione già descritte.

Il perimetro comprende processi trasversali e user stories prioritarie, con particolare attenzione a consenso e proprietà dei dati, segregazione dei compiti in Admin Console, auditabilità end to end e coerenza con i KPI. I collegamenti principali sono con gli Attori e Ruoli, i Processi end to end e i capitoli su Admin, Sicurezza, Performance e DevOps; quando necessario, i riferimenti puntano alle sezioni già esistenti senza ripetere i workflow.

## **19.2. Ruoli e allineamento con RBAC**

La governance si fonda su ruoli chiaramente identificati e mappati su privilegi applicativi. I ruoli di piattaforma tipici includono proprietario dell’itinerario, collaboratore, lettore, amministratore applicativo, moderatore, product owner, responsabile della sicurezza, data protection officer, supporto di primo e secondo livello, e team operativi. Ogni ruolo è collegato a insiemi di permessi coerenti con il principio del minimo privilegio e con le relazioni gerarchiche tra ruoli.

L’allineamento tra RACI e RBAC evita discrepanze tra ciò che è formalmente assegnato e ciò che è tecnicamente possibile. Un compito marcato come approvazione richiede che il ruolo identificato come approvatore possieda nell’RBAC i permessi di conferma e di firma digitale del cambiamento; i ruoli responsabili devono disporre dei permessi di esecuzione e di scrittura sui record coinvolti; i ruoli consultati e informati hanno visibilità mirata e canali di comunicazione dedicati. Questa corrispondenza è verificata automaticamente all’atto della pubblicazione o modifica della RACI.

## **19.3. Matrice RACI per processi chiave**

La matrice seguente sintetizza le responsabilità sui processi principali. Ogni riga ha un solo approvatore, uno o più responsabili e attori consultati o informati secondo necessità. Ulteriori dettagli operativi sono rinviati ai capitoli sui Processi e sull’Admin.

| **Processo** | **Proprietario Itinerario** | **Collaboratore** | **Lettore** | **Admin Applicativo** | **Moderatore** | **Product Owner** | **Security Officer** | **DPO** | **SRE DevOps** | **Supporto L1 L2** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Pianificazione itinerario automatica** | R | R | I | I | I | A | I | I | I | I |
| **Conferma prenotazioni partner** | R | R | I | I | I | A | I | I | I | I |
| **Gestione documenti di viaggio** | R | R | I | I | I | A | I | C | I | I |
| **Notifiche e canali** | R | C | I | I | I | A | I | C | I | I |
| **Condivisione e accessi** | R | C | I | A | I | C | C | C | I | I |
| **Moderazione contenuti** | I | I | I | I | A | C | C | I | I | R |
| **KPI e quality review** | I | I | I | I | I | A | C | C | C | C |
| **Gestione incidenti P1 P3** | I | I | I | I | I | C | A | C | R | R |
| **Rilascio in produzione** | I | I | I | I | I | A | C | I | R | C |
| **Consenso e preferenze privacy** | I | I | I | I | I | C | C | A | I | I |
| **Gestione ruoli e accessi** | I | I | I | A | I | C | C | C | I | I |
| **Audit log e investigazioni** | I | I | I | C | I | I | A | C | C | C |
| **Approvazione cambiamenti critici** | I | I | I | C | I | A | C | C | R | C |
| **Data retention e cancellazione** | I | I | I | I | I | C | C | A | I | I |

Legenda: R Responsabile, A Approvatore, C Consultato, I Informato.

## **19.4. RACI per user stories prioritarie**

Per le storie ad alto impatto operativo, la RACI specifica i passaggi decisionali e i punti di controllo. Ad esempio, per il superamento di una soglia budget dura, il proprietario richiede l’eccezione, il product owner la approva, il collaboratore è consultato se impatta la pianificazione condivisa, e gli altri partecipanti sono informati tramite feed di attività. Per la richiesta di condivisione pubblica, l’amministratore applicativo approva l’abilitazione della funzionalità, il proprietario esegue l’azione, il moderatore è consultato per policy di contenuto e il security officer è informato per valutazioni periodiche.

Casi come caricamento di un documento sensibile o creazione di un link di accesso temporaneo prevedono segregazione dei compiti: chi propone non approva e chi approva non implementa. Le attività sono registrate con evidenze di chi, cosa, quando e perché, così da rendere auditabile l’intero flusso senza appesantire l’esperienza utente.

## **19.5. Segregazione dei compiti in Admin Console**

In Admin Console sono definite combinazioni di compiti che non possono coesistere nello stesso utente, per ridurre il rischio di abuso e di errore. La gestione ruoli è distinta dall’assegnazione dei permessi privilegiati; l’approvazione di cambiamenti critici è separata dalla loro esecuzione operativa; la moderazione non coincide con la pubblicazione di linee guida che regolano la moderazione stessa. Quando, per vincoli organizzativi, non è possibile separare tutti i compiti, sono obbligatorie compensazioni come controllo a quattro occhi, supervisione e revisione frequente degli accessi.

Tabella di esempio per i controlli di segregazione:

| **Operazione Admin** | **Richiede doppia approvazione** | **Incompatibilità esplicite** | **Evidenze minime** |
| --- | --- | --- | --- |
| **Creazione ruolo privilegiato** | Sì | Con approvazione ruoli | Ticket, log firma digitale, motivazione |
| **Assegnazione permessi critici** | Sì | Con gestione ruolo | Ticket, log, scadenza temporale |
| **Revoca accessi privilegiati** | No | Nessuna | Log e notifica all’owner |
| **Abilitazione link pubblico** | Sì | Con moderazione | Log, scadenza e ambito |
| **Cambio configurazione sicurezza** | Sì | Con rilascio in produzione | Piano di change, approvazioni, esito test |

## **19.6. Auditabilità, tracciamento e controllo**

Ogni evento rilevante genera una traccia immutabile con identificativo dell’operazione, soggetto, risorsa coinvolta, timestamp preciso e motivazione. Sono registrate anche le letture su dati sensibili in modo proporzionato, per garantire accountability senza compromettere privacy e performance. La consultazione dei log è limitata ai ruoli autorizzati e accompagnata da segnali di uso, così da creare un ulteriore livello di controllo.

Le evidenze supportano investigazioni e post mortem, e abilitano i riesami periodici. I log sono conservati in modo append only, replicati su più domini di affidabilità e firmati per assicurare integrità. Indicatori come copertura dei log sugli eventi chiave, tempo medio di estrazione delle evidenze e tasso di anomalie non spiegate misurano l’efficacia della funzione di audit.

## **19.7. Consenso, proprietà dei dati e responsabilità privacy**

La gestione del consenso è tracciata per scopo e canale, con cronologia delle versioni e revoca granulare. Le preferenze di comunicazione, la profilazione per suggerimenti e l’uso dei dati a fini statistici sono distinguibili e possono essere accettati o rifiutati separatamente. Il titolare dei dati riceve riscontro chiaro su base giuridica, durata del trattamento e diritto alla revoca senza penalizzazioni ingiustificate.

Le responsabilità sono ripartite in modo esplicito: il product owner presidia l’aderenza funzionale alle policy, il data protection officer supervisiona conformità e valutazioni di impatto, il security officer valuta rischi e controlli tecnici, l’amministratore applicativo implementa regole di accesso e retention. Ogni attore ha canali dedicati per consultazione e per segnalazioni, con tempi di risposta definiti e riesame sistematico dei casi più sensibili.

## **19.8. Policy di escalation e gestione incidenti**

Gli incidenti sono classificati per impatto e urgenza in livelli di severità; ciascun livello ha un responsabile operativo, un approvatore e stakeholder consultati e informati con cadenze prefissate. Un incidente critico attiva immediatamente il comandante dell’incidente, il referente tecnico e il responsabile della comunicazione; la sicurezza e il data protection officer sono consultati quando l’evento tocca confidenzialità, integrità o disponibilità di dati personali.

La regola di base è che la proprietà del servizio resta responsabile del ripristino, mentre l’approvazione delle deroghe ai controlli è separata e tracciata. Le comunicazioni interne ed esterne seguono un ritmo regolare e prevedono versioni sintetiche per gli informati e approfondimenti tecnici per i consultati. Le promesse al cliente sono sempre approvate dall’approvatore del processo per garantire coerenza con gli impegni di servizio.

Diagramma di escalation semplificato:

![Diagramma Mermaid 39](image39.png)

## **19.9. Calendario di riesame e controlli periodici**

La governance è sostenuta da un calendario ricorrente che scandisce verifiche, aggiornamenti e attestazioni. Su base settimanale si controllano code di moderazione, errori ricorrenti e indicatori di qualità; mensilmente si rivedono eccezioni approvate, regole di accesso temporaneo e incidenti chiusi; trimestralmente si svolgono access review dei privilegi, controlli di segregazione dei compiti e aggiornamento della matrice RACI; su cadenza semestrale o annuale si verificano le valutazioni di impatto e la coerenza con le policy di retention.

Gantt di massima per il prossimo ciclo di governance:

![Diagramma Mermaid 40](image40.png)

## **19.10. Allineamento RACI con i permessi applicativi**

Per rendere operativo il modello, ogni lettera della RACI è associata a insiemi di permessi e a vincoli di esecuzione. Il responsabile deve poter creare, aggiornare o eseguire l’azione; l’approvatore deve poter firmare, rilasciare o autorizzare una deroga; il consultato ha visibilità di bozza e diritto di commento; l’informato riceve aggiornamenti sintetici. I controlli impediscono che un utente ricopra ruoli incompatibili sullo stesso oggetto, e i workflow rifiutano automaticamente richieste che violano segregazioni o deleghe scadute.

Tabella di corrispondenza semplificata:

| **Lettera** | **Esempi di permessi** | **Vincoli** |
| --- | --- | --- |
| **R** | Creazione risorsa, modifica contenuto, esecuzione operazione | Non può auto approvare cambiamenti critici |
| **A** | Approvazione cambiamento, firma rilascio, conferma eccezione | Un solo approvatore per riga di RACI |
| **C** | Accesso in lettura di bozza, commento vincolante | Visibilità limitata al perimetro del processo |
| **I** | Notifica di stato e risultato | Nessun accesso a bozze o dati sensibili |

## **19.11. Aggiornamento e governo della RACI**

La matrice è un documento vivo, versionato e pubblicato in Admin Console. Ogni modifica passa per proposta, revisione e approvazione, con controllo automatico di coerenza rispetto ai permessi RBAC. La diffusione è curata con comunicazioni sintetiche a chi è informato e con sessioni mirate per i consultati. Le verifiche trimestrali intercettano ruoli orfani, aree senza approvatore univoco e conflitti con segregazioni.

Durante incidenti o cambiamenti importanti, la RACI può essere temporaneamente estesa con ruoli ad hoc, ma tali estensioni hanno scadenza automatica e rientrano nel ciclo di riesame. I post mortem includono sempre una verifica di adeguatezza della RACI e producono azioni correttive quando emergono ambiguità o sovrapposizioni.

## **Riferimenti**

[1] Responsibility assignment matrix - https://en.wikipedia.org/wiki/Responsibility_assignment_matrix

[2] RACI matrix overview - https://www.cio.com/article/287088/project-management-how-to-design-a-successful-raci-project-plan.html

[3] RACI chart definitions - https://www.atlassian.com/work-management/project-management/raci-chart

[4] Role Based Access Control - https://en.wikipedia.org/wiki/Role-based_access_control

[5] ISO 27001 Segregation of Duties - https://www.isms.online/iso-27001/annex-a-2022/5-3-segregation-of-duties-2022/

[6] ISO 27001 Access Rights 5.18 - https://www.isms.online/iso-27001/annex-a-2022/5-18-access-rights-2022/

[7] Audit log best practices - https://www.digitalguardian.com/index.php/blog/audit-log-best-practices-security-compliance

[8] Incident severity levels - https://www.atlassian.com/incident-management/kpis/severity-levels

[9] Incident response examples - https://odown.com/blog/incident-severity-levels/

[10] GDPR Article 39 Tasks of the Data Protection Officer - https://gdpr.eu/article-39-tasks-of-the-data-protection-officer/

# **20. Mappatura e Copertura Requisiti (Tracciabilità & Gap Analysis)**

## **20.1. Obiettivi, perimetro e valore**

Questo capitolo istituisce la tracciabilità end‑to‑end tra macrorequisiti, requisiti di dettaglio e user stories, collegandoli in modo bi‑direzionale a processi, casi d’uso, test di verifica, componenti applicative e KPI. La matrice risultante è lo strumento di prova di conformità e la base operativa per test e audit: consente di dimostrare cosa è stato realizzato, come è stato validato e con quali evidenze di qualità e copertura. La mappatura evita duplicazioni, riduce il rischio di gap funzionali e mantiene allineati backlog, progettazione e rilascio.

Il perimetro copre tutte le aree funzionali del prodotto: chat conversazionale e NLP, itinerario multi‑tappa, mappa e riepilogo, profilo e preferenze, suggerimenti personalizzati e budget, integrazioni con partner, notifiche e documenti, condivisione e collaborazione, offline e sincronizzazione, autenticazione e privacy, amministrazione e KPI, performance e DevOps. L’allineamento con i capitoli dedicati è verificato in modo esplicito per garantire la coerenza del racconto funzionale con gli asset di test, con particolare attenzione alla governance definita e ai workflow operativi già descritti.

## **20.2. Metodologia di tracciabilità e criteri di completezza**

La tracciabilità è bi‑direzionale: da ogni requisito è possibile risalire ai test e viceversa, e ogni elemento intermedio (user story, caso d’uso, processo) è attraversabile senza salti. Il modello segue il filo digitale che parte dalle esigenze di business, scende alle specifiche implementative e risale attraverso esiti di test e KPI. La matrice è pensata per restare leggibile anche con elevato numero di artefatti: per questo è articolata in viste per ambito, per processo e per componente, tutte alimentate da un unico registro logico.

La completezza si misura su tre assi: copertura funzionale (ogni requisito ha almeno una user story e almeno un test associato), copertura di validazione (ogni user story ha test eseguiti con esito coerente con i criteri di accettazione) e copertura di rischio (i requisiti ad alta priorità o rischio hanno test addizionali e controlli non funzionali). Le regole di accettazione prevedono che non esistano elementi orfani o non collegati e che ogni difetto aperto su uno di essi sia correttamente tracciato fino alla sua chiusura.

Diagramma concettuale del filo di tracciabilità:

![Diagramma Mermaid 41](image41.png)

## **20.3. Struttura della matrice e colonne standard**

La matrice di tracciabilità adotta colonne standard per favorire la consultazione incrociata e l’estrazione di viste dedicate. Ogni riga identifica un elemento funzionale aggregato (di norma un requisito di dettaglio o una coppia requisito‑user story) e lo collega a vari artefatti della soluzione: processo, caso d’uso, test, KPI, componente applicativa, owner e release. Le colonne minime sono: ambito, titolo dell’elemento, processo di riferimento, caso d’uso principale, suite di test associata, KPI di verifica, componente, owner, stato e release assegnata.

Il collegamento ai capitoli del documento rende navigabile la matrice senza ripetere contenuti già esposti. I casi d’uso richiamano i flussi narrativi già presenti, mentre i test sono categorizzati come funzionali, non funzionali e di integrazione. I KPI legano l’esito alla qualità percepita: accuratezza NLP, affidabilità del calcolo tempi, latenza media, disponibilità del servizio, tasso di errori, qualità dei suggerimenti, rispetto del budget e correttezza delle notifiche.

## **20.4. Matrice di tracciabilità consolidata per ambito**

La tabella seguente presenta la vista sintetica per ambito. Per ogni area sono indicati i principali elementi tracciati verso processi, casi d’uso, test e KPI, così da offrire una panoramica leggibile della copertura end‑to‑end. I titoli dei requisiti e delle storie mantengono la denominazione ufficiale, mentre i collegamenti puntano ai capitoli relativi a processi, casi d’uso e amministrazione.

| **Ambito** | **Requisiti di dettaglio e storie principali** | **Processi e workflow** | **Casi d’uso di riferimento** | **Test di validazione** | **KPI principali** |
| --- | --- | --- | --- | --- | --- |
| **Chat conversazionale e NLP** | Estrazione entità viaggio; Flussi conversazionali e chiarimenti; Descrivere il viaggio in chat; Chiarimenti automatici | Raccolta requisiti viaggio; Disambiguazione intenti; Gestione sessione | Conversazione iniziale; Richiesta chiarimento; Conferma dati | Accuratezza NER; Test dialogici a scenario; Resistenza a input rumorosi | Precisione e richiamo estrazioni; Tasso di chiarimenti risolti; Tempo alla conferma |
| **Itinerario multi‑tappa** | CRUD itinerario; Calcolo spostamenti e tempi; Gestire tappe e attività; Vedere tempi e mezzi | Pianificazione; Ottimizzazione tempi; Aggiornamenti | Creazione tappe; Ricalcolo tempi; Conferma itinerario | Test su orari e durate; Test di vincoli; Test edge case | Accuratezza tempi stimati; Numero ricalcoli; Soddisfazione pianificazione |
| **Mappa e riepilogo** | Mappa itinerario interattiva; Riepilogo compatto; Esplorazione mappa; Riepilogo aggiornato | Navigazione in app; Visualizzazione | Panoramica mappa; Zoom su tappa; Consultazione riepilogo | Test di interazione; Test di sincronizzazione dati | Latenza render mappa; Coerenza riepilogo; Errori di rendering |
| **Profilo e preferenze** | Schema profilo; Gestione preferenze; Apprendimento preferenze; Aggiornare e confermare aggiornamenti | Gestione profilo; Consensi | Modifica preferenze; Conferma suggerimenti | Test su persistenza e conflitti; Test consenso | Tasso di accettazione suggerimenti; Coerenza preferenze; Consensi aggiornati |
| **Suggerimenti e budget** | Motore suggerimenti; Controllo budget e spese; Ricevere suggerimenti; Gestire budget e avvisi | Generazione raccomandazioni; Controllo spesa | Ricezione suggerimenti; Alert budget | Test di pertinenza; Test soglie e valute | Pertinenza suggerimenti; Rispetto budget; Falsi positivi avvisi |
| **Integrazioni partner** | Integrazione alloggi; Integrazione mappe e luoghi; Aprire alloggi consigliati; Autocomplete luoghi | Prenotazioni; Ricerca luoghi | Apertura partner; Ricerca e selezione | Test affiliazione; Test limiti e quote | Tasso successo apertura; Accuratezza autocomplete; Errori integrazione |
| **Notifiche e documenti** | Notifiche push e scheduling; Gestione documenti; Ricevere promemoria; Tenere sotto controllo documenti | Scheduling; Compliance documentale | Creazione promemoria; Upload documento | Test fusi orari; Test scadenze | Puntualità notifiche; Completezza documenti; Tasso reminder efficaci |
| **Condivisione e collaborazione** | Condivisione sicura; Collaborazione multiutente; Condividere in sicurezza; Collaborare in tempo reale | Condivisione; Permessi | Invito collaboratori; Editing in tempo reale | Test permessi; Test conflitti | Integrità modifiche; Esperienza collaborativa; Link scaduti |
| **Offline e sync** | Cache itinerari e mappe base; Sync e conflitti; Consultare offline; Vedere modifiche sincronizzate | Sincronizzazione; Gestione conflitti | Uso offline; Risoluzione conflitto | Test di conflitto; Test reti variabili | Tasso conflitti risolti; Tempo sync; Perdita dati |
| **Sicurezza e privacy** | OAuth2 OIDC e MFA; Privacy, GDPR e cifratura; Accedere sicuro; Gestire privacy e consensi | Autenticazione; Gestione consensi | Login sicuro; Revoca consenso | Test MFA; Test cifratura; Test diritti interessato | Tasso MFA riusciti; Tempo evasione richieste; Incidenti privacy |
| **Admin e moderazione** | Report e KPI; Moderazione contenuti; Vedere KPI; Moderare contenuti | Amministrazione; Controllo qualità | Visualizzazione KPI; Moderazione | Test permessi admin; Test moderazione | Aggiornamento KPI; Tempo moderazione; Coerenza policy |
| **Performance e DevOps** | SLO performance e affidabilità; CI CD monitoring tracing; App reattiva e affidabile; Rilasci frequenti e sicuri | Rilascio; Monitoraggio | Distribuzione; Osservabilità | Test carico e resilienza; Test pipeline | Rispetto SLO; Tempo ripristino; Frequenza rilasci |

## **20.5. Vista per processo e per componente**

Per ogni processo di business esiste una vista dedicata che mostra quali elementi della matrice lo alimentano. La pianificazione itinerario, ad esempio, aggrega chat e NLP, itinerario multi‑tappa, mappa e integrazioni, consentendo di verificare con un colpo d’occhio se tutti i controlli e i test sono presenti. Analogamente, la vista per componente consente di accertare che ogni servizio applicativo abbia il proprio perimetro di requisiti e test: motore NLP, motore itinerario, servizio mappe, servizio suggerimenti, connettori partner, servizio notifiche, identità, admin console, pipeline di rilascio e osservabilità.

Queste viste sono sincronizzate: un aggiornamento nella vista per componente si riflette sulle viste per processo e per ambito, evitando divergenze e garantendo coerenza. Il modello favorisce anche la gestione differenziata della copertura: componente ad alto rischio o elevato impatto utente riceve priorità di test e soglie di copertura più stringenti.

## **20.6. Indicatori di copertura per release**

La copertura è misurata per ambito, processo e componente e viene tracciata per ogni release. I valori obiettivo sono stabiliti in modo progressivo per favorire un’adozione ordinata, con criteri di uscita chiari.

| **Indicatore** | **R1 Obiettivo** | **R2 Obiettivo** | **R3 Obiettivo** | **Note di calcolo** |
| --- | --- | --- | --- | --- |
| **Copertura requisiti testata** | 80 percento | 90 percento | 95 percento | Requisiti con almeno un test passato su totale requisiti in scope |
| **Copertura user stories testata** | 85 percento | 92 percento | 97 percento | Storie con suite di test completata su totale storie in scope |
| **Tracciabilità bi‑direzionale completa** | 90 percento | 95 percento | 100 percento | Link esistenti e validi in entrambi i sensi su link previsti |
| **Difetti critici aperti su release** | 0 | 0 | 0 | Difetti alta severità non risolti e collegati a requisiti in release |
| **Copertura non funzionale prioritaria** | 70 percento | 85 percento | 95 percento | Test performance, sicurezza, affidabilità su ambiti critici |

## **20.7. Gap analysis: esiti e priorità**

L’analisi dei gap mette in evidenza aree dove la tracciabilità o la copertura non raggiungono i livelli attesi, con piano di remediation e milestone di verifica. La tabella seguente elenca i principali gap osservabili in una prima iterazione, con impatto e interventi proposti.

| **Gap individuato** | **Ambito** | **Impatto** | **Rischio** | **Remediation proposta** | **Milestone** |
| --- | --- | --- | --- | --- | --- |
| **Chiarimenti conversazionali incompleti su entità ambigue** | Chat e NLP | Qualità dati viaggio | Medio | Estendere set di disambiguazione e test scenario | Inclusione in R1.1 |
| **Assenza di test su cambi improvvisi di orario del trasporto** | Itinerario multi‑tappa | Affidabilità pianificazione | Alto | Suite test eventi imprevisti e ricalcolo | R1 chiusura |
| **Incompletezza della coerenza tra riepilogo e mappa in aggiornamento** | Mappa e riepilogo | Esperienza utente | Medio | Test di sincronizzazione UI e caching differito | R1 chiusura |
| **Valute miste non normalizzate su controllo budget** | Suggerimenti e budget | Correttezza spesa | Alto | Normalizzazione valute e test soglie | R2 chiusura |
| **Rate limit non coperti nei test di integrazione partner** | Integrazioni | Continuità servizio | Medio | Test quote e fallback; backoff esponenziale | R1 chiusura |
| **Promemoria sensibili non validati su fusi orari** | Notifiche e documenti | Conformità e UX | Alto | Suite fusi orari e calendario | R1 chiusura |
| **Link di condivisione senza scadenza predefinita** | Condivisione | Sicurezza | Alto | Scadenza default e rotazione link | R1 chiusura |
| **Politiche di risoluzione conflitti offline poco esercitate** | Offline e sync | Perdita dati | Alto | Test sistematici di merge e conflitto | R2 chiusura |
| **MFA coperto solo per flusso base** | Sicurezza e privacy | Rischio account | Alto | Test MFA su device nuovi e recupero | R1 chiusura |
| **Moderazione senza campionamento qualità periodico** | Admin e moderazione | Rischio contenuti | Medio | Campionamento e audit mensile | R1 chiusura |
| **Stress test parziali su picchi stagionali** | Performance e DevOps | SLO | Alto | Test carico e resilienza, piani autoscaling | R2 chiusura |

## **20.8. Piano di remediation e responsabilità**

Ogni gap ha un owner, una data obiettivo e un criterio di accettazione verificabile. L’integrazione con la governance assicura che la chiusura dei gap sia tracciata, approvata e comunicata agli stakeholder informati, mentre i consultati partecipano alla definizione dei dettagli tecnici senza rallentare le decisioni.

| **Azione** | **Owner** | **Criterio di accettazione** | **Release** |
| --- | --- | --- | --- |
| **Arricchimento disambiguazione NLP e relativi test** | Prodotto e NLP | 95 percento richieste con entità complete senza intervento umano | R1 |
| **Suite evento imprevisto su trasporti con ricalcolo** | Itinerario | 100 percento casi coperti, zero regressioni | R1 |
| **Test sincronizzazione mappa e riepilogo** | Frontend | Coerenza dati superiore al 99 percento in aggiornamento | R1 |
| **Normalizzazione valute e soglie budget** | Backend e Finanza | Varianza arrotondamenti inferiore a 1 percento | R2 |
| **Test rate limit e fallback integrazioni** | Integrazioni | Nessun errore non gestito oltre soglia | R1 |
| **Suite fusi orari promemoria** | Notifiche | Puntualità superiore al 99 percento | R1 |
| **Scadenza e rotazione link condivisione** | Sicurezza applicativa | Nessun link attivo oltre scadenza | R1 |
| **Test merge e conflitti offline** | Mobile | Conflitti risolti automaticamente oltre 90 percento | R2 |
| **Estensione test MFA** | Identità | Tasso successo MFA entro target e recovery funzionante | R1 |
| **Campionamento moderazione** | Admin | Rapporto qualità mensile con trend | R1 |
| **Stress test stagionali** | SRE | SLO rispettati a carico di picco | R2 |

## **20.9. Metriche di verifica e soglie di qualità**

Le metriche collegano la matrice alla qualità percepita e operativa. Copertura per requisito misura la percentuale di requisiti con test passati; copertura per storia misura quante storie completano la suite prevista; tracciabilità bi‑direzionale completata misura la percentuale di link attivi in entrambi i sensi; defect leakage misura i difetti sfuggiti alla fase precedente; affidabilità SLO considera disponibilità e tempo di ripristino; accuratezza NLP, pertinenza suggerimenti e puntualità notifiche legano direttamente richiesta e risposta dell’utente.

Le soglie sono progressive e negoziate con la roadmap. Il superamento di soglia su un’area critica blocca la promozione della release, mentre in aree non critiche può essere gestito con piani di miglioramento vincolati a scadenze ravvicinate. Tutte le metriche sono alimentate automaticamente dai sistemi di test e osservabilità, evitando aggiornamenti manuali e garantendo coerenza.

## **20.10. Allineamento alla roadmap e milestone di copertura**

Le milestone di copertura sono pianificate in parallelo con le milestone funzionali. La baseline della matrice precede la chiusura di ogni incremento; le estensioni di copertura seguono i picchi di rischio e le finestre di rilascio. Il diagramma seguente illustra l’allineamento operativo del prossimo ciclo.

![Diagramma Mermaid 42](image42.png)

## **20.11. Viste di conformità per audit e test**

La matrice è esportabile in formati adatti ad audit e collaudi. La vista di conformità collega ogni requisito ai casi di test eseguiti con relativo esito, alla prova di accettazione e all’evidenza di esecuzione. Le verifiche campionarie si basano sul rischio e sul tasso storico di difetti per ambito, con particolare attenzione a sicurezza, privacy, pagine critiche dell’esperienza utente e integrazioni esterne.

Gli auditor possono risalire all’origine delle scelte progettuali e alla data di validazione, senza consultare artefatti eterogenei. La bidirezionalità ha valore operativo durante la manutenzione: una regressione su un componente richiama automaticamente i requisiti impattati e le suite di test da ripetere.

## **20.12. Manutenzione della matrice e governo dei cambiamenti**

Ogni modifica alla matrice è versionata, approvata e diffusa secondo le responsabilità di governance. Nuovi requisiti o variazioni generano link preliminari e test placeholder, che diventano vincolanti prima della chiusura dello sprint. La matrice non è un documento statico: è un indice vivente della qualità, utile tanto alla progettazione quanto all’esercizio.

Le revisioni periodiche garantiscono che non compaiano elementi orfani e che le soglie di copertura restino congrue con l’evoluzione del prodotto. Quando i flussi cambiano, la matrice guida l’aggiornamento dei test e mantiene allineati documentazione, strumenti e codice.

## **Riferimenti**

[1] Requirements Traceability Matrix How To Guide - https://www.testrail.com/blog/requirements-traceability-matrix/

[2] Requirements Traceability Matrix Best Practices - https://yrkan.com/blog/requirements-traceability-matrix/

[3] Requirements Traceability Matrix Overview - https://www.perforce.com/resources/alm/requirements-traceability-matrix

[4] Traceability Matrix Definition - https://en.wikipedia.org/wiki/Traceability_matrix

[5] Requirements Traceability Overview - https://en.wikipedia.org/wiki/Requirements_traceability

[6] ISO IEC 25010 Quality Model Overview - https://iso25000.com/en/iso-25000-standards/iso-25010

[7] ISO IEC 25010 Quality Characteristics Summary - https://quality.arc42.org/standards/iso-25010

## **Conclusione**

Questo documento è stato generato automaticamente utilizzando l’intelligenza artificiale GPT-5.

Il processo di generazione ha completato con successo tutti i 20 capitoli.

Data di completamento: 23/11/2025 23:32
# TripChat Planner Assets

Questa cartella conterrà le immagini e gli asset grafici del progetto.

## Struttura consigliata:

### images/
- logo.svg - Logo principale dell'app
- avatar-placeholder.jpg - Avatar utente di default
- paris.jpg, barcelona.jpg, rome.jpg, venice.jpg, florence.jpg - Immagini destinazioni
- paris-hero.jpg - Hero image per dettaglio viaggio
- map-placeholder.jpg - Placeholder mappa
- empty-trips.svg - Illustrazione empty state

### icons/
- Icone SVG per l'interfaccia (menu, user, calendar, etc.)
- Preferibilmente usando una libreria come Feather Icons o Heroicons

## Note:
Per il POC, le immagini possono essere:
1. Scaricate da unsplash.com (royalty-free)
2. Usare placeholder services come https://via.placeholder.com/
3. Generare SVG semplici per icone

Esempio placeholder HTML già negli HTML:
```html
<img src="../../public/assets/images/paris.jpg" alt="Parigi">
```

Sarà necessario aggiungere file reali o modificare i percorsi con servizi placeholder.

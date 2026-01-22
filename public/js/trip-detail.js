// Trip Detail page specific JavaScript
// Placeholder - sostituire con logica reale

const TripDetailPage = {
    init() {
        this.loadTripData();
        this.setupDayTabs();
        this.setupMapInteraction();
        this.setupActivityActions();
    },

    async loadTripData() {
        // Mock: carica dati viaggio da URL parameter
        const tripId = TripChatApp.getUrlParameter('id');
        console.log(`Loading trip ${tripId}`);
        
        // In una vera implementazione, qui faresti una chiamata API
    },

    setupDayTabs() {
        TabsManager.init('.day-tab', '.day-content');
    },

    setupMapInteraction() {
        const mapBtn = document.querySelector('.btn-map');
        
        if (mapBtn) {
            mapBtn.addEventListener('click', () => {
                // Mock: apri mappa full screen
                TripChatApp.showToast('Funzione mappa in arrivo!', 'info');
            });
        }
    },

    setupActivityActions() {
        // Mock: gestisci azioni attività
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-edit')) {
                TripChatApp.showToast('Modifica attività', 'info');
            }
            
            if (e.target.closest('.btn-primary')) {
                const btnText = e.target.textContent;
                if (btnText.includes('Prenota')) {
                    TripChatApp.showToast('Reindirizzamento alla prenotazione...', 'info');
                }
            }
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TripDetailPage.init());
} else {
    TripDetailPage.init();
}

// Home page specific JavaScript
// Placeholder - sostituire con logica reale

const HomePage = {
    init() {
        console.log('Home page initialized');
        this.loadUserData();
        this.setupQuickActions();
    },

    async loadUserData() {
        // Mock: carica dati utente
        const userName = 'Marco';
        const userNameEl = document.querySelector('.user-name');
        if (userNameEl) {
            userNameEl.textContent = userName;
        }
    },

    setupQuickActions() {
        // Event listeners per le azioni rapide già gestiti inline negli HTML
        console.log('Quick actions ready');
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => HomePage.init());
} else {
    HomePage.init();
}

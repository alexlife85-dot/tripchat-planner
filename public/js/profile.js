// Profile page specific JavaScript
// Placeholder - sostituire con logica reale

const ProfilePage = {
    init() {
        this.setupNavigation();
        this.setupForms();
        this.setupToggles();
    },

    setupNavigation() {
        const navItems = document.querySelectorAll('.profile-nav-item');
        const sections = document.querySelectorAll('.profile-section');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const sectionId = item.dataset.section;
                
                // Update nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Update sections
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === `section-${sectionId}`) {
                        section.classList.add('active');
                    }
                });
            });
        });
    },

    setupForms() {
        const forms = document.querySelectorAll('.profile-form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveFormData(form);
            });
        });
    },

    async saveFormData(form) {
        // Mock: salva dati
        TripChatApp.showToast('Modifiche salvate con successo!', 'success');
        
        // Simula chiamata API
        await new Promise(resolve => setTimeout(resolve, 500));
    },

    setupToggles() {
        const toggles = document.querySelectorAll('.toggle-switch input');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('change', () => {
                // Mock: salva preferenza
                console.log(`Toggle ${toggle.name}: ${toggle.checked}`);
            });
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProfilePage.init());
} else {
    ProfilePage.init();
}

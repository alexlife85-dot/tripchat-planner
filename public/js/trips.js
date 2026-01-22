// Trips page specific JavaScript
// Placeholder - sostituire con logica reale

const TripsPage = {
    init() {
        this.setupFilters();
        this.setupSorting();
        this.setupViewModes();
    },

    setupFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const tripCards = document.querySelectorAll('.trip-card');
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.dataset.filter;
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter trips
                tripCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = card.dataset.status === filter ? 'flex' : 'none';
                    }
                });
            });
        });
    },

    setupSorting() {
        const sortSelect = document.querySelector('.filter-sort');
        
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                const sortBy = e.target.value;
                this.sortTrips(sortBy);
            });
        }
    },

    sortTrips(sortBy) {
        const tripsList = document.getElementById('tripsList');
        const trips = Array.from(tripsList.querySelectorAll('.trip-card'));
        
        trips.sort((a, b) => {
            // Mock sorting logic
            return 0;
        });
        
        trips.forEach(trip => tripsList.appendChild(trip));
    },

    setupViewModes() {
        const viewBtns = document.querySelectorAll('.btn-view-mode');
        const tripsList = document.getElementById('tripsList');
        
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                
                // Update active button
                viewBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Change layout
                tripsList.className = `trips-list trips-${view}`;
            });
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TripsPage.init());
} else {
    TripsPage.init();
}

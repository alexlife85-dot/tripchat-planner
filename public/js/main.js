// ===================================
// TripChat Planner - Main JavaScript
// ===================================

// Utility functions
const TripChatApp = {
    // Inizializzazione app
    init() {
        this.setupEventListeners();
        this.loadComponents();
        console.log('TripChat Planner initialized');
    },

    // Setup event listeners globali
    setupEventListeners() {
        // Handle mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('.mobile-menu-toggle')) {
                this.toggleMobileMenu();
            }
            
            if (e.target.closest('.user-menu-trigger')) {
                this.toggleUserMenu();
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.user-menu')) {
                this.closeUserMenu();
            }
        });
    },

    // Carica componenti HTML
    async loadComponents() {
        // Load header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            try {
                const response = await fetch('../../src/components/header.html');
                const html = await response.text();
                headerPlaceholder.innerHTML = html;
                this.highlightActiveNavItem();
            } catch (error) {
                console.error('Error loading header:', error);
            }
        }

        // Load footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            try {
                const response = await fetch('../../src/components/footer.html');
                const html = await response.text();
                footerPlaceholder.innerHTML = html;
            } catch (error) {
                console.error('Error loading footer:', error);
            }
        }
    },

    // Evidenzia voce di navigazione attiva
    highlightActiveNavItem() {
        const currentPath = window.location.pathname;
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (currentPath.includes(href)) {
                item.classList.add('active');
            }
        });
    },

    // Toggle mobile menu
    toggleMobileMenu() {
        const nav = document.querySelector('.header-nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav) {
            nav.classList.toggle('active');
            toggle.setAttribute('aria-expanded', 
                toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        }
    },

    // Toggle user menu
    toggleUserMenu() {
        const dropdown = document.querySelector('.user-dropdown');
        const trigger = document.querySelector('.user-menu-trigger');
        
        if (dropdown) {
            const isOpen = dropdown.classList.toggle('active');
            trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
    },

    // Close user menu
    closeUserMenu() {
        const dropdown = document.querySelector('.user-dropdown');
        const trigger = document.querySelector('.user-menu-trigger');
        
        if (dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
        }
    },

    // Show toast notification
    showToast(message, type = 'info', duration = 3000) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast toast-${type}`;
        toast.style.display = 'block';

        setTimeout(() => {
            toast.style.display = 'none';
        }, duration);
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('it-IT', options);
    },

    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    },

    // Get URL parameter
    getUrlParameter(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    },

    // Validate email
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Local storage helpers
    storage: {
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error('Error saving to localStorage:', e);
            }
        },
        
        get(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('Error reading from localStorage:', e);
                return null;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.error('Error removing from localStorage:', e);
            }
        }
    },

    // API mock (placeholder per future implementazioni)
    api: {
        async get(endpoint) {
            // Simulazione chiamata API
            console.log(`API GET: ${endpoint}`);
            return new Promise(resolve => {
                setTimeout(() => resolve({ success: true, data: {} }), 500);
            });
        },
        
        async post(endpoint, data) {
            console.log(`API POST: ${endpoint}`, data);
            return new Promise(resolve => {
                setTimeout(() => resolve({ success: true, data: {} }), 500);
            });
        }
    }
};

// Auto-inizializzazione quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TripChatApp.init());
} else {
    TripChatApp.init();
}

// Esporta per uso globale
window.TripChatApp = TripChatApp;

// ===================================
// Components Loader and Utilities
// ===================================

const ComponentsLoader = {
    // Carica un componente e sostituisce i placeholder
    async loadComponent(componentName, placeholderId, replacements = {}) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;

        try {
            const response = await fetch(`../../src/components/${componentName}.html`);
            let html = await response.text();

            // Sostituisci i placeholder
            Object.keys(replacements).forEach(key => {
                const regex = new RegExp(`{${key}}`, 'g');
                html = html.replace(regex, replacements[key]);
            });

            placeholder.innerHTML = html;
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    },

    // Crea una trip card dinamicamente
    createTripCard(tripData) {
        const replacements = {
            TRIP_ID: tripData.id,
            TRIP_STATUS: tripData.status,
            TRIP_IMAGE_URL: tripData.imageUrl || '../../public/assets/images/placeholder.jpg',
            TRIP_TITLE: tripData.title,
            STATUS_TYPE: tripData.status,
            STATUS_LABEL: this.getStatusLabel(tripData.status),
            TRIP_DATES: tripData.dates,
            TRIP_DURATION: tripData.duration,
            TRIP_LOCATION: tripData.location,
            ACTIVITIES_COUNT: tripData.activitiesCount || 0,
            BUDGET: tripData.budget || 0,
            PROGRESS_PERCENTAGE: tripData.progress || 0,
            PRIMARY_ACTION_LABEL: this.getPrimaryActionLabel(tripData.status)
        };

        return this.loadComponent('card-trip', 'trips-container', replacements);
    },

    // Crea una activity card dinamicamente
    createActivityCard(activityData) {
        const replacements = {
            ACTIVITY_ID: activityData.id,
            START_TIME: activityData.startTime,
            DURATION: activityData.duration,
            ACTIVITY_TYPE: activityData.type,
            ACTIVITY_TITLE: activityData.title,
            ACTIVITY_DESCRIPTION: activityData.description,
            LOCATION: activityData.location,
            COST: activityData.cost || '',
            RATING: activityData.rating || '',
            ADDITIONAL_INFO: activityData.info || ''
        };

        return this.loadComponent('card-activity', 'activities-container', replacements);
    },

    // Crea un messaggio chat
    createChatMessage(messageData) {
        const messageClass = messageData.isUser ? 'message-user' : 'message-system';
        const timestamp = new Date().toLocaleTimeString('it-IT', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        const messageHTML = `
            <div class="message ${messageClass}" data-message-id="${messageData.id}">
                ${!messageData.isUser ? `
                <div class="message-avatar">
                    <span class="icon-bot"></span>
                </div>
                ` : ''}
                <div class="message-content">
                    <div class="message-bubble">
                        ${messageData.content}
                    </div>
                    <time class="message-time">${timestamp}</time>
                </div>
                ${messageData.isUser ? `
                <div class="message-avatar">
                    <span class="icon-user"></span>
                </div>
                ` : ''}
            </div>
        `;

        return messageHTML;
    },

    // Ottieni label stato viaggio
    getStatusLabel(status) {
        const labels = {
            'upcoming': 'In arrivo',
            'planning': 'In pianificazione',
            'completed': 'Completato',
            'cancelled': 'Annullato'
        };
        return labels[status] || status;
    },

    // Ottieni label azione primaria
    getPrimaryActionLabel(status) {
        const labels = {
            'upcoming': 'Vedi dettagli',
            'planning': 'Continua pianificazione',
            'completed': 'Vedi ricordi'
        };
        return labels[status] || 'Apri';
    }
};

// Helper per gestire i tab
const TabsManager = {
    init(tabSelector, contentSelector) {
        const tabs = document.querySelectorAll(tabSelector);
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab, tabSelector, contentSelector);
            });
        });
    },

    switchTab(activeTab, tabSelector, contentSelector) {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);
        const targetId = activeTab.dataset.tab || activeTab.dataset.day;

        // Rimuovi active da tutti i tab
        tabs.forEach(t => t.classList.remove('active'));
        
        // Aggiungi active al tab cliccato
        activeTab.classList.add('active');

        // Mostra/nascondi contenuti
        contents.forEach(content => {
            const contentId = content.dataset.tab || content.dataset.day;
            content.style.display = contentId === targetId ? 'block' : 'none';
            content.classList.toggle('active', contentId === targetId);
        });
    }
};

// Helper per modal
const ModalManager = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    },

    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
};

// Helper per animazioni
const AnimationHelpers = {
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.min(progress / duration, 1);
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },

    fadeOut(element, duration = 300) {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.max(1 - (progress / duration), 0);
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }
};

// Esporta per uso globale
window.ComponentsLoader = ComponentsLoader;
window.TabsManager = TabsManager;
window.ModalManager = ModalManager;
window.AnimationHelpers = AnimationHelpers;

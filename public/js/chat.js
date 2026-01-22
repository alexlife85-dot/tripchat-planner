// Chat page specific JavaScript
// Placeholder - sostituire con logica reale di integrazione AI

const ChatPage = {
    init() {
        this.setupChatForm();
        this.setupQuickReplies();
        this.setupSidebar();
        this.setupSaveButton();
    },

    setupChatForm() {
        const form = document.getElementById('chatForm');
        const input = document.getElementById('chatInput');
        
        if (!form || !input) return;

        // Auto-resize textarea
        input.addEventListener('input', () => {
            input.style.height = 'auto';
            input.style.height = input.scrollHeight + 'px';
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = input.value.trim();
            
            if (message) {
                this.sendMessage(message);
                input.value = '';
                input.style.height = 'auto';
            }
        });
    },

    async sendMessage(message) {
        const messagesContainer = document.getElementById('chatMessages');
        
        // Aggiungi messaggio utente
        const userMessage = ComponentsLoader.createChatMessage({
            id: Date.now(),
            content: `<p>${message}</p>`,
            isUser: true
        });
        
        messagesContainer.insertAdjacentHTML('beforeend', userMessage);
        this.scrollToBottom();

        // Mostra typing indicator
        const typingIndicator = document.getElementById('typingIndicator');
        typingIndicator.style.display = 'flex';
        this.scrollToBottom();

        // Simula risposta AI
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        typingIndicator.style.display = 'none';
        
        // Aggiungi risposta sistema (mock)
        const systemMessage = ComponentsLoader.createChatMessage({
            id: Date.now() + 1,
            content: `<p>Perfetto! Ho capito che vuoi "${message}". Lascia che ti aiuti a creare l'itinerario perfetto. 🌍</p>`,
            isUser: false
        });
        
        messagesContainer.insertAdjacentHTML('beforeend', systemMessage);
        this.scrollToBottom();
        
        // Aggiorna riepilogo (mock)
        this.updateSummary({
            destination: 'Parigi, Francia',
            dates: '15-18 Feb 2026',
            budget: '€ 650'
        });
    },

    setupQuickReplies() {
        const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');
        
        quickReplyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const reply = btn.dataset.reply;
                this.sendMessage(reply);
                
                // Rimuovi quick replies dopo il click
                btn.parentElement.remove();
            });
        });
    },

    setupSidebar() {
        const toggleBtn = document.querySelector('.btn-toggle-sidebar');
        const closeBtn = document.querySelector('.btn-close-sidebar');
        const sidebar = document.getElementById('chatSidebar');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.add('active');
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        }
    },

    setupSaveButton() {
        const saveBtn = document.getElementById('btnSaveTrip');
        const modal = document.getElementById('saveModal');
        const confirmBtn = document.getElementById('btnConfirmSave');
        const cancelBtn = document.getElementById('btnCancelSave');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                modal.style.display = 'flex';
            });
        }
        
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                TripChatApp.showToast('Viaggio salvato con successo!', 'success');
                modal.style.display = 'none';
                setTimeout(() => {
                    window.location.href = 'trips.html';
                }, 1000);
            });
        }
        
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    },

    updateSummary(data) {
        if (data.destination) {
            document.getElementById('summaryDestination').textContent = data.destination;
        }
        if (data.dates) {
            document.getElementById('summaryDates').textContent = data.dates;
        }
        if (data.budget) {
            document.getElementById('summaryBudget').textContent = data.budget;
        }
        
        // Abilita pulsante salva
        const saveBtn = document.getElementById('btnSaveTrip');
        if (saveBtn) {
            saveBtn.disabled = false;
        }
    },

    scrollToBottom() {
        const container = document.getElementById('chatMessages');
        container.scrollTop = container.scrollHeight;
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ChatPage.init());
} else {
    ChatPage.init();
}

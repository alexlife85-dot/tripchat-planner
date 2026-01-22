// Login page specific JavaScript
// Placeholder - sostituire con logica reale

const LoginPage = {
    init() {
        this.setupFormValidation();
        this.setupPasswordToggle();
        this.setupMFA();
    },

    setupFormValidation() {
        const form = document.getElementById('loginForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Reset errors
            this.clearErrors();
            
            // Validate
            let isValid = true;
            
            if (!email || !TripChatApp.isValidEmail(email)) {
                this.showError('email', 'Inserisci un\'email valida');
                isValid = false;
            }
            
            if (!password || password.length < 6) {
                this.showError('password', 'La password deve essere di almeno 6 caratteri');
                isValid = false;
            }
            
            if (isValid) {
                await this.performLogin(email, password);
            }
        });
    },

    async performLogin(email, password) {
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'flex';

        // Simula chiamata API
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock: redirect to home
        window.location.href = 'home.html';
    },

    setupPasswordToggle() {
        const toggleBtn = document.querySelector('.toggle-password');
        if (!toggleBtn) return;

        toggleBtn.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    },

    setupMFA() {
        // Mock MFA flow
        const mfaInputs = document.querySelectorAll('.mfa-digit');
        
        mfaInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < mfaInputs.length - 1) {
                    mfaInputs[index + 1].focus();
                }
            });
        });
    },

    showError(fieldId, message) {
        const errorSpan = document.getElementById(`${fieldId}-error`);
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }
    },

    clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LoginPage.init());
} else {
    LoginPage.init();
}

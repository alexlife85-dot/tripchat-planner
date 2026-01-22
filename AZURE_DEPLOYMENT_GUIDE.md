# Guida alla Pubblicazione su Azure Static Web Apps

## 📋 Prerequisiti

- Account Azure attivo ([crea qui](https://azure.microsoft.com/free/))
- Account GitHub
- Repository GitHub per il progetto
- Azure CLI installato (opzionale ma consigliato)

---

## 🚀 Parte 1: Configurazione Azure Static Web App

### Step 1: Creare la Static Web App su Azure

1. **Accedi al portale Azure**
   - Vai su [https://portal.azure.com](https://portal.azure.com)
   - Effettua il login con le tue credenziali

2. **Crea una nuova risorsa**
   - Clicca su "Create a resource" (Crea una risorsa)
   - Cerca "Static Web Apps"
   - Clicca su "Create"

3. **Configura i dettagli della risorsa**

   **Basics tab:**
   - **Subscription**: Seleziona la tua sottoscrizione Azure
   - **Resource Group**: Crea un nuovo gruppo o seleziona uno esistente (es. "rg-tripchat-planner")
   - **Name**: `tripchat-planner-webapp` (deve essere univoco)
   - **Plan type**: Seleziona "Free" per iniziare
   - **Region**: Scegli la regione più vicina (es. "West Europe")
   - **Deployment details**:
     - Source: **GitHub**
     - Clicca su "Sign in with GitHub"
     - Autorizza Azure ad accedere al tuo GitHub

4. **Configura GitHub**
   - **Organization**: Seleziona il tuo username GitHub
   - **Repository**: Seleziona il repository `tripchat-planner`
   - **Branch**: Seleziona `main` o `master`

5. **Configura Build Details**
   - **Build Presets**: Seleziona "Custom"
   - **App location**: `/` (root del repository)
   - **Api location**: lascia vuoto (nessuna API per ora)
   - **Output location**: lascia vuoto

6. **Review + Create**
   - Clicca su "Review + create"
   - Verifica i dettagli
   - Clicca su "Create"

### Step 2: Recuperare il Deployment Token

Durante la creazione, Azure genererà automaticamente:
- Un workflow file GitHub Actions nel tuo repository
- Un secret `AZURE_STATIC_WEB_APPS_API_TOKEN` nel tuo repository GitHub

**Per verificare/recuperare il token manualmente:**

1. Nel portale Azure, vai alla tua Static Web App
2. Nel menu di sinistra, clicca su "Manage deployment token"
3. Copia il token (lo useremo dopo se necessario)

---

## 🔧 Parte 2: Configurazione Repository GitHub

### Step 1: Inizializzare il Repository Git (se non già fatto)

```bash
# Apri il terminale nella cartella del progetto
cd c:\tripchat-planner

# Inizializza git (se non già fatto)
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit: TripChat Planner POC with 6 pages"

# Collega al repository remoto GitHub
git remote add origin https://github.com/TUO_USERNAME/tripchat-planner.git

# Push sul branch main
git branch -M main
git push -u origin main
```

### Step 2: Verificare i GitHub Secrets

1. Vai su GitHub nel tuo repository
2. Clicca su **Settings** > **Secrets and variables** > **Actions**
3. Verifica che esista il secret `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Se non esiste, clicca su "New repository secret":
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: incolla il token copiato da Azure
   - Clicca su "Add secret"

### Step 3: Verificare il Workflow File

Il workflow è già stato creato in `.github/workflows/azure-static-web-apps.yml`.

Per verificarlo:

```bash
# Controlla che il file esista
ls .github/workflows/
```

---

## 🔄 Parte 3: Test del Deploy Automatico

### Step 1: Effettuare un Commit di Test

```bash
# Modifica un file (es. README.md)
echo "# TripChat Planner - Live on Azure" > README.md

# Aggiungi e committa
git add .
git commit -m "Test: trigger Azure deployment"

# Push su GitHub
git push origin main
```

### Step 2: Monitorare il Deployment

1. **Su GitHub:**
   - Vai su repository > **Actions**
   - Vedrai il workflow "Azure Static Web Apps CI/CD" in esecuzione
   - Clicca per vedere i dettagli e i log

2. **Su Azure:**
   - Vai alla tua Static Web App nel portale Azure
   - Clicca su "GitHub Actions runs" nel menu di sinistra
   - Monitora lo stato del deployment

### Step 3: Testare l'Applicazione

Dopo il deployment (solitamente 1-2 minuti):

1. Nel portale Azure, vai alla tua Static Web App
2. Nella pagina "Overview", trovi l'URL della tua app (es. `https://tripchat-planner-webapp.azurestaticapps.net`)
3. Clicca sull'URL o aprilo nel browser
4. Dovresti vedere la pagina di login

---

## 🌐 Parte 4: Configurazione Domini e URL

### URL di Default

Azure fornirà automaticamente un URL tipo:
```
https://tripchat-planner-webapp-xxxxx.azurestaticapps.net
```

### Configurare un Dominio Personalizzato (Opzionale)

1. Nel portale Azure, vai alla tua Static Web App
2. Nel menu di sinistra, clicca su "Custom domains"
3. Clicca su "+ Add"
4. Segui le istruzioni per:
   - Aggiungere un record CNAME nel tuo DNS provider
   - Validare il dominio
   - Attendere la propagazione DNS (può richiedere fino a 48 ore)

---

## 🔒 Parte 5: Variabili d'Ambiente e Configurazioni Avanzate

### Aggiungere Environment Variables

1. Nel portale Azure, vai alla tua Static Web App
2. Clicca su "Configuration" nel menu di sinistra
3. Nella sezione "Application settings", aggiungi variabili:
   - Clicca su "+ Add"
   - Inserisci nome e valore
   - Clicca su "OK"
   - Clicca su "Save"

### Esempio di variabili utili:

```
API_BASE_URL=https://api.tripchat.com
ENVIRONMENT=production
ENABLE_ANALYTICS=true
```

---

## 📱 Parte 6: Monitoraggio e Debugging

### Visualizzare i Log

1. **GitHub Actions Logs:**
   - Vai su GitHub > Actions
   - Clicca sul workflow run
   - Espandi ogni step per vedere i log dettagliati

2. **Azure Application Insights (opzionale):**
   - Nel portale Azure, vai alla tua Static Web App
   - Clicca su "Application Insights" nel menu di sinistra
   - Abilita Application Insights per monitoraggio avanzato

### Troubleshooting Comuni

**Problema: Workflow fallisce con "No permission"**
- Soluzione: Verifica che il secret `AZURE_STATIC_WEB_APPS_API_TOKEN` sia configurato correttamente

**Problema: 404 su tutte le pagine**
- Soluzione: Verifica che `staticwebapp.config.json` sia nella root del progetto

**Problema: CSS/JS non caricano**
- Soluzione: Controlla i percorsi relativi nei file HTML

**Problema: Deployment lento**
- Soluzione: Normale per il primo deploy, i successivi saranno più veloci

---

## 🔄 Parte 7: Workflow di Sviluppo Consigliato

### Branch Strategy

```bash
# Branch principale (production)
main

# Branch di sviluppo
develop

# Feature branches
feature/nuova-funzionalita
```

### Processo di Deploy

1. **Sviluppo locale:**
   ```bash
   # Lavora su feature branch
   git checkout -b feature/nuova-pagina
   # ... fai modifiche ...
   git add .
   git commit -m "feat: add new page"
   ```

2. **Push e Pull Request:**
   ```bash
   git push origin feature/nuova-pagina
   ```
   - Crea Pull Request su GitHub
   - Azure creerà un ambiente di preview automatico

3. **Merge su main:**
   - Dopo review, fai merge su main
   - Il deploy automatico in produzione partirà

### Ambienti di Preview

Azure Static Web Apps crea automaticamente ambienti di preview per ogni PR:
- URL tipo: `https://tripchat-planner-webapp-xxxxx-pr-42.azurestaticapps.net`
- Perfetto per testare prima del merge

---

## 📊 Parte 8: Metriche e Analytics

### Visualizzare Statistiche

1. Nel portale Azure, vai alla tua Static Web App
2. Clicca su "Metrics" nel menu di sinistra
3. Visualizza:
   - Requests count
   - Bandwidth usage
   - Response time
   - Error rate

---

## 🛠 Comandi Utili

### Azure CLI Commands

```bash
# Login ad Azure
az login

# Creare Static Web App via CLI
az staticwebapp create \
  --name tripchat-planner-webapp \
  --resource-group rg-tripchat-planner \
  --location "West Europe" \
  --source https://github.com/USERNAME/tripchat-planner \
  --branch main \
  --app-location "/" \
  --login-with-github

# Visualizzare info della Static Web App
az staticwebapp show \
  --name tripchat-planner-webapp \
  --resource-group rg-tripchat-planner

# Recuperare deployment token
az staticwebapp secrets list \
  --name tripchat-planner-webapp \
  --resource-group rg-tripchat-planner
```

### NPM Scripts (da aggiungere a package.json)

```json
{
  "scripts": {
    "dev": "npx serve -s . -p 3000",
    "serve": "npx serve -s . -p 8080",
    "deploy": "echo 'Deploy avviene automaticamente via GitHub Actions'"
  }
}
```

---

## ✅ Checklist Finale

- [ ] Static Web App creata su Azure
- [ ] Repository GitHub collegato
- [ ] Secret `AZURE_STATIC_WEB_APPS_API_TOKEN` configurato
- [ ] File `.github/workflows/azure-static-web-apps.yml` presente
- [ ] File `staticwebapp.config.json` presente
- [ ] File `.gitignore` configurato
- [ ] Primo commit effettuato
- [ ] Workflow GitHub Actions eseguito con successo
- [ ] Applicazione accessibile via URL Azure
- [ ] Routing funzionante (test di tutte le 6 pagine)
- [ ] CSS e JS caricano correttamente

---

## 🆘 Supporto

**Documentazione ufficiale:**
- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Docs](https://docs.github.com/actions)

**Errori comuni:**
- [Troubleshooting Guide](https://docs.microsoft.com/azure/static-web-apps/troubleshooting)

**Community:**
- [Stack Overflow - azure-static-web-apps](https://stackoverflow.com/questions/tagged/azure-static-web-apps)
- [GitHub Discussions](https://github.com/Azure/static-web-apps/discussions)

---

## 🎉 Congratulazioni!

La tua applicazione è ora live su Azure con deployment automatico ad ogni push su GitHub!

**Prossimi passi suggeriti:**
1. Configurare un dominio personalizzato
2. Abilitare Application Insights per analytics
3. Implementare autenticazione Azure AD B2C
4. Aggiungere Azure Functions per API backend
5. Configurare staging environments

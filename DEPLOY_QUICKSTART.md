# Quick Start - Azure Deployment

## 🚀 Deploy Rapido (5 minuti)

### 1. Prerequisiti
- Account Azure ([crea gratis](https://azure.microsoft.com/free/))
- Account GitHub
- Repository GitHub per questo progetto

### 2. Creazione Azure Static Web App

**Opzione A: Via Portale Azure (Consigliata per principianti)**

1. Vai su [https://portal.azure.com](https://portal.azure.com)
2. Clicca "Create a resource" → cerca "Static Web Apps" → Create
3. Compila il form:
   - **Name**: `tripchat-planner`
   - **Region**: `West Europe`
   - **Plan**: `Free`
   - **GitHub Account**: Autorizza e seleziona il tuo repository
   - **Branch**: `main`
   - **App location**: `/`
   - **Output location**: (lascia vuoto)
4. Clicca "Review + Create" → "Create"

✅ Azure creerà automaticamente il workflow GitHub Actions!

**Opzione B: Via Azure CLI (Per utenti avanzati)**

```bash
# Login
az login

# Crea resource group
az group create --name rg-tripchat --location westeurope

# Crea Static Web App
az staticwebapp create \
  --name tripchat-planner \
  --resource-group rg-tripchat \
  --location westeurope \
  --source https://github.com/YOUR_USERNAME/tripchat-planner \
  --branch main \
  --app-location "/" \
  --login-with-github
```

### 3. Push del Codice su GitHub

```bash
# Nella cartella del progetto
cd c:\tripchat-planner

# Inizializza git (se non già fatto)
git init
git add .
git commit -m "Initial commit: TripChat Planner POC"

# Collega al repository GitHub
git remote add origin https://github.com/YOUR_USERNAME/tripchat-planner.git
git branch -M main
git push -u origin main
```

### 4. Verifica Deployment

1. Vai su GitHub → tab "Actions"
2. Dovresti vedere il workflow "Azure Static Web Apps CI/CD" in esecuzione
3. Attendi il completamento (circa 1-2 minuti)
4. Vai su Azure Portal → la tua Static Web App → copia l'URL
5. Apri l'URL nel browser → dovresti vedere la pagina di login!

---

## 🔄 Workflow Automatico

Ora ogni volta che fai `git push origin main`:
1. GitHub Actions si attiva automaticamente
2. Il codice viene buildato (se necessario)
3. L'app viene deployata su Azure
4. In 1-2 minuti l'app è live!

---

## 📝 Comandi Git Comuni

```bash
# Aggiungere modifiche
git add .
git commit -m "descrizione modifiche"
git push origin main

# Vedere lo stato
git status

# Vedere la storia dei commit
git log --oneline

# Creare un branch per nuove features
git checkout -b feature/nuova-funzionalita
git push origin feature/nuova-funzionalita
```

---

## 🆘 Troubleshooting

**Problema: Workflow fallisce su GitHub Actions**
- Vai su GitHub → Settings → Secrets → verifica che esista `AZURE_STATIC_WEB_APPS_API_TOKEN`

**Problema: 404 su tutte le pagine**
- Verifica che `staticwebapp.config.json` sia nella root del progetto
- Controlla che i percorsi in `routes` siano corretti

**Problema: CSS/JS non caricano**
- Controlla i percorsi relativi nei file HTML
- Verifica che le cartelle `public/css` e `public/js` siano nel repository

---

## 📚 Documentazione Completa

Per istruzioni dettagliate, vedi [AZURE_DEPLOYMENT_GUIDE.md](./AZURE_DEPLOYMENT_GUIDE.md)

---

## ✅ Checklist

- [ ] Account Azure creato
- [ ] Static Web App creata su Azure
- [ ] Repository GitHub creato e collegato
- [ ] Codice pushato su GitHub
- [ ] Workflow GitHub Actions completato con successo
- [ ] App accessibile via URL Azure
- [ ] Tutte le 6 pagine funzionanti

---

## 🎉 L'app è live!

URL della tua app: `https://tripchat-planner-xxxxx.azurestaticapps.net`

Prossimi passi:
- Condividi l'URL con il team
- Configura un dominio personalizzato (opzionale)
- Aggiungi analytics con Application Insights

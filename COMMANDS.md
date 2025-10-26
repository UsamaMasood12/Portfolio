# 📋 QUICK COMMAND REFERENCE

Copy and paste these commands to deploy your portfolio!

## INITIAL SETUP (One Time Only)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
```

### 4. Connect to GitHub
```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 5. First Deployment
```bash
npm run deploy
```

---

## UPDATING PORTFOLIO (Every Time You Make Changes)

```bash
# Save and stage your changes
git add .

# Commit with a message describing what you changed
git commit -m "Updated projects section"

# Push to GitHub
git push origin main

# Deploy to live site
npm run deploy
```

---

## USEFUL COMMANDS

### Test Locally (Before Deploying)
```bash
npm start
```
Opens at http://localhost:3000

### Check Git Status
```bash
git status
```

### See Commit History
```bash
git log --oneline
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Force Deploy (If Issues)
```bash
npm run deploy -- -f
```

### Clean Install
```bash
rm -rf node_modules
npm install
```

---

## QUICK EDIT WORKFLOW

1. Edit your files in `src/App.jsx`
2. Test locally: `npm start`
3. Save and close
4. Deploy:
   ```bash
   git add .
   git commit -m "Quick update"
   git push origin main
   npm run deploy
   ```
5. Wait 1-2 minutes
6. Check your live site!

---

## ONE-LINE DEPLOY (After Setup)

For quick updates, run all at once:
```bash
git add . && git commit -m "Update portfolio" && git push origin main && npm run deploy
```

---

## EMERGENCY: START OVER

If something goes wrong and you want to start fresh:

```bash
# Remove Git history
rm -rf .git

# Remove node_modules
rm -rf node_modules

# Start fresh
git init
npm install
git add .
git commit -m "Fresh start"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main -f
npm run deploy
```

---

## REMEMBER TO REPLACE:
- `YOUR_USERNAME` → Your GitHub username
- `YOUR_REPO_NAME` → Your repository name
- `"Update message"` → Describe what you changed

---

💡 **Pro Tip**: Save this file for quick reference!

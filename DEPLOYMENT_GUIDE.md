# 🚀 STEP-BY-STEP DEPLOYMENT GUIDE

Follow these steps to deploy your portfolio to GitHub Pages:

## STEP 1: Prepare Your GitHub Repository

### Option A: Create a Personal Site (Recommended)
1. Go to https://github.com/new
2. Repository name: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your actual GitHub username)
3. Make it Public
4. Do NOT check "Initialize with README"
5. Click "Create repository"

Your site will be at: `https://YOUR_USERNAME.github.io`

### Option B: Create a Project Site
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Make it Public
4. Do NOT check "Initialize with README"
5. Click "Create repository"

Your site will be at: `https://YOUR_USERNAME.github.io/portfolio`

---

## STEP 2: Update Configuration

1. Open `package.json` in a text editor
2. Find the line with `"homepage":`
3. Update it based on your choice:
   - **Option A (Personal)**: `"homepage": "https://YOUR_USERNAME.github.io"`
   - **Option B (Project)**: `"homepage": "https://YOUR_USERNAME.github.io/portfolio"`
4. Replace YOUR_USERNAME with your actual GitHub username
5. Save the file

---

## STEP 3: Update Portfolio Content

1. Open `src/App.jsx`
2. Update your GitHub links:
   - Find `<a href="#">` for LinkedIn
   - Replace `#` with your LinkedIn URL
   - Find `<a href="#">` for GitHub
   - Replace `#` with your GitHub profile URL
3. Update GitHub project links:
   - Find each project's `github: "#"`
   - Replace with actual repository URLs
4. Save the file

---

## STEP 4: Install Node.js (If Not Installed)

1. Go to https://nodejs.org/
2. Download the LTS version
3. Install it
4. Verify installation by opening terminal/command prompt:
   ```bash
   node --version
   npm --version
   ```

---

## STEP 5: Deploy Your Portfolio

### On Windows:
1. Open Command Prompt or PowerShell
2. Navigate to your portfolio folder:
   ```cmd
   cd path\to\portfolio-deployment
   ```
3. Run these commands:
   ```cmd
   npm install
   npm run deploy
   ```

### On Mac/Linux:
1. Open Terminal
2. Navigate to your portfolio folder:
   ```bash
   cd path/to/portfolio-deployment
   ```
3. Run these commands:
   ```bash
   npm install
   npm run deploy
   ```

---

## STEP 6: Initialize Git and Push

Run these commands in your terminal:

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Deploy portfolio"

# Set main branch
git branch -M main

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

---

## STEP 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select "gh-pages" branch
   - Select "/ (root)" folder
   - Click "Save"
5. Wait 1-2 minutes
6. Refresh the page - you'll see your live URL!

---

## STEP 8: Test Your Portfolio

1. Visit your URL:
   - Personal: `https://YOUR_USERNAME.github.io`
   - Project: `https://YOUR_USERNAME.github.io/portfolio`
2. Check all sections work
3. Test on mobile device
4. Share with friends!

---

## 🔄 UPDATING YOUR PORTFOLIO

After making changes to your portfolio:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Update projects and skills"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Wait 1-2 minutes and refresh your portfolio URL to see changes!

---

## ⚠️ TROUBLESHOOTING

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Permission denied"
**Solution**: Use `sudo npm install` on Mac/Linux

### Issue: "gh-pages branch not found"
**Solution**: 
1. Run `npm run deploy` first
2. Then enable GitHub Pages in settings

### Issue: "404 - Page not found"
**Solution**: 
1. Check `package.json` homepage URL is correct
2. Make sure GitHub Pages is enabled
3. Wait 2-3 minutes after deployment

### Issue: "White screen on deployed site"
**Solution**: 
1. Check browser console for errors
2. Verify homepage URL in package.json
3. Clear browser cache

### Issue: Changes not showing
**Solution**:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Wait 2-3 minutes for GitHub to update
3. Check you ran `npm run deploy`

---

## 📞 NEED HELP?

If you get stuck:
1. Check the error message carefully
2. Search the error on Google
3. Ask on GitHub Discussions
4. Contact: usamamasood531@gmail.com

---

## ✅ CHECKLIST

Before deploying, make sure:
- [ ] Updated package.json homepage
- [ ] Updated your personal information in App.jsx
- [ ] Updated LinkedIn and GitHub URLs
- [ ] Updated project GitHub links
- [ ] Node.js is installed
- [ ] GitHub repository is created
- [ ] All changes are saved

---

🎉 **Congratulations!** Your portfolio is now live on the internet!

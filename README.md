# Usama Masood - Portfolio

A modern, animated portfolio website showcasing data science projects, machine learning expertise, and technical skills.

## 🚀 Live Demo
[View Portfolio](https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME)

## ✨ Features
- Interactive animations and transitions
- Floating particle background
- Mouse-following gradient effects
- Responsive design for all devices
- Project showcase with expandable details
- Skills categorization with visual indicators
- Professional experience timeline

## 🛠️ Technologies Used
- React 18
- Tailwind CSS
- Lucide React Icons
- GitHub Pages

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 🌐 Deployment to GitHub Pages

### First Time Setup

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it (e.g., `portfolio` or `YOUR_USERNAME.github.io`)
   - Do NOT initialize with README

2. **Update package.json**
   - Open `package.json`
   - Change the `homepage` field:
     ```json
     "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
     ```
   - If using `YOUR_USERNAME.github.io` as repo name, use:
     ```json
     "homepage": "https://YOUR_GITHUB_USERNAME.github.io"
     ```

3. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "gh-pages" branch
   - Click "Save"
   - Your site will be live at the URL shown!

### Updating Your Portfolio

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
npm run deploy
```

## 🎨 Customization

### Update Personal Information
Edit `src/App.jsx`:
- Contact details (email, phone, location)
- LinkedIn and GitHub URLs
- Projects data
- Skills list
- Experience details
- Education information

### Change Colors
Modify Tailwind classes in `src/App.jsx`:
- Primary: `blue-400`, `blue-500`, `blue-600`
- Secondary: `purple-400`, `purple-500`, `purple-600`
- Accent: `pink-400`, `pink-500`, `pink-600`

### Add/Remove Sections
The portfolio has four main sections controlled by `activeSection` state:
- About
- Projects
- Skills
- Experience

## 📱 Responsive Design
- Desktop: Full layout with all animations
- Tablet: Optimized grid layout
- Mobile: Single column, touch-friendly

## 🤝 Contributing
Feel free to fork this project and customize it for your own portfolio!

## 📄 License
This project is open source and available under the MIT License.

## 📧 Contact
- Email: usamamasood531@gmail.com
- Location: Middlesbrough, UK
- Phone: +44 7724 030958

---

Built with ❤️ using React and Tailwind CSS

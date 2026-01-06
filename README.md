# Personal Website

A modern personal website built with React and Vite, inspired by the al-folio Jekyll template design.

## Features

- Clean, academic-style design
- Responsive layout
- Fast development with Vite
- Easy GitHub Pages deployment

## Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to **Settings** > **Pages**
5. Under **Build and deployment**, select:
   - Source: **GitHub Actions**

6. The site will automatically deploy when you push to the main branch
7. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

8. **Important**: If your repository is NOT named `YOUR_USERNAME.github.io`, update the `base` in [vite.config.js](vite.config.js):
```javascript
base: '/YOUR_REPO_NAME/',
```

### Option 2: Manual Deployment with gh-pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update the `base` in [vite.config.js](vite.config.js) to match your repository name

3. Deploy:
```bash
npm run deploy
```

## Customization

### Personal Information

Update the following files to add your personal information:

- [src/components/Header.jsx](src/components/Header.jsx) - Your name in the header
- [src/components/Hero.jsx](src/components/Hero.jsx) - Profile image, name, title, bio, and social links
- [src/components/About.jsx](src/components/About.jsx) - About section and skills
- [src/components/Footer.jsx](src/components/Footer.jsx) - Footer information
- [index.html](index.html) - Page title and meta tags

### Styling

The design uses a clean, academic aesthetic inspired by al-folio. Each component has its own CSS file:

- [src/components/Header.css](src/components/Header.css)
- [src/components/Hero.css](src/components/Hero.css)
- [src/components/About.css](src/components/About.css)
- [src/components/Footer.css](src/components/Footer.css)

### Adding More Sections

To add new sections (like Projects, Publications, etc.):

1. Create a new component in `src/components/`
2. Import and add it to [src/App.jsx](src/App.jsx)
3. Update the navigation links in [src/components/Header.jsx](src/components/Header.jsx)

## Tech Stack

- React 19
- Vite 7
- Modern CSS with responsive design

## License

Feel free to use this template for your own personal website!

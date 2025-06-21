/*
  This is a full project skeleton for your cinnamon business website
  Compatible with GitHub Pages (React + Vite + TailwindCSS)
*/

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ceylon-gold/', // Change if your repo name differs
})

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxury: '#d4af37',
        dark: '#1c1c1c',
        cream: '#f8f8f2',
        cinnamon: '#8B5E3C'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ceylon Gold</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@500&display=swap" rel="stylesheet">
  </head>
  <body class="bg-dark text-cream font-body">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// src/App.jsx
import React from 'react'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-heading text-luxury mb-6">Ceylon Gold</h1>
      <p className="text-xl md:text-2xl max-w-xl">Ceylon’s Finest Cinnamon, Naturally Golden.</p>
      <div className="mt-8 space-x-4">
        <button className="bg-luxury text-dark px-6 py-3 rounded-full hover:opacity-90 transition">Explore Products</button>
        <button className="border border-luxury text-luxury px-6 py-3 rounded-full hover:bg-luxury hover:text-dark transition">Our Story</button>
      </div>
    </main>
  )
}

// package.json
{
  "name": "ceylon-gold",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.0.0",
    "vite": "^4.0.0",
    "gh-pages": "^5.0.0"
  }
}

// .gitignore
node_modules/
dist/
.env
.DS_Store

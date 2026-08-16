# Rittik Portfolio Website

Personal portfolio website for **Rittik Pati — AI/ML Engineer**, built with React and Tailwind CSS, powered by Vite.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — fast build tooling and dev server
- **Tailwind CSS 3** — utility-first styling with a custom Material 3 design token system
- **Google Fonts** — Geist, Inter, and JetBrains Mono

## Getting Started

### Local Preview (your machine only)

```bash
npm install
npm run build
```

Then open **http://localhost:8000** in your browser.

> **Note:** `localhost` links only work on the machine running the site. Visitors to your GitHub repository cannot open them — this is for local development only.

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode with hot reload. Vite will print the local dev server URL in your terminal.

### Production Build

```bash
npm run build
```

Builds the app for production into the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html              # Vite entry point
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx             # Layout + scroll/crossfade effects
│   ├── index.css           # Tailwind + custom design tokens
│   └── components/         # Section components (Navbar, Hero, Skills, ...)
├── tailwind.config.js      # Design tokens (colors, typography, spacing)
├── vite.config.js          # Vite configuration
└── stitch-reference/       # Original Google Stitch design prototype (reference only)
```

## Features

- Cinematic scroll-based background crossfade
- Scroll-reveal animations
- Glassmorphism card design system
- Responsive layout (mobile, tablet, desktop)
- Sections: Projects, Skills, Experience, Research, Certifications, Leadership, Contact

## License

All rights reserved.
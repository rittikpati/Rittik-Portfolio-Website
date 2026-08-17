# Rittik Pati — Portfolio Website

Personal portfolio website for **Rittik Pati — AI/ML Engineer**, built with React, Tailwind CSS and Vite, served in production by a small Express backend.

## Tech Stack

**Frontend**
- React 18 — component-based UI
- Vite 5 — fast build tooling and dev server
- Tailwind CSS 3 — utility-first styling with a custom Material 3 design token system
- Google Fonts — Geist, Inter, and JetBrains Mono

**Backend**
- Express 4 — serves the production build, SPA fallback, and a minimal `/api/health` endpoint
- dotenv — environment-driven configuration

**Deployment**
- Multi-stage `Dockerfile` (frontend build → slim runtime) and `docker-compose.yml`
- Environment configuration via `.env` (see `.env.example`)

## Project Structure

```
.
├── frontend/                 # React + Vite application
│   ├── src/
│   │   ├── main.jsx          # React root
│   │   ├── App.jsx           # Layout + scroll/crossfade effects
│   │   ├── index.css         # Tailwind + custom design tokens
│   │   └── components/       # Section components (Navbar, Hero, Skills, HelpDesk, ...)
│   ├── public/               # Static assets served as-is (PDFs, logos)
│   ├── index.html            # Vite entry point
│   ├── tailwind.config.js    # Design tokens (colors, typography, spacing)
│   └── vite.config.js        # Vite configuration
├── backend/
│   ├── server.js             # Express server (static + health API)
│   └── package.json
├── Dockerfile                # Multi-stage production image
├── docker-compose.yml        # One-command local/orchestrated deploy
└── stitch-reference/         # Original design prototype (reference only)
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Frontend — Development

```bash
cd frontend
npm install
npm run dev
```

Vite starts the dev server with hot reload and prints the URL (default http://localhost:5173).

### Frontend — Production Build

```bash
cd frontend
npm install
npm run build
```

Outputs the production bundle to `frontend/dist/`.

### Backend — Local Preview of the Production Build

```bash
cd backend
npm install
npm start
```

The Express server serves `frontend/dist/` at **http://localhost:8000** (port configurable via `PORT` in `.env` — copy the root `.env.example` to `.env` first).

Health check: http://localhost:8000/api/health

> **Note:** local URLs only work on the machine running the server — they are for local development/preview only.

### Docker

```bash
docker compose up --build
```

Builds the frontend, packages everything into a slim image, and serves it on port `8000`.

## API

| Method | Route         | Description                |
| ------ | ------------- | -------------------------- |
| GET    | `/api/health` | Service health + metadata  |
| GET    | `*`           | SPA fallback (HTML)        |

## Features

- Cinematic scroll-based background crossfade
- Scroll-reveal animations
- Glassmorphism card design system
- Responsive layout (mobile, tablet, desktop)
- Sections: Projects, Skills, Experience, Job Simulations, Certifications, Leadership, Contact
- AI Help Desk — a rule-based portfolio assistant with direct link actions (resume, certificates, badges)

## License

All rights reserved.

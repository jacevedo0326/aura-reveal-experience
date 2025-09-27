aura-reveal-experience/

# Aura Reveal Experience

A modern React + Vite + Tailwind CSS project.

## Project Structure

```
aura-reveal-experience/
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   ├── aerial-panorama.jpg
│   │   ├── aura-ai-visualization.jpg
│   │   ├── aura-aware.jpg
│   │   ├── aura-detail-macro.jpg
│   │   ├── aura-hero.jpg
│   │   ├── aura-lifestyle-1.jpg
│   │   ├── aura-use-case-law.jpg
│   │   └── aura-use-case-sar.jpg
│   ├── components/
│   │   ├── EmailCapture.tsx
│   │   ├── Navbar.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── ... (many UI components)
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── AuraInsights.tsx
│   │   ├── AuraLanding.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── OurStory.tsx
│   │   ├── TechSpecs.tsx
│   │   └── UseCases.tsx
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended)
- Node.js (if you prefer npm/yarn)

### Install Bun

If you don't have Bun installed, run:

```sh
curl -fsSL https://bun.sh/install | bash
```

Then restart your terminal.

### Install dependencies

```sh
bun install
```

### Run the development server

```sh
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the app.

### Build for production

```sh
bun run build
```

### Preview the production build

```sh
bun run preview
```

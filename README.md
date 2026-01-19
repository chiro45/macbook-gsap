# MacBook Pro Landing Page

An interactive and modern landing page to showcase the MacBook Pro line with real-time rendered 3D models using Three.js.

## 📋 Project Description

This project is a single-page web application that presents a MacBook Pro landing page experience. It features:

- Interactive 3D models of MacBook (14" and 16")
- Smooth animations with GSAP
- Responsive interface
- Intuitive navigation system
- Product visualization with 3D controls

## 🛠️ Technologies

### Core

- **React** (^19.2.0) - UI Framework
- **TypeScript** (~5.9.3) - Type safety
- **Vite** (^7.2.4) - Build tool and dev server with HMR

### 3D & Graphics

- **Three.js** (^0.182.0) - 3D Engine
- **@react-three/fiber** (^9.5.0) - React renderer for Three.js
- **@react-three/drei** (^10.7.7) - Utilities and helpers for Three.js
- **three-stdlib** (^2.36.1) - Standard utilities for Three.js

### Animations & Styles

- **GSAP** (^3.14.2) - Animation library
- **@gsap/react** (^2.1.2) - React plugin for GSAP
- **Tailwind CSS** (^4.1.18) - Utility-first CSS framework
- **@tailwindcss/vite** (^4.1.18) - Tailwind integration with Vite

### Utilities

- **Zustand** (^5.0.10) - State management
- **react-responsive** (^10.0.1) - Media queries in React
- **clsx** (^2.1.1) - Utility for conditional class names

### Development

- **ESLint** (^9.39.1) - Code linter
- **TypeScript ESLint** (^8.46.4) - TypeScript plugin for ESLint
- **BiomeJS** (2.3.11) - Code formatter and linter
- **React Fast Refresh** - Hot module replacement

## 📦 Installation and Setup

### Requirements

- Node.js 18+
- pnpm (recommended) or npm

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd macbookprolanding
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The server will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development
pnpm dev        # Starts the development server

# Production
pnpm build      # Compiles TypeScript and builds for production
pnpm preview    # Previews the production build locally

# Code Quality
pnpm lint       # Runs ESLint on the entire project
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx         # Main hero section
│   ├── NavBar.tsx       # Navigation bar
│   ├── ProducViewer.tsx # Product viewer
│   ├── StudioLigths.tsx # 3D lights setup
│   ├── models/          # 3D model components
│   │   ├── Macbook.tsx
│   │   ├── Macbook-14.tsx
│   │   └── Macbook-16.tsx
│   └── three/
│       └── ModelSwitcher.tsx  # Model switching control
├── constants/           # Application constants
├── store/              # Global state (Zustand)
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## ⚙️ Configuration

### TypeScript

- Configuration in `tsconfig.json` and `tsconfig.app.json`
- Strict mode enabled for better type safety

### Vite

- Configuration in `vite.config.ts`
- Integration with React and Tailwind CSS plugins

### Tailwind CSS

- Configuration integrated with Vite
- Utility styles for responsive design

## 🚀 Features

- ✨ Interactive 3D models
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 🎨 Smooth animations with GSAP
- 🔍 Type-safe with TypeScript
- 📊 State management with Zustand
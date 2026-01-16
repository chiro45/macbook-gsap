# MacBook Pro Landing Page

Una landing page interactiva y moderna para presentar la línea de MacBook Pro con modelos 3D renderizados en tiempo real usando Three.js.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web de una sola página que presenta la experiencia de un landing page de MacBook Pro. Cuenta con:

- Modelos 3D interactivos de MacBook (14" y 16")
- Animaciones suaves con GSAP
- Interfaz responsive
- Sistema de navegación intuitivo
- Visualización de productos con controles 3D

## 🛠️ Tecnologías

### Core

- **React** (v19.2.0) - Framework UI
- **TypeScript** (v5.9.3) - Type safety
- **Vite** (v7.2.4) - Build tool y dev server con HMR

### 3D & Graphics

- **Three.js** (v0.182.0) - Engine 3D
- **@react-three/fiber** (v9.5.0) - React renderer para Three.js
- **@react-three/drei** (v10.7.7) - Utilidades y helpers para Three.js
- **three-stdlib** (v2.36.1) - Utilidades estándar de Three.js

### Animaciones & Estilos

- **GSAP** (v3.14.2) - Librería de animaciones
- **@gsap/react** (v2.1.2) - Plugin de React para GSAP
- **Tailwind CSS** (v4.1.18) - Framework CSS utilitario
- **@tailwindcss/vite** (v4.1.18) - Integración Tailwind con Vite

### Utilidades

- **Zustand** (v5.0.10) - State management
- **react-responsive** (v10.0.1) - Media queries en React
- **clsx** (v2.1.1) - Utilidad para class names condicionales

### Desarrollo

- **ESLint** (v9.39.1) - Linter de código
- **TypeScript ESLint** (v8.46.4) - Plugin de TypeScript para ESLint
- **React Fast Refresh** - Hot module replacement

## 📦 Instalación y Configuración

### Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Pasos de Instalación

1. Clonar el repositorio:

```bash
git clone <repository-url>
cd macbookprolanding
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Iniciar servidor de desarrollo:

```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev        # Inicia servidor de desarrollo

# Producción
pnpm build      # Compila TypeScript y construye para producción
pnpm preview    # Previsualiza la build de producción localmente

# Calidad de código
pnpm lint       # Ejecuta ESLint en todo el proyecto
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Hero.tsx         # Sección hero principal
│   ├── NavBar.tsx       # Barra de navegación
│   ├── ProducViewer.tsx # Visor de productos
│   ├── StudioLigths.tsx # Configuración de luces 3D
│   ├── models/          # Componentes de modelos 3D
│   │   ├── Macbook.tsx
│   │   ├── Macbook-14.tsx
│   │   └── Macbook-16.tsx
│   └── three/
│       └── ModelSwitcher.tsx  # Control de cambio de modelos
├── constants/           # Constantes de la aplicación
├── store/              # Estado global (Zustand)
├── App.tsx             # Componente raíz
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## ⚙️ Configuración

### TypeScript

- Configuración en `tsconfig.json` y `tsconfig.app.json`
- Strict mode habilitado para mayor seguridad de tipos

### ESLint

- Configuración en `eslint.config.js`
- Incluye reglas para React, hooks y TypeScript

### Vite

- Configuración en `vite.config.ts`
- Integración con plugin React y Tailwind CSS

### Tailwind CSS

- Configuración integrada con Vite
- Estilos utilitarios para diseño responsive

## 🚀 Características

- ✨ Modelos 3D interactivos
- 📱 Diseño completamente responsive
- ⚡ Carga rápida con Vite
- 🎨 Animaciones suaves con GSAP
- 🔍 Type-safe con TypeScript
- 📊 State management con Zustand

### Why Choose Capacitor.js??

Capacitor.js is a modern native runtime that lets you build web apps that run natively on iOS, Android, and the web — with full access to native APIs.

✅ Key Benefits
One codebase for all platforms

Access native features (Camera, Geolocation, Filesystem, etc.)

Use any web framework (React, Vue, Angular, etc.)

First-class TypeScript support

Easy to integrate with existing web apps

🏢 Who Uses Capacitor?
Capacitor is trusted by major companies and apps, including:

🍔 Burger King

☕ Tim Hortons

🐔 Popeyes

🏋️ Sworkit

💇 Fresha

📦 Route

🧪 Poll Everywhere

🎮 Electronic Arts (EA)

📺 BBC

🏰 Disney (internal tools)

These companies use Capacitor to deliver fast, native-like experiences while maintaining the agility of web development.

### Required packages

📦 Required Packages for react-cross-platform
✅ Core React & TypeScript
Package Purpose
react Core React library
react-dom DOM rendering for React
typescript TypeScript support
@types/react Type definitions for React
@types/react-dom Type definitions for ReactDOM
✅ Routing & State Management
Package Purpose
react-router-dom Client-side routing
react-redux React bindings for Redux
@reduxjs/toolkit Modern Redux setup
✅ Form Handling & Validation
Package Purpose
react-hook-form Lightweight form handling
zod Schema validation
@hookform/resolvers Integrates Zod with React Hook Form
✅ Capacitor (Cross-Platform Native Support)
Package Purpose
@capacitor/core Core Capacitor runtime
@capacitor/cli CLI for Capacitor commands
@capacitor/android Android platform support
@capacitor/ios iOS platform support
✅ UI & Styling
Package Purpose
tailwindcss Utility-first CSS framework
autoprefixer Adds vendor prefixes to CSS
postcss CSS processor used by Tailwind
@heroicons/react Beautiful SVG icons for React
✅ Testing
Package Purpose
@testing-library/react React component testing
@testing-library/jest-dom Custom Jest matchers
@testing-library/user-event Simulate user interactions
@testing-library/dom DOM testing utilities
@types/jest Jest type definitions
✅ Linting & Code Quality
Package Purpose
eslint Core linter
@eslint/js ESLint rules
eslint-config-react-app React app ESLint config
eslint-plugin-react React-specific linting rules
eslint-plugin-react-hooks Linting for React hooks
eslint-plugin-jsx-a11y Accessibility linting
@typescript-eslint/parser TypeScript parser for ESLint
@typescript-eslint/eslint-plugin TypeScript linting rules
@babel/eslint-parser Babel parser for ESLint

# 🚀 React Cross-Platform App with TypeScript, Tailwind CSS & Capacitor.js

This project is a cross-platform React application built with **TypeScript**, styled using **Tailwind CSS**, and powered by **Capacitor.js** to run seamlessly on **Web**, **Android**, and **iOS**.

---

## 📦 Tech Stack

- ⚛️ React (with TypeScript)
- 🎨 Tailwind CSS
- 📱 Capacitor.js (for native platform support)
- 🧹 ESLint + Prettier (for clean, consistent code)

---

## 🛠️ Getting Started

### 1. Create React App with TypeScript

```bash
npx create-react-app . --template typescript


yarn add -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Add Capacitor.js

```
yarn add @capacitor/core @capacitor/cli
npx cap init

yarn add @capacitor/android
npx cap add android

# Optional (macOS only)
yarn add @capacitor/ios
npx cap add ios
```

### Start the React App (Web)

yarn start

### Sync with Capacitor

npx cap sync

### Open Native Projects

npx cap open android

# or

npx cap open ios

### Main project architecture

src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components
│ ├── Header.tsx
│ ├── PublicHeader.tsx
│ ├── PrivateHeader.tsx
│ └── Footer.tsx
├── features/ # Feature-specific logic (optional modular structure)
│ └── auth/
│ ├── authSlice.ts # Redux slice for authentication
│ └── useAuthForm.ts # Custom hook with Zod schema
├── hooks/ # Global reusable hooks
│ └── useWindowSize.ts
├── layouts/ # Layout wrappers
│ ├── PublicLayout.tsx
│ └── PrivateLayout.tsx
├── pages/ # Route-based pages
│ ├── Home.tsx
│ ├── SignIn.tsx
│ ├── SignUp.tsx
│ ├── Dashboard.tsx
│ └── Profile.tsx
│ └── Logout.tsx
├── routes/ # Routing logic
│ ├── AppRoutes.tsx # All route definitions
│ └── PrivateRoute.tsx # Auth guard for private routes
├── store/ # Redux store setup
│ ├── index.ts # configureStore
│ └── slices/ # Redux slices
│ └── authSlice.ts
├── styles/ # Global styles (if needed)
│ └── tailwind.css
├── types/ # Global TypeScript types
│ └── index.d.ts
├── utils/ # Utility functions/helpers
│ └── formatDate.ts
├── App.tsx # Root component
├── main.tsx # Entry point
└── index.html # HTML template

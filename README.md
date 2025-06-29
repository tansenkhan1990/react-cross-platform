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


Why Choose Capacitor.js??
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


application/
├── android/          # Android native project
├── ios/              # iOS native project
├── public/
├── src/
│   └── App.tsx       # Main React component
├── tailwind.config.js
├── eslint.config.js
├── package.json
└── capacitor.config.ts

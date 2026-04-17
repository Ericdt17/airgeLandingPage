## LivSight — landing page

A responsive single-page marketing site for LivSight (logistics / delivery platform), built with React, Vite, and Tailwind CSS.

### Demo

- Run locally with the steps below, or deploy to Vercel/GitHub Pages.

### Features

- **Responsive UI** for desktop and mobile
- **Hero**, **trusted partners**, **problem / solution**, **metrics**, **testimonials**, **security**, **pricing**, **FAQ**, and **final CTA** sections
- **Footer** with column links (placeholder routes in `src/constants/index.js`) and social icons

### Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **ESLint/Prettier** for code quality

---

### Getting Started

#### Prerequisites

- Node.js 18 or 20 (LTS recommended)
- npm 8+

#### Installation

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
```

#### Development

```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

#### Production build

```bash
npm run build
npm run preview
```

---

### Project Structure

```
.
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ sections/
│  ├─ constants/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

Key UI pieces live under `src/sections` and reusable UI elements are under `src/components`.

---

### Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint




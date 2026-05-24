# AIRGÉ — Landing page

Site marketing **dark-first** pour [AIRGÉ](https://airge.com) : plateforme qui aide créateurs, étudiants, coachs, freelances, artisans et petits business à publier du contenu, construire une audience et monétiser grâce à l’IA, aux formations et à l’accompagnement.

Construit avec **React 18**, **Vite**, **Tailwind CSS** et **React Router**. Le contenu et la marque sont centralisés dans `src/constants/` pour faciliter les mises à jour.

---

## Fonctionnalités

- **Page d’accueil** (`/`) avec sections ancrées : Hero, Problème, Solution, Comment ça marche, Métriques, Tarifs, FAQ, CTA final, Footer
- **Navigation** sticky avec marque texte **AIRGÉ** (dégradé cyan) et ancres `#probleme`, `#solution`, etc.
- **Pages secondaires** : légal, entreprise (à propos, contact, recrutement), plateforme (héritage template — copy à finaliser)
- **SEO** par page via `react-helmet-async`
- **Design system AIRGÉ** : tokens CSS (`:root`) + classes Tailwind (`airge-*`)
- **Responsive** : utilitaires `padding*`, `max-container`, breakpoints `sm` / `lg` / `wide`

---

## Stack technique

| Outil | Rôle |
|--------|------|
| React 18 + Vite | UI et build |
| Tailwind CSS 3 | Styles utilitaires |
| React Router 7 | Routes SPA |
| Heroicons | Icônes sections |
| ESLint + Prettier | Qualité code (`npm run lint` — 0 warning) |

---

## Démarrage rapide

### Prérequis

- Node.js 18 ou 20 (LTS)
- npm 8+

### Installation

```bash
git clone <url-du-repo>
cd landing-page-agence
npm install
```

### Développement

```bash
npm run dev
```

Ouvrir l’URL affichée (souvent [http://localhost:5173](http://localhost:5173)).

### Build production

```bash
npm run build
npm run preview
```

---

## Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de dev Vite |
| `npm run build` | Build production dans `dist/` |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | ESLint (échec si warnings) |

---

## Structure du projet

```
.
├── public/                 # favicon, robots.txt, sitemap.xml
├── src/
│   ├── App.jsx             # Routes React Router
│   ├── main.jsx
│   ├── index.css           # Tokens :root AIRGÉ + utilitaires layout
│   ├── pages/              # Shells par route (SEO + layout)
│   │   └── Landing.jsx     # Page d’accueil
│   ├── sections/           # Blocs marketing (Hero, LeProbleme, …)
│   ├── components/         # Nav, NavBrand, Button, SEO, …
│   ├── constants/          # Copy, nav, footer, FAQ (hub : index.js)
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── services/           # API recrutement (si utilisée)
├── index.html
├── tailwind.config.js      # Couleurs / ombres / hero-grid
└── vite.config.js
```

### Page d’accueil — ordre des sections

1. `Nav` — `NavBrand` + liens ancres + CTA  
2. `Hero`  
3. `LeProbleme`  
4. `Solution`  
5. `SecuriteConfiance` (`#fonctionnalites` — Comment ça marche)  
6. `MetriquesCles` (`#impact`)  
7. `Tarifs`  
8. `Faq`  
9. `CtaFinal`  
10. `Footer`

---

## Design system AIRGÉ

Les couleurs sont définies dans **`src/index.css`** (`:root`) et exposées à Tailwind via **`tailwind.config.js`**.

| Token | Usage |
|-------|--------|
| `--airge-bg` | Fond principal |
| `--airge-bg-deep` | Bandeaux profonds |
| `--airge-surface` | Cartes |
| `--airge-foreground` / `--airge-muted` | Texte |
| `--airge-primary` | Cyan CTA, accents |
| `--airge-ink` | Texte sur boutons cyan |
| `--airge-border` | Bordures |
| `bg-hero-grid` | Grille décorative (raillures) |

**Boutons primaires** : `bg-airge-primary text-airge-ink hover:bg-airge-primary-hover`

Les anciens noms template (`brand-blue`, `slate-gray`, …) pointent vers les mêmes valeurs pour limiter les régressions sur les pages non encore rebrandées.

---

## Contenu et configuration

- **Copy & données** : [`src/constants/index.js`](src/constants/index.js)  
  - `brandName`, `hero*`, `problem*`, `navLinks`, `footerColumns`, `faqItems`, etc.
- **Lien app (CTA)** : `appCtaHref` → `https://app.video-story.com/video`
- **Nav ↔ ancres** : chaque `navLinks[].href` doit correspondre à un `id` de section dans `src/sections/*`

---

## Routes principales

| Route | Page |
|-------|------|
| `/` | Accueil AIRGÉ |
| `/legal/*` | Confidentialité, conditions, sécurité, cookies |
| `/entreprise/*` | À propos, contact, recrutement |
| `/plateforme/*` | Pages produit (template legacy) |

Toute route inconnue redirige vers `/`.

---

## Rebrand / personnalisation

1. Mettre à jour le copy dans `src/constants/` (et fichiers `constants/*.js` thématiques).  
2. Ajuster les tokens dans `src/index.css` + `tailwind.config.js` si la palette change.  
3. Remplacer assets dans `src/assets/` (logo footer, visuels produit).  
4. Mettre à jour `index.html`, `SEO.jsx` (`siteName`, `baseUrl`), `public/sitemap.xml`.  
5. Lancer `npm run lint` et `npm run build`.

Règles Cursor : `.cursor/rules/` — conventions AIRGÉ, theming `airge-*`, copy centralisée, ancres nav, Figma MCP (`figma-mcp.mdc`). Voir aussi `CLAUDE.md`.

---

## Déploiement

Compatible **Vercel**, **Netlify**, **GitHub Pages** (voir `vercel.json` et `base` Vite si sous-chemin).

```bash
npm run build
# Servir le dossier dist/
```

---

## État du rebrand

| Zone | Statut |
|------|--------|
| Tokens + home dark | Fait |
| Hero + Problème (copy AIRGÉ) | Fait |
| Nav `NavBrand` | Fait |
| Solution, Tarifs, FAQ, pages internes | Copy / visuel LivSight en partie |
| `appCtaHref` | `https://app.video-story.com/video` |
| Mona Sans (police app) | TODO (`@font-face`) |

---

## Licence

Projet privé — usage interne AIRGÉ sauf indication contraire.

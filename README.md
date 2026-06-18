# Portfolio de Charlène – React + TypeScript + Vite

Mon portfolio personnel développé avec **React**, **TypeScript** et **Vite**.  
Il présente mes projets web, mon parcours et un espace contact.

# Profil
portfoliov3.com — profil technicien (défaut)
portfoliov3.com?mode=dev — profil développeur

---

## Structure du projet

portfoliov3/
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
│   └── vite.svg
src
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── AmbientFlow
│   │   ├── AmbientFlow.css
│   │   └── AmbientFlow.tsx
│   ├── Footer
│   │   ├── Footer.css
│   │   └── Footer.tsx
│   ├── Header
│   │   ├── Header.css
│   │   └── Header.tsx
│   └── ProjectCard
│       ├── ProjectCard.css
│       ├── ProjectCard.tsx
│       ├── TechnicalProjectCard.css
│       └── technicalProjectCard.tsx
├── data
│   ├── projects.ts
│   └── technicalProjects.ts
├── hooks
│   └── useDarkMode.ts
├── index.css
├── main.tsx
└── sections
    ├── About.css
    ├── About.tsx
    ├── Contact.css
    ├── Contact.tsx
    ├── Experience.css
    ├── Experience.tsx
    ├── Hero.css
    ├── Hero.tsx
    ├── Projects.css
    └── Projects.tsx
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


---

### Installation

1. Cloner le projet :

```bash
git clone https://github.com/charlene631/portfoliov3.git

```
2. Installer les dépendances

npm install

3. Lancer le serveur de développement

npm run dev

4. Ouvrir le projet dans le navigateur

http://localhost:5173

#### Fonctionnalités

Affichage de mes projets avec des cartes interactives

Mode sombre / clair

Section contact avec liens cliquables (LinkedIn…)

Layout responsive sans media query, entièrement fluide

##### Technologies utilisées

React + TypeScript

Vite

Tailwind CSS

React Icons

ESLint pour la qualité de code

###### Licence 
Ce projet est sous licence MIT. 

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

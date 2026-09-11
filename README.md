# West Bridge Consultancy

Single-page marketing website built with **React**, **Vite**, and **Tailwind CSS** (JavaScript only — no TypeScript).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080)

## Project structure

```
index.html          HTML entry
vite.config.js      Vite + Tailwind config
package.json        Dependencies & scripts
public/             Images, flags, favicon
src/
  main.jsx          React entry point
  App.jsx           Page shell (navbar + content + footer)
  styles.css        Global styles & animations
  utils.js          Small helpers (cn)
  data/content.js   All website text & lists
  components/       UI components
```

## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview the production build |

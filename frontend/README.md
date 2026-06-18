# Sandook Story Frontend

This is the only runnable app in the repository: a static React landing page built with CRACO and Tailwind.

## Local development

```bash
npm install --legacy-peer-deps
npm start
```

The dev server opens at `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static output is written to `build/`. Runtime images and fonts are served from `public/resources`, so the generated site does not depend on a backend or remote media/font hosts.

## GitHub Pages

The root workflow at `.github/workflows/deploy-pages.yml` builds this directory and uploads `frontend/build` to GitHub Pages. The package uses `"homepage": "."` so built asset URLs remain relative and work on project pages.

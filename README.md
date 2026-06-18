# Sandook Story Website

A simple static React website for Sandook Story. The app is frontend-only, stores its runtime images and fonts in `frontend/public/resources`, and builds to plain static files for GitHub Pages.

## Run locally

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

Open `http://localhost:3000`.

## Build

```bash
cd frontend
npm run build
```

The production site is emitted to `frontend/build`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy-pages.yml`. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Every push to `main` will build `frontend/` and publish `frontend/build`.

# Dr. Tobias Weller Portfolio

Single-page Astro portfolio for Dr. Tobias Weller, Lead AI Engineer. The site is designed for GitHub Pages user-site deployment at `https://moodatadev.github.io/`.

## Local Development

```bash
npm install
npm run dev
npm run build
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro site and deploys `dist` to GitHub Pages when changes are pushed to `main`.

This repository is configured as a GitHub Pages user site, so `astro.config.mjs` sets the `site` URL and does not set a `base` path. For a project-page repository, add the repository name as `base`, for example:

```js
export default defineConfig({
  site: "https://MooDataDev.github.io",
  base: "/repository-name"
});
```

## Assets

Static assets live in `public/assets/`:

- `photo.png` for the hero portrait
- `openli-screenshot.png` for the OpenLI project preview
- `cv.pdf` for Download CV buttons

Local Inter font files live in `public/fonts/` and are loaded from `src/styles/global.css`. Icons are rendered inline through `@lucide/astro`. The site does not use Google Fonts, external icon CDNs, analytics, cookies, tracking pixels, embeds, or remote scripts.

## Updating Links

Navigation and CTA links are defined in the Astro components under `src/components/`. Project content and tech stack data are defined in `src/pages/index.astro`.

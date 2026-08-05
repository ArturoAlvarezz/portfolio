# Agent Instructions

## App

- React 19 + Vite app with `BrowserRouter`: `/` renders the section-based home and `/projects/:slug` renders case studies. Nginx provides the SPA fallback.
- `src/data/portfolio.js` is the content source; keep public claims aligned with `public/cv.pdf`. Do not invent metrics, experience, or project outcomes.
- Page composition lives in `src/pages/`; reusable UI is grouped under `src/components/`. Global visual tokens, responsive rules, CRT overlays, and reduced-motion behavior live in `src/App.css`.
- Root-path assets belong in `public/`. The hero uses responsive WebP files under `public/images/hero/`; `dist/` and `coverage/` are generated.

## Commands

- Use Node 24 and pnpm 10.12.1. Install with `pnpm install --frozen-lockfile`; do not generate an npm lockfile.
- Run `pnpm dev`, `pnpm lint`, `pnpm test:coverage`, and `pnpm build`. Tests use Vitest + Testing Library with browser mocks in `src/test/setup.js`.
- Run checks in this order: `pnpm lint` -> `pnpm test:coverage` -> `pnpm build`.
- The Dockerfile serves an existing `dist/`; run `pnpm build` before `docker build -t arturoalvarez/portfolio:latest .`.

## Deployment

- `.github/workflows/deploy.yml` runs the full check sequence on Node 24, then publishes `arturoalvarez/portfolio:latest` for `linux/amd64` and `linux/arm64` on pushes to `main` or manual dispatch.
- Docker Hub publishing requires `DOCKER_USERNAME` and `DOCKER_TOKEN` GitHub Actions secrets. Never add credentials to the repository.

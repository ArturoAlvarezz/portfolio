# Portfolio - Arturo Álvarez

Portfolio personal construido con React 19 y Vite. La interfaz sigue una dirección brutalista/editorial con contenido enfocado en Cloud, DevOps, infraestructura, observabilidad y redes SDN.

**Live:** https://arturoalvarez.dev

## Desarrollo

Requisitos: Node 24 y pnpm 10.12.1.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verificación

```bash
pnpm lint
pnpm test:coverage
pnpm build
```

Los tests usan Vitest, jsdom y React Testing Library. El reporte HTML de cobertura se genera en `coverage/`.

## Producción

El Dockerfile sirve el contenido generado de `dist/` mediante Nginx, por lo que el build debe existir antes de construir la imagen:

```bash
pnpm build
docker build -t arturoalvarez/portfolio:latest .
```

Los pushes a `main` ejecutan lint, tests y build en GitHub Actions antes de publicar la imagen multi-arquitectura `arturoalvarez/portfolio:latest`.

El workflow requiere los secrets `DOCKER_USERNAME` y `DOCKER_TOKEN`.

## Estructura

- `src/data/portfolio.js`: contenido profesional y casos de estudio.
- `src/pages/`: home y página reutilizable de proyectos.
- `src/components/`: layout, hero, secciones, proyectos, movimiento y terminal.
- `public/images/hero/`: variantes responsive del David digital.
- `public/cv.pdf`: currículum descargable.

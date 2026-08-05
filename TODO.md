# TODO

## Próxima iniciativa: modernización del proyecto

Decisiones acordadas:

- Estandarizar Node 24 LTS en desarrollo, CI y documentación.
- Usar `pnpm` como único package manager.
- Empezar con Vitest + React Testing Library.
- Dejar Playwright para una segunda fase.
- Refactorizar incrementalmente, preservando inicialmente el DOM y las clases CSS.

## 1. Migrar a pnpm y Node 24

- [x] Añadir `packageManager` y `engines` a `package.json`.
- [x] Añadir `.nvmrc` o `.node-version` con Node 24.
- [x] Generar `pnpm-lock.yaml` y eliminar `package-lock.json`.
- [x] Actualizar scripts para instalación, lint, tests, build y cobertura.
- [x] Actualizar README y `AGENTS.md` para usar pnpm y Node 24.
- [x] Actualizar GitHub Actions para Node 24, cache de pnpm y `pnpm install --frozen-lockfile`.

## 2. Mejorar la arquitectura

- [x] Convertir `App.jsx` en un componente de composición y rutas.
- [x] Mover los datos estáticos a `src/data/portfolio.js`.
- [x] Extraer overlays visuales a `src/components/motion/`.
- [x] Extraer navegación y footer a `src/components/layout/`.
- [x] Extraer las secciones a `src/components/sections/`.
- [x] Extraer comportamiento de sección activa y reduced motion a `src/hooks/`.
- [x] Eliminar audio automático y efectos canvas continuos.
- [x] Reemplazar `App.css` por el sistema visual definido en la especificación.
- [x] Eliminar la constante `icons` sin usar.
- [x] Confirmar y eliminar CSS y assets sobrantes del template inicial.

## 3. Generar tests automatizados

- [x] Añadir Vitest, React Testing Library, `user-event`, `jest-dom`, `jsdom` y cobertura V8.
- [x] Crear el setup de tests con mocks para `IntersectionObserver`, media queries, scroll y dialog.
- [x] Cubrir el renderizado de secciones, proyectos, contacto y CV.
- [x] Cubrir el menú móvil y la navegación principal.
- [x] Cubrir la terminal interactiva y sus respuestas.
- [x] Cubrir casos de estudio y métricas verificadas.
- [x] Evitar snapshots completos; probar comportamiento visible y accesible.
- [x] Añadir scripts `test`, `test:watch` y `test:coverage`.

## 4. Integrar calidad y despliegue

- [x] Ejecutar en CI: `pnpm lint` -> `pnpm test:coverage` -> `pnpm build` -> build Docker.
- [x] Ejecutar tests antes de publicar la imagen Docker.
- [x] Mantener la imagen runtime basada en Nginx; no necesita Node.
- [x] Ejecutar `pnpm audit` y revisar las vulnerabilidades sin actualizar dependencias masivamente.
- [ ] Añadir Playwright y smoke tests E2E en una fase posterior.

`pnpm audit` reporta tres avisos moderados de React Router 6. Las rutas de esta aplicación son estáticas, no aceptan destinos controlados por usuarios y no usan hidratación SSR; reevaluar cuando exista una versión publicada sin avisos aplicable a este cliente SPA.

## Verificación esperada

```bash
pnpm lint
pnpm test:coverage
pnpm build
docker build -t arturoalvarez/portfolio:latest .
```

# Portfolio — Arturo Alvarez

Sitio web personal / portafolio de Arturo Alvarez.

**Stack:** Vite + React + Docker + Nginx  
**URL:** https://arturoalvarez.site  
**Puerto local:** 8090  
**Imagen Docker:** `arturoalvarez/portfolio:latest`

---

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (hot-reload)
npm run dev

# Build producción
npm run build

# Build Docker
docker build -t arturoalvarez/portfolio:latest .

# Push a Docker Hub
docker push arturoalvarez/portfolio:latest
```

## Despliegue

El deploy es automático vía GitHub Actions + Watchtower:

1. Pushear a `main` en GitHub
2. GitHub Actions construye el sitio y sube la imagen a Docker Hub
3. Watchtower detecta el nuevo `:latest` y redeploya en el servidor (~5 min)

## Estructura

```
portfolio/
├── src/              # Código fuente React
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── assets/
├── public/           # Archivos estáticos
├── dist/             # Build output (generado)
├── index.html
├── nginx.conf        # Config de Nginx para SPA
├── Dockerfile        # Imagen de producción
└── vite.config.js
```

## Notas

- SPA con React, routing vía `react-router` implícito en `index.html`
- Nginx configurado para SPA (`try_files $uri /index.html`)
- Cache de assets estáticos: 1 año con `immutable`
- Contenedor gestionado por Dockge en `/opt/stacks/portfolio/`
- Sin límite de recursos por ahora (64M reservados)

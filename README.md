# Portfolio — Arturo Alvarez

Mi sitio web personal, construido con React + Vite.

🚀 **Live:** https://arturoalvarez.site

## Desarrollo

```bash
npm install
npm run dev      # Desarrollo
npm run build    # Producción
```

## Deploy automático

Cada push a `main`:

1. **GitHub Actions** construye el sitio y la imagen Docker
2. Sube `arturoalvarez/portfolio:latest` a Docker Hub
3. **Watchtower** detecta la nueva imagen y redeploya en el servidor (~5 min)

### Secrets de GitHub necesarios

| Secret | Descripción |
|--------|-------------|
| `DOCKER_USERNAME` | Tu usuario de Docker Hub (`arturoalvarez`) |
| `DOCKER_TOKEN` | Token de acceso de Docker Hub |

## Stack

- **Frontend:** React 19 + Vite 8
- **Servidor:** Nginx (alpine)
- **Container:** Docker, gestionado por Dockge
- **Dominio:** Cloudflare Tunnel → `arturoalvarez.site`

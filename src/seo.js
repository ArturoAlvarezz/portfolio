// Metadatos por ruta. Los usa la app (useDocumentMeta) y el build (scripts/prerender-meta.mjs),
// para que cada página publique su propio título, descripción, canonical y Open Graph.
import { getProject, profile } from './data/portfolio.js'

export const SITE_URL = 'https://arturoalvarez.dev'
const SITE_TITLE = 'Arturo Álvarez — Cloud & DevOps Engineer'
const HOME_DESCRIPTION =
  'Portfolio de Arturo Álvarez, Cloud & DevOps Engineer especializado en infraestructura, automatización, Kubernetes, observabilidad y redes SDN.'

function clip(text, max = 160) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`
}

export function homeMeta() {
  return {
    title: SITE_TITLE,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: 'website',
    robots: 'index, follow',
  }
}

export function projectMeta(slug) {
  const project = getProject(slug)
  if (!project) return null
  return {
    title: `${project.title} · ${profile.name}`,
    description: clip(project.summary),
    url: `${SITE_URL}/projects/${project.slug}`,
    type: 'article',
    robots: 'index, follow',
  }
}

export function notFoundMeta() {
  return {
    title: `Página no encontrada · ${profile.name}`,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: 'website',
    robots: 'noindex',
  }
}

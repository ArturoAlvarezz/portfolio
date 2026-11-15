// Después de `vite build`: genera un HTML por ruta con sus propios metadatos
// (title, description, canonical, robots y Open Graph). La app sigue siendo una SPA;
// esto es lo que leen Google y las vistas previas de LinkedIn/WhatsApp sin ejecutar JS.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../src/data/portfolio.js'
import { renderMeta } from '../src/prerender.js'
import { homeMeta, notFoundMeta, projectMeta } from '../src/seo.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

function write(path, html) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, html)
  console.log(`prerender-meta: ${path.replace(`${dist}/`, '')}`)
}

write(join(dist, 'index.html'), renderMeta(template, homeMeta()))
for (const project of projects) {
  write(join(dist, 'projects', `${project.slug}.html`), renderMeta(template, projectMeta(project.slug)))
}
write(join(dist, '404.html'), renderMeta(template, notFoundMeta()))

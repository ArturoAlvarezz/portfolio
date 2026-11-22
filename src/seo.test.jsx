import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'
import { renderMeta } from './prerender.js'
import { homeMeta, notFoundMeta, projectMeta, SITE_URL } from './seo.js'

function renderRoute(route) {
  return render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>,
  )
}

const head = (selector, attribute = 'content') => document.head.querySelector(selector)?.getAttribute(attribute)

describe('metadatos por ruta', () => {
  it('cada proyecto tiene su propio título, descripción y canonical', () => {
    const meta = projectMeta('fuego-dance-platform')
    expect(meta.title).toMatch(/Fuego Dance/)
    expect(meta.url).toBe(`${SITE_URL}/projects/fuego-dance-platform`)
    expect(meta.description.length).toBeLessThanOrEqual(160)
    expect(meta.type).toBe('article')
    expect(projectMeta('no-existe')).toBeNull()
    expect(homeMeta().url).toBe(`${SITE_URL}/`)
    expect(notFoundMeta().robots).toBe('noindex')
  })

  it('acorta descripciones largas sin cortar palabras', () => {
    const meta = projectMeta('agrocomer-corporate-platform')
    expect(meta.description.length).toBeLessThanOrEqual(160)
    expect(meta.description.endsWith('…')).toBe(true)
  })

  it('actualiza el head al abrir un proyecto', () => {
    renderRoute('/projects/sdn-ami-architecture')
    expect(document.title).toMatch(/Arquitectura SDN resiliente/)
    expect(head('link[rel="canonical"]', 'href')).toBe(`${SITE_URL}/projects/sdn-ami-architecture`)
    expect(head('meta[property="og:url"]')).toBe(`${SITE_URL}/projects/sdn-ami-architecture`)
    expect(head('meta[name="robots"]')).toBe('index, follow')
  })

  it('una ruta inexistente muestra un 404 que no se indexa', () => {
    renderRoute('/projects/no-existe')
    expect(screen.getByRole('heading', { level: 1, name: /página no encontrada/i })).toBeInTheDocument()
    expect(head('meta[name="robots"]')).toBe('noindex')

    renderRoute('/cualquier-cosa')
    expect(screen.getAllByRole('heading', { level: 1, name: /página no encontrada/i }).length).toBeGreaterThan(0)
  })
})

describe('prerender del HTML', () => {
  const template = `<title>X</title>
    <meta name="description" content="x" />
    <link rel="canonical" href="https://arturoalvarez.dev/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="x" />
    <meta property="og:description" content="x" />
    <meta property="og:url" content="https://arturoalvarez.dev/" />`

  it('reemplaza los metadatos y escapa el texto', () => {
    const html = renderMeta(template, projectMeta('sherlock-osint-dashboard'))
    expect(html).toContain('<link rel="canonical" href="https://arturoalvarez.dev/projects/sherlock-osint-dashboard" />')
    expect(html).toContain('<meta property="og:type" content="article" />')
    expect(html).toContain('<meta name="robots" content="index, follow" />')
    expect(renderMeta(template, homeMeta())).toContain('Cloud &amp; DevOps')
  })

  it('falla si la plantilla no tiene una etiqueta esperada', () => {
    expect(() => renderMeta('<title>X</title>', homeMeta())).toThrow(/description/)
  })
})

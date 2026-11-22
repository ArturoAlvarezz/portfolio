import { useEffect } from 'react'

function setMeta(selector, attribute, key, value) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

// Mantiene el <head> al día al navegar dentro de la app (el HTML inicial ya viene pre-generado).
export function useDocumentMeta(meta) {
  useEffect(() => {
    if (!meta) return
    document.title = meta.title
    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setMeta('meta[name="robots"]', 'name', 'robots', meta.robots)
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', meta.url)
    setMeta('meta[property="og:type"]', 'property', 'og:type', meta.type)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', meta.url)
  }, [meta])
}

import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/layout/SiteFooter.jsx'
import { SiteHeader } from '../components/layout/SiteHeader.jsx'
import { CrtOverlay, NoiseOverlay } from '../components/motion/Overlays.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { notFoundMeta } from '../seo.js'

const meta = notFoundMeta()

export function NotFoundPage() {
  useDocumentMeta(meta)

  return (
    <>
      <CrtOverlay />
      <NoiseOverlay />
      <SiteHeader />
      <main className="case-study" id="not-found">
        <header className="case-study__hero">
          <div className="case-study__meta">
            <span>ERROR / 404</span>
            <span>SIGNAL_LOST</span>
          </div>
          <h1>Página no encontrada</h1>
          <p>La dirección no existe o cambió de lugar.</p>
          <Link className="case-study__back" to="/">← VOLVER AL INICIO</Link>
        </header>
      </main>
      <SiteFooter />
    </>
  )
}

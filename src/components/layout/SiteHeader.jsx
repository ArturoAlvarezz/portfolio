import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/portfolio.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'

const sectionIds = navigation.map((item) => item.id)

export function MobileSystemMenu({ open, onClose, path }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.classList.add('menu-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="mobile-menu" id="mobile-system-menu">
      <p className="mobile-menu__status">SYSTEM_INDEX // NAVIGATION_READY</p>
      <ol>
        {navigation.map((item, index) => (
          <li key={item.id}>
            <a href={path === '/' ? `#${item.id}` : `/#${item.id}`} onClick={onClose}>
              <span>[{String(index + 1).padStart(2, '0')}]</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      <a className="mobile-menu__cv" href="/cv.pdf" onClick={onClose}>
        [DOWNLOAD_CV.PDF]
      </a>
    </div>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-mark" to="/" aria-label="Arturo Álvarez, inicio">
          <strong>ARTURO.ALVAREZ</strong>
          <span>CLOUD_SYSTEMS / HUMAN_SIGNAL</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item, index) => (
            <a
              key={item.id}
              href={pathname === '/' ? `#${item.id}` : `/#${item.id}`}
              aria-current={pathname === '/' && activeSection === item.id ? 'location' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-system-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span>{menuOpen ? 'CLOSE' : 'INDEX'}</span>
          <span aria-hidden="true">[{menuOpen ? '×' : '＋'}]</span>
        </button>
      </div>
      <MobileSystemMenu open={menuOpen} onClose={() => setMenuOpen(false)} path={pathname} />
    </header>
  )
}

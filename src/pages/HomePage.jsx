import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/hero/Hero.jsx'
import { SiteFooter } from '../components/layout/SiteFooter.jsx'
import { SiteHeader } from '../components/layout/SiteHeader.jsx'
import { CrtOverlay, NoiseOverlay } from '../components/motion/Overlays.jsx'
import { ContactSection } from '../components/sections/ContactSection.jsx'
import { ExperienceSection } from '../components/sections/ExperienceSection.jsx'
import { ProfileSection } from '../components/sections/ProfileSection.jsx'
import { ProjectsSection } from '../components/sections/ProjectsSection.jsx'
import { StackSection } from '../components/sections/StackSection.jsx'

export function HomePage({ onOpenTerminal }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    let cancelled = false
    let frameId

    const scrollToSection = () => {
      if (cancelled) return
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }

    frameId = requestAnimationFrame(() => {
      frameId = requestAnimationFrame(scrollToSection)
    })
    const fallbackId = window.setTimeout(scrollToSection, 600)
    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    fontsReady.then(scrollToSection)
    window.addEventListener('load', scrollToSection, { once: true })

    return () => {
      cancelled = true
      cancelAnimationFrame(frameId)
      window.clearTimeout(fallbackId)
      window.removeEventListener('load', scrollToSection)
    }
  }, [hash])

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <CrtOverlay />
      <NoiseOverlay />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection onOpenTerminal={onOpenTerminal} />
      </main>
      <SiteFooter />
    </>
  )
}

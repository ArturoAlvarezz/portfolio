import { contactLinks } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function ContactSection({ onOpenTerminal }) {
  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionLabel index="06" title="CONTACT" meta="connection_request.sh" />
      <Reveal className="contact-layout">
        <div>
          <p className="eyebrow">SIGNAL: OPEN</p>
          <h3 id="contact-title">ESTABLISH CONNECTION?</h3>
          <p>
            Disponible para conversar sobre Cloud, DevOps, SRE, infraestructura, redes y automatización.
          </p>
        </div>
        <div className="contact-command-list">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>&gt; open {link.label.toLowerCase()}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
          <button type="button" onClick={onOpenTerminal}>
            <span>&gt; launch terminal</span>
            <strong>INTERACTIVE_MODE</strong>
          </button>
        </div>
      </Reveal>
    </section>
  )
}

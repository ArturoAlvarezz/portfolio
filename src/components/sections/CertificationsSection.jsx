import { FiExternalLink } from 'react-icons/fi'
import { certifications } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function CertificationsSection() {
  return (
    <section className="content-section certifications-section" id="certifications" aria-labelledby="certifications-title">
      <SectionLabel index="05" title="CERTIFICATIONS" meta="credentials.log" />
      <Reveal>
        <h3 className="visually-hidden" id="certifications-title">Certificaciones</h3>
        <ul className="certification-list">
          {certifications.map((certification) => (
            <li key={certification.name} className="certification-card">
              {certification.logo && (
                <img
                  className="certification-card__logo"
                  src={certification.logo}
                  alt={`Insignia de ${certification.name}`}
                  width="150"
                  height="150"
                  loading="lazy"
                />
              )}
              <div className="certification-card__body">
                <div className="certification-card__meta">
                  <span>{certification.issuer}</span>
                  <span>{certification.issued}</span>
                </div>
                <h3>{certification.name}</h3>
                <p className="certification-card__code">{certification.code}</p>
                <a
                  className="project-card__action"
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View credential: ${certification.name}`}
                >
                  <FiExternalLink aria-hidden="true" />
                  VIEW CREDENTIAL
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

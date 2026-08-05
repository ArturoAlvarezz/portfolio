import { profile } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function ProfileSection() {
  return (
    <section className="content-section profile-section" id="profile" aria-labelledby="profile-title">
      <SectionLabel index="01" title="PROFILE" meta="root@arturo:~/identity" />
      <Reveal className="profile-layout">
        <div className="profile-copy">
          <h3 id="profile-title">INFRASTRUCTURE IS A HUMAN SYSTEM.</h3>
          <p>{profile.statement}</p>
          <p>
            Egresado de Ingeniería Civil en Computación de la Universidad de Talca. Mi práctica combina
            operación, automatización y criterio técnico para construir sistemas mantenibles.
          </p>
        </div>

        <dl className="system-profile">
          <div>
            <dt>ROLE</dt>
            <dd>{profile.role}</dd>
          </div>
          <div>
            <dt>EDUCATION</dt>
            <dd>Ingeniería Civil en Computación / Universidad de Talca</dd>
          </div>
          <div>
            <dt>LOCATION</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>LANGUAGES</dt>
            <dd>Español nativo / Inglés B2</dd>
          </div>
          <div>
            <dt>STATUS</dt>
            <dd className="signal-ok">● {profile.status}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  )
}

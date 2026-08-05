import { profile } from '../../data/portfolio.js'
import { TelemetryLabel } from '../ui/TelemetryLabel.jsx'
import { DavidVisual } from './DavidVisual.jsx'

export function Hero() {
  return (
    <section className="hero" id="index" aria-labelledby="hero-title">
      <div className="hero__coordinates" aria-hidden="true">
        SIGNAL_ORIGIN: 34.9828°S / 71.2394°W
      </div>

      <div className="hero__content">
        <p className="eyebrow">THE WIRED RENAISSANCE / PORTFOLIO 2026</p>
        <h1 id="hero-title" aria-label={profile.name}>
          <span>ARTURO</span>
          <span>ÁLVAREZ</span>
        </h1>
        <p className="hero__role">CLOUD ENGINEER / SYSTEMS BUILDER</p>
        <p className="hero__manifesto">{profile.summary}</p>

        <div className="hero__telemetry" aria-label="Estado profesional">
          <TelemetryLabel label="LOCATION" value={`${profile.location} / ${profile.timezone}`} />
          <TelemetryLabel label="FOCUS" value="CLOUD · DEVOPS · SDN" />
          <TelemetryLabel label="SYSTEM STATUS" value="AVAILABLE" />
        </div>
      </div>

      <DavidVisual />
      <div className="hero__number" aria-hidden="true">00</div>
    </section>
  )
}

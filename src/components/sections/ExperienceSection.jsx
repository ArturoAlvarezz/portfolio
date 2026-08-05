import { experience } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionLabel index="02" title="EXPERIENCE" meta="career_history.dat" />
      <Reveal>
        <h3 className="visually-hidden" id="experience-title">Experiencia profesional</h3>
        <ol className="experience-timeline">
          {experience.map((entry) => (
            <li key={`${entry.period}-${entry.organization}`}>
              <div className="experience-timeline__period">{entry.period}</div>
              <div className="experience-timeline__heading">
                <h3>{entry.organization}</h3>
                <p>{entry.role}</p>
                <span>{entry.location}</span>
              </div>
              <ul>
                {entry.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}

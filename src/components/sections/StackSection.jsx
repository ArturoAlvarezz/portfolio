import { stackGroups } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function StackSection() {
  return (
    <section className="content-section stack-section" id="stack" aria-labelledby="stack-title">
      <SectionLabel index="04" title="STACK" meta="capabilities.index" />
      <Reveal>
        <div className="section-intro">
          <h3 id="stack-title">TOOLS WITH OPERATIONAL CONTEXT.</h3>
          <p>La tecnología importa por lo que permite observar, automatizar y sostener.</p>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-group">
              <h3>{group.title}</h3>
              <dl>
                {group.items.map(([technology, context]) => (
                  <div key={technology}>
                    <dt>{technology}</dt>
                    <dd>{context}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

import { projects } from '../../data/portfolio.js'
import { Reveal } from '../motion/Reveal.jsx'
import { ProjectGrid } from '../projects/ProjectGrid.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'

export function ProjectsSection() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionLabel index="03" title="PROJECTS" meta="project_systems.log" />
      <Reveal>
        <div className="section-intro">
          <h3 id="projects-title">SYSTEMS BUILT TO BE OPERATED.</h3>
          <p>
            Proyectos donde arquitectura, redes y automatización se validan con resultados observables.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </Reveal>
    </section>
  )
}

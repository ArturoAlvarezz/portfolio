import { TechnologyBadge } from './TechnologyBadge.jsx'

export function ArchitectureDiagram({ project }) {
  return (
    <div className="architecture-diagram" role="img" aria-label={`Tecnologías principales de ${project.title}`}>
      <div className="architecture-diagram__core">
        <span>CONTROL_PLANE</span>
        <strong>{project.shortTitle}</strong>
      </div>
      <div className="architecture-diagram__nodes" aria-hidden="true">
        {project.stack.slice(0, 6).map((technology) => (
          <TechnologyBadge key={technology} technology={technology} />
        ))}
      </div>
      <div className="architecture-diagram__signal" aria-hidden="true" />
    </div>
  )
}

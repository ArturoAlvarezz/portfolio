import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { TechnologyBadge } from './TechnologyBadge.jsx'

export function ProjectCard({ project }) {
  const hasLinks = project.links?.repository || project.links?.demo

  return (
    <article className="project-card">
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>PROJECT / {project.index}</span>
          {project.year && <span>{project.year}</span>}
        </div>
        <p className="project-card__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__footer">
          <ul aria-label="Tecnologías principales">
            {project.stack.slice(0, 5).map((technology) => (
              <li key={technology}>
                <TechnologyBadge technology={technology} compact />
              </li>
            ))}
          </ul>
          {hasLinks && (
            <div className="project-card__actions">
              {project.links.repository && (
                <a className="project-card__action" href={project.links.repository} target="_blank" rel="noreferrer">
                  <FiGithub aria-hidden="true" />
                  GITHUB REPOSITORY
                </a>
              )}
              {project.links.demo && (
                <a className="project-card__action project-card__action--demo" href={project.links.demo} target="_blank" rel="noreferrer">
                  <FiExternalLink aria-hidden="true" />
                  LIVE DEMO
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

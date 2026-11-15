import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/layout/SiteFooter.jsx'
import { SiteHeader } from '../components/layout/SiteHeader.jsx'
import { CrtOverlay, NoiseOverlay } from '../components/motion/Overlays.jsx'
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram.jsx'
import { MetricsPanel } from '../components/projects/MetricsPanel.jsx'
import { getProject, projects } from '../data/portfolio.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { projectMeta } from '../seo.js'
import { NotFoundPage } from './NotFoundPage.jsx'

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const meta = useMemo(() => projectMeta(slug), [slug])
  useDocumentMeta(meta)

  if (!project) return <NotFoundPage />

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <a className="skip-link" href="#case-study">Saltar al caso de estudio</a>
      <CrtOverlay />
      <NoiseOverlay />
      <SiteHeader />
      <main className="case-study" id="case-study">
        <header className="case-study__hero">
          <Link className="case-study__back" to="/#projects">← BACK TO PROJECTS</Link>
          <div className="case-study__meta">
            <span>CASE STUDY / {project.index}</span>
            <span>{project.category}</span>
            {project.year && <span>{project.year}</span>}
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <MetricsPanel metrics={project.metrics} />
        </header>

        <section className="case-study__section case-study__overview" aria-labelledby="overview-title">
          <div>
            <span>[01] EXECUTIVE SUMMARY</span>
            <h2 id="overview-title">Context & role</h2>
          </div>
          <div>
            <p>{project.context}</p>
            <dl>
              <div><dt>ROLE</dt><dd>{project.role}</dd></div>
              <div><dt>STATUS</dt><dd>{project.status}</dd></div>
            </dl>
          </div>
        </section>

        <section className="case-study__section" aria-labelledby="architecture-title">
          <div>
            <span>[02] SYSTEM MAP</span>
            <h2 id="architecture-title">Architecture</h2>
          </div>
          <ArchitectureDiagram project={project} />
        </section>

        <section className="case-study__section case-study__columns" aria-labelledby="decisions-title">
          <div>
            <span>[03] ENGINEERING LOG</span>
            <h2 id="decisions-title">Constraints & decisions</h2>
          </div>
          <div>
            <article>
              <h3>CONSTRAINTS</h3>
              <ul>{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <h3>DECISIONS</h3>
              <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="case-study__result" aria-labelledby="result-title">
          <span>[04] RESULT</span>
          <h2 id="result-title">Validated outcome</h2>
          <p>{project.result}</p>
        </section>

        <Link className="next-project" to={`/projects/${nextProject.slug}`}>
          <span>NEXT CASE STUDY / {nextProject.index}</span>
          <strong>{nextProject.shortTitle} →</strong>
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}

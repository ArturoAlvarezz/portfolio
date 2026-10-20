import { useEffect, useRef, useState } from 'react'
import { certifications, contactLinks, experience, profile, projects, stackGroups } from '../../data/portfolio.js'

const helpText = 'Commands: help, profile, about, experience, projects, stack, certifications, contact, cv, status, whoami, clear'

const profileSummary = [
  `${profile.name} // ${profile.role}`,
  `${profile.location} // ${profile.timezone} // ${profile.status}`,
  profile.statement,
].join('\n')

const aboutSummary = [
  'ARTURO.ALVAREZ // PERSONAL PORTFOLIO',
  'Portfolio personal construido como una SPA rápida, responsive y accesible.',
  'FRONTEND: React 19 // React Router 6 // Vite 8',
  'UI: CSS responsive // react-icons',
  'QUALITY: Vitest 4 // Testing Library // ESLint 10',
  'RUNTIME: Node 24 // pnpm 10',
  'DELIVERY: Docker // Nginx // GitHub Actions',
].join('\n')

const experienceSummary = experience.map((entry) => [
  `[${entry.period}] ${entry.organization} // ${entry.role}`,
  entry.contributions.map((contribution) => `- ${contribution}`).join('\n'),
].join('\n')).join('\n\n')

const projectsSummary = projects.map((project) => {
  const links = Object.entries(project.links ?? {})
    .map(([label, href]) => `${label.toUpperCase()}: ${href}`)
    .join('\n')

  return [
    `[${project.index}] ${project.title}`,
    `${project.category}${project.year ? ` // ${project.year}` : ''}`,
    project.summary,
    `STACK: ${project.stack.join(', ')}`,
    links,
  ].filter(Boolean).join('\n')
}).join('\n\n')

const stackSummary = stackGroups.map((group) => [
  group.title,
  group.items.map(([technology]) => technology).join(' // '),
].join('\n')).join('\n\n')

const certificationsSummary = certifications.map((certification) => [
  `[${certification.issued}] ${certification.name} (${certification.code})`,
  `ISSUER: ${certification.issuer}`,
  `CREDENTIAL: ${certification.href}`,
].join('\n')).join('\n\n')

const contactSummary = contactLinks.map((link) => (
  `${link.label}: ${link.value}${link.href !== link.value ? ` // ${link.href}` : ''}`
)).join('\n')

export function TerminalPanel({ open, onClose }) {
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([
    { command: 'system', output: 'WIRED_TERMINAL v1.0 // Type “help” to inspect available commands.' },
  ])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      inputRef.current?.focus()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const output = outputRef.current
    if (output) output.scrollTop = output.scrollHeight
  }, [history])

  const execute = (rawCommand) => {
    const normalized = rawCommand.trim().toLowerCase()
    if (!normalized) return

    if (normalized === 'clear') {
      setHistory([])
      return
    }

    if (normalized === 'cv') {
      setHistory((current) => [...current, { command: normalized, output: 'Opening /cv.pdf...' }])
      window.open('/cv.pdf', '_blank', 'noopener,noreferrer')
      return
    }

    const responses = {
      help: helpText,
      profile: profileSummary,
      about: aboutSummary,
      experience: experienceSummary,
      projects: projectsSummary,
      stack: stackSummary,
      certifications: certificationsSummary,
      contact: contactSummary,
      status: `SIGNAL: STABLE // LOCATION: ${profile.location} // AVAILABILITY: ${profile.status}`,
      whoami: `${profile.name} // ${profile.role} // Systems builder`,
    }

    setHistory((current) => [
      ...current,
      {
        command: normalized,
        output: responses[normalized] ?? `Command not found: ${normalized}. Type “help”.`,
      },
    ])
  }

  const onSubmit = (event) => {
    event.preventDefault()
    execute(command)
    setCommand('')
  }

  return (
    <dialog
      className="terminal-panel"
      ref={dialogRef}
      aria-labelledby="terminal-title"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <div className="terminal-panel__header">
        <div>
          <span aria-hidden="true">■</span>
          <h2 id="terminal-title">WIRED_TERMINAL</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Cerrar terminal">[ESC] CLOSE</button>
      </div>

      <div ref={outputRef} className="terminal-panel__output" role="log" aria-live="polite" aria-relevant="additions">
        {history.map((entry, index) => (
          <div key={`${entry.command}-${index}`}>
            <p><span>arturo@wired:~$</span> {entry.command}</p>
            <output>{entry.output}</output>
          </div>
        ))}
      </div>

      <form className="terminal-panel__input" onSubmit={onSubmit}>
        <label htmlFor="terminal-command">arturo@wired:~$</label>
        <input
          ref={inputRef}
          id="terminal-command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          placeholder="enter command..."
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit">RUN</button>
      </form>
    </dialog>
  )
}

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { TerminalPanel } from './components/terminal/TerminalPanel.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { ProjectPage } from './pages/ProjectPage.jsx'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target
      const isTyping = target instanceof HTMLElement
        && (target.matches('input, textarea, select') || target.isContentEditable)

      if (!isTyping && ((event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '>')) {
        event.preventDefault()
        setTerminalOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onOpenTerminal={() => setTerminalOpen(true)} />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!terminalOpen && (
        <button
          className="terminal-launcher"
          type="button"
          aria-keyshortcuts="Control+K"
          aria-haspopup="dialog"
          aria-expanded="false"
          onClick={() => setTerminalOpen(true)}
        >
          <span aria-hidden="true">&gt;_</span>
          <strong>TERMINAL</strong>{' '}
          <small>CTRL + K</small>
        </button>
      )}
      <TerminalPanel open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  )
}

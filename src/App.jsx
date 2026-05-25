import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

/* ===== DATA ===== */
const skills = [
  { name: 'PROGRAMMING', width: 92 },
  { name: 'CLOUD NATIVE', width: 85 },
  { name: 'DEVOPS', width: 78 },
  { name: 'IOT & EDGE', width: 80 },
  { name: 'AGENT OPS', width: 70 },
  { name: 'REPAIR', width: 88 },
]

const interests = [
  {
    icon: '☁️',
    title: 'Cloud Native',
    desc: 'Kubernetes, Docker, microservicios y arquitecturas escalables. Despliego apps en clústeres K8s con GitOps y CI/CD automatizado.',
    tags: ['Kubernetes', 'Docker', 'GitOps', 'Helm'],
  },
  {
    icon: '🤖',
    title: 'Agent Ops',
    desc: 'Orquestación de agentes autónomos de IA, sistemas multi-agente, y automatización inteligente en entornos de producción.',
    tags: ['AI Agents', 'Autonomous', 'Orchestration', 'LLMs'],
  },
  {
    icon: '📡',
    title: 'IoT & Edge',
    desc: 'Dispositivos conectados, computación en el borde, sensores inteligentes y automatización del hogar con Home Assistant y ESPHome.',
    tags: ['ESP32', 'Home Assistant', 'Sensors', 'Edge'],
  },
]

const projects = [
  {
    title: 'Fuego Dance',
    desc: 'Academia de Salsa Casino — Plataforma completa con panel admin, gestión de figuras, galería de videos y upload progresivo. React + FastAPI + Docker.',
    github: 'https://github.com/ArturoAlvarezz/fuegodance',
    deploy: 'https://fuegodance.arturoalvarez.site',
    color: '#ff4444',
  },
  {
    title: 'Sherlock',
    desc: 'Interfaz web para OSINT — Búsqueda y enumeración de usuarios en redes sociales. Frontend React + Backend FastAPI desplegado en clúster.',
    github: 'https://github.com/ArturoAlvarezz/sherlock-app',
    deploy: 'https://sherlock.arturoalvarez.site',
    color: '#00ff88',
  },
  {
    title: 'Películas Danielita',
    desc: 'Plataforma de streaming personal con catálogo, búsqueda y reproducción. Interfaz limpia con Tailwind, backend Node.js + Docker.',
    github: 'https://github.com/ArturoAlvarezz/peliculas-danielita',
    deploy: 'https://peliculas.arturoalvarez.site',
    color: '#ff00ff',
  },
  {
    title: 'Diet Tracker',
    desc: 'Aplicación para seguimiento de dieta y nutrición. CRUD completo con autenticación, panel de progreso y estadísticas.',
    github: 'https://github.com/ArturoAlvarezz/diet-tracker',
    deploy: null,
    color: '#00ccff',
  },
  {
    title: 'Karaoke App',
    desc: 'App colaborativa para gestionar listas de canciones de karaoke en tiempo real. Múltiples salas y votación colaborativa.',
    github: 'https://github.com/ArturoAlvarezz/karaoke-app',
    deploy: null,
    color: '#ffaa00',
  },
  {
    title: 'Ryu-K8s',
    desc: 'Framework SDN basado en Ryu para orquestación de redes definidas por software en clústeres Kubernetes.',
    github: 'https://github.com/ArturoAlvarezz/ryu-k8s',
    deploy: null,
    color: '#00ffff',
  },
]

/* ===== MATRIX RAIN ===== */
function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cols = Math.floor(canvas.width / 14)
    const drops = Array(cols).fill(1)
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 17, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ffff'
      ctx.font = '14px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#00ffff'
        ctx.globalAlpha = 0.3 + Math.random() * 0.3
        ctx.fillText(text, i * 14, drops[i] * 14)

        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" />
}

/* ===== PARTICLE NETWORK ===== */
function ParticleNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 60
    const CONNECT_DIST = 150
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = '#00ffff'
        ctx.globalAlpha = 0.6
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.3
            ctx.strokeStyle = '#00ffff'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-network" />
}

/* ===== GIF BACKGROUND ===== */
function GifBackground() {
  return <div className="gif-background" />
}

/* ===== SCANLINE OVERLAY ===== */
function Scanlines() {
  return <div className="scanlines-overlay" />
}

/* ===== NAVBAR ===== */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about', 'interests', 'projects']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const links = [
    { id: 'about', label: 'ABOUT' },
    { id: 'interests', label: 'INTERESTS' },
    { id: 'projects', label: 'PROJECTS' },
  ]

  return (
    <nav className={`cyberpunk-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollTo('about')}>
          <span className="logo-text">ARTURO ALVAREZ</span>
          <span className="logo-text logo-glitch-layer" aria-hidden="true">ARTURO ALVAREZ</span>
          <span className="logo-text logo-glitch-layer-2" aria-hidden="true">ARTURO ALVAREZ</span>
        </div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-text={l.label}
                className={activeSection === l.id ? 'active-link' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={`nav-toggle${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(p => !p)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}

/* ===== VOLUME CONTROL ===== */
function VolumeControl() {
  const [volume, setVolume] = useState(30)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)
  const interacted = useRef(false)

  const updateVolume = useCallback((val) => {
    setVolume(val)
    if (audioRef.current) audioRef.current.volume = val / 100
  }, [])

  useEffect(() => {
    const audio = document.getElementById('backgroundAudio')
    if (audio) {
      audioRef.current = audio
      audio.volume = 0.3
      audio.loop = true
    }

    const handler = () => {
      if (!interacted.current) {
        interacted.current = true
        const a = document.getElementById('backgroundAudio')
        if (a && a.paused) a.play().catch(() => {})
      }
    }
    document.addEventListener('click', handler, { once: true })
    document.addEventListener('keydown', handler, { once: true })

    return () => {
      document.removeEventListener('click', handler)
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.volume = volume / 100
        setMuted(false)
      } else {
        audioRef.current.volume = 0
        setMuted(true)
      }
    }
  }, [muted, volume])

  const volIcon = useMemo(() => {
    const svg = (children) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    )
    const base = <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    if (muted || volume === 0) return svg(<>{base}<line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></>)
    if (volume < 50) return svg(<>{base}<path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></>)
    return svg(<>{base}<path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></>)
  }, [muted, volume])

  return (
    <div className="volume-control">
      <div className="volume-container">
        <button className={`volume-btn${muted ? ' muted' : ''}`} onClick={toggleMute}>
          <span className="volume-icon">{volIcon}</span>
        </button>
        <div className="volume-slider-container">
          <input type="range" min="0" max="100" value={muted ? 0 : volume}
            className="volume-slider"
            onInput={(e) => { if (muted) setMuted(false); updateVolume(Number(e.target.value)) }}
          />
          <div className="volume-fill" style={{ width: `${muted ? 0 : volume}%` }} />
        </div>
      </div>
    </div>
  )
}

/* ===== HOOK: SCROLL REVEAL ===== */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ===== ABOUT SECTION ===== */
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-glow" />
      <div className="container">
        <h2 className="section-title reveal">
          <span className="glitch-text" data-text="> ABOUT_ME">_ ABOUT_ME</span>
          <span className="section-subtitle">// root@arturo:~/profile</span>
        </h2>
        <div className="about-content reveal">
          {/* Left: Profile Area */}
          <div className="profile-area">
            <div className="profile-image hologram-container">
              <div className="image-placeholder">
                <div className="hologram-effect" />
                <div className="scan-line" />
                <span className="profile-icon">👨‍💻</span>
              </div>
              <div className="glow-ring" />
            </div>

            <div className="status-panel">
              <div className="status-item"><span className="status-label">STATUS:</span><span className="status-value online pulse-text">● ONLINE</span></div>
              <div className="status-item"><span className="status-label">LEVEL:</span><span className="status-value">ALMOST ENGINEER</span></div>
              <div className="status-item"><span className="status-label">LOCATION:</span><span className="status-value">CURICÓ — CHILE</span></div>
              <div className="status-item"><span className="status-label">FOCUS:</span><span className="status-value" style={{ color: 'var(--accent-green)' }}>CLOUD NATIVE & AI</span></div>
            </div>

            <div className="contact-panel">
              <div className="contact-header">
                <span className="contact-header-icon">📡</span>
                <span>CONTACT_LINKS</span>
              </div>
              <div className="contact-grid">
                {[
                  { p: 'gmail', n: 'GMAIL', h: 'mailto:arturoalvareezz@gmail.com', img: '/icons8-gmail.svg' },
                  { p: 'linkedin', n: 'LINKEDIN', h: 'https://www.linkedin.com/in/arturo-alvarez-48804519b/', img: '/icons8-linkedin.svg' },
                  { p: 'github', n: 'GITHUB', h: 'https://github.com/ArturoAlvarezz', img: '/icons8-github.svg' },
                  { p: 'instagram', n: 'INSTAGRAM', h: 'https://www.instagram.com/arturoalvarez__/', img: '/icons8-instagram-logo.svg' },
                ].map(c => (
                  <a key={c.p} href={c.h} target={c.p !== 'gmail' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="contact-item" data-platform={c.p}>
                    <div className="contact-icon"><img src={c.img} alt="" width="24" height="24" /></div>
                    <span className="contact-name">{c.n}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="info-terminal glow-border">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close" /><span className="btn-minimize" /><span className="btn-maximize" />
              </div>
              <span className="terminal-title">USER_PROFILE.bin — bash</span>
              <span className="terminal-extra">✕ □</span>
            </div>
            <div className="terminal-content">
              <div className="typing-text">
                <span className="prompt">root@arturo:~$</span>
                <span className="command blinking-cursor"> cat about.txt</span>
              </div>
              <div className="profile-data">
                <p className="data-line"><span className="field-name">NAME:</span><strong className="highlight-name glitch-text-small">Arturo Alvarez</strong></p>
                <p className="data-line"><span className="field-name">ROLE:</span><span className="highlight-role">Estudiante de Ingeniería Civil en Computación</span></p>
                <p className="data-line"><span className="field-name">INSTITUTION:</span><span className="highlight-institution">Universidad de Talca</span></p>

                <div className="skills-matrix">
                  <p className="data-line"><span className="field-name">SKILLS:</span></p>
                  <div className="skill-grid">
                    {skills.map(s => (
                      <div key={s.name} className="skill-item" data-skill={s.name.toLowerCase().replace(/\s+/g, '-')}>
                        <span className="skill-name">{s.name}</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ '--w': `${s.width}%` }} />
                        </div>
                        <span className="skill-pct">{s.width}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="data-line description">
                  <span className="field-name">DESCRIPTION:</span>
                  <span>Me especializo en reparar y crear soluciones tecnológicas. Mi pasión por la resolución de problemas me lleva a explorar constantemente nuevas áreas del conocimiento técnico.</span>
                </p>
                <p className="data-line mission">
                  <span className="field-name">MISSION:</span>
                  <span>Construir sistemas inteligentes, escalables y autónomos que fusionen el cloud con el edge, orquestados por agentes de IA.</span>
                </p>
              </div>
              <div className="cursor-blink">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== INTERESTS SECTION ===== */
function InterestsSection() {
  const icons = ['☁️', '🤖', '📡']

  return (
    <section id="interests" className="interests-section">
      <div className="section-glow-alt" />
      <div className="container">
        <h2 className="section-title reveal">
          <span className="glitch-text" data-text="> INTERESTS">_ INTERESTS</span>
          <span className="section-subtitle">// focus_areas.exe</span>
        </h2>
        <div className="interests-grid">
          {interests.map((item, i) => (
            <div key={item.title} className="interest-card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="interest-card-inner">
                <div className="interest-icon-wrapper">
                  <span className="interest-icon">{item.icon}</span>
                  {i === 0 && <span className="orb" style={{ '--x': '20%', '--y': '30%', '--s': '150px' }} />}
                  {i === 1 && <span className="orb" style={{ '--x': '60%', '--y': '20%', '--s': '120px' }} />}
                  {i === 2 && <span className="orb" style={{ '--x': '40%', '--y': '50%', '--s': '130px' }} />}
                </div>
                <h3 className="interest-title">{item.title}</h3>
                <p className="interest-desc">{item.desc}</p>
                <div className="interest-tags">
                  {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="card-glow-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== PROJECTS SECTION ===== */
function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-glow" />
      <div className="container">
        <h2 className="section-title reveal">
          <span className="glitch-text" data-text="> PROJECTS">_ PROJECTS</span>
          <span className="section-subtitle">// deployed_systems.log</span>
        </h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.title} className="project-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-accent" style={{ background: proj.color }} />
              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>GitHub</span>
                  </a>
                  {proj.deploy && (
                    <a href={proj.deploy} target="_blank" rel="noopener noreferrer" className="project-link deploy-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-glow" style={{ '--color': proj.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-matrix-line">
            <span className="footer-glitch">[ARTURO ALVAREZ]</span>
            <span className="footer-meta">© 2026 — BUILT WITH 🔥</span>
          </div>
          <div className="footer-status">
            <span className="footer-dot" />
            <span className="footer-uptime">// SYSTEM: ONLINE // STATUS: ACTIVE</span>
          </div>
          <div className="footer-ascii">
            <pre>{`
 █████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗██╔════╝
███████║██████╔╝█████╗
██╔══██║██╔══██╗██╔══╝
██║  ██║██║  ██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝`}
            </pre>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ===== APP ===== */
export default function App() {
  useScrollReveal()

  return (
    <>
      <MatrixRain />
      <ParticleNetwork />
      <GifBackground />
      <Scanlines />
      <NavBar />
      <VolumeControl />
      <main className="main-content">
        <AboutSection />
        <InterestsSection />
        <ProjectsSection />
      </main>
      <Footer />
      <audio loop id="backgroundAudio">
        <source src="/powerlineNoise.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}

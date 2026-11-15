import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderRoute(route = '/') {
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  )
}

describe('portfolio', () => {
  it('renders the verified profile and projects', () => {
    renderRoute()

    expect(screen.getByRole('heading', { level: 1, name: /arturo álvarez/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /busto de david/i })).toHaveAttribute(
      'src',
      '/images/hero/david-wired-portrait.webp',
    )
    const hero = screen.getByRole('heading', { level: 1, name: /arturo álvarez/i }).closest('section')
    const profileSection = screen.getByRole('heading', { level: 2, name: 'PROFILE' }).closest('section')
    expect(within(hero).queryByRole('link')).not.toBeInTheDocument()
    expect(within(hero).queryByRole('button')).not.toBeInTheDocument()
    expect(within(profileSection).queryByRole('link')).not.toBeInTheDocument()
    const sdnCard = screen.getByRole('heading', { name: /arquitectura sdn resiliente/i }).closest('article')
    const infrastructureCard = screen.getByRole('heading', { name: /plataforma personal de servicios/i }).closest('article')
    const fuegoDanceCard = screen.getByRole('heading', { name: /gestión de contenido para Fuego Dance/i }).closest('article')
    const sherlockCard = screen.getByRole('heading', { name: /búsqueda de identidades digitales/i }).closest('article')
    const agrocomerCard = screen.getByRole('heading', { name: /catálogo digital para Agrocomer/i }).closest('article')
    const repositoryLink = within(sdnCard).getByRole('link', { name: /github repository/i })
    const fuegoDanceRepository = within(fuegoDanceCard).getByRole('link', { name: /github repository/i })
    const fuegoDanceDemo = within(fuegoDanceCard).getByRole('link', { name: /live demo/i })
    const sherlockRepository = within(sherlockCard).getByRole('link', { name: /github repository/i })
    const sherlockDemo = within(sherlockCard).getByRole('link', { name: /live demo/i })
    const agrocomerDemo = within(agrocomerCard).getByRole('link', { name: /live demo/i })

    expect(repositoryLink).toHaveAttribute('href', 'https://github.com/ArturoAlvarezz/ryu-k8s')
    expect(repositoryLink).toHaveAttribute('target', '_blank')
    expect(within(infrastructureCard).queryByRole('link')).not.toBeInTheDocument()
    expect(fuegoDanceRepository).toHaveAttribute('href', 'https://github.com/ArturoAlvarezz/fuegodance')
    expect(fuegoDanceDemo).toHaveAttribute('href', 'https://fuegodance.cl/')
    expect(sherlockRepository).toHaveAttribute('href', 'https://github.com/ArturoAlvarezz/sherlock-app')
    expect(sherlockDemo).toHaveAttribute('href', 'https://sherlock.arturoalvarez.dev/')
    expect(within(agrocomerCard).queryByRole('link', { name: /github repository/i })).not.toBeInTheDocument()
    expect(agrocomerDemo).toHaveAttribute('href', 'https://test.agrocomer.cl/')
    expect(screen.queryByText(/^ROLE:/)).not.toBeInTheDocument()
    expect(screen.queryByText(/^(COMPLETED|IN OPERATION|ACTIVE)$/)).not.toBeInTheDocument()
    expect(screen.queryByText('46.4 ms')).not.toBeInTheDocument()
    expect(screen.queryByText(/OPEN CASE STUDY/i)).not.toBeInTheDocument()
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).queryByRole('link', { name: /^EMAIL$/ })).not.toBeInTheDocument()
    expect(within(footer).queryByRole('link', { name: /^CV$/ })).not.toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: /BACK_TO_TOP/i })).toHaveAttribute('href', '#index')
    expect(screen.getAllByText('Docker')[0].closest('.technology-badge')).toContainHTML('<svg')

    const contactSection = screen.getByRole('heading', { level: 2, name: 'CONTACT' }).closest('section')
    const emailLink = within(contactSection).getByRole('link', { name: /open email/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:arturoalvareezz@gmail.com')
    expect(emailLink).not.toHaveAttribute('target')
    expect(within(contactSection).getAllByText('arturoalvareezz@gmail.com')).toHaveLength(1)
  })

  it('opens and closes the mobile system menu', async () => {
    const user = userEvent.setup()
    renderRoute()

    const toggle = screen.getByRole('button', { name: /index/i })
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/system_index/i)).toBeInTheDocument()
    const mobileMenu = screen.getByText(/system_index/i).parentElement
    expect(within(mobileMenu).getByRole('link', { name: /^\[03\]projects$/i })).toBeInTheDocument()
    expect(within(mobileMenu).getByRole('link', { name: /^\[05\]certifications$/i })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByText(/system_index/i)).not.toBeInTheDocument()
  })

  it('scrolls to the projects section when loaded from its hash', async () => {
    Element.prototype.scrollIntoView.mockClear()
    renderRoute('/#projects')

    await waitFor(() => expect(Element.prototype.scrollIntoView).toHaveBeenCalled())
    expect(screen.getByRole('heading', { level: 2, name: 'PROJECTS' })).toBeInTheDocument()
  })

  it('executes terminal commands and reports unknown input', async () => {
    const user = userEvent.setup()
    renderRoute()

    const launcher = screen.getByRole('button', { name: /terminal ctrl \+ k/i })
    await user.click(launcher)
    const terminal = screen.getByRole('dialog', { name: /wired_terminal/i })
    expect(terminal).toHaveAttribute('open')
    expect(screen.queryByRole('button', { name: /terminal ctrl \+ k/i })).not.toBeInTheDocument()

    const command = screen.getByLabelText(/arturo@wired/i)
    await user.type(command, 'help{Enter}')
    expect(screen.getByText(/commands: help, profile, about/i)).toBeInTheDocument()

    await user.type(command, 'projects{Enter}')
    expect(within(terminal).getByText(/arquitectura sdn resiliente/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/github.com\/ArturoAlvarezz\/ryu-k8s/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/gestión de contenido para Fuego Dance/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/https:\/\/fuegodance.cl\//i)).toBeInTheDocument()
    expect(within(terminal).getByText(/búsqueda de identidades digitales/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/https:\/\/sherlock.arturoalvarez.dev\//i)).toBeInTheDocument()
    expect(within(terminal).getByText(/catálogo digital para Agrocomer/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/https:\/\/test.agrocomer.cl\//i)).toBeInTheDocument()
    expect(terminal).toHaveAttribute('open')

    await user.type(command, 'experience{Enter}')
    expect(within(terminal).getByText(/AGROCOMER \/ AGRODRONE/i)).toBeInTheDocument()

    await user.type(command, 'stack{Enter}')
    expect(within(terminal).getByText(/CLOUD & INFRASTRUCTURE/i)).toBeInTheDocument()

    await user.type(command, 'certifications{Enter}')
    expect(within(terminal).getByText(/AWS Certified AI Practitioner \(AIF-C01\)/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/credly.com\/badges\/fd7c4f63/i)).toBeInTheDocument()

    await user.type(command, 'contact{Enter}')
    expect(within(terminal).getByText(/arturoalvareezz@gmail.com/i)).toBeInTheDocument()

    await user.type(command, 'profile{Enter}')
    expect(within(terminal).getByText(/Cloud & DevOps Engineer Junior/i)).toBeInTheDocument()

    await user.type(command, 'about{Enter}')
    expect(within(terminal).getByText(/PERSONAL PORTFOLIO/i)).toBeInTheDocument()
    expect(within(terminal).getByText(/React 19 \/\/ React Router 6 \/\/ Vite 8/i)).toBeInTheDocument()

    await user.type(command, 'unknown{Enter}')
    expect(screen.getByText(/command not found: unknown/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /cerrar terminal/i }))
    expect(terminal).not.toHaveAttribute('open')
    expect(screen.getByRole('button', { name: /terminal ctrl \+ k/i })).toBeInTheDocument()
  })

  it('renders the certifications section with its verified credential', () => {
    renderRoute()

    const section = screen.getByRole('heading', { level: 2, name: 'CERTIFICATIONS' }).closest('section')
    expect(within(section).getByRole('heading', { level: 3, name: /AWS Certified AI Practitioner/i })).toBeInTheDocument()
    expect(within(section).getByText('AIF-C01')).toBeInTheDocument()
    expect(within(section).getByRole('img', { name: /insignia de aws certified ai practitioner/i })).toHaveAttribute(
      'src',
      '/images/certifications/aws-certified-ai-practitioner.png',
    )
    expect(within(section).getByText('Amazon Web Services')).toBeInTheDocument()
    expect(within(section).getByRole('link', { name: /view credential/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/fd7c4f63-5704-4c47-939a-1ad699cf7ddb/public_url',
    )
  })

  it('renders a project case study from its slug', () => {
    renderRoute('/projects/sdn-ami-architecture')

    expect(screen.getByRole('heading', { level: 1, name: /arquitectura sdn resiliente/i })).toBeInTheDocument()
    expect(screen.getByText('46.4 ms')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /constraints & decisions/i })).toBeInTheDocument()
    expect(screen.getByText(/disponibilidad superior al 99/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /terminal ctrl \+ k/i })).toBeInTheDocument()
  })

  it('renders the Fuego Dance case study', () => {
    renderRoute('/projects/fuego-dance-platform')

    expect(screen.getByRole('heading', { level: 1, name: /gestión de contenido para Fuego Dance/i })).toBeInTheDocument()
    expect(screen.getByText('AMD64 / ARM64')).toBeInTheDocument()
    expect(screen.getByText(/opera en producción en fuegodance.cl/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /SHERLOCK OSINT/i })).toHaveAttribute(
      'href',
      '/projects/sherlock-osint-dashboard',
    )
  })

  it('renders the Sherlock OSINT case study', () => {
    renderRoute('/projects/sherlock-osint-dashboard')

    expect(screen.getByRole('heading', { level: 1, name: /búsqueda de identidades digitales/i })).toBeInTheDocument()
    expect(screen.getByText('SSE')).toBeInTheDocument()
    expect(screen.getByText(/investigación educativa y autorizada/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /AGROCOMER/i })).toHaveAttribute(
      'href',
      '/projects/agrocomer-corporate-platform',
    )
  })

  it('renders the Agrocomer case study', () => {
    renderRoute('/projects/agrocomer-corporate-platform')

    expect(screen.getByRole('heading', { level: 1, name: /catálogo digital para Agrocomer/i })).toBeInTheDocument()
    expect(screen.getByText('136')).toBeInTheDocument()
    expect(screen.getByText('142')).toBeInTheDocument()
    expect(screen.getByText(/configuración noindex/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /SDN \/ AMI/i })).toHaveAttribute(
      'href',
      '/projects/sdn-ami-architecture',
    )
  })
})

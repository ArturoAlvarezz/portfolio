import {
  SiCloudflare,
  SiApache,
  SiDebian,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiK3S,
  SiNginx,
  SiNextdotjs,
  SiPostgresql,
  SiPrometheus,
  SiReact,
  SiFastapi,
  SiSqlalchemy,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { FiBox, FiCpu, FiGitBranch, FiLayers, FiRadio, FiSearch, FiShuffle } from 'react-icons/fi'

const technologyIcons = {
  'k3s': SiK3S,
  'Calico': FiLayers,
  'Ryu': FiCpu,
  'Open vSwitch': FiShuffle,
  'FRRouting': FiGitBranch,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'Debian 12': SiDebian,
  'Docker': SiDocker,
  'GitHub Actions': SiGithubactions,
  'Nginx': SiNginx,
  'Cloudflare Tunnel': SiCloudflare,
  'PostgreSQL': SiPostgresql,
  'React 18': SiReact,
  'FastAPI': SiFastapi,
  'Tailwind CSS': SiTailwindcss,
  'SQLAlchemy': SiSqlalchemy,
  'SQLite / PostgreSQL': SiPostgresql,
  'Vue 3': SiVuedotjs,
  'Sherlock': FiSearch,
  'Server-Sent Events': FiRadio,
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'AWS': FaAws,
  'Apache': SiApache,
}

export function TechnologyBadge({ technology, compact = false }) {
  const Icon = technologyIcons[technology] ?? FiBox

  return (
    <span className={`technology-badge${compact ? ' technology-badge--compact' : ''}`}>
      <span className="technology-badge__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="technology-badge__label">{technology}</span>
    </span>
  )
}

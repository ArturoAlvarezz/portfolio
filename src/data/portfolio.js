export const profile = {
  name: 'Arturo Álvarez',
  role: 'Cloud & DevOps Engineer Junior',
  location: 'Curicó, Chile',
  timezone: 'UTC-4',
  status: 'Available for opportunities',
  email: 'arturoalvareezz@gmail.com',
  summary:
    'Egresado de Ingeniería Civil en Computación orientado a Cloud Computing, DevOps y Site Reliability Engineering. Construyo infraestructura observable, automatizada y resiliente.',
  statement:
    'Trabajo en la intersección entre infraestructura cloud, redes y automatización: desde servidores Linux y pipelines CI/CD hasta Kubernetes, SDN y observabilidad.',
}

export const navigation = [
  { id: 'profile', label: 'PROFILE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'stack', label: 'STACK' },
  { id: 'contact', label: 'CONTACT' },
]

export const projects = [
  {
    slug: 'sdn-ami-architecture',
    index: '01',
    title: 'Arquitectura SDN resiliente para redes eléctricas',
    shortTitle: 'SDN / AMI',
    category: 'SDN · CLOUD-NATIVE · NETWORKING',
    year: '2025—2026',
    status: 'COMPLETED',
    summary:
      'Arquitectura distribuida para Infraestructura de Medición Avanzada sobre un clúster k3s de alta disponibilidad, con control SDN, routing dinámico y observabilidad.',
    role: 'Architecture, implementation and validation',
    stack: ['k3s', 'Calico', 'Ryu', 'Open vSwitch', 'FRRouting', 'Prometheus', 'Grafana'],
    links: {
      repository: 'https://github.com/ArturoAlvarezz/ryu-k8s',
    },
    metrics: [
      { label: 'Availability', value: '>99%' },
      { label: 'Average latency', value: '46.4 ms' },
      { label: 'Detected attacks', value: '100%' },
    ],
    context:
      'Proyecto de memoria de título de Ingeniería Civil en Computación. El laboratorio modeló una red AMI distribuida con siete medidores inteligentes y un concentrador de datos virtual.',
    constraints: [
      'Operación distribuida sobre infraestructura de laboratorio.',
      'Redundancia y recuperación frente a fallas de conectividad.',
      'Visibilidad del estado de red y de los componentes de control.',
    ],
    decisions: [
      'k3s y Calico para orquestación y conectividad del clúster.',
      'Ryu, Open vSwitch y OpenFlow para control de red programable.',
      'FRRouting con OSPF y BGP para routing dinámico.',
      'Prometheus y Grafana para métricas y diagnóstico operacional.',
    ],
    result:
      'El prototipo validó disponibilidad superior al 99 %, una latencia promedio de 46,4 ms y detección del 100 % de los ataques simulados en las pruebas de laboratorio.',
  },
  {
    slug: 'arm64-home-infrastructure',
    index: '02',
    title: 'Plataforma personal de servicios Cloud & DevOps',
    shortTitle: 'ARM64 HOME INFRA',
    category: 'LINUX · CONTAINERS · CI/CD',
    year: null,
    status: 'IN OPERATION',
    summary:
      'Servidor físico ARM64 con Debian 12 y Docker para operar aplicaciones, datos y servicios de red mediante stacks aislados y despliegues automatizados.',
    role: 'Infrastructure owner and operator',
    stack: ['Debian 12', 'Docker', 'GitHub Actions', 'Nginx', 'Cloudflare Tunnel', 'PostgreSQL'],
    metrics: [
      { label: 'Architecture', value: 'ARM64' },
      { label: 'Docker networks', value: '13' },
      { label: 'Persistent volumes', value: '11' },
    ],
    context:
      'Laboratorio personal en operación continua para desplegar y mantener aplicaciones React, FastAPI y servicios de datos en hardware propio.',
    constraints: [
      'Recursos físicos limitados y arquitectura ARM64.',
      'Persistencia de datos entre despliegues.',
      'Exposición segura de servicios sin abrir la red doméstica.',
    ],
    decisions: [
      'Stacks Docker separados para frontend, backend y datos.',
      'GitHub Actions para pruebas, construcción y publicación de imágenes.',
      'Cloudflare Tunnel y HTTPS para acceso público controlado.',
      'Healthchecks y políticas de reinicio para recuperación operacional.',
    ],
    result:
      'La plataforma mantiene múltiples aplicaciones autoalojadas con redes aisladas, almacenamiento persistente y entrega automatizada sobre una única máquina ARM64.',
  },
  {
    slug: 'fuego-dance-platform',
    index: '03',
    title: 'Plataforma web y gestión de contenido para Fuego Dance',
    shortTitle: 'FUEGO DANCE',
    category: 'FULL-STACK · CONTENT PLATFORM · DEVOPS',
    year: '2026—NOW',
    status: 'IN OPERATION',
    summary:
      'Plataforma full-stack para una academia de Salsa Casino con sitio público, galería optimizada, contenido formativo, formularios y herramientas administrativas.',
    role: 'Full-stack development, infrastructure and deployment',
    stack: ['React 18', 'FastAPI', 'Tailwind CSS', 'Docker', 'Nginx', 'SQLAlchemy', 'SQLite / PostgreSQL', 'GitHub Actions'],
    links: {
      repository: 'https://github.com/ArturoAlvarezz/fuegodance',
      demo: 'https://fuegodance.cl/',
    },
    metrics: [
      { label: 'Status', value: 'LIVE' },
      { label: 'Deployment', value: 'AMD64 / ARM64' },
      { label: 'Locations', value: '3' },
    ],
    context:
      'Plataforma pública y administrativa para Fuego Dance, academia de Salsa Casino con presencia en Curicó, Talca y Rancagua. Centraliza información, galería, figuras de baile, videos, contacto y gestión de contenido.',
    constraints: [
      'Mantener contenido y archivos persistentes entre despliegues.',
      'Procesar y servir una galería de imágenes sin cargar el backend en cada solicitud.',
      'Separar la experiencia pública de las operaciones administrativas protegidas.',
    ],
    decisions: [
      'React y Tailwind CSS para la aplicación pública responsive.',
      'FastAPI y SQLAlchemy para la API, autenticación y gestión de contenido.',
      'Pillow para generar thumbnails y versiones WebP optimizadas.',
      'Docker Compose y una red privada para aislar frontend y backend.',
      'Nginx como servidor, proxy inverso y acceso directo a medios optimizados.',
      'GitHub Actions para publicar imágenes Docker AMD64 y ARM64.',
    ],
    result:
      'La plataforma opera en producción en fuegodance.cl con sitio público, API activa, galería optimizada y herramientas administrativas desplegadas como servicios contenerizados.',
  },
  {
    slug: 'sherlock-osint-dashboard',
    index: '04',
    title: 'Dashboard OSINT para búsqueda de identidades digitales',
    shortTitle: 'SHERLOCK OSINT',
    category: 'OSINT · CYBERSECURITY · REAL-TIME',
    year: '2026—NOW',
    status: 'IN OPERATION',
    summary:
      'Interfaz web para ejecutar búsquedas autorizadas de nombres de usuario con Sherlock y transmitir coincidencias progresivamente mediante Server-Sent Events.',
    role: 'Full-stack development, integration and deployment',
    stack: ['Vue 3', 'FastAPI', 'Sherlock', 'Server-Sent Events', 'Docker', 'Tailwind CSS', 'GitHub Actions'],
    links: {
      repository: 'https://github.com/ArturoAlvarezz/sherlock-app',
      demo: 'https://sherlock.arturoalvarez.dev/',
    },
    metrics: [
      { label: 'Status', value: 'LIVE' },
      { label: 'Streaming', value: 'SSE' },
      { label: 'Deployment', value: 'AMD64 / ARM64' },
    ],
    context:
      'Dashboard para investigación OSINT educativa y autorizada. Integra el motor Sherlock detrás de una experiencia web que consulta la presencia pública de un nombre de usuario y presenta cada coincidencia mientras la búsqueda sigue en ejecución.',
    constraints: [
      'Mantener una interfaz reactiva durante búsquedas externas de larga duración.',
      'Ejecutar y observar un proceso CLI sin bloquear la API.',
      'Interpretar únicamente resultados confirmados por la salida estructurada de Sherlock.',
      'Desplegar frontend y backend en infraestructura ARM64 desde un mismo origen.',
    ],
    decisions: [
      'Vue 3 Composition API para modelar el estado de búsqueda y los resultados incrementales.',
      'FastAPI y asyncio para ejecutar Sherlock como subproceso no bloqueante.',
      'Server-Sent Events y EventSource para transmitir estado, coincidencias y finalización.',
      'Parsing controlado de la salida de Sherlock para extraer sitio y URL.',
      'Imagen Docker multi-stage con el frontend compilado y la API en un único servicio.',
      'GitHub Actions para publicar imágenes AMD64 y ARM64 con caché de Buildx.',
    ],
    result:
      'La aplicación opera en producción con frontend y API bajo el mismo origen, entrega coincidencias progresivamente y mantiene un despliegue Docker reproducible para AMD64 y ARM64. Su uso está limitado a investigación educativa y autorizada.',
  },
  {
    slug: 'agrocomer-corporate-platform',
    index: '05',
    title: 'Plataforma corporativa y catálogo digital para Agrocomer',
    shortTitle: 'AGROCOMER',
    category: 'NEXT.JS · PRODUCT CATALOG · SEO',
    year: '2026—NOW',
    status: 'STAGING',
    summary:
      'Nueva plataforma corporativa para presentar productos, servicios y la propuesta de valor de Agrocomer mediante un catálogo agrícola optimizado para navegación, contenido y búsqueda.',
    role: 'Web development, cloud infrastructure and deployment',
    stack: ['Next.js', 'React', 'Cloudflare', 'AWS', 'Apache'],
    links: {
      demo: 'https://test.agrocomer.cl/',
    },
    metrics: [
      { label: 'Environment', value: 'STAGING' },
      { label: 'Product routes', value: '136' },
      { label: 'Sitemap URLs', value: '142' },
    ],
    context:
      'Proyecto desarrollado en el contexto del rol de IT Specialist en Agrocomer. Renueva la presencia corporativa de la empresa y organiza su catálogo de insumos agrícolas, servicios, equipo y canales de contacto en una experiencia web unificada.',
    constraints: [
      'Organizar y servir un catálogo extenso con rutas individuales para cada producto.',
      'Optimizar imágenes locales y remotas para distintos tamaños de pantalla.',
      'Mantener el entorno de pruebas fuera de los índices de búsqueda hasta su publicación.',
      'Integrar el despliegue web con la infraestructura, DNS y SSL/TLS administrados por la empresa.',
    ],
    decisions: [
      'Next.js App Router y React Server Components para estructurar páginas y contenido.',
      'Prerendering y caché de Next.js para entregar rutas públicas de forma eficiente.',
      'next/image para transformar y servir recursos gráficos responsive.',
      'Sitemap dinámico para representar páginas corporativas y fichas de productos.',
      'Cloudflare para exposición, protección y analítica del entorno web.',
      'AWS y Apache como parte de la infraestructura y publicación de la aplicación.',
    ],
    result:
      'El entorno de staging está operativo con navegación corporativa, catálogo de 136 productos y un sitemap de 142 URLs. La configuración noindex permite validar contenido y despliegue antes de habilitar su indexación pública.',
  },
]

export const experience = [
  {
    period: '2025—NOW',
    organization: 'AGROCOMER / AGRODRONE',
    role: 'IT SPECIALIST',
    location: 'Curicó, Chile',
    contributions: [
      'Desarrollo de la nueva web corporativa con Next.js.',
      'Administración de Linux, dominios, Google Workspace, redes y respaldos.',
      'Migración y despliegue de aplicaciones en AWS con DNS y SSL/TLS.',
      'Diagnóstico de rendimiento, disponibilidad y almacenamiento.',
    ],
  },
  {
    period: '2024—2025',
    organization: 'IGT / SENCILLITO',
    role: 'DEVOPS ENGINEER INTERN',
    location: 'Santiago, Chile',
    contributions: [
      'Análisis y conciliación de información transaccional.',
      'Procesamiento y validación de archivos operacionales de gran volumen.',
      'Apoyo en incidencias y continuidad operacional B2B.',
    ],
  },
  {
    period: '2024',
    organization: 'MUNICIPALIDAD DE SAGRADA FAMILIA',
    role: 'COMPUTER ENGINEERING INTERN',
    location: 'Sagrada Familia, Chile',
    contributions: [
      'Soporte tecnológico y atención de requerimientos de usuarios.',
      'Configuración de equipos y documentación de soluciones.',
    ],
  },
]

export const stackGroups = [
  {
    title: 'CLOUD & INFRASTRUCTURE',
    items: [
      ['AWS', 'Hosting, Linux, DNS, SSL/TLS y operación de aplicaciones'],
      ['GCP', 'Servicios cloud y experimentación'],
      ['Linux', 'Administración de servidores y troubleshooting'],
    ],
  },
  {
    title: 'CONTAINERS & ORCHESTRATION',
    items: [
      ['Docker', 'Stacks, redes, volúmenes, healthchecks y publicación de imágenes'],
      ['Kubernetes / k3s', 'Laboratorio distribuido, despliegue y alta disponibilidad'],
      ['Calico', 'Networking para clústeres y políticas de conectividad'],
    ],
  },
  {
    title: 'NETWORKING & OBSERVABILITY',
    items: [
      ['SDN / OpenFlow', 'Control de red con Ryu y Open vSwitch'],
      ['OSPF / BGP', 'Routing dinámico con FRRouting'],
      ['Prometheus / Grafana', 'Métricas, dashboards y diagnóstico'],
    ],
  },
  {
    title: 'AUTOMATION & DEVELOPMENT',
    items: [
      ['GitHub Actions', 'CI/CD, pruebas y publicación de imágenes'],
      ['Python', 'FastAPI, Flask y automatización'],
      ['JavaScript / TypeScript', 'React, Next.js, Vue.js y APIs web'],
    ],
  },
]

export const contactLinks = [
  { label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  {
    label: 'LINKEDIN',
    value: 'arturo-alvarez',
    href: 'https://www.linkedin.com/in/arturo-alvarez-48804519b/',
  },
  { label: 'GITHUB', value: 'ArturoAlvarezz', href: 'https://github.com/ArturoAlvarezz' },
  { label: 'CV', value: 'PDF / 2026', href: '/cv.pdf' },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}

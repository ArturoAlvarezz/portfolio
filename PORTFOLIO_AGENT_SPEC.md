# Especificación de diseño e implementación — Portfolio de Arturo Álvarez

> **Documento de trabajo para un agente de programación.**
> El objetivo no es producir un mockup aislado, sino **implementar un sitio web funcional, responsive, accesible, rápido y desplegable** que respete esta dirección de arte.

---

## 0. Instrucción principal para el agente

Construye el portfolio personal de **Arturo Álvarez**, Ingeniero Civil en Computación orientado a **Cloud Engineering, DevOps, observabilidad, redes, SDN, IoT y edge computing**.

La identidad visual debe combinar:

- brutalismo editorial;
- software y web de finales de los años 80 y 90;
- terminales Linux y paneles de telemetría;
- monitores CRT, scanlines, píxeles, dithering y estática;
- morado y azul como colores dominantes;
- una lectura conceptual de *Serial Experiments Lain*: la red digital interfiere sutilmente con el mundo físico;
- tipografía editorial de alto contraste inspirada conceptualmente en los afiches de *Evangelion*;
- una imagen hero del **David de Miguel Ángel reinterpretado como una escultura ciberpunk pixelada**, como metáfora de la intersección entre artes liberales y tecnología.

El resultado **no debe parecer una plantilla gamer, una landing SaaS, un dashboard corporativo ni una página de fan de anime**. Debe percibirse como un portfolio técnico serio, experimental y reconocible.

### Jerarquía de requisitos

- **DEBE**: obligatorio; no se puede omitir sin justificarlo.
- **DEBERÍA**: preferente; puede ajustarse por restricciones técnicas o de contenido.
- **PUEDE**: opcional; implementar solo si aporta valor sin degradar rendimiento o accesibilidad.

### Regla de implementación

1. Inspecciona primero el repositorio existente.
2. Conserva el stack y la arquitectura actual cuando sean razonables.
3. No hagas una reescritura completa solo por preferencia personal.
4. Si el repositorio está vacío, usa una arquitectura estática o híbrida ligera con TypeScript. **Astro** es la opción preferente para un portfolio predominantemente estático; en un proyecto React existente, conserva React/Next.
5. Divide el trabajo en componentes, datos y estilos reutilizables.
6. El contenido central debe seguir siendo accesible aunque JavaScript falle; las animaciones y la terminal son mejoras progresivas.

---

## 1. Referencias visuales

Las imágenes se encuentran en `./references/` y deben utilizarse únicamente como **moodboard**, no como material para copiar de forma literal.

| Archivo | Elementos a extraer | Elementos que no se deben copiar |
|---|---|---|
| `01-crt-eye-interface.jpeg` | píxel visible, interfaz monocroma, menús cuadrados, baja resolución, cursor técnico | composición exacta y contenido textual |
| `02-editorial-evangelion-purple.jpeg` | contraste negro/morado, serif enorme, jerarquía editorial extrema, composición vertical | personajes, logotipos, títulos y diseño exacto |
| `03-reality-is-fake-crt-collage.jpeg` | collage CRT, ojo como señal, distorsión, capas y telemetría | textos y marcas del póster |
| `04-wired-system-interface.jpeg` | densidad informativa, ventanas, figura humana rodeada de datos, interferencia entre capas | iconografía o composición exacta |
| `05-lain-brutalist-poster.jpeg` | brutalismo impreso, lavanda, grilla, bordes rectos, mezcla de imagen y tipografía | personajes, logotipos y frases protegidas |

### Fórmula visual

- **50%** brutalismo editorial y tipografía de póster.
- **25%** terminal, CRT y software antiguo.
- **15%** arte clásico digitalizado y ciberpunk.
- **10%** glitch, ruido e interferencia.

La base de la interfaz debe ser estable y legible. La interferencia aparece en momentos controlados; no se aplica a todos los elementos al mismo tiempo.

---

## 2. Objetivos del producto

El sitio DEBE:

1. Comunicar en menos de 10 segundos quién es Arturo, qué construye y en qué áreas trabaja.
2. Permitir que una persona reclutadora encuentre rápidamente experiencia, proyectos, stack, CV y contacto.
3. Permitir que un perfil técnico profundice en arquitectura, decisiones, trade-offs, métricas y resultados.
4. Mostrar personalidad visual sin sacrificar velocidad, claridad, accesibilidad o credibilidad profesional.
5. Dar protagonismo a proyectos reales, especialmente al trabajo de SDN/AMI, infraestructura cloud, AWS, Kubernetes, redes y operación TI.

### Audiencias

- Reclutadores de roles Cloud, DevOps, SRE, Observability o Platform Engineering.
- Líderes técnicos e ingenieros que evaluarán profundidad y criterio.
- Empresas o clientes que requieran infraestructura, automatización o soporte TI.
- Comunidad técnica interesada en documentación, laboratorios y aprendizaje.

---

## 3. Concepto rector

### Nombre interno

**THE WIRED RENAISSANCE**

### Idea

Una interfaz donde el humanismo clásico entra en contacto con infraestructura digital. El sitio debe sentirse como un artefacto situado entre:

- un museo;
- una terminal Linux;
- un monitor CRT;
- un póster editorial;
- una transmisión proveniente de una red invisible.

### Principios de diseño

1. **Humanismo dentro de la máquina.** La tecnología amplifica lo humano; no lo elimina.
2. **La Wired interfiere, pero no destruye la jerarquía.** El ruido atraviesa la página, pero el contenido permanece legible.
3. **Nostalgia controlada.** Se evocan interfaces antiguas usando prácticas modernas de UX.
4. **El movimiento comunica estado.** Cada animación debe responder a carga, conexión, selección, navegación o revelado.
5. **La evidencia domina.** Los proyectos se explican mediante problema, arquitectura, decisiones y resultados, no mediante listas decorativas de tecnologías.

### Personalidad

Debe sentirse: técnico, culto, preciso, nocturno, editorial, humano, experimental y ligeramente inquietante.

No debe sentirse: caricatura “hacker”, videojuego, cyberpunk saturado, plantilla genérica, demo de efectos o fan site.

---

## 4. Requisitos no negociables

- DEBE existir una paleta dominada por negro, morado y azul.
- DEBEN usarse bordes finos y cuadrados. `border-radius` global preferente: `0`.
- NO usar tarjetas tipo cápsula, botones pill ni esquinas redondeadas de estética SaaS.
- NO usar glassmorphism genérico.
- NO depender de sombras difusas para separar jerarquías; usar bordes, contraste, líneas y espaciado.
- DEBE existir una capa CRT sutil: grano, scanlines o ruido de señal.
- DEBE existir al menos una interacción con estética de terminal.
- La terminal NO puede ser la única navegación disponible.
- DEBE existir una imagen principal del David de Miguel Ángel reinterpretado en píxel/dithering/cyberpunk.
- Las influencias de anime son conceptuales. NO copiar personajes, logotipos, textos ni composiciones protegidas.
- Toda animación DEBE respetar `prefers-reduced-motion`.
- NO crear destellos rápidos, flashes a pantalla completa ni parpadeos que afecten accesibilidad.
- El sitio DEBE funcionar correctamente en móvil, tablet y escritorio.
- El contenido esencial DEBE ser indexable y accesible sin ejecutar animaciones.

---

## 5. Sistema visual

### 5.1 Paleta

Definir los siguientes tokens globales:

```css
:root {
  --color-ink: #05060a;
  --color-deep-space: #0b0f1a;
  --color-panel: #111522;
  --color-line: #2a3042;

  --color-violet: #8b5cf6;
  --color-ultraviolet: #5b2eff;
  --color-signal-blue: #2f6bff;
  --color-electric-blue: #63a4ff;

  --color-lavender: #d8ccff;
  --color-cold-white: #f4f6fa;
  --color-muted: #9299ad;

  --color-terminal: #73ffb0;
  --color-alert: #ff5c8a;

  --surface-main: var(--color-ink);
  --surface-raised: var(--color-deep-space);
  --surface-panel: var(--color-panel);
}
```

#### Distribución de color

- 65–75% fondos oscuros.
- 15–20% blanco frío, gris y lavanda.
- 8–12% violeta y azul brillante.
- Menos de 3% verde terminal o rosado de alerta.

#### Gradientes

Pueden usarse solo para:

- halos alrededor del David;
- luz emitida por paneles o cursores;
- transiciones puntuales violeta → azul;
- máscaras de profundidad.

No aplicar gradientes a cada texto, botón o tarjeta.

Ejemplo permitido:

```css
background: radial-gradient(
  circle at 55% 42%,
  rgb(91 46 255 / 0.24),
  rgb(47 107 255 / 0.08) 35%,
  transparent 68%
);
```

### 5.2 Bordes y superficies

```css
:root {
  --border-thin: 1px solid var(--color-line);
  --border-active: 1px solid var(--color-violet);
  --radius-none: 0px;
}
```

- Usar bordes de 1 px.
- Los estados activos pueden alternar entre violeta y azul.
- Los paneles se separan por contraste de fondo y líneas.
- Las cajas pueden superponerse parcialmente para crear tensión editorial.
- Evitar sombras suaves. Un halo duro o sombra desplazada de 1–3 px puede usarse de forma puntual.

### 5.3 Texturas

Implementar al menos dos capas no interactivas:

1. **Scanlines CRT**, muy sutiles.
2. **Grano/ruido estático**, con opacidad baja.

Ambas capas deben tener `pointer-events: none`, no bloquear selección de texto y no reducir el contraste del contenido.

Ejemplo orientativo:

```css
.crt-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0.18;
  mix-blend-mode: soft-light;
  background:
    repeating-linear-gradient(
      to bottom,
      rgb(255 255 255 / 0.025) 0,
      rgb(255 255 255 / 0.025) 1px,
      transparent 1px,
      transparent 4px
    );
}

.noise-overlay::before {
  content: "";
  position: fixed;
  inset: -20%;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("/textures/noise.webp");
  background-repeat: repeat;
  animation: noise-shift 700ms steps(2, end) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .noise-overlay::before {
    animation: none;
  }
}
```

El activo de ruido debe ser pequeño y optimizado. No usar un video o GIF pesado como overlay.

### 5.4 Tipografía

La composición tipográfica debe combinar:

- una **serif editorial de alto contraste** para títulos grandes;
- una **monoespaciada técnica** para navegación, etiquetas, telemetría y código;
- una **sans legible** opcional para textos largos.

#### Fuentes sugeridas

- Display: `Bodoni Moda`, `Libre Bodoni`, `Cormorant Garamond` o una alternativa similar disponible en el proyecto.
- Mono: `IBM Plex Mono`, `JetBrains Mono`, `Space Mono` o sistema monospace.
- Body: `Inter`, `IBM Plex Sans` o system sans.

No usar una fuente propietaria extraída de Evangelion. La referencia debe obtenerse por escala, contraste y composición, no por copia exacta.

```css
:root {
  --font-display: "Bodoni Moda", "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
  --font-body: Inter, system-ui, sans-serif;
}
```

#### Escala tipográfica

```css
:root {
  --text-xs: clamp(0.68rem, 0.64rem + 0.12vw, 0.76rem);
  --text-sm: clamp(0.78rem, 0.73rem + 0.18vw, 0.9rem);
  --text-base: clamp(1rem, 0.96rem + 0.18vw, 1.12rem);
  --text-lg: clamp(1.2rem, 1.05rem + 0.7vw, 1.65rem);
  --text-xl: clamp(1.7rem, 1.25rem + 2vw, 3rem);
  --text-hero: clamp(3.6rem, 1.4rem + 9vw, 10.5rem);
}
```

Reglas:

- Títulos display en mayúsculas o versales, con interlineado compacto.
- Metadatos, tags y navegación en mono y mayúsculas.
- Cuerpo de texto con 55–75 caracteres por línea.
- No aplicar glitch al cuerpo de texto ni a controles esenciales.
- Un título puede tocar o cruzar la grilla, pero no perder palabras críticas.

### 5.5 Espaciado y grilla

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-36: 144px;
  --content-max: 1440px;
}
```

Desktop:

- 12 columnas.
- Margen horizontal flexible entre 24 y 64 px.
- Gutter entre 16 y 24 px.
- Separación vertical de secciones: 96–160 px.

Tablet:

- 8 columnas.
- Margen de 24–32 px.

Mobile:

- 4 columnas.
- Margen de 16–20 px.
- Separación vertical de secciones: 72–104 px.

La estética puede ser densa, pero la página necesita espacios de descanso.

---

## 6. Arquitectura de información

### Navegación principal

1. `INDEX`
2. `PROFILE`
3. `SELECTED_WORK`
4. `EXPERIENCE`
5. `LAB_NOTES`
6. `STACK`
7. `CONTACT`

El texto visible puede ser español o bilingüe, pero debe mantenerse consistente. Una opción adecuada es usar títulos editoriales en inglés y contenido descriptivo en español.

### Estructura de páginas

#### Versión mínima viable

- `/` — Home con todas las secciones principales.
- `/projects/[slug]` — Casos de estudio detallados.
- `/notes` — Notas técnicas opcionales.
- `/cv.pdf` — CV descargable.

#### Versión expandida

- `/about`
- `/projects`
- `/projects/[slug]`
- `/lab`
- `/notes/[slug]`
- `/contact`

No crear páginas vacías solo para aumentar la cantidad de rutas.

---

## 7. Especificación por sección

### 7.1 Header

DEBE:

- ser fijo o semiestático;
- tener entre 44 y 56 px de alto en desktop;
- mostrar nombre/marca a la izquierda;
- mostrar enlaces numerados a la derecha;
- indicar la sección activa;
- incluir foco visible y navegación por teclado;
- incluir un enlace `Skip to content`.

Ejemplo visual:

```text
ARTURO.ALVAREZ                                    [01] PROFILE
CLOUD_SYSTEMS / HUMAN_SIGNAL                      [02] WORK
STATUS: AVAILABLE                                 [03] CONTACT
```

En móvil, usar un menú de pantalla completa con apariencia de índice de sistema. No usar un drawer genérico con cápsulas redondeadas.

### 7.2 Hero

Concepto: **“arte clásico bajo telemetría”**.

#### Composición desktop

- Hero de 90–100 svh.
- Columna izquierda: nombre, rol, manifiesto y CTA.
- Zona central/derecha: imagen del David ocupando 45–60% del área.
- Datos técnicos y coordenadas alrededor de la escultura.
- Una ventana o línea de terminal cerca del tercio inferior.
- Numeración editorial de gran escala en segundo plano.

#### Contenido sugerido

```text
ARTURO ÁLVAREZ
CLOUD ENGINEER /
SYSTEMS BUILDER

Construyo infraestructura observable, automatizada y resiliente,
donde las redes, el cloud y la experiencia humana se encuentran.
```

CTAs:

- `EXPLORE SELECTED WORK`
- `DOWNLOAD CV`
- `OPEN TERMINAL`

Metadatos decorativos, pero reales:

```text
LOCATION: CHILE / UTC-4
FOCUS: CLOUD · DEVOPS · OBSERVABILITY · SDN
SYSTEM STATUS: AVAILABLE
SIGNAL: STABLE
```

#### Composición móvil

- Título primero.
- David como bloque central, sin quedar cortado de forma incomprensible.
- Manifiesto y CTA debajo.
- Telemetría reducida.
- No convertir el hero en una pila excesivamente larga.

### 7.3 Perfil / About

Debe presentar:

- breve biografía profesional;
- orientación a Cloud/DevOps/Observability;
- formación en Ingeniería Civil en Computación;
- interés por la intersección entre infraestructura, redes, automatización, IoT y diseño;
- enlace al CV;
- disponibilidad o estado profesional, solo si está actualizado.

Diseño sugerido:

- párrafo principal grande a la izquierda;
- “system profile” o ficha técnica a la derecha;
- fotografía opcional, tratada en bitono/dithering, nunca con estética corporativa genérica.

### 7.4 Selected Work

Debe ser la sección más importante después del hero.

Proyectos iniciales sugeridos:

1. **Arquitectura SDN para AMI**
   Kubernetes/k3s, Calico, FRR/OSPF, Ryu/OS-Ken, Open vSwitch, seguridad, observabilidad y pruebas de resiliencia.

2. **Migración y operación web en AWS**
   Linux, Apache, PHP, MariaDB, WordPress, DNS, SSL, diagnóstico de rendimiento y continuidad operacional.

3. **Operación TI y automatización en Agrocomer**
   Google Workspace, respaldos, soporte, estandarización, análisis de datos y automatización de procesos. No exponer información confidencial.

4. **Laboratorio IoT / Edge / Home Lab**
   Raspberry Pi, redes, servicios autoalojados, electrónica, monitoreo y experimentación.

#### Tarjeta de proyecto

Cada tarjeta DEBE incluir:

- número del proyecto;
- categoría;
- año;
- estado;
- título orientado al resultado;
- resumen de 2–3 líneas;
- rol;
- stack principal;
- una métrica o resultado;
- imagen, diagrama o captura propia;
- enlace al caso completo;
- repositorio o demo cuando corresponda.

No usar una nube de tags sin jerarquía.

#### Layout

Alternar composiciones:

- imagen grande a la izquierda / texto a la derecha;
- texto superpuesto parcialmente sobre borde de imagen;
- proyecto principal a ancho completo;
- proyectos secundarios en grilla 2×N.

En hover:

- el borde cambia de violeta a azul;
- la imagen aumenta entre 1.02 y 1.05;
- aparece una línea o cursor de selección;
- el título se desplaza 2–6 px;
- no animar toda la tarjeta con un salto exagerado.

### 7.5 Página de caso de estudio

Cada proyecto debe usar esta estructura:

1. Resumen ejecutivo.
2. Contexto y problema.
3. Rol y responsabilidades.
4. Restricciones.
5. Arquitectura.
6. Decisiones técnicas y trade-offs.
7. Implementación.
8. Seguridad y observabilidad.
9. Pruebas y métricas.
10. Resultado.
11. Lecciones y siguientes pasos.
12. Repositorio, demo o material relacionado.

Usar diagramas reales y métricas cuando sea posible. No publicar claves, IP privadas sensibles, datos de clientes o información confidencial.

### 7.6 Experiencia

Diseño tipo timeline de sistema:

```text
2025—NOW  AGROCOMER / IT OPERATIONS
2024—2025 DATAOPS / CLOUD PRACTICE
2021—2026 INGENIERÍA CIVIL EN COMPUTACIÓN
```

Cada entrada debe mostrar:

- organización;
- rol;
- periodo;
- alcance;
- tecnologías;
- 2–4 contribuciones medibles.

El timeline debe ser legible en móvil sin depender de una línea horizontal gigante.

### 7.7 Lab Notes / Experimentos

Puede mostrar:

- notas sobre Kubernetes, SDN, Linux, redes o electrónica;
- diagramas de laboratorio;
- aprendizajes breves;
- estados como `TESTED`, `FAILED`, `ITERATING`, `ARCHIVED`.

La sección puede tener una estética más densa, como un directorio o índice de archivos.

### 7.8 Stack

No presentar solo logotipos. Agrupar por capacidad:

- `CLOUD & INFRASTRUCTURE`
- `CONTAINERS & ORCHESTRATION`
- `OBSERVABILITY`
- `NETWORKING & SDN`
- `AUTOMATION & DEVELOPMENT`
- `DATA & OPERATIONS`

Cada grupo puede incluir tecnologías y nivel de uso contextualizado, por ejemplo:

```text
KUBERNETES — laboratorio distribuido, despliegue y troubleshooting
AWS — hosting, Linux, DNS, SSL y operación de aplicaciones
PROMETHEUS/GRAFANA — métricas, dashboards y diagnóstico
```

Evitar barras de porcentaje de habilidad.

### 7.9 Contacto

Debe ser directo y funcional:

- correo;
- LinkedIn;
- GitHub;
- CV;
- ubicación general: Chile;
- formulario solo si existe backend o servicio confiable.

Diseño sugerido:

```text
ESTABLISH CONNECTION?
> mail --to arturo
> open linkedin
> open github
```

Los enlaces convencionales deben estar visibles además de los comandos.

### 7.10 Footer

Incluir:

- nombre;
- año;
- stack de construcción del sitio;
- estado de build o versión opcional;
- enlaces legales mínimos si se recopilan datos;
- botón para volver arriba.

---

## 8. Terminal interactiva

La terminal es una capa de navegación y personalidad, no una aplicación compleja.

### Activación

- Botón `OPEN TERMINAL`.
- Atajo opcional: `Ctrl/Cmd + K` o tecla `>` cuando no se está escribiendo en un input.
- Debe abrirse como panel cuadrado, preferentemente inferior o modal centrado.
- Debe poder cerrarse con `Esc`.
- Debe atrapar el foco correctamente mientras esté abierta.

### Comandos mínimos

```text
help
about
projects
experience
stack
contact
cv
clear
```

Comandos opcionales:

```text
status
whoami
signal
theme
```

### Reglas

- Navegar con comandos debe ser equivalente a usar enlaces.
- Respuestas breves; no simular una shell completa.
- No ejecutar comandos arbitrarios.
- No reproducir sonidos por defecto.
- No usar verde brillante como color dominante; reservarlo para cursor y estados OK.
- Mostrar feedback accesible mediante `aria-live` sin leer ruido decorativo.

---

## 9. Imagen principal: David ciberpunk

### Objetivo conceptual

El David simboliza la intersección entre artes liberales y tecnología. Debe percibirse como una **escultura de mármol**, no como una persona real, un androide genérico o un personaje de anime.

### Prompt de generación sugerido

```text
A frontal three-quarter portrait of Michelangelo's David as a classical marble sculpture reconstructed by a late-1990s computer system, black background, ultraviolet purple and electric blue light, visible square pixels, ordered dithering, halftone dots, CRT scanlines, low-resolution monochrome interface fragments, subtle terminal telemetry and coordinate labels around the sculpture, museum photography fused with cyberpunk signal interference, high contrast, editorial brutalist poster composition, sharp rectangular crop, restrained color palette, no rounded UI, no anime character, no text, no logos, no watermark, detailed marble texture, dramatic but professional, isolated subject.
```

### Variantes necesarias

Generar o preparar:

- `david-wired-portrait.webp` — hero desktop, formato aproximado 4:5.
- `david-wired-mobile.webp` — recorte móvil, formato 3:4.
- `david-wired-mask.webp` — opcional, alto contraste o transparencia.
- fallback estático comprimido.

### Tratamiento en frontend

- Superponer dithering o máscara con CSS/SVG.
- Aplicar desplazamiento suave entre capas durante scroll.
- Permitir que una capa de píxeles se “ensamble” al cargar.
- No aplicar filtros que hagan irreconocible la escultura.
- Incluir texto alternativo descriptivo; los overlays decorativos deben usar `aria-hidden="true"`.

---

## 10. Sistema de movimiento

### Principio

La página debe sentirse viva, no inquieta. El movimiento representa señal, conexión, selección, transmisión o revelado.

### Animaciones obligatorias

1. **Entrada del hero**
   - título aparece por bloques o líneas;
   - David emerge mediante máscara o ensamblaje de píxeles;
   - telemetría aparece después del contenido principal;
   - duración total máxima recomendada: 1.2–1.8 s.

2. **Revelado al hacer scroll**
   - opacidad `0 → 1`;
   - desplazamiento `16–40px → 0`;
   - stagger corto entre etiquetas y títulos;
   - no ocultar contenido durante demasiado tiempo.

3. **Parallax controlado**
   - elementos decorativos: 8–40 px de desplazamiento relativo;
   - imagen principal puede desplazarse a velocidad distinta del texto;
   - nunca provocar mareo ni impedir lectura.

4. **Imagen que crece con el scroll**
   - usar `transform: scale()` entre aproximadamente `0.92` y `1.04`;
   - recortar dentro de un contenedor con `overflow: hidden`;
   - no animar `width` o `height` continuamente.

5. **Interferencia puntual**
   - glitch de 80–180 ms al cambiar de sección o seleccionar proyecto;
   - máximo unas pocas veces por sesión;
   - no aplicarlo continuamente.

6. **Estados hover/focus**
   - borde, subrayado técnico, cursor y microdesplazamientos;
   - focus visible igual o más claro que hover.

### Implementación

Prioridades:

1. CSS transitions y keyframes.
2. `IntersectionObserver` para reveals.
3. API de scroll o una librería de movimiento ya presente en el repositorio.
4. Usar GSAP/ScrollTrigger solo si la complejidad lo justifica y el peso se controla.

Animar preferentemente:

- `transform`;
- `opacity`;
- `clip-path` con moderación;
- variables CSS.

No animar en cada frame:

- `top`;
- `left`;
- `width`;
- `height`;
- filtros costosos sobre elementos de pantalla completa.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .parallax,
  .glitch-layer,
  .animated-noise {
    transform: none !important;
    animation: none !important;
  }
}
```

No depender únicamente de esta regla global; cada componente complejo debe tener un estado estático diseñado.

---

## 11. Componentes requeridos

Crear como mínimo:

- `SiteHeader`
- `MobileSystemMenu`
- `SectionLabel`
- `Hero`
- `DavidVisual`
- `TelemetryLabel`
- `TerminalPanel`
- `ProjectCard`
- `ProjectGrid`
- `CaseStudyHero`
- `ArchitectureDiagram`
- `MetricsPanel`
- `ExperienceTimeline`
- `LabNoteCard`
- `StackGroup`
- `ContactPanel`
- `SiteFooter`
- `CrtOverlay`
- `NoiseOverlay`
- `ScrollProgress` opcional

Cada componente debe tener estados de:

- default;
- hover;
- focus-visible;
- active/selected cuando corresponda;
- loading cuando corresponda;
- reduced motion;
- mobile.

---

## 12. Modelo de contenido

Mantener proyectos y experiencia fuera del JSX/HTML principal cuando el stack lo permita.

Ejemplo TypeScript:

```ts
export interface Project {
  slug: string;
  index: string;
  title: string;
  shortTitle?: string;
  category: string;
  year: string;
  status: "completed" | "active" | "research" | "archived";
  summary: string;
  role: string;
  stack: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  cover: {
    src: string;
    alt: string;
  };
  links?: {
    caseStudy?: string;
    repository?: string;
    demo?: string;
  };
}
```

Contenido sugerido para proyectos:

```ts
const projects: Project[] = [
  {
    slug: "sdn-ami-architecture",
    index: "01",
    title: "Arquitectura de comunicaciones SDN resiliente para AMI",
    category: "SDN / CLOUD-NATIVE / NETWORKING",
    year: "2026",
    status: "completed",
    summary:
      "Prototipo distribuido para redes de medición avanzada con control SDN, Kubernetes, seguridad y observabilidad.",
    role: "Architecture, implementation and validation",
    stack: ["k3s", "Calico", "FRR", "OSPF", "Ryu", "Open vSwitch"],
    metrics: [
      { label: "Availability", value: ">99%" },
      { label: "Threat detection", value: "100% in lab tests" },
      { label: "API readiness avg.", value: "3.4 ms" }
    ],
    cover: {
      src: "/projects/sdn-ami-cover.webp",
      alt: "Diagrama de arquitectura SDN distribuida para una red AMI"
    }
  }
];
```

Verificar cada dato antes de publicarlo. No convertir información interna en afirmaciones públicas sin revisión.

---

## 13. Responsive design

### Desktop, ≥ 1200 px

- Composición asimétrica amplia.
- Navegación horizontal.
- Telemetría visible.
- Hero dividido entre contenido y escultura.
- Proyectos con imágenes grandes y solapamientos controlados.

### Tablet, 768–1199 px

- Reducir cantidad de telemetría.
- Mantener grilla editorial.
- Evitar textos verticales difíciles de leer.
- Terminal ocupa mayor ancho.

### Mobile, < 768 px

- Priorizar contenido y tap targets.
- No replicar literalmente la composición desktop.
- Desactivar elementos decorativos pesados.
- Limitar parallax.
- Menú estilo índice de sistema a pantalla completa.
- Botones con área mínima aproximada de 44 × 44 px, aunque visualmente sean rectangulares y delgados.
- Evitar overflow horizontal accidental; solo permitirlo en carruseles diseñados explícitamente.

### Pantallas pequeñas, < 380 px

- Reducir títulos con `clamp()`.
- Mantener palabras completas esenciales.
- Evitar terminal demasiado alta.
- Comprobar que no se corten enlaces ni métricas.

---

## 14. Accesibilidad

Cumplir como mínimo:

- HTML semántico.
- Un solo `h1` por página.
- Jerarquía correcta de encabezados.
- Navegación completa por teclado.
- `focus-visible` claro en violeta, azul o blanco.
- Contraste suficiente para texto y controles.
- Texto alternativo útil para imágenes informativas.
- `aria-hidden="true"` en ruido, scanlines y decoración.
- `aria-live` solo para respuestas necesarias de la terminal.
- Formulario con labels reales y mensajes de error accesibles.
- Sin información transmitida exclusivamente por color.
- Sin autoplay de audio.
- Respeto por `prefers-reduced-motion`.
- Probar zoom al 200%.
- Incluir `Skip to content`.

La estética de baja fidelidad no justifica texto borroso o contraste deficiente.

---

## 15. Rendimiento

Objetivos recomendados en producción móvil:

- Lighthouse Performance: ≥ 90 cuando el entorno lo permita.
- Accessibility: ≥ 95.
- Best Practices: ≥ 95.
- SEO: ≥ 95.
- LCP objetivo: < 2.5 s.
- CLS objetivo: < 0.1.
- INP objetivo: < 200 ms.

### Reglas

- Optimizar imágenes como AVIF/WebP con dimensiones explícitas.
- Precargar solo el activo crítico del hero.
- Lazy-load de proyectos bajo el fold.
- Subconjuntos mínimos de fuentes y `font-display: swap`.
- No cargar librerías de animación grandes para microinteracciones simples.
- Evitar canvas o WebGL como dependencia obligatoria de v1.
- El ruido CRT debe ser barato de renderizar.
- No mantener múltiples listeners de scroll sin throttling o `requestAnimationFrame`.
- Evitar video de fondo.
- Reservar espacio para imágenes para eliminar layout shift.

---

## 16. SEO y metadatos

Incluir:

- título y descripción específicos;
- Open Graph image propia;
- canonical URL;
- metadata para proyectos;
- `sitemap.xml`;
- `robots.txt`;
- JSON-LD `Person` y, cuando corresponda, `CreativeWork` o `Article`;
- favicon y app icons coherentes con la identidad;
- idioma correcto del documento.

Ejemplo de descripción:

```text
Portfolio de Arturo Álvarez, Ingeniero Civil en Computación y Cloud Engineer especializado en infraestructura, DevOps, observabilidad, redes SDN e IoT.
```

---

## 17. Estructura de archivos sugerida

Adaptar al framework existente:

```text
src/
├── components/
│   ├── layout/
│   ├── hero/
│   ├── projects/
│   ├── terminal/
│   ├── motion/
│   └── ui/
├── content/
│   ├── projects/
│   └── notes/
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── stack.ts
├── layouts/
├── pages/
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── typography.css
│   ├── motion.css
│   └── crt.css
└── utils/

public/
├── images/
│   ├── hero/
│   └── projects/
├── textures/
├── icons/
├── fonts/
└── cv.pdf
```

---

## 18. Secuencia de implementación

### Fase 1 — Auditoría

- Revisar stack, rutas, componentes y dependencias.
- Identificar contenido real disponible.
- Detectar problemas de accesibilidad o rendimiento existentes.
- Definir qué partes se conservan, refactorizan o reemplazan.

### Fase 2 — Foundation

- Crear tokens CSS.
- Configurar tipografías.
- Implementar layout, grilla, fondo y overlays CRT.
- Crear header, navegación y footer.

### Fase 3 — Contenido principal

- Implementar hero.
- Implementar About.
- Implementar Selected Work y tarjetas.
- Implementar Experience, Stack y Contact.
- Cargar contenido desde datos estructurados.

### Fase 4 — Casos de estudio

- Crear plantilla reutilizable.
- Incorporar diagramas, métricas y navegación entre proyectos.
- Verificar privacidad de la información publicada.

### Fase 5 — Movimiento

- Agregar reveals.
- Agregar parallax controlado.
- Agregar escalado de imágenes con scroll.
- Agregar terminal.
- Implementar reduced motion.

### Fase 6 — QA

- Probar responsive.
- Probar teclado y lector de pantalla básico.
- Probar Safari, Firefox y Chromium.
- Ejecutar Lighthouse.
- Revisar enlaces, CV y contacto.
- Corregir overflow, CLS y animaciones costosas.

---

## 19. Definition of Done

El trabajo se considera terminado únicamente cuando:

- [ ] El sitio es desplegable y no contiene errores de build.
- [ ] La home comunica rol, especialidades y propuesta de valor en el primer viewport.
- [ ] El David ciberpunk es el activo visual principal y cuenta con fallback responsive.
- [ ] La paleta morado/azul domina sin saturar toda la interfaz.
- [ ] Todos los bordes principales son rectos y finos.
- [ ] No existen botones pill, glassmorphism genérico ni tarjetas SaaS redondeadas.
- [ ] Existe una capa CRT sutil que no afecta legibilidad.
- [ ] Existe una terminal navegable y accesible.
- [ ] La navegación convencional funciona sin usar la terminal.
- [ ] Los proyectos muestran problema, rol, stack, métricas y resultado.
- [ ] Existe al menos una página o plantilla de caso de estudio.
- [ ] Las animaciones de scroll usan transform/opacity y no producen jank evidente.
- [ ] `prefers-reduced-motion` produce una versión estable y completa.
- [ ] El sitio funciona a 320 px de ancho sin overflow accidental.
- [ ] El sitio funciona con teclado y muestra foco visible.
- [ ] Las imágenes están optimizadas y tienen dimensiones reservadas.
- [ ] Las fuentes no bloquean indefinidamente el render.
- [ ] El CV y los enlaces de contacto funcionan.
- [ ] El contenido confidencial fue excluido.
- [ ] Existe un README con instalación, desarrollo, build y despliegue.
- [ ] El agente entrega un resumen de archivos modificados, decisiones y pruebas realizadas.

---

## 20. Prohibiciones explícitas

No implementar:

- fondo con lluvia de código verde;
- cursor personalizado que dificulte interacción;
- scroll hijacking;
- audio automático;
- animaciones constantes en cada elemento;
- texto ilegible por glitch;
- secciones completas dentro de carruseles obligatorios;
- navegación oculta exclusivamente detrás de una terminal;
- íconos sociales sin nombre accesible;
- imágenes de anime con copyright como elemento del sitio;
- logotipos de Evangelion o Lain;
- contenido ficticio presentado como experiencia real;
- porcentajes arbitrarios de dominio de tecnologías;
- métricas no verificadas;
- dependencias pesadas sin justificación;
- diseño mobile como simple reducción del desktop.

---

## 21. Entregables requeridos al agente

1. Código completo del sitio.
2. Componentes y design tokens reutilizables.
3. Contenido estructurado y fácil de editar.
4. Activos visuales optimizados o placeholders claramente nombrados.
5. README de desarrollo y despliegue.
6. Lista de variables o contenidos que Arturo debe completar.
7. Resumen de accesibilidad y rendimiento.
8. Capturas de desktop y móvil, cuando el entorno permita generarlas.
9. Registro breve de decisiones técnicas y trade-offs.

---

## 22. Prompt operativo para iniciar al agente

Copiar el siguiente bloque junto con este documento:

```text
Implementa el portfolio descrito en PORTFOLIO_AGENT_SPEC.md.

Primero inspecciona el repositorio y reporta brevemente:
1. stack actual;
2. estructura relevante;
3. componentes reutilizables;
4. riesgos técnicos;
5. plan de implementación por etapas.

Después ejecuta el plan sin reemplazar innecesariamente el stack existente. Trata todos los requisitos DEBE como obligatorios. Prioriza contenido, accesibilidad, responsive design y rendimiento antes de agregar efectos visuales.

La dirección visual debe ser brutalista/editorial, con negro, morado y azul, bordes cuadrados, CRT sutil, terminal funcional y una imagen hero del David de Miguel Ángel reinterpretado mediante píxel, dithering y luz ciberpunk. Las referencias a Evangelion y Serial Experiments Lain son conceptuales; no copies material protegido.

Al finalizar:
- ejecuta build, lint y pruebas disponibles;
- prueba la página en desktop y móvil;
- valida reduced motion y navegación por teclado;
- informa archivos modificados, decisiones, pendientes y resultados de las pruebas.
```

---

**Estado del documento:** listo para implementación.
**Nombre interno del proyecto:** `THE_WIRED_RENAISSANCE`.

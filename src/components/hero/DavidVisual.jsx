export function DavidVisual() {
  return (
    <figure className="david-visual">
      <div className="david-visual__halo" aria-hidden="true" />
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/hero/david-wired-mobile.webp" />
        <img
          src="/images/hero/david-wired-portrait.webp"
          alt="Busto de David reinterpretado como una escultura de mármol formada por píxeles violetas y azules"
          width="1120"
          height="1400"
          fetchPriority="high"
        />
      </picture>
      <div className="david-visual__grid" aria-hidden="true" />
      <figcaption>FIG. 001 / HUMAN_FORM_DIGITIZED</figcaption>
    </figure>
  )
}

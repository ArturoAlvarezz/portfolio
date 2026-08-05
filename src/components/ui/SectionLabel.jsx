export function SectionLabel({ index, title, meta }) {
  return (
    <div className="section-label">
      <span className="section-label__index">[{index}]</span>
      <h2>{title}</h2>
      {meta && <span className="section-label__meta">{meta}</span>}
    </div>
  )
}

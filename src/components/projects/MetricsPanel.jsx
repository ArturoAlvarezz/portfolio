export function MetricsPanel({ metrics, label = 'Validated metrics' }) {
  return (
    <dl className="metrics-panel" aria-label={label}>
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  )
}

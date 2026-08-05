export function TelemetryLabel({ label, value }) {
  return (
    <div className="telemetry-label">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

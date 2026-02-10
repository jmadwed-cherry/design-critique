function PieChart({ segments, size = 120 }) {
  let cumulative = 0
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  const arcs = segments.map((seg) => {
    const start = cumulative
    cumulative += seg.value
    return { ...seg, start, end: cumulative, total }
  })

  const r = size / 2
  const cx = r
  const cy = r

  function polarToCartesian(angle) {
    const rad = ((angle - 90) * Math.PI) / 180
    return { x: cx + r * 0.9 * Math.cos(rad), y: cy + r * 0.9 * Math.sin(rad) }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {arcs.map((arc, i) => {
        const startAngle = (arc.start / arc.total) * 360
        const endAngle = (arc.end / arc.total) * 360
        const largeArc = endAngle - startAngle > 180 ? 1 : 0
        const s = polarToCartesian(startAngle)
        const e = polarToCartesian(endAngle)
        return (
          <path
            key={i}
            d={`M ${cx} ${cy} L ${s.x} ${s.y} A ${r * 0.9} ${r * 0.9} 0 ${largeArc} 1 ${e.x} ${e.y} Z`}
            fill={arc.color}
          />
        )
      })}
      <circle cx={cx} cy={cy} r={r * 0.45} fill="white" />
    </svg>
  )
}

function Legend({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600">
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
          {item.label} — {item.value}%
        </div>
      ))}
    </div>
  )
}

export default function UserData() {
  const providerSegments = [
    { label: 'Windows', value: 59, color: '#c0392b' },
    { label: 'Mac', value: 19, color: '#e74c3c' },
    { label: 'Other', value: 22, color: '#e0e0e0' },
  ]

  const consumerSegments = [
    { label: 'iPhone', value: 67, color: '#c0392b' },
    { label: 'Android', value: 21, color: '#e74c3c' },
    { label: 'Other', value: 12, color: '#e0e0e0' },
  ]

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          User Data
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          About our viewers
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Providers */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">~80% providers on desktop</h3>
            <p className="mt-1 text-sm text-gray-500">
              Provider registration visits: proxy for provider&rsquo;s device
            </p>
            <div className="mt-6 flex justify-center">
              <PieChart segments={providerSegments} />
            </div>
            <Legend items={providerSegments} />
          </div>

          {/* Consumers */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">~90% consumers on mobile</h3>
            <p className="mt-1 text-sm text-gray-500">
              Cherry finder visits: proxy for consumer&rsquo;s device
            </p>
            <div className="mt-6 flex justify-center">
              <PieChart segments={consumerSegments} />
            </div>
            <Legend items={consumerSegments} />
          </div>
        </div>
      </div>
    </section>
  )
}

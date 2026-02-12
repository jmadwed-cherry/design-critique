function DonutChart({ segments, size = 140 }) {
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
  const outerR = r * 0.9
  const innerR = r * 0.55

  function polarToCartesian(angle, radius) {
    const rad = ((angle - 90) * Math.PI) / 180
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {arcs.map((arc, i) => {
        const startAngle = (arc.start / arc.total) * 360
        const endAngle = (arc.end / arc.total) * 360
        const largeArc = endAngle - startAngle > 180 ? 1 : 0
        const outerStart = polarToCartesian(startAngle, outerR)
        const outerEnd = polarToCartesian(endAngle, outerR)
        const innerStart = polarToCartesian(startAngle, innerR)
        const innerEnd = polarToCartesian(endAngle, innerR)
        return (
          <path
            key={i}
            d={`M ${outerStart.x} ${outerStart.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y} Z`}
            fill={arc.color}
          />
        )
      })}
    </svg>
  )
}

const emotionalData = [
  { label: 'Mostly fine', value: 44, color: '#00A368' },
  { label: 'Challenging but doable', value: 33.3, color: '#F59E0B' },
  { label: 'Overwhelming', value: 22.2, color: '#EF4444' },
  { label: 'Easy', value: 0.5, color: '#e0e0e0' },
]

export default function SherrySummary() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Summary
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Project overview &amp; key&nbsp;drivers
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* Left: text summary */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Hypothesis</h3>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                We can dramatically increase demo booking conversion by creating an experience that
                raises the <span className="font-semibold text-gray-900">&ldquo;psych score&rdquo;</span> at
                every step &mdash; beautiful design, purposeful animation, a guided character, language
                that resonates with providers, and as few friction points as&nbsp;possible.
              </p>
            </div>
          </div>

          {/* Right: emotional state data */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6">
              <div className="flex items-center gap-2 mb-1">
                <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                  User Research Signal
                </p>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Offering Financing Without&nbsp;Cherry
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                How providers feel about offering patient financing today &mdash; the mindset they bring when they land on our&nbsp;site
              </p>

              <div className="mt-5 flex justify-center">
                <DonutChart segments={emotionalData} />
              </div>

              <div className="mt-5 space-y-2.5">
                {emotionalData.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-block h-3 w-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value === 0.5 ? '0' : item.value}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-amber-100/60 px-4 py-3">
                <p className="text-xs font-medium text-amber-800">
                  55.5% of providers already feel stressed about financing before they even reach us.
                  0% say it&rsquo;s easy. If we meet them with a flow that feels effortless and exciting, conversion&nbsp;follows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

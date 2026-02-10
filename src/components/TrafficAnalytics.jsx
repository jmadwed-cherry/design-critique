function LineChart() {
  const data = [
    { label: '2/3', value: 6500 },
    { label: '2/4', value: 7800 },
    { label: '2/5', value: 8200 },
    { label: '2/6', value: 7500 },
    { label: '2/7', value: 4500 },
    { label: '2/8', value: 3800 },
    { label: '2/9', value: 7500 },
    { label: '2/10', value: 6500 },
  ]

  // X-axis: show every other label
  const xLabels = ['2/3', '2/5', '2/7', '2/9']

  const minY = 0
  const maxY = 10000
  const yTicks = [0, 2500, 5000, 7500, 10000]

  // Layout
  const chartLeft = 16
  const chartRight = 44 // room for right-side labels
  const chartTop = 8
  const chartBottom = 40
  const svgW = 600
  const svgH = 232
  const plotW = svgW - chartLeft - chartRight
  const plotH = svgH - chartTop - chartBottom

  function xPos(i) {
    return chartLeft + (i / (data.length - 1)) * plotW
  }

  function yPos(v) {
    return chartTop + plotH - ((v - minY) / (maxY - minY)) * plotH
  }

  // Build line path
  const linePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${xPos(i)},${yPos(d.value)}`)
    .join(' ')

  // Build area path
  const areaPath = `${linePath} L${xPos(data.length - 1)},${yPos(minY)} L${xPos(0)},${yPos(minY)} Z`

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c0392b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c0392b" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Horizontal grid lines + Y labels on right */}
      {yTicks.map((tick) => (
        <g key={tick}>
          <line
            x1={chartLeft}
            x2={svgW - chartRight}
            y1={yPos(tick)}
            y2={yPos(tick)}
            stroke="#f0f0f0"
            strokeWidth="1"
          />
          <text
            x={svgW - chartRight + 8}
            y={yPos(tick) + 4}
            className="text-[11px]"
            fill="#a0a0a0"
            textAnchor="start"
          >
            {tick >= 1000 ? `${(tick / 1000).toFixed(tick % 1000 === 0 ? 0 : 1)}k` : tick}
          </text>
        </g>
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#chartFill)" />

      {/* Line */}
      <path d={linePath} fill="none" stroke="#c0392b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      {/* X-axis labels */}
      {data.map((d, i) => {
        if (!xLabels.includes(d.label)) return null
        return (
          <text
            key={d.label}
            x={xPos(i)}
            y={svgH - 4}
            className="text-[11px]"
            fill="#a0a0a0"
            textAnchor="middle"
          >
            {d.label}
          </text>
        )
      })}
    </svg>
  )
}

function KPICard({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      {sub && <p className="mt-1 text-sm text-gray-500">{sub}</p>}
    </div>
  )
}

export default function TrafficAnalytics() {
  return (
    <section className="bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Analytics
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Traffic overview
        </h2>

        {/* Chart */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Visitors (last 7 days)</p>
          </div>
          <LineChart />
        </div>

        {/* KPIs */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <KPICard label="Total Sessions" value="54,674" />
          <KPICard label="Bounce Rate" value="23.0%" />
          <KPICard label="Avg Time on Page" value="25s" />
          <KPICard label="Device Split" value="39 / 61" sub="Desktop / Mobile" />
        </div>
      </div>
    </section>
  )
}

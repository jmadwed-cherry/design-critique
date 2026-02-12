const priorityStyles = {
  P0: 'bg-red-100 text-red-700',
  P1: 'bg-amber-100 text-amber-700',
  P2: 'bg-blue-100 text-blue-700',
}

function PriorityBadge({ level }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${priorityStyles[level] || 'bg-gray-100 text-gray-600'}`}>
      {level}
    </span>
  )
}

function CritiqueTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Priority</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Problem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 align-top">
                <PriorityBadge level={row.priority} />
              </td>
              <td className="px-4 py-3 align-top text-gray-700">{row.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const demoFormRows = [
  {
    priority: 'P0',
    problem: 'Hero headline is generic \u2014 doesn\u2019t convey Cherry\u2019s specific value prop for providers',
  },
  {
    priority: 'P0',
    problem: '\u201cTakes <1 minute\u201d claim is buried below the fold',
  },
  {
    priority: 'P1',
    problem: 'Value props listed as a wall of text \u2014 not scannable',
  },
  {
    priority: 'P1',
    problem: 'Form fields lack contextual reassurance (why do we need this?)',
  },
  {
    priority: 'P2',
    problem: 'No social proof visible near the form',
  },
]

export default function SherryCritique() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Critique Findings
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Opportunities discovered
        </h2>
        <p className="mt-2 text-base text-gray-500">
          Surfaced during a live walkthrough of the demo booking flow with the&nbsp;team
        </p>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white">
          <CritiqueTable rows={demoFormRows} />
        </div>
      </div>
    </section>
  )
}

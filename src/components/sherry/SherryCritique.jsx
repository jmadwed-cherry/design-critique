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
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Finding</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Todo</th>
            <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Owner</th>
            <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Jira / Mock</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 align-top">
                <PriorityBadge level={row.priority} />
              </td>
              <td className="px-4 py-3 align-top text-gray-700">{row.finding}</td>
              <td className="px-4 py-3 align-top text-gray-600">{row.todo}</td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-gray-500">{row.owner}</td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-gray-500">{row.jira}</td>
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
    finding: 'Hero headline is generic \u2014 doesn\u2019t convey Cherry\u2019s specific value prop for providers',
    todo: 'Rewrite headline to lead with provider benefit (e.g., "Offer patients flexible payments in minutes")',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P0',
    finding: '"Takes <1 minute" claim is buried below the fold',
    todo: 'Surface time-to-complete as a badge directly on the demo CTA or form header',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P1',
    finding: 'Value props listed as a wall of text \u2014 not scannable',
    todo: 'Convert to icon + short phrase format (max 6 words per prop)',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P1',
    finding: 'Form fields lack contextual reassurance (why do we need this?)',
    todo: 'Add inline helper text or trust micro-copy under sensitive fields',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P2',
    finding: 'No social proof visible near the form',
    todo: 'Add a testimonial snippet or provider count near the CTA',
    owner: '\u2014',
    jira: '\u2014',
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
          Demo Form
        </h2>
        <p className="mt-2 text-base text-gray-500">
          Copy polish &amp; value prop placement
        </p>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white">
          <CritiqueTable rows={demoFormRows} />
        </div>
      </div>
    </section>
  )
}

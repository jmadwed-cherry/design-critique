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

const registrationRows = [
  {
    priority: 'P0',
    finding: 'Consent language feels legal and intimidating \u2014 users hesitate',
    todo: 'Rewrite consent to collaborative tone (e.g., "Keep me in the loop" vs "I agree to receive...")',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P0',
    finding: 'Multi-step form lacks progress indication \u2014 users don\u2019t know how long it will take',
    todo: 'Add clear step indicator with "Step X of Y" and estimated time remaining',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P1',
    finding: 'Manual "Next" button clicks between steps feel sluggish',
    todo: 'Implement auto-advance on single-choice selections (Duolingo pattern)',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P1',
    finding: 'Copy on each step is too verbose \u2014 increases cognitive load',
    todo: 'Cut copy to max 1 line of instruction per step; move details to tooltips',
    owner: '\u2014',
    jira: '\u2014',
  },
  {
    priority: 'P2',
    finding: 'No celebration or feedback on completion',
    todo: 'Add a success animation + clear next-step messaging on final screen',
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
          Structured feedback by&nbsp;surface
        </h2>

        {/* Demo Form */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cherry-50 text-cherry">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Demo Form</h3>
              <p className="text-sm text-gray-500">Copy polish &amp; value prop placement</p>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white">
            <CritiqueTable rows={demoFormRows} />
          </div>
        </div>

        {/* Registration Flow */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cherry-50 text-cherry">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Registration Flow</h3>
              <p className="text-sm text-gray-500">Consent language &amp; auto-advance interactions</p>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white">
            <CritiqueTable rows={registrationRows} />
          </div>
        </div>
      </div>
    </section>
  )
}

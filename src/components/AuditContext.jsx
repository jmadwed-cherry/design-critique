function StatusDot({ color }) {
  const colors = {
    red: 'bg-red-500',
    amber: 'bg-amber-500',
    green: 'bg-emerald-500',
  }
  return <span className={`inline-block h-2 w-2 rounded-full ${colors[color]}`} />
}

function InsightCard({ icon, title, status, finding, recommendation }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
          <div className="mt-0.5 flex items-center gap-1.5">
            <StatusDot color={status.color} />
            <span className="text-xs text-gray-500">{status.label}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {finding}
      </p>

      <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Recommendation</p>
        <p className="mt-1 text-sm text-gray-700">{recommendation}</p>
      </div>
    </div>
  )
}

export default function AuditContext() {
  return (
    <section className="bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Audit Context
        </p>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          High level from Jason&rsquo;s audit
        </h3>

        {/* Summary quote */}
        <blockquote className="mt-6 rounded-lg border-l-4 border-cherry bg-white p-6 shadow-sm">
          <p className="text-base leading-relaxed text-gray-600">
            The site is described as <span className="font-medium text-gray-900">&ldquo;visually dense,&rdquo; &ldquo;crowded,&rdquo;</span> and
            {' '}<span className="font-medium text-gray-900">&ldquo;disjointed.&rdquo;</span> This lack of hierarchy and restraint undercuts trust,
            making the brand feel <span className="font-medium text-gray-900">&ldquo;assembled&rdquo;</span> rather than intentional.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Goal: Move towards a <em>calm</em> and <em>unmistakably trustworthy</em> aesthetic where every element earns its place.
          </p>
        </blockquote>

        {/* Three insight cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InsightCard
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            title="Visual Clarity"
            status={{ color: 'red', label: 'Needs work' }}
            finding="Competing messages and a &ldquo;stuff everything in&rdquo; approach create noise rather than confidence. The site feels assembled, not designed."
            recommendation="Strip back to essentials. Every element must earn its place &mdash; remove decoration that doesn't support comprehension."
          />

          <InsightCard
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            }
            title="Whitespace &amp; Composition"
            status={{ color: 'red', label: 'Scored red' }}
            finding="&ldquo;Whitespace Creates Calm&rdquo; &mdash; space is the key factor that makes design feel premium. The site currently fills every pixel."
            recommendation="Use whitespace to separate content and let the design breathe, rather than filling gaps with decoration or text."
          />

          <InsightCard
            icon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Focus &amp; Cognitive Load"
            status={{ color: 'amber', label: 'Needs focus' }}
            finding="&ldquo;One Thought Per Section&rdquo; &mdash; sections currently bleed together with messaging redundancy, overwhelming the reader."
            recommendation="Each section should communicate exactly one clear idea. Remove elements that don't earn attention to reduce load and increase authority."
          />
        </div>
      </div>
    </section>
  )
}

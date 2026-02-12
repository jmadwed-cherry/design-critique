const steps = [
  'Website visit',
  'Book a demo',
  'Attend demo',
  'Register',
  'Attend onboarding',
  'Go live!',
]

function Arrow() {
  return (
    <svg className="hidden sm:block w-8 h-8 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function SherryHeader() {
  return (
    <>
      {/* Funnel */}
      <section className="border-b border-gray-100 bg-gray-50/60 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cherry">
            North Star
          </p>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            OKR: Website visit to go live funnel conversion improves&nbsp;by&nbsp;10%
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center rounded-lg border border-gray-200 bg-white px-5 py-3">
                  <span className="text-sm font-semibold whitespace-nowrap text-gray-600">
                    {step}
                  </span>
                </div>
                {i < steps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
            Current Focus
          </p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
            Today&rsquo;s focus: Book a Demo Flow&nbsp;Conversion
          </h2>

          {/* Stats callout */}
          <div className="mt-8 flex items-center gap-5 rounded-xl border border-gray-200 bg-white px-6 py-5">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">8</span>
              <span className="text-sm text-gray-500">pages</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">43%</span>
              <span className="text-sm text-gray-500">conversion rate</span>
            </div>
            <p className="ml-auto text-sm text-gray-500 max-w-xs">
              Our current demo booking flow is 8 pages with a 43% conversion&nbsp;rate.
            </p>
          </div>
        </div>
      </section>

      {/* Project header */}
      <section className="border-y border-gray-100 bg-gray-50/60 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cherry">
            Design Critique
          </p>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
            &ldquo;Sherry&rdquo; Revamp &mdash; Demo&nbsp;Form
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl">
            A &ldquo;Duolingo-style&rdquo; buttery smooth experience with polished copy, clearer value
            props, and trust-building messaging to increase demo booking conversion&nbsp;rates.
          </p>

          {/* Scope pill */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-cherry/20 bg-cherry-50 px-4 py-2.5">
              <svg className="h-4 w-4 text-cherry" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-semibold text-cherry">Demo Form</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

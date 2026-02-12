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
            {steps.map((step, i) => {
              const isActive = step === 'Book a demo'
              return (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <div className={`flex items-center rounded-lg px-5 py-3 ${isActive ? 'border-2 border-cherry bg-cherry-50' : 'border border-gray-200 bg-white'}`}>
                  <span className={`text-sm font-semibold whitespace-nowrap ${isActive ? 'text-cherry' : 'text-gray-600'}`}>
                    {step}
                  </span>
                </div>
                {i < steps.length - 1 && <Arrow />}
              </div>
              )
            })}
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
            Today&rsquo;s focus: Get demo booking conversion as close to 100%&nbsp;as&nbsp;possible
          </h2>
          <p className="mt-3 text-base text-gray-500">
            The demo booking flow is the first real interaction providers have with Cherry.
            Every drop-off here is a provider we never get the chance to&nbsp;win.
          </p>

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
              Current state: 8 pages, 43% conversion. 57% of interested providers drop off before booking&nbsp;a&nbsp;demo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

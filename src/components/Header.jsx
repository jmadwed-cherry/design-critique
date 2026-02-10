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

export default function Header() {
  return (
    <section className="border-b border-gray-100 bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cherry">
          North Star
        </p>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          OKR: Website visit to go live funnel conversion improves&nbsp;by&nbsp;10%
        </h1>

        {/* Funnel */}
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
  )
}

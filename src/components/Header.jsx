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
    <svg
      className="hidden sm:block w-6 h-6 shrink-0 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-0">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium whitespace-nowrap ${
                  i === 0
                    ? 'border-cherry/30 bg-cherry-50 text-cherry'
                    : i === steps.length - 1
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                {step}
              </span>
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

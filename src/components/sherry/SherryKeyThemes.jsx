const pillars = [
  {
    title: 'Reduce friction at every step',
    description: 'Fewer pages, shorter copy, auto-advance fields, and progressive disclosure. Every unnecessary step is a chance to lose a provider.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Use language that resonates',
    description: 'Speak to how providers actually think about financing — surface benefits in their terms so the value is immediate and obvious.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Animate with purpose',
    description: 'A guided character and Duolingo-style micro-interactions that reward progress, build momentum, and make the flow feel polished and alive.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function SherryKeyThemes() {
  return (
    <section className="bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Key Theme
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Elevate the &ldquo;psych&nbsp;score&rdquo;
        </h2>
        <p className="mt-2 text-base text-gray-500 max-w-3xl">
          The psych score measures how excited and confident a provider feels at each step.
          Providers arrive stressed about financing &mdash; we have a real opportunity to flip that
          into genuine excitement about using Cherry. A higher psych score means higher&nbsp;conversion.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cherry-50 text-cherry">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{pillar.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

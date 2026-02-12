const themes = [
  {
    title: 'Make value props pop',
    description: 'Surface benefits at every step so users understand what they gain before they give information.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Reduce friction at every step',
    description: 'Shorter copy, auto-advance fields, and progressive disclosure to minimize cognitive load.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Build trust through specificity',
    description: 'Replace vague promises with concrete, measurable claims (e.g., "Takes <1 minute", "No credit card required").',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Soften consent language',
    description: 'Reframe legal/consent copy to feel collaborative rather than transactional. Less "I agree to..." more "Keep me updated."',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Animate with purpose',
    description: 'Duolingo-style micro-interactions that reward progress and make transitions feel polished, not decorative.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Elevate the "psych score"',
    description: 'Every screen should leave users feeling capable and confident. Target: shift "Overwhelming" to near 0%.',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function SherryKeyThemes() {
  return (
    <section className="bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Key Themes
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Design intentions
        </h2>
        <p className="mt-2 text-base text-gray-500">
          High-level goals guiding the Sherry revamp across both surfaces.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cherry-50 text-cherry">
                  {theme.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{theme.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

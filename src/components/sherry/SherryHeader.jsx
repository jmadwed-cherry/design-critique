export default function SherryHeader() {
  return (
    <section className="border-b border-gray-100 bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cherry">
          Design Critique
        </p>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          &ldquo;Sherry&rdquo; Revamp &mdash; Demo Form &amp; Registration&nbsp;Flow
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-3xl">
          A &ldquo;Duolingo-style&rdquo; buttery smooth experience with polished copy, clearer value
          props, and trust-building messaging to increase demo booking conversion&nbsp;rates.
        </p>

        {/* Scope pills */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-cherry/20 bg-cherry-50 px-4 py-2.5">
            <svg className="h-4 w-4 text-cherry" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-semibold text-cherry">Demo Form</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-cherry/20 bg-cherry-50 px-4 py-2.5">
            <svg className="h-4 w-4 text-cherry" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-semibold text-cherry">Registration Flow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

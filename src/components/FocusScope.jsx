export default function FocusScope() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Current Focus
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Today&rsquo;s focus: Website to Book&nbsp;a&nbsp;Demo
        </h2>
        <p className="mt-3 text-lg text-gray-500">
          How might we drive more demo books from website&nbsp;visit?
        </p>

        {/* Visual emphasis */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-lg border border-cherry/20 bg-cherry-50 px-5 py-3">
            <span className="text-sm font-semibold text-cherry">Website visit</span>
          </div>
          <svg className="w-8 h-8 text-cherry" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="flex items-center gap-3 rounded-lg border border-cherry/20 bg-cherry-50 px-5 py-3">
            <span className="text-sm font-semibold text-cherry">Book a demo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

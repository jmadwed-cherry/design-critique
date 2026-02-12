export default function SherryRawNotes() {
  return (
    <section className="bg-gray-50/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cherry">
          Raw Notes / Archive
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          Live critique feedback
        </h2>
        <p className="mt-2 text-base text-gray-500">
          Capture raw observations, questions, and follow-ups during the critique session.
        </p>

        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-8">
          <div className="space-y-6">
            {/* Placeholder notes */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-medium">Session notes</span>
                <span>&middot;</span>
                <span>Add feedback here during the critique</span>
              </div>
              <ul className="mt-3 space-y-2.5 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                  <span className="italic">Notes will be captured here during the live critique session...</span>
                </li>
              </ul>
            </div>

            {/* Discussion prompts */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
                Discussion prompts
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    How far should auto-advance go? Single-choice only, or also after text input blur?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    What is the right level of animation? Where does &ldquo;buttery&rdquo; cross into &ldquo;slow&rdquo;?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    Should consent rewrite be validated with legal before design ships?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    What psych score target would represent success? Shift &ldquo;Overwhelming&rdquo; below 10%?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

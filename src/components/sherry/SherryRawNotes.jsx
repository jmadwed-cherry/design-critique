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
          Capture observations, questions, and follow-ups during the critique session.
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
                    What&rsquo;s the minimum number of pages we can reduce the flow to while still capturing what we need?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    How should the character guide the experience? Where does it show up, and what role does it play in building excitement?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    Where is the biggest single drop-off in the current 8-page flow? What&rsquo;s causing it?
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    What does a &ldquo;100% psych score&rdquo; moment feel like? What would make a provider genuinely excited to book?
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

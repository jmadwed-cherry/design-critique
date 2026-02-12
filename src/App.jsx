import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import AcquisitionFunnelAudit from './pages/AcquisitionFunnelAudit'
import SherryCritiquePage from './pages/SherryCritiquePage'

function Nav() {
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-3">
      <div className="mx-auto flex max-w-5xl items-center gap-6">
        <Link to="/" className="text-sm font-semibold text-gray-900 hover:text-cherry transition-colors">
          Design Critiques
        </Link>
      </div>
    </nav>
  )
}

function Index() {
  return (
    <>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cherry">
            Cherry Design Team
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Design Critiques
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Structured critique sessions for design reviews across the Cherry product&nbsp;experience.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              to="/acquisition-funnel-audit"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-cherry/30 hover:shadow-md"
            >
              <p className="text-xs font-medium text-gray-400">01/26</p>
              <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-cherry transition-colors">
                Acquisition Funnel Audit
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Website visit to go-live funnel conversion analysis, user data, and traffic&nbsp;overview.
              </p>
            </Link>

            <Link
              to="/sherry-revamp"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-cherry/30 hover:shadow-md"
            >
              <p className="text-xs font-medium text-gray-400">02/12</p>
              <h2 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-cherry transition-colors">
                Sherry Revamp &mdash; Demo &amp; Registration
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Duolingo-style smooth experience with polished copy, value props, and trust&nbsp;messaging.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acquisition-funnel-audit" element={<AcquisitionFunnelAudit />} />
          <Route path="/sherry-revamp" element={<SherryCritiquePage />} />
        </Routes>
        <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
          Design Critique Context &middot; Confidential
        </footer>
      </div>
    </HashRouter>
  )
}

export default App

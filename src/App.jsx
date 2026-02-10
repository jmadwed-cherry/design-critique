import './App.css'
import Header from './components/Header'
import FocusScope from './components/FocusScope'
import AuditContext from './components/AuditContext'
import UserData from './components/UserData'
import TrafficAnalytics from './components/TrafficAnalytics'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Header />
      <FocusScope />
      <AuditContext />
      <UserData />
      <TrafficAnalytics />
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        Design Critique Context &middot; Confidential
      </footer>
    </div>
  )
}

export default App

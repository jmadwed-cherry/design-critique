import Header from '../components/Header'
import FocusScope from '../components/FocusScope'
import AuditContext from '../components/AuditContext'
import UserData from '../components/UserData'
import TrafficAnalytics from '../components/TrafficAnalytics'

export default function AcquisitionFunnelAudit() {
  return (
    <>
      <Header />
      <FocusScope />
      <AuditContext />
      <UserData />
      <TrafficAnalytics />
    </>
  )
}

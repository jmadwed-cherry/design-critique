import SherryHeader from '../components/sherry/SherryHeader'
import SherrySummary from '../components/sherry/SherrySummary'
import SherryKeyThemes from '../components/sherry/SherryKeyThemes'
import SherryCritique from '../components/sherry/SherryCritique'
import SherryRawNotes from '../components/sherry/SherryRawNotes'

export default function SherryCritiquePage() {
  return (
    <>
      <SherryHeader />
      <SherryKeyThemes />
      <SherrySummary />
      <SherryCritique />
      <SherryRawNotes />
    </>
  )
}

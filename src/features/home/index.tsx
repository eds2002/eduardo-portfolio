import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'

export function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

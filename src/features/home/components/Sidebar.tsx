import { Socials } from './Socials'
import { PersonalInfo } from './PersonalInfo'

export const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24  gap-4 flex flex-col">
      <PersonalInfo />
      <Socials />
    </header>
  )
}

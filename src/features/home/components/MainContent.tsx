import { AboutContentBlock } from './AboutContentBlock'
import { ExperienceBlock } from './ExperienceBlock'

export const MainContent = () => {
  const content = [AboutContentBlock, ExperienceBlock]
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 flex-col gap-24 flex">
      {content.map((Content, index) => (
        <Content key={index} />
      ))}
    </main>
  )
}

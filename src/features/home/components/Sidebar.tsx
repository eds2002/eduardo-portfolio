import Typography from '@/components/Typography'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const socials = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/trpfsu/',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/eduardo-sanchez-93a191227/',
  },
  {
    icon: Github,
    href: 'https://www.github.com/eds2002',
  },

  {
    icon: Mail,
    href: 'mailto:es23jr@gmail.com',
  },
]

const Socials = () => (
  <div className="flex flex-row gap-8 mt-4">
    {socials.map((item) => {
      const Icon = item.icon

      return (
        <Link href={item.href} key={item.href} target="_blank">
          <Icon
            size={24}
            className="text-white opacity-75 hover:text-tertiary-1 transition-colors cursor-pointer"
          />
        </Link>
      )
    })}
  </div>
)

const PersonalInfo = () => (
  <div className="gap-4 flex flex-col flex-start">
    <Typography variant="h1" className="font-bold">
      Eduardo Sanchez
    </Typography>
    <Typography variant="h3" className="font-normal text-xl">
      Founder & Full stack developer at Transakt.
    </Typography>
    <Typography
      variant="p"
      affects={'removePMargin'}
      className="opacity-75 text-md max-w-xs"
    >
      Expertise in developing engaging web and mobile applications.
    </Typography>
  </div>
)

export const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24  gap-4 flex flex-col">
      <PersonalInfo />
      <Socials />
    </header>
  )
}

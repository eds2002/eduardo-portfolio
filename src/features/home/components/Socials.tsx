import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
const socials = [
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

export const Socials = () => (
  <div className="flex flex-row gap-8 mt-4">
    {socials.map((item) => {
      const Icon = item.icon

      return (
        <Link href={item.href} key={item.href} target="_blank">
          <Icon
            size={24}
            className=" opacity-75 hover:text-primary-1 transition-colors cursor-pointer stroke-2"
          />
        </Link>
      )
    })}
  </div>
)

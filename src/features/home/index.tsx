'use client'
import Typography from '@/components/Typography'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import useViewportStore, { changeCurrentView } from './store/viewportStore'
import useOnScreen from './utils/useOnScreen'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="gap-3 flex flex-col">
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
          Developer based in New Jersey, spending my time building web apps that
          help people.
        </Typography>
      </div>
    </header>
  )
}

const AboutContentBlock = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible) changeCurrentView('About')
    else changeCurrentView('Experience')
  }, [isVisible])
  return (
    <section ref={ref} id="about">
      <Typography variant="h2" className="text-md  uppercase pb-4 lg:hidden ">
        About
      </Typography>
      <div className="flex flex-col gap-3">
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          My journey started back during my freshman year of highschool where I
          took a class in computer science and learned the basics of programming
          using python and java. Fast forward to my senior year, I transitioned
          to web developement using html, css,javascript and branched off doing
          off the record projects / freelance work for small businesses.
        </Typography>
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          Fast forward today, I specialize in full stack development and have
          worked on a variety of projects ranging from web apps, and some mobile
          apps. I am currently working on my startup Transakt, a personal
          budgeting app that helps you manage your finances.
        </Typography>
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          In order to avoid burnout and keep my sanity, I enjoy spending my time
          going to the gym, learning new things about the web, hang out with my
          cat / family and friends.
        </Typography>
      </div>
    </section>
  )
}

const ExperienceBlock = () => {
  const ref = useRef<HTMLDivElement>(null)
  const timeline = [
    {
      name: 'Transakt',
      role: 'Founder & Full stack developer',
      description:
        "Transakt is an iOS personal budgeting app that helps you manage your finances. Transakt makes finances simple and easy to understand. It's the only budgeting app that does the hard work for you. ",
      date: 'October 2021 - Present',
      responsibility: [
        'Founded Transakt with a mission to deliver accessible personal finance tools, driving the product from ideation to launch and user acquisition.',
        "Engineered the budgeting app's architecture using a combination of React Native for mobile development and Next.js for the web platform, ensuring seamless full-stack functionality.",
        'Integrated Firebase for robust backend services and utilized Tamagui to create responsive front-end interfaces, focusing on user experience.',
        'Orchestrated community engagement strategies on social media platforms, successfully building an initial user base and establishing a continuous feedback loop for product enhancement.',
        'Optimized data handling and app performance, achieving a 35% improvement in handling large datasets, which significantly enhanced user engagement and retention.',
        "Recently expanded the app's backend capabilities by incorporating Node.js and Express.js, further enhancing system efficiency and scalability to support growing user demands.",
      ],
      stack: [
        'JavaScript',
        'TypeScript',
        'Next.js',
        'Node.js',
        'Firebase',
        'React Native',
        'Expo',
        'React',
        'Tailwind',
      ],
      href: 'https://www.about.transaktfinance.com',
    },
    {
      name: 'Sanchez Cleaning',
      role: 'Web Developer',
      description:
        'Sanchez Cleaning is a cleaning company based in Morris County, NJ. Providing professional cleaning services for the past 20 years. ',
      date: 'May 2022 - August 2023',
      responsibility: [
        "Created a highly customizable website using Next JS, Tailwind, and Sanity.io, meeting the client's need for a flexible platform.",
        'Engineered a fast and efficient custom page builder, ensuring optimal performance across all devices and browsers.',
        "Achieved a 25% increase in site engagement and a 10% boost in emails/calls to the company, linking improved client-customer interaction to the new website's accessible design.",
        "Utilized Resend, React Email, reCAPTCHA, and Google Analytics to enhance user experience and monitor site traffic, further contributing to the website's success.",
      ],
      stack: [
        'JavaScript',
        'TypeScript',
        'Next.js',
        'Sanity',
        'Tailwind',
        'React',
        'Resend',
        'React Email',
        'Google Captcha',
        'Google Analytics',
      ],
      href: 'https://www.sanchezfamilycleaning.com',
    },
  ]

  const pdfLink = '/eduardo-sanchez-resume.pdf'

  return (
    <section ref={ref} id="experience">
      <Typography variant="h2" className="text-md  uppercase pb-4 lg:hidden ">
        Experience
      </Typography>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {timeline.map((item) => (
          <Link
            href={item.href}
            target="_blank"
            key={item.name}
            className="hover:bg-tertiary-1/25 rounded-2xl p-3 transition-colors cursor-pointer"
          >
            <div className="flex items-center text-sm font-medium leading-6 text-tertiary-6">
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="aquamarine" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-tertiary-1/40 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </div>
            <div className="gap-3 flex flex-col">
              <Typography
                variant="h3"
                affects={'removePMargin'}
                className="text-lg font-medium"
              >
                {item.role} • {item.name}
              </Typography>
              <Typography
                variant="p"
                affects={'removePMargin'}
                className="text-md opacity-75"
              >
                {item.description}
              </Typography>
              <ul className="px-4 flex flex-col gap-1">
                {item.responsibility?.map((responsibility) => (
                  <li className="list-disc text-tertiary-1">
                    <Typography
                      variant="p"
                      affects={'removePMargin'}
                      className="text-md opacity-75"
                    >
                      {responsibility}
                    </Typography>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row gap-1 flex-wrap">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-tertiary-1 font-semibold px-4 py-1 bg-tertiary-1/25 rounded-full block"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        <Link
          href={pdfLink}
          className="font-medium text-md text-tertiary-11 hover:text-tertiary-1 group flex items-center bg-transparent self-start justify-self-start"
          target="_blank"
        >
          <p>View full resume</p>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 ease-in-out transform duration-100"
            strokeWidth={3}
          />
        </Link>
      </div>
    </section>
  )
}

const MainContent = () => {
  const content = [AboutContentBlock, ExperienceBlock]
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 flex-col gap-24 flex">
      {content.map((Content, index) => (
        <Content key={index} />
      ))}
    </main>
  )
}

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

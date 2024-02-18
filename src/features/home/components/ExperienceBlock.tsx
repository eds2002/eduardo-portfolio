import Typography from '@/components/Typography'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export const ExperienceBlock = () => {
  const timeline = [
    {
      name: 'Transakt',
      role: 'Founder & Full stack developer',
      description:
        'Transakt is an iOS personal budgeting app that helps you manage your finances. Transakt makes finances simple and easy to understand.',
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

  const pdfLink = '/sanchez-resume.pdf'

  return (
    <section id="experience">
      <Typography variant="h2" className="text-md  uppercase pb-4 lg:hidden ">
        Experience
      </Typography>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {timeline.map((item) => (
          <Link
            href={item.href}
            target="_blank"
            key={item.name}
            className="hover:bg-tertiary-1/25 rounded-2xl p-3 transition-colors cursor-pointer "
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
                className="text-md font-medium"
              >
                {item.role} • {item.name}
              </Typography>
              <Typography
                variant="p"
                affects={'removePMargin'}
                className="text-sm opacity-75"
              >
                {item.description}
              </Typography>
              <ul className="px-4 flex flex-col gap-1">
                {item.responsibility?.map((responsibility) => (
                  <li
                    className="list-disc text-tertiary-1"
                    key={responsibility}
                  >
                    <Typography
                      variant="p"
                      affects={'removePMargin'}
                      className="text-sm opacity-75"
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

'use client'
import { useEffect, useRef } from 'react'
import useOnScreen from '../utils/useOnScreen'
import { changeCurrentView } from '../store/viewportStore'
import Typography from '@/components/Typography'

export const AboutContentBlock = () => {
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
          When I enrolled in a computer science course during my first year of
          high school, I started my adventure into the world of technology. It
          was there that I learned the basics of programming with Python and
          Java. By my senior year, I was more interested in web development,
          learning HTML, CSS, and JavaScript. I also started working on small
          business projects as a freelancer to hone my skills through real-world
          experience.
        </Typography>
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          I work as a Full Stack Developer now, and I have a wide range of
          projects under my belt, including various mobile and web apps. My
          current business, Transakt, is a company that aims to make personal
          money management easier for customers by providing an easy-to-use
          budgeting tool that enables them to successfully manage their funds.
        </Typography>
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          In addition to my career goals, I'm dedicated to leading a healthy
          lifestyle. I find comfort and renewal in going to the gym on a daily
          basis, in always discovering new things on the internet, and in
          savoring the time I spend with my family, friends, and my cat.
        </Typography>
      </div>
    </section>
  )
}

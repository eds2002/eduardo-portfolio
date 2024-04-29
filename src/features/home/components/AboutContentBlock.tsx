'use client'
import Typography from '@/components/Typography'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useViewportStore from '../store/viewportStore'
import { useInViewHook } from '../utils/useInViewHook'

const sectionId = 'about'

export const AboutContentBlock = () => {
  const Span = ({ children }: { children: string }) => (
    <span className="font-semibold text-primary-1">{children}</span>
  )
  return (
    <section id={sectionId}>
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
          learning <Span>HTML</Span>, <Span>CSS</Span>, and{' '}
          <Span>JavaScript</Span>. I also started working on small business
          projects as a <Span>freelancer</Span> to hone my skills through
          real-world experience. My current tech stack is the{' '}
          <Span>T3 Stack</Span>!
        </Typography>
        <Typography
          variant="p"
          affects={'removePMargin'}
          className="text-md opacity-75"
        >
          I work as a <Span>Full Stack Developer</Span> now, and I have a wide
          range of projects under my belt, including various mobile and web
          apps. Currently I work at <Span>Transakt</Span>, it's a company that
          aims to make personal money management easier for customers by
          providing an easy-to-use budgeting tool that enables them to
          successfully manage their funds.
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

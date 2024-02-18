import Typography from '@/components/Typography'
import React from 'react'

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="gap-3">
        <Typography variant="h1">Eduardo Sanchez</Typography>
        <Typography variant="h2">
          Founder & Full stack developer at Transakt.
        </Typography>
        <Typography variant="p">
          I like to build things for the web and mobile.
        </Typography>
      </div>
    </header>
  )
}

const MainContent = () => {
  return <main className="pt-24 lg:w-1/2 lg:py-24"></main>
}

export function HomePage() {
  return <div>index</div>
}

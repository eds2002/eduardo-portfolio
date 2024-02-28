import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eduardo Sanchez - Software Engineer',
  description: 'Expertise in developing engaging web and mobile applications.',
  tags: [
    'Software Engineer',
    'Web Development',
    'Mobile Applications',
    'Technology',
    'Fitness',
    'Personal Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-secondary-1">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

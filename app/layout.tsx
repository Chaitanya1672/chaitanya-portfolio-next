import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Chaitanya Portfolio',
  description:
    'Portfolio of Chaitanya, a full-stack web developer building modern web applications.',
  icons: {
    icon: '/Images/portfolio-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

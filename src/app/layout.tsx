import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { classes } from '@/utils/dom'
import '@/styles/globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '100 Days Note',
  description:
    'Discover true aspirations and goals in 100 days of repetitive goal writting.',
  icons: {
    icon: '/logo/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classes(raleway.className)}>{children}</body>
    </html>
  )
}

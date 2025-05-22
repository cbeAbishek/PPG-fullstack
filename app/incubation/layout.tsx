import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPGIT | Alumini ',
  description: 'Shaping the future through innovation, knowledge, and leadership',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

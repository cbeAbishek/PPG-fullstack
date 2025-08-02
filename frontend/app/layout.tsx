import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPG Institute of Technology',
  description: 'Shaping the future through innovation, knowledge, and leadership',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'PPG Institute of Technology',
    description: 'Shaping the future through innovation, knowledge, and leadership',
    url: 'https://www.ppgit.edu.in',
    siteName: 'PPGIT',
    images: [
      {
        url: 'https://raw.githubusercontent.com/cbeAbishek/PPG-fullstack/refs/heads/main/public/ppgmeta.jpg',
        width: 1200,
        height: 630,
        alt: 'PPG Institute of Technology - Shaping the Future',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPG Institute of Technology',
    description: 'Shaping the future through innovation, knowledge, and leadership',
    images: [
      'https://raw.githubusercontent.com/cbeAbishek/PPG-fullstack/refs/heads/main/public/ppgmeta.jpg',
    ],
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

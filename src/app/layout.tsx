import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Industrial Steel Fabrication | Premium Steel Solutions',
  description: 'Leading industrial fabrication company specializing in steel structures, storage tanks, pipelines, and industrial equipment. 25+ years of precision fabrication excellence.',
  keywords: 'steel fabrication, industrial fabrication, steel structures, storage tanks, pipelines, chimney, hopper, conveyor systems',
  authors: [{ name: 'Industrial Fabricators' }],
  openGraph: {
    title: 'Industrial Steel Fabrication | Premium Steel Solutions',
    description: 'Leading industrial fabrication company specializing in steel structures, storage tanks, pipelines, and industrial equipment.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-deep-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] , weight: ['300' , '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Carla Braga',
  description: 'Carla Braga is a software engineer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Pt-Br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}


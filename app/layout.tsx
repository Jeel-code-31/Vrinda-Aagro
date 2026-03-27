import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vrinda Aagro - Premium Food Manufacturing',
  description: 'Vrinda Aagro blends innovation with tradition to craft high-quality food products through advanced automation. Producing chutneys, pastes, and sauces with precision and excellence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Vrinda.png',
      },
      {
        url: '/Vrindaa.png',
      },
      {
        url: '/Vrindaa.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

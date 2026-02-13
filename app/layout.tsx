import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gineve Music | Luxury Live Music for Premium Events',
  description:
    'Cinematic live music experiences for weddings, private soirées, and high-end corporate events in Abuja.',
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

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cashflow — Move money simply',
  description: 'A modern peer-to-peer payments dashboard.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}

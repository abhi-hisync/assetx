import './globals.css'
import { ReactNode } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'AssetX',
  description: 'Modern asset management platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  )
}



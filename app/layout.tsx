import type { Metadata } from 'next'
import { Edu_NSW_ACT_Foundation } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'Our Recipes',
  description: 'here I gathered all my favorite recipes in one spot',
}

const edu = Edu_NSW_ACT_Foundation({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={edu.className}>
        {children}
      </body>
    </html>
  )
}

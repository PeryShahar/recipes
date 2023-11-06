import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Our Recipes',
  description: 'here I gathered all my favorite recipes in one spot',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

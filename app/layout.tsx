import type { Metadata } from 'next'
import { Edu_NSW_ACT_Foundation } from 'next/font/google'
import Navbar from '@/components/Navbar'
import styles from './page.module.css'
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
        <div className={styles.header_box}>
          <h1 className={styles.title}>OUR RECIPES</h1>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}

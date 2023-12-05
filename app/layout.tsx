import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import { Footer, Navbar } from '@/components'

const rubik =  Rubik({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fire Wheels',
  description: 'THe best car showroom in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className + ' relative'}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="mainContainer">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}

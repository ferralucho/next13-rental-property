import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Property rent app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <NavBar />
      </body>
    </html>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Shared/Navigation'
import HomePage from '@/components/HomePage/HomePage'
import Footer from '@/components/Shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <Navigation></Navigation>
      <HomePage></HomePage>
      
      <Footer></Footer>
    </>
  )
}

'use client';
import { Inter } from '@next/font/google'
import About from '@/components/About';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Intro/>
      <About/>
      <Services/>
      <Contact/>
    </main>
  )
}

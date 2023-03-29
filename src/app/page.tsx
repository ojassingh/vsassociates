'use client';
import { Inter } from '@next/font/google'
import About from '@/components/About';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head><title>VS Associates</title></Head>
    <div>
      <Intro/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

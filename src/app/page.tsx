'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import law from '../../public/law.jpg'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className='h-screen'>
        <div className='flex gap-4'>
        <div id='image' className='flex-1'>
          <Image alt='' className='h-screen' src={law}/>
        </div>
        <div className='flex-2'>
        <Navbar/>
        <div className='grid place-content-center h-screen p-20 gap-10'>
          <h1 className='text-6xl font-bold text-secondary'>Vandana Singh and Associates</h1>
          <p className='text-primary text-xl'>
          Welcome to Vandana Singh and Associates, a premier corporate law business based in Delhi, India. Founded and owned by company secretary Vandana Singh, our firm offers comprehensive legal services to businesses operating internationally.
          </p>
          <div className='flex'>
          <motion.button whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }} className='px-4 py-3 bg-secondary text-white text-lg rounded-3xl'>
            Contact us
          </motion.button>
          </div>
        </div>
        </div>
        </div>
      </div>
      <About/>
    </main>
  )
}

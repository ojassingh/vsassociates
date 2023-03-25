import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className='p-20 flex flex-wrap gap-4'>
      <div id='image' className='flex-1'>
        
      </div>
      <div className='flex-1 p-20'>
      <h1 className='text-6xl font-bold text-black'>Vandana Singh and Associates</h1>
      <p className='text-primary text-xl'>
        Corporate law blah blah blah
      </p>
      <button className='px-4 py-3 bg-secondary text-white text-lg rounded-3xl'>
        Contact me
      </button>
      </div>
      </div>
    </main>
  )
}

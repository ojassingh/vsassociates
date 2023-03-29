'use client';
import Image from 'next/image'
import law from '../../public/law.jpg'
import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Head from 'next/head';

export default function Intro(){
    return(<div id='home' className=''>
      <Head><title>VS Associates</title></Head>
    <div className='lg:flex flex-wrap gap-4'>
    <div id='image' className='flex-1 xs:hidden sm:hidden lg:block xl:block'>
      <Image alt='' className='' src={law}/>
    </div>
    <div className='flex-2'>
    <Navbar/>
    <div className='grid place-content-center  p-20 gap-10'>
      <h1 className='text-6xl font-bold text-secondary'>Vandana Singh and Associates</h1>
      <p className='text-primary text-xl'>
      Welcome to Vandana Singh and Associates, a premier corporate law business based in Delhi, India. Founded and owned by company secretary Vandana Singh, our firm offers comprehensive legal services to businesses operating internationally.
      </p>
      <div className='flex'>
      <motion.a href='#contact' whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }} className='px-4 py-3 bg-secondary text-white text-lg rounded-3xl'>
        Contact us
      </motion.a>
      </div>
    </div>
    </div>
    </div>
  </div>)
}
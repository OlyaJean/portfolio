import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import download from './../assets/download.png'
import { assets } from '../assets/assets'

const Header = ({isDark}) => {

  

  return (
    <div  className='flex  flex-col justify-center  mx-10 md:mx-20 mt-52 p-10 gap-10 bg-slate-300 dark:bg-slate-500 dark:bg-opacity-40  rounded-3xl bg-opacity-40 shadow-xl  '>
       <div>
   <motion.h1
    initial={{y:-20, opacity:0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration:0.6, delay: 0.3}}
    className='text-sm md:text-xl lg:text-3xl font-Ovo  text-right'>Building the future of the web - <br /> one line of code at a time.</motion.h1>
        </div> 
       
        <motion.h1
         initial={{opacity:0}}
         whileInView={{opacity: 1}}
         transition={{duration:1.3, delay: 0.2}}
        className='text-center text-3xl md:text-5xl font-Outfit font-bold'><span className='text-red-600'>W</span>eb Developer</motion.h1>
        <motion.h1
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          transition={{duration:1.3, delay: 0.2}}
        className='text-center md:text-xl font-Outfit'>Hi! My name is Olga Jean-Baptiste and I am a Full Stack developer based in North Carolina, USA.</motion.h1>
      

        <div className='flex gap-5 justify-center'>
        <motion.a
        initial={{y:30, opacity:0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration:0.6, delay: 0.7}}
        href="#contact" className='text-xs md:text-sm  flex gap-2 items-center bg-slate-400 py-2 px-3 rounded-3xl bg-opacity-50 shadow-xl'>Contact Me<Image alt='' src={isDark? assets.arrowStraightWhite : assets.arrowStraight} width='20'/></motion.a>
        <motion.a 
         initial={{y:30, opacity:0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration:0.6, delay: 1}}
        href="/resume.pdf" download className='text-xs md:text-sm  flex gap-2 items-center bg-slate-400 py-2 px-3 rounded-3xl bg-opacity-50 shadow-xl'>My resume<Image src={isDark? assets.downloadWhite : download} alt='' width='20'/></motion.a>
        </div>
      
    </div>
  )
}

export default Header

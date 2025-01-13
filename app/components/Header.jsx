import Image from 'next/image'
import React from 'react'

import download from './../assets/download.png'
import { assets } from '../assets/assets'

const Header = () => {

  

  return (
    <div  className='flex  flex-col justify-center  mx-10 md:mx-20 mt-52 p-10 gap-10 bg-slate-300 rounded-3xl bg-opacity-40 shadow-xl text-slate-700 '>
       <div>
   <h1 className='text-sm md:text-xl lg:text-3xl font-Ovo  text-right'>Building the future of the web - <br /> one line of code at a time.</h1>
        </div> 
        <h1 className='text-center text-3xl md:text-5xl font-Outfit font-bold'><span className='text-red-600'>W</span>eb Developer</h1>
        <h1 className='text-center md:text-xl font-Outfit'>Hi! My name is Olga Jean-Baptiste and I am a Full Stack developer based in North Carolina, USA.</h1>

        <div className='flex gap-5 justify-center'>
        <a href="#contact" className='text-xs md:text-sm  flex gap-2 items-center bg-slate-400 py-2 px-3 rounded-3xl bg-opacity-50 shadow-xl'>Contact Me<Image alt='' src={assets.arrowStraight} width='20'/></a>
        <a href="/resume.pdf" download className='text-xs md:text-sm  flex gap-2 items-center bg-slate-400 py-2 px-3 rounded-3xl bg-opacity-50 shadow-xl'>My resume<Image src={download} alt='' width='20'/></a>
        </div>
      
    </div>
  )
}

export default Header

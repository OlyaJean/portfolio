import Image from 'next/image'
import React from 'react'
import me from './../assets/meme.jpeg'
import arrowRight from './../assets/arrowRight.png'
import download from './../assets/download.png'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen px-10 gap-5'>
       <div>
       <Image src={me} width="200" alt='' className='rounded-full'/>
        </div> 
        <h1 className='text-center text-3xl'>Web Developer</h1>
        <h1 className='text-center'>Hi! My name is Olya Jean and I am a full stack developer located in North Carolina, USA.</h1>

        <div className='flex gap-5'>
        <a href="#contact" className='flex gap-2 items-center bg-slate-500 py-2 px-3 rounded-3xl bg-opacity-60 shadow-xl'>Contact Me<Image alt='' src={arrowRight} width='20'/></a>
        <a href="/resume.pdf" download className='flex gap-2 items-center bg-slate-500 py-2 px-3 rounded-3xl bg-opacity-60 shadow-xl'>My resume<Image src={download} alt='' width='20'/></a>
        </div>
      
    </div>
  )
}

export default Header

import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({isDark}) => {
  return (
    <div>
      <div className='mt-10 md:mt-20 '>
      <h1 className='text-center font-Outfit italic text-2xl md:text-4xl font-extrabold '><span className='text-red-500 text-4xl font-extrabold'>//</span>O<span className='text-red-500 text-5xl font-extrabold'>.</span>Jean <br className='leading-none'/> </h1>
      <div className='flex justify-center gap-3 mt-5'>
        <Image src={isDark? assets.mailWhite : assets.mail} alt='' width='' className='w-7'/> olga_jb@yahoo.com
      </div>
      </div>
     
     <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>	&#174; 2025 Olga Jean-Baptiste. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/OlyaJean">GitHub</a></li>
            <li><a target="_blank" href="">Instagram</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/olga-jean-baptiste-8ab9b0313/">LinkedIn</a></li>
            <li><a target="_blank" href="">Threads</a></li>
        </ul>
     </div>
    </div>
  )
}

export default Footer

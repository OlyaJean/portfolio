'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import arrowRight from './../assets/arrowRight.png'
import arrowRightWhite from './../assets/arrowRightWhite.png'
import moonBlack from './../assets/moonBlack.png'
import moonWhite from './../assets/moonWhite.png'
import menu from './../assets/menu.png'
import menuWhite from './../assets/menuWhite.png'
import close from './../assets/close.png'
import closeWhite from './../assets/closeWhite.png'

const Navbar = ({isDark,setIsDark}) => {

    const [scrolled, setScrolled] = useState(false)
    const menuRef = useRef()
    const closeMenuFunc = () => {
       menuRef.current.style.transform = 'translateX(15rem)'
    }
    const openMenuFunc = () => {
        menuRef.current.style.transform = 'translateX(-15rem)'
     }

     useEffect(()=>{

      window.addEventListener('scroll', ()=>{
        if(scrollY > 50){
            setScrolled(true)
        }else{
          setScrolled(false)
        }
      })
     },[])
  return (
    <div id="home" className='-z-10 scroll-mt-48' >
      <nav className={`flex justify-between items-center py-1 md:py-3 px-10 fixed z-50 w-full top-0 ${scrolled ? 'backdrop-blur-lg bg-slate-500 shadow-lg bg-opacity-5 rounded-[_0_0_15px_15px]' : ""}`}>
      <a href="#home">
       <button className=' font-Outfit italic text-2xl md:text-4xl font-extrabold '><span className='text-red-500 text-4xl font-extrabold'>//</span>O<span className='text-red-500 text-5xl font-extrabold'>.</span>Jean <br className='leading-none'/> </button>
      </a>

      <ul className={`hidden md:flex gap-5  px-5 py-3 rounded-3xl  ${scrolled ? "" : " bg-opacity-30 bg-slate-100 shadow-xl"}`}>
        <li className='text-red-600 font-semibold'><a href="#home">Home</a></li>
        <li ><a href="#about">About me</a></li>
        <li ><a href="#services">Services</a></li>
        <li ><a href="#work">My work</a></li>
        <li ><a href="#contact">Contact me</a></li>
      </ul>


      <div className='flex gap-5 items-center lg:w-48'>
        <button onClick={()=> setIsDark(prev => !prev)}>
            <Image src={isDark? moonWhite : moonBlack} alt='' width='' className='w-7 md:w-8'/>
        </button>
        <a href="#contact" className='hidden lg:flex items-center gap-5 font-Ovo  bg-slate-100 bg-opacity-60 rounded-3xl px-5 py-2 border-[0.5px] border-gray-400 font-semibold text-red-600'>Contact<Image src={isDark? arrowRightWhite : arrowRight} alt='' width='30'/></a>
        <button onClick={openMenuFunc} className='md:hidden'>
            <Image src={isDark? menuWhite : menu} alt='' width='' className='w-7'/>
        </button>
      </div>
      </nav>


      {/*  ----- Mobile Menu----    */ }


      <ul ref={menuRef} className='flex md:hidden flex-col gap-5 z-50 bg-neutral-100 dark:bg-neutral-800 p-5 rounded-[_24px_0_0_24px] shadow-xl dark:shadow-neutral-600 fixed top-0 -right-60 bottom-0 h-screen w-60 transition duration-500'>
        <li onClick={closeMenuFunc} ><a href="#home">Home</a></li>
        <li onClick={closeMenuFunc} ><a href="#about">About me</a></li>
        <li onClick={closeMenuFunc} ><a href="#services">Services</a></li>
        <li onClick={closeMenuFunc} ><a href="#work">My work</a></li>
        <li onClick={closeMenuFunc} ><a href="#contact">Contact me</a></li>
        <button onClick={closeMenuFunc}>
            <Image src={isDark? closeWhite : close} alt='' width='' className='absolute right-5 top-5 w-7'/>
        </button>
      </ul>
     


    </div>
  )
}

export default Navbar

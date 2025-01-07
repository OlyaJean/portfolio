'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import logo from './../assets/logo.png'
import arrowRight from './../assets/arrowRight.png'
import moonBlack from './../assets/moonBlack.png'
import menu from './../assets/menu.png'
import close from './../assets/close.png'

const Navbar = () => {

    const menuRef = useRef()
    const closeMenuFunc = () => {
       menuRef.current.style.transform = 'translateX(15rem)'
    }
    const openMenuFunc = () => {
        menuRef.current.style.transform = 'translateX(-15rem)'
     }
  return (
    <div className='flex justify-between items-center py-5 px-10 fixed z-50 w-full '>
      <a href="#home">
       <button className='text-xl lg:w-48'>Olya.Jean</button>
      </a>

      <ul className='hidden md:flex gap-5 bg-opacity-30 bg-slate-100 px-5 py-3 rounded-3xl shadow-xl'>
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about">About me</a></li>
        <li ><a href="#services">Services</a></li>
        <li ><a href="#work">My work</a></li>
        <li ><a href="#contact">Contact me</a></li>
      </ul>


      <div className='flex gap-5 items-center lg:w-48'>
        <button>
            <Image src={moonBlack} alt='' width='30'/>
        </button>
        <a href="#contact" className='hidden lg:flex items-center gap-5 font-Ovo  bg-slate-200 bg-opacity-30 rounded-3xl px-5 py-2 shadow-xl'>Contact<Image src={arrowRight} alt='' width='30'/></a>
        <button onClick={openMenuFunc} className='md:hidden'>
            <Image src={menu} alt='' width='30'/>
        </button>
      </div>



      {/*  ----- Mobile Menu----    */ }


      <ul ref={menuRef} className='flex md:hidden flex-col gap-5 z-50 bg-neutral-100 p-5 rounded-[_24px_0_0_24px] shadow-xl fixed top-0 -right-60 bottom-0 h-screen w-60 transition duration-500'>
        <li onClick={closeMenuFunc} ><a href="#home">Home</a></li>
        <li onClick={closeMenuFunc} ><a href="#about">About me</a></li>
        <li onClick={closeMenuFunc} ><a href="#services">Services</a></li>
        <li onClick={closeMenuFunc} ><a href="#work">My work</a></li>
        <li onClick={closeMenuFunc} ><a href="#contact">Contact me</a></li>
        <button onClick={closeMenuFunc}>
            <Image src={close} alt='' width='30' className='absolute right-5 top-5'/>
        </button>
      </ul>
     


    </div>
  )
}

export default Navbar

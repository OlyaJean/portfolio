import Image from 'next/image'
import React from 'react'
import logo from './../assets/logo.png'
import arrowRight from './../assets/arrowRight.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-10 fixed z-50 w-full'>
      <a href="">
        <Image src={logo} alt='' width="70"/>
      </a>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <div>
        <a href="#contact"><Image src={arrowRight} alt='' width='50'/></a>
      </div>
    </div>
  )
}

export default Navbar

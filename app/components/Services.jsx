import React from 'react'
import {  assets, serviceData } from '../assets/assets'
import Image from 'next/image'

const Services = () => {
  return (
    <div id='services' className=' p-10 scroll-mt-20  bg-slate-300 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
      <h4 className='text-center text-2xl text-slate-700 mb-5'>What I offer</h4>
      <h1 className='text-center text-4xl text-slate-700 mb-5 '><span className='text-red-600'>M</span>y services</h1>
      <p className='text-center max-w-4xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, temporibus dignissimos, corporis impedit necessitatibus consectetur odio cupiditate voluptates sit tempora autem similique ab nemo facere incidunt nesciunt adipisci nihil repellat.</p>

      <div className='grid grid-cols-auto gap-5 my-10'>

       
            {serviceData.map(({icon,title,description,link} ,index)=>(
                <div key={index} className='border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:bg-opacity-35 duration-500 hover:shadow-black'>
                    <Image alt={title} width='' src={icon} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700 '>{title}:</h3>
                    <p className='text-gray-600 leading-5 '>{description}</p>
                    <a href={link} className='flex items-center gap-1 text-gray-600 text-sm my-2'>read more <Image alt='arrow' width='' src={assets.arrowRight} className='w-5'/>
                    </a>
                </div>
            ))}
       

      </div>
    </div>
  )
}

export default Services

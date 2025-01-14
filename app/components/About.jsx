import Image from 'next/image'
import React from 'react'
import me from './../assets/meme.jpeg'
import { assets, myInfo, tools, toolsData } from '../assets/assets'


const About = () => {
  return (
    <div id='about' className='mb-10 md:mb-20 p-10 scroll-mt-20  bg-slate-300 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
        <h4 className='text-center text-2xl  mb-5'>Introduction</h4>
        <h1 className='text-center text-4xl '><span className='text-red-600'>A</span>bout me</h1>

        <div className='flex flex-col lg:flex-row items-center  lg:items-center my-10'>
            <Image alt='' width='' src={me} className='rounded-3xl mb-5 lg:mr-10 w-[200px] lg:w-[300px]'/>
            <div className='max-w-2xl'>
            <p className='flex-1 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, temporibus dignissimos, corporis impedit necessitatibus consectetur odio cupiditate voluptates sit tempora autem similique ab nemo facere incidunt nesciunt adipisci nihil repellat.</p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                {myInfo.map(({icon,title,description}, index)=>(
                    <li key={index} className='border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:bg-opacity-35 duration-500 hover:shadow-black'>
                        <Image alt={title} src={icon} width='' className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 '>{title}:</h3>
                        <p className='text-gray-600 text-sm '>{description}</p>
                    </li>
  
                ))}
            </ul>

            <h4 className='my-4 ml-6 font-semibold '>Tools I use:</h4>

            <ul className='flex gap-5'>
               {toolsData.map((tool,index)=>(
                <li className='border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:bg-opacity-35 duration-500 hover:shadow-black'
                 key={index}>
                    <Image src={tool} alt='ff' className='w-5 sm:w-7'/>
                </li>
               ))}
            </ul>

            </div>
        </div>
 
    </div>
  )
}

export default About

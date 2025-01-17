import Image from 'next/image'
import React from 'react'
import me from './../assets/meme.jpeg'
import { assets, myInfo, tools, toolsData } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <div
  
    id='about' className='mb-10 md:mb-20 p-10 scroll-mt-20  bg-slate-300  dark:bg-slate-500 dark:bg-opacity-40 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
        <motion.h4
          initial={{x:-30, opacity:0}}
          whileInView={{x:0, opacity: 1}}
          transition={{duration:0.6}}
        className='text-center text-2xl  mb-5'>Introduction</motion.h4>
        <motion.h1
          initial={{x:-30, opacity:0}}
          whileInView={{x:0, opacity: 1}}
          transition={{duration:0.6}}
        className='text-center text-4xl '><span className='text-red-600'>A</span>bout me</motion.h1>

        <div className='flex flex-col lg:flex-row items-center  lg:items-center my-10'>
            <Image alt='' width='' src={me} className='rounded-3xl mb-5 lg:mr-10 w-[200px] lg:w-[300px]'/>
            <div className='max-w-2xl'>
            <motion.p
             initial={{y:-30, opacity:0}}
             whileInView={{y:0, opacity: 1}}
             transition={{duration:0.6, delay:0.3}}
            className='flex-1 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, temporibus dignissimos, corporis impedit necessitatibus consectetur odio cupiditate voluptates sit tempora autem similique ab nemo facere incidunt nesciunt adipisci nihil repellat.</motion.p>

            <motion.ul
               initial={{y:-30, opacity:0}}
               whileInView={{y:0, opacity: 1}}
               transition={{duration:0.8, delay:0.5, type:'spring'}}
               
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                {myInfo.map(({icon,title,description}, index)=>(
                    <li key={index} className='border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:bg-opacity-35 duration-500 hover:shadow-black dark:hover:shadow-neutral-300'>
                        <Image alt={title} src={icon} width='' className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}:</h3>
                        <p className='text-gray-600 text-sm dark:text-white'>{description}</p>
                    </li>
  
                ))}
            </motion.ul>

            <motion.h4
              initial={{opacity:0}}
              whileInView={{opacity: 1}}
              transition={{duration:0.6, delay:0.3}}
            className='my-4 ml-6 font-semibold '>Tools I use:</motion.h4>

            <motion.ul
              initial={{y:30, opacity:0}}
              whileInView={{y:0, opacity: 1}}
              transition={{duration:1, delay:0.7, type:'spring'}}
            className='flex gap-5'>
               {toolsData.map((tool,index)=>(
                <li className='border-[0.5px] rounded-xl border-gray-400 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:bg-opacity-35 duration-500 hover:shadow-black  dark:hover:shadow-neutral-300'
                 key={index}>
                    <Image src={tool} alt='ff' className='w-5 sm:w-7'/>
                </li>
               ))}
            </motion.ul>

            </div>
        </div>
 
    </div>
  )
}

export default About

import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = ({isDark}) => {
  return (
    <div id='work' className='mb-10 md:mb-20 p-10 scroll-mt-20  bg-slate-300  dark:bg-slate-500 dark:bg-opacity-40 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
       <motion.h4
       initial={{x:-30, opacity:0}}
       whileInView={{x:0, opacity: 1}}
       transition={{duration:0.6}}
       className='text-center text-2xl  mb-5'>My portfolio</motion.h4>
      <motion.h1
             initial={{x:-30, opacity:0}}
             whileInView={{x:0, opacity: 1}}
             transition={{duration:0.6}}
      className='text-center text-4xl  mb-5 '><span className='text-red-600'>M</span>y latest work</motion.h1>
      <motion.p 
         initial={{y:-30, opacity:0}}
         whileInView={{y:0, opacity: 1}}
         transition={{duration:0.6, delay:0.3}}
      className='text-center max-w-4xl mx-auto'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development!</motion.p>

      <motion.div 
      initial={{y:30, opacity:0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration:1.3, delay:0.8, type:'spring'}}
      className='grid grid-cols-auto gap-5 my-10'>
        {workData.map((project,index)=>(
          <motion.div
          whileHover={{scale:1.05}}
          key={index} className='bg-slate-600 shadow-md shadow-slate-700 aspect-square bg-center rounded-xl relative cursor-pointer group '  >
            <a  href={project.link}><div className='bg-white w-10/12 rounded-md absolute bottom-1/4 left-1/2 -translate-x-1/2 py-3 px-5 gap-3  flex items-center justify-between duration-500 group-hover:scale-[1.05] hover:shadow-black hover:bg-opacity-85'>
            <div >
              <h3 className='my-4 font-semibold text-gray-700 leading-5 '>{project.title}</h3>
              <p className='text-gray-600 leading-5 '>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.arrowRight} alt='' width='' className='w-5'/>
              </div>
              </div></a>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
      initial={{ opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration:1.3, delay:0.8}}
      href="#contact" className='flex items-center gap-2 text-sm md:text-sm  font-Ovo  bg-slate-100 dark:bg-slate-800 bg-opacity-60 rounded-3xl px-5 py-2 border-[0.5px] border-gray-400 dark:border-slate-700 w-fit mx-auto hover:bg-lightHover dark:hover:bg-black dark:duration-500 duration-500 '>Show more<Image src={isDark? assets.arrowStraightWhite : assets.arrowStraight} alt='' width='30'/></motion.a>
 
    </div>
  )
}

export default Work

import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='mb-10 md:mb-20 p-10 scroll-mt-20  bg-slate-300 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
       <h4 className='text-center text-2xl  mb-5'>My portfolio</h4>
      <h1 className='text-center text-4xl  mb-5 '><span className='text-red-600'>M</span>y latest work</h1>
      <p className='text-center max-w-4xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, temporibus dignissimos, corporis impedit necessitatibus consectetur odio cupiditate voluptates sit tempora autem similique ab nemo facere incidunt nesciunt adipisci nihil repellat.</p>

      <div className='grid grid-cols-auto gap-5 my-10'>
        {workData.map((project,index)=>(
          <div key={index} className='bg-slate-600 shadow-md shadow-slate-700  aspect-square bg-center rounded-xl relative cursor-pointer group '  >
            <a  href={project.link}><div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 gap-3  flex items-center justify-between duration-500 group-hover:bottom-7 hover:shadow-black hover:bg-opacity-85'>
            <div >
              <h3 className='my-4 font-semibold text-gray-700 leading-5 '>{project.title}</h3>
              <p className='text-gray-600 leading-5 '>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.arrowRight} alt='' width='' className='w-5'/>
              </div>
              </div></a>
          </div>
        ))}
      </div>

      <a href="#contact" className='flex items-center gap-2 text-sm md:text-sm  font-Ovo  bg-slate-100 bg-opacity-60 rounded-3xl px-5 py-2 border-[0.5px] border-gray-400 w-fit mx-auto hover:bg-lightHover duration-500 '>Show more<Image src={assets.arrowStraight} alt='' width='30'/></a>
 
    </div>
  )
}

export default Work

import Image from 'next/image'
import React from 'react'
import me from './../assets/meme.jpeg'
import { assets, myInfo } from '../assets/assets'


const About = () => {
  return (
    <div id='about' className=' p-10 scroll-mt-20  bg-slate-100 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>
        <h4 className='text-center text-2xl text-slate-700 mb-5'>Introduction</h4>
        <h1 className='text-center text-4xl text-slate-700'>About me</h1>

        <div className='flex flex-col lg:flex-row items-center lg:items-start my-10'>
            <Image alt='' width='' src={me} className='rounded-3xl mb-5 mr-5 w-[200px] lg:w-[300px]'/>
            <div>
            <p className='flex-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, temporibus dignissimos, corporis impedit necessitatibus consectetur odio cupiditate voluptates sit tempora autem similique ab nemo facere incidunt nesciunt adipisci nihil repellat.</p>

            <ul>
                {myInfo.map(({icon, title,description,index})=>(
                    <li key={index}>
                        <Image alt={title} src={icon} width='50'/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </li>
  
                ))}
            </ul>
            </div>
        </div>
 
    </div>
  )
}

export default About

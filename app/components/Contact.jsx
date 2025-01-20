'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Contact = () => {

    const [result,setResult] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...')
        const formData = new FormData(event.target);
    
        formData.append("access_key", '5101efe0-2225-4b4e-82fd-14e14c112c8d');
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult("Email Sent Successfully");
          event.target.reset();
        }else{
            console.log("Error", res);
            setResult(res.message);
        }
      };
    


  return (
    <div id='contact' className=' p-10 scroll-mt-20  bg-slate-300  dark:bg-slate-500 dark:bg-opacity-40 rounded-3xl bg-opacity-40 shadow-xl mx-10 md:mx-20'>

<motion.h4
   initial={{x:-30, opacity:0}}
   whileInView={{x:0, opacity: 1}}
   transition={{duration:0.6}}
className='text-center text-2xl  mb-5'>Connect with me</motion.h4>
<motion.h1
initial={{x:-30, opacity:0}}
whileInView={{x:0, opacity: 1}}
transition={{duration:0.6}}
className='text-center text-4xl  mb-5 '><span className='text-red-600'>G</span>et in touch</motion.h1>
<motion.p
initial={{y:-30, opacity:0}}
whileInView={{y:0, opacity: 1}}
transition={{duration:0.6, delay:0.3}}
className='text-center max-w-4xl mx-auto'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development</motion.p>

<motion.form
 initial={{ opacity:0}}
 whileInView={{opacity: 1}}
 transition={{duration:1.3, delay:0.8}}
onSubmit={onSubmit} className='max-w-2xl mx-auto'>

    <div className='grid grid-cols-auto gap-5 my-10'>
        <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400  rounded-lg bg-white' type="name" placeholder='Enter your name' required/>
        <input name='emai' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400  rounded-lg bg-white' type="email" placeholder='Enter your email' required/>
    </div>
    <textarea  rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white mb-5'></textarea>
    <button type='submit' className='rounded-3xl px-5 py-2  w-max flex items-center justify-between gap-2 bg-slate-800 text-white  mx-auto hover:bg-black duration-500'>Submit now<Image src={assets.arrowStraightWhite} alt='' width='' className='w-5'/></button>
</motion.form>
<span>{result}</span>
    </div>
  )
}

export default Contact

'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {

  const [isDark, setIsDark] = useState(false);

  useEffect(()=>{
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
setIsDark(true)
}else{
  setIsDark(false)
}
  },[])

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }
  },[isDark])

  return (
    <div >
      <div className="h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Header isDark={isDark}/>
      </div>
      <About />
      <Services  isDark={isDark}/>
      <Work isDark={isDark}/>
      <Contact/>
      <Footer isDark={isDark}/>
    </div>
  );
}

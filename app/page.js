'use client'
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div >
      <div className="h-screen">
      <Navbar isDark={isDark}/>
      <Header/>
      </div>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

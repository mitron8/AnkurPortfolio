"use client"
import React from 'react'
import Nav from './Components/Nav'
import First from './Components/First'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



const page = () => {

  
  const notify=()=>{
    toast('🦄 You Are Downloading My Resume in (docx) Formate', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  
    

  }
  
  
  return (
    <div id='main'>
      <Nav></Nav>
      <First notify={notify}></First>
      <ToastContainer/>
      <Skill></Skill>
      <Projects></Projects>
      <Footer></Footer>
      
      
    </div>
  )
}

export default page

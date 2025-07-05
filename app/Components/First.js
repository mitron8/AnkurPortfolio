"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const First = (props) => {
  useGSAP(()=>{
    gsap.from(".flow",{
      y:50,
      opacity:0,
      duration:0.7,
      stagger:0.6
    },
    gsap.from("#MyImage",{
      delay:0.7,
      scale:0,
      opacity:0,
      duration:0.8
    })
  )


  })
  const notify=props.notify
  return (
    <div id='intro'>
        <div className='con'>
        <h1 className='flow'>Hi, I'm <span className='green'>Ankur Kumar Sah</span> </h1>
        <p className='flow'>Full Stack Web Developer </p>
        <h3 className='flow'>I build responsive,<br></br> user-focused websites 
            that bring ideas to life.</h3>
        
        <div className='btn'>
        <a href="/assets/AnkurCV.docx" download>
  <button id='resume' onClick={notify}>Download Resume</button>
</a>

            <button id='hire'>Hire ME !</button>

        </div>
        </div>
        <div id='MyImage'></div>
    </div>

  )
}

export default First

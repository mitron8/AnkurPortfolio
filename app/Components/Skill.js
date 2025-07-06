import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';




const Skill = () => {
  useGSAP(()=>{
    gsap.from("p",{
     


    }
  )

  })
  return (
    <div className='skill'>
        <div className='tech'>
            
        </div>
        <div className='line'>
        </div>
        <div className='services'>
          <h1 >Services</h1>
          <p><span className='green'>Front-End Development:</span> Pixel-perfect, responsive interfaces.</p>
          <p><span className='green'>UI/UX Design: </span>Clean, intuitive, and user-centered designs.</p>
          <p><span className='green'>Web Optimization: </span>Fast, accessible, and SEO-friendly websites.</p>
          <p><span className='green'>Custom Development:</span> Tailored solutions built to meet your needs.</p>

        </div>
  
    </div>
  )
}

export default Skill

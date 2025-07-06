import React from 'react'

const Projects = () => {
  return (
    <div  id='project'>
      <a href='https://github.com/mitron8/OEKA-V1'>
        <div className='p-box'>
        <div className='p-img one'></div>
        <div className='p-con'>
            <h1>OEKA</h1>
            <p>Tech Stack:<span className='green'>Python:Tkinter,TTK,Powered by Groq's LLaMA 3 70B model via LangChain</span></p>
        </div>
        </div>
        </a>
        <a href='https://6851cc366350469dd94f4359--inspiring-monstera-dfd0c8.netlify.app/'>
         <div className='p-box'>
        <div className='p-img two '></div>
        <div className='p-con'>
            <h1>Sah Weather App</h1>
            <p>Tech Stack: <span className='green'>HTML5,CSS3,JAVA SCRIPT:Async,Fetch,OpenWeathermap api</span></p>
        </div>
        </div>
        </a>
        <a href='https://sahkitchen.netlify.app/'>
         <div className='p-box '>
        <div className='p-img three'></div>
        <div className='p-con'>
            <h1>Sah's Kitchen</h1>
           <p>Tech Stack: <span className='green'>HTML5,CSS3:GSAP,JAVA SCRIPT</span></p>
        </div>
        </div>
        </a>

      
    </div>
  )
}

export default Projects

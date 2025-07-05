import React from 'react'

const First = () => {
  return (
    <div id='intro'>
        <div className='con'>
        <h1>Hi, I'm <span className='green'>Ankur Kumar Sah</span> </h1>
        <p>Full Stack Web Developer </p>
        <h3>I build responsive,<br></br> user-focused websites 
            that bring ideas to life.</h3>
        
        <div className='btn'>
        <a href="/assets/AnkurCV.docx" download>
  <button id='resume'>Download Resume</button>
</a>

            <button id='hire'>Hire ME !</button>

        </div>
        </div>
        <div id='MyImage'></div>
    </div>

  )
}

export default First

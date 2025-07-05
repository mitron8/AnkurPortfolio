import React from 'react'
import Nav from './Components/Nav'
import First from './Components/First'
import Skill from './Components/Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';



const page = () => {
  
  
  return (
    <div id='main'>
      <Nav></Nav>
      <First></First>
      <Skill></Skill>
      
      
    </div>
  )
}

export default page

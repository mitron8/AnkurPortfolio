import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>Portfolio</div>
        <div className='content'>
            <a href='#home'><h4>Home</h4></a>
            <a href='#about'><h4>About</h4></a>
            <a href='#skill'><h4>Skill</h4></a>
            <a href='#project'><h4>Projects</h4></a>
            <a href='https://www.linkedin.com/in/ankur-kumar-sah-36b590322/'>
            <button >Hire Me</button>
            </a>

        </div>
    </div>
  )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='social-nav'>
      <ul className='social-links'>
      <Link to='https://github.com/Miacarmen' style={{ textDecoration: 'none' }}><li>GH</li></Link>
        <Link to='https://www.linkedin.com/in/maitreya-carmen-7750a6b8/' style={{ textDecoration: 'none' }}><li>LI</li></Link>
      </ul>
    </div>
  )
}

export default NavBar
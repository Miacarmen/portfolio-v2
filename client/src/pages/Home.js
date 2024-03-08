import React from 'react'

import HomeNav from '../components/Navigation/HomeNav.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
  return (
    <div className='main-container'>
        <HomeNav />
        <div className='grid-container'>
            
            <div className='col-1'>
            <h1 className='special'>MIA</h1>
            <h1 className='special'>CARMEN</h1>
            <p className='tagline'>Full Stack Developer / UX/UI Designer</p>
            </div>
            <div className='col-2'>
                <ul className='home-nav'>
                    <li>
                        WORK
                    </li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Home
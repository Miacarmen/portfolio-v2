import React from 'react'

import NavBar from '../components/Navigation/NavBar.js';
import HomeNav from '../components/Navigation/HomeNav.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
  return (
    <div className='main-container'>
        <NavBar />
        <div className='grid-container'>
            
            <div className='col-1'>
            <h1 className='special'>MIA</h1>
            <h1 className='special'>CARMEN</h1>
            <p className='tagline'>Full Stack Developer / UX/UI Designer</p>
            </div>
            <div className='col-2'>
                {/* <ul className='home-nav'>
                    <li>
                        WORK
                    </li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul> */}
                <HomeNav />
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Home
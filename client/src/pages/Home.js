import React from 'react';
import { motion } from 'framer-motion';

import '../styles/home.styles.css';
import NavBar from '../components/Navigation/NavBar.js';
import HomeNav from '../components/Navigation/HomeNav.js';

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
          <HomeNav />
        </div>
      </div>
    </div>
  );
};

export default Home;

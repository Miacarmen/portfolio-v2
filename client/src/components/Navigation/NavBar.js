import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='nav-container'>
      {isHomePage ? (
        <div className='social-nav'>
          <ul className='social-links'>
            <Link
              to='https://github.com/Miacarmen'
              style={{ textDecoration: 'none' }}
            >
              <li>GH</li>
            </Link>
            <Link
              to='https://www.linkedin.com/in/maitreya-carmen-7750a6b8/'
              style={{ textDecoration: 'none' }}
            >
              <li>LI</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className='page-specific-nav'>
          {/* <Link to='/work' style={{ textDecoration: 'none' }}>
            <p>WORK</p>
          </Link> */}

          <Link to='/' className='home-link' style={{ textDecoration: 'none' }} >
            <p>HOME</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;

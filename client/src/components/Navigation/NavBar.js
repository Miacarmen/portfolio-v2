import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectPage = location.pathname.startsWith('/work/');

  return (
    <div className='nav-container'>
      {isHomePage && (
        <div
          className='social-nav'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            padding: '4rem 2rem',
            transform: 'rotate(-90deg)',
          }}
        >
          <ul
            className='social-links'
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1rem',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 300,
              fontSize: '15px',
            }}
          >
            <li>
              <a
                href='https://github.com/Miacarmen'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#f8f8ff', textDecoration: 'none' }}
              >
                GH
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/maitreya-carmen-7750a6b8/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#f8f8ff', textDecoration: 'none' }}
              >
                LI
              </a>
            </li>
          </ul>
        </div>
      )}

      {isProjectPage ? (
        <div className='work-link'>
          <Link to='/work' style={{ textDecoration: 'none' }}>
            <p>WORK</p>
          </Link>
        </div>
      ) : (
        !isHomePage && (
          <div className='home-link'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <p>HOME</p>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default NavBar;

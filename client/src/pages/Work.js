import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDownShort } from 'react-icons/bs';

import '../styles/work.styles.css';
import linkData from '../data/project-data.json';

const Work = ({ linkData }) => {

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleWheel = () => {
      setShowScrollIndicator(false); // Hide the arrow when scrolling starts
      window.removeEventListener('wheel', handleWheel);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='work-container'>
      <div className='work-grid-container'>
        <div className='col-1-4'>
          <h1>WORK</h1>
          <p className='work-tagline'>
            A showcase of my work, varying from Graphic Design, Web Development,
            and Product Branding
          </p>
        </div>
       
        <div className='col-2-4'>
          {linkData.map((data) => (
            <Link
              key={data.id}
              to={{ pathname: `/work/${data.id}` }}
              className='custom-link'
            >
              <h2 className='link-title'>{data.title}</h2>
              <p className='link-desc'>{data.subtitle}</p>
            </Link>
          ))}

          {showScrollIndicator && (
            <div className='col-3-4' id='scrollIndicator'>
              <BsArrowDownShort style={{ width: '28px', height: '28px' }} />
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Work;

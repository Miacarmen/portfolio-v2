import React from 'react'

const Home = () => {
  return (
    <div className='main-container'>
        {/* <div className='col-1'>
                <h2>GH</h2>
            </div> */}
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
    </div>
  )
}

export default Home
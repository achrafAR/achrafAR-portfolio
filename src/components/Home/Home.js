import React from 'react' 
import './Home.css';
import Navbar from '../Navbar/Navbar.js';
import MySelf from '../MySelf/MySelf.js';

function Home() {
  return (
    <div className='home-navbar-mySlef'>
        <Navbar/>
        <MySelf/>
    </div>
  )
}

export default Home
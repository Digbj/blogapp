import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="container">
     <Link to='/' id='A1'><div>
        <span id="S1">Prime</span>
        <span id="S2">Blog</span>
      </div></Link> 
      <div>
        <li onClick={() => scrollToSection('about')}>About</li>
    <Link to='/favu' className='link1'><li>Favorites</li></Link>  
        <li onClick={() => scrollToSection('about')}>Contact Us</li>
      </div>
    </div>
  );
};

export default Navigation;

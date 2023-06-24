import React from "react";
import Post from "./post";

const Main=()=>{
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <>
        <div className="main">
            <p>Blogging the Tech world</p>
            <p>Blog Project</p>
            <button className="mainb" onClick={() => scrollToSection('main')}>Explore</button>
                
        </div>
        <Post/>
        </>
        
    )
}
export default Main;

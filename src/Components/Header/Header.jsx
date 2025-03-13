import React from 'react'
import './Header.css'
import my_img from '../../assets/my_img.jpg'

const Header = () => {
  return (
    <div className= 'Header'>
        <img src={my_img}  className="round-image"/>
        <h1><span>I'm Suwasthiga Nagendramoorthy</span></h1>
        <p>A passionate Full-Stack Developer and Embedded Systems Enthusiast. Explore my work to see how I blend software and hardware to create impactful digital solutions!</p>
         <div className="Header-action">
            <div className="Header-connect">Connect with me</div>
            <div className="Header-resume">My resume</div>
         </div>
    </div>
  )
}

export default Header
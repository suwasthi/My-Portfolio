import React from 'react'
import './Header.css'
import my_img from '../../assets/my_img.jpg'

const Header = () => {
  return (
    <div className= 'Header'>
        <img src={my_img}  className="round-image"/>
        <h1><span>I'm Suwasthiga Nagendramoorthy</span></h1>
        <p>I'm an undergraduate Computer Science and Engineering student at the University of Moratuwa, passionate about technology, problem-solving, and innovation.</p>
         <div className="Header-action">
            <div className="Header-connect">Connect with me</div>
            <div className="Header-resume">My resume</div>
         </div>
    </div>
  )
}

export default Header
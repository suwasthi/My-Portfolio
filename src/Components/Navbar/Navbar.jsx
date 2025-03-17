import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className="navbar">
      <img src={logo} className='nav-logo'/>
        <u1 className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'><p className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#About'><p className={menu === "About" ? "active" : ""} onClick={() => setMenu("About")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Achievements'><p className={menu === "Achievements" ? "active" : ""} onClick={() => setMenu("Achievements")}>Achievements</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#MyProject'><p className={menu === "MyProject" ? "active" : ""} onClick={() => setMenu("MyProject")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact</p></AnchorLink></li>

        </u1>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar
import React from 'react'
import './About.css'
import icon from '../../assets/icon.png'


const About = () => {
  return (
    <div id='About' className='About'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={icon}/>
        </div>
        <div className="about-section">
          <div className="about-para">
            <p>I'm passionate about building innovative digital solutions. With a strong interest in full-stack web development, embedded systems, and AI, I love exploring the intersection of software and hardware.</p>
            <p>I enjoy working on projects that blend creativity with functionality, whether it’s developing responsive web applications, designing IoT systems, or diving into computer vision and robotics. My goal is to continuously learn, innovate, and contribute to impactful tech solutions.</p>
          </div>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>Python</p><hr style={{width: "85%"}}/></div>
            <div className="about-skill"><p>C++</p><hr style={{width: "75%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "90%"}}/></div>
            <div className="about-skill"><p>React</p><hr style={{width: "90%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width: "85%"}}/></div>
            <div className="about-skill"><p>MySQL</p><hr style={{width: "100%"}}/></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{width: "80%"}}/></div>

          </div>
        
    </div>
  )
}

export default About
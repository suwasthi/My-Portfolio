import React from 'react'
import './Contact.css'
import icon from '../../assets/icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className='Contact'> 
          <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={icon}/>
          </div>
          <div className="contact-section">
            <div className="contact-left">
                <h1>Contact Me</h1>
                <p>Feel free to reach out for collaborations, inquiries, or just to say hello! I'm always open to new opportunities and meaningful conversations.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />  <p>Suwasthimoorthy19@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faPhone} className="icon" />  <p>+94-770784782</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> <p>Jaffna,Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>
                <button className="contact-submit">Submit Now</button>
            </form>
          </div>
    </div>
  )
}

export default Contact
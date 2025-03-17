import React from 'react'
import './Achievements.css'
import icon from '../../assets/icon.png'
import Achievements_data from '../../assets/Achievements'


const Achievements = () => {
  return (
    <div id='Achievements' className='achievements'>
        <div className="achievements-title">
            <h1>My Achievements</h1>
            <img src={icon}/>
        </div>
        <div className="achievements-container">
            {Achievements_data.map((achievements,index)=>{
                return <div key={index} className='achievements-format'>
                    <h3>{achievements.a_name}</h3>
                    <p>{achievements.a_desc}</p>
                    <img src={achievements.img_src} className="achievements-image"/>

                    <ul className="achievements-details">
                        {achievements.details.map((detail, i) => (
                            <li key={i}>
                                {Object.values(detail)[0]}: {Object.values(detail)[1]}
                            </li>
                    ))}
                    </ul>
                    </div>
            })}
        </div>
        <div className="showmore">
            <p>Show More</p>
        </div>
    </div>
  )
}

export default Achievements
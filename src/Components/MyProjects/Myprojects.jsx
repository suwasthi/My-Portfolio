import React from 'react'
import './Myprojects.css'
import { FaGithub } from 'react-icons/fa'
import icon from '../../assets/icon.png'
import myprojects_data from '../../assets/myprojects'

const MyProjects = () => {
  return (
    <div className="myprojects-container">
      <div className="myproject-title">
          <h2>My Projects</h2>
          <img src={icon} />
      </div>
      <div className="projects-list">
        {myprojects_data.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-name">{project.p_name}</h3>
              <p className="project-desc">{project.p_desc}</p>
              <a href={project.p_link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon"/>
              </a>
              <img src={project.p_img} alt={project.p_name} className="project-image" />
            </div>
          </div>
        ))}
      </div>
      <div className="project-showmore">
        <p>Show More</p>
      </div>
    </div>
  );
};


export default MyProjects
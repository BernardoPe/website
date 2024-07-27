import React from "react";
import "./projectCard.css";
import { Fade } from "react-awesome-reveal";

export default function ProjectCard({ project }) {
  return (
    <Fade direction="left">
      <div className="project-card">
        <div className="project-card-box">
          <div className="project-card-head">
            <div className="project-card-head-text">
              <div className="project-card-top">
                <h1 className="project-card-title">{project.title}</h1>
                <a href={project.link} className="project-card-link">
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <h4 className="project-card-duration">{project.duration}</h4>
              <ul className="project-card-skills">
                {project.skills.map((skill, index) => {
                  return (
                    <img
                      key={index}
                      src={skill.icon}
                      alt={skill.name}
                      className="project-card-skill"
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="project-card-content">
            {project.points.map((point, index) => {
              return (
                <p key={index} className="project-card-text">
                  {point}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

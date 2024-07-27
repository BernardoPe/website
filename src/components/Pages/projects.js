import React from "react";
import ProjectCard from "../Models/projectCard";
import data from "../../data.json";
import "./projects.css";
import ProjectImage from "../../assets/images/activity.svg";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  return (
    <Fade triggerOnce>
      <div className="projects narrow">
        <div className="projects-header split">
          <div className="projects-header-text">
            <h1 className="projects-title">Projects</h1>
            <h2 className="projects-subtitle">
              Here are some things I've worked on
            </h2>
            <a className="projects-reference" href={data.github}>
              <i className="fa fa-github"></i>
              <p>GitHub</p>
            </a>
          </div>
          <div className="projects-header-image">
            <img alt="projects" src={ProjectImage} />
          </div>
        </div>
        <div className="projects-content split">
          {data.projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </Fade>
  );
}

import React from "react";
import "./skills.css";
import data from "../../data";
import Skill from "../Models/skill";
import skillImage from "../../assets/images/science.svg";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <Fade>
      <div className="skills narrow">
        <div className="skills__header split">
          <div className="skills__header-text">
            <h1 className="skills__title">Skills</h1>
            <h2 className="skills__subtitle">Here are some of my skills</h2>
          </div>
          <div className="skills__header-img">
            <img src={skillImage} alt="skills" />
          </div>
        </div>
        <div className="skills__container">
          {data.skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </Fade>
  );
}

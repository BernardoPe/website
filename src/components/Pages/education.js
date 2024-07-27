import React from "react";
import "./education.css";
import educationImage from "../../assets/images/maths.svg";
import data from "../../data.json";
import { Fade } from "react-awesome-reveal";
import EducationCard from "../Models/educationCard";

export default function Education() {
  return (
    <Fade>
      <div className="education narrow">
        <div className="education-header split">
          <div className="education-head-text">
            <h1 className="education-head-title">Education</h1>
            <h2 className="education-head-subtitle">
              Here are my qualifications
            </h2>
            <p className="education-head-desc">{data.currentEducation}</p>
          </div>
          <div className="education-head-img">
            <img
              alt="education"
              src={educationImage}
              className="education-head-image"
            />
          </div>
        </div>
        <div className="education-content">
          <h1 className="education-content-title">Degrees</h1>
          {data.education.map((education, index) => {
            return <EducationCard key={index} education={education} />;
          })}
        </div>
      </div>
    </Fade>
  );
}

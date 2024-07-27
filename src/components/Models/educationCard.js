import React from "react";
import "./educationCard.css";
import { Fade } from "react-awesome-reveal";

export default function EducationCard({ education }) {
  return (
    <Fade direction="left">
      <div className="education-card">
        <div className="education-card-box">
          <div className="education-card-head">
            <div className="education-card-img">
              <img
                alt="education"
                src={require(`../../assets/images/` + education.image)}
              />
            </div>
            <div className="education-card-head-text">
              <h1 className="education-card-title">
                {education.degree} - {education.major}
              </h1>
              <h2 className="education-card-subtitle">{education.institute}</h2>
              <div className="education-card-head-details">
                <h4 className="education-card-duration">
                  {education.duration}
                </h4>
                <h4 className="education-card-grade">{education.gpa}</h4>
              </div>
            </div>
          </div>
          <div className="education-card-content">
            {education.points.map((point, index) => {
              return (
                <p key={index} className="education-card-text">
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

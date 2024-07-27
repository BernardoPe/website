import React from "react";
import "./skill.css";
import { Fade, Slide } from "react-awesome-reveal";

export default function Skill({ skill }) {
  if (!skill.reverse) {
    return (
      <Fade>
        <div className="skill split">
          <SkillImage skill={skill} />
          <SkillCard skill={skill} />
        </div>
      </Fade>
    );
  } else {
    return (
      <Fade>
        <div className="skill split">
          <SkillCard skill={skill} />
          <SkillImage skill={skill} />
        </div>
      </Fade>
    );
  }
}

function SkillImage({ skill }) {
  const slide = skill.reverse ? "right" : "left";
  return (
    <Slide direction={slide} triggerOnce className="skill-image-container">
      <div className="skill-image">
        <img
          src={require(`../../assets/images/` + skill.image)}
          alt={skill.title}
        />
      </div>
    </Slide>
  );
}

function SkillCard({ skill }) {
  const slide = skill.reverse ? "left" : "right";
  return (
    <Slide direction={slide} triggerOnce className="skill-card-container">
      <div className="skill-card">
        <h2>{skill.title}</h2>
        <ul className="skill-list">
          {skill.list.map((item, index) => (
            <li className="skill-listItem" key={index}>
              <img key={index} src={item.icon} alt={item.name} />
            </li>
          ))}
        </ul>
        <div className="skill-text-list">
          {skill.text.map((text, index) => (
            <p key={index} className="skill-text">
              {text}
            </p>
          ))}
        </div>
      </div>
    </Slide>
  );
}

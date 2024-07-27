import React from 'react';
import './about.css';
import aboutImage from '../../assets/images/about.png';
import data from '../../data.json';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <Fade>
        <div className="about narrow">
          <div className="about-header split">
            <div className="about-header-text">
              <h1 className="about-title">About Me</h1>
              <div className="about-desc">
                {data.about.map((desc, index) => {
                  return (
                    <p className="about-point" key={index}>
                      {desc}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="about-header-image center">
              <img alt="about" src={aboutImage} className="about-image" />
            </div>
          </div>
          <div className="social-links center">
            {data.social.map((social) => {
              return (
                <a key={social.name} href={social.url} className="social-link">
                  <i
                    className={social.icon}
                    style={{ backgroundColor: social.bg_color }}
                  ></i>
                </a>
              );
            })}
            <Link to={data.resume} className="social-link">
              <i
                className="fa fa-paperclip"
                style={{ backgroundColor: "#123C69" }}
              ></i>
            </Link>
          </div>
        </div>
      </Fade>
    );
}
import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <Fade triggerOnce>
      <header className="header">
        <div className="logo-name">
          <Link to="/">Bernardo André Pereira</Link>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/">
              <i className="fa fa-home menu-icon"></i>
              <span className="menu-item">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <i className="fa fa-user menu-icon"></i>
              <span className="menu-item">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <i className="fa fa-code menu-icon"></i>
              <span className="menu-item">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">
              <i className="fa fa-cogs menu-icon"></i>
              <span className="menu-item">Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/education">
              <i className="fa fa-graduation-cap menu-icon"></i>
              <span className="menu-item">Education</span>
            </NavLink>
          </li>
        </ul>
      </header>
    </Fade>
  );
}

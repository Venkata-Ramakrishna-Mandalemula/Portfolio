/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Global.css';

import VrmLogo from './images/vrmlogo.png';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="section-navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={VrmLogo}
              alt="website logo VRM Portfolio"
              width="90%"
              height="auto"
            />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a
                className="nav-link resume-link"
                href="/Venkata Ramakrishna Mandalemula Resume.pdf"
                download="Venkata Ramakrishna Mandalemula Resume.pdf"
              >
                RESUME
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-links">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

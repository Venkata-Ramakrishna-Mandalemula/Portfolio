/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const FooterSection = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="footer-1--div">
          <div className="logo-brand">
            <a href="#" className="footer-subheading">
              VRM-PORTFOLIO
            </a>
          </div>
          <div className="social-footer--icons">
            <a
              href="https://github.com/Venkata-Ramakrishna-Mandalemula/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-ramakrishna-mandalemula/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p>Email me at venkatamandalemula@gmail.com</p>
          <br />
          <p>
            &copy; 2024 Venkata Ramakrishna Mandalemula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

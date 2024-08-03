/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Global.css';

export const ProjectSection = ({ title, description, image, link }) => {
  return (
    <div
      className="project-card"
      onClick={() => window.open(link, '_blank')}
      data-aos="fade-up"
    >
      <img src={image} alt={`${title}`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

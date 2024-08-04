/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ProjectSection } from './ProjectSection';
import './Global.css';
import { Link } from 'react-router-dom';

import ToDo from './images/todoapp.webp';
import MindMatrix from './images/mindmatrixapp.webp';
// import Toggle from './images/toggleapp.webp';
import Calculator from './images/calculatorapp.webp';

export const ProjectPage = () => {
  const projects = [
    {
      title: 'To-Do App',
      description:
        'A simple and intuitive to-do application designed to help users manage their tasks efficiently with features like task addition, deletion, and status updates.',
      link: 'https://todovrm.netlify.app/',
      image: ToDo,
    },
    {
      title: 'Mind-Matrix',
      description:
        'An innovative educational platform designed to enhance learning experiences with interactive courses, personalized learning paths, and real-time progress tracking.',
      link: 'https://mindmatrix.netlify.app/',
      image: MindMatrix,
    },
    {
      title: 'Calculator',
      description:
        'A simple and elegant calculator that supports basic arithmetic operations and percentage calculations. Features a clean, user-friendly interface.',
      link: 'https://calculatorvrm.netlify.app/',
      image: Calculator,
    },
  ];
  return (
    <section className="section-projects">
      <div className="container" data-aos="fade-up">
        <h2 className="section-common-heading">PROJECTS</h2>
        <p className="section-common-subheading">
          Discover some of the key projects I have worked on, showcasing my
          skills in frontend development and modern web technologies.
        </p>
      </div>
      <div className="container grid grid-three--cols" data-aos="fade-up">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <div className="more-projects-button" data-aos="fade-up">
        <Link to="/projects" className="button">
          Check out more <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

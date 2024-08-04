/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ProjectSection } from './ProjectSection';
import './Global.css';

import ToDo from './images/todoapp.webp';
import MindMatrix from './images/mindmatrixapp.webp';
import Toggle from './images/toggleapp.webp';
import TempConverter from './images/tempconverter.webp';
import ShakeMe from './images/shakeme.webp';
import NewtonCradle from './images/newtoncradle.webp';
import NeonLoader from './images/neonloader.webp';
import Light from './images/light.webp';
import KeepNotes from './images/keepnotes.webp';
import Counter from './images/counter.webp';
import Highlight from './images/highlight.webp';
import Carousal from './images/carousal.webp';
import Eclipse from './images/eclipse.webp';
import Jokes from './images/jokes.webp';
import Calculator from './images/calculatorapp.webp';

export const ProjectMain = () => {
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
    {
      title: 'Toggle Switch',
      description:
        'A user-friendly toggle switch component for light and dark mode themes.',
      link: 'https://togglebuttonvrm.netlify.app/',
      image: Toggle,
    },
    {
      title: 'Temp Converter',
      description:
        'A website to quickly convert temperatures between Celsius, Fahrenheit.',
      link: 'https://tempconvertervrm.netlify.app/',
      image: TempConverter,
    },
    {
      title: 'Dad Jokes',
      description: 'A simple dad joke generator with random jokes using API.',
      link: 'https://dadjokesvrm.netlify.app/',
      image: Jokes,
    },
    {
      title: 'Keep Notes',
      description:
        'This is a simple note taking app with real-time updation and deletion of notes.',
      link: 'https://keepnotesvrm.netlify.app/',
      image: KeepNotes,
    },
    {
      title: 'Eclipse',
      description: 'A simple eclipse component with animation.',
      link: 'https://eclipsevrm.netlify.app/',
      image: Eclipse,
    },
    {
      title: 'Text Highlighter',
      description:
        'A simple text highlighter component with animation and highlighting.',
      link: 'https://texthighlightvrm.netlify.app/',
      image: Highlight,
    },
    {
      title: 'Light Switch',
      description: 'An animation of light switch that turns on and off ',
      link: 'https://lightvrm.netlify.app/',
      image: Light,
    },
    {
      title: 'Shake Me',
      description:
        'A hovering effect animation with a shaking motion when hovering over a element.',
      link: 'https://shakemevrm.netlify.app/',
      image: ShakeMe,
    },
    {
      title: 'Newton Cradle',
      description: 'An animation of Newton Cradle',
      link: 'https://newtoncradelvrm.netlify.app/',
      image: NewtonCradle,
    },
    {
      title: 'Neon Loader',
      description: 'An Neon animation of loading',
      link: 'https://neonloadervrm.netlify.app/',
      image: NeonLoader,
    },

    {
      title: 'Counter',
      description:
        'This is a simple counter showing the number of count with some animation.',
      link: 'https://incrementcountervrm.netlify.app/',
      image: Counter,
    },

    {
      title: 'Carousal',
      description: 'A simple carousal component with picture animation',
      link: 'https://carousalvrm.netlify.app/',
      image: Carousal,
    },
  ];
  return (
    <section className="section-projects">
      <div className="container">
        <h2 className="section-common-heading" data-aos="fade-up">
          PROJECTS
        </h2>
        <p className="section-common-subheading" data-aos="fade-up">
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
            data-aos="fade-up"
          />
        ))}
      </div>
    </section>
  );
};

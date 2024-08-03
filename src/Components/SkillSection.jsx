import React, { useEffect } from 'react';

import './Global.css';

import html from './images/html-5.webp';
import css from './images/css.webp';
import JavaScript from './images/javascript.webp';
import ReactLogo from './images/react.webp';
import Next from './images/next js.webp';
import TypeScript from './images/typescript.webp';
import TailWind from './images/tailwind.webp';
import Git from './images/git.webp';
import GitHub from './images/github.webp';
import Figma from './images/figma.webp';

export const SkillSection = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const items = document.querySelectorAll('.skill-item');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        // const y = event.clientY - rect.top - rect.height / 2;

        item.style.transform = ` rotateY(${x / 20}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="section-skills">
      <div className="container" data-aos="fade-up">
        <h2 className="section-common-heading">SKILLS</h2>
        <p className="section-common-subheading">
          Technologies and tools I have worked with to build dynamic and
          user-friendly web applications.
        </p>
      </div>
      <div className="skills-container" data-aos="fade-up">
        <figure className="skill-item">
          <img src={html} alt="html icon" />
        </figure>
        <figure className="skill-item">
          <img src={css} alt="css icon" />
        </figure>
        <figure className="skill-item">
          <img src={JavaScript} alt="javascript icon" />
        </figure>
        <figure className="skill-item">
          <img src={ReactLogo} alt="React icon" />
        </figure>
        <figure className="skill-item">
          <img src={Next} alt="Next icon" />
        </figure>
        <figure className="skill-item">
          <img src={TailWind} alt="TailWind icon" />
        </figure>
        <figure className="skill-item">
          <img src={Figma} alt="Figma icon" />
        </figure>
        <figure className="skill-item">
          <img src={TypeScript} alt="TypeScript icon" />
        </figure>
        <figure className="skill-item">
          <img src={Git} alt="Git icon" />
        </figure>
        <figure className="skill-item">
          <img src={GitHub} alt="html icon" />
        </figure>
      </div>
    </section>
  );
};

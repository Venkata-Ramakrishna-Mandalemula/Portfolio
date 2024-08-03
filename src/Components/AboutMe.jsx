/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import ProfilePic from './images/profilepic.webp';

export const AboutMe = () => {
  return (
    <section className="section-about" data-aos="fade-up">
      <div className="container">
        <h2 className="section-common-heading">ABOUT ME</h2>
        <p className="section-common-subheading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="container grid grid-two--cols">
        <div className="about-div" data-aos="fade-up">
          <h3 className="get-heading">Get to Know Me !</h3>
          <p className="get-paras">
            <span className="para">
              I am a Frontend Developer with a passion for creating responsive
              and accessible web applications. I enjoy working with modern web
              technologies to build user-centric solutions that make a real
              impact. My approach to development is driven by a desire to
              continuously learn and improve, always seeking out the best
              practices and innovative solutions.
            </span>
            <span className="para">
              In my journey as a developer, I have embraced collaborative
              environments, thriving in teams that value open communication and
              shared goals. I believe that the best products come from working
              closely with others, leveraging diverse perspectives to create
              software that is both high-quality and user-friendly. Ensuring
              that everyone, regardless of their abilities, can use and benefit
              from the applications I build is a core principle of my work.
            </span>
            <span className="para">
              Outside of my professional life, I love to travel and enjoy
              exploring new places and experiencing different cultures.
              Travelling provides me with fresh perspectives and new
              experiences. I also enjoy watching movies.
            </span>
            <span className="para">
              In my free time, I like to indulge in photography, capturing
              moments from my travels and everyday life. I have a keen interest
              in modern designs, constantly exploring the latest trends in web
              and graphic design. Additionally, I enjoy playing mobile games as
              a fun time and way to unwind, and I love exploring different kinds
              of food, always on the lookout for new culinary experiences.
            </span>
          </p>
        </div>
        <div className="profile-image" data-aos="fade-left">
          <figure>
            <img src={ProfilePic} alt="Profile picture" />
          </figure>
        </div>
      </div>
    </section>
  );
};

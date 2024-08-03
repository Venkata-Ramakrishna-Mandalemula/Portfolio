import React from 'react';

import './Global.css';

export const ContactPage = () => {
  return (
    <div className="section-contact">
      <div className="container" data-aos="fade-up">
        <h2 className="section-common-heading">CONTACT ME</h2>
        <p className="section-common-subheading">
          Reach out to me at any time for inquiries, collaboration, or just to
          say hi.
        </p>
      </div>
      <div className="container grid grid-two--cols">
        <div className="contact-content" data-aos="fade-up">
          <form action="https://formspree.io/f/mqazeajl" method="POST">
            <div className="mb-2">
              <div>
                <label for="username">Full Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autocomplete="off"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-2">
                <label for="email">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autocomplete="off"
                  placeholder="(ex: xyz@gmail.com)"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject heading"
              />
            </div>
            <div class="mb-3">
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-submit" data-aos="fade-up">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

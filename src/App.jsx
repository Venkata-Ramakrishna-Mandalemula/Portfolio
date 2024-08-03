import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { HeroSection } from './Components/HeroSection';
import { AboutMe } from './Components/AboutMe';
import { SkillSection } from './Components/SkillSection';
import { ProjectPage } from './Components/ProjectPage';
import { ContactPage } from './Components/ContactPage';
import { FooterSection } from './Components/FooterSection';
import { ProjectMain } from './Components/ProjectMain';

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HeroSection />
                <AboutMe />
                <SkillSection />
                <ProjectPage />
                <ContactPage />
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<SkillSection />} />
          <Route path="/projects" element={<ProjectMain />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;

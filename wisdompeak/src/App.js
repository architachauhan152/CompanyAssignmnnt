import React from 'react';
import Header from './components/Header';
import ProfilePicture from './components/ProfilePicture';
import Experience from './components/Experience'; 
import Education from './components/Education';
import SkillsWithRating from './components/SkillsWithRating'; 
import Projects from './components/Projects';
import ToggleableSection from './components/ToggleableSection'; 
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm'; 
import DownloadPDF from './components/DownloadPDF';
import Map from './components/Map'; 
import Navigation from './components/Navigation'; 
import References from './components/References';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navigation /> {/* Add the navigation bar */}

      <section id="header">
        <Header />
        <ProfilePicture />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <SkillsWithRating />
      </section>
      <section id="projects">
        <Projects /> 
      </section>


      <section id="hobbies">
        <ToggleableSection title="Hobbies">
          <Hobbies />
        </ToggleableSection>
      </section>
      <section id="references"> {/* Add References section */}
        <References />
      </section>

      <section id="contact">
        <Contact />
        <ContactForm />
      </section>

      <section id="location">
        <h3>My Location</h3>
        <Map />
      </section>

      <section id="download">
        <DownloadPDF />
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#header">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Portfolio</a></li> 
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#references">References</a></li>

        <li><a href="#contact">Contact</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

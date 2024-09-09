// components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  return (
    <section>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

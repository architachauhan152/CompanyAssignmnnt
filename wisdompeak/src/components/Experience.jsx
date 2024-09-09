// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    { title: 'Frontend Developer', company: 'Nobita Ltd', date: '2021 - Present' },
    { title: 'Junior Developer', company: 'Nobita1 Ltd', date: '2019 - 2021' }
  ];

  return (
    <section>
      <h3>Experience</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h4>{exp.title}</h4>
            <p>{exp.company} | {exp.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;

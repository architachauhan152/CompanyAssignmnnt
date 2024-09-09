import React from 'react';

const Education = () => {
  const education = [
    { degree: 'B.Tech Computer Science', institution: 'University of Delhi', date: '2020' }
  ];

  return (
    <section>
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.degree}</h4>
            <p>{edu.institution} | {edu.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;

// components/SkillsWithRating.js
import React, { useState } from 'react';

const SkillsWithRating = () => {
  const skills = ['JavaScript', 'React', 'Node.js'];
  const [rating, setRating] = useState(null);

  const handleHover = (index) => {
    setRating(index);
  };

  return (
    <section>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} onMouseOver={() => handleHover(index)}>
            {skill} - {rating === index ? 'Expert' : 'Intermediate'}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsWithRating;

// components/Hobbies.js
import React from 'react';

const Hobbies = () => {
  const hobbies = ['Reading', 'Photography', 'Traveling'];

  return (
    <section>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;

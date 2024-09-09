import React from 'react';

const Timeline = () => {
  const events = [
    { date: '2021', title: 'Frontend Developer', description: 'Started working at XYZ Corp.' },
    { date: '2019', title: 'Graduated', description: 'Completed B.Sc. in Computer Science.' }
  ];

  return (
    <section>
      <h3>Timeline</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h4>{event.date}</h4>
            <p>{event.title}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;

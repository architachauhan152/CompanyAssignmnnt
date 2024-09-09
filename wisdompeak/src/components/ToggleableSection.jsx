// components/ToggleableSection.js
import React, { useState } from 'react';

const ToggleableSection = ({ title, children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <h3 onClick={() => setVisible(!visible)}>{title}</h3>
      {visible && children}
    </section>
  );
};

export default ToggleableSection;

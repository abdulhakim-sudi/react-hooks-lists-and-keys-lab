import React from 'react';
import Links from './Links';  // Import Links component

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate developer building exciting projects!</p>
      <Links /> {/* Display links in the About section too */}
    </div>
  );
};

export default About;

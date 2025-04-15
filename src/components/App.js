import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import Links from './Links';
import projectData from '../data/projects'; // Import the project data from 'projects.js'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />  {/* Pass project data to ProjectList */}
      <Links />  {/* Display the links */}
    </div>
  );
};

export default App;

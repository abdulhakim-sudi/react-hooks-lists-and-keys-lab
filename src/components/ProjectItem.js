import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;

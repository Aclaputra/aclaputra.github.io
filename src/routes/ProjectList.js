import React from 'react';
import ProjectItem from './ProjectItem.js';
import '../styles/Projects.css';
import '../styles/responsive.css';

export default function ProjectList({ projects }) {
  
  return (
    <div className="project__content p-4">
      {
        projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))
      }
    </div>
  );
}

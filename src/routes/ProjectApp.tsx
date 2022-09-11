import React from 'react';
import ProjectList from './ProjectList';
import { getData } from '../data';
import '../styles/Projects.css';
import '../styles/responsive.css';

export default function ProjectApp() {
  const projects = getData();

  return (
    <div className="projects">
      <div className="upper__projects">
        <h1>PROJECTS</h1>
      </div>
      <div className="list__projects">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

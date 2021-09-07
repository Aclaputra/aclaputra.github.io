import React from 'react'
import '../styles/Projects.css'
import '../styles/responsive.css'
import Project from './Project'
function Projects() {
    return (
        <div className="projects">
            <div className="upper__projects">
                <h1>PROJECTS</h1>
            </div>
            <div className="list__projects">
                <div className="list__project">
                    <Project className="project__content"/>
                </div>
                <div className="list__project">
                    <Project className="project__content"/>
                </div>
                <div className="list__project">
                    <Project className="project__content"/>
                </div>
                <div className="list__project">
                    <Project className="project__content"/>
                </div>
                <div className="list__project">
                    <Project className="project__content"/>
                </div>
            </div>
        </div>
    )
}

export default Projects

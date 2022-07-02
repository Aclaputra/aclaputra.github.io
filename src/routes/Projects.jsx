import React, {Component} from 'react'
import '../styles/Projects.css'
import '../styles/responsive.css'
import Project from './Project'

export default class Projects extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="projects">
                <div className="upper__projects">
                    <h1>PROJECTS</h1>
                </div>
                <div className="list__projects">
                        <Project className="project__content p-4" 
                            projectName="Chatbot App" 
                            dateBuilt="3 May 2022 - 27 May 2022" 
                            stacksUsed="Flask | Docker | Kubernetes | Cloud Run | Terraform | GCP | Linux" 
                        />
                        <Project className="project__content" 
                            projectName="Employment Management" 
                            dateBuilt="29 June 2022 - 2 July 2022" 
                            stacksUsed="Laravel 9 | React | Linux" 
                        />
                        <Project className="project__content" 
                            projectName="Bookshelf API" 
                            dateBuilt="1 June 2022 - 27 June 2022" 
                            stacksUsed="Hapi | ESLint | React" 
                        />
                        <Project className="project__content" 
                            projectName="Sorting Visualizer" 
                            dateBuilt="2 Apr 2021 - 16 Apr 2021" 
                            stacksUsed="JavaScript" 
                        />
                        <Project className="project__content" 
                            projectName="Netflix Clone" 
                            dateBuilt="21 Jan 2021 - 5 Feb 2021" 
                            stacksUsed="React | TMDb (movie) API" 
                        />
                </div>
            </div>
        )
    }
}
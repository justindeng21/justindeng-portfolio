import { Component } from "react";
import "./projectModal.css"
import type { Project } from "../../data/project"
import ProjectCard from "../projectCard/projectCard.tsx";





type ProjectsProp = {
    projects: Array<Project>
}

class ProjectModal extends Component<ProjectsProp> {

    state = {
        selectedProject: this.props.projects[0]
    };

    showModal = (project: Project) => {
        this.setState({
            selectedProject: project
        });
        const overlay = document.getElementById("overlay");
        const modal = document.getElementById("projectModal");

        overlay?.classList.add("active");
        modal?.classList.add("active");

    }

    hideModal = () => {
        const overlay = document.getElementById("overlay");
        const modal = document.getElementById("projectModal");

        overlay?.classList.remove("active");
        modal?.classList.remove("active");
    }


    render() {
        return <>
            <div id="overlay" onClick={this.hideModal}></div>
<div id="projectModal">

    <button className="modal-close" onClick={this.hideModal}>
        ×
    </button>
    <p className="project-type">
        {this.state.selectedProject.subName}
    </p>

    <h2>
        {this.state.selectedProject.name}
    </h2>

    <p>
        {this.state.selectedProject.description}
    </p>

    <div className="technologies">
        {this.state.selectedProject.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
        ))}
    </div>

    <section>
        <h3>Overview</h3>
        <p>{this.state.selectedProject.overview}</p>
    </section>

    <section>
        <h3>Why I Built It</h3>
        <p>{this.state.selectedProject.motivation}</p>
    </section>

    <section>
        <h3>Architecture</h3>
        <p>{this.state.selectedProject.architecture}</p>
    </section>

    <section>
        <h3>Technical Challenges</h3>
        <ul>
            {this.state.selectedProject.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
            ))}
        </ul>
    </section>

    <section>
        <h3>Engineering Decisions</h3>
        <ul>
            {this.state.selectedProject.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
            ))}
        </ul>
    </section>

    <section>
        <h3>What I Learned</h3>
        <p>{this.state.selectedProject.lessons}</p>
    </section>

    <section>
        <h3>Future Improvements</h3>
        <ul>
            {this.state.selectedProject.futureImprovements.map((improvement) => (
                <li key={improvement}>{improvement}</li>
            ))}
        </ul>
    </section>

</div>


            <section id="projects" className="section">
                <p className="section-label">02 — Projects</p>

                <h2>Things I've built</h2>

                <div className="project-list">

                    {this.props.projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            subName={project.subName}
                            description={project.description}
                            technologies={project.technologies}
                            onClick={() => { this.showModal(project) }}
                        ></ProjectCard>

                    ))}

                </div>
            </section>
        </>
    };
};

export default ProjectModal;
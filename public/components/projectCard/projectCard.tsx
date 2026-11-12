import { Component } from "react";
import "./projectCard.css"

type projectProperties = {
    name: string;
    subName: string;
    description: string;
    technologies: Array<string>;
    onClick: () => void;
};

class ProjectCard extends Component<projectProperties>{




    render() {
       return <>

            <article className="project" onClick={this.props.onClick}>
              <div>
                <p className="project-type">{this.props.subName}</p>
                <h3>{this.props.name}</h3>
                <p>
                  {this.props.description}
                </p>
              </div>

              <div className="technologies">
                {this.props.technologies.map((technology)=>(
                    <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
       </> 
    };
};

export default ProjectCard;
































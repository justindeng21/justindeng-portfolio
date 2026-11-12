import { Component } from "react";
import "./aboutSection.css"
import type { AboutData } from "../../data/about";

type AboutContent = {
    data : AboutData;
}


class AboutSection extends Component<AboutContent> {
    render() {
        return <>
<section id="about" className="section about">
    <p className="section-label">{this.props.data.label}</p>

    <h2>{this.props.data.title}</h2>

    <p className="section-description">
        {this.props.data.description}
    </p>

    <div className="about-technologies">
        <p className="section-label">Technologies</p>

        <div className="about-technology-list">
            {this.props.data.technologies.map((technology) => (
                <span key={technology} className="about-technology">
                    {technology}
                </span>
            ))}
        </div>
    </div>

    <a href={this.props.data.resumeLink.href} className="text-link" download={"Justin-Deng-Resume.pdf"}>
        {this.props.data.resumeLink.text}
    </a>
</section>
        </>
    };
};

export default AboutSection;

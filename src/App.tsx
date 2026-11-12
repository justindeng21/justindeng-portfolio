
import "./App.css";
import ProjectModal from "../public/components/projectModal/projectModal"
import {projects} from "../public/data/project"

import AboutSection from "../public/components/about/aboutSection"
import {aboutData} from "../public/data/about"

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            Justin Deng
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Technical Support Engineer</p>

            <h1>
              I troubleshoot systems.
              <br />
              I build software.
            </h1>

            <p className="hero-description">
              I specialize in troubleshooting enterprise SaaS applications,
              APIs, JavaScript integrations, and complex production issues.
              I also build and deploy software from the ground up.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="button primary">
                View my work
              </a>

              <a
                href="https://github.com/justindeng21"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/justin-deng-12973a23b/"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <p className="section-label">01 — Professional Work</p>

          <h2>Technical problem solving</h2>

          <p className="section-description">
            My professional experience focuses on debugging complex customer
            environments, identifying root causes, and working across
            engineering and product teams to solve production issues.
          </p>

          <div className="work-grid">
            <article className="card">
              <span className="card-number">01</span>
              <h3>Enterprise SaaS Troubleshooting</h3>
              <p>
                Investigating complex JavaScript, API, tag management, and
                third-party integration issues in production environments.
              </p>
            </article>

            <article className="card">
              <span className="card-number">02</span>
              <h3>Customer Implementations</h3>
              <p>
                Designing and troubleshooting custom implementations while
                balancing customer requirements with reliable solutions.
              </p>
            </article>

            <article className="card">
              <span className="card-number">03</span>
              <h3>Engineering Collaboration</h3>
              <p>
                Reproducing bugs, identifying root causes, documenting
                technical findings, and validating fixes with Product and
                Engineering.
              </p>
            </article>
          </div>
        </section>

        <ProjectModal projects={projects}></ProjectModal>

        <AboutSection data={aboutData}></AboutSection>

        <section id="contact" className="section contact">
          <p className="section-label">04 — Contact</p>

          <h2>Let's connect.</h2>

          <p>
            Interested in working together or discussing a technical problem?
          </p>

          <a
            href="mailto:justin.n.deng@gmail.com"
            className="button primary"
          >
            Get in touch
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Justin Deng</p>

        <a
          href="https://github.com/justindeng21"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

                      <a
                href="https://www.linkedin.com/in/justin-deng-12973a23b/"
                target="_blank"
                rel="noopener noreferrer"
        >
            LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;

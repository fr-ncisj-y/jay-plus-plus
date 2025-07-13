import './Projects.css';

const Projects = () => (
    <section className="section" id="projects">
        <h2>Projects</h2>
        <p>Here are some of my favorite projects showcasing frontend and backend skills.</p>

        <div className="project-list">
            {/* Editable Corporate Project */}
            <div className="project-card">
                <h3>Role-Based Admin Dashboard (Corporate)</h3>
                <p>
                    Built as part of my role in a corporate development team, this internal dashboard helped streamline
                    operational workflows. I implemented dynamic components in React, integrated secure API endpoints,
                    and optimized the UI for different user roles. All sensitive data and specifics have been generalized.
                </p>
                <ul className="tech-stack">
                    <li>React</li>
                    <li>Redux</li>
                    <li>REST API</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Projects;

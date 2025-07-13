import './Projects.css';
import {SiVuedotjs, SiBootstrap, SiGradle, SiDocker, SiMariadb, SiGmail} from 'react-icons/si';
import { FaFileWord, FaFileExcel, FaNetworkWired } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import {
    FaJava, FaJenkins,
} from 'react-icons/fa';
import {
    SiKubernetes,
    SiPostman,
    SiSpringboot,
    SiMysql,
    SiApachespark,
    SiTestinglibrary,
} from 'react-icons/si';
import { useState } from 'react';



const techStack = [
    { icon: <FaJava />, label: 'Java', className: 'icon-java' },
    { icon: <SiSpringboot />, label: 'Spring Boot', className: 'icon-springboot' },
    { icon: <SiVuedotjs />, label: 'VueJS', className: 'icon-vue' },
    { icon: <SiBootstrap />, label: 'Bootstrap', className: 'icon-bootstrap' },
    { icon: <MdPhoneIphone />, label: 'React Native', className: 'icon-mobile' },
    { icon: <FaJenkins />, label: 'Jenkins', className: 'icon-jenkins' },
    { icon: <SiMariadb />, label: 'MariaDB', className: 'icon-mariadb' },
    { icon: <SiDocker />, label: 'Docker', className: 'icon-docker' },
    { icon: <SiGradle />, label: 'Gradle', className: 'icon-gradle' },
];

const Projects = () => {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);

    return (
        <section className="section" id="projects">
            <h2>Projects</h2>
            <p>Here are some of my favorite projects showcasing frontend and backend skills.</p>

            <div className="project-list">
                {/* Card 1 */}
                <div className={`project-card ${showDetails1 ? 'open' : ''}`}>
                    <h3>Enterprise Exam Management Platform</h3>
                    <p>
                        At Kryterion, I’ve been actively involved in developing and maintaining a secure, high-availability platform
                        for delivering computer-based assessments. I contributed across multiple areas of the stack: developing features based on ticket/user story requirements, resolving critical production issues,
                        and helping modernize the frontend by migrating legacy Struts components to VueJS.
                        {!showDetails1 && (
                            <span className="project-details-toggle" onClick={() => setShowDetails1(true)}>
                                Show More ▼
                            </span>
                        )}
                    </p>

                    {showDetails1 && (
                        <div className="project-details">
                            <p>
                                I implemented centralized exception handling using <code>@ControllerAdvice</code> in Java,
                                and enhanced mobile responsiveness across devices. I also contributed to cross-platform mobile
                                development (React Native), enabling security features like screen pinning and Guided Access,
                                as well as two-way communication between the mobile app and the web frontend.
                                <span className="project-details-toggle" onClick={() => setShowDetails1(false)}>
                                    Show Less ▲
                                </span>
                            </p>
                        </div>
                    )}

                    <ul className="tech-stack icons">
                        {techStack.map((tech, index) => (
                            <li key={index} className={tech.className} data-label={tech.label}>
                                {tech.icon}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card 2 */}
                <div className={`project-card ${showDetails2 ? 'open' : ''}`}>
                    <h3>Cardless ATM Transaction Platform</h3>
                    <p>
                        Contributed to a large-scale banking platform focused on enhancing the customer journey by enabling cardless transactions such as ATM withdrawals and bills payment. Ensured robust transaction handling and improved security across services.
                        {!showDetails2 && (
                            <span className="project-details-toggle" onClick={() => setShowDetails2(true)}>
                Show More ▼
            </span>
                        )}
                    </p>

                    {showDetails2 && (
                        <div className="project-details">
                            <p>
                                Proficient in feature development, JUnit testing, and root cause analysis to ensure stable deployments. Enforced coding standards using tools like SonarLint and PMD. Designed and deployed containerized microservices to Kubernetes clusters,
                                with secure API proxies managed via Apigee Edge. Integrated external C# DLLs with internal REST APIs hosted on IIS. Authored API documentation in Swagger and Postman for seamless integration across teams.
                                <span className="project-details-toggle" onClick={() => setShowDetails2(false)}>
                    Show Less ▲
                </span>
                            </p>
                        </div>
                    )}

                    <ul className="tech-stack icons">
                        <li className="icon-java" data-label="Java"><FaJava /></li>
                        <li className="icon-vue" data-label="Kubernetes"><SiKubernetes /></li>
                        <li className="icon-bootstrap" data-label="JUnit"><SiTestinglibrary /></li>
                        <li className="icon-mobile" data-label="Postman"><SiPostman /></li>
                        <li className="icon-vue" data-label="Apigee"><SiApachespark /></li> {/* closest for Apigee, you can use a custom icon if needed */}
                        <li className="icon-bootstrap" data-label="MySQL"><SiMysql /></li>
                        <li className="icon-vue" data-label="Spring Boot"><SiSpringboot /></li>
                    </ul>
                </div>
                {/* Card 3 - Admin Aide */}
                <div className="project-card">
                    <h3>Administrative Aide</h3>
                    <p>
                        I handled core administrative support tasks to ensure efficient daily operations. Responsibilities included answering phone calls, photocopying, routing documents, and responding to visitor inquiries with professionalism.
                    </p>
                    <div className="project-details">
                        <p>
                            I consistently supported office logistics and document flow, helping departments meet internal and external deadlines. My role required a high level of organization, communication, and attention to detail across administrative functions.
                        </p>
                    </div>

                    <ul className="tech-stack icons">
                        <li className="icon-word" data-label="Microsoft Word"><FaFileWord /></li>
                        <li className="icon-excel" data-label="Microsoft Excel"><FaFileExcel /></li>
                        <li className="icon-gmail" data-label="Gmail"><SiGmail /></li>
                    </ul>

                </div>

                {/* Card 4 - POS System Support */}
                <div className="project-card">
                    <h3>POS System Technical Support</h3>
                    <p>
                        Managed workstation maintenance and network cable checks to ensure secure and stable connectivity for all POS systems. Conducted routine system diagnostics and updates to minimize downtime and keep services operational.
                    </p>
                    <div className="project-details">
                        <p>
                            Responsibilities included troubleshooting hardware and software issues, configuring POS terminals, and performing system updates. Worked closely with operations to ensure rapid issue resolution and performance tuning. Regularly used network tools to trace connectivity problems and maintain infrastructure reliability.
                        </p>
                    </div>

                    <ul className="tech-stack icons">
                        <li className="icon-mysql" data-label="MySQL"><SiMysql /></li>
                        <li className="icon-excel" data-label="Microsoft Excel"><FaFileExcel /></li>
                        <li className="icon-network" data-label="Networking Tools"><FaNetworkWired /></li>
                    </ul>
                </div>



            </div>
        </section>
    );
};

export default Projects;

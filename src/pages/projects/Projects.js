import './Projects.css';
import {
    SiVuedotjs,
    SiBootstrap,
    SiGradle,
    SiDocker,
    SiMariadb,
    SiGmail,
    SiReact,
    SiGit,
    SiXcode,
    SiAndroidstudio, SiNodedotjs
} from 'react-icons/si';
import {FaFileWord, FaFileExcel, FaNetworkWired, FaTerminal} from 'react-icons/fa';
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
    const [showDetails3, setShowDetails3] = useState(false);

    return (
        <section className="section" id="projects">
            <div className="scrollable-content" >
            <h2>Projects</h2>
            <p>Here are some of my favorite projects showcasing frontend and backend skills.</p>

            <div className="project-list">
                {/* Card 1 */}
                <div className={`project-card ${showDetails1 ? 'open' : ''}`}>
                    <div className="card-bg-icon"><FaJava /></div>
                    <h3>Enterprise Exam Management Platform</h3>
                    <span className={"company"}>Kryterion</span>
                    <p>
                        After just six months at Kryterion, I was honored as Employee of the Quarter for resolving a
                        major payment system issue that impacted customer scheduling and business operations. This
                        recognition reflected my commitment to digging deep into problems, collaborating across teams,
                        and delivering fast, reliable solutions. {!showDetails1 && (
                            <span className="project-details-toggle" onClick={() => setShowDetails1(true)}>
                                Show More ▼
                            </span>
                        )}

                    </p>
                    <br/>
                    {showDetails1 && (
                        <div className="project-details">
                            <p>
                                At Kryterion, I helped engineer a secure, scalable platform used to deliver
                                computer-based assessments globally. My work involved building backend features from
                                Jira stories, diagnosing and resolving production issues, and improving platform
                                responsiveness through mobile-first design. I also led frontend modernization efforts
                                by migrating legacy Struts components to VueJS, improving both maintainability and user
                                experience. On the backend, I introduced centralized exception handling using Java’s
                                @ControllerAdvice, streamlining debugging across services. <span className="project-details-toggle" onClick={() => setShowDetails1(false)}>
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

                <div className={`project-card ${showDetails2 ? 'open' : ''}`}>
                    <div className="card-bg-icon"><SiXcode /></div>
                    <h3>Secure Exam Experience on Mobile Devices</h3>
                    <span className={"company"}>Kryterion</span>
                    <p>
                        In addition to my work on the main assessment platform, I also contributed to the development
                        of its companion mobile application, built with React Native for both Android and iOS. This app
                        was designed to offer a consistent, secure exam experience on mobile devices. I played a key
                        role in integrating two-way communication between the mobile app and the web frontend, ensuring
                        real-time sync and seamless user interaction during exams. {!showDetails2 && (
                        <span className="project-details-toggle" onClick={() => setShowDetails2(true)}>
                                Show More ▼
                            </span>
                    )}
                    </p>
                    <br/>
                    {showDetails2 && (
                        <div className="project-details">
                            <p>
                                To meet strict proctoring requirements, I implemented security features such as screen
                                pinning on Android and Guided Access on iOS, effectively locking users into the app
                                during exam sessions. I collaborated closely with QA and UX teams to validate performance
                                and accessibility across a wide range of devices. This involved extensive real-device
                                testing and emulator debugging, resolving platform-specific compatibility issues and
                                helping ensure smooth, secure operation across both mobile ecosystems.<span className="project-details-toggle" onClick={() => setShowDetails2(false)}>
                                    Show Less ▲
                                </span>
                            </p>
                        </div>
                    )}

                    <ul className="tech-stack icons">
                        <li className="icon-mobile" data-label="React Native"><SiReact /></li>
                        <li className="icon-android" data-label="Android Studio"><SiAndroidstudio /></li>
                        <li className="icon-xcode" data-label="Xcode"><SiXcode /></li>
                        <li className="icon-git" data-label="Git"><SiGit /></li>
                        <li className="icon-java" data-label="Java"><FaJava /></li>
                        <li className="icon-node" data-label="Node.js"><SiNodedotjs /></li>

                    </ul>
                </div>


                <div className={`project-card ${showDetails3 ? 'open' : ''}`}>
                    <div className="card-bg-icon"><SiKubernetes /></div>
                    <h3>Cardless ATM Transaction Platform</h3>
                    <span className={"company"}>MDI Novare</span>
                    <p>
                        I played a key role in developing a large-scale banking platform focused on improving the
                        customer journey by enabling cardless ATM transactions, bills payment, and secure digital
                        services. My work directly contributed to improved transaction speed, reliability, and user
                        satisfaction.{!showDetails3 && (
                            <span className="project-details-toggle" onClick={() => setShowDetails3(true)}>
                Show More ▼
            </span>
                        )}
                    </p>

                    {showDetails3 && (
                        <div className="project-details">
                            <p>
                                As a result of this initiative, I was promoted to Senior Software Engineer, recognizing
                                my leadership in driving the adoption of cardless technologies. I led full-cycle feature
                                delivery, conducted root cause analysis, and implemented JUnit testing for stability.
                                I enforced code quality with SonarLint and PMD, and deployed containerized microservices
                                to Kubernetes clusters. I also integrated C# DLLs with REST APIs hosted on IIS and
                                maintained clear API documentation using Swagger and Postman for effective team
                                collaboration.<span className="project-details-toggle" onClick={() => setShowDetails3(false)}>
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
                    <div className="card-bg-icon"><FaFileWord /></div>
                    <h3>Administrative Task Tracking System</h3>
                    <span className={"company"}>Bicol Medical Center</span>
                    <p>
                        As an Administrative Aide, I built an Excel-based tracking system using VBA to automate document
                        routing, deadline alerts, and audit logs. This reduced manual errors and improved processing
                        speed. I also supported daily operations, ensuring smooth document flow and helping departments
                        meet tight internal deadlines through strong organization and communication.</p>
                    <ul className="tech-stack icons">
                        <li className="icon-word" data-label="Microsoft Word"><FaFileWord /></li>
                        <li className="icon-excel" data-label="Microsoft Excel"><FaFileExcel /></li>
                        <li className="icon-gmail" data-label="Gmail"><SiGmail /></li>
                    </ul>

                </div>

                {/* Card 4 - POS System Support */}
                <div className="project-card">
                    <div className="card-bg-icon"><FaNetworkWired /></div>
                    <h3>POS System Automation and Technical Support</h3>
                    <span className={"company"}>Southstar Drug</span>
                    <p>
                        Developed a batch script to automate routine troubleshooting tasks for POS systems, including
                        verifying inter-terminal connectivity, checking network health, and executing daily system and
                        database updates. This automation reduced manual checks and improved operational uptime. In
                        addition to scripting, I managed workstation maintenance and conducted regular network
                        diagnostics to ensure secure, stable, and efficient POS operations across the business.Managed
                        workstation maintenance and network cable checks to ensure secure and stable connectivity for
                        all POS systems. Conducted routine system diagnostics and updates to minimize downtime and keep
                        services operational.
                    </p>

                    <ul className="tech-stack icons">
                        <li className="icon-mysql" data-label="MySQL"><SiMysql /></li>
                        <li className="icon-excel" data-label="Microsoft Excel"><FaFileExcel /></li>
                        <li className="icon-network" data-label="Networking Tools"><FaNetworkWired /></li>
                        <li className="icon-terminal" data-label="PowerShell / Terminal"><FaTerminal /></li>
                    </ul>
                </div>



            </div>
            </div>
        </section>
    );
};

export default Projects;

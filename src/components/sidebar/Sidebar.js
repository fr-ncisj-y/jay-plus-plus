import './Sidebar.css';
import { FaHome, FaProjectDiagram, FaEnvelope, FaCertificate } from 'react-icons/fa';

const Sidebar = ({ activeSection }) => {
    return (
        <nav className="sidebar" aria-label="Main navigation">
            <ul>
                <li>
                    <a
                        href="#about-francis-jay"
                        aria-label="Go to Home section"
                        className={activeSection === 'about-francis-jay' ? 'active' : ''}
                    >
                        <FaHome size={24} />
                        <span className="label">Home</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#projects-francis-jay-is-involved-in"
                        aria-label="Go to Projects section"
                        className={activeSection === 'projects-francis-jay-is-involved-in' ? 'active' : ''}
                    >
                        <FaProjectDiagram size={24} />
                        <span className="label">Projects</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#technical-skills-certifications"
                        aria-label="Go to Certificates section"
                        className={activeSection === 'technical-skills-certifications' ? 'active' : ''}
                    >
                        <FaCertificate size={24} />
                        <span className="label">Certificates</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#reach-out-to-me"
                        aria-label="Go to Contact section"
                        className={activeSection === 'reach-out-to-me' ? 'active' : ''}
                    >
                        <FaEnvelope size={24} />
                        <span className="label">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;

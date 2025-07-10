import './Sidebar.css';
import { FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ activeSection }) => (
    <nav className="sidebar">
        <ul>
            <li>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                    <FaHome size={24} /><span className="label">Home</span>
                </a>
            </li>
            <li>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                    <FaProjectDiagram size={24} /><span className="label">Projects</span>
                </a>
            </li>
            <li>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                    <FaEnvelope size={24} /><span className="label">Contact</span>
                </a>
            </li>
        </ul>
    </nav>
);

export default Sidebar;
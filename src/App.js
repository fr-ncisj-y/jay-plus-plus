import './App.css';
import './components/sidebar/Sidebar.css';
import { useEffect, useState } from 'react';
import ThemeToggle from './components/theme_toggle/ThemeToggle';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Certificates from "./pages/certificates/Certificates";
import {FaHome, FaProjectDiagram, FaEnvelope, FaCertificate} from 'react-icons/fa';
import Background from "./components/Background"; // new component

function App() {
    const [theme, setTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Load from localStorage on first mount
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        // Apply theme class to body on every theme change
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);


    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1, // 50% of section must be visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <Background theme={theme} />
            {/* renders animated background */}

            <ThemeToggle theme={theme} setTheme={setTheme} />

            <nav className="sidebar">
                <ul>
                    <li>
                        <a
                            href="#home"
                            aria-label="Home"
                            className={activeSection === 'home' ? 'active' : ''}
                        >
                            <FaHome size={24} />
                            <span className="label">Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            aria-label="Projects"
                            className={activeSection === 'projects' ? 'active' : ''}
                        >
                            <FaProjectDiagram size={24} />
                            <span className="label">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#certificates"
                            aria-label="Certificates"
                            className={activeSection === 'certificates' ? 'active' : ''}
                        >
                            <FaCertificate size={24} />
                            <span className="label">Certificates</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            aria-label="Contact"
                            className={activeSection === 'contact' ? 'active' : ''}
                        >
                            <FaEnvelope size={24} />
                            <span className="label">Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="app">
                <Home />
                <Projects />
                <Certificates />
                <Contact />
            </div>
        </>
    );
}

export default App;

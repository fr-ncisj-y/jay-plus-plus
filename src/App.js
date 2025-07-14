import { useEffect, useState } from 'react';
import './App.css';

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Certificates from "./pages/certificates/Certificates";
import Contact from "./pages/contact/Contact";

import Sidebar from "./components/sidebar/Sidebar";
import ThemeToggle from "./components/theme_toggle/ThemeToggle";
import Background from "./components/Background";

const SECTION_CONFIG = [
    { id: 'about-francis-jay', label: 'Home' },
    { id: 'projects-francis-jay-is-involved-in', label: 'Projects' },
    { id: 'technical-skills-certifications', label: 'Certificates' },
    { id: 'reach-out-to-me', label: 'Contact' },
];

function App() {
    const [theme, setTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState(SECTION_CONFIG[0].id);

    // Load saved theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    // Apply theme class to body on change
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Track active section on scroll
    useEffect(() => {
        const OFFSET_Y = 200	; // Change this to control when the section activates

        const handleScroll = () => {
            let closestSection = '';
            let minDistance = Infinity;

            SECTION_CONFIG.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distance = Math.abs(rect.top - OFFSET_Y); // 👈 adjust here
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = id;
                    }
                }
            });

            if (closestSection && closestSection !== activeSection) {
                setActiveSection(closestSection);
            }
        };


        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <>
            <Background theme={theme} />
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Sidebar activeSection={activeSection} />

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

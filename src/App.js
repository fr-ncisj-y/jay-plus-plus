import { useEffect, useState } from 'react';
import Contact from "./pages/contact/Contact";
import Certificates from "./pages/certificates/Certificates";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";

import ThemeToggle from "./components/theme_toggle/ThemeToggle";
import Sidebar from "./components/sidebar/Sidebar";
import Background from "./components/Background";
import './App.css';

const sections = [
    { id: 'about-francis-jay', label: 'Home', color: 'red' },
    { id: 'projects-francis-jay-is-involved-in', label: 'Projects', color: 'green' },
    { id: 'technical-skills-certifications', label: 'Certificates', color: 'blue' },
    { id: 'reach-out-to-me', label: 'Contact', color: 'orange' },
];

function App() {
    const [theme, setTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState('about-francis-jay');

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
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log('Scroll Y:', scrollY);

            let current = '';
            let minOffset = Infinity;

            sections.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    console.log(`Section ${id}: top=${rect.top}, bottom=${rect.bottom}`);

                    const offset = Math.abs(rect.top);
                    if (offset < minOffset) {
                        minOffset = offset;
                        current = id;
                    }
                }
            });

            if (current && current !== activeSection) {
                console.log('✅ Active section set to:', current);
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // run once on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <>

            <Background theme={theme} />

            <ThemeToggle theme={theme} setTheme={setTheme} />

            <Sidebar activeSection={activeSection} />

            {/* Page Sections */}
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

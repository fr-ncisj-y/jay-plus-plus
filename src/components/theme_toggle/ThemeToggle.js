import './ThemeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div
            className={`theme-toggle-switch ${theme}`}
            role="switch"
            aria-checked={theme === 'light'}
            tabIndex="0"
            onClick={toggleTheme}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            }}
        >
            <div className="toggle-thumb">
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </div>
        </div>
    );
};

export default ThemeToggle;
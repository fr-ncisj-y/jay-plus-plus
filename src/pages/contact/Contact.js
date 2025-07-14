import './Contact.css';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaRedditAlien, FaEnvelope } from 'react-icons/fa';
import Section from "../../components/Section";

const Contact = () => (
    <Section id="reach-out-to-me">
        <h2>Contact</h2>
        <p>Got an idea or project in mind? I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>
        <div className="social-links">
            <a href="mailto:youremail@example.com" className="email" aria-label="Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
            </a>
            <a href="https://facebook.com/francis.jay25" className="facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://linkedin.com/in/jay-plusplus" className="linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
            <a href="https://github.com/fr-ncisj-y" className="github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://reddit.com/user/yourprofile" className="reddit" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
                <FaRedditAlien />
            </a>
        </div>
    </Section>
);

export default Contact;

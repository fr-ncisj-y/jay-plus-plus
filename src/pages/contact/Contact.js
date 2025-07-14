import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaRedditAlien, FaEnvelope } from 'react-icons/fa';
import Section from "../../components/Section";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ehdjbxb",     // Replace with your EmailJS Service ID
            "template_5pbj0nr",    // Replace with your EmailJS Template ID
            form.current,
            "aih6KqXwjR5OZ9kSS"      // Replace with your EmailJS Public Key
        )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                alert("Message failed to send. Try again later.");
                console.error(error.text);
            });
    };

    return (
        <Section id="reach-out-to-me">
            <h2>Let’s Connect</h2>
            <p>Got an idea or project in mind? I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>

            {/* EmailJS Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="title" placeholder="Subject / Title" required />
                <textarea name="message" placeholder="Your Message" required />

                {/* Button group */}
                <div className="button-group">
                    <button type="button" onClick={() => form.current.reset()} className="clear-btn">Clear</button>
                    <button type="submit" className="send-btn">Send</button>
                </div>
            </form>


            {/* Social Media Links */}
            <div className="social-links">
                <a href="mailto:fjbedes25@gmail.com" className="email" aria-label="Email" target="_blank" rel="noopener noreferrer">
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
                <a href="#reach-out-to-me" className="reddit" aria-label="Reddit"  rel="noopener noreferrer">
                    <FaRedditAlien />
                </a>
            </div>
        </Section>
    );
};

export default Contact;

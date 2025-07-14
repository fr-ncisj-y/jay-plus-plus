import './Home.css';
import Section from "../../components/Section";

const Home = () => (
    <Section id="about-francis-jay">
        <div className="container-home">
        <span className={"hi"}>Hello,</span>
        <span className={"name-placeholder"}>I'm <span className={"highlight"}> FRANCIS JAY </span></span>
        <span className={"position-placeholder"}>Software Engineer</span>
        <p>Certified in Java, JavaScript, REST APIs, and more, I deliver impactful software solutions including enterprise platforms, secure mobile apps, and automation tools, demonstrating both technical depth and real world results.</p>
        </div>
        </Section>
);

export default Home;
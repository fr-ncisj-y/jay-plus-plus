import './Certificates.css';
import seoByMoz from '../../assets/certificates/linkein-learning-search-engine-optimization-by-moz.jpeg';
import javaByCodeCademy from '../../assets/certificates/codecademy-learn-java.png';
import swiftByCodeCademy from '../../assets/certificates/codecademy-learn-swift.png';
import javaByHackerRank from '../../assets/certificates/hacker-rank-java-basic.png';
import cssByHackerRank from '../../assets/certificates/hacker-rank-css-basic.png';
import problemSolvingByHackerRank from '../../assets/certificates/hacker-rank-problem-solving.png';
import restApiByHackerRank from '../../assets/certificates/hacker-rank-rest-api.png';
import javascriptBySimpliLearn from '../../assets/certificates/simpli-learn-javascript.png';
import { FiExternalLink } from 'react-icons/fi';
import Section from '../../components/Section';

const certificates = [
    {
        img: seoByMoz,
        alt: 'Search Engine Optimization Professional Certificate by Moz',
        title: 'Search Engine Optimization Professional Certificate by Moz',
        issuer: 'LinkedIn Learning & Moz',
        id: '7a3d29713e42...3971',
        date: 'July 13, 2025',
        link: 'https://www.linkedin.com/learning/certificates/7a3d29713e428082490bf66ff160c5d2c5e44cc5412eb58a98241db6b6183971?u=78734802'
    },
    {
        img: javascriptBySimpliLearn,
        alt: 'JavaScript for Beginners Certificate by SimpliLearn',
        title: 'JavaScript for Beginners',
        issuer: 'SimpliLearn',
        id: '5053885',
        date: 'April 17, 2024',
        link: 'https://certificates.simplicdn.net/share/5053885_1713336099.pdf'
    },
    {
        img: javaByHackerRank,
        alt: 'Java (Basic) Certificate by HackerRank',
        title: 'Java (Basic)',
        issuer: 'HackerRank',
        id: '6B718F704B18',
        date: 'April 16, 2024',
        link: 'https://www.hackerrank.com/certificates/6b718f704b18'
    },
    {
        img: cssByHackerRank,
        alt: 'CSS (Basic) Certificate by HackerRank',
        title: 'CSS (Basic)',
        issuer: 'HackerRank',
        id: '731914F2FDC2',
        date: 'April 16, 2024',
        link: 'https://www.hackerrank.com/certificates/731914f2fdc2'
    },
    {
        img: problemSolvingByHackerRank,
        alt: 'Problem Solving (Basic) Certificate by HackerRank',
        title: 'Problem Solving (Basic)',
        issuer: 'HackerRank',
        id: 'C74FE4C9BE44',
        date: 'April 16, 2024',
        link: 'https://www.hackerrank.com/certificates/c74fe4c9be44'
    },
    {
        img: restApiByHackerRank,
        alt: 'Rest API (Intermediate) Certificate by HackerRank',
        title: 'Rest API (Intermediate)',
        issuer: 'HackerRank',
        id: 'D5461FA7E9AA',
        date: 'April 16, 2024',
        link: 'https://www.hackerrank.com/certificates/d5461fa7e9aa'
    },
    {
        img: javaByCodeCademy,
        alt: 'Learn Java Certificate by CodeCademy',
        title: 'Learn Java',
        issuer: 'CodeCademy',
        id: '4DD96A6D-9',
        date: 'July 21, 2022',
        link: 'https://www.codecademy.com/profiles/francisj_y/certificates/d3f89367b558583e361640f778191345'
    },
    {
        img: swiftByCodeCademy,
        alt: 'Learn Swift Certificate by CodeCademy',
        title: 'Learn Swift',
        issuer: 'CodeCademy',
        id: 'AF376C66-7',
        date: 'July 24, 2022',
        link: 'https://www.codecademy.com/profiles/francisj_y/certificates/18e90daa65479a37c8f909893ada3694'
    }
];

const Certificates = () => (
    <Section id="technical-skills-certifications">
        <h2>Certifications</h2>
        <p>Verified credentials showcasing my proficiency in critical technologies and modern development stacks backing real world experience with recognized expertise.</p>
        <div className="certification-list">
            {certificates.map((cert, idx) => (
                <div className="certification-card" key={idx}>
                    <div className="cert-image">
                        <a
                            className="cert-link"
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={cert.img} alt={cert.alt} />
                            <div className="cert-overlay">
                                View Certificate
                                <FiExternalLink style={{ marginLeft: '0.2em', verticalAlign: 'middle' }} size={18} aria-hidden="true" />
                            </div>
                        </a>
                    </div>
                    <div className="cert-info">
                        <h4>{cert.title}</h4>
                        <p><strong>Issuer:</strong> {cert.issuer}</p>
                        <p><strong>{cert.title.startsWith('Learn') ? 'Credential ID' : 'Certificate ID'}:</strong> {cert.id}</p>
                        <p><strong>Date Issued:</strong> {cert.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

export default Certificates;
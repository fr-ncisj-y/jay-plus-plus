import './Certificates.css';
import seoByMoz from '../../assets/certificates/linkein-learning-search-engine-optimization-by-moz.jpeg'; // Place your image in public or assets folder
import javaByCodeCademy from '../../assets/certificates/codecademy-learn-java.png'; // Place your image in public or assets folder
import swiftByCodeCademy from '../../assets/certificates/codecademy-learn-swift.png'; // Place your image in public or assets folder
import javaByHackerRank from '../../assets/certificates/hacker-rank-java-basic.png'; // Place your image in public or assets folder
import cssByHackerRank from '../../assets/certificates/hacker-rank-css-basic.png'; // Place your image in public or assets folder
import problemSolvingByHackerRank from '../../assets/certificates/hacker-rank-problem-solving.png'; // Place your image in public or assets folder
import restApiByHackerRank from '../../assets/certificates/hacker-rank-rest-api.png'; // Place your image in public or assets folder
import javascriptBySimpliLearn from '../../assets/certificates/simpli-learn-javascript.png'; // Place your image in public or assets folder

const Certificates = () => (
    <section className="section" id="certificates">
        <h2>Certifications</h2>
        <p>These certifications validate my skills in key technologies and frameworks.</p>

        <div className="certification-list">
            {/* Certification 1 */}
            <div className="certification-card">
                <div className="cert-image">
                    <img src={seoByMoz} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>Search Engine Optimization Professional Certificate by Moz</h4>
                    <p><strong>Issuer:</strong> LinkedIn Learning & Moz</p>
                    <p><strong>Certificate ID:</strong> 7a3d29713e42...3971</p>
                    <p><strong>Date Issued:</strong> July 13, 2025</p>
                </div>
            </div>

            <div className="certification-card">
                <div className="cert-image">
                    <img src={javaByHackerRank} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>Java (Basic)</h4>
                    <p><strong>Issuer:</strong> HackerRank</p>
                    <p><strong>Certificate ID:</strong> 6B718F704B18</p>
                    <p><strong>Date Issued:</strong> April 16, 2024</p>
                </div>
            </div>

            <div className="certification-card">
                <div className="cert-image">
                    <img src={cssByHackerRank} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>CSS (Basic)</h4>
                    <p><strong>Issuer:</strong> HackerRank</p>
                    <p><strong>Certificate ID:</strong> 731914F2FDC2</p>
                    <p><strong>Date Issued:</strong> April 16, 2024</p>
                </div>
            </div>

            <div className="certification-card">
                <div className="cert-image">
                    <img src={problemSolvingByHackerRank} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>Problem Solving (Basic)</h4>
                    <p><strong>Issuer:</strong> HackerRank</p>
                    <p><strong>Certificate ID:</strong> C74FE4C9BE44</p>
                    <p><strong>Date Issued:</strong> April 16, 2024</p>
                </div>
            </div>

            <div className="certification-card">
                <div className="cert-image">
                    <img src={restApiByHackerRank} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>Rest API (Intermediate)</h4>
                    <p><strong>Issuer:</strong> HackerRank</p>
                    <p><strong>Certificate ID:</strong> D5461FA7E9AA</p>
                    <p><strong>Date Issued:</strong> April 16, 2024</p>
                </div>
            </div>

            <div className="certification-card">
                <div className="cert-image">
                    <img src={javascriptBySimpliLearn} alt="SEO Certificate by Moz" />
                </div>
                <div className="cert-info">
                    <h4>JavaScript for Beginners</h4>
                    <p><strong>Issuer:</strong> SimpliLearn</p>
                    <p><strong>Certificate ID:</strong> 5053885</p>
                    <p><strong>Date Issued:</strong> April 17, 2024</p>
                </div>
            </div>

            {/* Certification 2 */}
            <div className="certification-card">
                <div className="cert-image">
                    <img src={javaByCodeCademy} alt="Spring Boot Fundamentals" />
                </div>
                <div className="cert-info">
                    <h4>Learn Java</h4>
                    <p><strong>Issuer:</strong> CodeCademy</p>
                    <p><strong>Credential ID:</strong> 4DD96A6D-9</p>
                    <p><strong>Date Issued:</strong> July 21, 2022</p>
                </div>
            </div>
            <div className="certification-card">
                <div className="cert-image">
                    <img src={swiftByCodeCademy} alt="Spring Boot Fundamentals" />
                </div>
                <div className="cert-info">
                    <h4>Learn Swift</h4>
                    <p><strong>Issuer:</strong> CodeCademy</p>
                    <p><strong>Credential ID:</strong> AF376C66-7</p>
                    <p><strong>Date Issued:</strong> July 24, 2022</p>
                </div>
            </div>
        </div>
    </section>
);

export default Certificates;

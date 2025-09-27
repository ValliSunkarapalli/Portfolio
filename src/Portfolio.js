import React from "react";
import "./App.css";
import profilePic from "./profile.jpg";
import tssImg from "./images/TSS.jpg";
import fintechImg from "./images/Fintech.png";
import spoofingImg from "./images/spoofing.jpg";
import { 
  FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaPython, FaRProject, FaGitAlt, FaDocker,
  FaDatabase, FaServer, FaChartBar, FaProjectDiagram, FaTasks 
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* Top-left profile icon */}
      <div className="top-left-icon">
        <img src={profilePic} alt="Profile" />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="hero-about-section">
        <img src={profilePic} alt="Profile" className="hero-pic" />
        <h2>Hello, I'm <span>Valli Sunkarapalli</span></h2>
        <p className="hero-objective">
          I’m a motivated M.S. Computer Science student at Texas A&M University – Corpus Christi with hands-on experience in software development, data analysis, and machine learning. 
          Skilled in Python, SQL, Power BI, and full-stack development, I build scalable applications, automate workflows, and analyze complex datasets. 
          My projects span predictive modeling, dashboards, secure distributed systems, and data-driven solutions. 
          I enjoy solving challenging problems, collaborating with diverse teams, and learning new technologies.
        </p>
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/sunkarapalli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/ValliSunkarapalli" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:svsvalli01@gmail.com">
            <FaEnvelope /> Email
          </a>
          <a href="/portfolio_Resume.pdf" download>
            <FaDownload /> Resume
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="card-section">
        <h2>Experience</h2>
        <div className="card-grid">
          <div className="card">
            <b>Teaching Assistant – Data & Engineering Labs</b>
            <p>Sep 2024 – Present | Texas A&M University – Corpus Christi</p>
            <p>Mentored 30+ students, designed tutorials, and streamlined grading processes improving lab performance.</p>
          </div>
          <div className="card">
            <b>IT Student Worker – Data Analytics Support</b>
            <p>Mar 2024 – Aug 2024 | Texas A&M University – Corpus Christi</p>
            <p>Built Power BI dashboards, automated reporting workflows, and analyzed ticket data to optimize IT performance.</p>
          </div>
          <div className="card">
            <b>Research Apprentice – Data Analysis</b>
            <p>Jan 2024 – May 2024 | Research & Innovation Dept., Corpus Christi</p>
            <p>Analyzed 10,000+ crime records and developed predictive models guiding faculty proposals.</p>
          </div>
          <div className="card">
            <b>Workday HCM & Financials Junior Developer</b>
            <p>Jun 2023 – Dec 2023 | Neerad Solutions</p>
            <p>Configured Workday modules for 500+ employees and automated integrations reducing errors.</p>
          </div>
          <div className="card">
            <b>MERN Stack Developer Intern</b>
            <p>Feb 2022 – Jun 2022 | Brainovision Solutions</p>
            <p>Developed full-stack application with MongoDB for 500+ monthly users.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill"><FaPython /><p>Python (Pandas, NumPy, Scikit-learn)</p></div>
          <div className="skill"><FaRProject /><p>R</p></div>
          <div className="skill"><FaDatabase /><p>SQL (MySQL, SQLite)</p></div>
          <div className="skill"><FaServer /><p>Shell Scripting</p></div>
          <div className="skill"><FaChartBar /><p>Power BI</p></div>
          <div className="skill"><FaProjectDiagram /><p>Alteryx / ETL</p></div>
          <div className="skill"><FaChartBar /><p>Tableau</p></div>
          <div className="skill"><FaDatabase /><p>MongoDB / NoSQL</p></div>
          <div className="skill"><FaPython /><p>Machine Learning</p></div>
          <div className="skill"><FaDatabase /><p>Hypothesis Testing</p></div>
          <div className="skill"><FaTasks /><p>Jira / Agile / ServiceNow</p></div>
          <div className="skill"><FaGitAlt /><p>Git / GitHub</p></div>
          <div className="skill"><FaDocker /><p>Docker</p></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="card-section">
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card project-card">
            <div className="card-image">
              <img src={tssImg} alt="TSS Project" />
            </div>
            <div className="card-text">
              <b>TSS Vulnerability Report Automation</b>
              <p>Automated ETL pipelines and dashboards, reducing 8 hours of weekly manual work and improving response time by 30%.</p>
              <p><i>Tools:</i> Power BI, Power Query, ETL</p>
            </div>
          </div>

          <div className="card project-card">
            <div className="card-image">
              <img src={fintechImg} alt="Fintech Project" />
            </div>
            <div className="card-text">
              <b>Fintech Fortress – Distributed Banking System</b>
              <p>Built a secure distributed banking system with real-time replication achieving 99.9% uptime. Implemented Zero-Knowledge Proof authentication to enhance security.</p>
              <p><i>Tools:</i> Python, Flask, SQLite, Docker</p>
            </div>
          </div>

          <div className="card project-card">
            <div className="card-image">
              <img src={spoofingImg} alt="Spoofing Project" />
            </div>
            <div className="card-text">
              <b>Advanced Framework for Spoofing Detection</b>
              <p>Capstone project integrating keystroke biometrics, network traffic analysis, and ML for real-time anomaly detection.</p>
              <p><i>Tools:</i> Python, Scikit-learn, PyShark, SQLite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="card-section">
        <h2>Education</h2>
        <div className="card">
          <p>Master's in Computer Science, Texas A&M University – Corpus Christi (Expected Dec 2025)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Venkata Santosh Valli. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;

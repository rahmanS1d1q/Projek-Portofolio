import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

const Home = ({ setActiveSection }) => {
  const goToPortfolio = () => {
    setActiveSection("portfolio");
  };
  return (
    <div className="home-container" id="home">
      <div className="home-content">
        <div className="hero-text">
          <h1>
            Muhammad Rahman
            <br />
            Shiddiq
          </h1>

          <p className="subtitle">
            Mahasiswa Sistem Informasi | Data Analyst & Data Science | Machine
            Learning & AI Enthusiast
          </p>

          <div className="hero-buttons">
            {/* Download CV dari folder public/cv */}
            <a
              href="/cv/CV_Muhammad-Rahman-Shiddiq.pdf"
              download
              className="btn"
            >
              DOWNLOAD CV
            </a>

            <button onClick={goToPortfolio} className="btn btn-filled">
              PORTFOLIO
            </button>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rahmanshiddiq"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/_rahmannn09?"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/rahmanS1d1q"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100005492715647"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            alt="Workspace"
            className="workspace-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

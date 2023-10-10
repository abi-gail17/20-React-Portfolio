import React from "react";
import RRimg from '../assets/RealtyReachHome.png';
import BLimg from '../assets/BiblioLibrary.png';
import FFEimg from '../assets/FreshFitExpressHome.png';
import "../assets/style/portfolio.css";

function Portfolio() {
    return (
      <div className="project-list">
        <h2>Projects I've Worked On</h2>
        <div className="project-item">
          <h3>Realty Reach</h3>
          <img src={RRimg} alt="Realty Reach Thumbnail" />
          <a href="https://github.com/divyakrishnan15/RealEstateApp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>Library Content Manager</h3>
          <img src={BLimg} alt="Library Content Manager Thumbnail" />
          <a href="https://github.com/Koro999/Library-Content-Manager" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>FreshFit Express</h3>
          <img src={FFEimg} alt="FreshFit Express Thumbnail" />
          <a href="https://github.com/sumanpreetk01/FreshFit-Express" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    );
  }
export default Portfolio;
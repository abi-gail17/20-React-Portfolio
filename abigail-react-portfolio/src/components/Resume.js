import React from "react";
import "../assets/style/style.css";

function Resume() {
  return (
    <div className="resume">
      <h2>Abigail Cinco</h2>
      <p>Fullstack Web Developer</p>

      <h3>Summary</h3>
      <p>
        I am a creative and knowledge-hungry web developer with a focus on creating
        responsive and user-friendly applications. Experienced in front-end and
        back-end development, with a foundation in HTML, CSS, and JavaScript.
      </p>

      <h3>Skills</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, GitHub</li>
        <li>Responsive Web Design</li>
      </ul>

      <h3>Education</h3>
      <p>
        St. John Paul II Catholic Secondary School<br />
        Graduated 2019
      </p>
      <p>
        Bachelor of Environmental Science<br />
        University of Toronto, 2019-2021
      </p>
      <p>
        Fullstack Web Development Bootcamp<br />
        University of Toronto, April 2023- October 2023
      </p>

      <h3>Experience</h3>
      <p>
        <strong>Web Developer - University of Toronto Fullstack Bootcamp</strong><br />
        April 2023 - October 2023<br />
        - Collaborated with classmates across a few projects.<br />
        - Implemented new features and optimized website performance.<br />
        - Conducted code reviews and provided technical support to team members.
      </p>

      <p>
        <strong>Junior Developer - ABC Tech</strong><br />
        June 2018 - December 2019<br />
        - Assisted in the development of web applications using React and Node.js.<br />
        - Participated in the design and implementation of user interfaces.<br />
        - Worked closely with senior developers to troubleshoot and resolve issues.
      </p>

      <h3>Projects</h3>
      <p>
        <strong>Project 1: Realty Reach</strong><br />
        - Developed a real-esate website with a team of classmates using HTML, CSS, JavaScript, and a third-party API for the real-estate data.<br />
        - Collaborated with my classmates to troubleshoot issues and design the site.<br />
        - Source code: <a href="https://github.com/divyakrishnan15/RealEstateApp" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <p>
        <strong>Biblio Library Content Manager</strong><br />
        - Worked on a team of classmates to create a library content manager with JS, CSS, Sequelize, ORM, and Handlebars.<br />
        - Primarily worked on Handlbars to create a responsive layout.<br />
        - Source code: <a href="https://github.com/Koro999/Library-Content-Manager" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p>
        <strong>FreshFit Express</strong><br />
        - Worked on a team of classmates to create a food delivery app with JS, CSS, Sequelize, ORM, and Handlebars.<br />
        - Primarily worked on components and CSS to create a responsive layout with a nice design.<br />
        - Source code: <a href="https://github.com/sumanpreetk01/FreshFit-Express" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <h3>Contact</h3>
      <p>
        Email: cinco.de.abby@gmail.com<br />
        GitHub: <a href="https://github.com/abi-gail17" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  );
}

export default Resume;
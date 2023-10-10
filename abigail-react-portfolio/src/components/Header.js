import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../assets/mylogo.png";
import "../assets/style/header.css";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-home">
              <img
                src={MyLogo}
                alt="Abigail's Logo"
                className="header-logo"
                />
                <h1>Abigail Cinco</h1>
            </Link>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-links">
                        <Link to="/">About Me</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
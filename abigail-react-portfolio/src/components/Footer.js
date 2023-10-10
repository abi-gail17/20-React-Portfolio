import React from "react";
import MyLogo from "../assets/mylogo.png"
import "../assets/style/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <a href='#' className='footer-logo'>
                <img src={MyLogo} alt="My personal logo"/>
            </a>
            <div className='copyright'>
               <p>&copy; Abigail Cinco 2023</p>
           </div>
        </footer>
    );
}
export default Footer;
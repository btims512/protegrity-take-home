import React from "react";
import Logo from "../../images/footer-logo.svg";
import Twitter from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="grid">
        <div>
          <a href="https://www.protegrity.com/">
            <img
              src={Logo}
              style={{ marginBottom: "20px" }}
              alt="Protegrity company logo"
            />
          </a>
          <div className="footer-icons">
            <a href="https://twitter.com/protegrity">
              <img src={Twitter} style={{ width: "26px" }} alt="Twitter icon" />
            </a>
            <a href="https://www.linkedin.com/company/protegrity/">
              <img src={LinkedIn} alt="LinkedIn icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

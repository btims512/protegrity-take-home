import React from 'react'
import Logo from "../../assets/images/footer-logo.svg";
// import Twitter from "../../assets/images/twitter.svg";
// import LinkedIn from "../../assets/images/linkedin.svg";
import LinkedIn from "../../assets/images/Linkedin.png";
import Twitter from "../../assets/images/Twitter.png";


import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='grid'>
        <div>
        <a href="https://www.protegrity.com/"><img src={Logo} style={{marginBottom: "20px"}} alt="Protegrity company logo" /></a>
        <div className='footer-icons'>
          {/* <a href="https://twitter.com/protegrity"><img src={Twitter} alt="Twitter icon" /></a> */}
          <a href="https://twitter.com/protegrity"><img src={Twitter} style={{width: "22px"}} alt="Twitter icon" /></a>
          {/* <a href="https://www.linkedin.com/company/protegrity/"><img src={LinkedIn} alt="LinkedIn icon" /></a> */}
          <a href="https://www.linkedin.com/company/protegrity/"><img style={{width: "20px"}} src={LinkedIn} alt="LinkedIn icon" /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
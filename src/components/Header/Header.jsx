import React from "react";
import Logo from "../../assets/images/protegrity-logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
    <a href="/"><img src={Logo} width="200px" alt="" /></a>
    </header>
  );
};

export default Header;

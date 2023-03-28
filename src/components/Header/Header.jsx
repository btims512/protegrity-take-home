import React from "react";
import Logo from "../../images/protegrity-logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img
          src={Logo}
          width="150px"
          style={{ marginTop: "5px" }}
          alt="Protegrity company logo"
        />
      </a>
    </header>
  );
};

export default Header;

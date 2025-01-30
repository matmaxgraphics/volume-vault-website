import React from "react";
import Logo from "../assets/images/volume-vault-logo.png";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo--container">
          <img src={Logo} alt="Volume Vault logo image" />
        </div>
        <div className="right-nav--side">
          <ul className="nav--links">
            <a href=""><li>Features</li></a>
            <a href=""><li>Packages</li></a>
            <a href=""><li>Referral</li></a>
            <a href=""><li>FAQs</li></a>
          </ul>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

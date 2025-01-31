import React, { useState } from "react";
import Logo from "../assets/images/volume-vault-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

function Navbar() {
  const [toggled, setToggled] = useState(false)
  return (
    <nav>
      <div className="nav-container">
        <div className="logo--container">
          <img src={Logo} alt="Volume Vault logo image" />
        </div>

        <div className={toggled ? "hamburger close" : "hamburger"} onClick={()=> setToggled(!toggled)}>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
          <span className="meat"></span>
        </div>

        <div className={["right-nav--side", toggled && 'active'].filter(Boolean).join(' ')}>
          <ul className="nav--links">
            <a href="">
              <li>Features</li>
            </a>
            <a href="">
              <li>Packages</li>
            </a>
            <a href="">
              <li>Referral</li>
            </a>
            <a href="">
              <li>FAQs</li>
            </a>
          </ul>
          <button className="btn nav--links">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

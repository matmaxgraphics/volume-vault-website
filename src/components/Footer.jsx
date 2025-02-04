import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper max-width">
        <hr />
        <article className="disclaimer--wrapper">
          <h4>VolumeVault Disclaimer</h4>
          <p>
            VolumeVault is an automated trading bot designed for educational and
            strategic purposes only. Users of this bot are responsible for
            transparently disclosing its use to their audience and must refrain
            from any actions that could mislead others. The creators and
            operators of VolumeVault assume no responsibility for any misuse or
            misleading actions by users that may impact their audience or
            project. Always use VolumeVault responsibly and in accordance with
            applicable regulations
          </p>
        </article>

        <div className="bottom--footer">
          <ul className="quick--links">
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
    
          <ul className="social--links">
            <a href="">
              <li>
                <Icon icon="ri:instagram-line" className="social-icon" />
              </li>
            </a>
            <a href="">
              <li>
                <Icon icon="ri:twitter-x-line" className="social-icon" />
              </li>
            </a>
            <a href="">
              <li>
                <Icon icon="ri:telegram-2-line" className="social-icon" />
              </li>
            </a>
            <a href="">
              <li>
                <Icon icon="ri:youtube-line" className="social-icon" />
              </li>
            </a>
          </ul>
        </div>
        <div className="copyright-container">
          <p>2025 VolumeVault Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

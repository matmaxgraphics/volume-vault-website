import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import secondaryIll from "../../assets/images/sec-cta-ill.svg"

function SecondaryCta() {
  return (
    <section className="secondary-cta-section">
      <div className="max-width">
        <div className="secondary-cta--wrapper section-flex">
          <div className="text-description">
            <h2>Boost Your Volume with VolumeVault</h2>
            <p>
              Unlock the potential to skyrocket your project's trading volume by
              millions. Just a few steps away from standing out and dominating
              the market. Don’t wait, elevate your project’s visibility with
              VolumeVault!
            </p>
            <button className="btn cta--btn">
              Start Dominating{" "}
              <span>
                <Icon icon="ri:arrow-right-up-line" className="arrow-icon" />
              </span>
            </button>
          </div>
          <div className="img-container">
    <img src={secondaryIll} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryCta;

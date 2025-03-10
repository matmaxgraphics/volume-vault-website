import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ctaSectAnimation from "../../assets/images/ctaAnimation.json";

import secondaryIll from "../../assets/images/sec-cta-ill.svg";

import FadeUpAnimation from "../Animations/FadeUpAnimation";

function SecondaryCta() {
  const ctaRef = useRef(null);

  const { ref: ctaTrigger, inView: ctaInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (ctaInView && ctaRef.current) ctaRef.current.goToAndPlay(0, true);
  }, [ctaInView]);

  return (
    <section className="secondary-cta-section">
      <div className="max-width">
        <div className="secondary-cta--wrapper section-flex" ref={ctaTrigger}>
          <div className="text-description">
            <FadeUpAnimation>
              <h2>Boost Your Volume with VolumeVault</h2>
              <p>
                Unlock the potential to skyrocket your project's trading volume
                by millions. Just a few steps away from standing out and
                dominating the market. Don’t wait, elevate your project’s
                visibility with VolumeVault!
              </p>
              <a href="https://t.me/VolumeVaultBot">
                <button className="btn cta--btn">
                  Start Dominating{" "}
                  <span>
                    <Icon
                      icon="ri:arrow-right-up-line"
                      className="arrow-icon"
                    />
                  </span>
                </button>
              </a>
            </FadeUpAnimation>
          </div>
          <div className="img-container">
            <FadeUpAnimation>
              {/* <img src={secondaryIll} alt="" /> */}
              <Lottie
                lottieRef={ctaRef}
                animationData={ctaSectAnimation}
                autoplay={false}
                loop={false}
              />
            </FadeUpAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondaryCta;

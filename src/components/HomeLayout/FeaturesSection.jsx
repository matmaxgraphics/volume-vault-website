import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import scalableAnimation from "../../assets/images/scalableAnime.json";
import cryptoCoinAnimation from "../../assets/images/cryptoCoinAnim.json";
import speedAnimation from "../../assets/images/speedAnimation.json";

import FadeUpAnimation from "../Animations/FadeUpAnimation";

import StairsIllustration from "../../assets/images/illustration-stairs.svg";
import CryptoCoins from "../../assets/images/crypto-coins.svg";
import CandleIll from "../../assets/images/candle-illustration.svg";
import ScalableIll from "../../assets/images/scalable-illustration.svg";
import SpeedIll from "../../assets/images/speed-illustration.svg";
// import EthCoin from "../../assets/images/eth-coin illustration.svg";

function FeaturesSection() {
  // const lottieRef = useRef(null);
  // const { ref, inView } = useInView({
  //   // triggerOnce: true,
  //   threshold: 0.5,
  // });

  // useEffect(() => {
  //   if (inView && lottieRef.current) {
  //     lottieRef.current.goToAndPlay(0, true);
  //   }
  // }, [inView]);

  const speedRef = useRef(null);
  const coinRef = useRef(null);
  const scaleRef = useRef(null);

  const { ref: speedTrigger, inView: speedInView } = useInView({
    threshold: 0.5,
  });
  const { ref: coinTrigger, inView: coinInView } = useInView({
    threshold: 0.5,
  });
  const { ref: scaleTrigger, inView: scaleInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (speedInView && speedRef.current) speedRef.current.goToAndPlay(0, true);
  }, [speedInView]);

  useEffect(() => {
    if (coinInView && coinRef.current) coinRef.current.goToAndPlay(0, true);
  }, [coinInView]);

  useEffect(() => {
    if (scaleInView && scaleRef.current) scaleRef.current.goToAndPlay(0, true);
  }, [scaleInView]);

  return (
    <section className="features-section" id="features-section">
      <div className="max-width container">
        <header>
          <FadeUpAnimation>
            <h6>
              Why Your Project Needs <span>VolumeVault</span>
            </h6>
            <h2>Give your token the edge it deserves</h2>
          </FadeUpAnimation>
        </header>

        <FadeUpAnimation>
          <main className="bento-grid--container">
            <article>
              <div className="content-container content--1">
                <div className="img-content">
                  <img src={StairsIllustration} alt="" />
                </div>
              </div>
              <div className="content-container content--2" ref={speedTrigger}>
                <div className="text-content">
                  <h3>Unmatched Speed – Results in Record Time</h3>
                  <p>
                    Don’t waste months waiting for growth. With VolumeVault,
                    results are swift, driving your project forward faster than
                    you ever thought possible
                  </p>
                </div>

                <div className="img-content">
                  {/* <img src={SpeedIll} alt="" /> */}
                  <Lottie
                    lottieRef={speedRef}
                    animationData={speedAnimation}
                    autoplay={false}
                    loop={false}
                  />
                </div>
              </div>
            </article>

            <article className="middle--content">
              <div className="content-container content--3" ref={coinTrigger}>
                <div className="text-content">
                  <h3>
                    Tailored to Top Chains – Built for Solana, BNB, and Base
                  </h3>
                  <p>
                    No generic solutions here. VolumeVault is specifically
                    engineered for Solana, BNB, and Base projects, ensuring
                    seamless execution and maximum impact.
                  </p>
                </div>

                <div className="img-content">
                  {/* <img src={CryptoCoins} alt="" /> */}
                  <Lottie
                    lottieRef={coinRef}
                    animationData={cryptoCoinAnimation}
                    autoplay={false}
                    loop={false}
                  />
                </div>
              </div>

              <div className="content--4">
                <div className="sub__content-container sub__content--1">
                  <div className="text-content">
                    <h3>Drive FOMO – Create Urgency and Excitement</h3>
                    <p>
                      Nothing drives traders like fear of missing out. Our
                      volume boosts spark market buzz, turning your project into
                      a must-have token.
                    </p>
                  </div>
                </div>
                <div className="sub__content-container sub__content--2">
                  <div className="text-content">
                    <h3>Exclusive Support – Your Success, Our Priority</h3>
                    <p>
                      When you work with VolumeVault, you gain access to an
                      elite team dedicated to your success. We’re with you every
                      step of the way.
                    </p>
                    <a href="https://t.me/+FARqNDtvaRc1MjA0" className="link-text">Join Support group</a>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <div className="content-container content--5" ref={scaleTrigger}>
                <div className="text-content">
                  <h3>Scalable Solutions – Grow Without Limits</h3>
                  <p>
                    From ambitious startups to market leaders, VolumeVault
                    scales with your goals. Start where you are and grow without
                    restrictions
                  </p>
                </div>
                <div className="img-content">
                  {/* <img src={ScalableIll} alt="" /> */}
                  <Lottie
                    lottieRef={scaleRef}
                    animationData={scalableAnimation}
                    autoplay={false}
                    loop={false}
                  />
                </div>
              </div>

              <div className="content-container content--6">
                <div className="img-content">
                  <img src={CandleIll} alt="" />
                </div>
              </div>
            </article>
          </main>
        </FadeUpAnimation>
      </div>
    </section>
  );
}

export default FeaturesSection;

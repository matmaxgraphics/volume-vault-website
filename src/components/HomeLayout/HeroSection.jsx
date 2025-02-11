import Logo from "../../assets/images/hero-illustration.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import FadeUpAnimation from "../Animations/FadeUpAnimation";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="section-flex max-width">
          <div className="text-description">
            <FadeUpAnimation>
              <h1>
                Dominate Solana, BNB, and <span>Base</span> Markets with
                unmatched volume boosts
              </h1>
              <p>
                Elevate your project beyond visibility to true market dominance.
                With VolumeVault, boost trading volume, ignite market buzz, and
                secure your competitive advantage today.
              </p>
              <button className="btn cta--btn">
                Start VolumeVault Bot{" "}
                <span>
                  <Icon icon="ri:arrow-right-up-line" className="arrow-icon" />
                </span>
              </button>
            </FadeUpAnimation>
          </div>
          <div className="img-container">
            <FadeUpAnimation>
              <img src={Logo} alt="" />
            </FadeUpAnimation>
          </div>
        </div>
      </section>

      <section className="benefit--small-section max-width">
        <FadeUpAnimation>
          <h5>Trending & Maximum Visibility</h5>
          <h3>
            An increase in transactions, new holders, and rising trading volume
            naturally elevates your project's visibility across top crypto
            platforms like Dextools, Dexscreener, Telegram buy bots, and more.
          </h3>
        </FadeUpAnimation>
      </section>
    </>
  );
}

export default HeroSection;

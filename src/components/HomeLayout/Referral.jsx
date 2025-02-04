import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ReferralIll from "../../assets/images/referral-illustration.png"

function Referral() {
  return (
    <section className="referral-section">
      <div className="referral-wrapper max-width">
        <main className="section-flex">
            <div className="text-description">
          <header>
            <h3 mb-8>VolumeVault Referrals</h3>
            <h3>Earn Big, Effortlessly</h3>
          </header>
          <h4>
            Share your unique referral link and earn a 10% commission on every
            package purchased by your referrals. The more referrals you bring,
            the more you earn. Turn your network into a steady income stream!
          </h4>

          <article className="referral--benefits">
            <div className="benefit--item">
              <span>
                <Icon icon="ri:robot-2-line" width="24" height="24" />
              </span>
              <p>
                Forget hold periods! Every time your referral buys a package,
                your commission is paid instantly and automatically
              </p>
            </div>
            <div className="benefit--item">
              <span>
                <Icon icon="ri:robot-2-line" width="24" height="24" />
              </span>
              <p>
                The more referrals you bring, the more you earn. Turn your
                network into a steady income stream!
              </p>
            </div>
            <div className="benefit--item">
              <span>
                <Icon icon="ri:robot-2-line" width="24" height="24" />
              </span>
              <p>
                Start sharing your referral link today and watch your earnings
                grow with VolumeVault.
              </p>
            </div>
          </article>
          <button className="btn">Join the referral program</button>
          </div>
          <div className="img-container">
        <img src={ReferralIll} alt="" />
          </div>
        </main>
      </div>
    </section>
  );
}

export default Referral;

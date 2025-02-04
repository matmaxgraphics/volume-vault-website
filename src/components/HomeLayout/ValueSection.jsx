import React from "react";

function ValueSection() {
  return (
    <section className="value-section">
      <div className="container max-width">
        <div className="section-flex">
          <article className="text-drscription">
            <h2>The Unfair Advantage You’ve Been Searching For</h2>
            <p>
              VolumeVault doesn’t just level the playing field, it tips it in
              your favor. While others struggle for visibility, liquidity, and
              community growth, you’ll rise above the competition
            </p>
            <h4>
              This isn’t just volume -{" "}
              <span>it’s visibility, growth, and dominance.</span>
            </h4>
          </article>

          <article className="img-container">
            <div className="value--item">
              <span>01</span>
              <p>Unmatched volume boosts that command attention.</p>
            </div>
            <div className="value--item">
              <span>02</span>
              <p>
                Enhanced trust and credibility as new holders flock to your
                project.
              </p>
            </div>
            <div className="value--item">
              <span>03</span>
              <p>
                A buzz-worthy presence that traders and investors can’t ignore.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;

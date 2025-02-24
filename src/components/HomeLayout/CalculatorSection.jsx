import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function calculateVolume(
  solPrice,
  bnbPrice,
  ethPrice,
  packagePrices,
  tradesPerMinute,
  durationMinutes,
  multiplier
) {
  // Calculate total package price in USD
  const totalPackageUSD =
    packagePrices.SOL * solPrice +
    packagePrices.BNB * bnbPrice +
    packagePrices.ETH * ethPrice;

  // Calculate total trades over the duration (24 hours = 1440 minutes)
  const totalTrades = tradesPerMinute * durationMinutes;

  // Calculate estimated volume in USD and apply multiplier
  const finalVolume = totalTrades * totalPackageUSD * multiplier;
  const inMillions = finalVolume / 1000000;

  return inMillions.toFixed(2) + "M";
}

const VolumeCalculator = () => {
  // Market prices for tokens (in USD)
  const [solPrice, setSolPrice] = useState(170);
  const [bnbPrice, setBnbPrice] = useState(300);
  const [ethPrice, setEthPrice] = useState(1200);

  // Token price multiplier (e.g., 1x, 2x, … up to 20x)
  const [multiplier, setMultiplier] = useState(1);

  const packages = {
    "Spark Vault": {
      prices: { SOL: 3, BNB: 1.06, ETH: 0.25 },
      tradesPerMinute: 14,
      icon: "ri:flag-fill",
      color: "spark-package",
    },
    "Ignite Vault": {
      prices: { SOL: 7, BNB: 2.46, ETH: 0.5 },
      tradesPerMinute: 18,
      icon: "ri:sparkling-2-fill",
      color: "ignite-package",
    },
    "Surge Vault": {
      prices: { SOL: 15, BNB: 5.28, ETH: 1 },
      tradesPerMinute: 22,
      icon: "ri:rocket-2-fill",
      color: "surge-package",
    },
    "Titan Vault": {
      prices: { SOL: 25, BNB: 8.81, ETH: 1.8 },
      tradesPerMinute: 26,
      icon: "ri:vip-crown-2-fill",
      color: "titan-package",
    },
    "Supreme Vault": {
      prices: { SOL: 50, BNB: 17.69, ETH: 3.6 },
      tradesPerMinute: 32,
      icon: "ri:medal-fill",
      color: "supreme-package",
    },
  };

  const [selectedPackage, setSelectedPackage] = useState("Spark Vault");
  const { prices, tradesPerMinute } = packages[selectedPackage];
  const durationMinutes = 1440; // Fixed duration of 24 hours

  const estimatedVolume = calculateVolume(
    solPrice,
    bnbPrice,
    ethPrice,
    prices,
    tradesPerMinute,
    durationMinutes,
    multiplier
  );

  // Also, calculate the total package price in USD for display purposes
  const totalPackageUSD = (
    prices.SOL * solPrice +
    prices.BNB * bnbPrice +
    prices.ETH * ethPrice
  ).toFixed(2);

  return (
    <section className="calculator-section">
      <div className="max-width">
        <div className="section-flex">
          <article className="text-description">
            <h2>Calculate Your Volume Potential</h2>
            <p className="">
              Discover your project's trading volume potential with VolumeVault!
              Use our interactive slider to customize your estimate and see the
              growth your project can achieve.
            </p>

            <p className="w-color-40">
              Note: The bot operates for approximately <span>24 hours</span>.
              Actual volume boosts and duration may vary depending on your
              token’s current market conditions.
            </p>
          </article>

          <article className="img-container">
            <div className="packages--selection">
              <p>Select Package:</p>
              <div className="packages--wrapper">
                {Object.keys(packages).map((pkg) => (
                  <button
                    key={pkg}
                    className={`package--item ${
                      selectedPackage === pkg ? `${packages[pkg].color}` : ""
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <Icon icon={packages[pkg].icon} /> {pkg}
                  </button>
                ))}
              </div>
            </div>

            <div className="prices--container">
              <article className="token--amount">
                <p className="sz-16">Token Amount:</p>
                <div className="token--wrapper">
                  <p className={packages[selectedPackage].color}>
                    <span>{prices.SOL}</span> SOL
                  </p>
                  <p className={packages[selectedPackage].color}>
                    <span>{prices.BNB}</span> BNB
                  </p>
                  <p className={packages[selectedPackage].color}>
                    <span>{prices.ETH}</span> ETH
                  </p>
                </div>
              </article>

              <article className="market--price">
                <p className="sz-16">Market Price:</p>
                <div className="token--wrapper">
                  <p>SOL - ${solPrice}</p>
                  <p>BNB - ${bnbPrice}</p>
                  <p>ETH - ${ethPrice}</p>
                </div>
              </article>
            </div>

            <div className="multiplier-slider">
              <label>Token Price Change Multiplier: </label>
              <span>{multiplier}x</span>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={multiplier}
                onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              />

              <div className="static-data">
                <span className={packages[selectedPackage].color}>1x</span>
                <span className={packages[selectedPackage].color}>20x</span>
              </div>
            </div>

            <div className="estimated--boost">
              <h3>${estimatedVolume}</h3>
              <p>Estimated Boosted Volume</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default VolumeCalculator;

import React, { useState } from "react";

// Calculation function
function calculateVolume(
  solPrice,
  bnbPrice,
  ethPrice,
  packagePrices,
  tradesPerMinute,
  durationMinutes,
  multiplier
) {
  // Validate inputs
  if (
    [
      solPrice,
      bnbPrice,
      ethPrice,
      packagePrices.SOL,
      packagePrices.BNB,
      packagePrices.ETH,
      tradesPerMinute,
      durationMinutes,
      multiplier,
    ].some((value) => isNaN(value))
  ) {
    return "Invalid input. Please enter valid numbers.";
  }

  // Calculate total package price in USD
  const totalPackageUSD =
    packagePrices.SOL * solPrice +
    packagePrices.BNB * bnbPrice +
    packagePrices.ETH * ethPrice;

  // Calculate total trades over the duration (24 hours = 1440 minutes)
  const totalTrades = tradesPerMinute * durationMinutes;

  // Calculate estimated volume in USD and apply multiplier
  const finalVolume = totalTrades * totalPackageUSD * multiplier;

  return finalVolume.toFixed(2);
}

const VolumeCalculator = () => {
  // Market prices for tokens (in USD)
  const [solPrice, setSolPrice] = useState(170);
  const [bnbPrice, setBnbPrice] = useState(300);
  const [ethPrice, setEthPrice] = useState(1200);

  // Token price multiplier (e.g., 1x, 2x, … up to 20x)
  const [multiplier, setMultiplier] = useState(1);

  // Package selection: Each package includes token amounts and trades per minute.
  const packages = {
    "Starter Booster": {
      prices: { SOL: 3, BNB: 1.06, ETH: 0.25 },
      tradesPerMinute: 14,
    },
    "Ignite Vault": {
      prices: { SOL: 7, BNB: 2.46, ETH: 0.5 },
      tradesPerMinute: 18,
    },
    "Surge Vault": {
      prices: { SOL: 15, BNB: 528, ETH: 1 },
      tradesPerMinute: 22,
    },
    "Titan Vault": {
      prices: { SOL: 25, BNB: 8.81, ETH: 1.8 },
      tradesPerMinute: 26,
    },
    "Supreme Vault": {
      prices: { SOL: 50, BNB: 17.69, ETH: 3.6 },
      tradesPerMinute: 32,
    },
  };

  const [selectedPackage, setSelectedPackage] = useState("Starter Booster");
  const { prices, tradesPerMinute } = packages[selectedPackage];
  const durationMinutes = 1440; // Fixed duration of 24 hours

  // Calculate the final estimated volume
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
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Volume Calculator</h2>

      {/* Package Selector */}
      <div>
        <label>Choose Package: </label>
        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          {Object.keys(packages).map((pkg) => (
            <option key={pkg} value={pkg}>
              {pkg}
            </option>
          ))}
        </select>
      </div>

      {/* Display Package Prices */}
      <div>
        <h3>Package Token Prices:</h3>
        <p>SOL: {prices.SOL}</p>
        <p>BNB: {prices.BNB}</p>
        <p>ETH: {prices.ETH}</p>
        <p>Total Package Price (USD): ${totalPackageUSD}</p>
      </div>

      {/* Market Price Inputs */}
      <div>
        <label>Solana Price (USD): </label>
        <input
          type="number"
          value={solPrice}
          onChange={(e) => setSolPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>BNB Price (USD): </label>
        <input
          type="number"
          value={bnbPrice}
          onChange={(e) => setBnbPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>ETH Price (USD): </label>
        <input
          type="number"
          value={ethPrice}
          onChange={(e) => setEthPrice(parseFloat(e.target.value))}
        />
      </div>

      {/* Multiplier Input */}
      <div>
        <label>Token Price Change Multiplier: </label>
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={multiplier}
          onChange={(e) => setMultiplier(parseFloat(e.target.value))}
        />
        <span>{multiplier}x</span>
      </div>

      {/* Display Estimated Volume */}
      <div>
        <h3>Estimated Boosted Volume: ${estimatedVolume}</h3>
      </div>
    </div>
  );
};

export default VolumeCalculator;

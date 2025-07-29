import React from 'react';

function Hero() {
    return (
<div className="container py-5">
  {/* Title Section */}
  <div className="row text-center mb-5">
    <div className="col">
      <h1 style={{ fontSize: "2.5rem" }}>Charges</h1>
      <h4 className="fs-5 mt-3" style={{ color: "#9b9b9b" }}>
        List of all charges and taxes
      </h4>
    </div>
  </div>

  {/* Charges Cards */}
  <div className="row text-center g-4">
    {/* Card 1 */}
    <div className="col-12 col-md-4 px-4">
      <img
        src="media/images/pricingEquity.svg"
        alt="Free Equity Delivery"
        className="mb-3 img-fluid"
        style={{ maxHeight: "100px" }}
      />
      <h2 className="fs-4 mb-3">Free equity delivery</h2>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
      </p>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-4 px-4">
      <img
        src="media/images/intradayTrades.svg"
        alt="Intraday and F&O Trades"
        className="mb-3 img-fluid"
        style={{ maxHeight: "100px" }}
      />
      <h2 className="fs-4 mb-3">Intraday and F&O trades</h2>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodities. Flat ₹20 on all option trades.
      </p>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-4 px-4">
      <img
        src="media/images/pricingEquity.svg"
        alt="Free Direct Mutual Funds"
        className="mb-3 img-fluid"
        style={{ maxHeight: "100px" }}
      />
      <h2 className="fs-4 mb-3">Free direct MF</h2>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
      </p>
    </div>
  </div>
</div>

      );
}

export default Hero;
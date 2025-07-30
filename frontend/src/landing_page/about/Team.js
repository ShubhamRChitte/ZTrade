import React from 'react';

function Team() {
    return ( 
        <div className="container py-5">
  <div className="row align-items-center" style={{ fontSize: "1.1rem", color: "#424242" }}>
    {/* Profile Image Section */}
    <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0 px-5">
      <img
        src="media/images/nithinKamath.jpg"
        alt="Nithin Kamath"
        className="mb-4 img-fluid"
        style={{ borderRadius: "100%", width: "65%", maxWidth: "300px" }}
      />
      <h5 className="mb-2">Nithin Kamath</h5>
      <h6 style={{ color: "#666" }}>Founder, CEO</h6>
    </div>

    {/* Bio Text Section */}
    <div className="col-12 col-lg-6 px-4 px-md-5">
      <h1 className="mb-4">People</h1>
      <p>
        Nithin bootstrapped and founded ZTrade in 2025 to overcome the hurdles he faced during his decade-long stint as a trader.
        Today, ZTrade has changed the landscape of the Indian broking industry.
      </p>

      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
      </p>

      <p>Playing basketball is his zen.</p>

      <p>
        Connect on{" "}
        <a href="#" className="text-decoration-none">Homepage</a> /{" "}
        <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
        <a href="#" className="text-decoration-none">Twitter</a>
      </p>
    </div>
  </div>
</div>

     );
}

export default Team;
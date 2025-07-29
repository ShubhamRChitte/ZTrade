import React from 'react';

function Hero() {
    return (  
<div className="container">
  {/* Header Section */}
  <div className="row text-center p-4 p-md-5 my-5">
    <div className="col">
      <h1 className="fs-3 fs-md-2">
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>
    </div>
  </div>

  {/* Two-column Content Section */}
  <div className="row border-top px-3 px-md-5 py-4" style={{ fontSize: "1.1rem", color: "#424242" }}>
    <div className="col-12 col-lg-6 mb-4 mb-lg-0 px-3 px-md-5">
      <p>
        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
        We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
      </p>

      <p>
        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
      </p>

      <p>
        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms,
        contributing over 15% of all Indian retail trading volumes.
      </p>
    </div>

    <div className="col-12 col-lg-6 px-3 px-md-5">
      <p>
        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
      </p>

      <p>
        <a href="#" className="text-decoration-none">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
      </p>

      <p>
        And yet, we are always up to something new every day. Catch up on the latest updates on our{" "}
        <a href="#" className="text-decoration-none">blog</a>, or see what the media is{" "}
        <a href="#" className="text-decoration-none">saying about us</a>, or learn more about our business and product{" "}
        <a href="#" className="text-decoration-none">philosophies</a>.
      </p>
    </div>
  </div>
</div>

    );
}

export default Hero;
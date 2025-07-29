import React from 'react';

function Education() {
    return (
<div className="container py-5">
  <div className="row align-items-center">
    {/* Image Column */}
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
      <img
        src="media/images/education.svg"
        className="img-fluid"
        alt="Education"
      />
    </div>

    {/* Spacer on large screens only */}
    <div className="d-none d-lg-block col-lg-2"></div>

    {/* Text Content */}
    <div className="col-12 col-lg-6">
      <h1 className="fs-2 mb-4">Free and open market education</h1>

      <div className="mb-5">
        <p>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
        <a href="#" className="text-decoration-none">
          Varsity <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>

      <div>
        <p>
          Trading Q&A, the most active trading and investment community for market-related queries.
        </p>
        <a href="#" className="text-decoration-none">
          Trading Q&A <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</div>

    );
}

export default Education;
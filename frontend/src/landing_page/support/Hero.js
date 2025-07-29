import React from 'react';

function Hero() {
    return ( 
    <section className='container-fluid Support_hero p-5 text-white'>
  <div className='d-flex justify-content-between align-items-center p-4'>
    <h3 className='fs-4'>Support Portal</h3>
    <a href='#' className='text-white text-decoration-underline'>Track tickets</a>
  </div>

  <div className='row ps-4'>
    <div className='col-12 col-lg-7'>
      <h1 className='fs-4 mb-4'>
        Search for an answer or browse help topics to create a ticket
      </h1>

      <div className="input-group mb-3" style={{ width: "90%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Eg: how do I activate F&O, why my order is getting rejected..."
        />
        <span className="input-group-text bg-white">
          <i className="fa-solid fa-magnifying-glass text-muted"></i>
        </span>
      </div>

      <div className="mb-3">
        <a href='#' className='me-4 text-white'>Track account opening</a>
        <a href='#' className='me-4 text-white'>Track segment activation</a>
        <a href='#' className='text-white'>Intraday margins</a>
      </div>
      <a href='#' className='text-white'>Kite user manual</a>
    </div>

    <div className='col-12 col-lg-5 mt-4 mt-lg-0'>
      <h1 className='fs-4'>Featured</h1>
      <ol className='ps-3'>
        <li className='mb-2'>
          <a href='#' className='text-white'>Quarterly Settlement of Funds - July 2025</a>
        </li>
        <li>
          <a href='#' className='text-white'>
            Exclusion of F&O contracts on 8 securities from August 29, 2025
          </a>
        </li>
      </ol>
    </div>
  </div>
</section>

     );
}

export default Hero;
import React from 'react';

function Pricing() {
    return ( 
        // <div className='container p-5'>
        //     <div className='row'>
        //         <div className='col-4'>
        //             <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
        //             <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
        //             <a href='#' style={{textDecoration:"none"}}>See pricing&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
        //         </div>
        //         <div className='col-2'></div>
        //         <div className='col-6'>
        //             <div className='row text-center'>
        //                 <div className='col-6 border p-4'>
        //                     <h1 className='mb-4'>₹0</h1>
        //                     <p>Free equity delivery and <br></br>
        //                     direct mutual funds</p>
        //                 </div>
        //                 <div className='col-6 p-4 border'>
        //                     <h1 className='mb-4'>₹20</h1>
        //                     <p>Intraday and F&O</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="container py-5">
  <div className="row align-items-center">
    {/* Text Column */}
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
      <h1 className="fs-2 mb-3">Unbeatable pricing</h1>
      <p>
        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
      </p>
      <a href="#" className="text-decoration-none">
        See pricing <i className="fa-solid fa-arrow-right ms-2"></i>
      </a>
    </div>

    {/* Spacer on large screens only */}
    <div className="d-none d-lg-block col-lg-2"></div>

    {/* Pricing Cards */}
    <div className="col-12 col-lg-6">
      <div className="row text-center g-3">
        <div className="col-12 col-md-6">
          <div className="border p-4 h-100">
            <h1 className="mb-3">₹0</h1>
            <p>
              Free equity delivery and <br />
              direct mutual funds
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="border p-4 h-100">
            <h1 className="mb-3">₹20</h1>
            <p>Intraday and F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}

export default Pricing;
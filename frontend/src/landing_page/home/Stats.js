import React from 'react';
function Stats() {
    return ( 
    //    <div className='container p-5'>
    //         <div className='row p-5'>
    //             <div className='col-6'>
    //                 <h1 className='fs-2 mb-5'>Trust with confidence</h1>
    //                 <h2 className='fs-4'>Customer first always</h2>
    //                 <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
    //                 <h2 className='fs-4'>No spam or gimmicks</h2>
    //                 <p className='text-muted'>No gimmicks,spam,"gamification",or annoying push notifications.High quality apps that use at your pace,the way you like.</p>
    //                 <h2 className='fs-4'>The Zerodha universe</h2>
    //                 <p className='text-muted'>Not just an app,but whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
    //                 <h2 className='fs-4'>Do better with money</h2>
    //                 <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilate transactions,but actively help you do better with your money.</p>
    //             </div>
    //             <div className='col-6 p-3 mt-1'>
    //                 <img src='media/images/ecosystem.png' alt='Ecosystem Img' style={{width:"90%"}}></img>
    //                 <div className='text-center'>
    //                     <a href='#' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
    //                     <a href='#' style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
    //                 </div>
    //             </div>
    //         </div>
    //    </div>


    <div className="container py-5">
  <div className="row align-items-center">
    {/* Left Content */}
    <div className="col-12 col-md-6 mb-5 mb-md-0">
      <h1 className="fs-2 mb-4">Trust with confidence</h1>

      <h2 className="fs-5">Customer first always</h2>
      <p className="text-muted mb-4">
        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
      </p>

      <h2 className="fs-5">No spam or gimmicks</h2>
      <p className="text-muted mb-4">
        No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.
      </p>

      <h2 className="fs-5">The Zerodha universe</h2>
      <p className="text-muted mb-4">
        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
      </p>

      <h2 className="fs-5">Do better with money</h2>
      <p className="text-muted">
        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
      </p>
    </div>

    {/* Right Image and Links */}
    <div className="col-12 col-md-6 text-center">
      <img
        src="media/images/ecosystem.png"
        alt="Ecosystem Img"
        className="img-fluid mb-4"
        style={{ maxWidth: "90%" }}
      />
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        <a href="#" className="text-decoration-none">
          Explore our products <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
        <a href="#" className="text-decoration-none">
          Try Kite demo <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</div>

     );
}

export default Stats;
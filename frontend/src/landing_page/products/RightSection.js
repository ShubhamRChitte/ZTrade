import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return (  
<div className='container'>
  <div className='row p-3 align-items-center'>

    {/* Text Column */}
    <div className='col-12 col-md-5 mt-4 text-center text-md-start order-2 order-md-1'>
      <h1 className='mt-4'>{productName}</h1>
      <p className='mt-4' style={{ color: "#424242", fontSize: "1.1rem" }}>
        {productDescription}
      </p>
      <a
        href={learnMore}
        style={{ textDecoration: "none", marginLeft: "1rem", fontSize: "1.1rem" }}
      >
        Learn more <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>

    {/* Spacer Column (only on desktop) */}
    <div className='col-12 col-md-1 d-none d-md-block'></div>

    {/* Image Column */}
    <div className='col-12 col-md-6 mt-4 text-center order-1 order-md-2'>
      <img src={imageURL} className='img-fluid' alt='Product' />
    </div>

  </div>
</div>


    );
}

export default RightSection;
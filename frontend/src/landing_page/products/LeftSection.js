import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (  
<div className='container'>
  <div className='row p-3'>
    <div className='col-12 col-md-7 mt-5'>
      <img src={imageURL} alt='Product' className="img-fluid" />
    </div>
    <div className='col-12 col-md-1 d-none d-md-block'></div>
    <div className='col-12 col-md-4 mt-5'>
      <h1 className='mt-5'>{productName}</h1>
      <p className='mt-4' style={{ color: "#424242", fontSize: "1.1rem" }}>
        {productDescription}
      </p>
      <div>
        <a href={tryDemo} style={{ textDecoration: "none", fontSize: "1.1rem" }}>
          Try demo <i className="fa-solid fa-arrow-right"></i>
        </a>
        <a
          href={learnMore}
          style={{ textDecoration: "none", marginLeft: "3rem", fontSize: "1.1rem" }}
        >
          Learn more <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className='mt-4'>
        <a href={googlePlay} style={{ textDecoration: "none" }}>
          <img src='media/images/googlePlayBadge.svg' alt='Google Play' />
        </a>
        <a href={appStore} style={{ textDecoration: "none", marginLeft: "2rem" }}>
          <img src='media/images/appstoreBadge.svg' alt='App Store' />
        </a>
      </div>
    </div>
  </div>
</div>


    );
}

export default LeftSection;
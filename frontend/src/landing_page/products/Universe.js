import React from 'react';
import {Link} from 'react-router-dom';

function Universe() {
    return ( 
<div className='container'>
  <div className='text-center text-muted mb-4'>
    <h1 className='mb-3'>The ZTrade Universe</h1>
    <p style={{ fontSize: "1.1rem" }}>
      Extend your trading and investment experience even further with our partner platforms
    </p>
  </div>

  <div className='row text-center text-muted'>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/zerodhaFundhouse.png' className='img-fluid' alt='Fundhouse' />
      <p>
        Our asset management venture that is creating simple and transparent index
        funds to help you save for your goals
      </p>
    </div>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/sensibullLogo.svg' className='img-fluid' alt='Sensibull' />
      <p>
        Options trading platform that lets you create strategies, analyze positions,
        and examine data points like open interest, FII/DII, and more.
      </p>
    </div>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/tijori.svg' className='img-fluid' alt='Tijori' />
      <p>
        Investment research platform that offers detailed insights on stocks,
        sectors, supply chains, and more.
      </p>
    </div>
  </div>

  <div className='row text-center text-muted mb-4'>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/streakLogo.png' className='img-fluid' alt='Streak' />
      <p>
        Systematic trading platform that allows you to create and backtest
        strategies without coding.
      </p>
    </div>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/smallcaseLogo.png' className='img-fluid' alt='Smallcase' />
      <p>
        Thematic investing platform that helps you invest in diversified
        baskets of stocks or ETFs.
      </p>
    </div>
    <div className='col-12 col-md-4 mb-4 Product_name'>
      <img src='media/images/dittoLogo.png' className='img-fluid' alt='Ditto' />
      <p>
        Personalized advice on life and health insurance. No spam and no mis-selling.
      </p>
    </div>
  </div>

  <div className='text-center mb-5'>
    <Link
      className="btn btn-primary p-2 fs-5"
      to="/signup"
      style={{ width: "250px" }}
    >
      Sign up for free
    </Link>
  </div>
</div>

     );
}

export default Universe;




















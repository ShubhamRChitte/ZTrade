import React from 'react';
import {Link} from 'react-router-dom';

function OpenAccount() {
    return ( 
<div className='container p-5 mb-5'>
  <div className='row text-center'>
    <h1 className='mt-5 mb-4'>Open a ZTrade account</h1>
    <p className='text-muted mb-4'>
      Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades
    </p>
    <Link
      className='btn btn-primary p-2 fs-5 mb-5'
      to='/signup'
      style={{ width: '25%', margin: '0 auto' }}
    >
      Signup Now
    </Link>
  </div>
</div>
    
     );
}

export default OpenAccount;
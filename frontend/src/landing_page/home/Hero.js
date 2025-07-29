import React from 'react';
import {Link} from 'react-router-dom';


function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds and more</p>
                <Link className="btn btn-primary p-2 fs-5 mb-5" to="/signup" style={{width:"25%",margin:"0 auto"}} >Signup Now</Link>
            </div>
        </div>
     );
}

export default Hero;
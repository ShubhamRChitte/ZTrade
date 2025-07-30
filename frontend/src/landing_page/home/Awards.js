import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                
                <div className="col-12 col-md-6 p-4">
                <img
                    src="media/images/largestBroker.svg"
                    className="img-fluid"
                    alt="Largest Broker"
                />
                </div>

                
                <div className="col-12 col-md-6 mt-4 mt-md-0 p-4">
                <h1 className="h3 h-md-1">Largest Stock broker in India</h1>
                <p className="mb-4">
                    2+ million ZTrade clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>

                <div className="row">
                    <div className="col-6">
                    <ul>
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Government</li>
                    </ul>
                    </div>
                </div>

                <div className="mt-4">
                    <img
                    src="media/images/pressLogos.png"
                    className="img-fluid"
                    alt="Press Logos"
                    />
                </div>
                </div>
            </div>
        </div>

     );
}

export default Awards;
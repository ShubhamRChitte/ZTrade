import React from 'react';
import {Link} from "react-router-dom";
function Footer() {
    return ( 
       <footer className='border-top' style={{ backgroundColor: "#fbfbfb" }}>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-3'>
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <i className="fas fa-chart-line logo-icon me-2"></i>
                <span className="logo-text">
                  <span className="z-letter">Z</span><span className="trade-text">Trade</span>
                </span>
              </Link>
              <p style={{ fontSize: "13px", color: "#666" }} className='mt-4'>&copy; 2010 - 2025, ZTrade Broking Ltd.<br />All rights reserved.</p>
              <p className='Footer_icon border-bottom'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin mb-4"></i>
              </p>
              <p className='Footer_icon'>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </p>
            </div>

            {/* Footer Links */}
            <div className='col Footer_links'>
              <p className='fs-5 fw-semibold' style={{ color: "#424242" }}>Account</p>
              <a href=''>Open demat account</a><br />
              <a href=''>NRI demat account</a><br />
              <a href=''>Commodity</a><br />
              <a href=''>Dematerialisation</a><br />
              <a href=''>Fund transfer</a><br />
              <a href=''>MTF</a><br />
              <a href=''>Referral program</a><br />
            </div>

            <div className='col Footer_links'>
              <p className='fs-5 fw-semibold' style={{ color: "#424242" }}>Support</p>
              <a href=''>Contact us</a><br />
              <a href=''>Support portal</a><br />
              <a href=''>How to file a complaint?</a><br />
              <a href=''>Status of your complaints</a><br />
              <a href=''>Bulletin</a><br />
              <a href=''>Circular</a><br />
              <a href=''>Z-Connect blog</a><br />
              <a href=''>Downloads</a><br />
            </div>

            <div className='col Footer_links'>
              <p className='fs-5 fw-semibold' style={{ color: "#424242" }}>Company</p>
              <a href=''>About</a><br />
              <a href=''>Philosophy</a><br />
              <a href=''>Press & media</a><br />
              <a href=''>Careers</a><br />
              <a href=''>ZTrade Cares (CSR)</a><br />
              <a href=''>ZTrade.tech</a><br />
              <a href=''>Open source</a><br />
            </div>

            <div className='col Footer_links'>
              <p className='fs-5 fw-semibold' style={{ color: "#424242" }}>Quick links</p>
              <a href=''>Upcoming IPOs</a><br />
              <a href=''>Brokerage charges</a><br />
              <a href=''>Market holidays</a><br />
              <a href=''>Economic calendar</a><br />
              <a href=''>Calculators</a><br />
              <a href=''>Markets</a><br />
              <a href=''>Sectors</a><br />
            </div>
          </div>

          {/* Legal & Policy Texts */}
          <div className='row mt-5' style={{ fontSize: "12px", color: "#9b9b9b" }}>
            <p>
              ZTrade Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633...
              For any complaints write to <a href='' style={{ textDecoration: "none" }}>complaints@ztrade.com</a>,
              DP: <a href='' style={{ textDecoration: "none" }}>dp@ztrade.com</a>.
            </p>
            <p>
              Procedure to file complaint on <a href='' style={{ textDecoration: "none" }}>SEBI SCORES</a>...
            </p>
            <p><a href='' style={{ textDecoration: "none" }}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
            <p>Investments in securities market are subject to market risks...</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins...</p>
            <p>
              "Prevent unauthorised transactions... If someone claims to be part of ZTrade and offers tips,
              <a href='' style={{ textDecoration: "none" }}> create a ticket here</a>.
            </p>
          </div>

          {/* Bottom Legal Links */}
          <div className='Footer_links_bottom text-center mb-3'>
            <a href=''>NSE </a>
            <a href=''>BSE </a>
            <a href=''>MCX </a>
            <a href=''>Terms & conditions </a>
            <a href=''>Policies & procedures </a>
            <a href=''>Privacy policy </a>
            <a href=''>Disclosure </a>
            <a href=''>For investor's attention </a>
            <a href=''>Investor charter</a>
          </div>
        </div>
      </footer>
     );
}

export default Footer;
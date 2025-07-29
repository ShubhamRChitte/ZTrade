import React from 'react';

function Brokerage() {
    return (
       <div className='container'>
  <h1 className='text-center fs-5 mb-4'>
    <a href='' style={{ textDecoration: 'none' }}>
      Calculate your costs upfront
    </a>{' '}
    using our brokerage calculator
  </h1>

  <h1 className='fs-3'>Charges explained</h1>

  <div className='row mt-4'>
    {/* Left Column */}
    <div className='col-12 col-md-6 p-3' style={{ color: '#424242' }}>
      <p className='Pricing_title'>Securities/Commodities transaction tax</p>
      <p className='Pricing_desp'>
        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
        <br />
        <br />
        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
      </p>

      <p className='Pricing_title'>Transaction/Turnover Charges</p>
      <p className='Pricing_desp'>
        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
        <br />
        <br />
        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.
        <br />
        <br />
        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore.
        <br />
        <br />
        For group A, B, and other non-exclusive scrips: ₹375 per crore (flat rate) w.e.f. Dec 1, 2022.
        <br />
        <br />
        M, MT, TS, MS groups: ₹275 per crore of gross turnover.
      </p>

      <p className='Pricing_title'>Call & trade</p>
      <p className='Pricing_desp'>
        ₹50 per order via dealer including auto square-off orders.
      </p>

      <p className='Pricing_title'>Stamp charges</p>
      <p className='Pricing_desp'>
        As per Indian Stamp Act of 1899 for stock exchanges and depositories.
      </p>

      <p className='Pricing_title'>NRI brokerage charges</p>
      <ul className='Pricing_desp'>
        <li>₹100 per order for F&O</li>
        <li>0.5% or ₹100 for equity (non-PIS)</li>
        <li>0.5% or ₹200 for equity (PIS)</li>
        <li>₹500 + GST as AMC annually</li>
      </ul>

      <p className='Pricing_title'>Account with debit balance</p>
      <p className='Pricing_desp'>
        ₹40 per executed order if account is in debit.
      </p>

      <p className='Pricing_title'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
      <ul className='Pricing_desp'>
        <li>Equity and Futures - ₹10 per crore + GST</li>
        <li>Options - ₹50 per crore + GST</li>
        <li>Currency - ₹0.05/lakh (Futures), ₹2/lakh (Options) + GST</li>
      </ul>

      <p className='Pricing_title'>Margin Trading Facility (MTF)</p>
      <ul className='Pricing_desp'>
        <li>Interest: 0.04%/day (₹40/lakh)</li>
        <li>Brokerage: 0.3% or ₹20</li>
        <li>Pledge: ₹15 + GST per ISIN</li>
      </ul>
    </div>

    {/* Right Column */}
    <div className='col-12 col-md-6 p-3'>
      <p className='Pricing_title'>GST</p>
      <p className='Pricing_desp'>
        18% of (brokerage + SEBI charges + transaction charges)
      </p>

      <p className='Pricing_title'>SEBI Charges</p>
      <p className='Pricing_desp'>₹10 per crore + GST</p>

      <p className='Pricing_title'>DP (Depository participant) charges</p>
      <p className='Pricing_desp'>
        ₹15.34 per scrip on selling (₹3.5 CDSL + ₹9.5 Zerodha + GST)
        <br />
        <br />
        ₹0.25 discount for female holders & mutual fund/bond debits.
      </p>

      <p className='Pricing_title'>Pledging charges</p>
      <p className='Pricing_desp'>₹30 + GST per ISIN</p>

      <p className='Pricing_title'>AMC (Account maintenance charges)</p>
      <p className='Pricing_desp'>
        BSDA: Free if value &lt; ₹4L. <a href=''>Click here</a>
        <br />
        <br />
        Non-BSDA: ₹300/year + GST, charged quarterly. <a href=''>Click here</a>
      </p>

      <p className='Pricing_title'>Corporate action order charges</p>
      <p className='Pricing_desp'>₹20 + GST for OFS/buyback/delisting</p>

      <p className='Pricing_title'>Off-market transfer charges</p>
      <p className='Pricing_desp'>₹25 per transaction</p>

      <p className='Pricing_title'>Physical CMR request</p>
      <p className='Pricing_desp'>
        First: Free <br />
        Subsequent: ₹20 + ₹100 (courier) + GST
      </p>

      <p className='Pricing_title'>Payment gateway charges</p>
      <p className='Pricing_desp'>₹9 + GST (Free for UPI transfers)</p>

      <p className='Pricing_title'>Delayed Payment Charges</p>
      <p className='Pricing_desp'>
        18% yearly or 0.05% daily on debit. <a href=''>Learn more</a>
      </p>

      <p className='Pricing_title'>Trading using 3-in-1 account with block functionality</p>
      <ul className='Pricing_desp'>
        <li>Delivery & MTF: 0.5% per order</li>
        <li>Intraday: 0.05% per order</li>
      </ul>
    </div>
  </div>

  {/* Disclaimer */}
  <div className='mb-5'>
    <p className='Pricing_title'>Disclaimer</p>
    <p className='Pricing_desp'>
      ₹0.01 minimum for delivery trades. Physical notes ₹20 + courier. All statutory charges at actuals. Brokerage applies to expired/exercised options, corporate clients, and physical settlements. Retail only get free delivery.
    </p>
  </div>

  {/* Account Opening Table */}
  <div>
    <h1 className='fs-4 mb-4'>Charges for account opening</h1>
    <div className='table-responsive'>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <span style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '5px' }}>
                free
              </span>
            </td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>
              <span style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '5px' }}>
                free
              </span>
            </td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Value-Added Services Table */}
  <div className='mt-5 mb-5'>
    <h1 className='fs-4 mb-4'>Charges for optional value added services</h1>
    <div className='table-responsive'>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249 / 2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Historical: 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

      );
}

export default Brokerage;
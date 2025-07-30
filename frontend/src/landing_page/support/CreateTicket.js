import React from 'react';

function CreateTicket() {
    return ( 
<div className='container'>
  <div className='row p-5'>
    <h3 className='text-muted fs-5 mb-5'>
      To create a ticket, select a relevant topic
    </h3>

    {/* Section 1 */}
    {[
      {
        icon: 'fa-circle-plus',
        title: 'Account Opening',
        links: [
          'Resident individual',
          'Minor',
          'Non Resident Indian (NRI)',
          'Company, Partnership, HUF and LLP',
          'Glossary',
        ],
      },
      {
        icon: 'fa-user',
        iconType: 'regular',
        title: 'Your ZTrade Account',
        links: [
          'Your Profile',
          'Account modification',
          'Client Master Report (CMR) and Depository',
          'Participant (DP)',
          'Nomination',
          'Transfer and conversion of securities',
        ],
      },
      {
        icon: 'fa-chart-simple',
        title: 'Kite',
        links: [
          'IPO',
          'Trading FAQs',
          'Margin Trading Facility (MTF) and Margins',
          'Charts and orders',
          'Alerts and Nudges',
          'General',
        ],
      },
    ].map((item, idx) => (
      <div className='col-12 col-md-4 Support_link p-2' key={idx}>
        <h3 className='fs-5 mb-3'>
          <i className={`${item.iconType === 'regular' ? 'fa-regular' : 'fa-solid'} ${item.icon}`}></i>&nbsp;
          {item.title}
        </h3>
        {item.links.map((link, i) => (
          <a href='#' key={i}>
            {link}
            <br />
          </a>
        ))}
      </div>
    ))}
  </div>

  {/* Section 2 */}
  <div className='row p-5 mb-5'>
    {[
      {
        icon: 'fa-briefcase',
        title: 'Funds',
        links: ['Add money', 'Withdraw money', 'Add bank accounts', 'eMandates'],
      },
      {
        icon: 'fa-circle-notch',
        title: 'Console',
        links: ['Portfolio', 'Corporate actions', 'Funds statement', 'Reports', 'Profile', 'Segments'],
      },
      {
        icon: 'fa-circle',
        iconType: 'regular',
        title: 'Coin',
        links: [
          'Mutual funds',
          'National Pension Scheme (NPS)',
          'Fixed Deposit (FD)',
          'Features on Coin',
          'Payments and Orders',
          'General',
        ],
      },
    ].map((item, idx) => (
      <div className='col-12 col-md-4 Support_link p-2' key={idx}>
        <h3 className='fs-5 mb-3'>
          <i className={`${item.iconType === 'regular' ? 'fa-regular' : 'fa-solid'} ${item.icon}`}></i>&nbsp;
          {item.title}
        </h3>
        {item.links.map((link, i) => (
          <a href='#' key={i}>
            {link}
            <br />
          </a>
        ))}
      </div>
    ))}
  </div>
</div>

     );
}

export default CreateTicket;
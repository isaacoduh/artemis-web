import React from 'react';

const AccountCard = ({ currency, balance }) => {
  const cardStyles = {
    ngn: {
      backgroundColor: '#009688', // Green
      color: '#fff', // White text
    },
    gbp: {
      backgroundColor: '#f39c12', // Orange
      color: '#fff',
    },
    usd: {
      backgroundColor: '#3498db', // Blue
      color: '#fff',
    },
  };

  let currencyStyle = cardStyles[currency.toLowerCase()] || {};
  return (
    <div className='card mb-3' style={currencyStyle}>
      <div className='card-body'>
        <h5 className='card-title'>{currency} Account</h5>
        <small>
          <p>Available Balance: </p>
        </small>
        <h4 className='card-text'>{balance}</h4>
      </div>
    </div>
  );
};

export default AccountCard;

import React from 'react';

const AccountCard = ({ currency, balance }) => {
  return (
    <div className='card mb-3 account-card'>
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

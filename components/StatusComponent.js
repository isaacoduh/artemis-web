import React from 'react';

const StatusComponent = ({ status }) => {
  let backgroundColor = ''; // Default background color for 'pending'
  let textColor = '';

  if (status === 'successful') {
    backgroundColor = '#DCFCE6';
    textColor = '#45AE82';
  } else if (status === 'failed') {
    backgroundColor = '#FDE2E1';
    textColor = '#F15958';
  } else {
    backgroundColor = '#FEF9C2';
    textColor = '#F0C131';
  }

  const statusStyle = {
    backgroundColor: backgroundColor,
    padding: '5px 10px',
    color: textColor,
    borderRadius: '5px',
    textTransform: 'capitalize',
  };

  return <div style={statusStyle}>{status}</div>;
};

export default StatusComponent;

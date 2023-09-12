import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p style={{color: '#cf6c18', fontSize: '1.5em', marginBottom: '10%'}}>{value}</p>
      <span style={{color: '#332f79', fontSize: '1em'}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;

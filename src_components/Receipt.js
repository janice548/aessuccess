import React from 'react';
import './Receipt.css';

function Receipt() {
  const summaryInfo = {
    summaryId: 'SUM12345',
    date: '2023-10-27',
    items: ['Project Completion', 'Skill Learned']
  };

  return (
    <div className="receipt-container">
      <h2>Achievement Summary</h2>
      <p>Summary ID: {summaryInfo.summaryId}</p>
      <p>Date: {summaryInfo.date}</p>
      <p>Accomplishments: {summaryInfo.items.join(', ')}</p>
    </div>
  );
}

export default Receipt;

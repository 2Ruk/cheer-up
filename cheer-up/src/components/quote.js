import React from 'react';

const Quote = ({ quote }) => (
  <div >
    <h3>같이, 힘내요 </h3>
    <p className="fade-in-box" key={quote}>{quote}</p>
    <h3>잠시, 쉬어가요</h3>
  </div>
);

export default Quote;
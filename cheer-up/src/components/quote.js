import React from 'react';

const Quote = ({ quote }) => (
  <div >
    <h3>같이, 힘내요 </h3>
    <p className="fade-in-box" key={quote}>{quote}</p>
  </div>
);

export default Quote;
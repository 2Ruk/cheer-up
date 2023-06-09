import React from 'react';
import TimerIcon from '@mui/icons-material/Timer';

const Quote = ({ quote }) => (
  <div >
    <h3>같이, 힘내요      <TimerIcon /> </h3>
    <p className="fade-in-box shadow" key={quote}>{quote}</p>
    <h3>잠시, 쉬어가요</h3>
  </div>
);

export default Quote;
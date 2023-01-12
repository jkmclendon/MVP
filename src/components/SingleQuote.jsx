import React from 'react';
import axios from 'axios';

const SingleQuote = ({quote}) => {
  return (
    <div className="single-quote">
      <h3>{quote.quote}</h3>
    </div>
  )
}

export default SingleQuote;
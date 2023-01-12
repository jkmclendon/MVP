import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Paper} from '@mui/material';

const RandomQuote = ({view}) => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    if (view !== 'main') {
      return;
    }
    axios.get('/random')
      .then(response => {
        setQuote(response.data);
      })
  }, [view]);

  return (
    <Paper
      elevation={12}
      className="random-quote-container"
      sx={{"background-color": "#DDD0C8"}}
    >
      <div className="random-quote">
        <b>{quote.quote}</b>
      </div>
      <div className="break"></div>
      <div className="random-quote-info">
        -{quote.book_title}
      </div>
    </ Paper>
  )

  // return (
  //   <div className="random-quote-container">
  //     <div className="random-quote">
  //       <b>{quote.quote}</b>
  //     </div>
  //     <div className="break"></div>
  //     <div className="random-quote-info">
  //       -{quote.book_title}
  //     </div>
  //   </div>
  // )
};

export default RandomQuote;
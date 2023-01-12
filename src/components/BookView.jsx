import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SingleQuote from './SingleQuote.jsx';
import { Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const BookView = ({book, view, setView}) => {
  if (view !== 'book') {
    return null;
  }

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get(`/getQuotes/${book.id}`)
      .then (response => {
        setQuotes(response.data);
      })
  }, [])

  return (
    <div className="modal-content">
      <div className="modal-header">
      <IconButton aria-label="close" onClick={() => { setView('main'); }}>
        <CloseIcon />
      </IconButton>
      </div>
      <div className="break"></div>
      <div className="quote-panel">
        <div class="quote-breakdown">
          <img src={book.cover_url} width="100%"></img><br></br>
          <Paper sx={{"background-color": "#DDD0C8", margin: "1vh"}} elevation={12}>
            You have {quotes.length} quote{quotes.length > 1 ? 's' : quotes.length === 0 ? 's' : ''} saved.
          </ Paper>
        </div>
        <div class="quote-nav">
          <IconButton aria-label="add" onClick={() => { setView('addQuote'); }}>
            Add Quote
            <AddIcon />
          </IconButton>
        </div>
        <div class="quote-list">
          {quotes.map((quote, i) => {
            return (
              <Paper key={i} sx={{"background-color": "#DDD0C8", margin: "1vh", width: "60%"}} elevation={12}>
                {quote.quote}
              </ Paper>
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default BookView;
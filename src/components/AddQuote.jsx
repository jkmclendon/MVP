import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

const addQuote = ({book, view, setView}) => {
  if (view !== 'addQuote') {
    return null;
  }

  const [quote, setQuote] = useState('');

  const sendQuote = () => {
    let request_body = {
      book_id: book.id ? book.id : null,
      book_title: book.title,
      quote: quote
    }

    axios.post('/addQuote', request_body)
      .then(() => {
        setView('book');
      })
  }

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
        </div>
        <div class="quote-nav">
          <IconButton aria-label="cancel" onClick={() => { setView('book'); }}>
            Cancel
            <CancelIcon />
          </IconButton>
        </div>
        <div class="quote-list">
          <label for="add-quote-text">Save a quote from {book.title}</label><br></br>
          <textarea idname="add-quote-text" rows={4} cols={50} value={quote} onChange={(e) => {
            e.preventDefault();
            setQuote(e.target.value);
          }}></textarea>
          <button className="add-quote-button" onClick={(e) => {
            e.preventDefault();
            sendQuote();
          }}>Save Quote</button>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="add-quote">
  //     <img src={book.cover_url}></img>
      // <label for="add-quote-text">Save a quote from {book.title}</label><br></br>
      // <textarea idname="add-quote-text" rows={4} cols={50} value={quote} onChange={(e) => {
      //   e.preventDefault();
      //   setQuote(e.target.value);
      // }}></textarea>
      // <button className="add-quote-button" onClick={(e) => {
      //   e.preventDefault();
      //   sendQuote();
      // }}>Save Quote</button>
  //   </div>
  // )

}

export default addQuote;
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const SearchItem = ({book, setBook, setView}) => {
  return (
    <div className="search-item" onClick={() => {
      axios.post('/addBook', {
        data: book
      })
        .then((response) => {
          let bookWithId = {id: response.data.id, ...book}
          setBook(bookWithId);
          setView('addQuote');
        });
    }}>
      <img className="cover-img" src={book.cover_url}></img>
      <h3>{book.title}</h3>
      <h5>{book.author}</h5>
      <h6>{book.published_year}</h6>
    </div>
  )
}

export default SearchItem;
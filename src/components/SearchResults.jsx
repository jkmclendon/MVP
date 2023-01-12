import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SearchItem from './SearchItem.jsx';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

const SearchResults = ({searchResults, view, setView, setBook}) => {
  if (view !== 'search') {
    return null;
  }

  return (
    <div className="modal-content">
      <div className="modal-header">
      <IconButton aria-label="close" onClick={() => { setView('main'); }}>
        <CloseIcon />
      </IconButton>
      </div>
      <div className="search-view">
      <ImageList sx={{ width: "100%", height: "80%", "align-self": "end" }}>
      <ImageListItem key="Subheader" cols={3}>
      </ ImageListItem >
      {searchResults.map((book, i) => (
        <ImageListItem key={i} sx={{width: "248", height: "248"}} onClick={() => {
          axios.post('/addBook', {
            data: book
          })
            .then((response) => {
              let bookWithId = {id: response.data.id, ...book}
              setBook(bookWithId);
              setView('addQuote');
            });
        }}>
          <img style={{width: "30vw", "background-image": "url(./images/fallback.jpeg)"}}
            src={book.cover_url}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar style={{width: "30vw"}}
            title={book.title}
            subtitle={book.author}
          />
        </ImageListItem>))}
        </ImageList>
      </div>
    </div>
  )
}

export default SearchResults;
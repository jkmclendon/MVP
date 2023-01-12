import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import InputAdornment from '@mui/material/InputAdornment';


const SearchBar = ({view, setView, searchResults, setSearchResults}) => {
  if (view !== 'main') {
    return null;
  }

  const [term, setTerm] = useState('');

  const search = () => {
    axios.get(`http://openlibrary.org/search.json?title=${term}&limit=20`)
      .then(response => {
        let resultsToSet = [];
        let docs = response.data.docs.sort((a, b) => b.edition_count - a.edition_count);

        docs.map(book => {
          if (!book.cover_edition_key) {
            return;
          }

          let bookInfo = {
            title: book.title,
            author: book.author_name,
            published_year: book.first_publish_year,
            cover_url: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`,
            olid: book.cover_edition_key
          }
          resultsToSet.push(bookInfo);
        })

        setSearchResults(resultsToSet);
      })
      .then(() => {
        setView('search')
      });
  };

  return (
    <AppBar style={{position: "sticky"}} className="app-bar">
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          e.preventDefault();
          setTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            search();
          }
        }}
        label="Add a book"
        variant="filled"
        placeholder="Search"
        size="large"
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton aria-label="search" onClick={search}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </AppBar>
  )

  // return (
  //   <div className="search-bar">
  //     <input type="text" value={term} onChange={(e) => {
  //       e.preventDefault();
  //       setTerm(e.target.value);
  //     }}></input>
  //     <button className="search-button" onClick={search}>Search</button>
  //   </div>
  // )
}

export default SearchBar;
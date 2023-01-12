import { createRoot } from "react-dom/client";
import React from 'react';
import {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import RandomQuote from './components/RandomQuote.jsx';
import YourBooks from './components/YourBooks.jsx';
import BookView from './components/BookView.jsx';
import AddQuote from './components/AddQuote.jsx';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import './styles/styles.css'

const root = createRoot(document.getElementById("root"));
const theme = createMuiTheme({
  palette: {
    contrastThreshold: 100,
    type: 'light',
    primary: {
      main: '#DDD0C8',
    },
    secondary: {
      main: '#323232',
    },
  },
});

const App = () => {

  const [view, setView] = useState('main');
  const [book, setBook] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  let modalStyle = {display: view === 'main' ? 'none' : 'flex'}

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
      <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} setView={setView} view={view}/>
      <RandomQuote view={view}/>
      <YourBooks view={view} setView={setView} setBook={setBook}/>
      <div className='modal' style={{display: view === 'main' ? 'none' : 'flex'}}>
        <SearchResults searchResults={searchResults} view={view} setView={setView} setBook={setBook}/>
        <BookView book={book} view={view} setView={setView} />
        <AddQuote book={book} view={view} setView={setView} />
      </div>
      </ThemeProvider>
    </div>
  )
}

root.render(<App />);
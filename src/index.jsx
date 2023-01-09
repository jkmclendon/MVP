import { createRoot } from "react-dom/client";
import React from 'react';
import {useState, useEffect} from 'react';
import RandomQuote from './components/RandomQuote.jsx';
import SearchBar from './components/SearchBar.jsx';
import YourBooks from './components/YourBooks.jsx';
import AddQuote from './components/AddQuote.jsx';

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {

  const [view, setView] = useState('main');
  const [book, setBook] = useState('');

  return (
    <div className="app">
      <SearchBar setView={setView}/>
      <RandomQuote />
      <YourBooks setView={setView}/>
      <AddQuote view={view} setView={setView} />
    </div>
  )
}

root.render(<App />);
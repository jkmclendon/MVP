import React from 'react';
import BookItem from './BookItem.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

const YourBooks = ({view, setView, setBook}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/getBooks')
      .then(response => {setBooks(response.data.reverse())});
  }, [view])

  return (
    <ImageList sx={{ width: "100%", height: "85%", display: "flex", "justify-content": "flex-start" }}>
      <ImageListItem key="Subheader" cols={5}>
      </ImageListItem>
      {books.map(book => (
        <ImageListItem key={book.cover_url} sx={{width: "33%"}} onClick={() => {
          setBook(book);
          setView('book');
        }}>
          <img style={{width: "22vw"}}
            src={book.cover_url}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar style={{width: "22vw"}}
            title={book.title}
            subtitle={book.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
  // return (
  //   <div className='your-books'>
  //     {books.map((book, i) => {
  //       return (
  //         <BookItem book={book} setView={setView} setBook={setBook} key={i}/>
  //       )
  //     })}
  //   </div>
  // )
}

export default YourBooks;
import React from 'react';

const BookItem = ({book, setView, setBook}) => {
  return (
    <div className="book-item" onClick={() => {
      setBook(book);
      setView('book');
    }}>
      <img className="cover-img" src={book.cover_url}></img>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <h5 className="book-author">{book.author}</h5>
        <h6 className="published-year">{book.published_year}</h6><br></br><br></br><br></br>
        <div className="num-of-quotes">
          You have {book.num_of_quotes} quote{book.num_of_quotes > 1 ? s : book.num_of_quotes === 0 ? 's' : ''} saved.
        </div>
      </div>
    </div>
  )
}

export default BookItem;
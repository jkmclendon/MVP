import express from 'express';
import getRandomQuote from './controllers/getRandomQuote.js';
import getBooks from './controllers/getBooks.js';
import getQuotes from './controllers/getQuotes.js';
import addQuote from './controllers/addQuote.js';
import addBook from './controllers/addBook.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/random', getRandomQuote);
app.get('/getBooks', getBooks);
app.get('/getQuotes/:bookId', getQuotes);
app.post('/addQuote', addQuote);
app.post('/addBook', addBook);


app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
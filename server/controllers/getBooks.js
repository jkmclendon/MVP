import sql from '../../db/db.js';

const getBooks = async (req, res, next) => {
  let books = await sql`SELECT * FROM books;`;
  res.send(books);
}

export default getBooks;
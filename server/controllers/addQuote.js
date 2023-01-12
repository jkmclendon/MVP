import sql from '../../db/db.js';

const addQuote = async (req, res, next) => {
  let book_id = req.body.book_id;
  let book_title = req.body.book_title;
  let quote = req.body.quote;

  await sql`INSERT INTO quotes (book_id, book_title, quote) VALUES (
    ${book_id},
    ${book_title},
    ${quote}
  );`;

  await sql`UPDATE books SET num_of_quotes = num_of_quotes + 1 WHERE id = ${book_id};`;

  res.status(201).send();
}

export default addQuote;
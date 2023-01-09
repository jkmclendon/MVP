import sql from '../../db/db.js';

const addQuote = async (req, res, next) => {
  let book_id = req.body.book_id;
  let book_title = req.body.book_title;
  let quote = req.body.quote;
  let page = req.body.page;
  let character = req.body.character;

  await sql`INSERT INTO quotes (book_id, book_title, quote, page, character) VALUES (
    ${book_id},
    ${book_title},
    ${quote},
    ${page},
    ${character}
  );`;

  res.status(201).send();
}

export default addQuote;
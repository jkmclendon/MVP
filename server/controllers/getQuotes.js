import sql from '../../db/db.js';

const getQuotes = async (req, res, next) => {
  let book_id = req.params.bookId;
  let results = await sql`SELECT * FROM  quotes WHERE book_id = ${book_id}`;
  res.status(200).send(results);
}

export default getQuotes;
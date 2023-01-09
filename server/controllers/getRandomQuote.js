import sql from '../../db/db.js';

const getRandomQuote = async (req, res, next) => {
  let quote = await sql`SELECT * FROM quotes ORDER BY random() LIMIT 1;`;
  res.status(200).send(quote[0]);
}

export default getRandomQuote;
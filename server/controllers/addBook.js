import sql from '../../db/db.js';

const addBook = async (req, res, next) => {
  let title = req.body.title;
  let cover_url = req.body.cover_url;
  let isbn = Number(req.body.isbn);
  let author = req.body.author;
  let published_year = Number(req.body.published_year);

  await sql`INSERT INTO books (title, cover_url, isbn, author, published_year) VALUES (
    ${title},
    ${cover_url},
    ${isbn},
    ${author},
    ${published_year}
  );`;

  res.status(201).send();
}

export default addBook;
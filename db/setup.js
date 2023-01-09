import sql from './db.js';

await sql`CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  cover_url VARCHAR(300),
  isbn INT,
  author VARCHAR(50),
  published_year INT
);`;

await sql`CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  book_id INT,
  book_title VARCHAR(250),
  quote VARCHAR(1000),
  page INT,
  character VARCHAR(50)
);`

sql.end();
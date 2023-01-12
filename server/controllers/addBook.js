import sql from '../../db/db.js';
import download from 'image-downloader';
import path from 'path';
import fs from 'fs';
import downloadImage from './download.js';

const addBook = async (req, res, next) => {
  console.log(req.body);
  let title = req.body.data.title;
  let cover_url = req.body.data.cover_url;
  let olid = req.body.data.olid;
  let author = req.body.data.author[0] ? req.body.data.author[0] : 'unknown';
  let published_year = Number(req.body.data.published_year);

  // let download_options = {
  //   url: cover_url,
  //   filepath: `/${olid}.jpg`
  // }

  // await downloadImage(download_options);

  let id = await sql`INSERT INTO books (title, cover_url, olid, author, published_year, num_of_quotes) VALUES (
    ${title},
    ${cover_url},
    ${olid},
    ${author},
    ${published_year},
    0
  ) RETURNING id;`;



  res.status(201).send(id[0]);
}

export default addBook;
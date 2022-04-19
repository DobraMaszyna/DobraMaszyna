import clientPromise from '../../../lib/mongodb';

import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

var mv = require('mv');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      let oldPath = files.image.filepath;
      let newPath = `./public/img/${fields.name}.jpeg`;

      db.collection('products').insertOne({
        price: fields.price,
        priceBefore: 0,
        name: fields.name,
        producer: fields.producer,
        popularity: 0,
        category: fields.category,
        subcategory: fields.subcategory,
      });

      mv(oldPath, newPath, function (err) {});
      res.status(200).json();
    });
  });
};

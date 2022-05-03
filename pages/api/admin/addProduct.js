import clientPromise from '../../../lib/mongodb';
import { IncomingForm } from 'formidable';

let mv = require('mv');

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
      console.log(fields);
      let oldPath = files.image.filepath;
      let newPath = `./public/productImages/${fields.name}.jpeg`;

      db.collection('products').insertOne({
        price: fields.price,
        priceBefore: 0,
        name: fields.name,
        producer: fields.producer,
        popularity: 0,
        category: fields.category,
        subcategory: fields.subcategory,
        equipment: fields.equipment,
        props: fields.props,
      });

      mv(oldPath, newPath, function (err) {});
      res.status(200).json();
    });
  });
};

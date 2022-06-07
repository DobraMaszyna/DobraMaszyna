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

      let oldPath = files.image.filepath;
      let newPath = `./public/productImages/${fields.name}.jpeg`;

      db.collection('products').insertOne({
        price: parseInt(fields.price),
        priceBefore: 0,
        name: fields.name,
        producer: fields.producer,
        popularity: 0,
        category: {
          parent: fields.parent,
          category: fields.category,
          child: fields.child,
        },
        equipment: fields.equipment.split(';'),
        params: JSON.parse(fields.params),
        video: fields.video,
      });

      mv(oldPath, newPath, function (err) {
        console.log(err);
      });
      console.log('2');
      res.status(200).json();
    });
  });
};

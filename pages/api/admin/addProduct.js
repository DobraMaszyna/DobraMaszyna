import clientPromise from '../../../lib/mongodb';

import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

var mv = require('mv');

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('bmd_db');

  if (req.method !== 'POST') {
    res.status(400).json({ error: 'Bad method' });
    return;
  }

  try {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        console.log(fields, files);
        console.log(files.image.filepath);
        var oldPath = files.image.filepath;
        var newPath = `./public/uploads/${files.image.originalFilename}`;
        mv(oldPath, newPath, function (err) {});
        res.status(200).json({ fields, files });
      });
    });
    res.status(200).json(response);
  } catch {
    res.status(400).json({ error: 'Wrong request' });
  }
}

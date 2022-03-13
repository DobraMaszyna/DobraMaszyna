import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('bmd_db');

  if (req.method === 'POST') {
    if (req.body.id) {
      const response = await db
        .collection('products')
        .deleteOne({ _id: ObjectId(req.body.id) });
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Id required' });
    }
  } else {
    res.status(400).json({ error: 'Bad request method' });
  }
}

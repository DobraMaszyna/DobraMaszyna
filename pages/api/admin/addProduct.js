import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;

  const db = client.db('bmd_db');
  if (req.method === 'POST') {
    if (req.body.title && req.body.description) {
      const response = await db.collection('products').insertOne(req.body);
      res.status(200).json(response);
    }
  } else {
    res.status(400).json({ error: 'Bad request method' });
  }
}

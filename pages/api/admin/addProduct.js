import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('bmd_db');

  if (req.method === 'POST') {
    res.status(400).json({ error: 'Bad method' });
    return;
  }

  if (
    req.body.product &&
    req.body.producer &&
    req.body.description &&
    req.body.image &&
    req.body.price
  ) {
    const response = await db.collection('products').insertOne(req.body);
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
}

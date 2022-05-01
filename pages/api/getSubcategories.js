import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { category } = req.query;

    const client = await clientPromise;
    const db = await client.db('bmd_db');
    const categories = await db.collection('categories');

    const data = await categories
      .find({ parentName: { $eq: category } })
      .toArray();
    const result = JSON.parse(JSON.stringify(data));

    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 400;
    res.end({ error: 'Bad request method' });
  }
};

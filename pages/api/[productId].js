import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { productId } = req.query;

  try {
    const client = await clientPromise;
    const db = await client.db('bmd_db');

    const data = await db
      .collection('products')
      .find({ _id: ObjectId(productId) })
      .toArray();

    res.status(200).json(data);
  } catch {
    res.status(400).json("Product does't exit");
  }
}

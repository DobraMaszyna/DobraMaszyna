import { ObjectId } from 'mongodb';
import clientPromise from '../mongodb';

const getProductInfo = async (productId) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const data = await db
    .collection('products')
    .find({ _id: ObjectId(productId) })
    .toArray();

  return JSON.parse(JSON.stringify(data))[0];
};

export default getProductInfo;

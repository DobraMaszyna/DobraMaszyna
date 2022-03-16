import clientPromise from '../../lib/mongodb';

const getProducts = async () => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const data = await db.collection('products').find({}).toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
};

export default getProducts;

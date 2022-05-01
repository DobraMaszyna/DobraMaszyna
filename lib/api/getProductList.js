import clientPromise from '../../lib/mongodb';

const getProducts = async (category, count) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');

  const data = await products
    .find({ category: { $eq: category } })
    .limit(count)
    .toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
};

export default getProducts;

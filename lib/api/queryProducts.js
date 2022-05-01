import clientPromise from '../../lib/mongodb';

const queryProducts = async (searchQuery, count) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');
  const producers = db.collection('producers');

  const productsData = await products
    .find({ name: { $regex: searchQuery, $options: 'i' } })
    .limit(parseInt(count))
    .toArray();

  const producersData = await producers
    .find({ name: { $regex: searchQuery, $options: 'i' } })
    .limit(parseInt(count))
    .toArray();

  const data = { products: productsData, producers: producersData };
  return data;
};

export default queryProducts;

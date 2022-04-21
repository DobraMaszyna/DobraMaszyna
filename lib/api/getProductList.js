import clientPromise from '../../lib/mongodb';

const getProducts = async (category, count, searchQuery) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');

  const data = await products
    .find({
      category: { $eq: category },
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { producer: { $regex: searchQuery, $options: 'i' } },
      ],
    })
    .limit(count)
    .toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
};

export default getProducts;
